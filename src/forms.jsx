const DEFAULT_FORM_CONFIG = {
  submitUrl: 'https://ebj-forms.tim-dee.workers.dev/submit',
  turnstileSiteKey: '0x4AAAAAADEnLcMfd6_YEWY6',
  maxAttachmentBytes: 10 * 1024 * 1024,
  maxTotalBytes: 20 * 1024 * 1024,
  requestTimeoutMs: 20000,
  retryAttempts: 3,
  retryBackoffMs: 1000,
};

let formConfigPromise;

function getFormConfig() {
  if (!formConfigPromise) {
    formConfigPromise = fetch('/form-config.json', { cache: 'no-store' })
      .then(response => {
        if (!response.ok) throw new Error(`Form config ${response.status}`);
        return response.json();
      })
      .catch(error => {
        console.warn('Using default form configuration:', error);
        return { default: DEFAULT_FORM_CONFIG, roles: {} };
      });
  }
  return formConfigPromise;
}

function mergeFormConfig(config, formKey) {
  const defaults = { ...DEFAULT_FORM_CONFIG, ...(config?.default || {}) };
  const roleConfig = formKey && config?.roles?.[formKey] ? config.roles[formKey] : {};
  return { ...defaults, ...roleConfig };
}

function formatBytes(bytes) {
  if (!Number.isFinite(bytes)) return '';
  const units = ['B', 'KB', 'MB', 'GB'];
  const magnitude = Math.min(Math.floor(Math.log(Math.max(bytes, 1)) / Math.log(1024)), units.length - 1);
  const value = bytes / 1024 ** magnitude;
  return `${value.toFixed(value >= 10 || magnitude === 0 ? 0 : 1)} ${units[magnitude]}`;
}

function validateFormFiles(form, settings) {
  const maxAttachmentBytes = Number(settings.maxAttachmentBytes) || 0;
  const maxTotalBytes = Number(settings.maxTotalBytes) || 0;
  let totalBytes = 0;
  const oversized = [];

  form.querySelectorAll('input[type="file"]').forEach(input => {
    Array.from(input.files || []).forEach(file => {
      totalBytes += file.size;
      if (maxAttachmentBytes && file.size > maxAttachmentBytes) {
        oversized.push(`${file.name} (${formatBytes(file.size)})`);
      }
    });
  });

  if (oversized.length) {
    return {
      valid: false,
      message: `Each file must be ${formatBytes(maxAttachmentBytes)} or less. Please replace: ${oversized.join(', ')}.`,
    };
  }

  if (maxTotalBytes && totalBytes > maxTotalBytes) {
    return {
      valid: false,
      message: `Combined attachments must be ${formatBytes(maxTotalBytes)} or less. Your current selection totals ${formatBytes(totalBytes)}.`,
    };
  }

  return { valid: true };
}

function TurnstileWidget({ siteKey, onToken }) {
  const ref = React.useRef(null);
  const widgetId = React.useRef(null);

  React.useEffect(() => {
    if (!siteKey || !ref.current) return undefined;

    let cancelled = false;
    let intervalId = 0;

    const render = () => {
      if (cancelled || widgetId.current || !window.turnstile || !ref.current) return;
      widgetId.current = window.turnstile.render(ref.current, {
        sitekey: siteKey,
        callback: token => onToken(token || ''),
        'expired-callback': () => onToken(''),
        'error-callback': () => onToken(''),
      });
    };

    render();
    if (!widgetId.current) {
      intervalId = window.setInterval(render, 300);
    }

    return () => {
      cancelled = true;
      if (intervalId) window.clearInterval(intervalId);
      if (widgetId.current && window.turnstile) {
        window.turnstile.remove(widgetId.current);
      }
      widgetId.current = null;
    };
  }, [onToken, siteKey]);

  if (!siteKey) return null;

  return (
    <div className="turnstile-row">
      <div ref={ref}></div>
    </div>
  );
}

function useManagedForm({ formKey, successMessage, errorMessage, submittingMessage }) {
  const [status, setStatus] = React.useState({ message: '', type: '' });
  const [submitting, setSubmitting] = React.useState(false);
  const [settings, setSettings] = React.useState(DEFAULT_FORM_CONFIG);
  const [turnstileToken, setTurnstileToken] = React.useState('');

  React.useEffect(() => {
    let active = true;
    getFormConfig().then(config => {
      if (active) setSettings(mergeFormConfig(config, formKey));
    });
    return () => {
      active = false;
    };
  }, [formKey]);

  const submitForm = React.useCallback(async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const config = await getFormConfig();
    const currentSettings = mergeFormConfig(config, formKey);
    const endpoint = currentSettings.submitUrl;

    if (!endpoint) {
      setStatus({ message: errorMessage, type: 'error' });
      return;
    }

    if (currentSettings.turnstileSiteKey && !turnstileToken) {
      setStatus({ message: 'Please complete the verification check before submitting.', type: 'error' });
      return;
    }

    const validation = validateFormFiles(form, currentSettings);
    if (!validation.valid) {
      setStatus({ message: validation.message, type: 'error' });
      return;
    }

    const attempts = Number(currentSettings.retryAttempts) || 1;
    const timeoutMs = Number(currentSettings.requestTimeoutMs) || 20000;
    const retryBackoffMs = Number(currentSettings.retryBackoffMs) || 750;
    const formData = new FormData(form);
    if (turnstileToken) {
      formData.set('cf-turnstile-response', turnstileToken);
    }

    setSubmitting(true);
    setStatus({ message: submittingMessage, type: 'info' });

    for (let attempt = 0; attempt < attempts; attempt += 1) {
      const controller = new AbortController();
      const timer = window.setTimeout(() => controller.abort(), timeoutMs);
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' },
          signal: controller.signal,
        });

        if (!response.ok) {
          let detail = '';
          try {
            detail = (await response.json()).error || '';
          } catch {
            detail = '';
          }
          throw new Error(detail || `Submission failed with ${response.status}`);
        }

        form.reset();
        setTurnstileToken('');
        if (window.turnstile) {
          window.turnstile.reset();
        }
        setStatus({ message: successMessage, type: 'success' });
        setSubmitting(false);
        return;
      } catch (error) {
        const canRetry = attempt < attempts - 1;
        if (!canRetry) {
          console.error('Form submission failed:', error);
          setStatus({ message: errorMessage, type: 'error' });
          setSubmitting(false);
          return;
        }
        await new Promise(resolve => window.setTimeout(resolve, retryBackoffMs * 2 ** attempt));
      } finally {
        window.clearTimeout(timer);
      }
    }
  }, [errorMessage, formKey, submittingMessage, successMessage, turnstileToken]);

  return {
    submitForm,
    status,
    submitting,
    Turnstile: () => (
      <TurnstileWidget
        siteKey={settings.turnstileSiteKey}
        onToken={setTurnstileToken}
      />
    ),
  };
}

Object.assign(window, { useManagedForm, formatFormBytes: formatBytes });

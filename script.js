(() => {
  const { pathname, search, hash } = window.location;
  if (/\/index\.html$/.test(pathname)) {
    const redirectPath = pathname.replace(/index\.html$/, '');
    const normalizedPath = redirectPath || '/';
    const target = normalizedPath + (search || '') + (hash || '');
    window.location.replace(target);
    return;
  }
})();

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const fetchWithTimeout = async (url, options = {}, timeoutMs = 15000) => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
};

const shouldRetryStatus = status => status === 408 || status === 429 || (status >= 500 && status < 600);

const mergeFormSettings = (config, key) => {
  if (!config) return null;
  const defaults = config.default || {};
  if (!key) return { ...defaults };
  const roleSettings = config.roles && config.roles[key] ? config.roles[key] : null;
  return roleSettings ? { ...defaults, ...roleSettings } : { ...defaults };
};

const sanitizeEndpoint = (rawValue, allowedOrigins) => {
  if (!rawValue) return null;
  try {
    const parsed = new URL(rawValue, window.location.origin);
    if (allowedOrigins && allowedOrigins.size && !allowedOrigins.has(parsed.origin)) {
      console.warn(`Blocked form submission to untrusted origin: ${parsed.origin}`);
      return null;
    }
    return parsed.toString();
  } catch (error) {
    console.warn('Invalid submission endpoint provided:', error);
    return null;
  }
};

const formatBytes = bytes => {
  if (!Number.isFinite(bytes)) return '';
  if (bytes === 0) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB'];
  const magnitude = Math.floor(Math.log(bytes) / Math.log(1024));
  const size = bytes / 1024 ** magnitude;
  return `${size.toFixed(size > 10 ? 0 : 1)} ${units[magnitude]}`;
};

const createFormDataFromEntries = entries => {
  const formData = new FormData();
  entries.forEach(([key, value]) => {
    if (value instanceof File) {
      formData.append(key, value, value.name);
    } else {
      formData.append(key, value);
    }
  });
  return formData;
};

document.addEventListener('DOMContentLoaded', () => {
  initSite().catch(error => {
    console.error('Initialization error', error);
  });
});

async function initSite() {
  setupNavigation();
  setupSmoothScroll();
  const config = await loadFormConfig();
  setupApplicationForms(config);
}

function setupNavigation() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#navbar');
  const logo = document.querySelector('.logo');
  if (!toggle || !nav) return;
  toggle.setAttribute('aria-expanded', 'false');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (logo) {
      logo.classList.toggle('hidden', open);
    }
  });
}

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', event => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

async function loadFormConfig() {
  try {
    const response = await fetch('/form-config.json', { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`Status ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.warn('Falling back to inline form settings:', error);
    return null;
  }
}

function setupApplicationForms(config) {
  const params = new URLSearchParams(window.location.search);
  let messageParamHandled = false;

  document.querySelectorAll('.application-form').forEach(form => {
    const formKey = form.dataset.formKey || null;
    const settings = mergeFormSettings(config, formKey);
    const statusEl = form.querySelector('.form-status');
    const submitButton = form.querySelector('button[type="submit"]');
    const originalSubmitLabel = submitButton ? submitButton.textContent : '';
    const submittingLabel = form.dataset.submittingLabel || 'Submitting...';

    const defaultSuccess =
      'Thank you for applying! We appreciate all applications; however, only those selected for an interview will be contacted.';
    const defaultError =
      'Something went wrong. Please email your resume and cover letter to talents@ecobrandjp.com.';

    const successMessage =
      form.dataset.successMessage || settings?.successMessage || defaultSuccess;
    const errorMessage =
      form.dataset.errorMessage || settings?.errorMessage || defaultError;
    const submittingMessage =
      form.dataset.submittingMessage || settings?.submittingMessage || 'Submitting your application...';

    const allowedOrigins = new Set([window.location.origin]);
    (settings?.allowedOrigins || []).forEach(origin => {
      try {
        allowedOrigins.add(new URL(origin, window.location.origin).origin);
      } catch (error) {
        console.warn('Invalid allowedOrigins entry in form settings:', origin, error);
      }
    });

    if (settings?.submitUrl) {
      form.action = settings.submitUrl;
      try {
        allowedOrigins.add(new URL(settings.submitUrl, window.location.origin).origin);
      } catch (error) {
        console.warn('Invalid submitUrl in form settings:', error);
      }
    }

    const ajaxEndpoint = sanitizeEndpoint(
      settings?.ajaxSubmitUrl || settings?.submitUrl || form.dataset.ajaxEndpoint,
      allowedOrigins
    );

    const maxAttachmentBytes = Number(settings?.maxAttachmentBytes) || null;
    const maxTotalBytes = Number(settings?.maxTotalBytes) || null;
    const requestTimeoutMs = Number(settings?.requestTimeoutMs) || 20000;
    const retryAttempts = Number(settings?.retryAttempts) || 3;
    const retryBackoffMs = Number(settings?.retryBackoffMs) || 750;

    const guidanceEl = form.querySelector('.form-upload-guidance');
    if (guidanceEl && (maxAttachmentBytes || maxTotalBytes)) {
      const parts = [];
      if (maxAttachmentBytes) {
        parts.push(`max ${formatBytes(maxAttachmentBytes)} per file`);
      }
      if (maxTotalBytes) {
        parts.push(`max ${formatBytes(maxTotalBytes)} total`);
      }
      guidanceEl.textContent = `File guidelines: ${parts.join(', ')}.`;
    }

    const showStatus = (message, variant) => {
      if (!statusEl) return;
      statusEl.textContent = message;
      statusEl.classList.remove('success', 'error', 'info');
      if (variant) {
        statusEl.classList.add(variant);
      }
    };

    const resetSubmittingState = () => {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalSubmitLabel;
      }
    };

    const setSubmittingState = () => {
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = submittingLabel;
      }
      showStatus(submittingMessage, 'info');
    };

    const validateFiles = () => {
      if (!maxAttachmentBytes && !maxTotalBytes) {
        return { valid: true, message: null };
      }
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
      return { valid: true, message: null };
    };

    const restructureAttachments = formData => {
      const attachmentInputs = Array.from(
        form.querySelectorAll('input[type="file"][data-attachment-label]')
      );
      if (!attachmentInputs.length || !formData) return;

      const collected = [];
      const fieldsToClear = new Set(['attachments[]', 'attachment']);

      attachmentInputs.forEach(input => {
        const originalName = (input.getAttribute('name') || '').trim();
        if (originalName) {
          fieldsToClear.add(originalName);
        }

        Array.from(input.files || []).forEach((file, index) => {
          const label = (input.dataset.attachmentLabel || '').trim();
          const includeIndex = input.files.length > 1 ? ` (${index + 1})` : '';
          const sanitizedLabel = label ? `${label}${includeIndex} - ${file.name}` : file.name;
          collected.push({ file, sanitizedLabel });
        });
      });

      if (!collected.length) return;

      collected.forEach((_, index) => {
        if (index > 0) {
          fieldsToClear.add(`attachment-${index + 1}`);
          fieldsToClear.add(`attachment_${index + 1}`);
        }
      });

      fieldsToClear.forEach(field => {
        while (formData.has(field)) {
          formData.delete(field);
        }
      });

      collected.forEach((item, index) => {
        const alias = index === 0 ? 'attachment' : `attachment-${index + 1}`;
        formData.append(alias, item.file, item.sanitizedLabel);
      });
    };

    if ('onformdata' in form) {
      form.addEventListener('formdata', event => {
        restructureAttachments(event.formData);
      });
    }

    const submitWithRetry = async entries => {
      for (let attempt = 0; attempt < retryAttempts; attempt += 1) {
        const attemptData = createFormDataFromEntries(entries);
        try {
          const response = await fetchWithTimeout(
            ajaxEndpoint,
            {
              method: 'POST',
              body: attemptData,
              headers: { Accept: 'application/json' },
              credentials: 'omit',
            },
            requestTimeoutMs
          );

          if (!response.ok) {
            if (shouldRetryStatus(response.status)) {
              const retryableError = new Error('retryable-status');
              retryableError.status = response.status;
              throw retryableError;
            }
            const nonRetryableError = new Error('non-retryable-status');
            nonRetryableError.status = response.status;
            throw nonRetryableError;
          }

          return response;
        } catch (error) {
          const retryable =
            error.name === 'AbortError' ||
            error.name === 'TypeError' ||
            error.message === 'retryable-status' ||
            (typeof error.status === 'number' && shouldRetryStatus(error.status));

          if (!retryable || attempt === retryAttempts - 1) {
            throw error;
          }

          const backoffDelay = retryBackoffMs * 2 ** attempt;
          await wait(backoffDelay);
        }
      }

      throw new Error('Unable to submit form after retries');
    };

    form.addEventListener('submit', async event => {
      const validation = validateFiles();
      if (!validation.valid) {
        event.preventDefault();
        showStatus(validation.message, 'error');
        resetSubmittingState();
        return;
      }

      if (!ajaxEndpoint) {
        setSubmittingState();
        return;
      }

      event.preventDefault();
      setSubmittingState();

      try {
        const formData = new FormData(form);
        restructureAttachments(formData);
        const entries = Array.from(formData.entries());
        await submitWithRetry(entries);
        form.reset();
        showStatus(successMessage, 'success');
      } catch (error) {
        console.error('Form submission failed', error);
        showStatus(errorMessage, 'error');
      } finally {
        resetSubmittingState();
      }
    });

    if (!messageParamHandled) {
      let messageKey = null;
      if (params.get('submitted') === 'true') {
        messageKey = 'submitted';
        showStatus(successMessage, 'success');
      } else if (params.get('error') === 'true') {
        messageKey = 'error';
        showStatus(errorMessage, 'error');
      }

      if (messageKey) {
        const url = new URL(window.location.href);
        url.searchParams.delete(messageKey);
        const newUrl = `${url.pathname}${url.search ? `?${url.searchParams.toString()}` : ''}${url.hash}`;
        window.history.replaceState(null, '', newUrl);
        messageParamHandled = true;
      }
    }
  });
}

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

// script.js
// Add JavaScript for minor interactivity if needed.

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#navbar');
  const logo = document.querySelector('.logo');
  if (toggle && nav) {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (logo) {
        logo.classList.toggle('hidden', open);
      }
    });
  }

  // Smooth scroll for anchor links on internal navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const ensureSameOriginUrl = (pathValue, attributeName) => {
    if (!pathValue) return null;
    try {
      const parsedUrl = new URL(pathValue, window.location.href);
      if (parsedUrl.origin !== window.location.origin) {
        console.warn(`Blocked ${attributeName} redirect to external origin: ${parsedUrl.origin}`);
        return null;
      }
      return parsedUrl.toString();
    } catch (error) {
      console.warn(`Invalid ${attributeName} redirect path:`, error);
      return null;
    }
  };

  const params = new URLSearchParams(window.location.search);
  let messageParamHandled = false;

  document.querySelectorAll('.application-form').forEach(applicationForm => {
    const statusEl = applicationForm.querySelector('.form-status');
    const submitButton = applicationForm.querySelector('button[type="submit"]');
    const ajaxEndpoint = applicationForm.dataset.ajaxEndpoint;
    const successMessage =
      applicationForm.dataset.successMessage ||
      'Thank you for applying! We appreciate all applications; however, only those selected for an interview will be contacted.';
    const errorEmail = applicationForm.dataset.errorEmail || 'talents@ecobrandjp.com';
    const errorMessage =
      applicationForm.dataset.errorMessage ||
      `Something went wrong. Please email your resume and cover letter to ${errorEmail}.`;

    const nextInput = applicationForm.querySelector('input[name="_next"][data-next-path]');
    if (nextInput && nextInput.dataset.nextPath) {
      const sanitizedNext = ensureSameOriginUrl(nextInput.dataset.nextPath, 'success');
      if (sanitizedNext) {
        nextInput.value = sanitizedNext;
      }
    }

    const errorInput = applicationForm.querySelector('input[name="_error"][data-error-path]');
    if (errorInput && errorInput.dataset.errorPath) {
      const sanitizedError = ensureSameOriginUrl(errorInput.dataset.errorPath, 'error');
      if (sanitizedError) {
        errorInput.value = sanitizedError;
      }
    }

    if (!messageParamHandled) {
      let messageParamDisplayed = null;
      if (params.get('submitted') === 'true') {
        messageParamDisplayed = 'submitted';
        if (statusEl) {
          statusEl.textContent = successMessage;
          statusEl.classList.add('success');
          statusEl.classList.remove('error');
        }
      } else if (params.get('error') === 'true') {
        messageParamDisplayed = 'error';
        if (statusEl) {
          statusEl.textContent = errorMessage;
          statusEl.classList.add('error');
          statusEl.classList.remove('success');
        }
      }

      if (messageParamDisplayed) {
        const url = new URL(window.location.href);
        url.searchParams.delete(messageParamDisplayed);
        const newUrl = `${url.pathname}${url.search ? `?${url.searchParams.toString()}` : ''}${url.hash}`;
        window.history.replaceState(null, '', newUrl);
        messageParamHandled = true;
      }
    }

    let sanitizedAjaxEndpoint = null;
    if (ajaxEndpoint) {
      try {
        const parsedEndpoint = new URL(ajaxEndpoint, window.location.origin);
        const allowedOrigins = new Set([window.location.origin, 'https://formspree.io', 'https://formsubmit.co']);
        if (!allowedOrigins.has(parsedEndpoint.origin)) {
          console.warn(`Blocked form submission to untrusted endpoint: ${parsedEndpoint.origin}`);
        } else {
          sanitizedAjaxEndpoint = parsedEndpoint.toString();
        }
      } catch (error) {
        console.warn('Invalid AJAX endpoint on application form:', error);
      }
    }

    if (sanitizedAjaxEndpoint) {
      applicationForm.addEventListener('submit', async event => {
        event.preventDefault();
        if (!submitButton) return;

        submitButton.disabled = true;
        const originalLabel = submitButton.textContent;
        submitButton.textContent = 'Submitting...';
        if (statusEl) {
          statusEl.textContent = 'Submitting your application...';
          statusEl.classList.remove('success', 'error');
        }

        try {
          const formData = new FormData(applicationForm);
          const response = await fetch(sanitizedAjaxEndpoint, {
            method: 'POST',
            body: formData,
            headers: {
              Accept: 'application/json',
            },
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          applicationForm.reset();
          if (statusEl) {
            statusEl.textContent = successMessage;
            statusEl.classList.add('success');
            statusEl.classList.remove('error');
          }
        } catch (error) {
          if (statusEl) {
            statusEl.textContent = errorMessage;
            statusEl.classList.add('error');
            statusEl.classList.remove('success');
          }
        } finally {
          submitButton.disabled = false;
          submitButton.textContent = originalLabel;
        }
      });
    } else if (submitButton) {
      applicationForm.addEventListener('submit', () => {
        submitButton.disabled = true;
        submitButton.textContent = 'Submitting...';
        if (statusEl) {
          statusEl.textContent = 'Submitting your application...';
          statusEl.classList.remove('success', 'error');
        }
      });
    }
  });
});

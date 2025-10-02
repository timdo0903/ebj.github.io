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

  const applicationForm = document.querySelector('#inventory-logistics-application-form');
  if (applicationForm) {
    const statusEl = applicationForm.querySelector('.form-status');
    const submitButton = applicationForm.querySelector('button[type="submit"]');
    const ajaxEndpoint = applicationForm.dataset.ajaxEndpoint;
    const successMessage =
      'Thank you for applying! We appreciate all applications; however, only those selected for an interview will be contacted.';
    const errorMessage =
      'Something went wrong. Please email your resume and cover letter to tim@ecobrandjp.com.';

    const nextInput = applicationForm.querySelector('input[name="_next"][data-next-path]');
    if (nextInput && nextInput.dataset.nextPath) {
      const nextUrl = new URL(nextInput.dataset.nextPath, window.location.href);
      nextInput.value = nextUrl.toString();
    }

    const errorInput = applicationForm.querySelector('input[name="_error"][data-error-path]');
    if (errorInput && errorInput.dataset.errorPath) {
      const errorUrl = new URL(errorInput.dataset.errorPath, window.location.href);
      errorInput.value = errorUrl.toString();
    }

    const params = new URLSearchParams(window.location.search);
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
    }

    if (ajaxEndpoint) {
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
          const response = await fetch(ajaxEndpoint, {
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
          }
        } catch (error) {
          if (statusEl) {
            statusEl.textContent = errorMessage;
            statusEl.classList.add('error');
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
  }
});

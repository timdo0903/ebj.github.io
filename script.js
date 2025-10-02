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
    const endpoint = applicationForm.dataset.ajaxEndpoint || applicationForm.action;

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
        const response = await fetch(endpoint, {
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
          statusEl.textContent =
            'Thank you for applying! We appreciate all applications; however, only those selected for an interview will be contacted.';
          statusEl.classList.add('success');
        }
      } catch (error) {
        if (statusEl) {
          statusEl.textContent =
            'Something went wrong. Please email your resume and cover letter to tim@ecobrandjp.com.';
          statusEl.classList.add('error');
        }
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalLabel;
      }
    });
  }
});

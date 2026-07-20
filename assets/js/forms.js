(function () {
  'use strict';

  function showError(form, msg) {
    let el = form.querySelector('.js-form-error');
    if (!el) {
      el = document.createElement('p');
      el.className = 'js-form-error form-field-error';
      el.setAttribute('role', 'alert');
      const btn = form.querySelector('[type="submit"]');
      if (btn) btn.insertAdjacentElement('beforebegin', el);
      else form.appendChild(el);
    }
    el.textContent = msg;
    el.style.display = 'block';
  }

  function clearError(form) {
    const el = form.querySelector('.js-form-error');
    if (el) el.style.display = 'none';
  }

  function setBusy(btn, busy) {
    btn.disabled = busy;
    if (busy) {
      btn._orig = btn.textContent;
      btn.textContent = 'Submitting…';
    } else {
      btn.textContent = btn._orig || 'Submit';
    }
  }

  // Submits the form's own fields straight to its Formspree endpoint
  // (the `action` attribute already on the <form>).
  async function submitToFormspree(form) {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      const msg = Array.isArray(data.errors) && data.errors.length
        ? data.errors.map((e) => e.message).join(', ')
        : 'Submission failed. Please try again.';
      throw new Error(msg);
    }
  }

  function wireForm(selector, successPage) {
    const form = document.querySelector(selector);
    if (!form) return;
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      clearError(this);
      const btn = this.querySelector('[type="submit"]');
      setBusy(btn, true);
      try {
        await submitToFormspree(this);
        window.location.href = successPage;
      } catch (err) {
        showError(this, err.message);
        setBusy(btn, false);
      }
    });
  }

  wireForm('[name="ward5-volunteer"]', 'forms/volunteer-success.html');
  wireForm('[name="lawn-sign-request"]', 'forms/lawn-sign-success.html');
  wireForm('[name="contact-general"]', 'forms/contact-success.html');
  wireForm('[name="donation-record"]', 'forms/donate-success.html');

}());

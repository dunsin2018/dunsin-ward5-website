(function () {
  'use strict';

  const API_BASE = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
    ? 'http://localhost:5000/api/v1'
    : 'https://dunsin-ward5-backend.onrender.com/api/v1';

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

  async function postApi(path, body) {
    const res = await fetch(API_BASE + path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      throw new Error(
        data.errors?.[0]?.msg || data.message || data.error || 'Submission failed. Please try again.'
      );
    }
    return data;
  }

  // ── Volunteer form ──────────────────────────────────────────────
  const volunteerForm = document.querySelector('[name="ward5-volunteer"]');
  if (volunteerForm) {
    volunteerForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      clearError(this);
      const btn = this.querySelector('[type="submit"]');
      setBusy(btn, true);
      const fd = new FormData(this);
      try {
        await postApi('/volunteers', {
          fullName:     fd.get('full_name'),
          email:        fd.get('email'),
          phone:        fd.get('phone')        || '',
          neighbourhood: fd.get('neighbourhood') || '',
          helpWith:     fd.getAll('help_type[]'),
          availability: fd.get('availability')  || '',
          message:      fd.get('message')       || ''
        });
        window.location.href = 'forms/volunteer-success.html';
      } catch (err) {
        showError(this, err.message);
        setBusy(btn, false);
      }
    });
  }

  // ── Lawn sign form ──────────────────────────────────────────────
  const lawnForm = document.querySelector('[name="lawn-sign-request"]');
  if (lawnForm) {
    lawnForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      clearError(this);
      const btn = this.querySelector('[type="submit"]');
      setBusy(btn, true);
      const fd = new FormData(this);
      const address = fd.get('address') || '';
      const inWard  = fd.get('in_ward5') || '';
      try {
        await postApi('/volunteers', {
          fullName:      fd.get('full_name'),
          email:         fd.get('email'),
          phone:         fd.get('phone') || '',
          neighbourhood: address,
          helpWith:      ['sign-placement'],
          availability:  '',
          message:       `Lawn sign request. Address: ${address}. In Ward 5: ${inWard}.`
        });
        window.location.href = 'forms/lawn-sign-success.html';
      } catch (err) {
        showError(this, err.message);
        setBusy(btn, false);
      }
    });
  }

  // ── Contact form ────────────────────────────────────────────────
  const contactForm = document.querySelector('[name="contact-general"]');
  if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      clearError(this);
      const btn = this.querySelector('[type="submit"]');
      setBusy(btn, true);
      const fd = new FormData(this);
      try {
        await postApi('/contacts', {
          fullName: fd.get('full_name'),
          email:    fd.get('email'),
          subject:  fd.get('subject')  || '',
          message:  fd.get('message')  || ''
        });
        window.location.href = 'forms/contact-success.html';
      } catch (err) {
        showError(this, err.message);
        setBusy(btn, false);
      }
    });
  }

  // ── Donation form ───────────────────────────────────────────────
  const donationForm = document.querySelector('[name="donation-record"]');
  if (donationForm) {
    donationForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      clearError(this);
      const btn = this.querySelector('[type="submit"]');
      setBusy(btn, true);
      const fd = new FormData(this);
      // Prefer the hidden numeric field; fall back to parsing the display field
      const rawAmt = fd.get('donation_amount') || fd.get('amount_display') || '0';
      const amount = parseFloat(String(rawAmt).replace(/[^0-9.]/g, '')) || 0;
      try {
        await postApi('/donations', {
          fullName:      fd.get('full_legal_name'),
          email:         fd.get('email'),
          phone:         fd.get('phone')         || '',
          homeAddress:   fd.get('home_address')  || '',
          amount,
          donationDate:  fd.get('donation_date') || new Date().toISOString().split('T')[0],
          paymentMethod: fd.get('payment_method') || ''
        });
        window.location.href = 'forms/donate-success.html';
      } catch (err) {
        showError(this, err.message);
        setBusy(btn, false);
      }
    });
  }

}());

/* =============================================================
   cookie-consent.js
   Shows/hides cookie banner; persists consent to localStorage
   ============================================================= */

(function () {
  'use strict';

  const banner     = document.getElementById('cookie-banner');
  const acceptBtn  = document.getElementById('cookie-accept');
  const declineBtn = document.getElementById('cookie-decline');

  // Hide banner immediately if consent already given
  if (localStorage.getItem('cc') && banner) {
    banner.style.display = 'none';
  }

  if (acceptBtn) {
    acceptBtn.addEventListener('click', function () {
      localStorage.setItem('cc', '1');
      if (banner) banner.style.display = 'none';
    });
  }

  if (declineBtn) {
    declineBtn.addEventListener('click', function () {
      localStorage.setItem('cc', '0');
      if (banner) banner.style.display = 'none';
    });
  }
})();

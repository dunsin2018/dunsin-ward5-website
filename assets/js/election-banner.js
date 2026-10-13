/* =============================================================
   election-banner.js
   Shows a top election banner when election is <= 14 days away,
   and pushes the fixed navbar below it so the tabs stay visible.
   ============================================================= */

(function () {
  'use strict';

  const daysLeft = Math.floor(
    (new Date('2026-10-26') - new Date()) / 86400000
  );
  const banner = document.getElementById('election-banner');
  const navbar = document.querySelector('.navbar');

  function layoutBelowBanner() {
    if (!banner || !navbar) return;
    navbar.style.top = banner.offsetHeight + 'px';
  }

  if (banner && daysLeft <= 14 && daysLeft >= 0) {
    banner.style.display = 'flex';
    layoutBelowBanner();
    // Banner height can change on resize (text wraps on narrow screens)
    window.addEventListener('resize', layoutBelowBanner);
    // Push main content down to account for navbar + banner height
    const main = document.querySelector('main');
    if (main) {
      main.style.paddingTop = (68 + banner.offsetHeight) + 'px';
    }
  }
})();

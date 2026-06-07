/* =============================================================
   election-banner.js
   Shows a top mobile banner when election is <= 14 days away
   ============================================================= */

(function () {
  'use strict';

  const daysLeft = Math.floor(
    (new Date('2026-10-26') - new Date()) / 86400000
  );
  const banner = document.getElementById('election-banner');

  if (banner && daysLeft <= 14 && daysLeft >= 0) {
    banner.style.display = 'flex';
    // Push main content down to account for banner height
    const main = document.querySelector('main');
    if (main) {
      main.style.paddingTop = (68 + banner.offsetHeight) + 'px';
    }
  }
})();

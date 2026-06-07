/* =============================================================
   scroll-animations.js
   IntersectionObserver — adds .visible to .reveal elements
   ============================================================= */

(function () {
  'use strict';

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        // Unobserve after animation fires — no repeated triggers
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });
})();

/* =============================================================
   mobile-nav.js
   Handles: sticky hide/show on scroll, hamburger toggle,
   full-screen mobile overlay, active link highlighting,
   back-to-top visibility.
   ============================================================= */

(function () {
  'use strict';

  /* -----------------------------------------------------------
     ELEMENT REFERENCES
     ----------------------------------------------------------- */
  const navbar      = document.querySelector('.navbar');
  const hamburger   = document.querySelector('.navbar__hamburger');
  const mobileNav   = document.querySelector('.mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav__links a');
  const backToTop   = document.querySelector('.back-to-top');


  /* -----------------------------------------------------------
     STICKY NAVBAR — hide on scroll down, show on scroll up
     ----------------------------------------------------------- */
  let lastScrollY   = 0;
  let ticking       = false;
  const SCROLL_THRESHOLD = 80;   // px before hide behaviour starts

  function handleScroll() {
    const currentY = window.scrollY;

    if (!navbar) return;

    // Add shadow once user has scrolled
    if (currentY > 10) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }

    // Hide / show on direction change (only past threshold)
    if (currentY > SCROLL_THRESHOLD) {
      if (currentY > lastScrollY) {
        // Scrolling DOWN — hide
        navbar.classList.add('navbar--hidden');
      } else {
        // Scrolling UP — show
        navbar.classList.remove('navbar--hidden');
      }
    } else {
      navbar.classList.remove('navbar--hidden');
    }

    // Back-to-top visibility
    if (backToTop) {
      if (currentY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }

    lastScrollY = currentY <= 0 ? 0 : currentY;
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(handleScroll);
      ticking = true;
    }
  }, { passive: true });


  /* -----------------------------------------------------------
     HAMBURGER — OPEN / CLOSE MOBILE OVERLAY
     ----------------------------------------------------------- */
  function openMobileNav() {
    if (!hamburger || !mobileNav) return;

    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'Close navigation menu');
    mobileNav.classList.add('is-open');
    document.body.classList.add('nav-open');

    // Move focus to first link for keyboard users
    const firstLink = mobileNav.querySelector('a');
    if (firstLink) firstLink.focus();
  }

  function closeMobileNav() {
    if (!hamburger || !mobileNav) return;

    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open navigation menu');
    mobileNav.classList.remove('is-open');
    document.body.classList.remove('nav-open');

    // Return focus to hamburger
    hamburger.focus();
  }

  function toggleMobileNav() {
    const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  }

  if (hamburger) {
    hamburger.addEventListener('click', toggleMobileNav);
  }

  // Close overlay when a nav link is clicked
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', closeMobileNav);
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileNav && mobileNav.classList.contains('is-open')) {
      closeMobileNav();
    }
  });

  // Close if window resizes above mobile breakpoint
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768 && mobileNav && mobileNav.classList.contains('is-open')) {
      closeMobileNav();
    }
  }, { passive: true });


  /* -----------------------------------------------------------
     ACTIVE LINK — highlight current page
     ----------------------------------------------------------- */
  function setActiveLink() {
    const currentPath = window.location.pathname.replace(/\/$/, '') || '/';

    // All nav links: desktop + mobile
    const allLinks = document.querySelectorAll(
      '.navbar__links a, .mobile-nav__links a'
    );

    allLinks.forEach(function (link) {
      const href = link.getAttribute('href');
      if (!href) return;

      // Normalise: strip trailing slash, treat index.html and / as equivalent
      const normHref = href
        .replace(/\/$/, '')
        .replace(/\/index\.html$/, '');

      const normPath = currentPath
        .replace(/\/index\.html$/, '');

      const isHome  = (normPath === '' || normPath === '/index') &&
                      (normHref === '' || normHref === '.' || normHref === '/');
      const isMatch = normPath.endsWith(normHref) && normHref !== '';

      if (isHome || isMatch) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  }

  setActiveLink();


  /* -----------------------------------------------------------
     BACK-TO-TOP BUTTON
     ----------------------------------------------------------- */
  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Keyboard: Enter or Space
    backToTop.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }


  /* -----------------------------------------------------------
     TRAP FOCUS INSIDE MOBILE OVERLAY (accessibility)
     ----------------------------------------------------------- */
  function trapFocus(e) {
    if (!mobileNav || !mobileNav.classList.contains('is-open')) return;

    const focusable = mobileNav.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];

    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      // Shift+Tab — going backwards
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      // Tab — going forwards
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  document.addEventListener('keydown', trapFocus);

})();

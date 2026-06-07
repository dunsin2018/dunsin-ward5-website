/* =============================================================
   main.js — General site-wide initialisation
   ============================================================= */

(function () {
  'use strict';

  /* -----------------------------------------------------------
     LAWN SIGN MODAL (Get Involved page)
     ----------------------------------------------------------- */
  const openModalBtns  = document.querySelectorAll('[data-modal-open]');
  const closeModalBtns = document.querySelectorAll('[data-modal-close]');
  const modalOverlay   = document.querySelector('.modal-overlay');

  function openModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.add('is-open');
    document.body.classList.add('nav-open'); // reuse scroll-lock class
    const firstInput = modalOverlay.querySelector('input, select, textarea');
    if (firstInput) firstInput.focus();
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('is-open');
    document.body.classList.remove('nav-open');
  }

  openModalBtns.forEach(function (btn) {
    btn.addEventListener('click', openModal);
  });

  closeModalBtns.forEach(function (btn) {
    btn.addEventListener('click', closeModal);
  });

  // Close modal on overlay click (outside the .modal box)
  if (modalOverlay) {
    modalOverlay.addEventListener('click', function (e) {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // Close modal on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('is-open')) {
      closeModal();
    }
  });


  /* -----------------------------------------------------------
     DONATION AMOUNT SELECTOR
     ----------------------------------------------------------- */
  const amountBtns  = document.querySelectorAll('.amount-btn');
  const customInput = document.getElementById('custom-amount');

  amountBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      // Deselect all
      amountBtns.forEach(function (b) { b.classList.remove('selected'); });

      if (this.dataset.amount === 'custom') {
        // Custom amount — focus the input
        if (customInput) {
          customInput.style.display = 'block';
          customInput.focus();
        }
      } else {
        this.classList.add('selected');
        if (customInput) customInput.style.display = 'none';
        // Sync value to hidden form field if present
        const amountField = document.getElementById('donation-amount');
        if (amountField) amountField.value = this.dataset.amount;
      }
    });
  });


  /* -----------------------------------------------------------
     SMOOTH ANCHOR SCROLLING (offset for fixed navbar)
     ----------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navHeight = 68;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    });
  });


  /* -----------------------------------------------------------
     EXTERNAL LINKS — open in new tab safely
     ----------------------------------------------------------- */
  document.querySelectorAll('a[href^="http"]').forEach(function (link) {
    if (!link.hostname || link.hostname !== window.location.hostname) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });

})();

// event-gallery.js — lightbox for multi-photo event galleries

(function () {
  var photos = [];
  var index = 0;

  var lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.hidden = true;
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-label', 'Event photo gallery');
  lightbox.innerHTML =
    '<button type="button" class="lightbox__close" aria-label="Close gallery">&times;</button>' +
    '<button type="button" class="lightbox__prev" aria-label="Previous photo">&#8249;</button>' +
    '<img class="lightbox__img" src="" alt="">' +
    '<button type="button" class="lightbox__next" aria-label="Next photo">&#8250;</button>' +
    '<span class="lightbox__counter"></span>';
  document.body.appendChild(lightbox);

  var imgEl = lightbox.querySelector('.lightbox__img');
  var counterEl = lightbox.querySelector('.lightbox__counter');

  function show(i) {
    index = (i + photos.length) % photos.length;
    imgEl.src = photos[index];
    counterEl.textContent = (index + 1) + ' / ' + photos.length;
  }

  function open(list, startIndex) {
    photos = list;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    show(startIndex || 0);
    lightbox.querySelector('.lightbox__close').focus();
  }

  function close() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
  }

  lightbox.querySelector('.lightbox__close').addEventListener('click', close);
  lightbox.querySelector('.lightbox__prev').addEventListener('click', function () { show(index - 1); });
  lightbox.querySelector('.lightbox__next').addEventListener('click', function () { show(index + 1); });

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) close();
  });

  document.addEventListener('keydown', function (e) {
    if (lightbox.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
  });

  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('[data-gallery]');
    if (!trigger) return;
    var list = trigger.getAttribute('data-gallery').split('|');
    open(list, 0);
  });

  // data-gallery triggers are divs (role="button"), not native <button>
  // elements, so Enter/Space activation has to be wired up manually.
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    var trigger = e.target.closest('[data-gallery]');
    if (!trigger) return;
    e.preventDefault();
    var list = trigger.getAttribute('data-gallery').split('|');
    open(list, 0);
  });
}());

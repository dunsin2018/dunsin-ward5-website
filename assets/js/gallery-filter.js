// gallery-filter.js — Community events category filter

function applyEventFilter(category) {
  document.querySelectorAll('.filter-btn').forEach(function (b) {
    var isMatch = b.dataset.filter === category;
    b.classList.toggle('active', isMatch);
    b.setAttribute('aria-pressed', isMatch ? 'true' : 'false');
  });

  document.querySelectorAll('.event-card').forEach(function (card) {
    card.style.display = (category === 'all' || card.dataset.category === category)
      ? 'block'
      : 'none';
  });
}

document.querySelectorAll('.filter-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    applyEventFilter(this.dataset.filter);
  });
});

// Reset to "All" whenever this page is shown, including when the browser
// restores it from bfcache (back/forward navigation) with a stale filter
// still applied from before the user navigated away.
window.addEventListener('pageshow', function () {
  applyEventFilter('all');
});

// gallery-filter.js — Community events category filter

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const category = this.dataset.filter;

    // Update active button + aria-pressed
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    this.classList.add('active');
    this.setAttribute('aria-pressed', 'true');

    // Show/hide cards
    document.querySelectorAll('.event-card').forEach(card => {
      if (category === 'all' ||
          card.dataset.category === category) {
        card.style.display = 'block';
        card.classList.add('reveal');
      } else {
        card.style.display = 'none';
      }
    });
  });
});

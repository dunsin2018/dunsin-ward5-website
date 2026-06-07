// countdown.js — Election Day countdown timer
// Target: October 26, 2026, 8:00 AM EDT (polls open)

function updateCountdown() {
  const election = new Date('2026-10-26T08:00:00-04:00');
  const diff = election - new Date();

  if (diff <= 0) {
    const el = document.getElementById('countdown');
    if (el) el.innerHTML = '<span class="election-live">ELECTION DAY — VOTE NOW!</span>';
    return;
  }

  const pad = n => String(Math.floor(n)).padStart(2, '0');
  const el  = id => document.getElementById(id);

  if (el('days'))    el('days').textContent    = pad(diff / 86400000);
  if (el('hours'))   el('hours').textContent   = pad((diff % 86400000) / 3600000);
  if (el('minutes')) el('minutes').textContent = pad((diff % 3600000) / 60000);
  if (el('seconds')) el('seconds').textContent = pad((diff % 60000) / 1000);
}

setInterval(updateCountdown, 1000);
updateCountdown();

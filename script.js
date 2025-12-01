// Lightweight helper file if you want extra behavior across pages.
// Right now AOS is initialized in each file; if you prefer single central script
// paste this and include <script src="script.js"></script> near the bottom of pages.

document.addEventListener('DOMContentLoaded', () => {
  // mobile nav behavior (if you add mobile toggles)
  const toggles = document.querySelectorAll('[data-toggle="nav"]');
  toggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.querySelector(btn.dataset.target);
      if (target) target.classList.toggle('hidden');
    });
  });
});

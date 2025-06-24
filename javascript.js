const toggleButtons = document.querySelectorAll('.toggle-btn');

toggleButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const card = btn.closest('.recipe-card');
    card.classList.toggle('show');
    btn.textContent = card.classList.contains('show') ? 'Hide Recipe' : 'View Recipe';
  });
});

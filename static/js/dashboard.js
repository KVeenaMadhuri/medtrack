document.addEventListener('DOMContentLoaded', () => {
  // Example: toggle appointment details
  const toggles = document.querySelectorAll('.toggle-details');
  toggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const details = btn.nextElementSibling;
      if (details) details.classList.toggle('hidden');
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#appointment-form');
  if (!form) return;

  const dateInput = form.querySelector('input[name="appointment_date"]');

  // Disable past dates (simple example)
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  form.addEventListener('submit', (e) => {
    if (!dateInput.value) {
      e.preventDefault();
      alert('Please select an appointment date.');
    }
  });
});

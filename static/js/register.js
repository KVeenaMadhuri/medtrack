document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#register-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    const email = form.email.value.trim();
    const password = form.password.value;
    const confirmPassword = form.confirm_password.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      e.preventDefault();
      alert('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      e.preventDefault();
      alert('Password must be at least 6 characters.');
      return;
    }

    if (password !== confirmPassword) {
      e.preventDefault();
      alert('Passwords do not match.');
    }
  });
});

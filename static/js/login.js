document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#login-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    const username = form.username.value.trim();
    const password = form.password.value.trim();

    if (!username || !password) {
      e.preventDefault();
      alert('Please enter both username and password.');
    }
  });
});

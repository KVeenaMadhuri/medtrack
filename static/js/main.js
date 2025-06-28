document.addEventListener('DOMContentLoaded', () => {
  console.log('MedTrack app loaded.');

  const menuBtn = document.querySelector('#menu-btn');
  const navMenu = document.querySelector('nav ul');

  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }
});

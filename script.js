const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuOverlay = document.getElementById('menu-overlay');
const mobileLinks = document.querySelectorAll('.mobile-link');

function openMenu() {
  mobileMenu.classList.remove('translate-x-full');
  menuOverlay.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

function closeMenu() {
  mobileMenu.classList.add('translate-x-full');
  menuOverlay.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

menuBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu);

mobileLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});
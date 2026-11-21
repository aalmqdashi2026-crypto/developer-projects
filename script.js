const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  navLinks?.classList.toggle('open', !isOpen);
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Open navigation');
    navLinks.classList.remove('open');
  });
});

const toast = document.querySelector('.toast');
let toastTimer;
document.querySelector('.copy-email')?.addEventListener('click', async (event) => {
  const email = event.currentTarget.dataset.email;
  try {
    await navigator.clipboard.writeText(email);
    toast.textContent = 'Email copied to clipboard';
  } catch {
    toast.textContent = email;
  }
  toast?.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast?.classList.remove('visible'), 2200);
});

document.querySelector('#year').textContent = new Date().getFullYear();

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll-reveal for sections
const revealTargets = document.querySelectorAll('main section');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach((el) => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// Highlight active nav link based on scroll position
const navLinks = document.querySelectorAll('.nav-links a');
const sections = [...navLinks].map((link) => document.querySelector(link.getAttribute('href')));

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const id = '#' + entry.target.id;
    const link = document.querySelector(`.nav-links a[href="${id}"]`);
    if (!link) return;
    if (entry.isIntersecting) {
      navLinks.forEach((l) => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });

sections.forEach((section) => {
  if (section) navObserver.observe(section);
});
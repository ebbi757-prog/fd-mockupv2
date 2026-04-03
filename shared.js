/* ── Shared JS — Fairchild & Dalrymple ── */

/* Banner scroll behaviour: hide banner when scrolled */
/*const banner = document.getElementById('top-banner');
const nav    = document.getElementById('nav');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 50;
  nav.classList.toggle('scrolled', scrolled);
  if (banner) banner.style.transform = scrolled ? 'translateY(-100%)' : 'translateY(0)';
});*/

/* Hamburger */
const hamburger = document.getElementById('hamburger');
const drawer    = document.getElementById('mobile-drawer');
const mobClose  = document.getElementById('mob-close');
function openDrawer()  { drawer.classList.add('open'); hamburger.classList.add('open'); hamburger.setAttribute('aria-expanded','true');  document.body.style.overflow='hidden'; }
function closeDrawer() { drawer.classList.remove('open'); hamburger.classList.remove('open'); hamburger.setAttribute('aria-expanded','false'); document.body.style.overflow=''; }
hamburger.addEventListener('click', () => drawer.classList.contains('open') ? closeDrawer() : openDrawer());
mobClose.addEventListener('click', closeDrawer);
document.addEventListener('keydown', e => { if (e.key==='Escape') closeDrawer(); });

/* Scroll reveal */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* Ticker duplication */
const ti = document.getElementById('ticker-inner');
if (ti) ti.innerHTML += ti.innerHTML;

/* Mark active nav link */
document.querySelectorAll('.nav-links a, .mobile-drawer a').forEach(a => {
  if (a.href === window.location.href ||
      (a.getAttribute('href') !== '#' && window.location.pathname.endsWith(a.getAttribute('href')))) {
    a.classList.add('active');
  }
});

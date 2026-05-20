import { QuartzComponent, QuartzComponentConstructor } from "./types"

const Animations: QuartzComponent = () => {
  return null
}

Animations.afterDOMLoaded = `
  const EASE = 'cubic-bezier(0.0, 0, 0.2, 1)';

  // Scroll-triggered fade for headings
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('article h2, article h3').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transition = 'opacity 0.6s ' + EASE + ' ' + (i * 0.06) + 's';
    scrollObserver.observe(el);
  });

  // TOC collapse/expand on mobile
  const toc = document.querySelector('.toc');
  const tocHeading = toc?.querySelector('h3');
  if (toc && tocHeading && window.innerWidth < 800) {
    tocHeading.addEventListener('click', () => toc.classList.toggle('expanded'));
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href) return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, '', href);
      }
    });
  });
`

export default (() => Animations) satisfies QuartzComponentConstructor

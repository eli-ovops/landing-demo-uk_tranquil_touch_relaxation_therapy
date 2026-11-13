(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !window.gsap) return;
  const { gsap } = window;
  gsap.timeline({ defaults: { ease: 'power3.out' } })
    .from('.hero-photo', { autoAlpha: 0, scale: 1.035, duration: 0.78 })
    .from('.site-header', { autoAlpha: 0, y: -14, duration: 0.45 }, '-=0.42')
    .from('.hero-copy > *', { autoAlpha: 0, y: 24, stagger: 0.09, duration: 0.55 }, '-=0.15')
    .from('.hero-hours', { autoAlpha: 0, y: 12, duration: 0.45 }, '-=0.3');
  document.querySelectorAll('.primary-cta').forEach((link) => {
    link.addEventListener('mouseenter', () => gsap.to(link, { y: -3, duration: 0.2, ease: 'power2.out' }));
    link.addEventListener('mouseleave', () => gsap.to(link, { y: 0, duration: 0.25, ease: 'power2.out' }));
  });
})();

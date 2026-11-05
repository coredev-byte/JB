const whatsapp = (message) => `https://wa.me/5569992511246?text=${encodeURIComponent(message)}`;
document.querySelectorAll('[data-whatsapp]').forEach(link => { link.href = whatsapp('Olá, JB! Vim pelo site e gostaria de solicitar um orçamento para serviços de engenharia e segurança do trabalho.'); });
document.querySelectorAll('[data-service]').forEach(link => { link.href = whatsapp(`Olá, JB! Vim pelo site e gostaria de saber mais sobre ${link.dataset.service}. Podemos conversar sobre um orçamento?`); });
document.getElementById('year').textContent = new Date().getFullYear();

// GSAP 3.13 + ScrollTrigger. Native links and details work independently.
if (window.gsap && window.ScrollTrigger) {
  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);
  const motion = gsap.matchMedia();
  motion.add('(prefers-reduced-motion: no-preference)', () => {
    // matchMedia records these animations and restores styles if preferences change.
    const entrance = gsap.timeline({ defaults: { duration: 0.7, ease: 'power2.out', clearProps: 'transform,opacity' } });
    entrance.from('.hero-content > .eyebrow, .hero-content > h1, .hero-copy', {
      y: 24, opacity: 0, stagger: 0.12
    }).from('.hero-content > a, .hero-note', {
      y: 16, opacity: 0, stagger: 0.08
    }, '-=0.35');

    gsap.fromTo('.hero-media', { y: 24, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.9, ease: 'power2.out', clearProps: 'transform,opacity',
      scrollTrigger: { trigger: '.hero-media', start: 'top 95%', once: true }
    });
    gsap.fromTo('.hero-media img', { scale: 1.045 }, {
      scale: 1, duration: 1.5, ease: 'power2.out', clearProps: 'transform',
      scrollTrigger: { trigger: '.hero-media', start: 'top 95%', once: true }
    });

    // Animate only when entering the viewport; no off-screen content is hidden.
    gsap.utils.toArray('.section-heading, .service-list > details, .approach-title, .steps article, .contact > div, .contact address a').forEach(element => {
      gsap.fromTo(element, { y: 26, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.65, ease: 'power2.out', immediateRender: false,
        clearProps: 'transform,opacity',
        scrollTrigger: { trigger: element, start: 'top 94%', once: true }
      });
    });
    gsap.fromTo('.scroll-progress', { scaleX: 0 }, {
      scaleX: 1, ease: 'none',
      scrollTrigger: { start: 0, end: () => ScrollTrigger.maxScroll(window), scrub: 0.15, invalidateOnRefresh: true }
    });
  });

  // Refresh positions after native accordion layout changes, without hijacking it.
  document.querySelectorAll('details').forEach(details => {
    details.addEventListener('toggle', () => ScrollTrigger.refresh(true));
  });
  window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
}

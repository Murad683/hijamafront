// nav.js
(function () {
  'use strict';

  if (window.__navInit) return; // prevent double-binding if script injected twice
  window.__navInit = true;

  // Klikləri document səviyyəsində tutun — header inject olunsa belə işləyəcək
  document.addEventListener('click', function (e) {
    const toggle = e.target.closest('[data-nav-toggle], .hamburger, .burger, [aria-controls][aria-expanded]');
    if (toggle) {
      // tapa bildiyimiz nav elementini seçək (data-target varsa onu istifadə et)
      const targetSelector = toggle.getAttribute('data-target') || toggle.getAttribute('aria-controls') || '[data-nav], .nav';
      const nav = document.querySelector(targetSelector) || document.querySelector('.nav') || document.querySelector('[data-nav]');
      if (!nav) return;

      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.documentElement.classList.toggle('nav-open', isOpen);
      return;
    }

    // Açıq nav varsa və kənara klik edilibsə, bağla
    const openNav = document.querySelector('.nav.open, [data-nav].open');
    if (openNav && !e.target.closest('.nav') && !e.target.closest('[data-nav]') && !e.target.closest('[data-nav-toggle]') && !e.target.closest('.hamburger') && !e.target.closest('.burger')) {
      openNav.classList.remove('open');
      document.documentElement.classList.remove('nav-open');
      document.querySelectorAll('[data-nav-toggle], .hamburger, [aria-controls][aria-expanded]').forEach(t => t.setAttribute('aria-expanded', 'false'));
    }
  }, false);

  // Esc düyməsi ilə bağlamaq
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' || e.key === 'Esc') {
      const openNav = document.querySelector('.nav.open, [data-nav].open');
      if (openNav) {
        openNav.classList.remove('open');
        document.documentElement.classList.remove('nav-open');
        document.querySelectorAll('[data-nav-toggle], .hamburger, [aria-controls][aria-expanded]').forEach(t => t.setAttribute('aria-expanded', 'false'));
      }
    }
  });

  // Əlavə yoxlama: header inject edildikdən sonra toggles üçün aria-expanded default təyin et
  const setInitialAria = () => {
    document.querySelectorAll('[data-nav-toggle], .hamburger, [aria-controls]').forEach(t => {
      if (!t.hasAttribute('aria-expanded')) t.setAttribute('aria-expanded', 'false');
    });
  };

  // header inject asinxron olduğuna görə DOM dəyişikliklərinə qulaq asın
  const observer = new MutationObserver((mutations, obs) => {
    if (document.querySelector('#site-header') || document.querySelector('header')) {
      setInitialAria();
      // bir dəfə təmin edildikdən sonra izləməni dayandır
      obs.disconnect();
    }
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });

})();

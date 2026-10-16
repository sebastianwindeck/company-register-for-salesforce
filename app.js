/* Language toggle. The page carries both languages in the markup and CSS hides
   the inactive one, so switching is a single attribute change and needs no
   re-render. The initial choice is made in a small inline script in <head> to
   avoid a flash of the wrong language. */
(function () {
  var root = document.documentElement;

  function apply(lang) {
    root.setAttribute('data-lang', lang);
    root.setAttribute('lang', lang);
    document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.dataset.setLang === lang));
    });
    try {
      localStorage.setItem('nd-lang', lang);
    } catch (e) {
      /* Storage can be blocked or full; the page works fine without it. */
    }
  }

  document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      apply(btn.dataset.setLang);
    });
  });

  // Reflect whatever the head script already decided.
  apply(root.getAttribute('data-lang') === 'en' ? 'en' : 'de');

  document.querySelectorAll('.year').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();

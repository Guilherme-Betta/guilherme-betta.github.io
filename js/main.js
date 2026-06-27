// Language toggle: PT (default) <-> EN
let currentLang = 'pt';

function toggleLang() {
  currentLang = currentLang === 'pt' ? 'en' : 'pt';
  const btn = document.getElementById('lang-toggle');
  btn.textContent = currentLang === 'pt' ? 'EN' : 'PT';

  document.querySelectorAll('[data-pt]').forEach(el => {
    el.textContent = el.dataset[currentLang];
  });
}

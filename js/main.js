// ===== LANGUAGE TOGGLE (persisted via localStorage) =====

// Read saved language, default to Portuguese
let currentLang = localStorage.getItem('lang') || 'pt';

// Apply a given language to the whole page
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  // Update <html lang="...">
  document.documentElement.lang = lang;

  // Button shows the language you can switch TO
  const btn = document.getElementById('lang-toggle');
  if (btn) {
    btn.textContent = lang === 'pt' ? 'EN' : 'PT';
  }

  // Swap text on all translatable elements
  document.querySelectorAll('[data-pt]').forEach(el => {
    el.textContent = el.dataset[lang];
  });
}

// Flip between the two languages
function toggleLang() {
  applyLang(currentLang === 'pt' ? 'en' : 'pt');
}

// On every page load, apply the saved language
document.addEventListener('DOMContentLoaded', () => {
  applyLang(currentLang);
});

// ===== LANGUAGE TOGGLE =====
// The initial language is set by a small script in each page's <head>,
// which runs before the page is painted (so there is no flash).
// This file only handles the button click: flip the language and save it.

function toggleLang() {
  var current = localStorage.getItem('lang') || 'pt';
  var next = current === 'pt' ? 'en' : 'pt';

  localStorage.setItem('lang', next);
  document.documentElement.className = 'lang-' + next;
  document.documentElement.lang = next;
}

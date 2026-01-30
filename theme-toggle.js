(function() {
  function ensureToggleButton() {
    let btn = document.getElementById('theme-toggle');
    if (!btn) {
      btn = document.createElement('button');
      btn.id = 'theme-toggle';
      btn.style.position = 'fixed';
      btn.style.top = '1em';
      btn.style.right = '1em';
      btn.style.zIndex = '1000';
      btn.style.background = '#0a2540';
      btn.style.color = '#fff';
      btn.style.border = '1px solid #4db3fa';
      btn.style.borderRadius = '5px';
      btn.style.padding = '0.5em 1em';
      btn.style.cursor = 'pointer';
      btn.style.fontSize = '1em';
      btn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
      btn.innerText = '🌙 Dark';
      document.body.appendChild(btn);
    }
    return btn;
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    btn.innerText = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
  }

  function init() {
    const btn = ensureToggleButton();
    btn.onclick = function() {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      setTheme(current === 'dark' ? 'light' : 'dark');
    };
    const saved = localStorage.getItem('theme');
    if (saved) {
      setTheme(saved);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
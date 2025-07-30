(function() {
  function addToggle() {
    if (document.getElementById('theme-toggle')) return;
    const btn = document.createElement('button');
    btn.id = 'theme-toggle';
    btn.style.position = 'fixed';
    btn.style.top = '1em';
    btn.style.right = '1em';
    btn.style.zIndex = 1000;
    btn.style.background = 'var(--bg)';
    btn.style.color = 'var(--heading)';
    btn.style.border = '1px solid var(--hr)';
    btn.style.borderRadius = '5px';
    btn.style.padding = '0.5em 1em';
    btn.style.cursor = 'pointer';
    btn.style.fontSize = '1em';
    btn.innerText = '🌙 Dark';

    function setTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      btn.innerText = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
    }

    btn.onclick = function() {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      setTheme(current === 'dark' ? 'light' : 'dark');
    };

    // Initialize theme
    const saved = localStorage.getItem('theme');
    if (saved) {
      setTheme(saved);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }

    document.body.appendChild(btn);
  }

  // For standard MkDocs and most themes
  document.addEventListener('DOMContentLoaded', addToggle);

  // For MkDocs Material and other SPA-like themes
  document.addEventListener('readystatechange', function() {
    if (document.readyState === 'complete') addToggle();
  });
  // For instant navigation (Material theme)
  document.body && document.body.addEventListener('md-content-rendered', addToggle);
})();
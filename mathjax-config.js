// Cargar el CSS de forma automática
var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://profebrenes.github.io/css-PROFEBRENES/css/estilo%20profebrenes.css';
document.head.appendChild(link);





// 1. Configurar las opciones de MathJax
window.MathJax = { 
  tex: { 
    inlineMath: [['$', '$'], ['\\(', '\\)']], 
    displayMath: [['$$', '$$'], ['\\[', '\\]']] 
  } 
};

// 2. Cargar el script oficial de MathJax dinámicamente
(function() {
  var script = document.createElement('script');
  script.id = 'MathJax-script';
  script.async = true;
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
  document.head.appendChild(script);
})();


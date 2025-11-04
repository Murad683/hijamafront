// accordion.js
(function(){
  document.querySelectorAll('.accordion__header').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const panel = btn.nextElementSibling;
      const open = panel.classList.toggle('open');
      btn.setAttribute('aria-expanded', open?'true':'false');
    });
  });
})();

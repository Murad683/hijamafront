
// lightbox.js (simple image modal)
(function(){
  const imgs = document.querySelectorAll('.gallery img');
  if(!imgs.length) return;
  const modal = document.createElement('div');
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.65);display:none;place-items:center;z-index:100;padding:20px';
  const img = document.createElement('img');
  img.style.cssText='max-width:90vw;max-height:85vh;border-radius:14px;box-shadow:0 20px 60px rgba(0,0,0,.35)';
  modal.appendChild(img);
  modal.addEventListener('click',()=> modal.style.display='none');
  document.body.appendChild(modal);
  imgs.forEach(i=> i.addEventListener('click',()=>{ img.src=i.src; modal.style.display='grid'; }));
})();

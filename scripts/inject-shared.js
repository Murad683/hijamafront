// inject-shared.js
// Lightweight HTML partial injector for header/footer
async function inject(selector, url){
  const host = document.querySelector(selector);
  if(!host) return;
  try{
    const res = await fetch(url,{cache:'no-store'});
    host.innerHTML = await res.text();
    // after injection, run nav init (if needed)
    const s = document.createElement('script');
    s.src = '/scripts/nav.js'; document.body.appendChild(s);
  }catch(e){ console.warn('Inject error',e); }
}
document.addEventListener('DOMContentLoaded',()=>{
  inject('#site-header','/partials/header-az.html');
  inject('#site-footer','/partials/footer-az.html');
});


// reveal.js (IntersectionObserver for on-scroll reveals)
(function(){
  const items = document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){ items.forEach(i=>i.classList.add('show')); return; }
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); }
    });
  },{rootMargin:'-10% 0px -10% 0px'});
  items.forEach(i=>io.observe(i));
})();


// slider.js (basic horizontal scroll with buttons)
(function(){
  document.querySelectorAll('.slider').forEach(sl=>{
    const track = sl.querySelector('.slider-track');
    const prev = sl.querySelector('[data-prev]');
    const next = sl.querySelector('[data-next]');
    const amt = 360;
    if(prev) prev.addEventListener('click',()=> track.scrollBy({left:-amt, behavior:'smooth'}));
    if(next) next.addEventListener('click',()=> track.scrollBy({left: amt, behavior:'smooth'}));
  });
})();

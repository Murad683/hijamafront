// form-contact.js (basic client validation + demo submit)
(function(){
  const form = document.getElementById('contactForm');
  if(!form) return;
  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const fd = new FormData(form);
    const name = fd.get('name')?.trim();
    const email = fd.get('email')?.trim();
    const phone = fd.get('phone')?.trim();
    const message = fd.get('message')?.trim();
    const errors = [];
    if(!name) errors.push('Zəhmət olmasa, adınızı daxil edin.');
    if(!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Düzgün e-poçt ünvanı daxil edin.');
    if(!phone) errors.push('Telefon nömrəsini daxil edin.');
    if(!message || message.length<10) errors.push('Mesaj 10 simvoldan az olmamalıdır.');
    const out = document.getElementById('formMsg');
    if(errors.length){
      out.textContent = errors.join(' '); out.style.color = '#b00020'; return;
    }
    // Mock submit; replace with real API endpoint later
    try{
      out.textContent = 'Göndərilir...'; out.style.color = '#6B7280';
      await new Promise(r=>setTimeout(r,700));
      out.textContent = 'Mesajınız qəbul olundu. Əlaqə saxlayacağıq.'; out.style.color = '#2F7F77';
      form.reset();
    }catch(err){
      out.textContent = 'Xəta baş verdi. Zəhmət olmasa, yenidən cəhd edin.'; out.style.color = '#b00020';
    }
  });
})();

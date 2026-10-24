document.documentElement.classList.add('js');
const io='IntersectionObserver' in window && new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px'});
document.querySelectorAll('.sec-head,.svc__intro,.svc__list li,.nums__grid div,.yard__tx,.req__intro,.priv__in').forEach(el=>{if(io){el.classList.add('rv');io.observe(el)}});
const f=document.querySelector('.form');
if(f){f.addEventListener('submit',e=>{e.preventDefault();let ok=true;
 f.querySelectorAll('[required]').forEach(i=>{const bad=!i.value.trim();i.setAttribute('aria-invalid',bad);if(bad&&ok){i.focus();ok=false}});
 f.querySelector('.form__status').textContent=ok?'Это демо: заявка не отправлена. На сайте здесь будет форма WordPress.':'Заполните имя и телефон.';});}
document.querySelectorAll('.mnav a').forEach(a=>a.addEventListener('click',()=>{const d=a.closest('details');if(d)d.open=false}));

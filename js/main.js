
/* Gemini Digital Solution interactions */
var btn=document.querySelector('.mobile-menu-btn');
var nav=document.querySelector('.nav-list');
btn.addEventListener('click',function(){nav.classList.toggle('is-open');var ex=btn.getAttribute('aria-expanded')==='true';btn.setAttribute('aria-expanded',String(!ex));});
var header=document.querySelector('.site-header');window.addEventListener('scroll',function(){if(window.scrollY>20){header.classList.add('is-scrolled');}else{header.classList.remove('is-scrolled');}});
var observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}});document.querySelectorAll('.reveal').forEach(function(el){observer.observe(el);});
var form=document.getElementById('contact-form');var thanks=document.getElementById('form-thanks');var btn=form.querySelector('button[type=submit]');form.addEventListener('submit',function(e){e.preventDefault();btn.classList.add('loading');btn.disabled=true;setTimeout(function(){form.style.display='none';thanks.hidden=false;btn.classList.remove('loading');btn.disabled=false;},800);});
document.getElementById('form-reset').addEventListener('click',function(){thanks.hidden=true;form.style.display='flex';form.reset();});
var sections=document.querySelectorAll('section[id]');var links=document.querySelectorAll('.nav-list a[href^=#]');function highlight(){var pos=window.scrollY+100;sections.forEach(function(sec){var top=sec.offsetTop;var bottom=top+sec.offsetHeight;var id=sec.getAttribute('id');if(pos>=top&&pos<bottom){links.forEach(function(l){l.classList.remove('active');if(l.getAttribute('href')===
=\
=\x27#\x27+id){l.classList.add('\x27active\x27');}});}});}window.addEventListener('\x27scroll\x27',highlight);highlight();

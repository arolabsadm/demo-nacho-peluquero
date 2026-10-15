(function(){
var nav=document.getElementById('nav');
function s(){nav.classList.toggle('s',window.scrollY>40)}
s();window.addEventListener('scroll',s,{passive:true});
var els=document.querySelectorAll('.reveal');
var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function count(el){
 var n=parseInt(el.getAttribute('data-n'),10);if(!n||reduce)return;
 var t0=null;function f(t){if(!t0)t0=t;var p=Math.min((t-t0)/1400,1);el.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)}requestAnimationFrame(f);
}
if('IntersectionObserver' in window){
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');var c=e.target.querySelector('[data-n]');if(c)count(c);io.unobserve(e.target)}})},{threshold:.12});
 els.forEach(function(e){io.observe(e)});
}else{els.forEach(function(e){e.classList.add('in')})}
})();

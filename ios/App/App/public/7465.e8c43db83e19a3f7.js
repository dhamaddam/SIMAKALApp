"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7465],{7465:(P,d,e)=>{e.r(d),e.d(d,{ion_ripple_effect:()=>u});var b=e(5861),n=e(6953),h=e(7876);const u=class{constructor(t){(0,n.r)(this,t),this.type="bounded"}addRipple(t,g){var a=this;return(0,b.Z)(function*(){return new Promise(k=>{(0,n.e)(()=>{const r=a.el.getBoundingClientRect(),o=r.width,s=r.height,A=Math.sqrt(o*o+s*s),p=Math.max(s,o),I=a.unbounded?p:A+_,c=Math.floor(p*v),E=I/c;let m=t-r.left,f=g-r.top;a.unbounded&&(m=.5*o,f=.5*s);const O=m-.5*c,C=f-.5*c,D=.5*o-m,M=.5*s-f;(0,n.w)(()=>{const l=document.createElement("div");l.classList.add("ripple-effect");const i=l.style;i.top=C+"px",i.left=O+"px",i.width=i.height=c+"px",i.setProperty("--final-scale",`${E}`),i.setProperty("--translate-end",`${D}px, ${M}px`),(a.el.shadowRoot||a.el).appendChild(l),setTimeout(()=>{k(()=>{w(l)})},325)})})})})()}get unbounded(){return"unbounded"===this.type}render(){const t=(0,h.b)(this);return(0,n.h)(n.H,{role:"presentation",class:{[t]:!0,unbounded:this.unbounded}})}get el(){return(0,n.f)(this)}},w=t=>{t.classList.add("fade-out"),setTimeout(()=>{t.remove()},200)},_=10,v=.5;u.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}"}}]);
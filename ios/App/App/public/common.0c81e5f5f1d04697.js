"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{1182:(C,b,o)=>{o.d(b,{c:()=>c});var h=o(6953),p=o(2966),l=o(8077);const c=(m,r)=>{let t,e;const a=(n,_,s)=>{if(typeof document>"u")return;const g=document.elementFromPoint(n,_);g&&r(g)?g!==t&&(d(),i(g,s)):d()},i=(n,_)=>{t=n,e||(e=t);const s=t;(0,h.w)(()=>s.classList.add("ion-activated")),_()},d=(n=!1)=>{if(!t)return;const _=t;(0,h.w)(()=>_.classList.remove("ion-activated")),n&&e!==t&&t.click(),t=void 0};return(0,l.createGesture)({el:m,gestureName:"buttonActiveDrag",threshold:0,onStart:n=>a(n.currentX,n.currentY,p.a),onMove:n=>a(n.currentX,n.currentY,p.b),onEnd:()=>{d(!0),(0,p.h)(),e=void 0}})}},278:(C,b,o)=>{o.d(b,{g:()=>h});const h=(r,t,e,a,i)=>l(r[1],t[1],e[1],a[1],i).map(d=>p(r[0],t[0],e[0],a[0],d)),p=(r,t,e,a,i)=>i*(3*t*Math.pow(i-1,2)+i*(-3*e*i+3*e+a*i))-r*Math.pow(i-1,3),l=(r,t,e,a,i)=>m((a-=i)-3*(e-=i)+3*(t-=i)-(r-=i),3*e-6*t+3*r,3*t-3*r,r).filter(n=>n>=0&&n<=1),m=(r,t,e,a)=>{if(0===r)return((r,t,e)=>{const a=t*t-4*r*e;return a<0?[]:[(-t+Math.sqrt(a))/(2*r),(-t-Math.sqrt(a))/(2*r)]})(t,e,a);const i=(3*(e/=r)-(t/=r)*t)/3,d=(2*t*t*t-9*t*e+27*(a/=r))/27;if(0===i)return[Math.pow(-d,1/3)];if(0===d)return[Math.sqrt(-i),-Math.sqrt(-i)];const n=Math.pow(d/2,2)+Math.pow(i/3,3);if(0===n)return[Math.pow(d/2,.5)-t/3];if(n>0)return[Math.pow(-d/2+Math.sqrt(n),1/3)-Math.pow(d/2+Math.sqrt(n),1/3)-t/3];const _=Math.sqrt(Math.pow(-i/3,3)),s=Math.acos(-d/(2*Math.sqrt(Math.pow(-i/3,3)))),g=2*Math.pow(_,1/3);return[g*Math.cos(s/3)-t/3,g*Math.cos((s+2*Math.PI)/3)-t/3,g*Math.cos((s+4*Math.PI)/3)-t/3]}},1776:(C,b,o)=>{o.d(b,{i:()=>h});const h=p=>p&&""!==p.dir?"rtl"===p.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3433:(C,b,o)=>{o.r(b),o.d(b,{startFocusVisible:()=>c});const h="ion-focused",l=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],c=m=>{let r=[],t=!0;const e=m?m.shadowRoot:document,a=m||document.body,i=w=>{r.forEach(f=>f.classList.remove(h)),w.forEach(f=>f.classList.add(h)),r=w},d=()=>{t=!1,i([])},n=w=>{t=l.includes(w.key),t||i([])},_=w=>{if(t&&void 0!==w.composedPath){const f=w.composedPath().filter(u=>!!u.classList&&u.classList.contains("ion-focusable"));i(f)}},s=()=>{e.activeElement===a&&i([])};return e.addEventListener("keydown",n),e.addEventListener("focusin",_),e.addEventListener("focusout",s),e.addEventListener("touchstart",d,{passive:!0}),e.addEventListener("mousedown",d),{destroy:()=>{e.removeEventListener("keydown",n),e.removeEventListener("focusin",_),e.removeEventListener("focusout",s),e.removeEventListener("touchstart",d),e.removeEventListener("mousedown",d)},setFocus:i}}},2587:(C,b,o)=>{o.d(b,{c:()=>p});var h=o(544);const p=r=>{const t=r;let e;return{hasLegacyControl:()=>{if(void 0===e){const i=void 0!==t.label||l(t),d=t.hasAttribute("aria-label")||t.hasAttribute("aria-labelledby")&&null===t.shadowRoot,n=(0,h.h)(t);e=!0===t.legacy||!i&&!d&&null!==n}return e}}},l=r=>null!==r.shadowRoot&&!!(c.includes(r.tagName)&&null!==r.querySelector('[slot="label"]')||m.includes(r.tagName)&&""!==r.textContent),c=["ION-RANGE"],m=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},2966:(C,b,o)=>{o.d(b,{a:()=>c,b:()=>m,c:()=>l,d:()=>t,h:()=>r});const h={getEngine(){var e;const a=window;return a.TapticEngine||(null===(e=a.Capacitor)||void 0===e?void 0:e.isPluginAvailable("Haptics"))&&a.Capacitor.Plugins.Haptics},available(){var e;const a=window;return!!this.getEngine()&&("web"!==(null===(e=a.Capacitor)||void 0===e?void 0:e.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const a=this.getEngine();if(!a)return;const i=this.isCapacitor()?e.style.toUpperCase():e.style;a.impact({style:i})},notification(e){const a=this.getEngine();if(!a)return;const i=this.isCapacitor()?e.style.toUpperCase():e.style;a.notification({style:i})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},p=()=>h.available(),l=()=>{p()&&h.selection()},c=()=>{p()&&h.selectionStart()},m=()=>{p()&&h.selectionChanged()},r=()=>{p()&&h.selectionEnd()},t=e=>{p()&&h.impact(e)}},9993:(C,b,o)=>{o.d(b,{a:()=>h,b:()=>_,c:()=>t,d:()=>s,e:()=>O,f:()=>r,g:()=>g,h:()=>l,i:()=>p,j:()=>A,k:()=>v,l:()=>e,m:()=>d,n:()=>w,o:()=>i,p:()=>m,q:()=>c,r:()=>y,s:()=>M,t:()=>n,u:()=>f,v:()=>u,w:()=>a});const h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",A="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},4435:(C,b,o)=>{o.d(b,{I:()=>r,a:()=>i,b:()=>m,c:()=>_,d:()=>g,f:()=>d,g:()=>a,i:()=>e,p:()=>s,r:()=>w,s:()=>n});var h=o(5861),p=o(544),l=o(7690);const m="ion-content",r=".ion-content-scroll-host",t=`${m}, ${r}`,e=f=>"ION-CONTENT"===f.tagName,a=function(){var f=(0,h.Z)(function*(u){return e(u)?(yield new Promise(y=>(0,p.c)(u,y)),u.getScrollElement()):u});return function(y){return f.apply(this,arguments)}}(),i=f=>f.querySelector(r)||f.querySelector(t),d=f=>f.closest(t),n=(f,u)=>e(f)?f.scrollToTop(u):Promise.resolve(f.scrollTo({top:0,left:0,behavior:u>0?"smooth":"auto"})),_=(f,u,y,A)=>e(f)?f.scrollByPoint(u,y,A):Promise.resolve(f.scrollBy({top:y,left:u,behavior:A>0?"smooth":"auto"})),s=f=>(0,l.b)(f,m),g=f=>{if(e(f)){const y=f.scrollY;return f.scrollY=!1,y}return f.style.setProperty("overflow","hidden"),!0},w=(f,u)=>{e(f)?f.scrollY=u:f.style.removeProperty("overflow")}},1685:(C,b,o)=>{o.d(b,{c:()=>c,g:()=>m});var h=o(7643),p=o(544),l=o(7690);const c=(t,e,a)=>{let i,d;void 0!==h.w&&"MutationObserver"in h.w&&(i=new MutationObserver(g=>{for(const w of g)for(const f of w.addedNodes)if(f.nodeType===Node.ELEMENT_NODE&&f.slot===e)return a(),void(0,p.r)(()=>n(f))}),i.observe(t,{childList:!0}));const n=g=>{var w;d&&(d.disconnect(),d=void 0),d=new MutationObserver(f=>{a();for(const u of f)for(const y of u.removedNodes)y.nodeType===Node.ELEMENT_NODE&&y.slot===e&&s()}),d.observe(null!==(w=g.parentElement)&&void 0!==w?w:g,{subtree:!0,childList:!0})},s=()=>{d&&(d.disconnect(),d=void 0)};return{destroy:()=>{i&&(i.disconnect(),i=void 0),s()}}},m=(t,e,a)=>{const i=null==t?0:t.toString().length,d=r(i,e);if(void 0===a)return d;try{return a(i,e)}catch(n){return(0,l.a)("Exception in provided `counterFormatter`.",n),d}},r=(t,e)=>`${t} / ${e}`},6884:(C,b,o)=>{o.d(b,{K:()=>l,a:()=>p});var h=o(7643),p=(()=>((p=p||{}).Body="body",p.Ionic="ionic",p.Native="native",p.None="none",p))();const l={getEngine(){var c;return(null===(c=null==h.w?void 0:h.w.Capacitor)||void 0===c?void 0:c.isPluginAvailable("Keyboard"))&&(null==h.w?void 0:h.w.Capacitor.Plugins.Keyboard)},getResizeMode(){const c=this.getEngine();return null!=c&&c.getResizeMode?c.getResizeMode().catch(m=>{if("UNIMPLEMENTED"!==m.code)throw m}):Promise.resolve(void 0)}}},2624:(C,b,o)=>{o.r(b),o.d(b,{KEYBOARD_DID_CLOSE:()=>c,KEYBOARD_DID_OPEN:()=>l,copyVisualViewport:()=>A,keyboardDidClose:()=>w,keyboardDidOpen:()=>s,keyboardDidResize:()=>g,resetKeyboardAssist:()=>a,setKeyboardClose:()=>_,setKeyboardOpen:()=>n,startKeyboardAssist:()=>i,trackViewportChanges:()=>y});var h=o(6884);o(7643);const l="ionKeyboardDidShow",c="ionKeyboardDidHide";let r={},t={},e=!1;const a=()=>{r={},t={},e=!1},i=v=>{if(h.K.getEngine())d(v);else{if(!v.visualViewport)return;t=A(v.visualViewport),v.visualViewport.onresize=()=>{y(v),s()||g(v)?n(v):w(v)&&_(v)}}},d=v=>{v.addEventListener("keyboardDidShow",M=>n(v,M)),v.addEventListener("keyboardDidHide",()=>_(v))},n=(v,M)=>{f(v,M),e=!0},_=v=>{u(v),e=!1},s=()=>!e&&r.width===t.width&&(r.height-t.height)*t.scale>150,g=v=>e&&!w(v),w=v=>e&&t.height===v.innerHeight,f=(v,M)=>{const T=new CustomEvent(l,{detail:{keyboardHeight:M?M.keyboardHeight:v.innerHeight-t.height}});v.dispatchEvent(T)},u=v=>{const M=new CustomEvent(c);v.dispatchEvent(M)},y=v=>{r=Object.assign({},t),t=A(v.visualViewport)},A=v=>({width:Math.round(v.width),height:Math.round(v.height),offsetTop:v.offsetTop,offsetLeft:v.offsetLeft,pageTop:v.pageTop,pageLeft:v.pageLeft,scale:v.scale})},218:(C,b,o)=>{o.d(b,{c:()=>r});var h=o(5861),p=o(7643),l=o(6884);const c=t=>{if(void 0===p.d||t===l.a.None||void 0===t)return null;const e=p.d.querySelector("ion-app");return null!=e?e:p.d.body},m=t=>{const e=c(t);return null===e?0:e.clientHeight},r=function(){var t=(0,h.Z)(function*(e){let a,i,d,n;const _=function(){var u=(0,h.Z)(function*(){const y=yield l.K.getResizeMode(),A=void 0===y?void 0:y.mode;a=()=>{void 0===n&&(n=m(A)),d=!0,s(d,A)},i=()=>{d=!1,s(d,A)},null==p.w||p.w.addEventListener("keyboardWillShow",a),null==p.w||p.w.addEventListener("keyboardWillHide",i)});return function(){return u.apply(this,arguments)}}(),s=(u,y)=>{e&&e(u,g(y))},g=u=>{if(0===n||n===m(u))return;const y=c(u);return null!==y?new Promise(A=>{const M=new ResizeObserver(()=>{y.clientHeight===n&&(M.disconnect(),A())});M.observe(y)}):void 0};return yield _(),{init:_,destroy:()=>{null==p.w||p.w.removeEventListener("keyboardWillShow",a),null==p.w||p.w.removeEventListener("keyboardWillHide",i),a=i=void 0},isKeyboardVisible:()=>d}});return function(a){return t.apply(this,arguments)}}()},9718:(C,b,o)=>{o.d(b,{c:()=>l});var h=o(7643),p=o(544);const l=(c,m,r)=>{let t;const e=()=>!(void 0===m()||void 0!==c.label||null===r()),i=()=>{const n=m();if(void 0===n)return;if(!e())return void n.style.removeProperty("width");const _=r().scrollWidth;if(0===_&&null===n.offsetParent&&void 0!==h.w&&"IntersectionObserver"in h.w){if(void 0!==t)return;const s=t=new IntersectionObserver(g=>{1===g[0].intersectionRatio&&(i(),s.disconnect(),t=void 0)},{threshold:.01,root:c});s.observe(n)}else n.style.setProperty("width",.75*_+"px")};return{calculateNotchWidth:()=>{e()&&(0,p.r)(()=>{i()})},destroy:()=>{t&&(t.disconnect(),t=void 0)}}}},1173:(C,b,o)=>{o.d(b,{S:()=>p});const p={bubbles:{dur:1e3,circles:9,fn:(l,c,m)=>{const r=l*c/m-l+"ms",t=2*Math.PI*c/m;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:(l,c,m)=>{const r=c/m,t=l*r-l+"ms",e=2*Math.PI*r;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(l,c)=>({r:6,style:{left:32-32*c+"%","animation-delay":-110*c+"ms"}})},lines:{dur:1e3,lines:8,fn:(l,c,m)=>({y1:14,y2:26,style:{transform:`rotate(${360/m*c+(c<m/2?180:-180)}deg)`,"animation-delay":l*c/m-l+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(l,c,m)=>({y1:12,y2:20,style:{transform:`rotate(${360/m*c+(c<m/2?180:-180)}deg)`,"animation-delay":l*c/m-l+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(l,c,m)=>({y1:17,y2:29,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":l*c/m-l+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(l,c,m)=>({y1:12,y2:20,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":l*c/m-l+"ms"}})}}},4666:(C,b,o)=>{o.r(b),o.d(b,{createSwipeBackGesture:()=>m});var h=o(544),p=o(1776),l=o(8077);o(4587);const m=(r,t,e,a,i)=>{const d=r.ownerDocument.defaultView;let n=(0,p.i)(r);const s=y=>n?-y.deltaX:y.deltaX;return(0,l.createGesture)({el:r,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:y=>(n=(0,p.i)(r),(y=>{const{startX:v}=y;return n?v>=d.innerWidth-50:v<=50})(y)&&t()),onStart:e,onMove:y=>{const v=s(y)/d.innerWidth;a(v)},onEnd:y=>{const A=s(y),v=d.innerWidth,M=A/v,O=(y=>n?-y.velocityX:y.velocityX)(y),P=O>=0&&(O>.2||A>v/2),S=(P?1-M:M)*v;let D=0;if(S>5){const L=S/Math.abs(O);D=Math.min(L,540)}i(P,M<=0?.01:(0,h.l)(0,M,.9999),D)}})}},8639:(C,b,o)=>{o.d(b,{w:()=>h});const h=(c,m,r)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(e=>{r(p(e,m))});return t.observe(c,{childList:!0,subtree:!0}),t},p=(c,m)=>{let r;return c.forEach(t=>{for(let e=0;e<t.addedNodes.length;e++)r=l(t.addedNodes[e],m)||r}),r},l=(c,m)=>1!==c.nodeType?void 0:(c.tagName===m.toUpperCase()?[c]:Array.from(c.querySelectorAll(m))).find(t=>t.value===c.value)},446:(C,b,o)=>{o.r(b),o.d(b,{DashboardPageModule:()=>s});var h=o(6814),p=o(95),l=o(7852),c=o(4670),m=o(5861),r=o(7394),t=o(9739),e=o(6689),a=o(5175);const i=["persentaseKalibrasiCanvas"],n=[{path:"",component:(()=>{class g{constructor(f,u){this.authServices=f,this.navCtrl=u,this.allpersentaseKalibrasiChartSub=new r.w0,this.allCompositionChart=[],this.formTitle="Dashboard"}ngAfterViewInit(){this.ComposisiChartMethod()}ngOnInit(){this.check_login()}check_login(){var f=this;return(0,m.Z)(function*(){const u=yield f.authServices.getId();u&&JSON.parse(u)})()}ComposisiChartMethod(){let f=[],u=[];this.allCompositionChart.forEach(y=>{f.push(y.area),u.push(y.category)}),this.doughnutChart||(this.doughnutChart=new t.kL(this.persentaseKalibrasiCanvas.nativeElement,{type:"doughnut",data:{labels:["Alat terkalibrasi","Alat Tidak Terkalibrasi"],datasets:[{label:"of %",data:[73,27],backgroundColor:["rgba(255, 159, 64, 0.2)","rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)"],hoverBackgroundColor:["#FFCE56","#FF6384","#36A2EB","#FFCE56","#FF6384"]}]},options:{animations:{tension:{duration:1e3,easing:"linear",from:1,to:0,loop:!0}}}}))}logout(){this.authServices.logout().then(()=>{this.navCtrl.navigateRoot("/login")}).catch(f=>{console.log(f)})}}return g.\u0275fac=function(f){return new(f||g)(e.Y36(a.e),e.Y36(l.SH))},g.\u0275cmp=e.Xpm({type:g,selectors:[["app-dashboard"]],viewQuery:function(f,u){if(1&f&&e.Gf(i,5),2&f){let y;e.iGM(y=e.CRH())&&(u.persentaseKalibrasiCanvas=y.first)}},decls:14,vars:3,consts:[[3,"translucent"],["mode","md","color","success"],["slot","start"],["autoHide","false"],["slot","end"],[1,"ion-padding",3,"fullscreen"],[2,"position","relative","height","20vh","width","40vw"],["persentaseKalibrasiCanvas",""]],template:function(f,u){1&f&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-title"),e._uU(3),e.qZA(),e.TgZ(4,"ion-buttons",2),e._UZ(5,"ion-menu-button",3),e.qZA(),e._UZ(6,"ion-buttons",4),e.qZA()(),e.TgZ(7,"ion-content",5)(8,"ion-card")(9,"ion-card-header"),e._uU(10," Persentase Chart "),e.qZA(),e.TgZ(11,"ion-card-content"),e._UZ(12,"canvas",6,7),e.qZA()()()),2&f&&(e.Q6J("translucent",!0),e.xp6(3),e.hij(" ",u.formTitle," "),e.xp6(4),e.Q6J("fullscreen",!0))},dependencies:[l.Sm,l.PM,l.FN,l.Zi,l.W2,l.Gu,l.fG,l.wd,l.sr]}),g})()}];let _=(()=>{class g{}return g.\u0275fac=function(f){return new(f||g)},g.\u0275mod=e.oAB({type:g}),g.\u0275inj=e.cJS({imports:[c.Bz.forChild(n),c.Bz]}),g})(),s=(()=>{class g{}return g.\u0275fac=function(f){return new(f||g)},g.\u0275mod=e.oAB({type:g}),g.\u0275inj=e.cJS({imports:[h.ez,p.u5,l.Pc,_]}),g})()},7067:(C,b,o)=>{o.r(b),o.d(b,{GenerateLaporanPageModule:()=>f});var h=o(6814),p=o(95),l=o(7852),c=o(4670),m=o(7394),r=o(9739),t=o(6689),e=o(3454),a=o(5861),i=o(5819),d=o(6751);let n=(()=>{class u{constructor(A,v,M,O,T){this.storage=A,this.router=v,this.alertController=M,this.loadingController=O,this.DB=T}login(A,v){var M=this;return(0,a.Z)(function*(){const O=yield M.loadingController.create();yield O.present(),M.DB.getLogin(A,v).then(function(){var T=(0,a.Z)(function*(P){console.log("isi auth service",P);const E=JSON.parse(P);if(console.log(E.status),1==E.status){yield O.dismiss();let S=E.data;console.log("result",S),M.setUserData(JSON.stringify(S)),M.router.navigateByUrl("/menu/dashboard",{replaceUrl:!0})}else 0==E.status?M.router.navigateByUrl("/login",{replaceUrl:!0}):(yield O.dismiss(),yield(yield M.alertController.create({header:"Login failed",message:"Mohon maaf akun Anda Belum di Verifikasi",buttons:["OK"]})).present())});return function(P){return T.apply(this,arguments)}}()).catch(function(){var T=(0,a.Z)(function*(P){throw yield O.dismiss(),yield(yield M.alertController.create({header:"Login failed",message:JSON.stringify(P),buttons:["OK"]})).present(),P});return function(P){return T.apply(this,arguments)}}()),yield O.dismiss()})()}setUserData(A){this.storage.setStorage("uid",A)}}return u.\u0275fac=function(A){return new(A||u)(t.LFG(i.V),t.LFG(c.F0),t.LFG(l.Br),t.LFG(l.HT),t.LFG(d.k))},u.\u0275prov=t.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})();const _=["persentaseKalibrasiCanvas"],g=[{path:"",component:(()=>{class u{constructor(A,v){this.global=A,this.dashboarServices=v,this.allpersentaseKalibrasiChartSub=new m.w0,this.allpersentaseKalibrasiChart=[],this.formTitle="Laporan"}ngOnInit(){}ngAfterViewInit(){this.persentaseKalibrasiChartMethod()}persentaseKalibrasiChartMethod(){let A=[],v=[];this.allpersentaseKalibrasiChart.forEach(M=>{A.push(M.area),v.push(M.category)}),this.doughnutChart||(this.doughnutChart=new r.kL(this.persentaseKalibrasiCanvas.nativeElement,{type:"doughnut",data:{labels:["Alat terkalibrasi","Alat Tidak Terkalibrasi"],datasets:[{label:"of %",data:[73,27],backgroundColor:["rgba(255, 159, 64, 0.2)","rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)"],hoverBackgroundColor:["#FFCE56","#FF6384","#36A2EB","#FFCE56","#FF6384"]}]},options:{animations:{tension:{duration:1e3,easing:"linear",from:1,to:0,loop:!0}}}}))}}return u.\u0275fac=function(A){return new(A||u)(t.Y36(e.U),t.Y36(n))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-generate-laporan"]],viewQuery:function(A,v){if(1&A&&t.Gf(_,5),2&A){let M;t.iGM(M=t.CRH())&&(v.persentaseKalibrasiCanvas=M.first)}},decls:20,vars:3,consts:[[3,"translucent"],["mode","md","color","success"],["slot","start"],["autoHide","true"],["slot","end"],[1,"ion-padding",3,"fullscreen"],[2,"position","relative","height","20vh","width","40vw"],["persentaseKalibrasiCanvas",""],["pemilikAlatCanvas",""]],template:function(A,v){1&A&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-title"),t._uU(3),t.qZA(),t.TgZ(4,"ion-buttons",2),t._UZ(5,"ion-menu-button",3),t.qZA(),t._UZ(6,"ion-buttons",4),t.qZA()(),t.TgZ(7,"ion-content",5)(8,"ion-card")(9,"ion-card-header"),t._uU(10," Persentase Alat Terkalibrasi "),t.qZA(),t.TgZ(11,"ion-card-content"),t._UZ(12,"canvas",6,7),t.qZA()(),t.TgZ(14,"ion-card")(15,"ion-card-header"),t._uU(16," Jumlah Alat per Pemilik "),t.qZA(),t.TgZ(17,"ion-card-content"),t._UZ(18,"canvas",null,8),t.qZA()()()),2&A&&(t.Q6J("translucent",!0),t.xp6(3),t.hij(" ",v.formTitle," "),t.xp6(4),t.Q6J("fullscreen",!0))},dependencies:[l.Sm,l.PM,l.FN,l.Zi,l.W2,l.Gu,l.fG,l.wd,l.sr]}),u})()}];let w=(()=>{class u{}return u.\u0275fac=function(A){return new(A||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[c.Bz.forChild(g),c.Bz]}),u})(),f=(()=>{class u{}return u.\u0275fac=function(A){return new(A||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[h.ez,p.u5,l.Pc,w]}),u})()},8655:(C,b,o)=>{o.r(b),o.d(b,{SeluruhAlatPageModule:()=>P});var h=o(6814),p=o(95),l=o(7852),c=o(4670),m=o(5861),r=o(7394),t=o(6689),e=o(3454),a=o(4338),i=o(5175);function d(E,S){if(1&E&&t.GkF(0,15),2&E){t.oxw();const D=t.MAs(21);t.Q6J("ngTemplateOutlet",D)}}function n(E,S){if(1&E&&t.GkF(0,15),2&E){t.oxw();const D=t.MAs(17);t.Q6J("ngTemplateOutlet",D)}}function _(E,S){if(1&E&&t.GkF(0,15),2&E){t.oxw();const D=t.MAs(19);t.Q6J("ngTemplateOutlet",D)}}function s(E,S){if(1&E&&t.GkF(0,15),2&E){t.oxw();const D=t.MAs(15);t.Q6J("ngTemplateOutlet",D)}}function g(E,S){if(1&E&&t.GkF(0,15),2&E){t.oxw();const D=t.MAs(13);t.Q6J("ngTemplateOutlet",D)}}function w(E,S){1&E&&(t.TgZ(0,"ion-button",16),t._uU(1,"Danger"),t.qZA())}function f(E,S){1&E&&(t.TgZ(0,"ion-button",16),t._uU(1,"Dalam Perbaikan"),t.qZA())}function u(E,S){1&E&&(t.TgZ(0,"ion-button",17),t._uU(1,"Warning"),t.qZA())}function y(E,S){1&E&&(t.TgZ(0,"ion-button",18),t._uU(1,"Pakai"),t.qZA())}function A(E,S){1&E&&(t.TgZ(0,"ion-button",19),t._uU(1,"Default"),t.qZA())}function v(E,S){if(1&E&&(t.TgZ(0,"ion-row")(1,"ion-col",6),t._uU(2),t.qZA(),t.TgZ(3,"ion-col"),t._uU(4),t.qZA(),t.TgZ(5,"ion-col"),t.ynx(6,8),t.YNc(7,d,1,1,"ng-container",9),t.YNc(8,n,1,1,"ng-container",9),t.YNc(9,_,1,1,"ng-container",9),t.YNc(10,s,1,1,"ng-container",9),t.YNc(11,g,1,1,"ng-container",9),t.BQk(),t.YNc(12,w,2,0,"ng-template",null,10,t.W1O),t.YNc(14,f,2,0,"ng-template",null,11,t.W1O),t.YNc(16,u,2,0,"ng-template",null,12,t.W1O),t.YNc(18,y,2,0,"ng-template",null,13,t.W1O),t.YNc(20,A,2,0,"ng-template",null,14,t.W1O),t.qZA()()),2&E){const D=S.$implicit,L=S.index;t.xp6(2),t.Oqu(L+1),t.xp6(2),t.Oqu(null==D?null:D.name),t.xp6(2),t.Q6J("ngSwitch",null==D?null:D.monitoring_status),t.xp6(1),t.Q6J("ngSwitchCase",null),t.xp6(1),t.Q6J("ngSwitchCase","menunggu_sparepart"),t.xp6(1),t.Q6J("ngSwitchCase","layak_pakai"),t.xp6(1),t.Q6J("ngSwitchCase","sedang_dalam_perbaikan"),t.xp6(1),t.Q6J("ngSwitchCase","gagal_perbaikan")}}const O=[{path:"",component:(()=>{class E{constructor(D,L,B){this.global=D,this.seluruhAlatServices=L,this.authServices=B,this.formTitle="Seluruh Alat",this.allContentDummy=[],this.allContentDummySub=new r.w0,this.isLoading=!1,this.allAlatData=[],this.allAlatDataSub=new r.w0}ngOnInit(){this.getAuth(),this.allAlatDataSub=this.seluruhAlatServices.allDataAlatKesehatan.subscribe(D=>{this.allAlatData=D instanceof Array?D:this.allAlatData.concat(D)}),this.getAllData()}getAuth(){var D=this;return(0,m.Z)(function*(){const L=yield D.authServices.getId();if(L){let B=JSON.parse(L);console.log("this.token",B.access_token),D.token=B.access_token}})()}getAllData(){var D=this;return(0,m.Z)(function*(){D.isLoading=!0,D.global.showLoader(),setTimeout((0,m.Z)(function*(){yield D.seluruhAlatServices.getSeluruhAlatData(D.token),D.isLoading=!1,D.global.hideLoader()}),1e3)})()}ngOnDestroy(){this.allContentDummySub&&this.allContentDummySub.unsubscribe(),this.allAlatDataSub&&this.allAlatDataSub.unsubscribe()}}return E.\u0275fac=function(D){return new(D||E)(t.Y36(e.U),t.Y36(a.G),t.Y36(i.e))},E.\u0275cmp=t.Xpm({type:E,selectors:[["app-seluruh-alat"]],decls:18,vars:4,consts:[[3,"translucent"],["mode","md","color","success"],["slot","start"],["autoHide","true"],["slot","end"],[3,"fullscreen"],["size","2"],[4,"ngFor","ngForOf"],[3,"ngSwitch"],[3,"ngTemplateOutlet",4,"ngSwitchCase"],["Danger",""],["sedangDalamPerbaikan",""],["masaWarning",""],["siapPakai",""],["default",""],[3,"ngTemplateOutlet"],["size","small","color","danger"],["size","small","color","warning"],["size","small","color","success"],["size","small"]],template:function(D,L){1&D&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-title"),t._uU(3),t.qZA(),t.TgZ(4,"ion-buttons",2),t._UZ(5,"ion-menu-button",3),t.qZA(),t._UZ(6,"ion-buttons",4),t.qZA()(),t.TgZ(7,"ion-content",5)(8,"ion-grid")(9,"ion-row")(10,"ion-col",6),t._uU(11,"No"),t.qZA(),t.TgZ(12,"ion-col"),t._uU(13,"Alat"),t.qZA(),t.TgZ(14,"ion-col"),t._uU(15,"Status"),t.qZA()()(),t.TgZ(16,"ion-grid"),t.YNc(17,v,22,8,"ion-row",7),t.qZA()()),2&D&&(t.Q6J("translucent",!0),t.xp6(3),t.hij(" ",L.formTitle," "),t.xp6(4),t.Q6J("fullscreen",!0),t.xp6(10),t.Q6J("ngForOf",L.allAlatData))},dependencies:[h.sg,h.tP,h.RF,h.n9,l.YG,l.Sm,l.wI,l.W2,l.jY,l.Gu,l.fG,l.Nd,l.wd,l.sr]}),E})()}];let T=(()=>{class E{}return E.\u0275fac=function(D){return new(D||E)},E.\u0275mod=t.oAB({type:E}),E.\u0275inj=t.cJS({imports:[c.Bz.forChild(O),c.Bz]}),E})(),P=(()=>{class E{}return E.\u0275fac=function(D){return new(D||E)},E.\u0275mod=t.oAB({type:E}),E.\u0275inj=t.cJS({imports:[h.ez,p.u5,l.Pc,T]}),E})()},5175:(C,b,o)=>{o.d(b,{e:()=>a});var h=o(5861),p=o(4212),l=o.n(p),c=o(6689),m=o(5819),r=o(4670),t=o(7852),e=o(6751);let a=(()=>{class i{constructor(n,_,s,g,w){this.storage=n,this.router=_,this.alertController=s,this.loadingController=g,this.DB=w}login(n,_){var s=this;return(0,h.Z)(function*(){const g=yield s.loadingController.create();yield g.present(),s.DB.getLogin(n,_).then(function(){var w=(0,h.Z)(function*(f){const u=JSON.parse(f);if("success"==u.meta.status){yield g.dismiss();let y=u.data.user;y.access_token=u.data.access_token,y.token_type=u.data.token_type,console.log("result",y),s.setUserData(JSON.stringify(y)),s.router.navigateByUrl("/menu/dashboard",{replaceUrl:!0}),l().getDeviceState(A=>{s.idDevice=A.userId,console.log("this.idDevice",s.idDevice),s.DB.updateOneSignal(s.idDevice,y.access_token).then(function(){var v=(0,h.Z)(function*(M){console.log("updateOneSignal",M)});return function(M){return v.apply(this,arguments)}}()).catch(function(){var v=(0,h.Z)(function*(M){throw console.log("error updateOneSignal",M),M});return function(M){return v.apply(this,arguments)}}())})}else"error"==u.meta.status?s.router.navigateByUrl("/login",{replaceUrl:!0}):(yield g.dismiss(),yield(yield s.alertController.create({header:"Login failed",message:"Mohon maaf akun Anda Belum di Verifikasi",buttons:["OK"]})).present())});return function(f){return w.apply(this,arguments)}}()).catch(function(){var w=(0,h.Z)(function*(f){throw yield g.dismiss(),yield(yield s.alertController.create({header:"Login failed",message:JSON.stringify(f),buttons:["OK"]})).present(),f});return function(f){return w.apply(this,arguments)}}()),yield g.dismiss()})()}setUserData(n){this.storage.setStorage("uid",n)}setUserDeviceNotification(n){this.storage.setStorage("notication",n)}getUserDeviceNotificationData(){var n=this;return(0,h.Z)(function*(){return(yield n.storage.getStorage("notication")).value})()}getId(){var n=this;return(0,h.Z)(function*(){return(yield n.storage.getStorage("uid")).value})()}resetPassword(){}logout(){var n=this;return(0,h.Z)(function*(){return yield n.storage.removeStorage("uid")})()}}return i.\u0275fac=function(n){return new(n||i)(c.LFG(m.V),c.LFG(r.F0),c.LFG(t.Br),c.LFG(t.HT),c.LFG(e.k))},i.\u0275prov=c.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},6751:(C,b,o)=>{o.d(b,{k:()=>m});var h=o(9862),p=o(553),l=o(6689),c=o(5819);let m=(()=>{class r{constructor(e,a){this.http=e,this.storage=a,this.getViewListContent=[{id:1,name:"Will Smith",gender:"Male",country:"USA",status:1},{id:2,name:"Jackline Joy",gender:"Female",country:"Sri Lanak",status:2},{id:3,name:"Alu Arjun",gender:"Male",country:"Microsoft",status:3},{id:4,name:"Kavitha Kumar",gender:"Female",country:"India",status:4},{id:5,name:"John Snow",gender:"Male",country:"United Kingdom",status:1},{id:6,name:"Priya kanana",gender:"Female",country:"India",status:2},{id:7,name:"Shri Devi",gender:"Female",country:"Sri Lanka",status:3},{id:8,name:"Richard Roy",gender:"Male",country:"France",status:4},{id:9,name:"Sonu Nigam",gender:"Male",country:"India",status:1},{id:10,name:"Priya Dutt",gender:"Female",country:"USA",status:2}],this.getInstalasi=[{id:"01",name:"IGD",full_name:"Instalasi Gawat Darurat",status:1},{id:"02",name:"HD",full_name:"Hemodialisis",status:1},{id:"03",name:"Patologi",full_name:"Patologi Klinik",status:1},{id:"04",name:"Rawat Inap Anggrek",full_name:"Rawat Inap Anggrek",status:1},{id:"05",name:"Poli Kebidanan",full_name:"Poli Kebidanan",status:1}],this.baseUrl=p.N.baseUrl+"api/",this.key=p.N.key}getLogin(e,a){let i={email:e,password:a};const d={headers:new h.WM({"Content-Type":"application/json","x-api-key":this.key})};return new Promise((n,_)=>{this.http.post(this.baseUrl+"login",i,d).subscribe(s=>{n(JSON.stringify(s))},s=>{400==s.status?console.log("BAD REQUEST!"):401==s.status?console.log("password incorect!"):404==s.status?console.log("password or Username incorect!"):console.log(s),_(s)})})}getNotification(e){const a={headers:new h.WM({"Content-Type":"application/json","x-api-key":this.key,Authorization:`Bearer ${e}`})};return new Promise((i,d)=>{this.http.get(this.baseUrl+"notification",a).subscribe(n=>{i(JSON.stringify(n))},n=>{400==n.status?console.log("BAD REQUEST!"):401==n.status?console.log("password incorect!"):404==n.status?console.log("password or Username incorect!"):console.log(n),d(n)})})}uploadImage(e,a,i,d){const n={headers:new h.WM({"Content-Type":"application/json","x-api-key":this.key,Authorization:`Bearer ${d}`})};return new Promise((_,s)=>{const g=new FormData;g.append("file",a,`image.${i}`),console.log("formData",g),this.http.post(this.baseUrl+"deviceDetail/updateCalibrationStatus?id="+e,g,n).subscribe(w=>{_(JSON.stringify(w))},w=>{s(w)})})}getAllAlatKesehatan(e){const a={headers:new h.WM({"Content-Type":"application/json","x-api-key":this.key,Authorization:`Bearer ${e}`})};return new Promise((i,d)=>{this.http.get(this.baseUrl+"medicalDevice",a).subscribe(n=>{i(JSON.stringify(n))},n=>{400==n.status?console.log("BAD REQUEST!"):401==n.status?console.log("password incorect!"):404==n.status?console.log("password or Username incorect!"):console.log(n),d(n)})})}getAllAlatKesehatanById(e,a){const d={headers:new h.WM({"Content-Type":"application/json","x-api-key":this.key,Authorization:`Bearer ${a}`})};return new Promise((n,_)=>{this.http.get(this.baseUrl+"medicalDevice?id="+e,d).subscribe(s=>{n(JSON.stringify(s))},s=>{400==s.status?console.log("BAD REQUEST!"):401==s.status?console.log("password incorect!"):404==s.status?console.log("password or Username incorect!"):console.log(s),_(s)})})}saveInputAlatKesehatan(e,a){const i={headers:new h.WM({"Content-Type":"application/json","x-api-key":this.key,Authorization:`Bearer ${a}`})};return console.log("data saveInputAlatKesehatan",e[0]),new Promise((d,n)=>{this.http.post(this.baseUrl+"medicalDevice/create",e[0],i).subscribe(_=>{d(JSON.stringify(_))},_=>{400==_.status?console.log("BAD REQUEST!"):401==_.status?console.log("key incorect!"):404==_.status?console.log("Not Found"):console.log(_),n(_)})})}updateOneSignal(e,a){console.log("updateOneSignal idDevice",e);let i={one_signal:e};const d={headers:new h.WM({"Content-Type":"application/json","x-api-key":this.key,Authorization:`Bearer ${a}`})};return console.log("data saveInputAlatKesehatan"),new Promise((n,_)=>{this.http.post(this.baseUrl+"updateOneSignal",i,d).subscribe(s=>{n(JSON.stringify(s))},s=>{400==s.status?console.log("BAD REQUEST!"):401==s.status?console.log("key incorect!"):404==s.status?console.log("Not Found"):console.log(s),_(s)})})}updateAlatKesehatan(e,a,i){const d={headers:new h.WM({"Content-Type":"application/json","x-api-key":this.key,Authorization:`Bearer ${i}`})};return new Promise((n,_)=>{this.http.post(this.baseUrl+"medicalDevice/update?id="+e,a,d).subscribe(s=>{n(JSON.stringify(s))},s=>{400==s.status?console.log("BAD REQUEST!"):401==s.status?console.log("key incorect!"):404==s.status?console.log("Not Found"):console.log(s),_(s)})})}updateAlatKesehatanCalibration(e,a,i){const d={headers:new h.WM({"Content-Type":"application/json","x-api-key":this.key,Authorization:`Bearer ${i}`})};return new Promise((n,_)=>{this.http.post(this.baseUrl+"deviceDetail/updateCalibrationStatus?id="+e,a,d).subscribe(s=>{n(JSON.stringify(s))},s=>{400==s.status?console.log("BAD REQUEST!"):401==s.status?console.log("key incorect!"):404==s.status?console.log("Not Found"):console.log(s),_(s)})})}sendAndCreateNotificationMonitoring(e,a,i){let d={roles:["ADMIN","KSO","BPFK","KATIM"],title:"Notifikasi Status Alat "+e,link:"/menu/monitoring-alat",device_id:a.data.id,message:a.data.name+" dalam status "+a.data.monitoring_status};const n={headers:new h.WM({"Content-Type":"application/json","x-api-key":this.key,Authorization:`Bearer ${i}`})};return new Promise((_,s)=>{this.http.post(this.baseUrl+"notification/createForRoles",d,n).subscribe(g=>{_(JSON.stringify(g))},g=>{400==g.status?console.log("BAD REQUEST!"):401==g.status?console.log("key incorect!"):404==g.status?console.log("Not Found"):console.log(g),s(g)})})}sendAndCreateNotificationCalibration(e,a,i){console.log("data sendAndCreateNotificationCalibration",a),new Date(a.re_calibration);let n={roles:["ADMIN","BPFK","KSO"],title:"Notifikasi Kalibrasi Alat",link:"/menu/jadwal-kalibrasi",device_id:a.id,message:a.name+"data Diperbaharui dengan status "+a.calibration_status};const _={headers:new h.WM({"Content-Type":"application/json","x-api-key":this.key,Authorization:`Bearer ${i}`})};return new Promise((s,g)=>{this.http.post(this.baseUrl+"notification/createForRoles",n,_).subscribe(w=>{s(JSON.stringify(w))},w=>{400==w.status?console.log("BAD REQUEST!"):401==w.status?console.log("key incorect!"):404==w.status?console.log("Not Found"):console.log(w),g(w)})})}sendAndCreateNotificationBPFK(e,a){console.log("data sendAndCreateNotificationBPFK",e);var i=new Date(e.re_calibration);let d={roles:["BPFK","KSO"],title:"Notifikasi Kalibrasi Alat",link:"/menu/jadwal-kalibrasi",device_id:e.id,message:e.name+" Memasuki Tanggal Expired Untuk Dikalibrasi Ulang Tanggal "+i.toLocaleString("en-ID")};const n={headers:new h.WM({"Content-Type":"application/json","x-api-key":this.key,Authorization:`Bearer ${a}`})};return new Promise((_,s)=>{this.http.post(this.baseUrl+"notification/createForRoles",d,n).subscribe(g=>{_(JSON.stringify(g))},g=>{400==g.status?console.log("BAD REQUEST!"):401==g.status?console.log("key incorect!"):404==g.status?console.log("Not Found"):console.log(g),s(g)})})}}return r.\u0275fac=function(e){return new(e||r)(l.LFG(h.eN),l.LFG(c.V))},r.\u0275prov=l.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);
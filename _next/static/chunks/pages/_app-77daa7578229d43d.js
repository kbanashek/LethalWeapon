(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(3713)}])},8199:function(e,t){"use strict";var r,n,s,o;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ACTION_FAST_REFRESH:function(){return d},ACTION_NAVIGATE:function(){return a},ACTION_PREFETCH:function(){return u},ACTION_REFRESH:function(){return l},ACTION_RESTORE:function(){return i},ACTION_SERVER_ACTION:function(){return f},ACTION_SERVER_PATCH:function(){return c},PrefetchCacheEntryStatus:function(){return n},PrefetchKind:function(){return r},isThenable:function(){return h}});let l="refresh",a="navigate",i="restore",c="server-patch",u="prefetch",d="fast-refresh",f="server-action";function h(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(s=r||(r={})).AUTO="auto",s.FULL="full",s.TEMPORARY="temporary",(o=n||(n={})).fresh="fresh",o.reusable="reusable",o.expired="expired",o.stale="stale",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7195:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(8337),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8342:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return g}});let n=r(8754),s=r(5893),o=n._(r(7294)),l=r(6075),a=r(3955),i=r(8041),c=r(9903),u=r(5490),d=r(1928),f=r(257),h=r(4229),x=r(7195),p=r(9470),m=r(8199),v=new Set;function j(e,t,r,n,s,o){if(o||(0,a.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let s=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(v.has(s))return;v.add(s)}(async()=>o?e.prefetch(t,s):e.prefetch(t,r,n))().catch(e=>{})}}function b(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}let g=o.default.forwardRef(function(e,t){let r,n;let{href:i,as:v,children:g,prefetch:y=null,passHref:N,replace:w,shallow:C,scroll:k,locale:_,onClick:E,onMouseEnter:O,onTouchStart:M,legacyBehavior:L=!1,...P}=e;r=g,L&&("string"==typeof r||"number"==typeof r)&&(r=(0,s.jsx)("a",{children:r}));let T=o.default.useContext(d.RouterContext),R=o.default.useContext(f.AppRouterContext),A=null!=T?T:R,I=!T,S=!1!==y,F=null===y?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,{href:U,as:W}=o.default.useMemo(()=>{if(!T){let e=b(i);return{href:e,as:v?b(v):e}}let[e,t]=(0,l.resolveHref)(T,i,!0);return{href:e,as:v?(0,l.resolveHref)(T,v):t||e}},[T,i,v]),H=o.default.useRef(U),B=o.default.useRef(W);L&&(n=o.default.Children.only(r));let K=L?n&&"object"==typeof n&&n.ref:t,[D,G,V]=(0,h.useIntersection)({rootMargin:"200px"}),z=o.default.useCallback(e=>{(B.current!==W||H.current!==U)&&(V(),B.current=W,H.current=U),D(e),K&&("function"==typeof K?K(e):"object"==typeof K&&(K.current=e))},[W,K,U,V,D]);o.default.useEffect(()=>{A&&G&&S&&j(A,U,W,{locale:_},{kind:F},I)},[W,U,G,_,S,null==T?void 0:T.locale,A,I,F]);let X={ref:z,onClick(e){L||"function"!=typeof E||E(e),L&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),A&&!e.defaultPrevented&&function(e,t,r,n,s,l,i,c,u){let{nodeName:d}=e.currentTarget;if("A"===d.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!(0,a.isLocalURL)(r)))return;e.preventDefault();let f=()=>{let e=null==i||i;"beforePopState"in t?t[s?"replace":"push"](r,n,{shallow:l,locale:c,scroll:e}):t[s?"replace":"push"](n||r,{scroll:e})};u?o.default.startTransition(f):f()}(e,A,U,W,w,C,k,_,I)},onMouseEnter(e){L||"function"!=typeof O||O(e),L&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),A&&(S||!I)&&j(A,U,W,{locale:_,priority:!0,bypassPrefetchedCheck:!0},{kind:F},I)},onTouchStart:function(e){L||"function"!=typeof M||M(e),L&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),A&&(S||!I)&&j(A,U,W,{locale:_,priority:!0,bypassPrefetchedCheck:!0},{kind:F},I)}};if((0,c.isAbsoluteUrl)(W))X.href=W;else if(!L||N||"a"===n.type&&!("href"in n.props)){let e=void 0!==_?_:null==T?void 0:T.locale,t=(null==T?void 0:T.isLocaleDomain)&&(0,x.getDomainLocale)(W,e,null==T?void 0:T.locales,null==T?void 0:T.domainLocales);X.href=t||(0,p.addBasePath)((0,u.addLocale)(W,e,null==T?void 0:T.defaultLocale))}return L?o.default.cloneElement(n,X):(0,s.jsx)("a",{...P,...X,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4229:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return i}});let n=r(7294),s=r(4474),o="function"==typeof IntersectionObserver,l=new Map,a=[];function i(e){let{rootRef:t,rootMargin:r,disabled:i}=e,c=i||!o,[u,d]=(0,n.useState)(!1),f=(0,n.useRef)(null),h=(0,n.useCallback)(e=>{f.current=e},[]);return(0,n.useEffect)(()=>{if(o){if(c||u)return;let e=f.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:s,elements:o}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let s=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=s.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:s},a.push(r),l.set(r,t),t}(r);return o.set(e,t),s.observe(e),function(){if(o.delete(e),s.unobserve(e),0===o.size){s.disconnect(),l.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!u){let e=(0,s.requestIdleCallback)(()=>d(!0));return()=>(0,s.cancelIdleCallback)(e)}},[c,r,t,u,f.current]),[h,u,(0,n.useCallback)(()=>{d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3713:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(5893);r(876);var s=r(7294),o=r(9008),l=r.n(o),a=r(1664),i=r.n(a),c=()=>{let[e,t]=(0,s.useState)(!1),[r,o]=(0,s.useState)(!1);return(0,n.jsx)("header",{className:"bg-ocean-blue shadow-md",children:(0,n.jsxs)("div",{className:"container-custom py-4",children:[(0,n.jsxs)("div",{className:"flex justify-between items-center",children:[(0,n.jsx)(i(),{href:"/",className:"text-sunset-orange text-2xl md:text-3xl font-marker hover:text-white transition-colors tracking-wide",style:{textShadow:"1px 1px 2px rgba(0,0,0,0.7)"},children:"Lethal Weapon Fishing Charters"}),(0,n.jsx)("div",{className:"md:hidden",children:(0,n.jsx)("button",{type:"button",className:"text-white",onClick:()=>t(!e),children:(0,n.jsx)("svg",{className:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e?(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}):(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})}),(0,n.jsxs)("nav",{className:"hidden md:flex space-x-8 items-center",children:[(0,n.jsx)(i(),{href:"/",className:"text-white hover:text-sunset-orange transition-colors",children:"Home"}),(0,n.jsxs)("div",{className:"relative group",children:[(0,n.jsxs)("button",{className:"text-white hover:text-ocean-blue transition-colors flex items-center py-2 px-3 rounded-md hover:bg-blue-50",onClick:()=>o(!r),onMouseEnter:()=>o(!0),"aria-expanded":r,"aria-haspopup":"true",children:["Our Boats",(0,n.jsx)("svg",{className:"ml-1 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),(0,n.jsx)("div",{className:"absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-50 ".concat(r?"block":"hidden"),onMouseEnter:()=>o(!0),onMouseLeave:()=>{setTimeout(()=>o(!1),200)},role:"menu","aria-orientation":"vertical","aria-labelledby":"boats-menu",children:(0,n.jsxs)("div",{className:"py-1",children:[(0,n.jsx)(i(),{href:"/crusader",className:"block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-ocean-blue",role:"menuitem",children:"34ft Crusader"}),(0,n.jsx)(i(),{href:"/grady-white",className:"block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-ocean-blue",role:"menuitem",children:"23' Grady-White"})]})})]}),(0,n.jsx)(i(),{href:"/captain",className:"text-white hover:text-sunset-orange transition-colors",children:"About Captain"}),(0,n.jsx)(i(),{href:"/rates",className:"text-white hover:text-sunset-orange transition-colors",children:"Rates"}),(0,n.jsx)(i(),{href:"/gallery",className:"text-white hover:text-sunset-orange transition-colors",children:"Gallery"}),(0,n.jsx)(i(),{href:"/contact",className:"text-white hover:text-sunset-orange transition-colors",children:"Contact"})]})]}),e&&(0,n.jsx)("nav",{className:"md:hidden mt-4 pb-4",children:(0,n.jsxs)("div",{className:"flex flex-col space-y-3",children:[(0,n.jsx)(i(),{href:"/",className:"text-white hover:text-sunset-orange transition-colors",onClick:()=>t(!1),children:"Home"}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("button",{className:"text-white hover:text-sunset-orange transition-colors flex items-center py-2",onClick:()=>o(!r),"aria-expanded":r,"aria-haspopup":"true",children:["Our Boats",(0,n.jsx)("svg",{className:"ml-1 h-4 w-4 transform ".concat(r?"rotate-180":""),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),r&&(0,n.jsxs)("div",{className:"pl-4 mt-2 space-y-2",role:"menu","aria-orientation":"vertical","aria-labelledby":"mobile-boats-menu",children:[(0,n.jsx)(i(),{href:"/crusader",className:"block text-white hover:text-sunset-orange transition-colors py-2",onClick:()=>{t(!1),o(!1)},role:"menuitem",children:"34ft Crusader"}),(0,n.jsx)(i(),{href:"/grady-white",className:"block text-white hover:text-sunset-orange transition-colors py-2",onClick:()=>{t(!1),o(!1)},role:"menuitem",children:"23' Grady-White"})]})]}),(0,n.jsx)(i(),{href:"/captain",className:"text-white hover:text-sunset-orange transition-colors",onClick:()=>t(!1),children:"About Captain"}),(0,n.jsx)(i(),{href:"/rates",className:"text-white hover:text-sunset-orange transition-colors",onClick:()=>t(!1),children:"Rates"}),(0,n.jsx)(i(),{href:"/gallery",className:"text-white hover:text-sunset-orange transition-colors",onClick:()=>t(!1),children:"Gallery"}),(0,n.jsx)(i(),{href:"/contact",className:"text-white hover:text-sunset-orange transition-colors",onClick:()=>t(!1),children:"Contact"})]})})]})})},u=()=>{let e=new Date().getFullYear();return(0,n.jsx)("footer",{className:"bg-deep-sea text-white",children:(0,n.jsxs)("div",{className:"container-custom py-8",children:[(0,n.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"text-xl font-bold text-white mb-4",children:"Lethal Weapon Fishing Charters"}),(0,n.jsx)("p",{className:"mb-4",children:"Experience the thrill of deep sea fishing with our professional charter services. We provide unforgettable fishing adventures for anglers of all skill levels."})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"text-xl font-bold text-white mb-4",children:"Quick Links"}),(0,n.jsxs)("ul",{className:"space-y-2",children:[(0,n.jsx)("li",{children:(0,n.jsx)(i(),{href:"/",className:"hover:text-sunset-orange transition-colors",children:"Home"})}),(0,n.jsx)("li",{children:(0,n.jsx)(i(),{href:"/rates",className:"hover:text-sunset-orange transition-colors",children:"Rates"})}),(0,n.jsx)("li",{children:(0,n.jsx)(i(),{href:"/gallery",className:"hover:text-sunset-orange transition-colors",children:"Gallery"})}),(0,n.jsx)("li",{children:(0,n.jsx)(i(),{href:"/contact",className:"hover:text-sunset-orange transition-colors",children:"Contact"})})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"text-xl font-bold text-white mb-4",children:"Contact Us"}),(0,n.jsxs)("address",{className:"not-italic",children:[(0,n.jsx)("p",{className:"mb-2",children:"123 Harbor Drive"}),(0,n.jsx)("p",{className:"mb-2",children:"Coastal City, FL 12345"}),(0,n.jsx)("p",{className:"mb-2",children:"Phone: (555) 123-4567"}),(0,n.jsx)("p",{className:"mb-2",children:"Email: info@deepseacharters.com"})]})]})]}),(0,n.jsx)("div",{className:"border-t border-gray-700 mt-8 pt-6 text-center",children:(0,n.jsxs)("p",{children:["\xa9 ",e," Lethal Weapon Fishing Charters. All rights reserved."]})})]})})},d=e=>{let{children:t,title:r="Lethal Weapon Fishing Charters - Unforgettable Fishing Adventures",description:s="Experience the thrill of deep sea fishing with our professional charter services. Book your fishing adventure today!"}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l(),{children:[(0,n.jsx)("title",{children:r}),(0,n.jsx)("meta",{name:"description",content:s}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,n.jsx)(c,{}),(0,n.jsx)("main",{className:"flex-grow",children:t}),(0,n.jsx)(u,{})]})]})};function f(e){let{Component:t,pageProps:r}=e;return(0,n.jsx)(d,{children:(0,n.jsx)(t,{...r})})}},876:function(){},9008:function(e,t,r){e.exports=r(3867)},1664:function(e,t,r){e.exports=r(8342)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(3079)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(3678)}])},8045:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(s){c=!0,i=s}finally{try{a||null==r.return||r.return()}finally{if(c)throw i}}return o}}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}var s,u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),l=(s=r(5443))&&s.__esModule?s:{default:s},f=r(5809),d=r(7190);function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){for(var t=arguments,r=function(r){var n=null!=t[r]?t[r]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){m(e,t,n[t])}))},n=1;n<arguments.length;n++)r(n);return e}var h=new Set,y=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var v=new Map([["default",function(e){var t=e.root,r=e.src,n=e.width,i=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(i||75)}],["imgix",function(e){var t=e.root,r=e.src,n=e.width,i=e.quality,o=new URL("".concat(t).concat(N(r))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.root,r=e.src,n=e.width,i=e.quality,o=["f_auto","c_limit","w_"+n,"q_"+(i||"auto")].join(",")+"/";return"".concat(t).concat(o).concat(N(r))}],["akamai",function(e){var t=e.root,r=e.src,n=e.width;return"".concat(t).concat(N(r),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function b(e){return void 0!==e.default}var _={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"imgix"}||f.imageConfigDefault,g=_.deviceSizes,w=_.imageSizes,j=_.loader,A=_.path,x=(_.domains,a(g).concat(a(w)));function S(e){var t=e.src,r=e.unoptimized,n=e.layout,i=e.width,o=e.quality,c=e.sizes,s=e.loader;if(r)return{src:t,srcSet:void 0,sizes:void 0};var u=function(e,t,r){if(r&&("fill"===t||"responsive"===t)){for(var n,i=/(^|\s)(1?\d?\d)vw/g,o=[];n=i.exec(r);n)o.push(parseInt(n[2]));if(o.length){var c,s=.01*(c=Math).min.apply(c,a(o));return{widths:x.filter((function(e){return e>=g[0]*s})),kind:"w"}}return{widths:x,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:g,kind:"w"}:{widths:a(new Set([e,2*e].map((function(e){return x.find((function(t){return t>=e}))||x[x.length-1]})))),kind:"x"}}(i,n,c),l=u.widths,f=u.kind,d=l.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:l.map((function(e,r){return"".concat(s({src:t,quality:o,width:e})," ").concat("w"===f?e:r+1).concat(f)})).join(", "),src:s({src:t,quality:o,width:l[d]})}}function O(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function I(e){var t=v.get(j);if(t)return t(p({root:A},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(j))}function N(e){return"/"===e[0]?e.slice(1):e}g.sort((function(e,t){return e-t})),x.sort((function(e,t){return e-t}))},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(s){c=!0,i=s}finally{try{a||null==r.return||r.return()}finally{if(c)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!c,u=o.useRef(),l=i(o.useState(!1),2),f=l[0],d=l[1],m=i(o.useState(t?t.current:null),2),p=m[0],h=m[1],y=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||f||e&&e.tagName&&(u.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=s.get(t);if(r)return r;var n=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return s.set(t,r={id:t,observer:i,elements:n}),r}(r),i=n.id,o=n.observer,a=n.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),s.delete(i))}}(e,(function(e){return e&&d(e)}),{root:p,rootMargin:r}))}),[n,p,r,f]);return o.useEffect((function(){if(!c&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),o.useEffect((function(){t&&h(t.current)}),[t]),[y,f]};var o=r(7294),a=r(9311),c="undefined"!==typeof IntersectionObserver;var s=new Map},3678:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(5893),i=r(9008),o=(r(5675),r(1673)),a=r.n(o);function c(){return(0,n.jsxs)("div",{className:a().container,children:[(0,n.jsxs)(i.default,{children:[(0,n.jsx)("title",{children:"Stuy Fission 310"}),(0,n.jsx)("script",{type:"text/javascript",children:'document.getElementById("vid").play();'})]}),(0,n.jsxs)("main",{className:a().main,children:[(0,n.jsxs)("div",{className:a().titlecontainer,children:[(0,n.jsxs)("div",{className:a().vertnum,children:[(0,n.jsx)("span",{children:"3"}),(0,n.jsx)("span",{children:"1"}),(0,n.jsx)("span",{children:"0"})]}),(0,n.jsxs)("div",{className:a().topcontainer,children:[(0,n.jsx)("h1",{className:a().title,children:"Stuy Fission"}),(0,n.jsxs)("div",{className:a().estyear,children:[(0,n.jsxs)("span",{className:a().est,children:[(0,n.jsx)("span",{children:"E"}),(0,n.jsx)("span",{children:"S"}),(0,n.jsx)("span",{children:"T"})]}),(0,n.jsxs)("span",{className:a().year,children:[(0,n.jsx)("span",{children:"20"}),(0,n.jsx)("span",{className:a().spcolor,children:"08"})]})]})]}),(0,n.jsx)("div",{className:a().bgBorder,children:(0,n.jsx)("video",{muted:!0,loop:!0,name:"Video Name",className:a().bg,id:"vid",children:(0,n.jsx)("source",{src:"bg.mp4"})})}),(0,n.jsxs)("div",{className:a().subtitlecontainer,children:[(0,n.jsx)("h2",{className:a().subtitlel,children:"Gracious Professionalism"}),(0,n.jsx)("h2",{className:a().subtitler,children:"Fortune favors the brave"})]})]}),(0,n.jsx)("span",{className:a().caret,children:"\u2304"})]}),(0,n.jsx)("footer",{className:a().footer,children:"Desgined by Paul"})]})}},1673:function(e){e.exports={container:"Home_container__97eC3",titlecontainer:"Home_titlecontainer__RuqvK",topcontainer:"Home_topcontainer__SUfyS",estyear:"Home_estyear__pj65U",est:"Home_est__d___r",year:"Home_year__1BDIb",spcolor:"Home_spcolor__o5VF0",title:"Home_title__q0Qg4",subtitlecontainer:"Home_subtitlecontainer__tUBmE",subtitler:"Home_subtitler__kP48r",subtitlel:"Home_subtitlel__9Rqyj",main:"Home_main__OVLM4",bgBorder:"Home_bgBorder__M2TM6",bg:"Home_bg__6qLiw",footer:"Home_footer__zed0_",vertnum:"Home_vertnum__LuVeQ",caret:"Home_caret__930Ln"}},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},9008:function(e,t,r){e.exports=r(5443)},5675:function(e,t,r){r(8045)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
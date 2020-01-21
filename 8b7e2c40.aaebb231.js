(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{317:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(6),c=(n(0),n(509)),b={id:"_jpeg_",title:"jpeg",sidebar_label:"jpeg"},l={id:"modules/_jpeg_",title:"jpeg",description:"This is minimal bindings to libjpeg needed by webgl polyfills to allow loading jpeg textures.",source:"@site/../docs/modules/_jpeg_.md",permalink:"/docs/modules/_jpeg_",sidebar_label:"jpeg",sidebar:"docs",previous:{title:"gl",permalink:"/docs/modules/_gl_"},next:{title:"lumin",permalink:"/docs/modules/_lumin_"}},o=[{value:"Index",id:"index",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"decode",id:"decode",children:[]}]}],i={rightToc:o};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"This is minimal bindings to libjpeg needed by webgl polyfills to allow loading jpeg textures."),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"functions"},"Functions"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/modules/_jpeg_#decode"}),"decode"))),Object(c.b)("h2",{id:"functions-1"},"Functions"),Object(c.b)("h3",{id:"decode"},"decode"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"decode"),"(",Object(c.b)("inlineCode",{parentName:"p"},"data"),": ArrayBuffer): ",Object(c.b)("em",{parentName:"p"},"object")),Object(c.b)("p",null,"Decode a jpeg image."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"data")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ArrayBuffer"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The raw contents of the jpeg file.")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"object")),Object(c.b)("p",null,"the decoded bitmap data, typically 24-bit RGBA color format."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"bpp"),": ",Object(c.b)("em",{parentName:"p"},"number"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"height"),": ",Object(c.b)("em",{parentName:"p"},"number"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"pixels"),": ",Object(c.b)("em",{parentName:"p"},"ArrayBuffer"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"width"),": ",Object(c.b)("em",{parentName:"p"},"number")))))}p.isMDXComponent=!0},509:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,j=u["".concat(b,".").concat(m)]||u[m]||d[m]||c;return n?a.a.createElement(j,l({ref:t},i,{components:n})):a.a.createElement(j,l({ref:t},i))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,b=new Array(c);b[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,b[1]=l;for(var i=2;i<c;i++)b[i]=n[i];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
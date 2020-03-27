(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{345:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return i}));var n=r(1),a=r(9),b=(r(0),r(554)),l={id:"_ssl_.ssl",title:"ssl.Ssl",sidebar_label:"ssl.Ssl"},c={id:"classes/_ssl_.ssl",title:"ssl.Ssl",description:"## Hierarchy",source:"@site/../docs/classes/_ssl_.ssl.md",permalink:"/docs/classes/_ssl_.ssl",sidebar_label:"ssl.Ssl",sidebar:"docs",previous:{title:"lumin.WorldRayCastResult",permalink:"/docs/classes/_lumin_.worldraycastresult"},next:{title:"uv.Check",permalink:"/docs/classes/_uv_.check"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"bioRead",id:"bioread",children:[]},{value:"bioWrite",id:"biowrite",children:[]},{value:"doHandshake",id:"dohandshake",children:[]},{value:"getError",id:"geterror",children:[]},{value:"getVerify",id:"getverify",children:[]},{value:"setHostname",id:"sethostname",children:[]},{value:"sslRead",id:"sslread",children:[]},{value:"sslShutdown",id:"sslshutdown",children:[]},{value:"sslWrite",id:"sslwrite",children:[]}]}],o={rightToc:p};function i(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Ssl"))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"bioread"},"bioRead"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"bioRead"),"(): ",Object(b.b)("em",{parentName:"p"},"ArrayBuffer")),Object(b.b)("p",null,"Expose ",Object(b.b)("inlineCode",{parentName:"p"},"BIO_read"),".\nRead outgoing encrypted data to be sent directly to server"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"ArrayBuffer")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"biowrite"},"bioWrite"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"bioWrite"),"(",Object(b.b)("inlineCode",{parentName:"p"},"data"),": ArrayBuffer | string): ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("p",null,"Expose ",Object(b.b)("inlineCode",{parentName:"p"},"BIO_write")," and forward return value to JS.\nWrite incoming encrypted data to our SSL resource."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ArrayBuffer ","|"," string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"dohandshake"},"doHandshake"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"doHandshake"),"(): ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("p",null,"Expose ",Object(b.b)("inlineCode",{parentName:"p"},"SSL_do_handshake")," and forward return value to JS."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"geterror"},"getError"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getError"),"(",Object(b.b)("inlineCode",{parentName:"p"},"returnCode"),": number): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Use ",Object(b.b)("inlineCode",{parentName:"p"},"SSL_get_error")," to convert an error code into a string."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"returnCode")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getverify"},"getVerify"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getVerify"),"(): ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Expose ",Object(b.b)("inlineCode",{parentName:"p"},"SSL_get_verify_result")," and forward return value to JS."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"sethostname"},"setHostname"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"setHostname"),"(",Object(b.b)("inlineCode",{parentName:"p"},"name"),": string): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Expose ",Object(b.b)("inlineCode",{parentName:"p"},"SSL_set_tlsext_host_name")," to set SNI hostname ."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"name")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"sslread"},"sslRead"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"sslRead"),"(",Object(b.b)("inlineCode",{parentName:"p"},"buf"),": ArrayBuffer): ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("p",null,"Expose ",Object(b.b)("inlineCode",{parentName:"p"},"SSL_read")," and forward return value to JS.\nRead unencrypted data out of the SSL resource into an array buffer"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"buf")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ArrayBuffer")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"sslshutdown"},"sslShutdown"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"sslShutdown"),"(): ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("p",null,"Expose ",Object(b.b)("inlineCode",{parentName:"p"},"SSL_shutdown")," and forward return value to JS."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"sslwrite"},"sslWrite"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"sslWrite"),"(",Object(b.b)("inlineCode",{parentName:"p"},"data"),": ArrayBuffer | string): ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("p",null,"Expose ",Object(b.b)("inlineCode",{parentName:"p"},"SSL_write")," and forward return value to JS.\nWrite unencrypted data out of the SSL resource."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ArrayBuffer ","|"," string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"number")))}i.isMDXComponent=!0},554:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return j}));var n=r(0),a=r.n(n);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},b=Object.keys(e);for(n=0;n<b.length;n++)r=b[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)r=b[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=a.a.createContext({}),i=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},s=function(e){var t=i(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),s=i(r),u=n,j=s["".concat(l,".").concat(u)]||s[u]||O[u]||b;return r?a.a.createElement(j,c({ref:t},o,{components:r})):a.a.createElement(j,c({ref:t},o))}));function j(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=r.length,l=new Array(b);l[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<b;o++)l[o]=r[o];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);
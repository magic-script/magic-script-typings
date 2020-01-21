(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{509:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),i=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=i(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),u=i(n),d=r,O=u["".concat(b,".").concat(d)]||u[d]||s[d]||c;return n?a.a.createElement(O,l({ref:t},o,{components:n})):a.a.createElement(O,l({ref:t},o))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,b=new Array(c);b[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,b[1]=l;for(var o=2;o<c;o++)b[o]=n[o];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return i}));var r=n(1),a=n(6),c=(n(0),n(509)),b={id:"_uv_.handle",title:"uv.Handle",sidebar_label:"uv.Handle"},l={id:"classes/_uv_.handle",title:"uv.Handle",description:"Wrapper for `uv_handle_t` handle base type. See http://docs.libuv.org/en/v1.x/handle.html",source:"@site/../docs/classes/_uv_.handle.md",permalink:"/docs/classes/_uv_.handle",sidebar_label:"uv.Handle",sidebar:"docs",previous:{title:"uv.Getaddrinfo",permalink:"/docs/classes/_uv_.getaddrinfo"},next:{title:"uv.Req",permalink:"/docs/classes/_uv_.req"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"close",id:"close",children:[]},{value:"hasRef",id:"hasref",children:[]},{value:"ref",id:"ref",children:[]},{value:"unref",id:"unref",children:[]}]}],o={rightToc:p};function i(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Wrapper for ",Object(c.b)("inlineCode",{parentName:"p"},"uv_handle_t")," handle base type. See ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"http://docs.libuv.org/en/v1.x/handle.html"}),"http://docs.libuv.org/en/v1.x/handle.html")),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Handle")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/classes/_uv_.timer"}),"Timer")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/classes/_uv_.check"}),"Check")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/classes/_uv_.stream"}),"Stream")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/classes/_uv_.udp"}),"Udp")))),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"close"},"close"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"close"),"(",Object(c.b)("inlineCode",{parentName:"p"},"onClose?"),": function): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,"Request handle to be closed."),Object(c.b)("p",null,"Wrapper for ",Object(c.b)("inlineCode",{parentName:"p"},"uv_close"),"."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("p",null,"\u25aa",Object(c.b)("inlineCode",{parentName:"p"},"Optional"),"  ",Object(c.b)("strong",{parentName:"p"},"onClose"),": ",Object(c.b)("em",{parentName:"p"},"function")),Object(c.b)("p",null,"\u25b8 (): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"hasref"},"hasRef"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"hasRef"),"(): ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Returns ",Object(c.b)("inlineCode",{parentName:"p"},"true")," if the handle referenced, ",Object(c.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(c.b)("p",null,"Wrapper for ",Object(c.b)("inlineCode",{parentName:"p"},"uv_has_ref"),"."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"ref"},"ref"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"ref"),"(): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,"Reference the handle."),Object(c.b)("p",null,"Wrapper for ",Object(c.b)("inlineCode",{parentName:"p"},"uv_ref"),"."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"unref"},"unref"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"unref"),"(): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,"Un-reference the handle."),Object(c.b)("p",null,"Wrapper for ",Object(c.b)("inlineCode",{parentName:"p"},"uv_unref"),"."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")))}i.isMDXComponent=!0}}]);
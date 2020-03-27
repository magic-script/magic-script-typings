(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{305:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(1),a=r(9),c=(r(0),r(560)),o={id:"_uv_.req",title:"uv.Req",sidebar_label:"uv.Req"},p={id:"classes/_uv_.req",title:"uv.Req",description:"Wrapper for `uv_req_t` request base type. See http://docs.libuv.org/en/v1.x/request.html",source:"@site/../docs/classes/_uv_.req.md",permalink:"/docs/classes/_uv_.req",sidebar_label:"uv.Req",sidebar:"docs",previous:{title:"uv.Handle",permalink:"/docs/classes/_uv_.handle"},next:{title:"uv.Shutdown",permalink:"/docs/classes/_uv_.shutdown"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"cancel",id:"cancel",children:[]}]}],l={rightToc:i};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Wrapper for ",Object(c.b)("inlineCode",{parentName:"p"},"uv_req_t")," request base type. See ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://docs.libuv.org/en/v1.x/request.html"}),"http://docs.libuv.org/en/v1.x/request.html")),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Req")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/classes/_uv_.connect"}),"Connect")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/classes/_uv_.shutdown"}),"Shutdown")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/classes/_uv_.write"}),"Write")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/classes/_uv_.udpsend"}),"UdpSend")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/classes/_uv_.fs-1"}),"Fs")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/classes/_uv_.getaddrinfo"}),"Getaddrinfo")))),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"cancel"},"cancel"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"cancel"),"(): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,"Cancel a pending request. Fails if the request is executing or has finished executing."),Object(c.b)("p",null,"Wrapper for ",Object(c.b)("inlineCode",{parentName:"p"},"uv_cancel")," request method."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")))}s.isMDXComponent=!0},560:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p({},t,{},e)),r},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,O=u["".concat(o,".").concat(d)]||u[d]||b[d]||c;return r?a.a.createElement(O,p({ref:t},l,{components:r})):a.a.createElement(O,p({ref:t},l))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var l=2;l<c;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);
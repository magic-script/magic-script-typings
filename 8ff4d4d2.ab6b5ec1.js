(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{320:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(1),i=n(6),m=(n(0),n(505)),o={id:"_lumin_.ui.timeformat",title:"lumin.ui.TimeFormat",sidebar_label:"lumin.ui.TimeFormat"},u={id:"enums/_lumin_.ui.timeformat",title:"lumin.ui.TimeFormat",description:"## Enumeration members",source:"@site/../docs/enums/_lumin_.ui.timeformat.md",permalink:"/docs/enums/_lumin_.ui.timeformat",sidebar_label:"lumin.ui.TimeFormat",sidebar:"docs",previous:{title:"lumin.ui.TextEntryMode",permalink:"/docs/enums/_lumin_.ui.textentrymode"},next:{title:"lumin.ui.TimePeriod",permalink:"/docs/enums/_lumin_.ui.timeperiod"}},c=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"kAuto",id:"kauto",children:[]},{value:"khhmm",id:"khhmm",children:[]},{value:"khhmmP",id:"khhmmp",children:[]},{value:"khhmmss",id:"khhmmss",children:[]},{value:"khhmmssP",id:"khhmmssp",children:[]},{value:"kmmss",id:"kmmss",children:[]}]}],a={rightToc:c};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(m.b)("wrapper",Object(r.a)({},a,n,{components:t,mdxType:"MDXLayout"}),Object(m.b)("h2",{id:"enumeration-members"},"Enumeration members"),Object(m.b)("h3",{id:"kauto"},"kAuto"),Object(m.b)("p",null,"\u2022 ",Object(m.b)("strong",{parentName:"p"},"kAuto"),":"),Object(m.b)("p",null,"Format based on locale"),Object(m.b)("hr",null),Object(m.b)("h3",{id:"khhmm"},"khhmm"),Object(m.b)("p",null,"\u2022 ",Object(m.b)("strong",{parentName:"p"},"khhmm"),":"),Object(m.b)("p",null,"hour(0-23) : minute"),Object(m.b)("hr",null),Object(m.b)("h3",{id:"khhmmp"},"khhmmP"),Object(m.b)("p",null,"\u2022 ",Object(m.b)("strong",{parentName:"p"},"khhmmP"),":"),Object(m.b)("p",null,"hour(1-12) : minute    TimePeriod(AM/PM)"),Object(m.b)("hr",null),Object(m.b)("h3",{id:"khhmmss"},"khhmmss"),Object(m.b)("p",null,"\u2022 ",Object(m.b)("strong",{parentName:"p"},"khhmmss"),":"),Object(m.b)("p",null,"hour(0-23) : minute : second"),Object(m.b)("hr",null),Object(m.b)("h3",{id:"khhmmssp"},"khhmmssP"),Object(m.b)("p",null,"\u2022 ",Object(m.b)("strong",{parentName:"p"},"khhmmssP"),":"),Object(m.b)("p",null,"hour(1-12) : minute : second   TimePeriod(AM/PM)"),Object(m.b)("hr",null),Object(m.b)("h3",{id:"kmmss"},"kmmss"),Object(m.b)("p",null,"\u2022 ",Object(m.b)("strong",{parentName:"p"},"kmmss"),":"))}l.isMDXComponent=!0},505:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},m=Object.keys(e);for(r=0;r<m.length;r++)n=m[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(r=0;r<m.length;r++)n=m[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=i.a.createContext({}),l=function(e){var t=i.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):u({},t,{},e)),n},b=function(e){var t=l(e.components);return i.a.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,m=e.originalType,o=e.parentName,a=c(e,["components","mdxType","originalType","parentName"]),b=l(n),p=r,h=b["".concat(o,".").concat(p)]||b[p]||s[p]||m;return n?i.a.createElement(h,u({ref:t},a,{components:n})):i.a.createElement(h,u({ref:t},a))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var m=n.length,o=new Array(m);o[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var a=2;a<m;a++)o[a]=n[a];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);
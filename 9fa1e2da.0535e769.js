(window.webpackJsonp=window.webpackJsonp||[]).push([[412],{249:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"rightToc",(function(){return c})),r.d(n,"default",(function(){return u}));r(58),r(31),r(22),r(23),r(59),r(0);var t=r(812);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}var o={id:"_lumin_.physics.forcetype",title:"ForceType",sidebar_label:"ForceType"},c=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"kForce",id:"kforce",children:[]},{value:"kImpulse",id:"kimpulse",children:[]}]}],i={rightToc:c},p="wrapper";function u(e){var n=e.components,r=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["components"]);return Object(t.b)(p,a({},i,r,{components:n,mdxType:"MDXLayout"}),Object(t.b)("p",null,"Type of force to apply in the force functions.\nUnits : mass = kg, dist = meters/radians, time = sec."),Object(t.b)("h2",{id:"enumeration-members"},"Enumeration members"),Object(t.b)("h3",{id:"kforce"},"kForce"),Object(t.b)("p",null,"\u2022 ",Object(t.b)("strong",{parentName:"p"},"kForce"),":"),Object(t.b)("p",null,"mass * dist / time^2"),Object(t.b)("hr",null),Object(t.b)("h3",{id:"kimpulse"},"kImpulse"),Object(t.b)("p",null,"\u2022 ",Object(t.b)("strong",{parentName:"p"},"kImpulse"),":"))}u.isMDXComponent=!0},812:function(e,n,r){"use strict";r.d(n,"a",(function(){return i})),r.d(n,"b",(function(){return s}));var t=r(0),a=r.n(t),o=a.a.createContext({}),c=function(e){var n=a.a.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):Object.assign({},n,e)),r},i=function(e){var n=c(e.components);return a.a.createElement(o.Provider,{value:n},e.children)};var p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},l=Object(t.forwardRef)((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,p=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===n.indexOf(t)&&(r[t]=e[t]);return r}(e,["components","mdxType","originalType","parentName"]),l=c(r),s=t,m=l[i+"."+s]||l[s]||u[s]||o;return r?a.a.createElement(m,Object.assign({},{ref:n},p,{components:r})):a.a.createElement(m,Object.assign({},{ref:n},p))}));function s(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,c=new Array(o);c[0]=l;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[p]="string"==typeof e?e:t,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}l.displayName="MDXCreateElement"}}]);
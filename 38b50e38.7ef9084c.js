(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{189:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(6),l=(n(0),n(505)),c={id:"_lumin_.worldplanecastresult.plane",title:"lumin.WorldPlaneCastResult.Plane",sidebar_label:"lumin.WorldPlaneCastResult.Plane"},i={id:"classes/_lumin_.worldplanecastresult.plane",title:"lumin.WorldPlaneCastResult.Plane",description:"## Hierarchy",source:"@site/../docs/classes/_lumin_.worldplanecastresult.plane.md",permalink:"/docs/classes/_lumin_.worldplanecastresult.plane",sidebar_label:"lumin.WorldPlaneCastResult.Plane",sidebar:"docs",previous:{title:"lumin.WorldPlaneCastResult",permalink:"/docs/classes/_lumin_.worldplanecastresult"},next:{title:"lumin.WorldRayCastEventData",permalink:"/docs/classes/_lumin_.worldraycasteventdata"}},b=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"center",id:"center",children:[]},{value:"flags",id:"flags",children:[]},{value:"height",id:"height",children:[]},{value:"id",id:"id",children:[]},{value:"normal",id:"normal",children:[]},{value:"vertices",id:"vertices",children:[]},{value:"width",id:"width",children:[]}]}],o={rightToc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Plane"))),Object(l.b)("h2",{id:"constructors"},"Constructors"),Object(l.b)("h3",{id:"constructor"},"constructor"),Object(l.b)("p",null,"+"," ",Object(l.b)("strong",{parentName:"p"},"new Plane"),"(): ",Object(l.b)("em",{parentName:"p"},Object(l.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.worldplanecastresult.plane"}),"Plane"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Returns:")," ",Object(l.b)("em",{parentName:"p"},Object(l.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.worldplanecastresult.plane"}),"Plane"))),Object(l.b)("h2",{id:"properties"},"Properties"),Object(l.b)("h3",{id:"center"},"center"),Object(l.b)("p",null,"\u2022 ",Object(l.b)("strong",{parentName:"p"},"center"),": ",Object(l.b)("em",{parentName:"p"},"[number, number, number]")),Object(l.b)("p",null,"center of the plane, in world space"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"flags"},"flags"),Object(l.b)("p",null,"\u2022 ",Object(l.b)("strong",{parentName:"p"},"flags"),": ",Object(l.b)("em",{parentName:"p"},Object(l.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/enums/_lumin_.planecastflags"}),"PlanecastFlags"))),Object(l.b)("p",null,"flags used to filter the plane search"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"height"},"height"),Object(l.b)("p",null,"\u2022 ",Object(l.b)("strong",{parentName:"p"},"height"),": ",Object(l.b)("em",{parentName:"p"},"number")),Object(l.b)("p",null,"height of the plane"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"id"},"id"),Object(l.b)("p",null,"\u2022 ",Object(l.b)("strong",{parentName:"p"},"id"),": ",Object(l.b)("em",{parentName:"p"},"bigint")),Object(l.b)("p",null,"plane id"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"normal"},"normal"),Object(l.b)("p",null,"\u2022 ",Object(l.b)("strong",{parentName:"p"},"normal"),": ",Object(l.b)("em",{parentName:"p"},"[number, number, number]")),Object(l.b)("p",null,"plane normal in world space"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"vertices"},"vertices"),Object(l.b)("p",null,"\u2022 ",Object(l.b)("strong",{parentName:"p"},"vertices"),": ",Object(l.b)("em",{parentName:"p"},"Array\u2039","[number, number, number]","\u203a")),Object(l.b)("p",null,"Vertices defining the plane boundary in world space"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"width"},"width"),Object(l.b)("p",null,"\u2022 ",Object(l.b)("strong",{parentName:"p"},"width"),": ",Object(l.b)("em",{parentName:"p"},"number")),Object(l.b)("p",null,"width of the plane"))}p.isMDXComponent=!0},505:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||s[d]||l;return n?a.a.createElement(m,i({ref:t},o,{components:n})):a.a.createElement(m,i({ref:t},o))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=d;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var o=2;o<l;o++)c[o]=n[o];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
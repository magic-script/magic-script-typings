(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{440:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return s}));r(58),r(31),r(22),r(23),r(59),r(0);var n=r(812);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var c={id:"_lumin_.exclusiverender.frameparams",title:"FrameParams",sidebar_label:"FrameParams"},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"farClip",id:"farclip",children:[]},{value:"focusDistance",id:"focusdistance",children:[]},{value:"nearClip",id:"nearclip",children:[]},{value:"stabilizationDepth",id:"stabilizationdepth",children:[]},{value:"surfaceScale",id:"surfacescale",children:[]}]}],l={rightToc:i},o="wrapper";function s(e){var t=e.components,r=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["components"]);return Object(n.b)(o,a({},l,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"FrameParams"),Object(n.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"FrameParams"))),Object(n.b)("h2",{id:"constructors"},"Constructors"),Object(n.b)("h3",{id:"constructor"},"constructor"),Object(n.b)("p",null,"+"," ",Object(n.b)("strong",{parentName:"p"},"new FrameParams"),"(): ",Object(n.b)("em",{parentName:"p"},Object(n.b)("a",a({parentName:"em"},{href:"/docs/classes/_lumin_.exclusiverender.frameparams"}),"FrameParams"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},Object(n.b)("a",a({parentName:"em"},{href:"/docs/classes/_lumin_.exclusiverender.frameparams"}),"FrameParams"))),Object(n.b)("h2",{id:"properties"},"Properties"),Object(n.b)("h3",{id:"farclip"},"farClip"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"farClip"),": ",Object(n.b)("em",{parentName:"p"},"number")),Object(n.b)("p",null,"Far clipping plane distance in meters."),Object(n.b)("hr",null),Object(n.b)("h3",{id:"focusdistance"},"focusDistance"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"focusDistance"),": ",Object(n.b)("em",{parentName:"p"},"number")),Object(n.b)("p",null,"Distance, in meters, to defined focus point for the client content. The focus\ndistance should be calculated as the positive distance to the client determined\nobject of interest (relative to the forward vector of the Lightwear)."),Object(n.b)("hr",null),Object(n.b)("h3",{id:"nearclip"},"nearClip"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"nearClip"),": ",Object(n.b)("em",{parentName:"p"},"number")),Object(n.b)("p",null,"Requested near clip plane distance in meters."),Object(n.b)("hr",null),Object(n.b)("h3",{id:"stabilizationdepth"},"stabilizationDepth"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"stabilizationDepth"),": ",Object(n.b)("em",{parentName:"p"},"number")),Object(n.b)("p",null,"Depth, in meters, for which to optimize content stabilization for time warp.\nStabilization depth should be calculated as the positive depth of content to be\nmost stable under time warp (relative to the forward vector of the Lightwear)."),Object(n.b)("p",null,"This value should be set between focus_distance and far_clip. It usually provides a better\nexperience not having content farther than this distance, so a value close to the far clip\nis recommended. The best value will depend on the actual depth distribution of content."),Object(n.b)("hr",null),Object(n.b)("h3",{id:"surfacescale"},"surfaceScale"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"surfaceScale"),": ",Object(n.b)("em",{parentName:"p"},"number")),Object(n.b)("p",null,"The scale factor for the render surfaces, valid range is 0.0->1.0. When\nsupplying a scale factor < 1.0 the viewport returned from #MLGraphicsBeginFrame\nwill be adjusted to the closest width/height match to the request that can\nbe supported by the graphics system."))}s.isMDXComponent=!0},812:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n),c=a.a.createContext({}),i=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},l=function(e){var t=i(e.components);return a.a.createElement(c.Provider,{value:t},e.children)};var o="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,o=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),p=i(r),b=n,u=p[l+"."+b]||p[b]||s[b]||c;return r?a.a.createElement(u,Object.assign({},{ref:t},o,{components:r})):a.a.createElement(u,Object.assign({},{ref:t},o))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[o]="string"==typeof e?e:n,i[1]=l;for(var b=2;b<c;b++)i[b]=r[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);
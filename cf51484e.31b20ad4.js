(window.webpackJsonp=window.webpackJsonp||[]).push([[548],{171:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));n(58),n(31),n(22),n(23),n(59),n(0);var r=n(812);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u={id:"_lumin_.audioeventtype",title:"AudioEventType",sidebar_label:"AudioEventType"},l=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"kDuckedBySystem",id:"kduckedbysystem",children:[]},{value:"kInvalidAudioEvent",id:"kinvalidaudioevent",children:[]},{value:"kMutedBySystem",id:"kmutedbysystem",children:[]},{value:"kPlayEnd",id:"kplayend",children:[]},{value:"kPlayLooped",id:"kplaylooped",children:[]},{value:"kUnduckedBySystem",id:"kunduckedbysystem",children:[]},{value:"kUnmutedBySystem",id:"kunmutedbysystem",children:[]}]}],i={rightToc:l},c="wrapper";function d(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)(c,a({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Audio event types."),Object(r.b)("h2",{id:"enumeration-members"},"Enumeration members"),Object(r.b)("h3",{id:"kduckedbysystem"},"kDuckedBySystem"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"kDuckedBySystem"),":"),Object(r.b)("p",null,"Ducked by system."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"kinvalidaudioevent"},"kInvalidAudioEvent"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"kInvalidAudioEvent"),":"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"value = 0")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"kmutedbysystem"},"kMutedBySystem"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"kMutedBySystem"),":"),Object(r.b)("p",null,"Audio volume is muted by system."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"kplayend"},"kPlayEnd"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"kPlayEnd"),":"),Object(r.b)("p",null,"Fires when reached end of the audio playback."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"kplaylooped"},"kPlayLooped"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"kPlayLooped"),":"),Object(r.b)("p",null,"If the audio is in looping mode, the event fires at the end of each loop."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"kunduckedbysystem"},"kUnduckedBySystem"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"kUnduckedBySystem"),":"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"kunmutedbysystem"},"kUnmutedBySystem"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"kUnmutedBySystem"),":"),Object(r.b)("p",null,"Audio volume is un-muted by system."))}d.isMDXComponent=!0},812:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r),u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)};var c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},o=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,u=e.originalType,i=e.parentName,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),o=l(n),b=r,p=o[i+"."+b]||o[b]||d[b]||u;return n?a.a.createElement(p,Object.assign({},{ref:t},c,{components:n})):a.a.createElement(p,Object.assign({},{ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var u=n.length,l=new Array(u);l[0]=o;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var b=2;b<u;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}o.displayName="MDXCreateElement"}}]);
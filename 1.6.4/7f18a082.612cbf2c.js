(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{347:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(1),i=n(9),o=(n(0),n(554)),l={id:"_lumin_.ui.dialogtype",title:"lumin.ui.DialogType",sidebar_label:"lumin.ui.DialogType"},a={id:"enums/_lumin_.ui.dialogtype",title:"lumin.ui.DialogType",description:"Dialog types.",source:"@site/../docs/enums/_lumin_.ui.dialogtype.md",permalink:"/docs/enums/_lumin_.ui.dialogtype",sidebar_label:"lumin.ui.DialogType",sidebar:"docs",previous:{title:"lumin.ui.DialogLayout",permalink:"/docs/enums/_lumin_.ui.dialoglayout"},next:{title:"lumin.ui.EclipseButtonType",permalink:"/docs/enums/_lumin_.ui.eclipsebuttontype"}},c=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"kCustom",id:"kcustom",children:[]},{value:"kDualAction",id:"kdualaction",children:[]},{value:"kNoAction",id:"knoaction",children:[]},{value:"kSingleAction",id:"ksingleaction",children:[]},{value:"kTimed",id:"ktimed",children:[]}]}],u={rightToc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Dialog types."),Object(o.b)("h2",{id:"enumeration-members"},"Enumeration members"),Object(o.b)("h3",{id:"kcustom"},"kCustom"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"kCustom"),":"),Object(o.b)("p",null,"Modal, custom content, no buttons provided."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"kdualaction"},"kDualAction"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"kDualAction"),":"),Object(o.b)("p",null,"Modal, dual action, Cancel and Confirm buttons dialog"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"knoaction"},"kNoAction"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"kNoAction"),":"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"ksingleaction"},"kSingleAction"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"kSingleAction"),":"),Object(o.b)("p",null,"Modal, single action, OK button dialog"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"ktimed"},"kTimed"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"kTimed"),":"),Object(o.b)("p",null,"Modeless, no-button dialog that counts down with a timer."))}p.isMDXComponent=!0},554:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return s}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),p=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},b=function(e){var t=p(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,s=b["".concat(l,".").concat(d)]||b[d]||m[d]||o;return n?i.a.createElement(s,a({ref:t},u,{components:n})):i.a.createElement(s,a({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var u=2;u<o;u++)l[u]=n[u];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
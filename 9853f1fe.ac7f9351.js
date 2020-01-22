(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{367:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return l}));var r=n(1),a=n(9),b=(n(0),n(543)),c={id:"_lumin_.videoeventdata",title:"lumin.VideoEventData",sidebar_label:"lumin.VideoEventData"},i={id:"classes/_lumin_.videoeventdata",title:"lumin.VideoEventData",description:"Event subclass sent by VideoNode during media playback.",source:"@site/../docs/classes/_lumin_.videoeventdata.md",permalink:"/docs/classes/_lumin_.videoeventdata",sidebar_label:"lumin.VideoEventData",sidebar:"docs",previous:{title:"lumin.VideoDRMInfoEventData",permalink:"/docs/classes/_lumin_.videodrminfoeventdata"},next:{title:"lumin.VideoNode",permalink:"/docs/classes/_lumin_.videonode"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"getAffectedNodeId",id:"getaffectednodeid",children:[]},{value:"getPrismId",id:"getprismid",children:[]},{value:"getVideoEventType",id:"getvideoeventtype",children:[]},{value:"getXPos",id:"getxpos",children:[]},{value:"getYPos",id:"getypos",children:[]},{value:"isInputEventType",id:"isinputeventtype",children:[]},{value:"toString",id:"tostring",children:[]}]}],p={rightToc:o};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Event subclass sent by VideoNode during media playback."),Object(b.b)("p",null,"The X and Y fields are used to store different data for differnet event types:"),Object(b.b)("ul",null,Object(b.b)("li",null,"kVideoSizeChanged: X is width, Y is height"),Object(b.b)("li",null,"kBufferingUpdate: X is the buffering percent, Y is unused"),Object(b.b)("li",null,"kInfo: X is the info or warning code, Y is an info code to provide more details"),Object(b.b)("li",null,"kError: X is the type of fatal error, Y is the MediaError code")),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/classes/_lumin_.serverevent"}),"ServerEvent")),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("strong",{parentName:"p"},"VideoEventData")))),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new VideoEventData"),"(): ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.videoeventdata"}),"VideoEventData"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Overrides ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.serverevent"}),"ServerEvent"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.serverevent#constructor"}),"constructor"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.videoeventdata"}),"VideoEventData"))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"getaffectednodeid"},"getAffectedNodeId"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getAffectedNodeId"),"(): ",Object(b.b)("em",{parentName:"p"},"bigint")),Object(b.b)("p",null,"Returns the ID of the VideoNode that was affected."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"bigint")),Object(b.b)("p",null,"the ID of the VideoNode that was affected"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getprismid"},"getPrismId"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getPrismId"),"(): ",Object(b.b)("em",{parentName:"p"},"bigint")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.animationblendsetupevent"}),"AnimationBlendSetupEvent"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.animationblendsetupevent#getprismid"}),"getPrismId"))),Object(b.b)("p",null,"Returns the Prism ID of the target Prism."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"bigint")),Object(b.b)("p",null,"the Prism ID of the target Prism."),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getvideoeventtype"},"getVideoEventType"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getVideoEventType"),"(): ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/enums/_lumin_.videoeventtype"}),"VideoEventType"))),Object(b.b)("p",null,"Returns the video event type."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/enums/_lumin_.videoeventtype"}),"VideoEventType"))),Object(b.b)("p",null,"the video event type"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getxpos"},"getXPos"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getXPos"),"(): ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("p",null,"Returns event-specific data (see class description)."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("p",null,"event-specific data"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getypos"},"getYPos"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getYPos"),"(): ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("p",null,"Returns event-specific data (see class description)."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("p",null,"event-specific data"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"isinputeventtype"},"isInputEventType"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"isInputEventType"),"(): ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.animationblendsetupevent"}),"AnimationBlendSetupEvent"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.animationblendsetupevent#isinputeventtype"}),"isInputEventType"))),Object(b.b)("p",null,"Returns true if this is an input event (a subclass of InputEventData)."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"true if this is an input event"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"tostring"},"toString"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"toString"),"(): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.animationblendsetupevent"}),"AnimationBlendSetupEvent"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.animationblendsetupevent#tostring"}),"toString"))),Object(b.b)("p",null,"Returns a string representation of this event for debug purposes."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")))}l.isMDXComponent=!0},543:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},b=Object.keys(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},s=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=l(n),d=r,m=s["".concat(c,".").concat(d)]||s[d]||u[d]||b;return n?a.a.createElement(m,i({ref:t},p,{components:n})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=n.length,c=new Array(b);c[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<b;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
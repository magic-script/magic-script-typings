(window.webpackJsonp=window.webpackJsonp||[]).push([[566],{580:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));n(58),n(31),n(22),n(23),n(59),n(0);var a=n(812);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var c={id:"_lumin_.serverevent",title:"ServerEvent",sidebar_label:"ServerEvent"},s=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"getPrismId",id:"getprismid",children:[]},{value:"isInputEventType",id:"isinputeventtype",children:[]},{value:"toString",id:"tostring",children:[]}]}],p={rightToc:s},i="wrapper";function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(i,r({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Base class for all events sent from the Lumin Runtime Server\nto client application Prisms."),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"ServerEvent")),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("a",r({parentName:"p"},{href:"/docs/classes/_lumin_.animationblendsetupevent"}),"AnimationBlendSetupEvent")),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("a",r({parentName:"p"},{href:"/docs/classes/_lumin_.animationeventbase"}),"AnimationEventBase")),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("a",r({parentName:"p"},{href:"/docs/classes/_lumin_.audioevent"}),"AudioEvent")),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("a",r({parentName:"p"},{href:"/docs/classes/_lumin_.eyetrackingeventdata"}),"EyeTrackingEventData")),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("a",r({parentName:"p"},{href:"/docs/classes/_lumin_.headposeerrorevent"}),"HeadposeErrorEvent")),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("a",r({parentName:"p"},{href:"/docs/classes/_lumin_.inputdeviceevent"}),"InputDeviceEvent")),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("a",r({parentName:"p"},{href:"/docs/classes/_lumin_.inputeventdata"}),"InputEventData")),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("a",r({parentName:"p"},{href:"/docs/classes/_lumin_.particleeventdata"}),"ParticleEventData")),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("a",r({parentName:"p"},{href:"/docs/classes/_lumin_.physicseventdata"}),"PhysicsEventData")),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("a",r({parentName:"p"},{href:"/docs/classes/_lumin_.prismsizeevent"}),"PrismSizeEvent")),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("a",r({parentName:"p"},{href:"/docs/classes/_lumin_.prismtransformevent"}),"PrismTransformEvent")),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("a",r({parentName:"p"},{href:"/docs/classes/_lumin_.privilegeevent"}),"PrivilegeEvent")),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("a",r({parentName:"p"},{href:"/docs/classes/_lumin_.raycasteventdata"}),"RayCastEventData")),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("a",r({parentName:"p"},{href:"/docs/classes/_lumin_.resourceevent"}),"ResourceEvent")),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("a",r({parentName:"p"},{href:"/docs/classes/_lumin_.selectioneventdata"}),"SelectionEventData")),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("a",r({parentName:"p"},{href:"/docs/classes/_lumin_.spriteanimationeventdata"}),"SpriteAnimationEventData")),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("a",r({parentName:"p"},{href:"/docs/classes/_lumin_.systemeventdata"}),"SystemEventData")),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("a",r({parentName:"p"},{href:"/docs/classes/_lumin_.transformanimationeventdata"}),"TransformAnimationEventData")),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("a",r({parentName:"p"},{href:"/docs/classes/_lumin_.videodrminfoeventdata"}),"VideoDRMInfoEventData")),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("a",r({parentName:"p"},{href:"/docs/classes/_lumin_.videoeventdata"}),"VideoEventData")),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("a",r({parentName:"p"},{href:"/docs/classes/_lumin_.videosubtitleeventdata"}),"VideoSubtitleEventData")),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("a",r({parentName:"p"},{href:"/docs/classes/_lumin_.videotimedtexteventdata"}),"VideoTimedTextEventData")),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("a",r({parentName:"p"},{href:"/docs/classes/_lumin_.worldimagetrackingeventdata"}),"WorldImageTrackingEventData")),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("a",r({parentName:"p"},{href:"/docs/classes/_lumin_.worldmeshblockeventdata"}),"WorldMeshBlockEventData")),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("a",r({parentName:"p"},{href:"/docs/classes/_lumin_.worldplanecasteventdata"}),"WorldPlaneCastEventData")),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("a",r({parentName:"p"},{href:"/docs/classes/_lumin_.worldraycasteventdata"}),"WorldRayCastEventData")))),Object(a.b)("h2",{id:"constructors"},"Constructors"),Object(a.b)("h3",{id:"constructor"},"constructor"),Object(a.b)("p",null,"+"," ",Object(a.b)("strong",{parentName:"p"},"new ServerEvent"),"(): ",Object(a.b)("em",{parentName:"p"},Object(a.b)("a",r({parentName:"em"},{href:"/docs/classes/_lumin_.serverevent"}),"ServerEvent"))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," ",Object(a.b)("em",{parentName:"p"},Object(a.b)("a",r({parentName:"em"},{href:"/docs/classes/_lumin_.serverevent"}),"ServerEvent"))),Object(a.b)("h2",{id:"methods"},"Methods"),Object(a.b)("h3",{id:"getprismid"},"getPrismId"),Object(a.b)("p",null,"\u25b8 ",Object(a.b)("strong",{parentName:"p"},"getPrismId"),"(): ",Object(a.b)("em",{parentName:"p"},"bigint")),Object(a.b)("p",null,"Returns the Prism ID of the target Prism."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," ",Object(a.b)("em",{parentName:"p"},"bigint")),Object(a.b)("p",null,"the Prism ID of the target Prism."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"isinputeventtype"},"isInputEventType"),Object(a.b)("p",null,"\u25b8 ",Object(a.b)("strong",{parentName:"p"},"isInputEventType"),"(): ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Returns true if this is an input event (a subclass of InputEventData)."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"true if this is an input event"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"tostring"},"toString"),Object(a.b)("p",null,"\u25b8 ",Object(a.b)("strong",{parentName:"p"},"toString"),"(): ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Returns a string representation of this event for debug purposes."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," ",Object(a.b)("em",{parentName:"p"},"string")))}b.isMDXComponent=!0},812:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return o}));var a=n(0),r=n.n(a),c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},p=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)};var i="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},l=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,p=e.parentName,i=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),l=s(n),o=a,m=l[p+"."+o]||l[o]||b[o]||c;return n?r.a.createElement(m,Object.assign({},{ref:t},i,{components:n})):r.a.createElement(m,Object.assign({},{ref:t},i))}));function o(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,s=new Array(c);s[0]=l;var p={};for(var b in t)hasOwnProperty.call(t,b)&&(p[b]=t[b]);p.originalType=e,p[i]="string"==typeof e?e:a,s[1]=p;for(var o=2;o<c;o++)s[o]=n[o];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"}}]);
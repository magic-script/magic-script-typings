(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{180:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(9),i=(n(0),n(543)),b={id:"_lumin_.eyetrackingeventdata",title:"lumin.EyeTrackingEventData",sidebar_label:"lumin.EyeTrackingEventData"},c={id:"classes/_lumin_.eyetrackingeventdata",title:"lumin.EyeTrackingEventData",description:"EyeTrackingEventData - Eye tracking update events",source:"@site/../docs/classes/_lumin_.eyetrackingeventdata.md",permalink:"/docs/classes/_lumin_.eyetrackingeventdata",sidebar_label:"lumin.EyeTrackingEventData",sidebar:"docs",previous:{title:"lumin.ExclusiveRender.FrameParams",permalink:"/docs/classes/_lumin_.exclusiverender.frameparams"},next:{title:"lumin.FileInfo",permalink:"/docs/classes/_lumin_.fileinfo"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"getEyeTrackingFixationConfidence",id:"geteyetrackingfixationconfidence",children:[]},{value:"getEyeTrackingFixationPosition",id:"geteyetrackingfixationposition",children:[]},{value:"getEyeTrackingLeftEyeBlinkState",id:"geteyetrackinglefteyeblinkstate",children:[]},{value:"getEyeTrackingLeftEyeConfidence",id:"geteyetrackinglefteyeconfidence",children:[]},{value:"getEyeTrackingLeftEyePosition",id:"geteyetrackinglefteyeposition",children:[]},{value:"getEyeTrackingLeftEyeRotation",id:"geteyetrackinglefteyerotation",children:[]},{value:"getEyeTrackingRightEyeBlinkState",id:"geteyetrackingrighteyeblinkstate",children:[]},{value:"getEyeTrackingRightEyeConfidence",id:"geteyetrackingrighteyeconfidence",children:[]},{value:"getEyeTrackingRightEyePosition",id:"geteyetrackingrighteyeposition",children:[]},{value:"getEyeTrackingRightEyeRotation",id:"geteyetrackingrighteyerotation",children:[]},{value:"getPrismId",id:"getprismid",children:[]},{value:"hasFixationViolationOccured",id:"hasfixationviolationoccured",children:[]},{value:"isFixationDepthUnconfortable",id:"isfixationdepthunconfortable",children:[]},{value:"isInputEventType",id:"isinputeventtype",children:[]},{value:"remainingTimeAtUncomfortableDepth",id:"remainingtimeatuncomfortabledepth",children:[]},{value:"toString",id:"tostring",children:[]}]}],l={rightToc:o};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"EyeTrackingEventData - Eye tracking update events"),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/classes/_lumin_.serverevent"}),"ServerEvent")),Object(i.b)("p",{parentName:"li"},"\u21b3 ",Object(i.b)("strong",{parentName:"p"},"EyeTrackingEventData")))),Object(i.b)("h2",{id:"constructors"},"Constructors"),Object(i.b)("h3",{id:"constructor"},"constructor"),Object(i.b)("p",null,"+"," ",Object(i.b)("strong",{parentName:"p"},"new EyeTrackingEventData"),"(): ",Object(i.b)("em",{parentName:"p"},Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.eyetrackingeventdata"}),"EyeTrackingEventData"))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Overrides ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.serverevent"}),"ServerEvent"),".",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.serverevent#constructor"}),"constructor"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.eyetrackingeventdata"}),"EyeTrackingEventData"))),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"geteyetrackingfixationconfidence"},"getEyeTrackingFixationConfidence"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"getEyeTrackingFixationConfidence"),"(): ",Object(i.b)("em",{parentName:"p"},"number")),Object(i.b)("p",null,"Get the confidence value of the fixation tracking data"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"number")),Object(i.b)("p",null,"a confidence value between 0.0f (no confidence) and\n1.0f (full confidence) indicating eye tracking\ndata confidence for the eye fixation point this frame."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"geteyetrackingfixationposition"},"getEyeTrackingFixationPosition"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"getEyeTrackingFixationPosition"),"(): ",Object(i.b)("em",{parentName:"p"},"[number, number, number]")),Object(i.b)("p",null,"Get the position of the fixation point of the user's eyes in world space"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"[number, number, number]")),Object(i.b)("p",null,"the world space position of the fixation point of the user's eyes"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"geteyetrackinglefteyeblinkstate"},"getEyeTrackingLeftEyeBlinkState"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"getEyeTrackingLeftEyeBlinkState"),"(): ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Get the blink state of the left eye"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"true if the left eye is blinking, false otherwise"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"geteyetrackinglefteyeconfidence"},"getEyeTrackingLeftEyeConfidence"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"getEyeTrackingLeftEyeConfidence"),"(): ",Object(i.b)("em",{parentName:"p"},"number")),Object(i.b)("p",null,"Get the confidence value of the left eye tracking data"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"number")),Object(i.b)("p",null,"a confidence value between 0.0f (no confidence) and\n1.0f (full confidence) indicating eye tracking\ndata confidence for the left eye this frame."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"geteyetrackinglefteyeposition"},"getEyeTrackingLeftEyePosition"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"getEyeTrackingLeftEyePosition"),"(): ",Object(i.b)("em",{parentName:"p"},"[number, number, number]")),Object(i.b)("p",null,"Get the position of the user's left eye in world space"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"[number, number, number]")),Object(i.b)("p",null,"the world space position of the user's left eye"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"geteyetrackinglefteyerotation"},"getEyeTrackingLeftEyeRotation"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"getEyeTrackingLeftEyeRotation"),"(): ",Object(i.b)("em",{parentName:"p"},"[number, number, number, number]")),Object(i.b)("p",null,"Get the rotation of the user's left eye in world space"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"[number, number, number, number]")),Object(i.b)("p",null,"the world space rotation of the user's left eye"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"geteyetrackingrighteyeblinkstate"},"getEyeTrackingRightEyeBlinkState"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"getEyeTrackingRightEyeBlinkState"),"(): ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Get the blink state of the right eye"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"true if the right eye is blinking, false otherwise"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"geteyetrackingrighteyeconfidence"},"getEyeTrackingRightEyeConfidence"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"getEyeTrackingRightEyeConfidence"),"(): ",Object(i.b)("em",{parentName:"p"},"number")),Object(i.b)("p",null,"Get the confidence value of the right eye tracking data"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"number")),Object(i.b)("p",null,"a confidence value between 0.0f (no confidence) and\n1.0f (full confidence) indicating eye tracking\ndata confidence for the right eye this frame."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"geteyetrackingrighteyeposition"},"getEyeTrackingRightEyePosition"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"getEyeTrackingRightEyePosition"),"(): ",Object(i.b)("em",{parentName:"p"},"[number, number, number]")),Object(i.b)("p",null,"Get the position of the user's right eye in world space"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"[number, number, number]")),Object(i.b)("p",null,"the world space position of the user's right eye"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"geteyetrackingrighteyerotation"},"getEyeTrackingRightEyeRotation"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"getEyeTrackingRightEyeRotation"),"(): ",Object(i.b)("em",{parentName:"p"},"[number, number, number, number]")),Object(i.b)("p",null,"Get the position of the user's left eye in world space"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"[number, number, number, number]")),Object(i.b)("p",null,"the world space position of the user's left eye"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"getprismid"},"getPrismId"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"getPrismId"),"(): ",Object(i.b)("em",{parentName:"p"},"bigint")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Inherited from ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.animationblendsetupevent"}),"AnimationBlendSetupEvent"),".",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.animationblendsetupevent#getprismid"}),"getPrismId"))),Object(i.b)("p",null,"Returns the Prism ID of the target Prism."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"bigint")),Object(i.b)("p",null,"the Prism ID of the target Prism."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"hasfixationviolationoccured"},"hasFixationViolationOccured"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"hasFixationViolationOccured"),"(): ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Get whether a fixation violation has occured (fixation depth has been too close\nfor longer than 10 seconds)"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"true if a violation has occured, false otherwise"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"isfixationdepthunconfortable"},"isFixationDepthUnconfortable"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"isFixationDepthUnconfortable"),"(): ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Get whether the current fixation depth is uncomfortable for the user (< 37cm)"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"true if the fixation depth is uncomfortable, false otherwise"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"isinputeventtype"},"isInputEventType"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"isInputEventType"),"(): ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Inherited from ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.animationblendsetupevent"}),"AnimationBlendSetupEvent"),".",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.animationblendsetupevent#isinputeventtype"}),"isInputEventType"))),Object(i.b)("p",null,"Returns true if this is an input event (a subclass of InputEventData)."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"true if this is an input event"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"remainingtimeatuncomfortabledepth"},"remainingTimeAtUncomfortableDepth"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"remainingTimeAtUncomfortableDepth"),"(): ",Object(i.b)("em",{parentName:"p"},"number")),Object(i.b)("p",null,"Get the remaining time the fixation point can remain at an uncomfortable depth"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"number")),Object(i.b)("p",null,"the time remaining at the uncomfortable depth (in seconds)"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"tostring"},"toString"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"toString"),"(): ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Inherited from ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.animationblendsetupevent"}),"AnimationBlendSetupEvent"),".",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.animationblendsetupevent#tostring"}),"toString"))),Object(i.b)("p",null,"Returns a string representation of this event for debug purposes."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"string")))}p.isMDXComponent=!0},543:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,b=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,O=s["".concat(b,".").concat(m)]||s[m]||u[m]||i;return n?a.a.createElement(O,c({ref:t},l,{components:n})):a.a.createElement(O,c({ref:t},l))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,b=new Array(i);b[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,b[1]=c;for(var l=2;l<i;l++)b[l]=n[l];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
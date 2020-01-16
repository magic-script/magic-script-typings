(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(6),b=(n(0),n(505)),i={id:"_lumin_.ui.uiwebviewclient",title:"lumin.ui.UiWebViewClient",sidebar_label:"lumin.ui.UiWebViewClient"},l={id:"classes/_lumin_.ui.uiwebviewclient",title:"lumin.ui.UiWebViewClient",description:"UiWebViewClient Applications should implement this interface",source:"@site/../docs/classes/_lumin_.ui.uiwebviewclient.md",permalink:"/docs/classes/_lumin_.ui.uiwebviewclient",sidebar_label:"lumin.ui.UiWebViewClient",sidebar:"docs",previous:{title:"lumin.ui.UiWebView",permalink:"/docs/classes/_lumin_.ui.uiwebview"},next:{title:"lumin.ui.UiWebViewDataManager",permalink:"/docs/classes/_lumin_.ui.uiwebviewdatamanager"}},c=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"onBeforeResourceLoad",id:"onbeforeresourceload",children:[]},{value:"onExternalProtocol",id:"onexternalprotocol",children:[]},{value:"onLoadEnd",id:"onloadend",children:[]},{value:"onLoadError",id:"onloaderror",children:[]}]}],o={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"UiWebViewClient Applications should implement this interface\nto receive events from UiWebView. Register an instance of\nUiWebViewClient with the UiWebView instance using the API:\n'setWebViewClient'."),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"UiWebViewClient"))),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new UiWebViewClient"),"(): ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/classes/_lumin_.ui.uiwebviewclient"}),"UiWebViewClient"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/classes/_lumin_.ui.uiwebviewclient"}),"UiWebViewClient"))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"onbeforeresourceload"},"onBeforeResourceLoad"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"onBeforeResourceLoad"),"(",Object(b.b)("inlineCode",{parentName:"p"},"webview"),": ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/classes/_lumin_.ui.uiwebview"}),"UiWebView"),", ",Object(b.b)("inlineCode",{parentName:"p"},"resource_url"),": string): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Notify the host application that resource will be loaded."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"webview")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/classes/_lumin_.ui.uiwebview"}),"UiWebView")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the UiWebView that triggered this call.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"resource_url")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the url of the resource about to be loaded.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"onexternalprotocol"},"onExternalProtocol"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"onExternalProtocol"),"(",Object(b.b)("inlineCode",{parentName:"p"},"webview"),": ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/classes/_lumin_.ui.uiwebview"}),"UiWebView"),", ",Object(b.b)("inlineCode",{parentName:"p"},"url"),": string): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Notify host application to handle external schemes/protocols (that\nare not handled by webview). Any non-standard browser schemes\n(other than: http, https, file etc) are treated as external schemes."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"webview")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/classes/_lumin_.ui.uiwebview"}),"UiWebView")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the UiWebView that triggered this call.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"url")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the url for external scheme or protocol")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"onloadend"},"onLoadEnd"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"onLoadEnd"),"(",Object(b.b)("inlineCode",{parentName:"p"},"webview"),": ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/classes/_lumin_.ui.uiwebview"}),"UiWebView"),", ",Object(b.b)("inlineCode",{parentName:"p"},"is_main_frame"),": boolean, ",Object(b.b)("inlineCode",{parentName:"p"},"http_error_code"),": number): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Notify host application of load completion. http error code is set if any error\noccurred. 0 error code implies no error."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"webview")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/classes/_lumin_.ui.uiwebview"}),"UiWebView")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the UiWebView that triggered this call.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"is_main_frame")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"if this event was for the main frame.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"http_error_code")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the standard http error code, 0 is returned for success.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"onloaderror"},"onLoadError"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"onLoadError"),"(",Object(b.b)("inlineCode",{parentName:"p"},"webview"),": ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/classes/_lumin_.ui.uiwebview"}),"UiWebView"),", ",Object(b.b)("inlineCode",{parentName:"p"},"is_main_frame"),": boolean, ",Object(b.b)("inlineCode",{parentName:"p"},"error_code"),": number, ",Object(b.b)("inlineCode",{parentName:"p"},"error_str"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"failed_url"),": string): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Notify host application of load error. These errors could be due to connectivity,\ncertificate errors etc. The error string is the stringified version of the\nerror code."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"webview")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/classes/_lumin_.ui.uiwebview"}),"UiWebView")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the UiWebView that triggered this call.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"is_main_frame")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"if this event was for the main frame.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"error_code")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"error code for the error")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"error_str")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"human readable error string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"failed_url")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the url that caused the load error")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")))}p.isMDXComponent=!0},505:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},O=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),O=p(n),d=a,j=O["".concat(i,".").concat(d)]||O[d]||u[d]||b;return n?r.a.createElement(j,l({ref:t},o,{components:n})):r.a.createElement(j,l({ref:t},o))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,i=new Array(b);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var o=2;o<b;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
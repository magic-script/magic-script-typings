(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{723:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return i}));a(58),a(31),a(22),a(23),a(59),a(0);var n=a(812);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var b={id:"_lumin_.utils.localehelper",title:"LocaleHelper",sidebar_label:"LocaleHelper"},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"formatUTF8String",id:"formatutf8string",children:[]},{value:"getFormattedUTF8String",id:"getformattedutf8string",children:[]},{value:"getLocale",id:"getlocale",children:[]},{value:"getLocalizedPath",id:"getlocalizedpath",children:[]},{value:"getUTF8String",id:"getutf8string",children:[]},{value:"init",id:"init",children:[]},{value:"setLocale",id:"setlocale",children:[]}]}],c={rightToc:l},p="wrapper";function i(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(p,r({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Localization wrapper around ICU"),Object(n.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"LocaleHelper"))),Object(n.b)("h2",{id:"constructors"},"Constructors"),Object(n.b)("h3",{id:"constructor"},"constructor"),Object(n.b)("p",null,"+"," ",Object(n.b)("strong",{parentName:"p"},"new LocaleHelper"),"(",Object(n.b)("inlineCode",{parentName:"p"},"locale?"),": string, ",Object(n.b)("inlineCode",{parentName:"p"},"path?"),": string, ",Object(n.b)("inlineCode",{parentName:"p"},"file?"),": string): ",Object(n.b)("em",{parentName:"p"},Object(n.b)("a",r({parentName:"em"},{href:"/docs/classes/_lumin_.utils.localehelper"}),"LocaleHelper"))),Object(n.b)("p",null,"Constructor"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"locale?")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},'default = "en"'),Object(n.b)("br",null),' the locale code to initialize the helper with (E.g. "en", "en_US", "es" etc.)')),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"path?")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},'default = "res"'),Object(n.b)("br",null),' the path of the icu data file (e.g. "res")')),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"file?")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},'default = "locale"'),Object(n.b)("br",null)," the filename of the locale file (the .dat extension is not required)")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},Object(n.b)("a",r({parentName:"em"},{href:"/docs/classes/_lumin_.utils.localehelper"}),"LocaleHelper"))),Object(n.b)("h2",{id:"methods"},"Methods"),Object(n.b)("h3",{id:"formatutf8string"},"formatUTF8String"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"formatUTF8String"),"(",Object(n.b)("inlineCode",{parentName:"p"},"input"),": string, ",Object(n.b)("inlineCode",{parentName:"p"},"arguments"),": Array\u2039string\u203a): ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Format a given string with the given string arguments (only string replacements are possible with this method)"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"input")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"the string to format")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"arguments")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Array\u2039string\u203a"),Object(n.b)("td",r({parentName:"tr"},{align:null}),'a vector of strings - argument names will be numbers (e.g. the first element will be named "0", the second will be "1" etc.)')))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"the formatted output string"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"formatUTF8String"),"(",Object(n.b)("inlineCode",{parentName:"p"},"input"),": string, ",Object(n.b)("inlineCode",{parentName:"p"},"arguments"),": Object): ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Format a given string with the given string arguments (only string replacements are possible with this method)"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"input")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"the string to format")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"arguments")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Object"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"a map of argument names to argument string values")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"the formatted output string"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"formatUTF8String"),"(",Object(n.b)("inlineCode",{parentName:"p"},"input"),": string, ",Object(n.b)("inlineCode",{parentName:"p"},"arguments"),": Array\u2039",Object(n.b)("a",r({parentName:"p"},{href:"/docs/classes/_lumin_.utils.localehelper.param"}),"Param"),"\u203a): ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Format a given string with the given Params"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"input")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"the string to format")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"arguments")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Array\u2039",Object(n.b)("a",r({parentName:"td"},{href:"/docs/classes/_lumin_.utils.localehelper.param"}),"Param"),"\u203a"),Object(n.b)("td",r({parentName:"tr"},{align:null}),'a vector of Params - argument names will be numbers (e.g. the first element will be named "0", the second will be "1" etc.)')))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"the formatted output string"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"formatUTF8String"),"(",Object(n.b)("inlineCode",{parentName:"p"},"input"),": string, ",Object(n.b)("inlineCode",{parentName:"p"},"arguments"),": Object): ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Format a given string with the given Params"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"input")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"the string to format")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"arguments")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Object"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"a map of argument names to Params")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"the formatted output string"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getformattedutf8string"},"getFormattedUTF8String"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getFormattedUTF8String"),"(",Object(n.b)("inlineCode",{parentName:"p"},"key"),": string, ",Object(n.b)("inlineCode",{parentName:"p"},"arguments"),": Array\u2039string\u203a): ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Locate a string in the locale data with the given key and format it with the given string arguments (only string replacements are possible with this method)"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"key")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"the key of the requested localized string")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"arguments")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Array\u2039string\u203a"),Object(n.b)("td",r({parentName:"tr"},{align:null}),'a vector of strings - argument names will be numbers (e.g. the first element will be named "0", the second will be "1" etc.)')))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"the formatted output string"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getFormattedUTF8String"),"(",Object(n.b)("inlineCode",{parentName:"p"},"key"),": string, ",Object(n.b)("inlineCode",{parentName:"p"},"arguments"),": Object): ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Locate a string in the locale data with the given key and format it with the given string arguments (only string replacements are possible with this method)"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"key")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"the key of the requested localized string")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"arguments")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Object"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"a map of argument names to argument string values")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"the formatted output string"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getFormattedUTF8String"),"(",Object(n.b)("inlineCode",{parentName:"p"},"key"),": string, ",Object(n.b)("inlineCode",{parentName:"p"},"arguments"),": Array\u2039",Object(n.b)("a",r({parentName:"p"},{href:"/docs/classes/_lumin_.utils.localehelper.param"}),"Param"),"\u203a): ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Locate a string in the locale data with the given key and format it with the given Params"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"key")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"the key of the requested localized string")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"arguments")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Array\u2039",Object(n.b)("a",r({parentName:"td"},{href:"/docs/classes/_lumin_.utils.localehelper.param"}),"Param"),"\u203a"),Object(n.b)("td",r({parentName:"tr"},{align:null}),'a vector of Params - argument names will be numbers (e.g. the first element will be named "0", the second will be "1" etc.)')))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"the formatted output string"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getFormattedUTF8String"),"(",Object(n.b)("inlineCode",{parentName:"p"},"key"),": string, ",Object(n.b)("inlineCode",{parentName:"p"},"arguments"),": Object): ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Locate a string in the locale data with the given key and format it with the given Params"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"key")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"the key of the requested localized string")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"arguments")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Object"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"a map of argument names to Params")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"the formatted output string"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getlocale"},"getLocale"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getLocale"),"(): ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Get the current locale code"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"the current locale code"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getlocalizedpath"},"getLocalizedPath"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getLocalizedPath"),"(",Object(n.b)("inlineCode",{parentName:"p"},"path"),": string): ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Helper method to get the localized path of a resource using the LocaleHelper's current locale"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"path")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"is the relative path to the resource")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"the path to the resource if found"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getutf8string"},"getUTF8String"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getUTF8String"),"(",Object(n.b)("inlineCode",{parentName:"p"},"key"),": string): ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Retrieves a string from the locale data with the given key and performs no formatting"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"key")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"the key of the requested localized string")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"the requested string"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"init"},"init"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"init"),"(): ",Object(n.b)("em",{parentName:"p"},"boolean")),Object(n.b)("p",null,"Initialize the locale helper. This or setLocale must be called before other methods are available."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"boolean")),Object(n.b)("p",null,"true if initialized successfully, false otherwise"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"setlocale"},"setLocale"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"setLocale"),"(",Object(n.b)("inlineCode",{parentName:"p"},"locale"),": string): ",Object(n.b)("em",{parentName:"p"},"boolean")),Object(n.b)("p",null,"Change the locale of the locale helper"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"locale")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"the new locale code")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"boolean")),Object(n.b)("p",null,"true if locale data was found for the new locale, false otherwise"))}i.isMDXComponent=!0},812:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return o}));var n=a(0),r=a.n(n),b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},c=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)};var p="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,p=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),m=l(a),o=n,O=m[c+"."+o]||m[o]||i[o]||b;return a?r.a.createElement(O,Object.assign({},{ref:t},p,{components:a})):r.a.createElement(O,Object.assign({},{ref:t},p))}));function o(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:n,l[1]=c;for(var o=2;o<b;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);
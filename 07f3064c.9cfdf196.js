(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return i}));var b=n(1),a=n(6),r=(n(0),n(526)),l={id:"_lumin_.math.aabb",title:"lumin.math.AABB",sidebar_label:"lumin.math.AABB"},c={id:"classes/_lumin_.math.aabb",title:"lumin.math.AABB",description:"Axis-aligned bounding box.",source:"@site/../docs/classes/_lumin_.math.aabb.md",permalink:"/docs/classes/_lumin_.math.aabb",sidebar_label:"lumin.math.AABB",sidebar:"docs",previous:{title:"lumin.glyph.TileInfo",permalink:"/docs/classes/_lumin_.glyph.tileinfo"},next:{title:"lumin.multipack.Descriptor",permalink:"/docs/classes/_lumin_.multipack.descriptor"}},m=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"<code>Static</code> EMPTY",id:"static-empty",children:[]}]},{value:"Methods",id:"methods",children:[{value:"contains",id:"contains",children:[]},{value:"extend",id:"extend",children:[]},{value:"getCenter",id:"getcenter",children:[]},{value:"getDepth",id:"getdepth",children:[]},{value:"getExtents",id:"getextents",children:[]},{value:"getHeight",id:"getheight",children:[]},{value:"getMax",id:"getmax",children:[]},{value:"getMin",id:"getmin",children:[]},{value:"getWidth",id:"getwidth",children:[]},{value:"intersect",id:"intersect",children:[]},{value:"isEmpty",id:"isempty",children:[]},{value:"isValid",id:"isvalid",children:[]},{value:"isZeroSize",id:"iszerosize",children:[]},{value:"isZeroVolume",id:"iszerovolume",children:[]},{value:"setMax",id:"setmax",children:[]},{value:"setMin",id:"setmin",children:[]},{value:"toString",id:"tostring",children:[]},{value:"transform",id:"transform",children:[]},{value:"translate",id:"translate",children:[]}]}],p={rightToc:m};function i(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(b.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Axis-aligned bounding box."),Object(r.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"AABB"))),Object(r.b)("h2",{id:"constructors"},"Constructors"),Object(r.b)("h3",{id:"constructor"},"constructor"),Object(r.b)("p",null,"+"," ",Object(r.b)("strong",{parentName:"p"},"new AABB"),"(): ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"/docs/classes/_lumin_.math.aabb"}),"AABB"))),Object(r.b)("p",null,"Initially, the AABB is empty."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"/docs/classes/_lumin_.math.aabb"}),"AABB"))),Object(r.b)("p",null,"+"," ",Object(r.b)("strong",{parentName:"p"},"new AABB"),"(",Object(r.b)("inlineCode",{parentName:"p"},"min"),": ","[number, number, number]"," | Float32Array, ",Object(r.b)("inlineCode",{parentName:"p"},"max"),": ","[number, number, number]"," | Float32Array): ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"/docs/classes/_lumin_.math.aabb"}),"AABB"))),Object(r.b)("p",null,"Initially, the AABB is empty."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"min")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"[number, number, number]"," ","|"," Float32Array")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"max")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"[number, number, number]"," ","|"," Float32Array")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"/docs/classes/_lumin_.math.aabb"}),"AABB"))),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)("h3",{id:"static-empty"},Object(r.b)("inlineCode",{parentName:"h3"},"Static")," EMPTY"),Object(r.b)("p",null,"\u25aa ",Object(r.b)("strong",{parentName:"p"},"EMPTY"),": ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"/docs/classes/_lumin_.math.aabb"}),"AABB"))),Object(r.b)("p",null,"Default constructed AABB with no enclosed volume.\n",Object(r.b)("inlineCode",{parentName:"p"},"value = AABB()")),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"contains"},"contains"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"contains"),"(",Object(r.b)("inlineCode",{parentName:"p"},"point"),": ","[number, number, number]"," | Float32Array): ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Is the point contained within the bounds."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"point")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"[number, number, number]"," ","|"," Float32Array")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"extend"},"extend"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"extend"),"(",Object(r.b)("inlineCode",{parentName:"p"},"other"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/classes/_lumin_.math.aabb"}),"AABB"),"): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Extend this AABB to also enclose the given AABB."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"other")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/classes/_lumin_.math.aabb"}),"AABB"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"extend"),"(",Object(r.b)("inlineCode",{parentName:"p"},"point"),": ","[number, number, number]"," | Float32Array): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Extend this AABB to enclose the given point."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"point")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"[number, number, number]"," ","|"," Float32Array")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getcenter"},"getCenter"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getCenter"),"(): ",Object(r.b)("em",{parentName:"p"},"[number, number, number]")),Object(r.b)("p",null,"Get the center of the bounding box."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"[number, number, number]")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getdepth"},"getDepth"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getDepth"),"(): ",Object(r.b)("em",{parentName:"p"},"number")),Object(r.b)("p",null,"Get the depth (z dimension) of the bounding box."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"number")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getextents"},"getExtents"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getExtents"),"(): ",Object(r.b)("em",{parentName:"p"},"[number, number, number]")),Object(r.b)("p",null,"Get the extents (w/2,h/2,d/2) of the bounding box."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"[number, number, number]")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getheight"},"getHeight"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getHeight"),"(): ",Object(r.b)("em",{parentName:"p"},"number")),Object(r.b)("p",null,"Get the height (y dimension) of the bounding box."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"number")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getmax"},"getMax"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getMax"),"(): ",Object(r.b)("em",{parentName:"p"},"[number, number, number]")),Object(r.b)("p",null,"Get the maximum coordinate of the bounding box."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"[number, number, number]")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getmin"},"getMin"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getMin"),"(): ",Object(r.b)("em",{parentName:"p"},"[number, number, number]")),Object(r.b)("p",null,"Get the minimum coordinate of the bounding box."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"[number, number, number]")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getwidth"},"getWidth"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getWidth"),"(): ",Object(r.b)("em",{parentName:"p"},"number")),Object(r.b)("p",null,"Get the width (x dimension) of the bounding box."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"number")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"intersect"},"intersect"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"intersect"),"(",Object(r.b)("inlineCode",{parentName:"p"},"rayOri"),": ","[number, number, number]"," | Float32Array, ",Object(r.b)("inlineCode",{parentName:"p"},"rayDir"),": ","[number, number, number]"," | Float32Array): ",Object(r.b)("em",{parentName:"p"},"number | null")),Object(r.b)("p",null,"Intersect AABB with a ray. The AABB is assumed to be a solid block; if the ray origin is inside\nthe AABB it will be considered a hit with a distance of 0."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"rayOri")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"[number, number, number]"," ","|"," Float32Array"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Start point of the ray.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"rayDir")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"[number, number, number]"," ","|"," Float32Array"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Direction of the ray. The ray is assumed to be infinite in length.")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"number | null")),Object(r.b)("p",null,"Distance to the intersection. To get the intersection point, use rayOri + rayDir * dist."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"isempty"},"isEmpty"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"isEmpty"),"(): ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Get whether the AABB is EMPTY."),Object(r.b)("p",null,"An EMPTY AABB is un-initialized and contains\nno valid data, but is ready for extending."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"isvalid"},"isValid"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"isValid"),"(): ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Get whether the AABB is valid."),Object(r.b)("p",null,"An invalid AABB is where any component in max is\nless than the same component in min."),Object(r.b)("p",null,"EMPTY is an invalid AABB."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"iszerosize"},"isZeroSize"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"isZeroSize"),"(): ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Get whether the AABB is of zero size."),Object(r.b)("p",null,"An AABB with zero size is where min and max\nare at the same point."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"iszerovolume"},"isZeroVolume"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"isZeroVolume"),"(): ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Get whether the AABB is of zero volume."),Object(r.b)("p",null,"An AABB with zero volume is where any component\nin min equals the same component in max."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setmax"},"setMax"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"setMax"),"(",Object(r.b)("inlineCode",{parentName:"p"},"max"),": ","[number, number, number]"," | Float32Array): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Set the maximum coordinate of the bounding box"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"max")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"[number, number, number]"," ","|"," Float32Array")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setmin"},"setMin"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"setMin"),"(",Object(r.b)("inlineCode",{parentName:"p"},"min"),": ","[number, number, number]"," | Float32Array): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Set the minimum coordinate of the bounding box"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"min")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"[number, number, number]"," ","|"," Float32Array")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"tostring"},"toString"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"toString"),"(): ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Return a readable string representation of the given AABB object."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"transform"},"transform"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"transform"),"(",Object(r.b)("inlineCode",{parentName:"p"},"mat"),": ","[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]"," | Float32Array): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Transform the AABB.  The resulting AABB will be the\nminimal AABB enclosing the original AABB with the provided\ntransform applied."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"mat")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]"," ","|"," Float32Array")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"translate"},"translate"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"translate"),"(",Object(r.b)("inlineCode",{parentName:"p"},"offset"),": ","[number, number, number]"," | Float32Array): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Translate this AABB by the given offset."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"offset")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"[number, number, number]"," ","|"," Float32Array")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")))}i.isMDXComponent=!0},526:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var b=n(0),a=n.n(b);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,b)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,b,a=function(e,t){if(null==e)return{};var n,b,a={},r=Object.keys(e);for(b=0;b<r.length;b++)n=r[b],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(b=0;b<r.length;b++)n=r[b],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),i=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=i(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},o=Object(b.forwardRef)((function(e,t){var n=e.components,b=e.mdxType,r=e.originalType,l=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),u=i(n),o=b,j=u["".concat(l,".").concat(o)]||u[o]||O[o]||r;return n?a.a.createElement(j,c({ref:t},p,{components:n})):a.a.createElement(j,c({ref:t},p))}));function j(e,t){var n=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var r=n.length,l=new Array(r);l[0]=o;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:b,l[1]=c;for(var p=2;p<r;p++)l[p]=n[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}o.displayName="MDXCreateElement"}}]);
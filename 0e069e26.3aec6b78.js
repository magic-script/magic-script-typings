(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(6),b=(n(0),n(526)),c={id:"_lumin_.font2dresource",title:"lumin.Font2dResource",sidebar_label:"lumin.Font2dResource"},l={id:"classes/_lumin_.font2dresource",title:"lumin.Font2dResource",description:"A 2D font is a font rendered onto a planar image (whatever the format),",source:"@site/../docs/classes/_lumin_.font2dresource.md",permalink:"/docs/classes/_lumin_.font2dresource",sidebar_label:"lumin.Font2dResource",sidebar:"docs",previous:{title:"lumin.FileResource",permalink:"/docs/classes/_lumin_.fileresource"},next:{title:"lumin.FontResource",permalink:"/docs/classes/_lumin_.fontresource"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"getAdvanceDirection",id:"getadvancedirection",children:[]},{value:"getAscender",id:"getascender",children:[]},{value:"getBasePath",id:"getbasepath",children:[]},{value:"getDescender",id:"getdescender",children:[]},{value:"getFileName",id:"getfilename",children:[]},{value:"getFlowDirection",id:"getflowdirection",children:[]},{value:"getFontName",id:"getfontname",children:[]},{value:"getFontSize",id:"getfontsize",children:[]},{value:"getFontStyle",id:"getfontstyle",children:[]},{value:"getGlyphHeight",id:"getglyphheight",children:[]},{value:"getGlyphQuality",id:"getglyphquality",children:[]},{value:"getLineSpacing",id:"getlinespacing",children:[]},{value:"getLoadStatus",id:"getloadstatus",children:[]},{value:"getLoadedGlyphs",id:"getloadedglyphs",children:[]},{value:"getMinAlphaToDiscard",id:"getminalphatodiscard",children:[]},{value:"getResourceId",id:"getresourceid",children:[]},{value:"getShaderType",id:"getshadertype",children:[]},{value:"getTexture2dArrayIds",id:"gettexture2darrayids",children:[]},{value:"getTextureDims",id:"gettexturedims",children:[]},{value:"getTileInfo",id:"gettileinfo",children:[]},{value:"getTileSize",id:"gettilesize",children:[]},{value:"isProtectedContent",id:"isprotectedcontent",children:[]},{value:"isResourceValid",id:"isresourcevalid",children:[]},{value:"setFont2dDesc",id:"setfont2ddesc",children:[]},{value:"setProtectedContent",id:"setprotectedcontent",children:[]}]}],s={rightToc:o};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"A 2D font is a font rendered onto a planar image (whatever the format),\nas opposed to a 3D model of the glyphs or other graphical representation."),Object(b.b)("p",null,"Note, for this implementation, the loadGlyphs() and unloadGlyphs()\nfunctions will only work if called on the render thread by the process\nwith the OpenGL context.  These two methods are also not needed by Lumin\nclients, which can create font resources within their prisms; see\nPrism::createFont2dResource."),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("p",null,"  \u21b3 ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/classes/_lumin_.fontresource"}),"FontResource")),Object(b.b)("p",null,"  \u21b3 ",Object(b.b)("strong",{parentName:"p"},"Font2dResource")),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new Font2dResource"),"(): ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.font2dresource"}),"Font2dResource"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Overrides ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.fontresource"}),"FontResource"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.fontresource#constructor"}),"constructor"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.font2dresource"}),"Font2dResource"))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"getadvancedirection"},"getAdvanceDirection"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getAdvanceDirection"),"(): ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/enums/_lumin_.glyph.advancedirection"}),"AdvanceDirection"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.font2dresource"}),"Font2dResource"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.font2dresource#getadvancedirection"}),"getAdvanceDirection"))),Object(b.b)("p",null,"Get the advance direction."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/enums/_lumin_.glyph.advancedirection"}),"AdvanceDirection"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getascender"},"getAscender"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getAscender"),"(): ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.font2dresource"}),"Font2dResource"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.font2dresource#getascender"}),"getAscender"))),Object(b.b)("p",null,"The ascender is the vertical distance from the horizontal\nbaseline to the highest glyph coordinate."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getbasepath"},"getBasePath"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getBasePath"),"(): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.fileresource"}),"FileResource"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.fileresource#getbasepath"}),"getBasePath"))),Object(b.b)("p",null,"Gets the base path of the resource."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Base path"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getdescender"},"getDescender"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getDescender"),"(): ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.font2dresource"}),"Font2dResource"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.font2dresource#getdescender"}),"getDescender"))),Object(b.b)("p",null,"The descender is the vertical distance from the horizontal\nbaseline to the lowest glyph coordinate, which is negative\nif any glyphs extend below the baseline (usually they do)."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getfilename"},"getFileName"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getFileName"),"(): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.fileresource"}),"FileResource"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.fileresource#getfilename"}),"getFileName"))),Object(b.b)("p",null,"Gets the FileName Associated with this resource."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Filename"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getflowdirection"},"getFlowDirection"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getFlowDirection"),"(): ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/enums/_lumin_.text.flowdirection"}),"FlowDirection"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.font2dresource"}),"Font2dResource"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.font2dresource#getflowdirection"}),"getFlowDirection"))),Object(b.b)("p",null,"Get the text-flow direction."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/enums/_lumin_.text.flowdirection"}),"FlowDirection"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getfontname"},"getFontName"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getFontName"),"(): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.font2dresource"}),"Font2dResource"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.font2dresource#getfontname"}),"getFontName"))),Object(b.b)("p",null,'Get the font family; e.g., "Liberation Mono".'),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getfontsize"},"getFontSize"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getFontSize"),"(): ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.font2dresource"}),"Font2dResource"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.font2dresource#getfontsize"}),"getFontSize"))),Object(b.b)("p",null,"Get the size of the font; the units are not specified by the interface."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getfontstyle"},"getFontStyle"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getFontStyle"),"(): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.font2dresource"}),"Font2dResource"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.font2dresource#getfontstyle"}),"getFontStyle"))),Object(b.b)("p",null,'Get the font style; e.g., "Italic".'),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getglyphheight"},"getGlyphHeight"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getGlyphHeight"),"(): ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.font2dresource"}),"Font2dResource"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.font2dresource#getglyphheight"}),"getGlyphHeight"))),Object(b.b)("p",null,"Get the global glyph height for the font."),Object(b.b)("p",null,"Formally, this is the difference between the ascender and descender,\nwhich is what getGlyphHeight() returns."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getglyphquality"},"getGlyphQuality"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getGlyphQuality"),"(): ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/enums/_lumin_.glyph.quality"}),"Quality"))),Object(b.b)("p",null,"Get the glyph quality of the font resource specified in the\nFont2dDesc when the font resource was created."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/enums/_lumin_.glyph.quality"}),"Quality"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getlinespacing"},"getLineSpacing"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getLineSpacing"),"(): ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.font2dresource"}),"Font2dResource"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.font2dresource#getlinespacing"}),"getLineSpacing"))),Object(b.b)("p",null,"Get the space between lines of text written with this font."),Object(b.b)("p",null,"This is a value provided by the font designer to indicate how\nmuch space should separate lines of text written with the font\nrelative to the size of a tile (which is 1 in glyph space)."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getloadstatus"},"getLoadStatus"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getLoadStatus"),"(): ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/enums/_lumin_.resources.loadstatus"}),"LoadStatus"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.fileresource"}),"FileResource"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.fileresource#getloadstatus"}),"getLoadStatus"))),Object(b.b)("p",null,"Return a int that contains the result of loading this resource."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/enums/_lumin_.resources.loadstatus"}),"LoadStatus"))),Object(b.b)("p",null,"int with the result value."),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getloadedglyphs"},"getLoadedGlyphs"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getLoadedGlyphs"),"(): ",Object(b.b)("em",{parentName:"p"},"Array\u2039number\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.font2dresource"}),"Font2dResource"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.font2dresource#getloadedglyphs"}),"getLoadedGlyphs"))),Object(b.b)("p",null,"Get the list of character codes for which glyphs have been loaded."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Array\u2039number\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getminalphatodiscard"},"getMinAlphaToDiscard"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getMinAlphaToDiscard"),"(): ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("p",null,"Get the minimum value of text fragments to render; see Font2dDesc."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getresourceid"},"getResourceId"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getResourceId"),"(): ",Object(b.b)("em",{parentName:"p"},"bigint")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.fileresource"}),"FileResource"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.fileresource#getresourceid"}),"getResourceId"))),Object(b.b)("p",null,"Returns the Unique ID of this resource"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"bigint")),Object(b.b)("p",null,"Resource ID"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getshadertype"},"getShaderType"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getShaderType"),"(): ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/enums/_lumin_.utils.shadertype"}),"ShaderType"))),Object(b.b)("p",null,"Get the type of shader to use for rendering this resource."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/enums/_lumin_.utils.shadertype"}),"ShaderType"))),Object(b.b)("p",null,"kMAX only if an error occurred; shader type otherwise."),Object(b.b)("hr",null),Object(b.b)("h3",{id:"gettexture2darrayids"},"getTexture2dArrayIds"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getTexture2dArrayIds"),"(): ",Object(b.b)("em",{parentName:"p"},"Array\u2039number\u203a")),Object(b.b)("p",null,"Get the IDs of all 2D texture arrays containing the glyphs of the font."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Array\u2039number\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"gettexturedims"},"getTextureDims"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getTextureDims"),"(",Object(b.b)("inlineCode",{parentName:"p"},"textureId"),": number): ",Object(b.b)("em",{parentName:"p"},"[number, number, number]")),Object(b.b)("p",null,"After the server has loaded the font resource, this will\nreturn the dimensions of the texture with the given ID."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"textureId")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"number")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"[number, number, number]")),Object(b.b)("p",null,"the (height, width, depth) of the texture with the given ID,\nor else (0, 0, 0) if the textureID equals 0 or is not known."),Object(b.b)("hr",null),Object(b.b)("h3",{id:"gettileinfo"},"getTileInfo"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getTileInfo"),"(",Object(b.b)("inlineCode",{parentName:"p"},"character"),": number): ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.glyph.tileinfo"}),"TileInfo"))),Object(b.b)("p",null,"Get the information for rendering a particular character."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"character")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"number"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Glyph identifier")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.glyph.tileinfo"}),"TileInfo"))),Object(b.b)("p",null,"Information about the glyph representing the given character,\nwhich will equal NONE if no such character has been loaded."),Object(b.b)("hr",null),Object(b.b)("h3",{id:"gettilesize"},"getTileSize"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getTileSize"),"(): ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("p",null,"Get the size of the tiles for the glyphs managed by this resource."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"number")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"isprotectedcontent"},"isProtectedContent"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"isProtectedContent"),"(): ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.fileresource"}),"FileResource"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.fileresource#isprotectedcontent"}),"isProtectedContent"))),Object(b.b)("p",null,"Check if content is protected"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"true if protected"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"isresourcevalid"},"isResourceValid"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"isResourceValid"),"(): ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.fileresource"}),"FileResource"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.fileresource#isresourcevalid"}),"isResourceValid"))),Object(b.b)("p",null,"Returns True if the Resource was successfully loaded"),Object(b.b)("p",null,"Loading only happens on the server-side so this call is\nonly useful to the server"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"TRUE = Successfully loaded"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"setfont2ddesc"},"setFont2dDesc"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"setFont2dDesc"),"(",Object(b.b)("inlineCode",{parentName:"p"},"fontDesc"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/classes/_lumin_.glyph.font2ddesc"}),"Font2dDesc"),"): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"priv"))," none"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"fontDesc")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/classes/_lumin_.glyph.font2ddesc"}),"Font2dDesc"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"setprotectedcontent"},"setProtectedContent"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"setProtectedContent"),"(",Object(b.b)("inlineCode",{parentName:"p"},"value"),": boolean): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.fileresource"}),"FileResource"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/classes/_lumin_.fileresource#setprotectedcontent"}),"setProtectedContent"))),Object(b.b)("p",null,"Protected/Copyrighted content, do not share with other clients"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"value")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"true if protected")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")))}p.isMDXComponent=!0},526:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},b=Object.keys(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},i=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),i=p(n),u=r,O=i["".concat(c,".").concat(u)]||i[u]||m[u]||b;return n?a.a.createElement(O,l({ref:t},s,{components:n})):a.a.createElement(O,l({ref:t},s))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=n.length,c=new Array(b);c[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<b;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
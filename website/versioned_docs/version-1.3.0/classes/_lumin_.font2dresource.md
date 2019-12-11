---
id: "_lumin_.font2dresource"
title: "Font2dResource"
sidebar_label: "Font2dResource"
---

A 2D font is a font rendered onto a planar image (whatever the format),
as opposed to a 3D model of the glyphs or other graphical representation.

Note, for this implementation, the loadGlyphs() and unloadGlyphs()
functions will only work if called on the render thread by the process
with the OpenGL context.  These two methods are also not needed by Lumin
clients, which can create font resources within their prisms; see
Prism::createFont2dResource.

## Hierarchy

  ↳ [FontResource](_lumin_.fontresource.md)

  ↳ **Font2dResource**

## Constructors

###  constructor

\+ **new Font2dResource**(): *[Font2dResource](_lumin_.font2dresource.md)*

*Overrides [FontResource](_lumin_.fontresource.md).[constructor](_lumin_.fontresource.md#constructor)*

**Returns:** *[Font2dResource](_lumin_.font2dresource.md)*

## Methods

###  getAdvanceDirection

▸ **getAdvanceDirection**(): *[AdvanceDirection](../enums/_lumin_.glyph.advancedirection.md)*

*Inherited from [FontResource](_lumin_.fontresource.md).[getAdvanceDirection](_lumin_.fontresource.md#getadvancedirection)*

Get the advance direction.

**`priv`** none

**Returns:** *[AdvanceDirection](../enums/_lumin_.glyph.advancedirection.md)*

___

###  getAscender

▸ **getAscender**(): *number*

*Inherited from [FontResource](_lumin_.fontresource.md).[getAscender](_lumin_.fontresource.md#getascender)*

The ascender is the vertical distance from the horizontal
baseline to the highest glyph coordinate.

**`priv`** none

**Returns:** *number*

___

###  getBasePath

▸ **getBasePath**(): *string*

*Inherited from [Resource](_lumin_.resource.md).[getBasePath](_lumin_.resource.md#getbasepath)*

Gets the base path of the resource.

**`priv`** none

**Returns:** *string*

Base path

___

###  getDescender

▸ **getDescender**(): *number*

*Inherited from [FontResource](_lumin_.fontresource.md).[getDescender](_lumin_.fontresource.md#getdescender)*

The descender is the vertical distance from the horizontal
baseline to the lowest glyph coordinate, which is negative
if any glyphs extend below the baseline (usually they do).

**`priv`** none

**Returns:** *number*

___

###  getFileName

▸ **getFileName**(): *string*

*Inherited from [Resource](_lumin_.resource.md).[getFileName](_lumin_.resource.md#getfilename)*

Gets the FileName Associated with this resource.

**`priv`** none

**Returns:** *string*

Filename

___

###  getFlowDirection

▸ **getFlowDirection**(): *[FlowDirection](../enums/_lumin_.text.flowdirection.md)*

*Inherited from [FontResource](_lumin_.fontresource.md).[getFlowDirection](_lumin_.fontresource.md#getflowdirection)*

Get the text-flow direction.

**`priv`** none

**Returns:** *[FlowDirection](../enums/_lumin_.text.flowdirection.md)*

___

###  getFontName

▸ **getFontName**(): *string*

*Inherited from [FontResource](_lumin_.fontresource.md).[getFontName](_lumin_.fontresource.md#getfontname)*

Get the font family; e.g., "Liberation Mono".

**`priv`** none

**Returns:** *string*

___

###  getFontSize

▸ **getFontSize**(): *number*

*Inherited from [FontResource](_lumin_.fontresource.md).[getFontSize](_lumin_.fontresource.md#getfontsize)*

Get the size of the font; the units are not specified by the interface.

**`priv`** none

**Returns:** *number*

___

###  getFontStyle

▸ **getFontStyle**(): *string*

*Inherited from [FontResource](_lumin_.fontresource.md).[getFontStyle](_lumin_.fontresource.md#getfontstyle)*

Get the font style; e.g., "Italic".

**`priv`** none

**Returns:** *string*

___

###  getGlyphHeight

▸ **getGlyphHeight**(): *number*

*Inherited from [FontResource](_lumin_.fontresource.md).[getGlyphHeight](_lumin_.fontresource.md#getglyphheight)*

Get the global glyph height for the font.

Formally, this is the difference between the ascender and descender,
which is what getGlyphHeight() returns.

**`priv`** none

**Returns:** *number*

___

###  getGlyphQuality

▸ **getGlyphQuality**(): *[Quality](../enums/_lumin_.glyph.quality.md)*

Get the glyph quality of the font resource specified in the
Font2dDesc when the font resource was created.

**`priv`** none

**Returns:** *[Quality](../enums/_lumin_.glyph.quality.md)*

___

###  getLineSpacing

▸ **getLineSpacing**(): *number*

*Inherited from [FontResource](_lumin_.fontresource.md).[getLineSpacing](_lumin_.fontresource.md#getlinespacing)*

Get the space between lines of text written with this font.

This is a value provided by the font designer to indicate how
much space should separate lines of text written with the font
relative to the size of a tile (which is 1 in glyph space).

**`priv`** none

**Returns:** *number*

___

###  getLoadStatus

▸ **getLoadStatus**(): *[LoadStatus](../enums/_lumin_.resources.loadstatus.md)*

*Inherited from [Resource](_lumin_.resource.md).[getLoadStatus](_lumin_.resource.md#getloadstatus)*

Return a int that contains the result of loading this resource.

**Returns:** *[LoadStatus](../enums/_lumin_.resources.loadstatus.md)*

int with the result value.

___

###  getLoadedGlyphs

▸ **getLoadedGlyphs**(): *Array‹number›*

*Inherited from [FontResource](_lumin_.fontresource.md).[getLoadedGlyphs](_lumin_.fontresource.md#getloadedglyphs)*

Get the list of character codes for which glyphs have been loaded.

**`priv`** none

**Returns:** *Array‹number›*

___

###  getMinAlphaToDiscard

▸ **getMinAlphaToDiscard**(): *number*

Get the minimum value of text fragments to render; see Font2dDesc.

**`priv`** none

**Returns:** *number*

___

###  getResourceId

▸ **getResourceId**(): *bigint*

*Inherited from [Resource](_lumin_.resource.md).[getResourceId](_lumin_.resource.md#getresourceid)*

Returns the Unique ID of this resource

**`priv`** none

**Returns:** *bigint*

Resource ID

___

###  getResourceType

▸ **getResourceType**(): *[ResourceType](../enums/_lumin_.resourcetype.md)*

*Inherited from [Resource](_lumin_.resource.md).[getResourceType](_lumin_.resource.md#getresourcetype)*

Returns the type of this resource

**`priv`** none

**Returns:** *[ResourceType](../enums/_lumin_.resourcetype.md)*

Resource Type

___

###  getShaderType

▸ **getShaderType**(): *[ShaderType](../enums/_lumin_.utils.shadertype.md)*

Get the type of shader to use for rendering this resource.

**`priv`** none

**Returns:** *[ShaderType](../enums/_lumin_.utils.shadertype.md)*

kMAX only if an error occurred; shader type otherwise.

___

###  getTexture2dArrayIds

▸ **getTexture2dArrayIds**(): *Array‹number›*

Get the IDs of all 2D texture arrays containing the glyphs of the font.

**`priv`** none

**Returns:** *Array‹number›*

___

###  getTextureDims

▸ **getTextureDims**(`textureId`: number): *[number, number, number]*

After the server has loaded the font resource, this will
return the dimensions of the texture with the given ID.

**`priv`** none

**Parameters:**

Name | Type |
------ | ------ |
`textureId` | number |

**Returns:** *[number, number, number]*

the (height, width, depth) of the texture with the given ID,
  or else (0, 0, 0) if the textureID equals 0 or is not known.

___

###  getTileInfo

▸ **getTileInfo**(`character`: number): *[TileInfo](_lumin_.glyph.tileinfo.md)*

Get the information for rendering a particular character.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`character` | number | Glyph identifier |

**Returns:** *[TileInfo](_lumin_.glyph.tileinfo.md)*

Information about the glyph representing the given character,
  which will equal NONE if no such character has been loaded.

___

###  getTileSize

▸ **getTileSize**(): *number*

Get the size of the tiles for the glyphs managed by this resource.

**`priv`** none

**Returns:** *number*

___

###  isResourceValid

▸ **isResourceValid**(): *boolean*

*Inherited from [Resource](_lumin_.resource.md).[isResourceValid](_lumin_.resource.md#isresourcevalid)*

Returns True if the Resource was successfully loaded

Loading only happens on the server-side so this call is
only useful to the server

**`priv`** none

**Returns:** *boolean*

TRUE = Successfully loaded

___

###  setFont2dDesc

▸ **setFont2dDesc**(`fontDesc`: [Font2dDesc](_lumin_.glyph.font2ddesc.md)): *void*

**`priv`** none

**Parameters:**

Name | Type |
------ | ------ |
`fontDesc` | [Font2dDesc](_lumin_.glyph.font2ddesc.md) |

**Returns:** *void*

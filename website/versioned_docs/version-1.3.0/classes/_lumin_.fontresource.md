---
id: "_lumin_.fontresource"
title: "FontResource"
sidebar_label: "FontResource"
---

Interface for objects that manage font resources, which
describe how text will be rendered with Lumin.

## Hierarchy

  ↳ [FileResource](_lumin_.fileresource.md)

  ↳ **FontResource**

  ↳ [Font2dResource](_lumin_.font2dresource.md)

## Constructors

###  constructor

\+ **new FontResource**(): *[FontResource](_lumin_.fontresource.md)*

*Overrides [FileResource](_lumin_.fileresource.md).[constructor](_lumin_.fileresource.md#constructor)*

**Returns:** *[FontResource](_lumin_.fontresource.md)*

## Methods

###  getAdvanceDirection

▸ **getAdvanceDirection**(): *[AdvanceDirection](../enums/_lumin_.glyph.advancedirection.md)*

Get the advance direction.

**`priv`** none

**Returns:** *[AdvanceDirection](../enums/_lumin_.glyph.advancedirection.md)*

___

###  getAscender

▸ **getAscender**(): *number*

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

Get the text-flow direction.

**`priv`** none

**Returns:** *[FlowDirection](../enums/_lumin_.text.flowdirection.md)*

___

###  getFontName

▸ **getFontName**(): *string*

Get the font family; e.g., "Liberation Mono".

**`priv`** none

**Returns:** *string*

___

###  getFontSize

▸ **getFontSize**(): *number*

Get the size of the font; the units are not specified by the interface.

**`priv`** none

**Returns:** *number*

___

###  getFontStyle

▸ **getFontStyle**(): *string*

Get the font style; e.g., "Italic".

**`priv`** none

**Returns:** *string*

___

###  getGlyphHeight

▸ **getGlyphHeight**(): *number*

Get the global glyph height for the font.

Formally, this is the difference between the ascender and descender,
which is what getGlyphHeight() returns.

**`priv`** none

**Returns:** *number*

___

###  getLineSpacing

▸ **getLineSpacing**(): *number*

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

Get the list of character codes for which glyphs have been loaded.

**`priv`** none

**Returns:** *Array‹number›*

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

###  isResourceValid

▸ **isResourceValid**(): *boolean*

*Inherited from [Resource](_lumin_.resource.md).[isResourceValid](_lumin_.resource.md#isresourcevalid)*

Returns True if the Resource was successfully loaded

Loading only happens on the server-side so this call is
only useful to the server

**`priv`** none

**Returns:** *boolean*

TRUE = Successfully loaded

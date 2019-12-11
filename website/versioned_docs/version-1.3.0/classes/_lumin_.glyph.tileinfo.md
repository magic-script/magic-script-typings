---
id: "_lumin_.glyph.tileinfo"
title: "TileInfo"
sidebar_label: "TileInfo"
---

Information about each glyph for use in rendering.  Glyphs occupy tiles,
which can be combined to draw text.

## Hierarchy

* **TileInfo**

## Constructors

###  constructor

\+ **new TileInfo**(`code`: number, `texId`: number, `layer`: number, `texMin`: [number, number], `texMax`: [number, number], `size`: [TextureSize](../enums/_lumin_.glyph.texturesize.md), `mt`: [Metrics](_lumin_.glyph.metrics.md)): *[TileInfo](_lumin_.glyph.tileinfo.md)*

**Parameters:**

Name | Type |
------ | ------ |
`code` | number |
`texId` | number |
`layer` | number |
`texMin` | [number, number] |
`texMax` | [number, number] |
`size` | [TextureSize](../enums/_lumin_.glyph.texturesize.md) |
`mt` | [Metrics](_lumin_.glyph.metrics.md) |

**Returns:** *[TileInfo](_lumin_.glyph.tileinfo.md)*

## Properties

###  charCode

• **charCode**: *number*

Unicode character represented by the glyph.

___

###  layerIndex

• **layerIndex**: *number*

Index of the layer in the 2D texture array containing the glyph.

___

###  metrics

• **metrics**: *[Metrics](_lumin_.glyph.metrics.md)*

Positioning information for the glyph in a string of text.

___

###  texMaxCoord

• **texMaxCoord**: *[number, number]*

Max texture coordinate (u, v) on the 2D-texture layer.

___

###  texMinCoord

• **texMinCoord**: *[number, number]*

Min texture coordinate (u, v) on the 2D-texture layer.

___

###  textureId

• **textureId**: *number*

ID of the 2D texture array in which this glyph's tile is drawn.

___

###  textureSize

• **textureSize**: *[TextureSize](../enums/_lumin_.glyph.texturesize.md)*

Identifies the texture size occupied by the glyph's image.

___

### `Static` NO_TILE

▪ **NO_TILE**: *[TileInfo](_lumin_.glyph.tileinfo.md)*

Represents "no tile", which has a Unicode value of 0 (the NUL character).
`value = TileInfo(NUL_CHAR,0,0,[],[],TextureSize.kNormal,Metrics())`

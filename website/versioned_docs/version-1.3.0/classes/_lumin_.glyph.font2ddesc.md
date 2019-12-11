---
id: "_lumin_.glyph.font2ddesc"
title: "Font2dDesc"
sidebar_label: "Font2dDesc"
---

Object that can be used to create a BitmapFontResource object.

## Hierarchy

* **Font2dDesc**

## Constructors

###  constructor

\+ **new Font2dDesc**(`advanceDir`: [AdvanceDirection](../enums/_lumin_.glyph.advancedirection.md), `flowDir`: [FlowDirection](../enums/_lumin_.text.flowdirection.md), `tileSize`: number, `quality?`: [Quality](../enums/_lumin_.glyph.quality.md), `minAlpha?`: number): *[Font2dDesc](_lumin_.glyph.font2ddesc.md)*

**Parameters:**

Name | Type |
------ | ------ |
`advanceDir` | [AdvanceDirection](../enums/_lumin_.glyph.advancedirection.md) |
`flowDir` | [FlowDirection](../enums/_lumin_.text.flowdirection.md) |
`tileSize` | number |
`quality?` | [Quality](../enums/_lumin_.glyph.quality.md) |
`minAlpha?` | number |

**Returns:** *[Font2dDesc](_lumin_.glyph.font2ddesc.md)*

## Properties

###  advanceDirection

• **advanceDirection**: *[AdvanceDirection](../enums/_lumin_.glyph.advancedirection.md)*

Direction to the next glyph along the baseline.

___

###  flowDirection

• **flowDirection**: *[FlowDirection](../enums/_lumin_.text.flowdirection.md)*

Direction from one line of text to the next.

___

###  minAlphaToDiscard

• **minAlphaToDiscard**: *number*

Control the minimum alpha value rendered in each glyph of the
font.  Values above 0.2 will cause aliasing to display around
the edges of some fonts.  Depending on the use case, however,
this may be acceptable in return for improved blending of
overlapping letters (e.g., as is the norm in a cursive font).
Values much below 0.1, however, can lead to visible edges
from overlapping glyphs in the rendered text.

___

###  quality

• **quality**: *[Quality](../enums/_lumin_.glyph.quality.md)*

Control the quality of the rendered text.  Note kStd
does not require glyph pre-processing of fonts.  The other
quality levels require the font file to be pre-processed
(e.g., with the "prefont" tool; see /tools/prefont/).
In that case, the above tileSize field must match that of
the pre-processed resources, or the Font2dResource will
not load correctly.

___

###  tileSize

• **tileSize**: *number*

The size of all glyph images are given by this parameter; e.g., 32,
which implies each glyph will occupy a 32x32 region of a glyph sheet.

___

### `Static` DEFAULT

▪ **DEFAULT**: *[Font2dDesc](_lumin_.glyph.font2ddesc.md)*

`value = Font2dDesc(AdvanceDirection.kRight,text.FlowDirection.kBelow,DEFAULT_GLYPH_SIZE,Quality.kStd)`

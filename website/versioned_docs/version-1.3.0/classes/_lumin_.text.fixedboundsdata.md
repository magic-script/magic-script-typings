---
id: "_lumin_.text.fixedboundsdata"
title: "FixedBoundsData"
sidebar_label: "FixedBoundsData"
---

Data to set up fixed bounds, which is a rectangular area for
typesetting and rendering the text of this node.

Note the node position is controlled with the local transform.
For English, the node position is the upper-left corner of the
rendered region, whose shape can be controlled with this data;
see functions getFixedBounds and setFixedBounds.

## Hierarchy

* **FixedBoundsData**

## Constructors

###  constructor

\+ **new FixedBoundsData**(`width`: number, `height`: number, `wrap?`: boolean, `clip?`: boolean): *[FixedBoundsData](_lumin_.text.fixedboundsdata.md)*

Note clip = true has no effect; clipping partially visible glyphs
to the edges of the area is not yet implemented.  At present, only
glyphs fully enclosed by the area will be drawn.

**Parameters:**

Name | Type |
------ | ------ |
`width` | number |
`height` | number |
`wrap?` | boolean |
`clip?` | boolean |

**Returns:** *[FixedBoundsData](_lumin_.text.fixedboundsdata.md)*

\+ **new FixedBoundsData**(): *[FixedBoundsData](_lumin_.text.fixedboundsdata.md)*

Leaves all values uninitialized, same as a C-style struct.

**Returns:** *[FixedBoundsData](_lumin_.text.fixedboundsdata.md)*

## Properties

###  clip

• **clip**: *boolean*

Not yet implemented; right now, partial glyphs will not display at all.

___

###  height

• **height**: *number*

Height of the area in which to render the text.

___

###  width

• **width**: *number*

Width of the area in which to render the text.

___

###  wrap

• **wrap**: *boolean*

Control whether text wraps at the edge; single-line only if false.

## Methods

###  toString

▸ **toString**(): *string*

**Returns:** *string*

a string representation of the data.

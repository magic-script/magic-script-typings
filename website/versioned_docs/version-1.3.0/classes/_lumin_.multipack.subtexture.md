---
id: "_lumin_.multipack.subtexture"
title: "SubTexture"
sidebar_label: "SubTexture"
---

Describes a sub-texture, which is a texture packed within a larger texture.

## Hierarchy

* **SubTexture**

## Constructors

###  constructor

\+ **new SubTexture**(`a_name?`: string, `a_sheetIndex?`: number, `a_coordsMin?`: [number, number], `a_coordsMax?`: [number, number], `a_startXY?`: [number, number], `a_size?`: [number, number], `a_pivotPoint?`: [number, number], `a_rotation?`: number): *[SubTexture](_lumin_.multipack.subtexture.md)*

**Parameters:**

Name | Type |
------ | ------ |
`a_name?` | string |
`a_sheetIndex?` | number |
`a_coordsMin?` | [number, number] |
`a_coordsMax?` | [number, number] |
`a_startXY?` | [number, number] |
`a_size?` | [number, number] |
`a_pivotPoint?` | [number, number] |
`a_rotation?` | number |

**Returns:** *[SubTexture](_lumin_.multipack.subtexture.md)*

## Properties

###  coordsMax

• **coordsMax**: *[number, number]*

Max coordinates of the sub-texture; (x, y) both between [0, 1].

___

###  coordsMin

• **coordsMin**: *[number, number]*

Min coordinates of the sub-texture; (x, y) both between [0, 1].

___

###  name

• **name**: *string*

Unique name of the sub-texture; often a source-image (e.g., "Tex1.png").

___

###  pivotPoint

• **pivotPoint**: *[number, number]*

Position inside the sub-texture used as the center for rotation.

___

###  rotation

• **rotation**: *number*

Rotation angle in degrees wrt the main texture (e.g., to save space).

___

###  sheetIndex

• **sheetIndex**: *number*

Index of the sheet in the muli-pack that contains the sub-texture.

___

###  size

• **size**: *[number, number]*

The size of the sub texture in pixels.

___

###  startXY

• **startXY**: *[number, number]*

The offest to the starting pixel in the source image.

___

### `Static` NONE

▪ **NONE**: *[SubTexture](_lumin_.multipack.subtexture.md)*

Sentinal value representing no sub-texture.

`value = SubTexture()`

## Methods

###  isNone

▸ **isNone**(): *boolean*

True if name is empty.

**Returns:** *boolean*

___

###  toString

▸ **toString**(): *string*

String representation.

**Returns:** *string*

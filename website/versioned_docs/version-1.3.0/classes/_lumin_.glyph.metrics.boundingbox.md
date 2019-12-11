---
id: "_lumin_.glyph.metrics.boundingbox"
title: "BoundingBox"
sidebar_label: "BoundingBox"
---

Describes the bounding-box of a glyph within its tile.

## Hierarchy

* **BoundingBox**

## Constructors

###  constructor

\+ **new BoundingBox**(`xmin?`: number, `xmax?`: number, `ymin?`: number, `ymax?`: number): *[BoundingBox](_lumin_.glyph.metrics.boundingbox.md)*

Preconditions: 0 <= xmin <= xmax and 0 <= ymin <= ymax.

**Parameters:**

Name | Type |
------ | ------ |
`xmin?` | number |
`xmax?` | number |
`ymin?` | number |
`ymax?` | number |

**Returns:** *[BoundingBox](_lumin_.glyph.metrics.boundingbox.md)*

## Properties

###  horizMax

• **horizMax**: *number*

___

###  horizMin

• **horizMin**: *number*

___

###  vertMax

• **vertMax**: *number*

___

###  vertMin

• **vertMin**: *number*

## Methods

###  getAspectRatio

▸ **getAspectRatio**(): *number*

**Returns:** *number*

___

###  getHeight

▸ **getHeight**(): *number*

**Returns:** *number*

___

###  getWidth

▸ **getWidth**(): *number*

**Returns:** *number*

___

###  toString

▸ **toString**(): *string*

**Returns:** *string*

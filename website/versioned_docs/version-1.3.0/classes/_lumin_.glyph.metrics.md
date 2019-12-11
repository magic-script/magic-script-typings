---
id: "_lumin_.glyph.metrics"
title: "Metrics"
sidebar_label: "Metrics"
---

Metrics provided by the font to position glyphs.
Quantities are in tile coordinates, typically [0, 1].

## Hierarchy

* **Metrics**

## Constructors

###  constructor

\+ **new Metrics**(`ap`: [AdvancePen](_lumin_.glyph.metrics.advancepen.md), `hbb`: [BoundingBox](_lumin_.glyph.metrics.boundingbox.md), `vbb`: [BoundingBox](_lumin_.glyph.metrics.boundingbox.md)): *[Metrics](_lumin_.glyph.metrics.md)*

**Parameters:**

Name | Type |
------ | ------ |
`ap` | [AdvancePen](_lumin_.glyph.metrics.advancepen.md) |
`hbb` | [BoundingBox](_lumin_.glyph.metrics.boundingbox.md) |
`vbb` | [BoundingBox](_lumin_.glyph.metrics.boundingbox.md) |

**Returns:** *[Metrics](_lumin_.glyph.metrics.md)*

\+ **new Metrics**(): *[Metrics](_lumin_.glyph.metrics.md)*

**Returns:** *[Metrics](_lumin_.glyph.metrics.md)*

## Properties

###  advancePen

• **advancePen**: *[AdvancePen](_lumin_.glyph.metrics.advancepen.md)*

Pen advance in the AdvanceDirection to draw the next glyph.

___

###  horizBB

• **horizBB**: *[BoundingBox](_lumin_.glyph.metrics.boundingbox.md)*

The bounding box of the glyph within its tile for horizontal layouts.

___

###  padding

• **padding**: *[number, number]*

Padding for the glyph's width and height, respectively, added
for image effects.  The default indicates the glyph is not
padded; i.e., it fits snugly into its bounding box.

___

###  vertBB

• **vertBB**: *[BoundingBox](_lumin_.glyph.metrics.boundingbox.md)*

The bounding box of the glyph within its tile for vertical layouts.

## Methods

###  toString

▸ **toString**(): *string*

**Returns:** *string*

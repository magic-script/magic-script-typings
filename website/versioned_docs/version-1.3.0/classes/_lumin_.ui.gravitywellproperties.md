---
id: "_lumin_.ui.gravitywellproperties"
title: "GravityWellProperties"
sidebar_label: "GravityWellProperties"
---

UiNode gravity well properties.

## Hierarchy

* **GravityWellProperties**

## Constructors

###  constructor

\+ **new GravityWellProperties**(`a_shape`: [BoundaryShape](_lumin_.ui.boundaryshape.md), `a_snap?`: [GravityWellSnap](../enums/_lumin_.ui.gravitywellsnap.md), `a_internalSnap?`: boolean): *[GravityWellProperties](_lumin_.ui.gravitywellproperties.md)*

**Parameters:**

Name | Type |
------ | ------ |
`a_shape` | [BoundaryShape](_lumin_.ui.boundaryshape.md) |
`a_snap?` | [GravityWellSnap](../enums/_lumin_.ui.gravitywellsnap.md) |
`a_internalSnap?` | boolean |

**Returns:** *[GravityWellProperties](_lumin_.ui.gravitywellproperties.md)*

## Methods

###  getInternalSnap

▸ **getInternalSnap**(): *boolean*

If the cursor should snap if already inside the shape.

**Returns:** *boolean*

___

###  getShape

▸ **getShape**(): *[BoundaryShape](_lumin_.ui.boundaryshape.md)*

The boundary shape for the gravity well.

**Returns:** *[BoundaryShape](_lumin_.ui.boundaryshape.md)*

___

###  getSnap

▸ **getSnap**(): *[GravityWellSnap](../enums/_lumin_.ui.gravitywellsnap.md)*

Where to snap the cursor to for this element.

**Returns:** *[GravityWellSnap](../enums/_lumin_.ui.gravitywellsnap.md)*

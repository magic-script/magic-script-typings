---
id: "_lumin_.ui.boundaryshape"
title: "BoundaryShape"
sidebar_label: "BoundaryShape"
---

Describes a rounded rectangular shaped boundary, from sharp corner to circular,
used for user interface interactions.

This class uses cursor raycasts, instead of a single point, to calculate
cursor promity.

## Hierarchy

* **BoundaryShape**

## Constructors

###  constructor

\+ **new BoundaryShape**(`size`: [number, number], `roundness`: number, `offset?`: [number, number, number]): *[BoundaryShape](_lumin_.ui.boundaryshape.md)*

Constructor

**Parameters:**

Name | Type |
------ | ------ |
`size` | [number, number] |
`roundness` | number |
`offset?` | [number, number, number] |

**Returns:** *[BoundaryShape](_lumin_.ui.boundaryshape.md)*

## Methods

###  getOffset

▸ **getOffset**(): *[number, number, number]*

Gets the offset of the shape.

**Returns:** *[number, number, number]*

the shape offset.

___

###  getRoundness

▸ **getRoundness**(): *number*

Gets the roundness of the shape.

**Returns:** *number*

the corner roundness.

___

###  getSize

▸ **getSize**(): *[number, number]*

Gets the size of the shape.

**Returns:** *[number, number]*

the shape size in X and Y.

___

###  setOffset

▸ **setOffset**(`offset`: [number, number, number]): *void*

Sets the offset of the shape.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`offset` | [number, number, number] | the offset of the shape.  |

**Returns:** *void*

___

###  setRoundness

▸ **setRoundness**(`roundness`: number): *void*

Sets the roundness of the shape.

0 for sharp corners, 1 for fully rounded corners.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`roundness` | number | the corner roundness  |

**Returns:** *void*

___

###  setSize

▸ **setSize**(`size`: [number, number]): *void*

Sets the size of the shape.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`size` | [number, number] | the shape size in X and Y.  |

**Returns:** *void*

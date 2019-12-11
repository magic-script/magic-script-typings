---
id: "_lumin_.math.aabb"
title: "AABB"
sidebar_label: "AABB"
---

Axis-aligned bounding box.

## Hierarchy

* **AABB**

## Constructors

###  constructor

\+ **new AABB**(): *[AABB](_lumin_.math.aabb.md)*

Initially, the AABB is empty.

**Returns:** *[AABB](_lumin_.math.aabb.md)*

\+ **new AABB**(`min`: [number, number, number], `max`: [number, number, number]): *[AABB](_lumin_.math.aabb.md)*

Initially, the AABB is empty.

**Parameters:**

Name | Type |
------ | ------ |
`min` | [number, number, number] |
`max` | [number, number, number] |

**Returns:** *[AABB](_lumin_.math.aabb.md)*

## Properties

### `Static` EMPTY

▪ **EMPTY**: *[AABB](_lumin_.math.aabb.md)*

Default constructed AABB with no enclosed volume.
`value = AABB()`

## Methods

###  contains

▸ **contains**(`point`: [number, number, number]): *boolean*

Is the point contained within the bounds.

**Parameters:**

Name | Type |
------ | ------ |
`point` | [number, number, number] |

**Returns:** *boolean*

___

###  extend

▸ **extend**(`other`: [AABB](_lumin_.math.aabb.md)): *void*

Extend this AABB to also enclose the given AABB.

**Parameters:**

Name | Type |
------ | ------ |
`other` | [AABB](_lumin_.math.aabb.md) |

**Returns:** *void*

▸ **extend**(`point`: [number, number, number]): *void*

Extend this AABB to enclose the given point.

**Parameters:**

Name | Type |
------ | ------ |
`point` | [number, number, number] |

**Returns:** *void*

___

###  getCenter

▸ **getCenter**(): *[number, number, number]*

Get the center of the bounding box.

**Returns:** *[number, number, number]*

___

###  getDepth

▸ **getDepth**(): *number*

Get the depth (z dimension) of the bounding box.

**Returns:** *number*

___

###  getExtents

▸ **getExtents**(): *[number, number, number]*

Get the extents (w/2,h/2,d/2) of the bounding box.

**Returns:** *[number, number, number]*

___

###  getHeight

▸ **getHeight**(): *number*

Get the height (y dimension) of the bounding box.

**Returns:** *number*

___

###  getMax

▸ **getMax**(): *[number, number, number]*

Get the maximum coordinate of the bounding box.

**Returns:** *[number, number, number]*

___

###  getMin

▸ **getMin**(): *[number, number, number]*

Get the minimum coordinate of the bounding box.

**Returns:** *[number, number, number]*

___

###  getWidth

▸ **getWidth**(): *number*

Get the width (x dimension) of the bounding box.

**Returns:** *number*

___

###  intersect

▸ **intersect**(`rayOri`: [number, number, number], `rayDir`: [number, number, number]): *number*

Intersect AABB with a ray. The AABB is assumed to be a solid block; if the ray origin is inside
the AABB it will be considered a hit with a distance of 0.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`rayOri` | [number, number, number] | Start point of the ray. |
`rayDir` | [number, number, number] | Direction of the ray. The ray is assumed to be infinite in length. |

**Returns:** *number*

Distance to the intersection. To get the intersection point, use rayOri + rayDir * dist.

___

###  isEmpty

▸ **isEmpty**(): *boolean*

Get whether the AABB is EMPTY.

An EMPTY AABB is un-initialized and contains
no valid data, but is ready for extending.

**Returns:** *boolean*

___

###  isValid

▸ **isValid**(): *boolean*

Get whether the AABB is valid.

An invalid AABB is where any component in max is
less than the same component in min.

EMPTY is an invalid AABB.

**Returns:** *boolean*

___

###  isZeroSize

▸ **isZeroSize**(): *boolean*

Get whether the AABB is of zero size.

An AABB with zero size is where min and max
are at the same point.

**Returns:** *boolean*

___

###  isZeroVolume

▸ **isZeroVolume**(): *boolean*

Get whether the AABB is of zero volume.

An AABB with zero volume is where any component
in min equals the same component in max.

**Returns:** *boolean*

___

###  setMax

▸ **setMax**(`max`: [number, number, number]): *void*

Set the maximum coordinate of the bounding box

**Parameters:**

Name | Type |
------ | ------ |
`max` | [number, number, number] |

**Returns:** *void*

___

###  setMin

▸ **setMin**(`min`: [number, number, number]): *void*

Set the minimum coordinate of the bounding box

**Parameters:**

Name | Type |
------ | ------ |
`min` | [number, number, number] |

**Returns:** *void*

___

###  toString

▸ **toString**(): *string*

Return a readable string representation of the given AABB object.

**Returns:** *string*

___

###  transform

▸ **transform**(`mat`: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]): *void*

Transform the AABB.  The resulting AABB will be the
minimal AABB enclosing the original AABB with the provided
transform applied.

**Parameters:**

Name | Type |
------ | ------ |
`mat` | [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] |

**Returns:** *void*

___

###  translate

▸ **translate**(`offset`: [number, number, number]): *void*

Translate this AABB by the given offset.

**Parameters:**

Name | Type |
------ | ------ |
`offset` | [number, number, number] |

**Returns:** *void*

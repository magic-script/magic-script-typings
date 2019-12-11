---
id: "_lumin_.raycastresult"
title: "RaycastResult"
sidebar_label: "RaycastResult"
---

Base raycast result, also used for prism hits.

## Hierarchy

* **RaycastResult**

  ↳ [RaycastNodeResult](_lumin_.raycastnoderesult.md)

## Constructors

###  constructor

\+ **new RaycastResult**(): *[RaycastResult](_lumin_.raycastresult.md)*

**Returns:** *[RaycastResult](_lumin_.raycastresult.md)*

## Methods

###  getDistance

▸ **getDistance**(): *number*

Returns the distance (in meters) from the raycast source to the intersected object.
(if 0, source is inside or just touching the object)

**`priv`** none

**Returns:** *number*

___

###  getNormal

▸ **getNormal**(): *[number, number, number]*

Normal vector at the intersection point. Note not all raycasts support generating normals, so
this value should be checked for a 0-length vector before using.

**`priv`** none

**Returns:** *[number, number, number]*

___

###  getPointHit

▸ **getPointHit**(): *[number, number, number]*

Returns the point in prism coordinates where the ray intersection occurred

**`priv`** none

**Returns:** *[number, number, number]*

___

###  getPrismId

▸ **getPrismId**(): *bigint*

Returns the prism that was intersected by a raycast.

**`priv`** none

**Returns:** *bigint*

___

###  getType

▸ **getType**(): *[RaycastResultType](../enums/_lumin_.raycastresulttype.md)*

Returns the Raycast result type.

**`priv`** none

**Returns:** *[RaycastResultType](../enums/_lumin_.raycastresulttype.md)*

the result type.

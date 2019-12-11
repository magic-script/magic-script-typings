---
id: "_lumin_.raycastnoderesult"
title: "RaycastNodeResult"
sidebar_label: "RaycastNodeResult"
---

Raycast result for nodes.

## Hierarchy

* [RaycastResult](_lumin_.raycastresult.md)

  ↳ **RaycastNodeResult**

  ↳ [RaycastQuadNodeResult](_lumin_.raycastquadnoderesult.md)

  ↳ [RaycastModelNodeSphereResult](_lumin_.raycastmodelnodesphereresult.md)

  ↳ [RaycastModelNodeResult](_lumin_.raycastmodelnoderesult.md)

## Constructors

###  constructor

\+ **new RaycastNodeResult**(): *[RaycastNodeResult](_lumin_.raycastnoderesult.md)*

*Overrides [RaycastResult](_lumin_.raycastresult.md).[constructor](_lumin_.raycastresult.md#constructor)*

**Returns:** *[RaycastNodeResult](_lumin_.raycastnoderesult.md)*

## Methods

###  getDistance

▸ **getDistance**(): *number*

*Inherited from [RaycastResult](_lumin_.raycastresult.md).[getDistance](_lumin_.raycastresult.md#getdistance)*

Returns the distance (in meters) from the raycast source to the intersected object.
(if 0, source is inside or just touching the object)

**`priv`** none

**Returns:** *number*

___

###  getNodeId

▸ **getNodeId**(): *bigint*

Returns the ID of the Node that was intersected by a raycast

**`priv`** none

**Returns:** *bigint*

___

###  getNormal

▸ **getNormal**(): *[number, number, number]*

*Inherited from [RaycastResult](_lumin_.raycastresult.md).[getNormal](_lumin_.raycastresult.md#getnormal)*

Normal vector at the intersection point. Note not all raycasts support generating normals, so
this value should be checked for a 0-length vector before using.

**`priv`** none

**Returns:** *[number, number, number]*

___

###  getPointHit

▸ **getPointHit**(): *[number, number, number]*

*Inherited from [RaycastResult](_lumin_.raycastresult.md).[getPointHit](_lumin_.raycastresult.md#getpointhit)*

Returns the point in prism coordinates where the ray intersection occurred

**`priv`** none

**Returns:** *[number, number, number]*

___

###  getPrismId

▸ **getPrismId**(): *bigint*

*Inherited from [RaycastResult](_lumin_.raycastresult.md).[getPrismId](_lumin_.raycastresult.md#getprismid)*

Returns the prism that was intersected by a raycast.

**`priv`** none

**Returns:** *bigint*

___

###  getTransitionNodeId

▸ **getTransitionNodeId**(): *bigint*

Returns the ID of the Node transitioning between enter/exit states.

This is the previous raycast hit node on cursor enter and the upcoming
raycast hit node on cursor exit

**`priv`** none

**Returns:** *bigint*

___

###  getTransitionNodePrismId

▸ **getTransitionNodePrismId**(): *bigint*

Returns the Prism ID of the Node transitioning between enter/exit states.

This is the previous raycast hit node's Prism on cursor enter and the upcoming
raycast hit node's Prism on cursor exit

**`priv`** none

**Returns:** *bigint*

___

###  getType

▸ **getType**(): *[RaycastResultType](../enums/_lumin_.raycastresulttype.md)*

*Inherited from [RaycastResult](_lumin_.raycastresult.md).[getType](_lumin_.raycastresult.md#gettype)*

Returns the Raycast result type.

**`priv`** none

**Returns:** *[RaycastResultType](../enums/_lumin_.raycastresulttype.md)*

the result type.

___

### `Static` Create

▸ **Create**(): *[RaycastNodeResult](_lumin_.raycastnoderesult.md)*

Factory

**Returns:** *[RaycastNodeResult](_lumin_.raycastnoderesult.md)*

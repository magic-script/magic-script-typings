---
id: "_lumin_.worldraycastresult"
title: "WorldRayCastResult"
sidebar_label: "WorldRayCastResult"
---

Structure to hold the World Raycast Result data.

## Hierarchy

* **WorldRayCastResult**

## Constructors

###  constructor

\+ **new WorldRayCastResult**(): *[WorldRayCastResult](_lumin_.worldraycastresult.md)*

**Returns:** *[WorldRayCastResult](_lumin_.worldraycastresult.md)*

## Methods

###  getConfidence

▸ **getConfidence**(): *number*

Returns the ray confidence level.

**`priv`** none

**Returns:** *number*

___

###  getFromDir

▸ **getFromDir**(): *[number, number, number]*

Returns the ray direction in world coordinates.

**`priv`** none

**Returns:** *[number, number, number]*

___

###  getFromHeight

▸ **getFromHeight**(): *number*

Returns the number of vertical rays.

**`priv`** none

**Returns:** *number*

___

###  getFromHorizFovDeg

▸ **getFromHorizFovDeg**(): *number*

Returns the horizontal field-of-view, in degrees.

**`priv`** none

**Returns:** *number*

___

###  getFromPos

▸ **getFromPos**(): *[number, number, number]*

Returns the ray start position in world coordinates.

**`priv`** none

**Returns:** *[number, number, number]*

___

###  getFromWidth

▸ **getFromWidth**(): *number*

Returns the number of horizontal rays.

**`priv`** none

**Returns:** *number*

___

###  getHitNormal

▸ **getHitNormal**(): *[number, number, number]*

Returns the ray hit normal in world coordinates.

**`priv`** none

**Returns:** *[number, number, number]*

___

###  getHitPos

▸ **getHitPos**(): *[number, number, number]*

Returns the ray hit position in world coordinates.

**`priv`** none

**Returns:** *[number, number, number]*

___

###  getUserValue

▸ **getUserValue**(): *bigint*

Returns the user value set in the ray request.

**`priv`** none

**Returns:** *bigint*

___

###  getValid

▸ **getValid**(): *boolean*

Returns if the data in this struct is valid.

**`priv`** none

**Returns:** *boolean*

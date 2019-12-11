---
id: "_lumin_.worldmeshblockeventdata"
title: "WorldMeshBlockEventData"
sidebar_label: "WorldMeshBlockEventData"
---

WorldMeshBlockEventData

## Hierarchy

* [ServerEvent](_lumin_.serverevent.md)

  ↳ **WorldMeshBlockEventData**

## Constructors

###  constructor

\+ **new WorldMeshBlockEventData**(): *[WorldMeshBlockEventData](_lumin_.worldmeshblockeventdata.md)*

*Overrides [ServerEvent](_lumin_.serverevent.md).[constructor](_lumin_.serverevent.md#constructor)*

**Returns:** *[WorldMeshBlockEventData](_lumin_.worldmeshblockeventdata.md)*

## Methods

###  getPrismId

▸ **getPrismId**(): *bigint*

*Inherited from [ServerEvent](_lumin_.serverevent.md).[getPrismId](_lumin_.serverevent.md#getprismid)*

Returns the Prism ID of the target Prism.

**`priv`** none

**Returns:** *bigint*

the Prism ID of the target Prism.

___

###  getUpdateType

▸ **getUpdateType**(): *[MeshBlockUpdate](../enums/_lumin_.densemesh.meshblockupdate.md)*

Returns what caused the update. If the value is MeshBlockUpdate::kDeleted, use getBlockId to
get the id of the block removed.

**Returns:** *[MeshBlockUpdate](../enums/_lumin_.densemesh.meshblockupdate.md)*

___

###  isInputEventType

▸ **isInputEventType**(): *boolean*

*Inherited from [ServerEvent](_lumin_.serverevent.md).[isInputEventType](_lumin_.serverevent.md#isinputeventtype)*

Returns true if this is an input event (a subclass of InputEventData).

**`priv`** none

**Returns:** *boolean*

true if this is an input event

___

###  toString

▸ **toString**(): *string*

*Inherited from [ServerEvent](_lumin_.serverevent.md).[toString](_lumin_.serverevent.md#tostring)*

Returns a string representation of this event for debug purposes.

**`priv`** none

**Returns:** *string*

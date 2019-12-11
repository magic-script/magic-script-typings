---
id: "_lumin_.worldraycasteventdata"
title: "WorldRayCastEventData"
sidebar_label: "WorldRayCastEventData"
---

WorldRayCastEventData - World Raycast events

## Hierarchy

* [ServerEvent](_lumin_.serverevent.md)

  ↳ **WorldRayCastEventData**

## Constructors

###  constructor

\+ **new WorldRayCastEventData**(): *[WorldRayCastEventData](_lumin_.worldraycasteventdata.md)*

*Overrides [ServerEvent](_lumin_.serverevent.md).[constructor](_lumin_.serverevent.md#constructor)*

**Returns:** *[WorldRayCastEventData](_lumin_.worldraycasteventdata.md)*

## Methods

###  getPrismId

▸ **getPrismId**(): *bigint*

*Inherited from [ServerEvent](_lumin_.serverevent.md).[getPrismId](_lumin_.serverevent.md#getprismid)*

Returns the Prism ID of the target Prism.

**`priv`** none

**Returns:** *bigint*

the Prism ID of the target Prism.

___

###  getResult

▸ **getResult**(): *[WorldRayCastResult](_lumin_.worldraycastresult.md)*

Get the WorldRaycastResult

**`priv`** none

**Returns:** *[WorldRayCastResult](_lumin_.worldraycastresult.md)*

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

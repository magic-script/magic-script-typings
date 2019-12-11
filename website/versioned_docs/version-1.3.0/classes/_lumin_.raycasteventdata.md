---
id: "_lumin_.raycasteventdata"
title: "RayCastEventData"
sidebar_label: "RayCastEventData"
---

RayCastEventData - Raycast events

## Hierarchy

* [ServerEvent](_lumin_.serverevent.md)

  ↳ **RayCastEventData**

## Constructors

###  constructor

\+ **new RayCastEventData**(): *[RayCastEventData](_lumin_.raycasteventdata.md)*

*Overrides [ServerEvent](_lumin_.serverevent.md).[constructor](_lumin_.serverevent.md#constructor)*

**Returns:** *[RayCastEventData](_lumin_.raycasteventdata.md)*

## Methods

###  getHitData

▸ **getHitData**(): *[RaycastResult](_lumin_.raycastresult.md)*

Get the pointer to the RaycastResult

**`priv`** none

**Returns:** *[RaycastResult](_lumin_.raycastresult.md)*

___

###  getPrismId

▸ **getPrismId**(): *bigint*

*Inherited from [ServerEvent](_lumin_.serverevent.md).[getPrismId](_lumin_.serverevent.md#getprismid)*

Returns the Prism ID of the target Prism.

**`priv`** none

**Returns:** *bigint*

the Prism ID of the target Prism.

___

###  getRayCastEvent

▸ **getRayCastEvent**(): *[RayCastEventType](../enums/_lumin_.raycasteventtype.md)*

Get the Raycast event type

**`priv`** none

**Returns:** *[RayCastEventType](../enums/_lumin_.raycasteventtype.md)*

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

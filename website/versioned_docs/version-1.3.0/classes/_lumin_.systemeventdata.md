---
id: "_lumin_.systemeventdata"
title: "SystemEventData"
sidebar_label: "SystemEventData"
---

SystemEventData - System events

## Hierarchy

* [ServerEvent](_lumin_.serverevent.md)

  ↳ **SystemEventData**

## Constructors

###  constructor

\+ **new SystemEventData**(): *[SystemEventData](_lumin_.systemeventdata.md)*

*Overrides [ServerEvent](_lumin_.serverevent.md).[constructor](_lumin_.serverevent.md#constructor)*

**Returns:** *[SystemEventData](_lumin_.systemeventdata.md)*

## Methods

###  getPrismId

▸ **getPrismId**(): *bigint*

*Inherited from [ServerEvent](_lumin_.serverevent.md).[getPrismId](_lumin_.serverevent.md#getprismid)*

Returns the Prism ID of the target Prism.

**`priv`** none

**Returns:** *bigint*

the Prism ID of the target Prism.

___

###  getSystemEvent

▸ **getSystemEvent**(): *[SystemEventType](../enums/_lumin_.systemeventtype.md)*

**Returns:** *[SystemEventType](../enums/_lumin_.systemeventtype.md)*

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
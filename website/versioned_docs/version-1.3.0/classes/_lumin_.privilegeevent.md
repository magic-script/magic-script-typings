---
id: "_lumin_.privilegeevent"
title: "PrivilegeEvent"
sidebar_label: "PrivilegeEvent"
---

Event indicating a privilege request was granted or denied.

## Hierarchy

* [ServerEvent](_lumin_.serverevent.md)

  ↳ **PrivilegeEvent**

## Constructors

###  constructor

\+ **new PrivilegeEvent**(): *[PrivilegeEvent](_lumin_.privilegeevent.md)*

*Overrides [ServerEvent](_lumin_.serverevent.md).[constructor](_lumin_.serverevent.md#constructor)*

**Returns:** *[PrivilegeEvent](_lumin_.privilegeevent.md)*

## Methods

###  getPrismId

▸ **getPrismId**(): *bigint*

*Inherited from [ServerEvent](_lumin_.serverevent.md).[getPrismId](_lumin_.serverevent.md#getprismid)*

Returns the Prism ID of the target Prism.

**`priv`** none

**Returns:** *bigint*

the Prism ID of the target Prism.

___

###  getPrivilegeId

▸ **getPrivilegeId**(): *[PrivilegeId](../enums/_lumin_.privilegeid.md)*

Get the privilege ID that was requested.

**Returns:** *[PrivilegeId](../enums/_lumin_.privilegeid.md)*

Requested privilege ID

___

###  getPrivilegeResult

▸ **getPrivilegeResult**(): *[PrivilegeResult](../enums/_lumin_.privilegeresult.md)*

Get the privilege result (granted or denied).

**Returns:** *[PrivilegeResult](../enums/_lumin_.privilegeresult.md)*

Privilege result

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

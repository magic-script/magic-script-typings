---
id: "_lumin_.resourceevent"
title: "ResourceEvent"
sidebar_label: "ResourceEvent"
---

Event indicating the result of loading a resource.

## Hierarchy

* [ServerEvent](_lumin_.serverevent.md)

  ↳ **ResourceEvent**

## Constructors

###  constructor

\+ **new ResourceEvent**(): *[ResourceEvent](_lumin_.resourceevent.md)*

*Overrides [ServerEvent](_lumin_.serverevent.md).[constructor](_lumin_.serverevent.md#constructor)*

**Returns:** *[ResourceEvent](_lumin_.resourceevent.md)*

## Methods

###  getPrismId

▸ **getPrismId**(): *bigint*

*Inherited from [ServerEvent](_lumin_.serverevent.md).[getPrismId](_lumin_.serverevent.md#getprismid)*

Returns the Prism ID of the target Prism.

**`priv`** none

**Returns:** *bigint*

the Prism ID of the target Prism.

___

###  getResourceId

▸ **getResourceId**(): *bigint*

Get the ID for the resource.

**`priv`** none

**Returns:** *bigint*

resource ID

___

###  getResult

▸ **getResult**(): *[LoadStatus](../enums/_lumin_.resources.loadstatus.md)*

Get the result of loading the resource.

**`priv`** none

**Returns:** *[LoadStatus](../enums/_lumin_.resources.loadstatus.md)*

Resource LoadStatus

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

---
id: "_lumin_.keyinputeventdata"
title: "KeyInputEventData"
sidebar_label: "KeyInputEventData"
---

KeyInputEventData - Key input event

## Hierarchy

  ↳ [InputEventData](_lumin_.inputeventdata.md)

  ↳ **KeyInputEventData**

## Constructors

###  constructor

\+ **new KeyInputEventData**(): *[KeyInputEventData](_lumin_.keyinputeventdata.md)*

*Overrides [InputEventData](_lumin_.inputeventdata.md).[constructor](_lumin_.inputeventdata.md#constructor)*

**Returns:** *[KeyInputEventData](_lumin_.keyinputeventdata.md)*

## Methods

###  getDeviceId

▸ **getDeviceId**(): *number*

*Inherited from [InputEventData](_lumin_.inputeventdata.md).[getDeviceId](_lumin_.inputeventdata.md#getdeviceid)*

**`priv`** none

**Returns:** *number*

The device Id

___

###  getEventSource

▸ **getEventSource**(): *[EventSource](../enums/_lumin_.input.eventsource.md)*

*Inherited from [InputEventData](_lumin_.inputeventdata.md).[getEventSource](_lumin_.inputeventdata.md#geteventsource)*

**`priv`** none

**Returns:** *[EventSource](../enums/_lumin_.input.eventsource.md)*

The event source

___

###  getEventType

▸ **getEventType**(): *[EventType](../enums/_lumin_.input.eventtype.md)*

*Inherited from [InputEventData](_lumin_.inputeventdata.md).[getEventType](_lumin_.inputeventdata.md#geteventtype)*

**`priv`** none

**Returns:** *[EventType](../enums/_lumin_.input.eventtype.md)*

The event type

___

###  getPrismId

▸ **getPrismId**(): *bigint*

*Inherited from [ServerEvent](_lumin_.serverevent.md).[getPrismId](_lumin_.serverevent.md#getprismid)*

Returns the Prism ID of the target Prism.

**`priv`** none

**Returns:** *bigint*

the Prism ID of the target Prism.

___

###  isInputEventType

▸ **isInputEventType**(): *boolean*

*Inherited from [ServerEvent](_lumin_.serverevent.md).[isInputEventType](_lumin_.serverevent.md#isinputeventtype)*

Returns true if this is an input event (a subclass of InputEventData).

**`priv`** none

**Returns:** *boolean*

true if this is an input event

___

###  keyCode

▸ **keyCode**(): *[KeyCodes](../enums/_lumin_.input.keycodes.md)*

**`priv`** none

**Returns:** *[KeyCodes](../enums/_lumin_.input.keycodes.md)*

The key code
 Key code identifies the key value for keyboard, buttons etc
 it is one of the type: AKEYCODE_XXX.
 Refer to keycodes.h in android tree.

___

###  keyVal

▸ **keyVal**(): *number*

**`priv`** none

**Returns:** *number*

The key value

___

###  metaKeys

▸ **metaKeys**(): *number*

**`priv`** none

**Returns:** *number*

The meta key flag (for Control, Shift, Alt, etc.)

___

###  toString

▸ **toString**(): *string*

*Inherited from [ServerEvent](_lumin_.serverevent.md).[toString](_lumin_.serverevent.md#tostring)*

Returns a string representation of this event for debug purposes.

**`priv`** none

**Returns:** *string*

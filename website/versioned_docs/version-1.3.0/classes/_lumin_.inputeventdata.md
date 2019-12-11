---
id: "_lumin_.inputeventdata"
title: "InputEventData"
sidebar_label: "InputEventData"
---

InputEventData - abstract base input event

## Hierarchy

* [ServerEvent](_lumin_.serverevent.md)

  ↳ **InputEventData**

  ↳ [ControlPose3DofInputEventData](_lumin_.controlpose3dofinputeventdata.md)

  ↳ [ControlPose6DofInputEventData](_lumin_.controlpose6dofinputeventdata.md)

  ↳ [ControlTouchPadInputEventData](_lumin_.controltouchpadinputeventdata.md)

  ↳ [GestureInputEventData](_lumin_.gestureinputeventdata.md)

  ↳ [KeyInputEventData](_lumin_.keyinputeventdata.md)

## Constructors

###  constructor

\+ **new InputEventData**(): *[InputEventData](_lumin_.inputeventdata.md)*

*Overrides [ServerEvent](_lumin_.serverevent.md).[constructor](_lumin_.serverevent.md#constructor)*

**Returns:** *[InputEventData](_lumin_.inputeventdata.md)*

## Methods

###  getDeviceId

▸ **getDeviceId**(): *number*

**`priv`** none

**Returns:** *number*

The device Id

___

###  getEventSource

▸ **getEventSource**(): *[EventSource](../enums/_lumin_.input.eventsource.md)*

**`priv`** none

**Returns:** *[EventSource](../enums/_lumin_.input.eventsource.md)*

The event source

___

###  getEventType

▸ **getEventType**(): *[EventType](../enums/_lumin_.input.eventtype.md)*

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

###  toString

▸ **toString**(): *string*

*Inherited from [ServerEvent](_lumin_.serverevent.md).[toString](_lumin_.serverevent.md#tostring)*

Returns a string representation of this event for debug purposes.

**`priv`** none

**Returns:** *string*

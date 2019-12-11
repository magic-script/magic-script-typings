---
id: "_lumin_.controlpose3dofinputeventdata"
title: "ControlPose3DofInputEventData"
sidebar_label: "ControlPose3DofInputEventData"
---

Input event for tracking Control or MLMA orientation (Three Degrees of Freedom)

## Hierarchy

  ↳ [InputEventData](_lumin_.inputeventdata.md)

  ↳ **ControlPose3DofInputEventData**

## Constructors

###  constructor

\+ **new ControlPose3DofInputEventData**(): *[ControlPose3DofInputEventData](_lumin_.controlpose3dofinputeventdata.md)*

*Overrides [InputEventData](_lumin_.inputeventdata.md).[constructor](_lumin_.inputeventdata.md#constructor)*

**Returns:** *[ControlPose3DofInputEventData](_lumin_.controlpose3dofinputeventdata.md)*

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

###  getQuaternion

▸ **getQuaternion**(): *[number, number, number, number]*

Returns the full quaternion representing Control orientation in world coordinates.

**`priv`** none

**Returns:** *[number, number, number, number]*

the full quaternion representing Control orientation.

___

###  getQuaternionW

▸ **getQuaternionW**(): *number*

Returns the W component of the quaternion in world coordinates.

**`priv`** none

**Returns:** *number*

the W component of the quaternion

___

###  getQuaternionX

▸ **getQuaternionX**(): *number*

Returns the X component of the quaternion in world coordinates.

**`priv`** none

**Returns:** *number*

the X component of the quaternion

___

###  getQuaternionY

▸ **getQuaternionY**(): *number*

Returns the Y component of the quaternion in world coordinates.

**`priv`** none

**Returns:** *number*

the Y component of the quaternion

___

###  getQuaternionZ

▸ **getQuaternionZ**(): *number*

Returns the Z component of the quaternion in world coordinates.

**`priv`** none

**Returns:** *number*

the Z component of the quaternion

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

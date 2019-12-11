---
id: "_lumin_.controltouchpadinputeventdata"
title: "ControlTouchPadInputEventData"
sidebar_label: "ControlTouchPadInputEventData"
---

The input event received for Control or Magic Leap Mobile App touchpad input.

## Hierarchy

  ↳ [InputEventData](_lumin_.inputeventdata.md)

  ↳ **ControlTouchPadInputEventData**

## Constructors

###  constructor

\+ **new ControlTouchPadInputEventData**(): *[ControlTouchPadInputEventData](_lumin_.controltouchpadinputeventdata.md)*

*Overrides [InputEventData](_lumin_.inputeventdata.md).[constructor](_lumin_.inputeventdata.md#constructor)*

**Returns:** *[ControlTouchPadInputEventData](_lumin_.controltouchpadinputeventdata.md)*

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

###  getTouch

▸ **getTouch**(`tidx?`: number): *[number, number, number]*

Returns touch xy coordinates and z force.

The coordinate ranges are:
<ul>
  <li>x: -1.0 to 1.0 (left to right)</li>
  <li>y: -1.0 to 1.0 (bottom to top)</li>
  <li>z:  0.0 to 1.0 (no touch to full force)</li>
</ul>

The center of the touchpad corresponds to xy coordinate (0, 0).

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tidx?` | number | `default = 0`<br/> touch index |

**Returns:** *[number, number, number]*

vector containing xy coordinates and force of the touch
        at the given touch index

___

###  getTouchCount

▸ **getTouchCount**(): *number*

Returns the current touch count.

**`priv`** none

**Returns:** *number*

the current touch count

___

###  getTouchState

▸ **getTouchState**(): *boolean*

Returns current state of the touch

**`priv`** none

**Returns:** *boolean*

true if the touch is active

___

###  isInputEventType

▸ **isInputEventType**(): *boolean*

*Inherited from [ServerEvent](_lumin_.serverevent.md).[isInputEventType](_lumin_.serverevent.md#isinputeventtype)*

Returns true if this is an input event (a subclass of InputEventData).

**`priv`** none

**Returns:** *boolean*

true if this is an input event

___

###  isMultiTouch

▸ **isMultiTouch**(): *boolean*

Returns whether the touch is a single or multi touch.

**`priv`** none

**Returns:** *boolean*

true if the touch is a multi touch

___

###  toString

▸ **toString**(): *string*

*Inherited from [ServerEvent](_lumin_.serverevent.md).[toString](_lumin_.serverevent.md#tostring)*

Returns a string representation of this event for debug purposes.

**`priv`** none

**Returns:** *string*

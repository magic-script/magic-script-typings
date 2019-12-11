---
id: "_lumin_.gestureinputeventdata"
title: "GestureInputEventData"
sidebar_label: "GestureInputEventData"
---

GestureInputEventData - Gesture input event

## Hierarchy

  ↳ [InputEventData](_lumin_.inputeventdata.md)

  ↳ **GestureInputEventData**

## Constructors

###  constructor

\+ **new GestureInputEventData**(): *[GestureInputEventData](_lumin_.gestureinputeventdata.md)*

*Overrides [InputEventData](_lumin_.inputeventdata.md).[constructor](_lumin_.inputeventdata.md#constructor)*

**Returns:** *[GestureInputEventData](_lumin_.gestureinputeventdata.md)*

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

###  getGesture

▸ **getGesture**(): *[GestureType](../enums/_lumin_.input.gesturetype.md)*

**`priv`** none

**Returns:** *[GestureType](../enums/_lumin_.input.gesturetype.md)*

The gesture type

___

###  getGestureAngle

▸ **getGestureAngle**(): *number*

**`priv`** none

**Returns:** *number*

Angle from center of touchpad to finger

___

###  getGestureDirection

▸ **getGestureDirection**(): *[GestureDirection](../enums/_lumin_.input.gesturedirection.md)*

**`priv`** none

**Returns:** *[GestureDirection](../enums/_lumin_.input.gesturedirection.md)*

The gesture direction

___

###  getGestureDistance

▸ **getGestureDistance**(): *number*

**`priv`** none

**Returns:** *number*

The absolute value of the angular value in case of radial gestures

___

###  getGestureFingerGap

▸ **getGestureFingerGap**(): *number*

**`priv`** none

**Returns:** *number*

Distance between 2 fingers

___

###  getGestureForceValue

▸ **getGestureForceValue**(): *number*

**`see`** getTouch()

**`priv`** none

**Returns:** *number*

The force/pressure value for the gesture (0.0 to 1.0)

___

###  getGestureLocation

▸ **getGestureLocation**(): *[number, number]*

**`see`** getTouch()

**`priv`** none

**Returns:** *[number, number]*

Location of the gesture in normalized touch coordinates (-1.0 to 1.0).

___

###  getGestureRadius

▸ **getGestureRadius**(): *number*

**`priv`** none

**Returns:** *number*

Radius of the gesture in case of Radial gestures

___

###  getGestureSpeed

▸ **getGestureSpeed**(): *number*

**`priv`** none

**Returns:** *number*

The gesture speed

___

###  getHandGestureConfidence

▸ **getHandGestureConfidence**(): *number*

Get the confidence of the hand gesture

**`priv`** none

**Returns:** *number*

___

###  getHandGestureIndex

▸ **getHandGestureIndex**(): *number*

**`priv`** none

**Returns:** *number*

The hand gesture index

___

###  getHandGestureKeyPointCount

▸ **getHandGestureKeyPointCount**(): *number*

**`priv`** none

**Returns:** *number*

the number of hand gesture key points available for this gesture

___

###  getHandGestureKeyPoseConfidence

▸ **getHandGestureKeyPoseConfidence**(`gesture`: [GestureType](../enums/_lumin_.input.gesturetype.md)): *number*

Get the confidence of a given hand pose

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`gesture` | [GestureType](../enums/_lumin_.input.gesturetype.md) | the hand pose for which to retreive the confidence |

**Returns:** *number*

a confidence value between 0 and 1 (higher means greater confidence)

___

###  getHandGestureKeypoint

▸ **getHandGestureKeypoint**(`keypointName`: [HandGestureKeypointName](../enums/_lumin_.input.handgesturekeypointname.md)): *[number, number, number]*

Get the position of the hand gesture key point with the given index

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`keypointName` | [HandGestureKeypointName](../enums/_lumin_.input.handgesturekeypointname.md) | the keypoint for which to get the position |

**Returns:** *[number, number, number]*

vector containing positions of keypoint

___

###  getHandGestureLocation

▸ **getHandGestureLocation**(): *[number, number, number]*

**`priv`** none

**Returns:** *[number, number, number]*

The hand gesture location in world coordinates.

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

Get touch xy coordinates and z force

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

**`priv`** none

**Returns:** *number*

the current touch count

___

###  getTouchState

▸ **getTouchState**(): *boolean*

Get current state of the touch

**`priv`** none

**Returns:** *boolean*

true if the touch is active

___

###  isHandGestureKeypointRecognized

▸ **isHandGestureKeypointRecognized**(`keypointName`: [HandGestureKeypointName](../enums/_lumin_.input.handgesturekeypointname.md)): *boolean*

Checks whether a given keypoint was recognized this event

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`keypointName` | [HandGestureKeypointName](../enums/_lumin_.input.handgesturekeypointname.md) | the keypoint to test |

**Returns:** *boolean*

true if the point was recognized, false otherwise

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

Get whether the touch is a single or multi touch

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

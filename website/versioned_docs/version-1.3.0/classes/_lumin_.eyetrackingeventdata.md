---
id: "_lumin_.eyetrackingeventdata"
title: "EyeTrackingEventData"
sidebar_label: "EyeTrackingEventData"
---

EyeTrackingEventData - Eye tracking update events

## Hierarchy

* [ServerEvent](_lumin_.serverevent.md)

  ↳ **EyeTrackingEventData**

## Constructors

###  constructor

\+ **new EyeTrackingEventData**(): *[EyeTrackingEventData](_lumin_.eyetrackingeventdata.md)*

*Overrides [ServerEvent](_lumin_.serverevent.md).[constructor](_lumin_.serverevent.md#constructor)*

**Returns:** *[EyeTrackingEventData](_lumin_.eyetrackingeventdata.md)*

## Methods

###  getEyeTrackingFixationConfidence

▸ **getEyeTrackingFixationConfidence**(): *number*

Get the confidence value of the fixation tracking data

**`priv`** none

**Returns:** *number*

a confidence value between 0.0f (no confidence) and
        1.0f (full confidence) indicating eye tracking
        data confidence for the eye fixation point this frame.

___

###  getEyeTrackingFixationPosition

▸ **getEyeTrackingFixationPosition**(): *[number, number, number]*

Get the position of the fixation point of the user's eyes in world space

**`priv`** none

**Returns:** *[number, number, number]*

the world space position of the fixation point of the user's eyes

___

###  getEyeTrackingLeftEyeBlinkState

▸ **getEyeTrackingLeftEyeBlinkState**(): *boolean*

Get the blink state of the left eye

**`priv`** none

**Returns:** *boolean*

true if the left eye is blinking, false otherwise

___

###  getEyeTrackingLeftEyeConfidence

▸ **getEyeTrackingLeftEyeConfidence**(): *number*

Get the confidence value of the left eye tracking data

**`priv`** none

**Returns:** *number*

a confidence value between 0.0f (no confidence) and
        1.0f (full confidence) indicating eye tracking
        data confidence for the left eye this frame.

___

###  getEyeTrackingLeftEyePosition

▸ **getEyeTrackingLeftEyePosition**(): *[number, number, number]*

Get the position of the user's left eye in world space

**`priv`** none

**Returns:** *[number, number, number]*

the world space position of the user's left eye

___

###  getEyeTrackingLeftEyeRotation

▸ **getEyeTrackingLeftEyeRotation**(): *[number, number, number, number]*

Get the rotation of the user's left eye in world space

**`priv`** none

**Returns:** *[number, number, number, number]*

the world space rotation of the user's left eye

___

###  getEyeTrackingRightEyeBlinkState

▸ **getEyeTrackingRightEyeBlinkState**(): *boolean*

Get the blink state of the right eye

**`priv`** none

**Returns:** *boolean*

true if the right eye is blinking, false otherwise

___

###  getEyeTrackingRightEyeConfidence

▸ **getEyeTrackingRightEyeConfidence**(): *number*

Get the confidence value of the right eye tracking data

**`priv`** none

**Returns:** *number*

a confidence value between 0.0f (no confidence) and
        1.0f (full confidence) indicating eye tracking
        data confidence for the right eye this frame.

___

###  getEyeTrackingRightEyePosition

▸ **getEyeTrackingRightEyePosition**(): *[number, number, number]*

Get the position of the user's right eye in world space

**`priv`** none

**Returns:** *[number, number, number]*

the world space position of the user's right eye

___

###  getEyeTrackingRightEyeRotation

▸ **getEyeTrackingRightEyeRotation**(): *[number, number, number, number]*

Get the position of the user's left eye in world space

**`priv`** none

**Returns:** *[number, number, number, number]*

the world space position of the user's left eye

___

###  getPrismId

▸ **getPrismId**(): *bigint*

*Inherited from [ServerEvent](_lumin_.serverevent.md).[getPrismId](_lumin_.serverevent.md#getprismid)*

Returns the Prism ID of the target Prism.

**`priv`** none

**Returns:** *bigint*

the Prism ID of the target Prism.

___

###  hasFixationViolationOccured

▸ **hasFixationViolationOccured**(): *boolean*

Get whether a fixation violation has occured (fixation depth has been too close
for longer than 10 seconds)

**`priv`** none

**Returns:** *boolean*

true if a violation has occured, false otherwise

___

###  isFixationDepthUnconfortable

▸ **isFixationDepthUnconfortable**(): *boolean*

Get whether the current fixation depth is uncomfortable for the user (< 37cm)

**`priv`** none

**Returns:** *boolean*

true if the fixation depth is uncomfortable, false otherwise

___

###  isInputEventType

▸ **isInputEventType**(): *boolean*

*Inherited from [ServerEvent](_lumin_.serverevent.md).[isInputEventType](_lumin_.serverevent.md#isinputeventtype)*

Returns true if this is an input event (a subclass of InputEventData).

**`priv`** none

**Returns:** *boolean*

true if this is an input event

___

###  remainingTimeAtUncomfortableDepth

▸ **remainingTimeAtUncomfortableDepth**(): *number*

Get the remaining time the fixation point can remain at an uncomfortable depth

**`priv`** none

**Returns:** *number*

the time remaining at the uncomfortable depth (in seconds)

___

###  toString

▸ **toString**(): *string*

*Inherited from [ServerEvent](_lumin_.serverevent.md).[toString](_lumin_.serverevent.md#tostring)*

Returns a string representation of this event for debug purposes.

**`priv`** none

**Returns:** *string*

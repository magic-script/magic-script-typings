---
id: "_lumin_.transformanimationeventdata"
title: "TransformAnimationEventData"
sidebar_label: "TransformAnimationEventData"
---

TransformAnimationEventData - Transform Animation event

## Hierarchy

* [ServerEvent](_lumin_.serverevent.md)

  ↳ **TransformAnimationEventData**

## Constructors

###  constructor

\+ **new TransformAnimationEventData**(): *[TransformAnimationEventData](_lumin_.transformanimationeventdata.md)*

*Overrides [ServerEvent](_lumin_.serverevent.md).[constructor](_lumin_.serverevent.md#constructor)*

**Returns:** *[TransformAnimationEventData](_lumin_.transformanimationeventdata.md)*

## Methods

###  getAnimatedNodeId

▸ **getAnimatedNodeId**(): *bigint*

Returns the id of the Node the animation was playing on.

**`priv`** none

**Returns:** *bigint*

___

###  getPrismId

▸ **getPrismId**(): *bigint*

*Inherited from [ServerEvent](_lumin_.serverevent.md).[getPrismId](_lumin_.serverevent.md#getprismid)*

Returns the Prism ID of the target Prism.

**`priv`** none

**Returns:** *bigint*

the Prism ID of the target Prism.

___

###  getTrack

▸ **getTrack**(): *number*

Returns the animation track number the CallbackMoveData was triggered on.

**`priv`** none

**Returns:** *number*

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

---
id: "_lumin_.animationeventbase"
title: "AnimationEventBase"
sidebar_label: "AnimationEventBase"
---

Base class for anim events

## Hierarchy

* [ServerEvent](_lumin_.serverevent.md)

  ↳ **AnimationEventBase**

  ↳ [AnimationEvent](_lumin_.animationevent.md)

  ↳ [AnimationEventCustom](_lumin_.animationeventcustom.md)

## Constructors

###  constructor

\+ **new AnimationEventBase**(): *[AnimationEventBase](_lumin_.animationeventbase.md)*

*Overrides [ServerEvent](_lumin_.serverevent.md).[constructor](_lumin_.serverevent.md#constructor)*

**Returns:** *[AnimationEventBase](_lumin_.animationeventbase.md)*

## Methods

###  getAnimationName

▸ **getAnimationName**(): *string*

Returns the animation name on which this event triggered.

**Returns:** *string*

___

###  getAnimationResourceId

▸ **getAnimationResourceId**(): *bigint*

Returns the animation resource ID on which this event triggered.

**Returns:** *bigint*

___

###  getNodeId

▸ **getNodeId**(): *bigint*

Returns the node ID of the model node associated with this event.

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

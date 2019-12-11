---
id: "_lumin_.animationevent"
title: "AnimationEvent"
sidebar_label: "AnimationEvent"
---

AnimationEvent

## Hierarchy

  ↳ [AnimationEventBase](_lumin_.animationeventbase.md)

  ↳ **AnimationEvent**

## Constructors

###  constructor

\+ **new AnimationEvent**(): *[AnimationEvent](_lumin_.animationevent.md)*

*Overrides [AnimationEventBase](_lumin_.animationeventbase.md).[constructor](_lumin_.animationeventbase.md#constructor)*

**Returns:** *[AnimationEvent](_lumin_.animationevent.md)*

## Methods

###  getAnimationEventType

▸ **getAnimationEventType**(): *[AnimationEventType](../enums/_lumin_.animationeventtype.md)*

Gets the type of Animation event, the enum AnimationEventType.

**Returns:** *[AnimationEventType](../enums/_lumin_.animationeventtype.md)*

AnimationEventType

___

###  getAnimationName

▸ **getAnimationName**(): *string*

*Inherited from [AnimationEventBase](_lumin_.animationeventbase.md).[getAnimationName](_lumin_.animationeventbase.md#getanimationname)*

Returns the animation name on which this event triggered.

**Returns:** *string*

___

###  getAnimationResourceId

▸ **getAnimationResourceId**(): *bigint*

*Inherited from [AnimationEventBase](_lumin_.animationeventbase.md).[getAnimationResourceId](_lumin_.animationeventbase.md#getanimationresourceid)*

Returns the animation resource ID on which this event triggered.

**Returns:** *bigint*

___

###  getNodeId

▸ **getNodeId**(): *bigint*

*Inherited from [AnimationEventBase](_lumin_.animationeventbase.md).[getNodeId](_lumin_.animationeventbase.md#getnodeid)*

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

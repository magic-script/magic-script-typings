---
id: "_lumin_.spriteanimationeventdata"
title: "SpriteAnimationEventData"
sidebar_label: "SpriteAnimationEventData"
---

SpriteAnimationEventData - SpriteAnimation events

## Hierarchy

* [ServerEvent](_lumin_.serverevent.md)

  ↳ **SpriteAnimationEventData**

## Constructors

###  constructor

\+ **new SpriteAnimationEventData**(): *[SpriteAnimationEventData](_lumin_.spriteanimationeventdata.md)*

*Overrides [ServerEvent](_lumin_.serverevent.md).[constructor](_lumin_.serverevent.md#constructor)*

**Returns:** *[SpriteAnimationEventData](_lumin_.spriteanimationeventdata.md)*

## Methods

###  getCurrentFrameIndex

▸ **getCurrentFrameIndex**(): *number*

Get the index of the frame of the animation at which the event occurred.

**`priv`** none

**Returns:** *number*

___

###  getPrismId

▸ **getPrismId**(): *bigint*

*Inherited from [ServerEvent](_lumin_.serverevent.md).[getPrismId](_lumin_.serverevent.md#getprismid)*

Returns the Prism ID of the target Prism.

**`priv`** none

**Returns:** *bigint*

the Prism ID of the target Prism.

___

###  getSpriteAnimationEventType

▸ **getSpriteAnimationEventType**(): *[SpriteAnimationEventType](../enums/_lumin_.spriteanimationeventtype.md)*

Identify the cause/trigger for the event.

**`priv`** none

**Returns:** *[SpriteAnimationEventType](../enums/_lumin_.spriteanimationeventtype.md)*

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

---
id: "_lumin_.animationblendsetupevent"
title: "AnimationBlendSetupEvent"
sidebar_label: "AnimationBlendSetupEvent"
---

AnimationBlendSetupEvent

## Hierarchy

* [ServerEvent](_lumin_.serverevent.md)

  ↳ **AnimationBlendSetupEvent**

## Constructors

###  constructor

\+ **new AnimationBlendSetupEvent**(): *[AnimationBlendSetupEvent](_lumin_.animationblendsetupevent.md)*

*Overrides [ServerEvent](_lumin_.serverevent.md).[constructor](_lumin_.serverevent.md#constructor)*

**Returns:** *[AnimationBlendSetupEvent](_lumin_.animationblendsetupevent.md)*

## Methods

###  getBlendSetupEventType

▸ **getBlendSetupEventType**(): *[AnimationBlendSetupEventType](../enums/_lumin_.animationblendsetupeventtype.md)*

Gets the type of blendsetup event, the enum AnimationBlendSetupEventType.

**Returns:** *[AnimationBlendSetupEventType](../enums/_lumin_.animationblendsetupeventtype.md)*

AnimationBlendSetupEventType

___

###  getBlendSetupResourceId

▸ **getBlendSetupResourceId**(): *bigint*

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

###  getStateName

▸ **getStateName**(): *string*

Returns state name.

**Returns:** *string*

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

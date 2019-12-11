---
id: "_lumin_.audioevent"
title: "AudioEvent"
sidebar_label: "AudioEvent"
---

AudioEvent

## Hierarchy

* [ServerEvent](_lumin_.serverevent.md)

  ↳ **AudioEvent**

## Constructors

###  constructor

\+ **new AudioEvent**(): *[AudioEvent](_lumin_.audioevent.md)*

*Overrides [ServerEvent](_lumin_.serverevent.md).[constructor](_lumin_.serverevent.md#constructor)*

**Returns:** *[AudioEvent](_lumin_.audioevent.md)*

## Methods

###  getAudioEventType

▸ **getAudioEventType**(): *[AudioEventType](../enums/_lumin_.audioeventtype.md)*

Gets the type of Audio event, the enum AudioEventType.

**Returns:** *[AudioEventType](../enums/_lumin_.audioeventtype.md)*

AudioEventType

___

###  getAudioId

▸ **getAudioId**(): *bigint*

Returns the audio clip ID on which this event triggered.

**Returns:** *bigint*

___

###  getNodeId

▸ **getNodeId**(): *bigint*

Returns the node ID of the audio node associated with this event.

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

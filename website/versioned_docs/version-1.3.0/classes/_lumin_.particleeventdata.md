---
id: "_lumin_.particleeventdata"
title: "ParticleEventData"
sidebar_label: "ParticleEventData"
---

## Hierarchy

* [ServerEvent](_lumin_.serverevent.md)

  ↳ **ParticleEventData**

## Constructors

###  constructor

\+ **new ParticleEventData**(): *[ParticleEventData](_lumin_.particleeventdata.md)*

*Overrides [ServerEvent](_lumin_.serverevent.md).[constructor](_lumin_.serverevent.md#constructor)*

**Returns:** *[ParticleEventData](_lumin_.particleeventdata.md)*

## Methods

###  getEventName

▸ **getEventName**(): *string*

Returns the event name

**`priv`** none

**Returns:** *string*

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

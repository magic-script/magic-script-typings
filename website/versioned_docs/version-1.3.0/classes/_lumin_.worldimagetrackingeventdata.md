---
id: "_lumin_.worldimagetrackingeventdata"
title: "WorldImageTrackingEventData"
sidebar_label: "WorldImageTrackingEventData"
---

WorldImageTrackingEventData - Result from an image tracking request.

## Hierarchy

* [ServerEvent](_lumin_.serverevent.md)

  ↳ **WorldImageTrackingEventData**

## Constructors

###  constructor

\+ **new WorldImageTrackingEventData**(): *[WorldImageTrackingEventData](_lumin_.worldimagetrackingeventdata.md)*

*Overrides [ServerEvent](_lumin_.serverevent.md).[constructor](_lumin_.serverevent.md#constructor)*

**Returns:** *[WorldImageTrackingEventData](_lumin_.worldimagetrackingeventdata.md)*

## Methods

###  getName

▸ **getName**(): *string*

Returns the name of a tracked image.

**Returns:** *string*

___

###  getPosition

▸ **getPosition**(): *[number, number, number]*

Returns the location of a tracked image, relative to the volume.

**Returns:** *[number, number, number]*

___

###  getPrismId

▸ **getPrismId**(): *bigint*

*Inherited from [ServerEvent](_lumin_.serverevent.md).[getPrismId](_lumin_.serverevent.md#getprismid)*

Returns the Prism ID of the target Prism.

**`priv`** none

**Returns:** *bigint*

the Prism ID of the target Prism.

___

###  getRotation

▸ **getRotation**(): *[number, number, number, number]*

Returns the rotation of a tracked image, relative to the volume.

**Returns:** *[number, number, number, number]*

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

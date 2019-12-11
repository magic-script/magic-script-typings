---
id: "_lumin_.videotimedtexteventdata"
title: "VideoTimedTextEventData"
sidebar_label: "VideoTimedTextEventData"
---

VideoTimedTextEventData - Video events

## Hierarchy

* [ServerEvent](_lumin_.serverevent.md)

  ↳ **VideoTimedTextEventData**

## Constructors

###  constructor

\+ **new VideoTimedTextEventData**(): *[VideoTimedTextEventData](_lumin_.videotimedtexteventdata.md)*

*Overrides [ServerEvent](_lumin_.serverevent.md).[constructor](_lumin_.serverevent.md#constructor)*

**Returns:** *[VideoTimedTextEventData](_lumin_.videotimedtexteventdata.md)*

## Methods

###  getEndTime

▸ **getEndTime**(): *number*

**Returns:** *number*

end time

___

###  getNodeId

▸ **getNodeId**(): *bigint*

Returns the node ID associated with this event.

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

###  getStartTime

▸ **getStartTime**(): *number*

**Returns:** *number*

start time

___

###  getText

▸ **getText**(): *string*

**Returns:** *string*

text

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

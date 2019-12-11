---
id: "_lumin_.videoeventdata"
title: "VideoEventData"
sidebar_label: "VideoEventData"
---

Event subclass sent by VideoNode during media playback.

The X and Y fields are used to store different data for differnet event types:
<ul>
  <li>kVideoSizeChanged: X is width, Y is height</li>
  <li>kBufferingUpdate: X is the buffering percent, Y is unused</li>
  <li>kInfo: X is the info or warning code, Y is an info code to provide more details</li>
  <li>kError: X is the type of fatal error, Y is the MediaError code</li>
</ul>

## Hierarchy

* [ServerEvent](_lumin_.serverevent.md)

  ↳ **VideoEventData**

## Constructors

###  constructor

\+ **new VideoEventData**(): *[VideoEventData](_lumin_.videoeventdata.md)*

*Overrides [ServerEvent](_lumin_.serverevent.md).[constructor](_lumin_.serverevent.md#constructor)*

**Returns:** *[VideoEventData](_lumin_.videoeventdata.md)*

## Methods

###  getAffectedNodeId

▸ **getAffectedNodeId**(): *bigint*

Returns the ID of the VideoNode that was affected.

**`priv`** none

**Returns:** *bigint*

the ID of the VideoNode that was affected

___

###  getPrismId

▸ **getPrismId**(): *bigint*

*Inherited from [ServerEvent](_lumin_.serverevent.md).[getPrismId](_lumin_.serverevent.md#getprismid)*

Returns the Prism ID of the target Prism.

**`priv`** none

**Returns:** *bigint*

the Prism ID of the target Prism.

___

###  getVideoEventType

▸ **getVideoEventType**(): *[VideoEventType](../enums/_lumin_.videoeventtype.md)*

Returns the video event type.

**`priv`** none

**Returns:** *[VideoEventType](../enums/_lumin_.videoeventtype.md)*

the video event type

___

###  getXPos

▸ **getXPos**(): *number*

Returns event-specific data (see class description).

**`priv`** none

**Returns:** *number*

event-specific data

___

###  getYPos

▸ **getYPos**(): *number*

Returns event-specific data (see class description).

**`priv`** none

**Returns:** *number*

event-specific data

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

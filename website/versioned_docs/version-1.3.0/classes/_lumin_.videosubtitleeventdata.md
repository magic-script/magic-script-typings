---
id: "_lumin_.videosubtitleeventdata"
title: "VideoSubtitleEventData"
sidebar_label: "VideoSubtitleEventData"
---

Event received for video subtitle updates.

## Hierarchy

* [ServerEvent](_lumin_.serverevent.md)

  ↳ **VideoSubtitleEventData**

## Constructors

###  constructor

\+ **new VideoSubtitleEventData**(): *[VideoSubtitleEventData](_lumin_.videosubtitleeventdata.md)*

*Overrides [ServerEvent](_lumin_.serverevent.md).[constructor](_lumin_.serverevent.md#constructor)*

**Returns:** *[VideoSubtitleEventData](_lumin_.videosubtitleeventdata.md)*

## Methods

###  getBuffer

▸ **getBuffer**(): *Array‹number›*

Returns the text buffer.

**Returns:** *Array‹number›*

the text buffer

___

###  getDuration

▸ **getDuration**(): *bigint*

Returns the duration info.

**Returns:** *bigint*

the duration info

___

###  getNodeId

▸ **getNodeId**(): *bigint*

Returns the node ID associated with this event.

**Returns:** *bigint*

the node ID associated with this event

___

###  getPrismId

▸ **getPrismId**(): *bigint*

*Inherited from [ServerEvent](_lumin_.serverevent.md).[getPrismId](_lumin_.serverevent.md#getprismid)*

Returns the Prism ID of the target Prism.

**`priv`** none

**Returns:** *bigint*

the Prism ID of the target Prism.

___

###  getSize

▸ **getSize**(): *number*

Returns the size info.

**Returns:** *number*

the size info

___

###  getTime

▸ **getTime**(): *bigint*

Returns the time info.

**Returns:** *bigint*

the time info

___

###  getTrack

▸ **getTrack**(): *number*

Returns the track number.

**Returns:** *number*

the track number

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

---
id: "_lumin_.selectioneventdata"
title: "SelectionEventData"
sidebar_label: "SelectionEventData"
---

An event sent whenever a prism is selected or deselected.

The deselection event for the currently selected prism will always
be sent before the selection event for a newly selected prism.

Only the currently selected prism receives input events.

## Hierarchy

* [ServerEvent](_lumin_.serverevent.md)

  ↳ **SelectionEventData**

## Constructors

###  constructor

\+ **new SelectionEventData**(): *[SelectionEventData](_lumin_.selectioneventdata.md)*

*Overrides [ServerEvent](_lumin_.serverevent.md).[constructor](_lumin_.serverevent.md#constructor)*

**Returns:** *[SelectionEventData](_lumin_.selectioneventdata.md)*

## Methods

###  getAffectedPrismId

▸ **getAffectedPrismId**(): *bigint*

Returns the ID of the prism that has been selected or deselected.

**`priv`** none

**Returns:** *bigint*

the ID of the affected prism

___

###  getPrismId

▸ **getPrismId**(): *bigint*

*Inherited from [ServerEvent](_lumin_.serverevent.md).[getPrismId](_lumin_.serverevent.md#getprismid)*

Returns the Prism ID of the target Prism.

**`priv`** none

**Returns:** *bigint*

the Prism ID of the target Prism.

___

###  getSelectionEventType

▸ **getSelectionEventType**(): *[SelectionEventType](../enums/_lumin_.selectioneventtype.md)*

Returns the type of event (volume selected or deselected)

**`priv`** none

**Returns:** *[SelectionEventType](../enums/_lumin_.selectioneventtype.md)*

the type of selection event

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

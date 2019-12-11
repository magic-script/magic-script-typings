---
id: "_lumin_.ui.keyboard"
title: "Keyboard"
sidebar_label: "Keyboard"
---

Main entry point for interacting with the UiKit keyboard.

## Hierarchy

* **Keyboard**

## Constructors

###  constructor

\+ **new Keyboard**(): *[Keyboard](_lumin_.ui.keyboard.md)*

**Returns:** *[Keyboard](_lumin_.ui.keyboard.md)*

## Methods

###  hide

▸ **hide**(): *void*

Requests that the keyboard be hidden.

**`priv`** none

**Returns:** *void*

___

###  onVisibilityChangedSub

▸ **onVisibilityChangedSub**(`callback`: function): *[CallbackID](_lumin_.utils.callbackid.md)*

The on keyboard visibility changed event.

This event is dispatched whenever the visibility of the keyboard changes.

**`priv`** none

**Parameters:**

▪ **callback**: *function*

▸ (`arg0`: boolean): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg0` | boolean |

**Returns:** *[CallbackID](_lumin_.utils.callbackid.md)*

___

###  onVisibilityChangedUnsub

▸ **onVisibilityChangedUnsub**(`callbackID`: [CallbackID](_lumin_.utils.callbackid.md)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`callbackID` | [CallbackID](_lumin_.utils.callbackid.md) |

**Returns:** *boolean*

___

###  show

▸ **show**(`a_pClientVol`: [Prism](_lumin_.prism.md), `a_pLocaleCode`: [Code](../enums/_lumin_.ui.locale.code.md), `a_keyboardProperties`: [KeyboardProperties](_lumin_.ui.keyboardproperties.md), `a_eventHandler`: function, `positionExtents?`: [AABB](_lumin_.math.aabb.md)): *[ShowKeyboardReturnCode](../enums/_lumin_.ui.keyboard.showkeyboardreturncode.md)*

Requests that the keyboard be shown and enabled for the given prism.

**`priv`** none

**Parameters:**

▪ **a_pClientVol**: *[Prism](_lumin_.prism.md)*

the prism the keyboard will be positioned against.

▪ **a_pLocaleCode**: *[Code](../enums/_lumin_.ui.locale.code.md)*

the locale to use with the keyboard.

▪ **a_keyboardProperties**: *[KeyboardProperties](_lumin_.ui.keyboardproperties.md)*

the properties to use for the keyboard.

▪ **a_eventHandler**: *function*

the keyboard event handling function.

▸ (`arg0`: [EventData](_lumin_.ui.keyboardevent.eventdata.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg0` | [EventData](_lumin_.ui.keyboardevent.eventdata.md) |

▪`Optional`  **positionExtents**: *[AABB](_lumin_.math.aabb.md)*

`default = math.AABB.EMPTY`<br/> the (volume-space) extents of the control that's calling the keyboard.

**Returns:** *[ShowKeyboardReturnCode](../enums/_lumin_.ui.keyboard.showkeyboardreturncode.md)*

a ShowKeyboardReturnCode value indicating the result of the call.

___

### `Static` Get

▸ **Get**(): *[Keyboard](_lumin_.ui.keyboard.md)*

Returns the Keyboard singleton.

**`priv`** none

**Returns:** *[Keyboard](_lumin_.ui.keyboard.md)*

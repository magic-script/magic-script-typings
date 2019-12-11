---
id: "_lumin_.ui.dropdownlistitem"
title: "DropDownListItem"
sidebar_label: "DropDownListItem"
---

Structure containing information about each item in a drop-down list.

## Hierarchy

* **DropDownListItem**

## Constructors

###  constructor

\+ **new DropDownListItem**(`a_label`: string, `a_id?`: number): *[DropDownListItem](_lumin_.ui.dropdownlistitem.md)*

Constructor with specified label and optional id (no sub-items)

**Parameters:**

Name | Type |
------ | ------ |
`a_label` | string |
`a_id?` | number |

**Returns:** *[DropDownListItem](_lumin_.ui.dropdownlistitem.md)*

\+ **new DropDownListItem**(`a_label`: string, `a_subItems`: Array‹[DropDownListItem](_lumin_.ui.dropdownlistitem.md)›, `a_id?`: number): *[DropDownListItem](_lumin_.ui.dropdownlistitem.md)*

Constructor with specified label, list of sub-items, and optional id

**Parameters:**

Name | Type |
------ | ------ |
`a_label` | string |
`a_subItems` | Array‹[DropDownListItem](_lumin_.ui.dropdownlistitem.md)› |
`a_id?` | number |

**Returns:** *[DropDownListItem](_lumin_.ui.dropdownlistitem.md)*

## Properties

###  id

• **id**: *number*

An optional, custom defined, identifier to associate with each item.

___

###  label

• **label**: *string*

UTF-8 encoded label for the item.

___

###  subItems

• **subItems**: *Array‹[DropDownListItem](_lumin_.ui.dropdownlistitem.md)›*

Potential list of sub-items (for multi-level) for this item.

## Methods

###  getLevel

▸ **getLevel**(): *number*

Get the zero-based level of the item in the multi-level list.

**Returns:** *number*

___

###  getParent

▸ **getParent**(): *[DropDownListItem](_lumin_.ui.dropdownlistitem.md)*

The parent list item this item belongs to, if any.

**Returns:** *[DropDownListItem](_lumin_.ui.dropdownlistitem.md)*

___

###  getSelected

▸ **getSelected**(): *boolean*

Get whether the item is selected.

**Returns:** *boolean*

___

###  setSelected

▸ **setSelected**(`selected`: boolean): *void*

Set the selected state of this item

**Parameters:**

Name | Type |
------ | ------ |
`selected` | boolean |

**Returns:** *void*

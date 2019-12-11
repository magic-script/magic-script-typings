---
id: "_lumin_.multipack.sheetfiles"
title: "SheetFiles"
sidebar_label: "SheetFiles"
---

Indexed pair of files per sheet in the texture multi-pack.

## Hierarchy

* **SheetFiles**

## Constructors

###  constructor

\+ **new SheetFiles**(`index`: number, `jsonFile`: string, `imageFile`: string): *[SheetFiles](_lumin_.multipack.sheetfiles.md)*

Copy the files and meta-data into the object's fields.

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |
`jsonFile` | string |
`imageFile` | string |

**Returns:** *[SheetFiles](_lumin_.multipack.sheetfiles.md)*

\+ **new SheetFiles**(): *[SheetFiles](_lumin_.multipack.sheetfiles.md)*

Construct an empty object; see empty().

**Returns:** *[SheetFiles](_lumin_.multipack.sheetfiles.md)*

## Properties

###  imageFile

• **imageFile**: *string*

Contains the binary image.

___

###  index

• **index**: *number*

Index of the sheet in the multi-pack.

___

###  jsonFile

• **jsonFile**: *string*

Contains the meta-data

## Methods

###  empty

▸ **empty**(): *boolean*

True if either file is empty.

**Returns:** *boolean*

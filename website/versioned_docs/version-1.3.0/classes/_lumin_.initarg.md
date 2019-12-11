---
id: "_lumin_.initarg"
title: "InitArg"
sidebar_label: "InitArg"
---

Initialization argument for Lumin Runtime applications.

## Hierarchy

* **InitArg**

## Constructors

###  constructor

\+ **new InitArg**(): *[InitArg](_lumin_.initarg.md)*

**Returns:** *[InitArg](_lumin_.initarg.md)*

## Methods

###  getFileInfo

▸ **getFileInfo**(`index`: number): *[FileInfo](_lumin_.fileinfo.md)*

Gets the FileInfo object at the specified index.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`index` | number | The index of the FileInfo object to return. |

**Returns:** *[FileInfo](_lumin_.fileinfo.md)*

the FileInfo object or nullptr if out of bounds.

___

###  getFileInfoCount

▸ **getFileInfoCount**(): *number*

Get the count of FileInfo objects in this argument.

**`priv`** none

**Returns:** *number*

the count of FileInfo objects.

___

###  getUri

▸ **getUri**(): *string*

Returns the URI string for this argument.

**`priv`** none

**Returns:** *string*

the URI string.

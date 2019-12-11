---
id: "_lumin_.fileinfo"
title: "FileInfo"
sidebar_label: "FileInfo"
---

Class that encapsulates information about a file argument.

## Hierarchy

* **FileInfo**

## Constructors

###  constructor

\+ **new FileInfo**(): *[FileInfo](_lumin_.fileinfo.md)*

Creates an empty FileInfo object.

**Returns:** *[FileInfo](_lumin_.fileinfo.md)*

## Methods

###  getFileDescriptor

▸ **getFileDescriptor**(): *number*

Returns the file descriptor.

**`priv`** none

**Returns:** *number*

the file descriptor.

___

###  getFileName

▸ **getFileName**(): *string*

Returns the name of the file.

The file can be accessed only via the enclosed file descriptor
and not using this name. This is for information only.

**`priv`** none

**Returns:** *string*

the file name.

___

###  getMimeType

▸ **getMimeType**(): *string*

Returns the mime type of the file.

**`priv`** none

**Returns:** *string*

the file's mime type.

___

###  setFileDescriptor

▸ **setFileDescriptor**(`fd`: number): *void*

Sets the file descriptor.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fd` | number | the file descriptor. |

**Returns:** *void*

___

###  setFileName

▸ **setFileName**(`filename`: string): *void*

Sets the name of the file.

The file can be accessed only via the enclosed file descriptor
and not using this name. This is for information only.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`filename` | string | the file name (for information only). |

**Returns:** *void*

___

###  setMimeType

▸ **setMimeType**(`mimeType`: string): *void*

Sets the mime type of the file.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mimeType` | string | the file's mime type. |

**Returns:** *void*

---
id: "_lumin_.files"
title: "files"
sidebar_label: "files"
---

## Index

### Functions

* [CanRead](_lumin_.files.md#canread)
* [Extension](_lumin_.files.md#extension)
* [FileName](_lumin_.files.md#filename)
* [ParentFolder](_lumin_.files.md#parentfolder)

## Functions

###  CanRead

▸ **CanRead**(`filePath`: string): *boolean*

Tests whether the file can be opened for reading.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`filePath` | string | path to the file |

**Returns:** *boolean*

true if the file is readable; false otherwise

___

###  Extension

▸ **Extension**(`filepath`: string): *string*

Returns the extension for a file.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`filepath` | string | path to the file |

**Returns:** *string*

File extension deduced from filepath;
        e.g. "foo/bar.txt" -> "txt"

___

###  FileName

▸ **FileName**(`filepath`: string): *string*

Returns the file name

**`priv`** none

**Parameters:**

Name | Type |
------ | ------ |
`filepath` | string |

**Returns:** *string*

file name deduced from filepath.
E.g. "foo/bar/baz.txt" -> "baz.txt"

___

###  ParentFolder

▸ **ParentFolder**(`filepath`: string): *string*

Returns the parent folder of a file.

**`priv`** none

**Parameters:**

Name | Type |
------ | ------ |
`filepath` | string |

**Returns:** *string*

Parent folder deduced from filepath.
E.g. "foo/bar/baz.txt" -> "foo/bar"

---
id: "_lumin_.utils"
title: "utils"
sidebar_label: "utils"
---

## Index

### Enumerations

* [Filter](../enums/_lumin_.utils.filter.md)
* [LightType](../enums/_lumin_.utils.lighttype.md)
* [ShaderType](../enums/_lumin_.utils.shadertype.md)
* [StatusDef](../enums/_lumin_.utils.statusdef.md)
* [Wrap](../enums/_lumin_.utils.wrap.md)

### Classes

* [CallbackID](../classes/_lumin_.utils.callbackid.md)
* [Params2d](../classes/_lumin_.utils.params2d.md)

### Functions

* [BuildTexCoords](_lumin_.utils.md#buildtexcoords)
* [ToAscii](_lumin_.utils.md#toascii)
* [ToLower](_lumin_.utils.md#tolower)
* [ToUnicode](_lumin_.utils.md#tounicode)
* [ToUpper](_lumin_.utils.md#toupper)
* [Utf32ToUtf8](_lumin_.utils.md#utf32toutf8)
* [Utf8ToUtf32](_lumin_.utils.md#utf8toutf32)

## Functions

###  BuildTexCoords

▸ **BuildTexCoords**(`coordsMin`: [number, number], `coordsMax`: [number, number]): *Array‹[number, number]›*

Given the lower-left and upper-right corners of an un-rotated quad,
builds the texture coordinates for rendering it in full.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`coordsMin` | [number, number] | Min texture coordinates (lower-left corner). |
`coordsMax` | [number, number] | Max texture coordinates (upper-right corner). |

**Returns:** *Array‹[number, number]›*

Texture coordinates for rendering the quad geometry.

___

###  ToAscii

▸ **ToAscii**(`unicode`: string): *string*

Truncates all characters to the range of char.

**`priv`** none

**Parameters:**

Name | Type |
------ | ------ |
`unicode` | string |

**Returns:** *string*

___

###  ToLower

▸ **ToLower**(`str`: string): *string*

Applies std::tolower to every character of the input string.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`str` | string | string of ASCII characters (UTF-8 doesn't work with this function). |

**Returns:** *string*

a new string containing the characters of str with std::tolower applied.

___

###  ToUnicode

▸ **ToUnicode**(`ascii`: string): *string*

Converts from ASCII to unicode.

**`priv`** none

**Parameters:**

Name | Type |
------ | ------ |
`ascii` | string |

**Returns:** *string*

___

###  ToUpper

▸ **ToUpper**(`str`: string): *string*

Applies std::toupper to every character of the input string.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`str` | string | string of ASCII characters (UTF-8 doesn't work with this function). |

**Returns:** *string*

a new string containing the characters of str with std::toupper applied.

___

###  Utf32ToUtf8

▸ **Utf32ToUtf8**(`utf32String`: string): *string*

Converts a UTF32 string into the UTF8 equivalent.

**`priv`** none

**Parameters:**

Name | Type |
------ | ------ |
`utf32String` | string |

**Returns:** *string*

___

###  Utf8ToUtf32

▸ **Utf8ToUtf32**(`utf8String`: string): *string*

Converts a UTF8 string into the UTF32 equivalent.

**`priv`** none

**Parameters:**

Name | Type |
------ | ------ |
`utf8String` | string |

**Returns:** *string*

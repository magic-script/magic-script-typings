---
id: "_lumin_.glyph.kerning.pair"
title: "Pair"
sidebar_label: "Pair"
---

Spacing of letters is determined by both the character itself
and the one before it in the string, as defined by the font's
kerning parameters.

## Hierarchy

* **Pair**

## Constructors

###  constructor

\+ **new Pair**(`prev`: number, `code`: number): *[Pair](_lumin_.glyph.kerning.pair.md)*

**Parameters:**

Name | Type |
------ | ------ |
`prev` | number |
`code` | number |

**Returns:** *[Pair](_lumin_.glyph.kerning.pair.md)*

## Properties

###  character

• **character**: *number*

___

###  previous

• **previous**: *number*

___

### `Static` NONE

▪ **NONE**: *[number, number]*

`value = [0,0]`

## Methods

###  equals

▸ **equals**(`rhs`: [Pair](_lumin_.glyph.kerning.pair.md)): *boolean*

comparison operators

**Parameters:**

Name | Type |
------ | ------ |
`rhs` | [Pair](_lumin_.glyph.kerning.pair.md) |

**Returns:** *boolean*

___

###  toString

▸ **toString**(`assumeAscii?`: boolean): *string*

Provide a convenient string representation.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`assumeAscii?` | boolean | `default = false`<br/> if true, print the characters assuming they are ASCII.  |

**Returns:** *string*

___

### `Static` IsNone

▸ **IsNone**(`vector`: [number, number]): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`vector` | [number, number] |

**Returns:** *boolean*

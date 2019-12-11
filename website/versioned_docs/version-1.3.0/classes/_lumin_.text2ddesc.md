---
id: "_lumin_.text2ddesc"
title: "Text2dDesc"
sidebar_label: "Text2dDesc"
---

Text-node description with reasonable defaults for all properties,
with which clients can easily create a new text node; see
ClientVolume::createText2dNode.

## Hierarchy

* **Text2dDesc**

## Constructors

###  constructor

\+ **new Text2dDesc**(`text`: string): *[Text2dDesc](_lumin_.text2ddesc.md)*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *[Text2dDesc](_lumin_.text2ddesc.md)*

## Properties

###  advanceDirection

• **advanceDirection**: *[AdvanceDirection](../enums/_lumin_.glyph.advancedirection.md)*

___

###  characterSpacing

• **characterSpacing**: *number*

___

###  colorRGBA

• **colorRGBA**: *[number, number, number, number]*

___

###  flowDirection

• **flowDirection**: *[FlowDirection](../enums/_lumin_.text.flowdirection.md)*

___

###  glyphHeight

• **glyphHeight**: *number*

Don't override the font's default glyph height

___

###  justification

• **justification**: *[Justification](../enums/_lumin_.text.justification.md)*

___

###  lineSpacing

• **lineSpacing**: *number*

___

###  maxGlyphsPerLine

• **maxGlyphsPerLine**: *number*

0 implies no limit by default

___

###  tabWidth

• **tabWidth**: *number*

___

###  unicodeText

• **unicodeText**: *string*

set in constructor

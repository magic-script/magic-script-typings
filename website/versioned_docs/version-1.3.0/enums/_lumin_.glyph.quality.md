---
id: "_lumin_.glyph.quality"
title: "Quality"
sidebar_label: "Quality"
---

Describes the quality vs. performance balance when rendering
with the font.  Can be controlled with Font2dDesc when the
font resource is created.  Note the quality levels above kStd
are still experimental and not recommended for most users.

## Enumeration members

###  kEnh1

• **kEnh1**:

Enhanced lvl 1 text, which uses preconditioned font data.

___

###  kEnh1AA

• **kEnh1AA**:

Uses same data as kEnh1 but applies extra anti-aliasing; slower than kEnh1.

___

###  kEnh1Fast

• **kEnh1Fast**:

Uses the same data as kEnh1 with a less accurate but faster shader.

___

###  kEnh2

• **kEnh2**:

Enhanced lvl 2 text, which uses different preconditioned data than kEnh1.

___

###  kEnh3

• **kEnh3**:

___

###  kExper

• **kExper**:

Like kStd, but still in development.  Experimental -- never for production use.

___

###  kFast

• **kFast**:

Fastest rendering, but the text quality is unacceptable for most use cases.

___

###  kStd

• **kStd**:

Standard quality, which is ideal for on-the-fly font loading.

___

###  kStd0

• **kStd0**:

N.B. these are still in development and deprecated; prefer kStd except for testing purposes.

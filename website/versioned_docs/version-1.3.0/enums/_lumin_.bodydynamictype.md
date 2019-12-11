---
id: "_lumin_.bodydynamictype"
title: "BodyDynamicType"
sidebar_label: "BodyDynamicType"
---

body dynamics for a Prism

## Enumeration members

###  kBodyCentric

• **kBodyCentric**:

The Prism's body dynamic is "body centric"

The Prism will loosely move with the user.  This means that if the user gets too close to the
Prism then the Prism will be "pushed" backwards.  If the user gets too far from the Prism then
the Prism will be "pulled" towards the user.  The Prism also billboards towards the user.

___

###  kEdgeBillboard

• **kEdgeBillboard**:

The Prism's body dynamic is "edge billboard"

The Prism's position remains constant, however it will rotate about the vertical (y) axis if
the user starts walking around it.

___

###  kNone

• **kNone**:

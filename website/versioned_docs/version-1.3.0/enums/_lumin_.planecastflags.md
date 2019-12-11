---
id: "_lumin_.planecastflags"
title: "PlanecastFlags"
sidebar_label: "PlanecastFlags"
---

Used to filter types of planes when doing a plane cast.

## Enumeration members

###  kAllOrientations

• **kAllOrientations**:

`value = kVertical|kHorizontal|kArbitrary`

___

###  kAllTypes

• **kAllTypes**:

`value = kCeiling|kFloor|kWall`

___

###  kArbitrary

• **kArbitrary**:

Include planes with arbitrary normals.

`value = 1<<2`

___

###  kCeiling

• **kCeiling**:

Include planes tagged as ceiling.

`value = 1<<6`

___

###  kFlagInner

• **kFlagInner**:

If this flag is set, inner planes will be returned; if it is not
set, outer planes will be returned.

`value = 1<<4`

___

###  kFloor

• **kFloor**:

Include planes tagged as floor.

`value = 1<<7`

___

###  kHorizontal

• **kHorizontal**:

Include planes whose normal is parallel to gravity.

`value = 1<<1`

___

###  kIgnoreHoles

• **kIgnoreHoles**:

Instructs the plane system to ignore holes in planar surfaces.

`value = 1<<5`

___

###  kOrientToGravity

• **kOrientToGravity**:

For non-horizontal planes, setting this flag will result in the
top of the plane rectangle being perpendicular to gravity.

`value = 1<<3`

___

###  kVertical

• **kVertical**:

Include planes whose normal is perpendicular to gravity.

`value = 1<<0`

___

###  kWall

• **kWall**:

Include planes tagged as wall.

`value = 1<<8`

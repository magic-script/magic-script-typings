---
id: "_lumin_.physicsshape"
title: "PhysicsShape"
sidebar_label: "PhysicsShape"
---

A shape that can be added to a PhysicsRigidBody. While the PhysicsRigidBody defines how the
body moves, due to its mass, PhysicsShapes define the actual shape of the body. PhysicsShapes
come in two general types: primitive, and mesh. Primitive shapes are plane, sphere, capsule,
and box; they are defined by parameters such as radius and length. Mesh shapes are convex and
open; they are defined by mesh data similar to a 3d mesh for rendering.

NOTE: mesh shapes are currently not supported.

A shape can have one of two behaviors: collision or trigger. A collision shape will collide
with other collision shapes and generally act as expected in a physics simulation. A trigger
shape does not collide with other shapes. However, if a collision shape enters or exits the
bounds of a trigger shape, a PhysicsEventData server event will be generated with a kTriggerEnter
or kTriggerExit type. Note a trigger shape interacting with another trigger shape does not
generate an event.

Multiple shapes can be added to a PhysicsRigidBody. The localPosition and localRotation of the
shape sets its position relative to the position of the body.

A shape may not be added to or removed from a PhysicsRigidBody once the body has been added to a Prism.

A plane or open mesh shape cannot be added to a dynamic PhysicsRigidBody.

Note that PhysicsShape have no setters for its data. If you want to modify a shape, you must
create a new one.

## Hierarchy

* **PhysicsShape**

## Constructors

###  constructor

\+ **new PhysicsShape**(): *[PhysicsShape](_lumin_.physicsshape.md)*

**Returns:** *[PhysicsShape](_lumin_.physicsshape.md)*

## Methods

###  getBoxSides

▸ **getBoxSides**(): *[number, number, number]*

Returns the side lengths of a box shape.

**`priv`** none

**Returns:** *[number, number, number]*

The lengths, or undefined if the shape isn't a box.

___

###  getCapsuleLength

▸ **getCapsuleLength**(): *number*

Returns the length of a capsule shape. The length is for the cylinder part of the shape,
it does not include the caps.

**`priv`** none

**Returns:** *number*

The length, or undefined if the shape isn't a capsule.

___

###  getCapsuleRadius

▸ **getCapsuleRadius**(): *number*

Returns the radius of a capsule shape.

**`priv`** none

**Returns:** *number*

The radius, or undefined if the shape isn't a capsule.

___

###  getMaterial

▸ **getMaterial**(): *[PhysicsMaterial](_lumin_.physicsmaterial.md)*

Returns the PhysicsMaterial for this shape.

**`priv`** none

**Returns:** *[PhysicsMaterial](_lumin_.physicsmaterial.md)*

the material

___

###  getShapeBehavior

▸ **getShapeBehavior**(): *[ShapeBehavior](../enums/_lumin_.physics.shapebehavior.md)*

Returns the shape behavior.

**`priv`** none

**Returns:** *[ShapeBehavior](../enums/_lumin_.physics.shapebehavior.md)*

the behavior

___

###  getShapeType

▸ **getShapeType**(): *[ShapeType](../enums/_lumin_.physics.shapetype.md)*

Returns the shape type.

**`priv`** none

**Returns:** *[ShapeType](../enums/_lumin_.physics.shapetype.md)*

the type

___

###  getSphereRadius

▸ **getSphereRadius**(): *number*

Returns the radius of a sphere shape.

**`priv`** none

**Returns:** *number*

The radius, or undefined if the shape isn't a sphere.

___

###  setMaterial

▸ **setMaterial**(`material`: [PhysicsMaterial](_lumin_.physicsmaterial.md)): *void*

Sets the PhysicsMaterial for the shape.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`material` | [PhysicsMaterial](_lumin_.physicsmaterial.md) | The Material  |

**Returns:** *void*

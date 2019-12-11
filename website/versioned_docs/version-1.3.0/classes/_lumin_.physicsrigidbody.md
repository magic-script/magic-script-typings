---
id: "_lumin_.physicsrigidbody"
title: "PhysicsRigidBody"
sidebar_label: "PhysicsRigidBody"
---

Defines the mass and movement properties of a physics object. A rigid body has no inherent shape,
one or more PhysicsShapes need to be added to it.

A rigid body is one of 3 types: static, kinematic, or dynamic
    static : The body never moves.
    kinematic : The body can be moved by external systems, such as animation, but is not
                affected by forces or collisions.
    dynamic : The body is affected by forces and collisions.

It is important that apart from their initial position, static and dynamic bodies should not
have their positions changed by calls to setLocalPosition, etc. This will cause unexpected
results in the simulation.

## Hierarchy

* **PhysicsRigidBody**

## Constructors

###  constructor

\+ **new PhysicsRigidBody**(): *[PhysicsRigidBody](_lumin_.physicsrigidbody.md)*

**Returns:** *[PhysicsRigidBody](_lumin_.physicsrigidbody.md)*

## Methods

###  addShape

▸ **addShape**(`shape`: [PhysicsShape](_lumin_.physicsshape.md), `position?`: [number, number, number], `rotation?`: [number, number, number, number]): *bigint*

Adds a shape to the body. A shape may not be added to the body after it has been added to a Prism.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`shape` | [PhysicsShape](_lumin_.physicsshape.md) | The shape to add. |
`position?` | [number, number, number] | `default = VEC3_ZERO`<br/> Offset from the body's location to place the shape. |
`rotation?` | [number, number, number, number] | `default = QUAT_IDENTITY`<br/> Rotation of the shape relative to the body's orientation. |

**Returns:** *bigint*

Id of the shape for the body. INVALID_PHYSICS_ID if the shape was not added.

___

###  applyForce

▸ **applyForce**(`type`: [ForceType](../enums/_lumin_.physics.forcetype.md), `force`: [number, number, number]): *void*

Applies a force to the body. The force will only be applied for the current frame; to apply a
continuous force, this function must be called every frame.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | [ForceType](../enums/_lumin_.physics.forcetype.md) | Type of force to apply (force or impulse). |
`force` | [number, number, number] | Amount of force. Units depend on the force type.  |

**Returns:** *void*

___

###  applyForceAtPos

▸ **applyForceAtPos**(`type`: [ForceType](../enums/_lumin_.physics.forcetype.md), `force`: [number, number, number], `pos`: [number, number, number]): *void*

Applies a force to the body at a given position. If the force is not at the center of mass, this
will result in a torque being applied to the body as well. Both the force and position are in
volume-space reference frame. The force will only be applied for the current frame; to apply a
continuous force, this function must be called every frame.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | [ForceType](../enums/_lumin_.physics.forcetype.md) | Type of force to apply (force or impulse). |
`force` | [number, number, number] | Amount of force. Units depend on the force type. |
`pos` | [number, number, number] | Position to apply the force  |

**Returns:** *void*

___

###  applyLocalForceAtPos

▸ **applyLocalForceAtPos**(`type`: [ForceType](../enums/_lumin_.physics.forcetype.md), `force`: [number, number, number], `pos`: [number, number, number]): *void*

Applies a force to the body at a given position. If the force is not at the center of mass, this
will result in a torque being applied to the body as well. Both the force and position are in
local-space of the body reference frame. The force will only be applied for the current frame;
to apply a continuous force, this function must be called every frame.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | [ForceType](../enums/_lumin_.physics.forcetype.md) | Type of force to apply (force or impulse). |
`force` | [number, number, number] | Amount of force. Units depend on the force type. |
`pos` | [number, number, number] | Position to apply the force  |

**Returns:** *void*

___

###  applyTorque

▸ **applyTorque**(`type`: [ForceType](../enums/_lumin_.physics.forcetype.md), `force`: [number, number, number]): *void*

Applies a torque to the body. The torque will only be applied for the current frame; to apply a
continuous torque, this function must be called every frame.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | [ForceType](../enums/_lumin_.physics.forcetype.md) | Type of torque to apply (force or impulse). |
`force` | [number, number, number] | Amount of torque. Units depend on the force type.  |

**Returns:** *void*

___

###  clearColliderFlag

▸ **clearColliderFlag**(`flag`: number): *void*

Clears a single collider flag for the body.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`flag` | number | Collider flag, in the range of 0 - 31.  |

**Returns:** *void*

___

###  clearCollidesWithFlag

▸ **clearCollidesWithFlag**(`flag`: number): *void*

Clears a single collides with flag for the body.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`flag` | number | Collides with flag, in the range of 0 - 31.  |

**Returns:** *void*

___

###  clearForce

▸ **clearForce**(): *void*

Clears all linear forces on the body.

**`priv`** none

**Returns:** *void*

___

###  clearTorque

▸ **clearTorque**(): *void*

Clears all angular forces on the body.

**`priv`** none

**Returns:** *void*

___

###  getAngularDamping

▸ **getAngularDamping**(): *number*

Returns angular damping coefficient being applied to the body.

**`priv`** none

**Returns:** *number*

Damping

___

###  getAngularVelocity

▸ **getAngularVelocity**(): *[number, number, number]*

Returns the angular velocity of the body, in rad/sec.

**`priv`** none

**Returns:** *[number, number, number]*

velocity

___

###  getBodyType

▸ **getBodyType**(): *[RigidBodyType](../enums/_lumin_.physics.rigidbodytype.md)*

Returns the rigid body type (static/kinematic/dynamic).

**`priv`** none

**Returns:** *[RigidBodyType](../enums/_lumin_.physics.rigidbodytype.md)*

The body type.

___

###  getCenterOfMass

▸ **getCenterOfMass**(): *[number, number, number]*

Returns the center of mass of the body.

**`priv`** none

**Returns:** *[number, number, number]*

Center of mass.

___

###  getColliderFlags

▸ **getColliderFlags**(): *number*

Returns the collider flags for the body.

**`priv`** none

**Returns:** *number*

The collider flags.

___

###  getCollidesWithFlags

▸ **getCollidesWithFlags**(): *number*

Returns the collides with flags for the body.

**`priv`** none

**Returns:** *number*

The collides with flags.

___

###  getInertiaTensor

▸ **getInertiaTensor**(): *[number, number, number]*

Returns the inertia tensor of the body.

**`priv`** none

**Returns:** *[number, number, number]*

Inertia tensor.

___

###  getLinearDamping

▸ **getLinearDamping**(): *number*

Returns linear damping coefficient being applied to the body.

**`priv`** none

**Returns:** *number*

Damping

___

###  getLinearVelocity

▸ **getLinearVelocity**(): *[number, number, number]*

Returns the linear velocity of the body, in meter/sec.

**`priv`** none

**Returns:** *[number, number, number]*

velocity

___

###  getMass

▸ **getMass**(): *number*

Returns the mass of the rigid body.

**`priv`** none

**Returns:** *number*

Mass, in kilograms.

___

###  getMaxAngularVelocity

▸ **getMaxAngularVelocity**(): *number*

Returns the maximum angular velocity of the body.

**`priv`** none

**Returns:** *number*

Max velocity

___

###  getSleepThreshold

▸ **getSleepThreshold**(): *number*

Returns the sleep threshold of the body.

**`priv`** none

**Returns:** *number*

Threshold

___

###  isColliderFlagSet

▸ **isColliderFlagSet**(`flag`: number): *boolean*

Returns if a given collider flag is set.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`flag` | number | Flag value, in the range of 0 - 31. |

**Returns:** *boolean*

true if the flag is set.

___

###  isCollidesWithFlagSet

▸ **isCollidesWithFlagSet**(`flag`: number): *boolean*

Returns if a given collides with flag is set.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`flag` | number | Flag value, in the range of 0 - 31. |

**Returns:** *boolean*

true if the flag is set.

___

###  lockAxes

▸ **lockAxes**(`linear`: [AxisLock](../enums/_lumin_.physics.axislock.md), `angular`: [AxisLock](../enums/_lumin_.physics.axislock.md)): *void*

Prevents motion on the given axes. Values can be or'ed together to prevent motion on multiple axes.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`linear` | [AxisLock](../enums/_lumin_.physics.axislock.md) | Linear axes to lock |
`angular` | [AxisLock](../enums/_lumin_.physics.axislock.md) | Angular axes to lock  |

**Returns:** *void*

___

###  node

▸ **node**(): *[Node](_lumin_.node.md)*

Get the Node this RigidBody is attached to.

**Returns:** *[Node](_lumin_.node.md)*

the Node pointer.

___

###  removeShape

▸ **removeShape**(`id`: bigint): *boolean*

Removes a shape from the body. A shape may not be removed from the body after it has been added to a Prism.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | bigint | Id of the shape to remove. |

**Returns:** *boolean*

true if the shape was removed

___

###  setAngularDamping

▸ **setAngularDamping**(`damping`: number): *void*

Sets angular damping coefficient being applied to the body. This can be used to simulate things
like rolling friction.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`damping` | number | Damping coefficient  |

**Returns:** *void*

___

###  setAngularVelocity

▸ **setAngularVelocity**(`velocity`: [number, number, number]): *void*

Sets the angular velocity of the body, in rad/sec.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`velocity` | [number, number, number] |   |

**Returns:** *void*

___

###  setBodyType

▸ **setBodyType**(`type`: [RigidBodyType](../enums/_lumin_.physics.rigidbodytype.md)): *void*

Sets the rigid body type (static/kinematic/dynamic). Changing this may result in the loss of
data for the body in the simulation. The preferred way to change the body type is to remove
the body from its volume, change the type, and re-add to the volume.

**`priv`** none

**Parameters:**

Name | Type |
------ | ------ |
`type` | [RigidBodyType](../enums/_lumin_.physics.rigidbodytype.md) |

**Returns:** *void*

The body type.

___

###  setCenterOfMass

▸ **setCenterOfMass**(`com`: [number, number, number]): *void*

Sets the center of mass of the body. Note setting it outside the body's area as defined by
the shapes attached to it may result in an unstable simulation.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`com` | [number, number, number] | Center of mass  |

**Returns:** *void*

___

###  setColliderFlag

▸ **setColliderFlag**(`flag`: number): *void*

Sets a single collider flag for the body.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`flag` | number | Collider flag, in the range of 0 - 31.  |

**Returns:** *void*

___

###  setColliderFlags

▸ **setColliderFlags**(`flags`: number): *void*

Sets the collider flags for the body. If the collider flags of one body anded with the
collides with flags of another body is 0, the bodies will not collide.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`flags` | number | Collider flags.  |

**Returns:** *void*

___

###  setCollidesWithFlag

▸ **setCollidesWithFlag**(`flag`: number): *void*

Sets a single collides with flag for the body.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`flag` | number | Collides with flag, in the range of 0 - 31.  |

**Returns:** *void*

___

###  setCollidesWithFlags

▸ **setCollidesWithFlags**(`flags`: number): *void*

Sets the collides with flags for the body. If the collider flags of one body anded with the
collides with flags of another body is 0, the bodies will not collide.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`flags` | number | Collides with flags.  |

**Returns:** *void*

___

###  setEnableCCD

▸ **setEnableCCD**(`enable`: boolean): *void*

Enable/disable continuous collision detection (CCD) for this body. Enabling CCD can be used to
prevent a body from "tunneling" through another due to it moving too fast.

IMPORTANT: Physics must have been enabled with the solverType initialization data set to
kFastNormal or kFastFast for this to have an effect.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`enable` | boolean | Flag to enable CCD on the body.  |

**Returns:** *void*

___

###  setIgnoreGravity

▸ **setIgnoreGravity**(`ignore`: boolean): *void*

Flags the body as ignoring gravity.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ignore` | boolean | If true, the body won't be affected by gravity.  |

**Returns:** *void*

___

###  setInertiaTensor

▸ **setInertiaTensor**(`tensor`: [number, number, number]): *void*

Sets the inertia tensor of the body. A value of 0 is the equivalent of infinite inertia on
the axis.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tensor` | [number, number, number] | Inertia tensor.  |

**Returns:** *void*

___

###  setLinearDamping

▸ **setLinearDamping**(`damping`: number): *void*

Sets linear damping coefficient being applied to the body. This can be used to simulate things
like air resistance.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`damping` | number | Damping coefficient  |

**Returns:** *void*

___

###  setLinearVelocity

▸ **setLinearVelocity**(`velocity`: [number, number, number]): *void*

Sets the linear velocity of the body, in meter/sec.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`velocity` | [number, number, number] |   |

**Returns:** *void*

___

###  setMass

▸ **setMass**(`massKg`: number): *void*

Sets the mass of the rigid body.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`massKg` | number | Mass, in kilograms. Must be > 0.  |

**Returns:** *void*

___

###  setMaxAngularVelocity

▸ **setMaxAngularVelocity**(`velocity`: number): *void*

Sets the maximum angular velocity of the body. This helps keep the simulation stable; it can become
unstable if the object rotates too fast.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`velocity` | number | Max velocity  |

**Returns:** *void*

___

###  setSleepThreshold

▸ **setSleepThreshold**(`threshold`: number): *void*

Sets the sleep threshold of the body. This controls when the body is marked to be stopped
simulating due to lack of motion.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`threshold` | number | Sleep threshold value  |

**Returns:** *void*

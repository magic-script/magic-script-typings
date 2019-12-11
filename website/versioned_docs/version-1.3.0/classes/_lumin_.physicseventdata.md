---
id: "_lumin_.physicseventdata"
title: "PhysicsEventData"
sidebar_label: "PhysicsEventData"
---

## Hierarchy

* [ServerEvent](_lumin_.serverevent.md)

  ↳ **PhysicsEventData**

## Constructors

###  constructor

\+ **new PhysicsEventData**(): *[PhysicsEventData](_lumin_.physicseventdata.md)*

*Overrides [ServerEvent](_lumin_.serverevent.md).[constructor](_lumin_.serverevent.md#constructor)*

**Returns:** *[PhysicsEventData](_lumin_.physicseventdata.md)*

## Methods

###  getCollisionForces

▸ **getCollisionForces**(): *Array‹[number, number, number]›*

Returns collision forces, in Newtons (kg-m/s^2)

**Returns:** *Array‹[number, number, number]›*

___

###  getCollisionPoints

▸ **getCollisionPoints**(): *Array‹[number, number, number]›*

Returns collision points, in prism-space

**Returns:** *Array‹[number, number, number]›*

___

###  getCollisionType

▸ **getCollisionType**(): *[CollisionType](../enums/_lumin_.physics.collisiontype.md)*

Returns the type of collision event being reported.

**Returns:** *[CollisionType](../enums/_lumin_.physics.collisiontype.md)*

___

###  getPrismId

▸ **getPrismId**(): *bigint*

*Inherited from [ServerEvent](_lumin_.serverevent.md).[getPrismId](_lumin_.serverevent.md#getprismid)*

Returns the Prism ID of the target Prism.

**`priv`** none

**Returns:** *bigint*

the Prism ID of the target Prism.

___

###  getRigidBody1

▸ **getRigidBody1**(): *bigint*

Returns id of the 1st colliding rigid body.
If this is a trigger event, this will be the trigger body.
If this body is the world mesh, the id will be 0.

**Returns:** *bigint*

___

###  getRigidBody2

▸ **getRigidBody2**(): *bigint*

Returns id of the 2nd colliding rigid body.
If this body is the world mesh, the id will be 0.

**Returns:** *bigint*

___

###  isInputEventType

▸ **isInputEventType**(): *boolean*

*Inherited from [ServerEvent](_lumin_.serverevent.md).[isInputEventType](_lumin_.serverevent.md#isinputeventtype)*

Returns true if this is an input event (a subclass of InputEventData).

**`priv`** none

**Returns:** *boolean*

true if this is an input event

___

###  toString

▸ **toString**(): *string*

*Inherited from [ServerEvent](_lumin_.serverevent.md).[toString](_lumin_.serverevent.md#tostring)*

Returns a string representation of this event for debug purposes.

**`priv`** none

**Returns:** *string*

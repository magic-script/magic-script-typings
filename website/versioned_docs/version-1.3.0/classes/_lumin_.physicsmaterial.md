---
id: "_lumin_.physicsmaterial"
title: "PhysicsMaterial"
sidebar_label: "PhysicsMaterial"
---

Data representing the surface properties of a PhysicsShape. There are 3 values:

Static friction : Friction applied to the body if it is not in motion. Most sliding bodies have
                  a higher friction when stationary than when moving.
Dynamic friction : Friction applied to the body if it is in motion.
Restitution : Measure of how much relative energy a body has after a collision. A value of 0
              means all energy is lost, 1 means no energy is lost. Can be considered how
              "bouncy" a body is.

## Hierarchy

* **PhysicsMaterial**

## Constructors

###  constructor

\+ **new PhysicsMaterial**(): *[PhysicsMaterial](_lumin_.physicsmaterial.md)*

Default constructor. Creates a material with light friction and no restitution.

**`priv`** none

**Returns:** *[PhysicsMaterial](_lumin_.physicsmaterial.md)*

\+ **new PhysicsMaterial**(`staticFriction`: number, `dynamicFriction`: number, `restitution`: number): *[PhysicsMaterial](_lumin_.physicsmaterial.md)*

Constructor

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`staticFriction` | number | Friction for resting bodies. |
`dynamicFriction` | number | Friction for moving bodies. |
`restitution` | number | Measure of the amount of energy the body has after a collision.  |

**Returns:** *[PhysicsMaterial](_lumin_.physicsmaterial.md)*

## Methods

###  getDynamicFriction

▸ **getDynamicFriction**(): *number*

Returns the dynamic friction.

**`priv`** none

**Returns:** *number*

dynamic friction

___

###  getRestitution

▸ **getRestitution**(): *number*

Returns the restitution.

**`priv`** none

**Returns:** *number*

restitution

___

###  getStaticFriction

▸ **getStaticFriction**(): *number*

Returns the static friction.

**`priv`** none

**Returns:** *number*

static friction

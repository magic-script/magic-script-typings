---
id: "_lumin_.physicsinitializationdata"
title: "PhysicsInitializationData"
sidebar_label: "PhysicsInitializationData"
---

Struct containing data used to initialize physics.

## Hierarchy

* **PhysicsInitializationData**

## Constructors

###  constructor

\+ **new PhysicsInitializationData**(): *[PhysicsInitializationData](_lumin_.physicsinitializationdata.md)*

**Returns:** *[PhysicsInitializationData](_lumin_.physicsinitializationdata.md)*

## Properties

###  bounceThreshold

• **bounceThreshold**: *number*

A velocity limit below which objects will not bounce. 2 is a good base value.

___

###  gravity

• **gravity**: *[number, number, number]*

Gravity vector, in m/s^2.

___

###  simulationRateFps

• **simulationRateFps**: *number*

Rate to run the simulation, in frames per second. Should be less
than the update/render rate.

___

###  solverType

• **solverType**: *[SolverType](../enums/_lumin_.physics.solvertype.md)*

Type of collision solver to use. If the type is kFastNormal or kFastFast,
setEnableCCD() can be called on a rigid body to enable CCD collisions for it.

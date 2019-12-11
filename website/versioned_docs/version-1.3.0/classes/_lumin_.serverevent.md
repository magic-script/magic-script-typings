---
id: "_lumin_.serverevent"
title: "ServerEvent"
sidebar_label: "ServerEvent"
---

Base class for all events sent from the Lumin Runtime Server
to client application Prisms.

## Hierarchy

* **ServerEvent**

  ↳ [AnimationBlendSetupEvent](_lumin_.animationblendsetupevent.md)

  ↳ [AnimationEventBase](_lumin_.animationeventbase.md)

  ↳ [AudioEvent](_lumin_.audioevent.md)

  ↳ [EyeTrackingEventData](_lumin_.eyetrackingeventdata.md)

  ↳ [InputEventData](_lumin_.inputeventdata.md)

  ↳ [ParticleEventData](_lumin_.particleeventdata.md)

  ↳ [PhysicsEventData](_lumin_.physicseventdata.md)

  ↳ [PrivilegeEvent](_lumin_.privilegeevent.md)

  ↳ [RayCastEventData](_lumin_.raycasteventdata.md)

  ↳ [ResourceEvent](_lumin_.resourceevent.md)

  ↳ [SelectionEventData](_lumin_.selectioneventdata.md)

  ↳ [SpriteAnimationEventData](_lumin_.spriteanimationeventdata.md)

  ↳ [SystemEventData](_lumin_.systemeventdata.md)

  ↳ [TransformAnimationEventData](_lumin_.transformanimationeventdata.md)

  ↳ [VideoEventData](_lumin_.videoeventdata.md)

  ↳ [VideoSubtitleEventData](_lumin_.videosubtitleeventdata.md)

  ↳ [VideoTimedTextEventData](_lumin_.videotimedtexteventdata.md)

  ↳ [WorldImageTrackingEventData](_lumin_.worldimagetrackingeventdata.md)

  ↳ [WorldMeshBlockEventData](_lumin_.worldmeshblockeventdata.md)

  ↳ [WorldPlaneCastEventData](_lumin_.worldplanecasteventdata.md)

  ↳ [WorldRayCastEventData](_lumin_.worldraycasteventdata.md)

## Constructors

###  constructor

\+ **new ServerEvent**(): *[ServerEvent](_lumin_.serverevent.md)*

**Returns:** *[ServerEvent](_lumin_.serverevent.md)*

## Methods

###  getPrismId

▸ **getPrismId**(): *bigint*

Returns the Prism ID of the target Prism.

**`priv`** none

**Returns:** *bigint*

the Prism ID of the target Prism.

___

###  isInputEventType

▸ **isInputEventType**(): *boolean*

Returns true if this is an input event (a subclass of InputEventData).

**`priv`** none

**Returns:** *boolean*

true if this is an input event

___

###  toString

▸ **toString**(): *string*

Returns a string representation of this event for debug purposes.

**`priv`** none

**Returns:** *string*

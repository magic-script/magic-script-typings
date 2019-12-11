---
id: "_lumin_.prismcontroller"
title: "PrismController"
sidebar_label: "PrismController"
---

A PrismController represents a section of an application's UI or behavior that is tied to
a specific Prism.

A single PrismController can be set directly on a Prism (the root prism controller).
It will receive event and update loop callbacks for that prism until it is detached or
the prism is deleted. Additional PrismControllers can be added to the root controller to
create a hierarchy of arbitrary depth. This allows re-usable components like a video player
to be added to an application with a single integration point:

```myRootPrismController->addChildController(videoPlayer)```

In the example above, PrismController eliminates the need for applications to manually
provide the videoPlayer component with onEvent and onUpdate callbacks.

When a child controller is added or removed while a prism is already attached, it
will receive an onAttachPrism or onDetachPrism callback, respectively, ensuring
that the sequence of callbacks a prism controller receive is always:

```
- onAttachPrism
- onEvent* (any number of calls)
- onUpdate* (any number of calls)
- onDetachPrism
```

Different prism controllers can be attached to the same Prism over time in
order to render different scenes within the same prism (e.g. a home navigation
scene vs. an application settings scene).

A typical sequence of callbacks is shown in the example below:

```
controllerA = std::make_shared<MyPrismController>()
prism->setPrismController(controllerA)
CALLBACK: controllerA->onAttachPrism
// --> event from Lumin
CALLBACK: controllerA->onEvent
...

// Time to show a completely different scene in this prism
controllerB = std::make_shared<MyOtherPrismController>()
prism->setPrismController(controllerB)
// Remove old scene
CALLBACK: controllerA->onDetachPrism
// Initialize new scene
CALLBACK: controllerB->onAttachPrism
// --> event from Lumin
CALLBACK: controllerB->onEvent
...
// Add a video player to the scene
videoPlayer = std::make_shared<VideoPlayerController>()
controllerB->addChildController(videoPlayer)
CALLBACK: videoPlayer->onAttachPrism
// --> event from Lumin
CALLBACK: videoPlayer->onEvent
CALLBACK: controllerB->onEvent
// --> prism is deleted (e.g. from secondary UI)
// (isPrismDeletePending() returns true during next 2 callbacks)
CALLBACK controllerB->onDetachPrism
CALLBACK videoPlayer->onDetachPrism
```

## Hierarchy

* **PrismController**

## Constructors

###  constructor

\+ **new PrismController**(`a_name?`: string): *[PrismController](_lumin_.prismcontroller.md)*

Constructor.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_name?` | string | `default = ""`<br/> - String used to identify this controller for diagnostics  |

**Returns:** *[PrismController](_lumin_.prismcontroller.md)*

## Methods

###  addChildController

▸ **addChildController**(`controller`: [PrismController](_lumin_.prismcontroller.md)): *void*

Adds a prism controller as a child.

It will receive all onEvent callbacks received by this controller (the parent).
If a prism is already attached, the child controller will also receive an
onAttachPrism callback.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`controller` | [PrismController](_lumin_.prismcontroller.md) | The child controller to add  |

**Returns:** *void*

___

###  deleteSceneGraph

▸ **deleteSceneGraph**(): *void*

Deletes the part of the scene graph controlled by this prism controller.

This is done by deleting the conroller's root node.

NOTE: Must be called on the main thread.

**`priv`** none

**Returns:** *void*

___

###  getEventSleepTime

▸ **getEventSleepTime**(): *number*

Returns the minimum event sleep time taking into account all descendent controllers.

This method will always return a value greater than zero. If a sleep time <= 0.f
was specified, this method will return MAX_CLIENT_SLEEP.

**`priv`** none

**Returns:** *number*

___

###  getName

▸ **getName**(): *string*

Returns the optional name for this PrismController (used for diagnostics).

**`priv`** none

**Returns:** *string*

___

###  getPrism

▸ **getPrism**(): *[Prism](_lumin_.prism.md)*

Returns the prism this controller is attached to or nullptr if detached.

**`priv`** none

**Returns:** *[Prism](_lumin_.prism.md)*

___

###  getRoot

▸ **getRoot**(): *[TransformNode](_lumin_.transformnode.md)*

Returns the root node for the segment of the scene graph managed by this controller.

It will be created the first time this method is called (once the prism is attached).
For non-UI controllers, this method should never be called and the root node will never
be created. For controllers attached directly to the Prism, this method will be
called internally and the controller root node will be added to the prism root node.

NOTE: Must be called on the main thread.

**`priv`** none

**Returns:** *[TransformNode](_lumin_.transformnode.md)*

___

###  isPrismDeletePending

▸ **isPrismDeletePending**(): *boolean*

Returns true if the attached client prism is in the process of being deleted.

Specifically, this method will return true during onDetachPrism callbacks that were
triggered by prism deletion.

**`priv`** none

**Returns:** *boolean*

___

###  onAttachPrism

▸ **onAttachPrism**(`prism`: [Prism](_lumin_.prism.md)): *void*

Override this method to initialize the Prism after this
controller has been attached.

At this stage, getPrism() and getRoot() will both return valid values.

Full scene graph initialization can be performed at this stage. The callback
will happen for child controllers first, so that all children will be fully
initialized before this method is called on the parent. Parent controllers can
then attach child controller scene graph segments as needed.

**`priv`** none

**Parameters:**

Name | Type |
------ | ------ |
`prism` | [Prism](_lumin_.prism.md) |

**Returns:** *void*

___

###  onDetachPrism

▸ **onDetachPrism**(`prism`: [Prism](_lumin_.prism.md)): *void*

Override this method to do any necessary cleanup before the
Prism is destroyed or attached to a different controller.

**`see`** onAttachPrism

**`see`** isPrismDeletePending

**`priv`** none

**Parameters:**

Name | Type |
------ | ------ |
`prism` | [Prism](_lumin_.prism.md) |

**Returns:** *void*

___

###  onEvent

▸ **onEvent**(`a_pEvent`: [ServerEvent](_lumin_.serverevent.md)): *boolean*

Override this method to react to incoming events

Note: This is triggered on the client main thread

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_pEvent` | [ServerEvent](_lumin_.serverevent.md) | Server Events |

**Returns:** *boolean*

true = Event has been consumed

___

###  onPreAttachPrism

▸ **onPreAttachPrism**(`prism`: [Prism](_lumin_.prism.md)): *void*

Override this method to initialize the Prism when this
controller is about to be attached.

NOTE: At this stage, getPrism() and getRoot() will both return nullptr.

The main purpose of this callback is to allow parent controllers to do
very basic initialization that child controllers may depend on (e.g. resizing
the prism itself for the root controller). For this reason, the callback will
happen for parent controllers first, followed by their children.

**`priv`** none

**Parameters:**

Name | Type |
------ | ------ |
`prism` | [Prism](_lumin_.prism.md) |

**Returns:** *void*

___

###  onUpdate

▸ **onUpdate**(`a_fDelta`: number): *void*

Override this method to get periodic callbacks on the client main thread

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_fDelta` | number | Time Delta since last frame  |

**Returns:** *void*

___

###  removeChildController

▸ **removeChildController**(`controller`: [PrismController](_lumin_.prismcontroller.md)): *void*

Removes the specified controller as a child.

If a prism is currently attached, the removed child controller will receive
an onDetachPrism callback.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`controller` | [PrismController](_lumin_.prismcontroller.md) | The child controller to remove  |

**Returns:** *void*

___

###  setEventSleepTime

▸ **setEventSleepTime**(`a_fSleepTime`: number): *void*

Set the Event Sleep Time
Sets The amount of time the client should sleep before firing
the updateloop callback. If no other event occured.

NOTE: The exact event sleep time used internally may differ from the value specified
      here but will always be less than or equal to it (within the allowed range).

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_fSleepTime` | number | 0 = sleep infinitely till an event wakes up  |

**Returns:** *void*

___

###  setRetainSceneGraph

▸ **setRetainSceneGraph**(`retainSceneGraph`: boolean): *void*

Sets whether the scene graph will be retained when this controller is detached
from its Prism.

This allows the scene graph to be reused if this controller is reattached to the
same prism again. Example use cases include paging between different scene
fragments, or handling a back navigation to show the previous scene again.

By default, the scene graph fragment managed by this controller will be deleted
on detach by deleting its root node.

NOTE: If the prism is in the process of being deleted when it is detached, the
scene graph will be deleted unconditionally (since it is about to be invalid).

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`retainSceneGraph` | boolean | true to retain the scene graph on detach or        false to delete it (by deleting its root node).  |

**Returns:** *void*
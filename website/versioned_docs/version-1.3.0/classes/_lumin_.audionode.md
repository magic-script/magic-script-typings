---
id: "_lumin_.audionode"
title: "AudioNode"
sidebar_label: "AudioNode"
---

## Hierarchy

  ↳ [TransformNode](_lumin_.transformnode.md)

  ↳ **AudioNode**

## Methods

###  addChild

▸ **addChild**(`a_pChild`: [Node](_lumin_.node.md)): *boolean*

*Inherited from [Node](_lumin_.node.md).[addChild](_lumin_.node.md#addchild)*

Adds a child to the current Node, removing it from its current parent.

A child can only have a single Parent

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_pChild` | [Node](_lumin_.node.md) | The Node to add as a child to this Node.  |

**Returns:** *boolean*

true if successful, false if failed

___

###  addMoveCallback

▸ **addMoveCallback**(`track?`: number): *void*

*Inherited from [TransformNode](_lumin_.transformnode.md).[addMoveCallback](_lumin_.transformnode.md#addmovecallback)*

Adds a client-side callback event to the move list. When the event is reached during the
animation playback, the ServerEventCallback function set in Client will be called
with an event TransformAnimationEventData.

**`priv`** none

**Parameters:**

Name | Type |
------ | ------ |
`track?` | number |

**Returns:** *void*

___

###  addToLayer

▸ **addToLayer**(`a_layer`: bigint): *void*

*Inherited from [Node](_lumin_.node.md).[addToLayer](_lumin_.node.md#addtolayer)*

Adds this node to the specified node layer.  Nodes can be members of multiple layers.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_layer` | bigint |   |

**Returns:** *void*

___

###  createSoundWithLoadedFile

▸ **createSoundWithLoadedFile**(`resourceID`: bigint, `autoDestroy?`: boolean, `dynamicDecode?`: boolean): *boolean*

Initializes the AudioNode for using the already loaded resource(keyed on resource ID)
Associates audio resource id with audio node.
Also, sets resource related properties.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`resourceID` | bigint | ID of the audio resource which is already created. |
`autoDestroy?` | boolean | `default = false`<br/> - If true, play the sound once and  delete the node. If false the audio                      node will stay until scenegraph is destroyed.                      It is good practice to remove the unused node sooner than later after                      it's not required. |
`dynamicDecode?` | boolean | `default = false`<br/> - true = The file resource is compressed and will be decoded when playing.                        false = The file\resource is an uncompressed PCM data.  |

**Returns:** *boolean*

bool - Returns true on success else, returns false.

___

###  createSoundWithStreamedFile

▸ **createSoundWithStreamedFile**(`resourceID`: bigint, `autoDestroy?`: boolean): *boolean*

Initializes the AudioNode for loading the audio file chunk at a time in memory.
Associates audio resource(file) with audio node. Also, sets resource related properties.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`resourceID` | bigint | resource id of sound resource |
`autoDestroy?` | boolean | `default = false`<br/> - If true, play the sound once and  delete the node. If false the audio node will                      stay until scenegraph is destroyed.                      It is good practice to remove the unused node sooner than later after it's not                      required.  |

**Returns:** *boolean*

bool - Returns true on success else, returns false.

___

###  createWithSound

▸ **createWithSound**(`sound`: [Sound](_lumin_.sound.md), `autoDestroy?`: boolean): *void*

**Parameters:**

Name | Type |
------ | ------ |
`sound` | [Sound](_lumin_.sound.md) |
`autoDestroy?` | boolean |

**Returns:** *void*

___

###  delayMove

▸ **delayMove**(`durationSecs`: number, `track?`: number): *void*

*Inherited from [TransformNode](_lumin_.transformnode.md).[delayMove](_lumin_.transformnode.md#delaymove)*

Adds a delay to the current move sequence.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`durationSecs` | number | How long to delay, in seconds. |
`track?` | number | `default = 0`<br/> which animation track to add the delay to.  |

**Returns:** *void*

___

###  findChild

▸ **findChild**(`name`: string): *[Node](_lumin_.node.md)*

*Inherited from [Node](_lumin_.node.md).[findChild](_lumin_.node.md#findchild)*

Find the first named child in the node hierarchy, including this Node.

Does a breadth-first search of the child node hierarchy
for the specified named Node and will return the first encountered match,
or nullptr if no named Node found.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The name to search for.  |

**Returns:** *[Node](_lumin_.node.md)*

___

###  findChildren

▸ **findChildren**(`a_type`: number, `a_bExactType?`: boolean, `a_bIncludeSelf?`: boolean): *Array‹[Node](_lumin_.node.md)›*

*Inherited from [Node](_lumin_.node.md).[findChildren](_lumin_.node.md#findchildren)*

Does a breadth-first search of the child node hierarchy
for the specified Node type.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_type` | number | The type of Node to find in the child hierarchy. |
`a_bExactType?` | boolean | `default = false`<br/> Flag to indicate if the child node must be the exact type or can be derived from the type (default false). |
`a_bIncludeSelf?` | boolean | `default = false`<br/> Flag to indicate if the search should include this Node (default false). |

**Returns:** *Array‹[Node](_lumin_.node.md)›*

A vector of Node pointers containing the results.

___

###  findParent

▸ **findParent**(`a_type`: number, `a_bExactType?`: boolean): *[Node](_lumin_.node.md)*

*Inherited from [Node](_lumin_.node.md).[findParent](_lumin_.node.md#findparent)*

Searches up the tree parentage for the specific Node type.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_type` | number | The type of Node to find in the parent hierarchy. |
`a_bExactType?` | boolean | `default = false`<br/> Flag to indicate if the parent node must be the exact type or can be derived from the type (default false). |

**Returns:** *[Node](_lumin_.node.md)*

The parent node, if found, null if not found.

___

###  getAABB

▸ **getAABB**(): *[AABB](_lumin_.math.aabb.md)*

*Inherited from [Node](_lumin_.node.md).[getAABB](_lumin_.node.md#getaabb)*

Get the AABB of this Node's full hierarchy, including all descendants,
with all Node transforms applied.

The returned AABB encompasses this Node and all descendant Nodes
and is aligned to the coordinate system the Node resides within,
i.e. the Node's parent coordinate system.
Note, the returned AABB is not guaranteed to be the minimal,
tightest fitting AABB to encompass the Node's descendant hierarchy,
but it will fully enlose the Node's hierarchy.

**`priv`** none

**Returns:** *[AABB](_lumin_.math.aabb.md)*

The bounding box

___

###  getAnchorPosition

▸ **getAnchorPosition**(): *[number, number, number]*

*Inherited from [Node](_lumin_.node.md).[getAnchorPosition](_lumin_.node.md#getanchorposition)*

Returns the anchor position of the node.

**`priv`** none

**Returns:** *[number, number, number]*

The anchor position.

___

###  getChild

▸ **getChild**(`a_iIndex`: number): *[Node](_lumin_.node.md)*

*Inherited from [Node](_lumin_.node.md).[getChild](_lumin_.node.md#getchild)*

Gets the n'th child from this Node's children

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_iIndex` | number | The index of the child. |

**Returns:** *[Node](_lumin_.node.md)*

Child Node

___

###  getChildCount

▸ **getChildCount**(): *number*

*Inherited from [Node](_lumin_.node.md).[getChildCount](_lumin_.node.md#getchildcount)*

Gets the number of immediate children this Node has

**`priv`** none

**Returns:** *number*

Count of immediate child Nodes

___

###  getCurrentPrismTransform

▸ **getCurrentPrismTransform**(): *[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]*

*Inherited from [Node](_lumin_.node.md).[getCurrentPrismTransform](_lumin_.node.md#getcurrentprismtransform)*

Get the Cached Prism Transform of this Node

**`priv`** none

**Returns:** *[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]*

Transform Matrix

___

###  getCurrentWorldTransform

▸ **getCurrentWorldTransform**(): *[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]*

*Inherited from [Node](_lumin_.node.md).[getCurrentWorldTransform](_lumin_.node.md#getcurrentworldtransform)*

Get the Cached World Transform of this Node

**`priv`** none

**Returns:** *[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]*

Transform Matrix

___

###  getCursorHoverState

▸ **getCursorHoverState**(): *[CursorHoverState](../enums/_lumin_.cursorhoverstate.md)*

*Inherited from [Node](_lumin_.node.md).[getCursorHoverState](_lumin_.node.md#getcursorhoverstate)*

Get the cursor hover state for this Node.

**`priv`** none

**Returns:** *[CursorHoverState](../enums/_lumin_.cursorhoverstate.md)*

the cursor state.

___

###  getLocalAABB

▸ **getLocalAABB**(): *[AABB](_lumin_.math.aabb.md)*

*Inherited from [Node](_lumin_.node.md).[getLocalAABB](_lumin_.node.md#getlocalaabb)*

Get the local AABB of this Node only, not including children,
aligned to this Node's local coordinate system.

A local AABB of math::AABB::EMPTY indicates the Node either
has no visual information or that local AABB is not supported
for the Node.

Note:  The local AABB for ModelNodes is currently not supported
and will report math::AABB::EMPTY.

**`priv`** none

**Returns:** *[AABB](_lumin_.math.aabb.md)*

The bounding box.

___

###  getLocalPosition

▸ **getLocalPosition**(): *[number, number, number]*

*Inherited from [TransformNode](_lumin_.transformnode.md).[getLocalPosition](_lumin_.transformnode.md#getlocalposition)*

Get the Local Position of this Node

**`priv`** none

**Returns:** *[number, number, number]*

Position

___

###  getLocalRotation

▸ **getLocalRotation**(): *[number, number, number, number]*

*Inherited from [TransformNode](_lumin_.transformnode.md).[getLocalRotation](_lumin_.transformnode.md#getlocalrotation)*

Get the Local Rotation of this Node

**`priv`** none

**Returns:** *[number, number, number, number]*

Rotation

___

###  getLocalScale

▸ **getLocalScale**(): *[number, number, number]*

*Inherited from [TransformNode](_lumin_.transformnode.md).[getLocalScale](_lumin_.transformnode.md#getlocalscale)*

Get the Local Scale of this Node

**`priv`** none

**Returns:** *[number, number, number]*

Scale

___

###  getLocalTransform

▸ **getLocalTransform**(): *[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]*

*Inherited from [Node](_lumin_.node.md).[getLocalTransform](_lumin_.node.md#getlocaltransform)*

Get the Local Transform of this Node

**`priv`** none

**Returns:** *[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]*

Transform Matrix

___

###  getName

▸ **getName**(): *string*

*Inherited from [Node](_lumin_.node.md).[getName](_lumin_.node.md#getname)*

Get the name of the Node.

This call returns EMPTY_STRING if the Node's
name has not been set.

**`priv`** none

**Returns:** *string*

The name of the Node, if set.

___

###  getNodeId

▸ **getNodeId**(): *bigint*

*Inherited from [Node](_lumin_.node.md).[getNodeId](_lumin_.node.md#getnodeid)*

Gets the Node Id of this Node

Every Node is assigned a unique ID per Prism

**`priv`** none

**Returns:** *bigint*

Node id of the current Node

___

###  getParent

▸ **getParent**(): *[Node](_lumin_.node.md)*

*Inherited from [Node](_lumin_.node.md).[getParent](_lumin_.node.md#getparent)*

Gets this Node's immediate parent

**`priv`** none

**Returns:** *[Node](_lumin_.node.md)*

Parent Node, nullptr = no parent

___

###  getParentedBoneName

▸ **getParentedBoneName**(): *string*

*Inherited from [Node](_lumin_.node.md).[getParentedBoneName](_lumin_.node.md#getparentedbonename)*

When parented to a parents bone with setParentedBoneName

**`priv`** none

**Returns:** *string*

Parents bone name we are attached to

___

###  getPrismId

▸ **getPrismId**(): *bigint*

*Inherited from [Node](_lumin_.node.md).[getPrismId](_lumin_.node.md#getprismid)*

Returns the id of the prism the node belongs to.

**`priv`** none

**Returns:** *bigint*

the prism id (0 = invalid prism)

___

###  getPrismPosition

▸ **getPrismPosition**(): *[number, number, number]*

*Inherited from [TransformNode](_lumin_.transformnode.md).[getPrismPosition](_lumin_.transformnode.md#getprismposition)*

Get the Prism Position of this Node

**`priv`** none

**Returns:** *[number, number, number]*

Position

___

###  getRigidBody

▸ **getRigidBody**(): *[PhysicsRigidBody](_lumin_.physicsrigidbody.md)*

*Inherited from [TransformNode](_lumin_.transformnode.md).[getRigidBody](_lumin_.transformnode.md#getrigidbody)*

Returns the PhysicsRigidBody attached to the node, if the node is participating in the physics
system.

**`priv`** none

**Returns:** *[PhysicsRigidBody](_lumin_.physicsrigidbody.md)*

the rigid body

___

###  getRoot

▸ **getRoot**(): *[RootNode](_lumin_.rootnode.md)*

*Inherited from [Node](_lumin_.node.md).[getRoot](_lumin_.node.md#getroot)*

Gets the root node of the node tree this node belongs to.

**`priv`** none

**Returns:** *[RootNode](_lumin_.rootnode.md)*

The root node, or nullptr if none.

___

###  getSoundPitch

▸ **getSoundPitch**(): *number*

Get sound pitch.

**Returns:** *number*

- Reference to a float to output current value.

___

###  getSoundState

▸ **getSoundState**(): *[AudioState](../enums/_lumin_.audiostate.md)*

Gets the current state of the audio, see enum AudioState.

**Returns:** *[AudioState](../enums/_lumin_.audiostate.md)*

- Output parameter where the audio state will be stored.

___

###  getSoundVolumeLinear

▸ **getSoundVolumeLinear**(): *number*

Gets the current audio volume.

**Returns:** *number*

- Reference to a float to output current value.

___

###  getSpatialSoundDirectSendLevels

▸ **getSpatialSoundDirectSendLevels**(`channel`: number): *[SpatialSoundSendLevels](_lumin_.spatialsoundsendlevels.md)*

Gets the direct send levels for one channel of a sound output.

Multi-channel sounds require the direct send levels to be read
individually for each channel by calling this function once for each
channel. For mono sounds use channel = 0. For stereo sounds use
channel = 0 for left and channel = 1 for right.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`channel` | number | selects the channel whose direct send levels are being read |

**Returns:** *[SpatialSoundSendLevels](_lumin_.spatialsoundsendlevels.md)*

- SpatialSoundSendLevels struct to return the levels

___

###  getSpatialSoundDirection

▸ **getSpatialSoundDirection**(`channel`: number): *[number, number, number, number]*

 Get sound direction of a given audio channel.
 Direction is relative to audio node's local orientation.

 @param channel - Channel index(zero based).
 @return - A quaternion (glm::quat) which gets populated by direction
              of the sound for the given channel.

**Parameters:**

Name | Type |
------ | ------ |
`channel` | number |

**Returns:** *[number, number, number, number]*

___

###  getSpatialSoundDistanceProperties

▸ **getSpatialSoundDistanceProperties**(`channel`: number): *[SpatialSoundDistanceProperties](_lumin_.spatialsounddistanceproperties.md)*

 Get spatial sound distance parameters for a given channel.

 @param channel - Channel index(zero based).
 @return - Reference to distance properties struct.
              See struct SpatialSoundDistanceProperties

**Parameters:**

Name | Type |
------ | ------ |
`channel` | number |

**Returns:** *[SpatialSoundDistanceProperties](_lumin_.spatialsounddistanceproperties.md)*

___

###  getSpatialSoundEnable

▸ **getSpatialSoundEnable**(): *boolean*

Query if spatial sound is enabled or disabled.

**Returns:** *boolean*

- true, Enabled
                         false, Disabled

___

###  getSpatialSoundPosition

▸ **getSpatialSoundPosition**(`channel`: number): *[number, number, number]*

 Get position of the given audio channel. Position is relative to audio node's
 local position.

 @param channel - Channel index(zero based).
 @return - A glm::vec3 which gets populated by the offset
              of channels position.

**Parameters:**

Name | Type |
------ | ------ |
`channel` | number |

**Returns:** *[number, number, number]*

___

###  getSpatialSoundRadiationProperties

▸ **getSpatialSoundRadiationProperties**(`channel`: number): *[SpatialSoundRadiationProperties](_lumin_.spatialsoundradiationproperties.md)*

 Get spatial sound radiation parameters for a given channel.

 @param channel - Channel index(zero based).
 @return - Reference to radiation properties struct.
              See struct SpatialSoundRadiationProperties

**Parameters:**

Name | Type |
------ | ------ |
`channel` | number |

**Returns:** *[SpatialSoundRadiationProperties](_lumin_.spatialsoundradiationproperties.md)*

___

###  getSpatialSoundRoomSendLevels

▸ **getSpatialSoundRoomSendLevels**(`channel`: number): *[SpatialSoundSendLevels](_lumin_.spatialsoundsendlevels.md)*

Gets the room send levels for one channel of a sound output.

Multi-channel sounds require the room send levels to be read
individually for each channel by calling this function once for each
channel. For mono sounds use channel = 0. For stereo sounds use
channel = 0 for left and channel = 1 for right.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`channel` | number | selects the channel whose room send levels are being read |

**Returns:** *[SpatialSoundSendLevels](_lumin_.spatialsoundsendlevels.md)*

- SpatialSoundSendLevels struct to return the levels

___

###  getStreamedFileOffset

▸ **getStreamedFileOffset**(): *number*

Gets the currently set starting point for playback of a streamed-file sound.

**Returns:** *number*

- Reference to uint32_t to output the current value of offset.

___

###  getWorldPosition

▸ **getWorldPosition**(): *[number, number, number]*

*Inherited from [TransformNode](_lumin_.transformnode.md).[getWorldPosition](_lumin_.transformnode.md#getworldposition)*

Get the World Position of this Node

**`priv`** none

**Returns:** *[number, number, number]*

Position

___

###  isInLayer

▸ **isInLayer**(`a_layer`: bigint): *boolean*

*Inherited from [Node](_lumin_.node.md).[isInLayer](_lumin_.node.md#isinlayer)*

Checks to see if node subscribes to the specified node layer.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_layer` | bigint | The layer to test if this node is a member of. |

**Returns:** *boolean*

True if this node subscribes to the specified layer.

___

###  isInSubtree

▸ **isInSubtree**(`pParent`: [Node](_lumin_.node.md)): *boolean*

*Inherited from [Node](_lumin_.node.md).[isInSubtree](_lumin_.node.md#isinsubtree)*

Determines if this Node is within the subtree.

**`priv`** none

**Parameters:**

Name | Type |
------ | ------ |
`pParent` | [Node](_lumin_.node.md) |

**Returns:** *boolean*

true if this Node is within the subtree, false if not.

___

###  isSkipRaycast

▸ **isSkipRaycast**(): *boolean*

*Inherited from [Node](_lumin_.node.md).[isSkipRaycast](_lumin_.node.md#isskipraycast)*

Returns the skip raycast state of the node.

**`priv`** none

**Returns:** *boolean*

True if the node is skipped during raycasting.

___

###  isSoundLooping

▸ **isSoundLooping**(): *boolean*

Queries if the sound is looping or not.

**Returns:** *boolean*

- true, if sound is looping.
                         false, if not.

___

###  isSoundMuted

▸ **isSoundMuted**(): *boolean*

Check if sound is muted or not.

**Returns:** *boolean*

- Reference to a bool to output current value.
              true - muted
              false - not muted

___

###  isTriggerable

▸ **isTriggerable**(): *boolean*

*Inherited from [Node](_lumin_.node.md).[isTriggerable](_lumin_.node.md#istriggerable)*

Returns true if this node should handle trigger presses directly.

**Returns:** *boolean*

true if this node will handle trigger presses directly when focused,
        false if trigger press will instead enter prism placement mode.

___

###  isVisibilityInherited

▸ **isVisibilityInherited**(): *boolean*

*Inherited from [Node](_lumin_.node.md).[isVisibilityInherited](_lumin_.node.md#isvisibilityinherited)*

Returns whether this Node's visibility is inherited by its children or not.

**`priv`** none

**Returns:** *boolean*

True if the Node's visiblity is inherited.

___

###  isVisible

▸ **isVisible**(): *boolean*

*Inherited from [Node](_lumin_.node.md).[isVisible](_lumin_.node.md#isvisible)*

Returns the visibility state of the node. Note that only the local state is checked, the
effect of a parent's visibility is ignored.

**`priv`** none

**Returns:** *boolean*

True if the Node is visible.

___

###  isVisibleInPrism

▸ **isVisibleInPrism**(): *boolean*

*Inherited from [Node](_lumin_.node.md).[isVisibleInPrism](_lumin_.node.md#isvisibleinprism)*

Returns the visibility of the Node in the hierarchy based on self visibility and any
potential inherited visibility.

**`priv`** none

**Returns:** *boolean*

True if the Node is visible in the Prism.

___

###  pauseSound

▸ **pauseSound**(): *void*

Pause the sound if already playing.

**Returns:** *void*

___

###  releaseOutputStreamBuffer

▸ **releaseOutputStreamBuffer**(): *boolean*

Lets the audio service know that the buffer is filled and ready.

**Returns:** *boolean*

bool - Returns true on success else false.

▸ **releaseOutputStreamBuffer**(`streamId`: bigint): *boolean*

Lets the audio service know that the buffer is filled and ready.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`streamId` | bigint | OutputStream's  Id whose buffer is being released.  |

**Returns:** *boolean*

bool - Returns true on success else false.

___

###  removeChild

▸ **removeChild**(`a_pChild`: [Node](_lumin_.node.md)): *void*

*Inherited from [Node](_lumin_.node.md).[removeChild](_lumin_.node.md#removechild)*

Remove a child from the current Node

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_pChild` | [Node](_lumin_.node.md) | The child Node to remove.  |

**Returns:** *void*

___

###  removeFromLayer

▸ **removeFromLayer**(`a_layer`: bigint): *void*

*Inherited from [Node](_lumin_.node.md).[removeFromLayer](_lumin_.node.md#removefromlayer)*

Removes this node from the specified node layer.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_layer` | bigint | The layer this node will be removed from.  |

**Returns:** *void*

___

###  resumeSound

▸ **resumeSound**(): *void*

Resume the sound if already playing and is paused.

**Returns:** *void*

___

###  setAnchorPosition

▸ **setAnchorPosition**(`a_position`: [number, number, number]): *void*

*Inherited from [TransformNode](_lumin_.transformnode.md).[setAnchorPosition](_lumin_.transformnode.md#setanchorposition)*

Sets the anchor position of the Node's transform. Rotations, scaling, and translations of the
transform will take place around this point. Changing the anchor point will recalculate
the transform to the new anchor point.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_position` | [number, number, number] | Anchor position. This is relative to the default 0,0,0 position of the                   transform.  |

**Returns:** *void*

___

###  setCursorHoverState

▸ **setCursorHoverState**(`state`: [CursorHoverState](../enums/_lumin_.cursorhoverstate.md)): *void*

*Inherited from [Node](_lumin_.node.md).[setCursorHoverState](_lumin_.node.md#setcursorhoverstate)*

Set the cursor hover state for this Node.

Setting this will set the cursor state when this Node
or any descendant Nodes, that are not explicitly set,
are hovered over.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`state` | [CursorHoverState](../enums/_lumin_.cursorhoverstate.md) | The cursor state  |

**Returns:** *void*

___

###  setLocalPosition

▸ **setLocalPosition**(`aPos`: [number, number, number]): *void*

*Inherited from [TransformNode](_lumin_.transformnode.md).[setLocalPosition](_lumin_.transformnode.md#setlocalposition)*

Set the local position of this Node

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`aPos` | [number, number, number] | new position  |

**Returns:** *void*

___

###  setLocalRotation

▸ **setLocalRotation**(`aRot`: [number, number, number, number]): *void*

*Inherited from [TransformNode](_lumin_.transformnode.md).[setLocalRotation](_lumin_.transformnode.md#setlocalrotation)*

Set the local rotation of this Node

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`aRot` | [number, number, number, number] | new rotation  |

**Returns:** *void*

___

###  setLocalScale

▸ **setLocalScale**(`aScale`: [number, number, number]): *void*

*Inherited from [TransformNode](_lumin_.transformnode.md).[setLocalScale](_lumin_.transformnode.md#setlocalscale)*

Set the local scale of this Node

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`aScale` | [number, number, number] | new scale  |

**Returns:** *void*

___

###  setLocalTransform

▸ **setLocalTransform**(`aTransform`: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]): *void*

*Inherited from [TransformNode](_lumin_.transformnode.md).[setLocalTransform](_lumin_.transformnode.md#setlocaltransform)*

Set the local transform of this Node

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`aTransform` | [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] | transform matrix  |

**Returns:** *void*

___

###  setName

▸ **setName**(`a_name`: string): *boolean*

*Inherited from [Node](_lumin_.node.md).[setName](_lumin_.node.md#setname)*

Set the name of the Node

By default a Node has no name.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_name` | string | The new name of the Node. |

**Returns:** *boolean*

true if the name of the Node was successfully set, false otherwise.

___

###  setParentedBoneName

▸ **setParentedBoneName**(`a_boneName`: string): *boolean*

*Inherited from [Node](_lumin_.node.md).[setParentedBoneName](_lumin_.node.md#setparentedbonename)*

Set the bone in the parent by name that this child will attach to
This node must have a parent and the parent must be of type ModelNode.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_boneName` | string | bone name to attach to  |

**Returns:** *boolean*

true if successful, false if failed

___

###  setSkipRaycast

▸ **setSkipRaycast**(`a_skipRaycast`: boolean, `a_propagateToChildren?`: boolean): *void*

*Inherited from [Node](_lumin_.node.md).[setSkipRaycast](_lumin_.node.md#setskipraycast)*

Sets the skip raycast state of the node.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_skipRaycast` | boolean | Raycast skip flag. |
`a_propagateToChildren?` | boolean | `default = false`<br/> Flag to also set the raycast state of any children  |

**Returns:** *void*

___

###  setSoundLooping

▸ **setSoundLooping**(`isLooping`: boolean): *void*

Sets the mode of playing audio in repeat mode. If enabled, audio will play from start
after reaching the end, until disabled.
When audio is created, the default is disabled.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isLooping` | boolean | true enables loop mode.               false disables loop mode.  |

**Returns:** *void*

___

###  setSoundMute

▸ **setSoundMute**(`isMuted`: boolean): *void*

Mute or unmute the sound.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isMuted` | boolean | true, mute the sound.                false, unmute.  |

**Returns:** *void*

___

###  setSoundPitch

▸ **setSoundPitch**(`pitch`: number): *void*

Sets sound pitch.

  The range of the pitch is 0.5 to 2.0, with 0.5 being one octave down
  and 2.0 being one octave up (i.e., the pitch is a frequency multiple).
  A pitch of 1.0 is the default and means no change.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pitch` | number | Pitch value to set. Range 0.5 t0 2.0  |

**Returns:** *void*

___

###  setSoundVolumeLinear

▸ **setSoundVolumeLinear**(`volume`: number): *void*

Sets the audio volume.

 The range of the volume is 0 to 8, with 0 for silence,
 1 for unity gain, and 8 for 8x gain.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`volume` | number | Volume value to set. Range 0.0f to 8.0f  |

**Returns:** *void*

___

###  setSpatialSoundDirectSendLevels

▸ **setSpatialSoundDirectSendLevels**(`channel`: number, `channelSendlevels`: [SpatialSoundSendLevels](_lumin_.spatialsoundsendlevels.md)): *void*

Sets the direct send levels for one channel of a sound output.

When 3D audio processing is enabled for a sound output (see
setSpatialSoundEnabled) this function sets the send
levels for the direct component of the sound, i.e., the audio mix
for the the part of the sound not affected by room acoustics.
Multi-channel sounds require the direct send levels to be set
individually for each channel by calling this function once for each
channel. For mono sounds use channel = 0. For stereo sounds use
channel = 0 for left and channel = 1 for right.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`channel` | number | selects the channel whose direct send levels are being set |
`channelSendlevels` | [SpatialSoundSendLevels](_lumin_.spatialsoundsendlevels.md) | SpatialSoundSendLevels struct to set the levels  |

**Returns:** *void*

___

###  setSpatialSoundDirection

▸ **setSpatialSoundDirection**(`channel`: number, `channelDirection`: [number, number, number, number]): *void*

Set the sound direction of a given audio channel.
Effective only if spatial sound is enabled (setSpatialSoundEnable) for an audio node.
The Direction is relative to this nodes local orientation.
By default that is, if this API not called then, the direction is same
as the the parent nodes orientation.
Will change the direction even if the audio clip is already playing.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`channel` | number | Channel index(zero based). |
`channelDirection` | [number, number, number, number] | A quaternion (glm::quat) specifying the direction of the sound for the given channel                          relative to the node's local orientation.  |

**Returns:** *void*

___

###  setSpatialSoundDistanceProperties

▸ **setSpatialSoundDistanceProperties**(`channel`: number, `channelProperties`: [SpatialSoundDistanceProperties](_lumin_.spatialsounddistanceproperties.md)): *void*

 Set spatial sound distance parameters for a given channel.

 @param channel - Channel index(zero based).
 @param channelProperties - spatial sound distance parameters, See struct SpatialSoundDistanceProperties

**Parameters:**

Name | Type |
------ | ------ |
`channel` | number |
`channelProperties` | [SpatialSoundDistanceProperties](_lumin_.spatialsounddistanceproperties.md) |

**Returns:** *void*

___

###  setSpatialSoundEnable

▸ **setSpatialSoundEnable**(`isEnabled`: boolean): *void*

Enable\Disable the capability for spatial sound.
If enabled, setSpatialSoundPosition
must be called for positional sound to be effective.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isEnabled` | boolean | true, Enable                    false, Disable  |

**Returns:** *void*

___

###  setSpatialSoundPosition

▸ **setSpatialSoundPosition**(`channel`: number, `channelPosition`: [number, number, number]): *void*

Set the position of a given audio channel relative to this nodes local position.
Effective only if spatial sound is enabled explicitly for an audio node.
Will change the position even if the audio clip is already playing.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`channel` | number | Channel index(zero based). |
`channelPosition` | [number, number, number] | A glm::vec3 specifying the offset of channel position                          relative to the node's local position.    |

**Returns:** *void*

___

###  setSpatialSoundRadiationProperties

▸ **setSpatialSoundRadiationProperties**(`channel`: number, `channelProperties`: [SpatialSoundRadiationProperties](_lumin_.spatialsoundradiationproperties.md)): *void*

 Set spatial sound radiation parameters for a given channel.

 @param channel - Channel index(zero based).
 @param channelProperties - spatial sound radiation parameters, See struct SpatialSoundRadiationProperties

**Parameters:**

Name | Type |
------ | ------ |
`channel` | number |
`channelProperties` | [SpatialSoundRadiationProperties](_lumin_.spatialsoundradiationproperties.md) |

**Returns:** *void*

___

###  setSpatialSoundRoomSendLevels

▸ **setSpatialSoundRoomSendLevels**(`channel`: number, `channelSendLevels`: [SpatialSoundSendLevels](_lumin_.spatialsoundsendlevels.md)): *void*

Sets the room send levels for one channel of a sound output.

When 3D audio processing is enabled for a sound output (see
setSpatialSoundEnabled) this function sets the send
levels for the room component of the sound, i.e., the audio mix
for the the part of the sound that's affected by room acoustics.
Multi-channel sounds require the room send levels to be set
individually for each channel by calling this function once for each
channel. For mono sounds use channel = 0. For stereo sounds use
channel = 0 for left and channel = 1 for right.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`channel` | number | selects the channel whose room send levels are being set |
`channelSendLevels` | [SpatialSoundSendLevels](_lumin_.spatialsoundsendlevels.md) | SpatialSoundSendLevels struct to set the levels  |

**Returns:** *void*

___

###  setStreamedFileOffset

▸ **setStreamedFileOffset**(`offsetMilliSec`: number): *void*

Sets the starting point for playback of a streamed-file sound.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`offsetMilliSec` | number | Value for offset in milliseconds.  |

**Returns:** *void*

___

###  setTriggerable

▸ **setTriggerable**(`a_triggerable`: boolean): *void*

*Inherited from [Node](_lumin_.node.md).[setTriggerable](_lumin_.node.md#settriggerable)*

Sets whether this node should handle trigger presses directly.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_triggerable` | boolean | true if this node should handle trigger presses directly when focused,                      false if trigger press should instead enter prism placement mode.  |

**Returns:** *void*

___

###  setVisibilityInherited

▸ **setVisibilityInherited**(`a_inherit`: boolean): *void*

*Inherited from [Node](_lumin_.node.md).[setVisibilityInherited](_lumin_.node.md#setvisibilityinherited)*

Flags that the visibility state of this node should be inherited by its children. This does
not change a child's visibility set by setVisible. A visibility of false will take precedence
over a visibility of true. The tables below show the draw result for various combinations of
node visibility and inheritance.

             visible     inherit     drawn
    node  :   false       true        no
    child :   true          x         no

             visible     inherit     drawn
    node  :   false       false       no
    child :   true          x         yes

             visible     inherit     drawn
    node  :   true        true        yes
    child :   false         x         no

             visible     inherit     drawn
    node  :   true        false       yes
    child :   false         x         no

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_inherit` | boolean | Flag that this node's children should inherit its visibility.  |

**Returns:** *void*

___

###  setVisible

▸ **setVisible**(`a_visible`: boolean, `a_propagateToChildren?`: boolean): *void*

*Inherited from [Node](_lumin_.node.md).[setVisible](_lumin_.node.md#setvisible)*

Sets the visibility state of the node.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_visible` | boolean | Visibility flag |
`a_propagateToChildren?` | boolean | `default = false`<br/> Flag to also set the visibility state of any children  |

**Returns:** *void*

___

###  startSound

▸ **startSound**(): *void*

Plays the sound from the beginning.

**Returns:** *void*

___

###  stopSound

▸ **stopSound**(): *void*

Stops the sound if already playing.

**Returns:** *void*

___

###  stopTransformAnimations

▸ **stopTransformAnimations**(): *void*

*Inherited from [TransformNode](_lumin_.transformnode.md).[stopTransformAnimations](_lumin_.transformnode.md#stoptransformanimations)*

Stops all current property animations.

**`priv`** none

**Returns:** *void*

___

### `Static` Delete

▸ **Delete**(`node`: [Node](_lumin_.node.md)): *void*

*Inherited from [Node](_lumin_.node.md).[Delete](_lumin_.node.md#static-delete)*

Client-side only: this static function is used to delete a
node with its Prism's deleteNode function.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`node` | [Node](_lumin_.node.md) | is the node to delete  |

**Returns:** *void*

___

### `Static` playSound

▸ **playSound**(`prism`: [Prism](_lumin_.prism.md), `sound`: [Sound](_lumin_.sound.md)): *boolean*

Fire and forget API.
Creates an AudioNode with the properties from the given Sound and sets a callback to destroy the node when it has finished playing.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prism` | [Prism](_lumin_.prism.md) | Prism instance that the created node will belong to. |
`sound` | [Sound](_lumin_.sound.md) | Sound instance that contains audio properties for the created AudioNode. |

**Returns:** *boolean*

True if the audio node was successfully created, added to the scene and set to delete on play end.

▸ **playSound**(`prism`: [Prism](_lumin_.prism.md), `sound`: [Sound](_lumin_.sound.md), `pos`: [number, number, number]): *boolean*

Fire and forget API.
Creates an AudioNode with the properties from the given Sound and sets a callback to destroy the node when it has finished playing.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prism` | [Prism](_lumin_.prism.md) | Prism instance that the created node will belong to. |
`sound` | [Sound](_lumin_.sound.md) | Sound instance that contains audio properties for the created AudioNode. |
`pos` | [number, number, number] | Position to set to the created AudioNode. |

**Returns:** *boolean*

True if the audio node was successfully created, added to the scene and set to delete on play end.

▸ **playSound**(`prism`: [Prism](_lumin_.prism.md), `soundName`: string): *boolean*

Fire and forget API.
Creates an AudioNode with the properties from the given Sound and sets a callback to destroy the node when it has finished playing.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prism` | [Prism](_lumin_.prism.md) | Prism instance that the created node will belong to. |
`soundName` | string | name of a Sound instance that contains audio properties for the created AudioNode. |

**Returns:** *boolean*

True if the audio node was successfully created, added to the scene and set to delete on play end.

▸ **playSound**(`prism`: [Prism](_lumin_.prism.md), `soundName`: string, `pos`: [number, number, number]): *boolean*

Fire and forget API.
Creates an AudioNode with the properties from the given Sound and sets a callback to destroy the node when it has finished playing.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prism` | [Prism](_lumin_.prism.md) | Prism instance that the created node will belong to. |
`soundName` | string | name of a Sound instance that contains audio properties for the created AudioNode. |
`pos` | [number, number, number] | Position to set to the created AudioNode. |

**Returns:** *boolean*

True if the audio node was successfully created, added to the scene and set to delete on play end.

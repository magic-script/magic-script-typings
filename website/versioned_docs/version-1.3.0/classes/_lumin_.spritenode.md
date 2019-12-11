---
id: "_lumin_.spritenode"
title: "SpriteNode"
sidebar_label: "SpriteNode"
---

Node used to play a sprite animation from a TexturePackResource.

## Hierarchy

  ↳ [RenderNode](_lumin_.rendernode.md)

  ↳ **SpriteNode**

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

###  enableVisualState

▸ **enableVisualState**(`value`: boolean): *void*

*Inherited from [RenderNode](_lumin_.rendernode.md).[enableVisualState](_lumin_.rendernode.md#enablevisualstate)*

Enable//Disable the Prism Visual state changes

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | boolean | Enable/Disable the state changing  |

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

###  getColor

▸ **getColor**(): *[number, number, number, number]*

*Inherited from [RenderNode](_lumin_.rendernode.md).[getColor](_lumin_.rendernode.md#getcolor)*

Get the custom color, which is by default white: { 1, 1, 1, 1 }.

**`priv`** none

**Returns:** *[number, number, number, number]*

The color.

___

###  getCurrentFrame

▸ **getCurrentFrame**(): *number*

Retrieve the current frame the sprite is currently set to.

**`priv`** none

**Returns:** *number*

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

###  getFrameCount

▸ **getFrameCount**(): *number*

Retrieve the total number of frames in the sprites.

**`priv`** none

**Returns:** *number*

___

###  getFrameDuration

▸ **getFrameDuration**(): *number*

Retrieve the duration of an individual frame.

**`priv`** none

**Returns:** *number*

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

###  getPlaybackOrder

▸ **getPlaybackOrder**(): *[PlaybackOrder](../enums/_lumin_.animation.playbackorder.md)*

Accessor function to retrieve the current PlaybackOrder.

**`priv`** none

**Returns:** *[PlaybackOrder](../enums/_lumin_.animation.playbackorder.md)*

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

###  getRenderingLayer

▸ **getRenderingLayer**(): *bigint*

*Inherited from [RenderNode](_lumin_.rendernode.md).[getRenderingLayer](_lumin_.rendernode.md#getrenderinglayer)*

Get the rendering layer of this node.

**`return:`** the uint16_t value of the layer.

**`priv`** none

**Returns:** *bigint*

___

###  getRepeatCount

▸ **getRepeatCount**(): *number*

Retrieve the number of iterations remaining.

**`priv`** none

**Returns:** *number*

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

###  getShader

▸ **getShader**(): *[ShaderType](../enums/_lumin_.utils.shadertype.md)*

*Inherited from [RenderNode](_lumin_.rendernode.md).[getShader](_lumin_.rendernode.md#getshader)*

Returns shader type that is currently used

**`priv`** none

**Returns:** *[ShaderType](../enums/_lumin_.utils.shadertype.md)*

___

###  getSpeedFactor

▸ **getSpeedFactor**(): *number*

Get the speed factor, (how fast a frame is played); default is 1.0.  Only positive values.

**`priv`** none

**Returns:** *number*

___

###  getWorldPosition

▸ **getWorldPosition**(): *[number, number, number]*

*Inherited from [TransformNode](_lumin_.transformnode.md).[getWorldPosition](_lumin_.transformnode.md#getworldposition)*

Get the World Position of this Node

**`priv`** none

**Returns:** *[number, number, number]*

Position

___

###  isDrmContent

▸ **isDrmContent**(): *boolean*

*Inherited from [RenderNode](_lumin_.rendernode.md).[isDrmContent](_lumin_.rendernode.md#isdrmcontent)*

Check if this Render Node is marked for DRM

**`priv`** none

**Returns:** *boolean*

True = Marked as DRM Content

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

###  isPaused

▸ **isPaused**(): *boolean*

Helper function to check if the node is in a paused state.

**`priv`** none

**Returns:** *boolean*

___

###  isPlaying

▸ **isPlaying**(): *boolean*

Helper function to check if the node is in a playing state.

**`priv`** none

**Returns:** *boolean*

___

###  isSkipRaycast

▸ **isSkipRaycast**(): *boolean*

*Inherited from [Node](_lumin_.node.md).[isSkipRaycast](_lumin_.node.md#isskipraycast)*

Returns the skip raycast state of the node.

**`priv`** none

**Returns:** *boolean*

True if the node is skipped during raycasting.

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

###  pause

▸ **pause**(): *void*

**`priv`** none

**Returns:** *void*

___

###  pauseFor

▸ **pauseFor**(`a_pauseTimeInS`: number): *void*

Set the number of seconds to pause playback.

**`priv`** none

**Parameters:**

Name | Type |
------ | ------ |
`a_pauseTimeInS` | number |

**Returns:** *void*

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

###  resume

▸ **resume**(): *void*

**`priv`** none

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

###  setBackFaceCulls

▸ **setBackFaceCulls**(`a_on`: boolean, `a_renderStateIndex?`: number): *void*

*Inherited from [RenderNode](_lumin_.rendernode.md).[setBackFaceCulls](_lumin_.rendernode.md#setbackfaceculls)*

Sets the back-face-cull setting for one or more render states.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_on` | boolean | The desired flag setting. |
`a_renderStateIndex?` | number | `default = -1`<br/> The index of the corresponding render state whose                           flag will be changed.  Note that the default value                           will cause all states to have the required setting.  |

**Returns:** *void*

___

###  setBloomStrength

▸ **setBloomStrength**(`a_bloomStrength`: number): *void*

*Inherited from [RenderNode](_lumin_.rendernode.md).[setBloomStrength](_lumin_.rendernode.md#setbloomstrength)*

Set Bloom strength for this Render Node. If a material exists, the material bloom
will superseed this value. By Default the Bloom Strength is 0 for this node.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_bloomStrength` | number | the Bloom Strength  |

**Returns:** *void*

___

###  setBlooms

▸ **setBlooms**(`a_on`: boolean, `a_renderStateIndex?`: number): *void*

*Inherited from [RenderNode](_lumin_.rendernode.md).[setBlooms](_lumin_.rendernode.md#setblooms)*

Flags whether or not the indicated render state will bloom

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_on` | boolean | The desired flag setting. |
`a_renderStateIndex?` | number | `default = -1`<br/> The index of the corresponding render state whose                           flag will be changed.  Note that the default value                           will cause all states to have the required setting.  |

**Returns:** *void*

___

###  setCastsShadows

▸ **setCastsShadows**(`a_on`: boolean, `a_renderStateIndex?`: number): *void*

*Inherited from [RenderNode](_lumin_.rendernode.md).[setCastsShadows](_lumin_.rendernode.md#setcastsshadows)*

Flags whether or not the indicated render state will cast shadows.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_on` | boolean | The desired flag setting. |
`a_renderStateIndex?` | number | `default = -1`<br/> The index of the corresponding render state whose                           flag will be changed.  Note that the default value                           will cause all states to have the required setting.  |

**Returns:** *void*

___

###  setColor

▸ **setColor**(`a_color`: [number, number, number, number]): *void*

*Inherited from [RenderNode](_lumin_.rendernode.md).[setColor](_lumin_.rendernode.md#setcolor)*

Sets the color to be used for every sub mesh within the render node.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_color` | [number, number, number, number] | The color to be used for every sub mesh within the render node.  |

**Returns:** *void*

___

###  setCurrentFrame

▸ **setCurrentFrame**(`a_frame`: number): *boolean*

Set the current frame the sprite is displaying. Cannot be used while animating.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_frame` | number | an integer specifying the the new frame index. |

**Returns:** *boolean*

True if the frame was changed, otherwise false.

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

###  setDrmContent

▸ **setDrmContent**(`a_on`: boolean): *void*

*Inherited from [RenderNode](_lumin_.rendernode.md).[setDrmContent](_lumin_.rendernode.md#setdrmcontent)*

Flags If this renderable node is using DRM Content

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_on` | boolean | The desired flag setting. |

**Returns:** *void*

___

###  setFrameDuration

▸ **setFrameDuration**(`a_factor`: number): *void*

Set the duration of an individual frame.

**`priv`** none

**Parameters:**

Name | Type |
------ | ------ |
`a_factor` | number |

**Returns:** *void*

___

###  setFrontFaceCulls

▸ **setFrontFaceCulls**(`a_on`: boolean, `a_renderStateIndex?`: number): *void*

*Inherited from [RenderNode](_lumin_.rendernode.md).[setFrontFaceCulls](_lumin_.rendernode.md#setfrontfaceculls)*

Sets the front-face-cull setting for one or more render states.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_on` | boolean | The desired flag setting. |
`a_renderStateIndex?` | number | `default = -1`<br/> The index of the corresponding render state whose                           flag will be changed.  Note that the default value                           will cause all states to have the required setting.  |

**Returns:** *void*

___

###  setIsOpaque

▸ **setIsOpaque**(`a_on`: boolean, `a_renderStateIndex?`: number): *void*

*Inherited from [RenderNode](_lumin_.rendernode.md).[setIsOpaque](_lumin_.rendernode.md#setisopaque)*

Sets the opacity setting for one or more render states.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_on` | boolean | The desired flag setting. |
`a_renderStateIndex?` | number | `default = -1`<br/> The index of the corresponding render state whose                           flag will be changed.  Note that the default value                           will cause all states to have the required setting.  |

**Returns:** *void*

___

###  setIsUI

▸ **setIsUI**(`a_on`: boolean, `a_renderStateIndex?`: number): *void*

*Inherited from [RenderNode](_lumin_.rendernode.md).[setIsUI](_lumin_.rendernode.md#setisui)*

Sets if this should be rendered on the UI Layer.
Note: UI Layer is always rendered on top of everything else.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_on` | boolean | The desired flag setting. |
`a_renderStateIndex?` | number | `default = -1`<br/> The index of the corresponding render state whose                           flag will be changed.  Note that the default value                           will cause all states to have the required setting.  |

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

###  setPlaybackOrder

▸ **setPlaybackOrder**(`playbackOrder`: [PlaybackOrder](../enums/_lumin_.animation.playbackorder.md)): *void*

Set whether to play the frames forward or in reverse.

**`priv`** none

**Parameters:**

Name | Type |
------ | ------ |
`playbackOrder` | [PlaybackOrder](../enums/_lumin_.animation.playbackorder.md) |

**Returns:** *void*

___

###  setPushesStencil

▸ **setPushesStencil**(`a_on`: boolean, `a_renderStateIndex?`: number): *void*

*Inherited from [RenderNode](_lumin_.rendernode.md).[setPushesStencil](_lumin_.rendernode.md#setpushesstencil)*

Sets the stencil push setting for one or more render states.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_on` | boolean | The desired flag setting. |
`a_renderStateIndex?` | number | `default = -1`<br/> The index of the corresponding render state whose                           flag will be changed.  Note that the default value                           will cause all states to have the required setting.  |

**Returns:** *void*

___

###  setReadsClip

▸ **setReadsClip**(`a_on`: boolean, `a_renderStateIndex?`: number): *void*

*Inherited from [RenderNode](_lumin_.rendernode.md).[setReadsClip](_lumin_.rendernode.md#setreadsclip)*

Sets the clip read setting for one or more render states.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_on` | boolean | The desired flag setting. |
`a_renderStateIndex?` | number | `default = -1`<br/> The index of the corresponding render state whose                           flag will be changed.  Note that the default value                           will cause all states to have the required setting.  |

**Returns:** *void*

___

###  setReadsDepth

▸ **setReadsDepth**(`a_on`: boolean, `a_renderStateIndex?`: number): *void*

*Inherited from [RenderNode](_lumin_.rendernode.md).[setReadsDepth](_lumin_.rendernode.md#setreadsdepth)*

Sets the depth read setting for one or more render states.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_on` | boolean | The desired flag setting. |
`a_renderStateIndex?` | number | `default = -1`<br/> The index of the corresponding render state whose                           flag will be changed.  Note that the default value                           will cause all states to have the required setting.  |

**Returns:** *void*

___

###  setReceivesLight

▸ **setReceivesLight**(`a_on`: boolean, `a_renderStateIndex?`: number): *void*

*Inherited from [RenderNode](_lumin_.rendernode.md).[setReceivesLight](_lumin_.rendernode.md#setreceiveslight)*

Flags whether or not the indicated render state will receive light.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_on` | boolean | The desired flag setting. |
`a_renderStateIndex?` | number | `default = -1`<br/> The index of the corresponding render state whose                           flag will be changed.  Note that the default value                           will cause all states to have the required setting.  |

**Returns:** *void*

___

###  setReceivesShadows

▸ **setReceivesShadows**(`a_on`: boolean, `a_renderStateIndex?`: number): *void*

*Inherited from [RenderNode](_lumin_.rendernode.md).[setReceivesShadows](_lumin_.rendernode.md#setreceivesshadows)*

Flags whether or not the indicated render state will receive shadows.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_on` | boolean | The desired flag setting. |
`a_renderStateIndex?` | number | `default = -1`<br/> The index of the corresponding render state whose                           flag will be changed.  Note that the default value                           will cause all states to have the required setting.  |

**Returns:** *void*

___

###  setRenderingLayer

▸ **setRenderingLayer**(`a_renderLayer`: [RenderingLayer](../enums/_lumin_.render.renderinglayer.md)): *void*

*Inherited from [RenderNode](_lumin_.rendernode.md).[setRenderingLayer](_lumin_.rendernode.md#setrenderinglayer)*

Set Custom RenderLayer on which this renderNode will be rendered.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_renderLayer` | [RenderingLayer](../enums/_lumin_.render.renderinglayer.md) | Of type uint16_t. Value will be clamped to kRenderingLayerMAX = 999, if more.  Note: Please use, "render::RenderingLayer" enum to set layers. for eg. RenderNode->setRenderingLayer(render::RenderingLayer::kHUDLayer); or you can also send in the layer value as well eg.     RenderNode->setRenderingLayer(static_cast<uint16_t>(render::RenderingLayer::kHUDLayer));  You can also create your own custom layering by using existing layers and your own. eg. uint16_t customHUDLayer1 = static_cast<uint16_t>(render::RenderingLayer::kHUDLayer) + 1;     uint16_t customHUDLayer2 = static_cast<uint16_t>(render::RenderingLayer::kHUDLayer) + 2;     uint16_t customHUDLayer3 = static_cast<uint16_t>(render::RenderingLayer::kHUDLayer) + 3;  |

**Returns:** *void*

▸ **setRenderingLayer**(`a_renderLayer`: number): *void*

*Inherited from [RenderNode](_lumin_.rendernode.md).[setRenderingLayer](_lumin_.rendernode.md#setrenderinglayer)*

**`priv`** none

**Parameters:**

Name | Type |
------ | ------ |
`a_renderLayer` | number |

**Returns:** *void*

___

###  setRepeatCount

▸ **setRepeatCount**(`a_repeatCount`: number): *void*

Set number of times to repeat playing the Sequence.

**`priv`** none

**Parameters:**

Name | Type |
------ | ------ |
`a_repeatCount` | number |

**Returns:** *void*

___

###  setRepeatForever

▸ **setRepeatForever**(): *void*

**`priv`** none

**Returns:** *void*

___

###  setResource

▸ **setResource**(`a_spriteRes`: [TexturePackResource](_lumin_.texturepackresource.md)): *void*

Set the TexturePackResource, which is to be used for the texture sequence that the node will play.

**`priv`** none

**Parameters:**

Name | Type |
------ | ------ |
`a_spriteRes` | [TexturePackResource](_lumin_.texturepackresource.md) |

**Returns:** *void*

___

###  setShader

▸ **setShader**(`a_shaderType`: [ShaderType](../enums/_lumin_.utils.shadertype.md)): *void*

*Inherited from [RenderNode](_lumin_.rendernode.md).[setShader](_lumin_.rendernode.md#setshader)*

Sets the shader to be used for every sub mesh within the model.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_shaderType` | [ShaderType](../enums/_lumin_.utils.shadertype.md) | The shader type to be used for every sub mesh within the model.  |

**Returns:** *void*

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

###  setSpeedFactor

▸ **setSpeedFactor**(`a_factor`: number): *void*

Set the speed factor; by default, this is 1.0.  Only positive values will be accepted.

**`priv`** none

**Parameters:**

Name | Type |
------ | ------ |
`a_factor` | number |

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

###  setWritesColor

▸ **setWritesColor**(`a_on`: boolean, `a_renderStateIndex?`: number): *void*

*Inherited from [RenderNode](_lumin_.rendernode.md).[setWritesColor](_lumin_.rendernode.md#setwritescolor)*

Sets the color write setting for one or more render states.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_on` | boolean | The desired flag setting. |
`a_renderStateIndex?` | number | `default = -1`<br/> The index of the corresponding render state whose                           flag will be changed.  Note that the default value                           will cause all states to have the required setting.  |

**Returns:** *void*

___

###  setWritesDepth

▸ **setWritesDepth**(`a_on`: boolean, `a_renderStateIndex?`: number): *void*

*Inherited from [RenderNode](_lumin_.rendernode.md).[setWritesDepth](_lumin_.rendernode.md#setwritesdepth)*

Sets the depth write setting for one or more render states.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_on` | boolean | The desired flag setting. |
`a_renderStateIndex?` | number | `default = -1`<br/> The index of the corresponding render state whose                           flag will be changed.  Note that the default value                           will cause all states to have the required setting.  |

**Returns:** *void*

___

###  setWritesStencil

▸ **setWritesStencil**(`a_on`: boolean, `a_renderStateIndex?`: number): *void*

*Inherited from [RenderNode](_lumin_.rendernode.md).[setWritesStencil](_lumin_.rendernode.md#setwritesstencil)*

Sets the stencil write setting for one or more render states.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_on` | boolean | The desired flag setting. |
`a_renderStateIndex?` | number | `default = -1`<br/> The index of the corresponding render state whose                           flag will be changed.  Note that the default value                           will cause all states to have the required setting.  |

**Returns:** *void*

___

###  start

▸ **start**(): *void*

**`priv`** none

**Returns:** *void*

___

###  stop

▸ **stop**(): *void*

**`priv`** none

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

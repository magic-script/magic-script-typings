---
id: "_lumin_.ui.uidropdownlist"
title: "UiDropDownList"
sidebar_label: "UiDropDownList"
---

UiDropDownList - This node represents a multi-level, multi-selection capable
                 drop-down list.

## Hierarchy

  ↳ [UiButton](_lumin_.ui.uibutton.md)

  ↳ **UiDropDownList**

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

###  clearAllEventSounds

▸ **clearAllEventSounds**(): *void*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[clearAllEventSounds](_lumin_.ui.uinode.md#clearalleventsounds)*

Clears all event sounds.

**`priv`** none

**Returns:** *void*

___

###  clearEventSound

▸ **clearEventSound**(`event`: [SoundEvent](../enums/_lumin_.ui.soundevent.md)): *void*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[clearEventSound](_lumin_.ui.uinode.md#cleareventsound)*

Clears the sound for the specifiec event.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | [SoundEvent](../enums/_lumin_.ui.soundevent.md) | The sound event to clear.  |

**Returns:** *void*

___

###  clearSelected

▸ **clearSelected**(): *void*

Unselects all selected items in the list and sublists.

**`priv`** none

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

###  detachButtonModel

▸ **detachButtonModel**(): *[Node](_lumin_.node.md)*

*Inherited from [UiButton](_lumin_.ui.uibutton.md).[detachButtonModel](_lumin_.ui.uibutton.md#detachbuttonmodel)*

Detaches the Node hierarchy used as visual representation for this UiButton.

The returned Node hierarchy will be orphaned (no longer attached
to the scene graph) and must be handled by the caller.

**`priv`** none

**Returns:** *[Node](_lumin_.node.md)*

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

###  getAlignment

▸ **getAlignment**(): *[Alignment](_lumin_.ui.alignment.md)*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[getAlignment](_lumin_.ui.uinode.md#getalignment)*

Gets the UiNode's self alignment relative to Node position.

**`priv`** none

**Returns:** *[Alignment](_lumin_.ui.alignment.md)*

The alignment.

___

###  getAnchorPosition

▸ **getAnchorPosition**(): *[number, number, number]*

*Inherited from [Node](_lumin_.node.md).[getAnchorPosition](_lumin_.node.md#getanchorposition)*

Returns the anchor position of the node.

**`priv`** none

**Returns:** *[number, number, number]*

The anchor position.

___

###  getButtonModel

▸ **getButtonModel**(): *[Node](_lumin_.node.md)*

*Inherited from [UiButton](_lumin_.ui.uibutton.md).[getButtonModel](_lumin_.ui.uibutton.md#getbuttonmodel)*

Gets the Node hierarchy used as visual representation for this UiButton.

**`priv`** none

**Returns:** *[Node](_lumin_.node.md)*

a pointer to the model node used.

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

###  getEnabled

▸ **getEnabled**(): *boolean*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[getEnabled](_lumin_.ui.uinode.md#getenabled)*

Gets the enabled state

**`priv`** none

**Returns:** *boolean*

the enabled state of the UiNode.

___

###  getEventPassThrough

▸ **getEventPassThrough**(): *boolean*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[getEventPassThrough](_lumin_.ui.uinode.md#geteventpassthrough)*

Gets whether this UiNode passes events through or not.

**`priv`** none

**Returns:** *boolean*

TRUE if pass through set, FALSE if not.

___

###  getEventSound

▸ **getEventSound**(`event`: [SoundEvent](../enums/_lumin_.ui.soundevent.md)): *[Sound](_lumin_.sound.md)*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[getEventSound](_lumin_.ui.uinode.md#geteventsound)*

Gets the Sound for the specified event, if set.  If no sound ID set for
the specified event, nullptr will be returned.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | [SoundEvent](../enums/_lumin_.ui.soundevent.md) | The sound event to get the Sound for. |

**Returns:** *[Sound](_lumin_.sound.md)*

Pointer to the Sound object associated with the sound ID for the event or nullptr if no sound set.

___

###  getEventSoundID

▸ **getEventSoundID**(`event`: [SoundEvent](../enums/_lumin_.ui.soundevent.md)): *string*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[getEventSoundID](_lumin_.ui.uinode.md#geteventsoundid)*

Gets the sound ID to be played for the UI event.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | [SoundEvent](../enums/_lumin_.ui.soundevent.md) | the sound event. |

**Returns:** *string*

the name of the sound to play for the sound event.

___

###  getFocused

▸ **getFocused**(): *boolean*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[getFocused](_lumin_.ui.uinode.md#getfocused)*

Gets the focus state

**`priv`** none

**Returns:** *boolean*

the focus state of the UiNode.

___

###  getGravityWellEnabled

▸ **getGravityWellEnabled**(): *boolean*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[getGravityWellEnabled](_lumin_.ui.uinode.md#getgravitywellenabled)*

Gets whether the gravity well is enabled.

**`priv`** none

**Returns:** *boolean*

___

###  getGravityWellProperties

▸ **getGravityWellProperties**(): *[GravityWellProperties](_lumin_.ui.gravitywellproperties.md)*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[getGravityWellProperties](_lumin_.ui.uinode.md#getgravitywellproperties)*

Gets the gravity well properties for this UiNode.

**`priv`** none

**Returns:** *[GravityWellProperties](_lumin_.ui.gravitywellproperties.md)*

the GravityWellProperties.

___

###  getHovered

▸ **getHovered**(): *boolean*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[getHovered](_lumin_.ui.uinode.md#gethovered)*

Gets the hover state

**`priv`** none

**Returns:** *boolean*

the hover state of the UiNode.

___

###  getIconColor

▸ **getIconColor**(): *[number, number, number, number]*

*Inherited from [UiButton](_lumin_.ui.uibutton.md).[getIconColor](_lumin_.ui.uibutton.md#geticoncolor)*

Gets the RGBA color of the button icon; the default is white; i.e., (1, 1, 1, 1).

**`priv`** none

**Returns:** *[number, number, number, number]*

Icon color.

___

###  getIconSize

▸ **getIconSize**(): *[number, number]*

*Inherited from [UiButton](_lumin_.ui.uibutton.md).[getIconSize](_lumin_.ui.uibutton.md#geticonsize)*

Gets the button icon size in scene units.

**`priv`** none

**Returns:** *[number, number]*

the icon size.

___

###  getList

▸ **getList**(): *Array‹[DropDownListItem](_lumin_.ui.dropdownlistitem.md)›*

Gets the list of options for the drop-down list.

**`priv`** none

**Returns:** *Array‹[DropDownListItem](_lumin_.ui.dropdownlistitem.md)›*

the list of options.

___

###  getListFont

▸ **getListFont**(): *bigint*

Gets the font for the list text.

**`priv`** none

**Returns:** *bigint*

the list font resource ID.

___

###  getListMaxHeight

▸ **getListMaxHeight**(): *number*

Gets the max height of lists.

**`priv`** none

**Returns:** *number*

the list max height.

___

###  getListTextSize

▸ **getListTextSize**(): *number*

Gets the size of the list text.

**`priv`** none

**Returns:** *number*

the list text size.

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

###  getMaxCharacterLimit

▸ **getMaxCharacterLimit**(): *number*

Gets the max amount of characters to be used per list item label.
0 is default, which means there is no limit.

**`priv`** none

**Returns:** *number*

the max characters

___

###  getMultiSelectMode

▸ **getMultiSelectMode**(): *boolean*

Gets the multi-select mode of the drop-down list.

**`priv`** none

**Returns:** *boolean*

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

###  getOnActivateResponse

▸ **getOnActivateResponse**(): *[OnActivateResponse](_lumin_.ui.onactivateresponse.md)*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[getOnActivateResponse](_lumin_.ui.uinode.md#getonactivateresponse)*

Gets the OnActivateResponse properties of this UiNode.

**`priv`** none

**Returns:** *[OnActivateResponse](_lumin_.ui.onactivateresponse.md)*

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

###  getRenderingLayer

▸ **getRenderingLayer**(): *number*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[getRenderingLayer](_lumin_.ui.uinode.md#getrenderinglayer)*

Gets the rendering layer of this UiNode.

**`return:`** the uint16_t value of the layer.

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

###  getSelectedItems

▸ **getSelectedItems**(): *Array‹[DropDownListItem](_lumin_.ui.dropdownlistitem.md)›*

Gets the currently selected item list.

**`priv`** none

**Returns:** *Array‹[DropDownListItem](_lumin_.ui.dropdownlistitem.md)›*

___

###  getText

▸ **getText**(): *string*

*Inherited from [UiButton](_lumin_.ui.uibutton.md).[getText](_lumin_.ui.uibutton.md#gettext)*

Gets the UTF-8 encoded button text.

**`priv`** none

**Returns:** *string*

The button text.

___

###  getTextColor

▸ **getTextColor**(): *[number, number, number, number]*

*Inherited from [UiButton](_lumin_.ui.uibutton.md).[getTextColor](_lumin_.ui.uibutton.md#gettextcolor)*

Gets the RGBA color of the button text; the default is white; i.e., (1, 1, 1, 1).

**`priv`** none

**Returns:** *[number, number, number, number]*

Text color.

___

###  getTextSize

▸ **getTextSize**(): *number*

*Inherited from [UiButton](_lumin_.ui.uibutton.md).[getTextSize](_lumin_.ui.uibutton.md#gettextsize)*

Gets the button text label render size height in scene units.

**`priv`** none

**Returns:** *number*

the text size.

___

###  getUiImageIcon

▸ **getUiImageIcon**(): *[UiImage](_lumin_.ui.uiimage.md)*

*Inherited from [UiButton](_lumin_.ui.uibutton.md).[getUiImageIcon](_lumin_.ui.uibutton.md#getuiimageicon)*

Gets the UiImage icon for this button if one exists
in the button hierarchy.

**`priv`** none

**Returns:** *[UiImage](_lumin_.ui.uiimage.md)*

a UiImage pointer (can be null).

___

###  getUiTextLabel

▸ **getUiTextLabel**(): *[UiText](_lumin_.ui.uitext.md)*

*Inherited from [UiButton](_lumin_.ui.uibutton.md).[getUiTextLabel](_lumin_.ui.uibutton.md#getuitextlabel)*

Gets the UiText label for this button if one exists
in the button hierarchy.

**`priv`** none

**Returns:** *[UiText](_lumin_.ui.uitext.md)*

a UiText pointer (can be null).

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

###  onActivateSub

▸ **onActivateSub**(`callback`: function): *[CallbackID](_lumin_.utils.callbackid.md)*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[onActivateSub](_lumin_.ui.uinode.md#onactivatesub)*

The on click Event.

This event is dispatched when the element has been activated (clicked, selected).

**`priv`** none

**Parameters:**

▪ **callback**: *function*

▸ (`arg0`: [UiEventData](_lumin_.ui.uieventdata.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg0` | [UiEventData](_lumin_.ui.uieventdata.md) |

**Returns:** *[CallbackID](_lumin_.utils.callbackid.md)*

___

###  onActivateUnsub

▸ **onActivateUnsub**(`callbackID`: [CallbackID](_lumin_.utils.callbackid.md)): *boolean*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[onActivateUnsub](_lumin_.ui.uinode.md#onactivateunsub)*

**Parameters:**

Name | Type |
------ | ------ |
`callbackID` | [CallbackID](_lumin_.utils.callbackid.md) |

**Returns:** *boolean*

___

###  onDeletedSub

▸ **onDeletedSub**(`callback`: function): *[CallbackID](_lumin_.utils.callbackid.md)*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[onDeletedSub](_lumin_.ui.uinode.md#ondeletedsub)*

The on deleted Event.

This event is dispatched when the element is about to be deleted.

**`priv`** none

**Parameters:**

▪ **callback**: *function*

▸ (`arg0`: [UiEventData](_lumin_.ui.uieventdata.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg0` | [UiEventData](_lumin_.ui.uieventdata.md) |

**Returns:** *[CallbackID](_lumin_.utils.callbackid.md)*

___

###  onDeletedUnsub

▸ **onDeletedUnsub**(`callbackID`: [CallbackID](_lumin_.utils.callbackid.md)): *boolean*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[onDeletedUnsub](_lumin_.ui.uinode.md#ondeletedunsub)*

**Parameters:**

Name | Type |
------ | ------ |
`callbackID` | [CallbackID](_lumin_.utils.callbackid.md) |

**Returns:** *boolean*

___

###  onDisabledSub

▸ **onDisabledSub**(`callback`: function): *[CallbackID](_lumin_.utils.callbackid.md)*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[onDisabledSub](_lumin_.ui.uinode.md#ondisabledsub)*

The on disabled Event.

This event is dispatched when the element has been disabled.

**`priv`** none

**Parameters:**

▪ **callback**: *function*

▸ (`arg0`: [UiEventData](_lumin_.ui.uieventdata.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg0` | [UiEventData](_lumin_.ui.uieventdata.md) |

**Returns:** *[CallbackID](_lumin_.utils.callbackid.md)*

___

###  onDisabledUnsub

▸ **onDisabledUnsub**(`callbackID`: [CallbackID](_lumin_.utils.callbackid.md)): *boolean*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[onDisabledUnsub](_lumin_.ui.uinode.md#ondisabledunsub)*

**Parameters:**

Name | Type |
------ | ------ |
`callbackID` | [CallbackID](_lumin_.utils.callbackid.md) |

**Returns:** *boolean*

___

###  onEnabledSub

▸ **onEnabledSub**(`callback`: function): *[CallbackID](_lumin_.utils.callbackid.md)*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[onEnabledSub](_lumin_.ui.uinode.md#onenabledsub)*

The on enabled Event.

This event is dispatched when the element has been enabled.

**`priv`** none

**Parameters:**

▪ **callback**: *function*

▸ (`arg0`: [UiEventData](_lumin_.ui.uieventdata.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg0` | [UiEventData](_lumin_.ui.uieventdata.md) |

**Returns:** *[CallbackID](_lumin_.utils.callbackid.md)*

___

###  onEnabledUnsub

▸ **onEnabledUnsub**(`callbackID`: [CallbackID](_lumin_.utils.callbackid.md)): *boolean*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[onEnabledUnsub](_lumin_.ui.uinode.md#onenabledunsub)*

**Parameters:**

Name | Type |
------ | ------ |
`callbackID` | [CallbackID](_lumin_.utils.callbackid.md) |

**Returns:** *boolean*

___

###  onFocusGainedSub

▸ **onFocusGainedSub**(`callback`: function): *[CallbackID](_lumin_.utils.callbackid.md)*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[onFocusGainedSub](_lumin_.ui.uinode.md#onfocusgainedsub)*

The on focus gained Event.

This event is dispatched when the element has gained focus.

**`priv`** none

**Parameters:**

▪ **callback**: *function*

▸ (`arg0`: [UiEventData](_lumin_.ui.uieventdata.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg0` | [UiEventData](_lumin_.ui.uieventdata.md) |

**Returns:** *[CallbackID](_lumin_.utils.callbackid.md)*

___

###  onFocusGainedUnsub

▸ **onFocusGainedUnsub**(`callbackID`: [CallbackID](_lumin_.utils.callbackid.md)): *boolean*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[onFocusGainedUnsub](_lumin_.ui.uinode.md#onfocusgainedunsub)*

**Parameters:**

Name | Type |
------ | ------ |
`callbackID` | [CallbackID](_lumin_.utils.callbackid.md) |

**Returns:** *boolean*

___

###  onFocusInputSub

▸ **onFocusInputSub**(`callback`: function): *[CallbackID](_lumin_.utils.callbackid.md)*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[onFocusInputSub](_lumin_.ui.uinode.md#onfocusinputsub)*

The on focus input Event.

This event is dispatched when the focused element should process input.

**`priv`** none

**Parameters:**

▪ **callback**: *function*

▸ (`arg0`: [UiEventData](_lumin_.ui.uieventdata.md), `arg1`: [InputEventData](_lumin_.inputeventdata.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg0` | [UiEventData](_lumin_.ui.uieventdata.md) |
`arg1` | [InputEventData](_lumin_.inputeventdata.md) |

**Returns:** *[CallbackID](_lumin_.utils.callbackid.md)*

___

###  onFocusInputUnsub

▸ **onFocusInputUnsub**(`callbackID`: [CallbackID](_lumin_.utils.callbackid.md)): *boolean*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[onFocusInputUnsub](_lumin_.ui.uinode.md#onfocusinputunsub)*

**Parameters:**

Name | Type |
------ | ------ |
`callbackID` | [CallbackID](_lumin_.utils.callbackid.md) |

**Returns:** *boolean*

___

###  onFocusLostSub

▸ **onFocusLostSub**(`callback`: function): *[CallbackID](_lumin_.utils.callbackid.md)*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[onFocusLostSub](_lumin_.ui.uinode.md#onfocuslostsub)*

The on focus lost Event.

This event is dispatched when the element has lost focus.

**`priv`** none

**Parameters:**

▪ **callback**: *function*

▸ (`arg0`: [UiEventData](_lumin_.ui.uieventdata.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg0` | [UiEventData](_lumin_.ui.uieventdata.md) |

**Returns:** *[CallbackID](_lumin_.utils.callbackid.md)*

___

###  onFocusLostUnsub

▸ **onFocusLostUnsub**(`callbackID`: [CallbackID](_lumin_.utils.callbackid.md)): *boolean*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[onFocusLostUnsub](_lumin_.ui.uinode.md#onfocuslostunsub)*

**Parameters:**

Name | Type |
------ | ------ |
`callbackID` | [CallbackID](_lumin_.utils.callbackid.md) |

**Returns:** *boolean*

___

###  onHoverEnterSub

▸ **onHoverEnterSub**(`callback`: function): *[CallbackID](_lumin_.utils.callbackid.md)*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[onHoverEnterSub](_lumin_.ui.uinode.md#onhoverentersub)*

The on hover enter Event.

This event is dispatched when the cursor starts hovering over the UiNode.

**`priv`** none

**Parameters:**

▪ **callback**: *function*

▸ (`arg0`: [UiEventData](_lumin_.ui.uieventdata.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg0` | [UiEventData](_lumin_.ui.uieventdata.md) |

**Returns:** *[CallbackID](_lumin_.utils.callbackid.md)*

___

###  onHoverEnterUnsub

▸ **onHoverEnterUnsub**(`callbackID`: [CallbackID](_lumin_.utils.callbackid.md)): *boolean*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[onHoverEnterUnsub](_lumin_.ui.uinode.md#onhoverenterunsub)*

**Parameters:**

Name | Type |
------ | ------ |
`callbackID` | [CallbackID](_lumin_.utils.callbackid.md) |

**Returns:** *boolean*

___

###  onHoverExitSub

▸ **onHoverExitSub**(`callback`: function): *[CallbackID](_lumin_.utils.callbackid.md)*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[onHoverExitSub](_lumin_.ui.uinode.md#onhoverexitsub)*

The on hover exit Event.

This event is dispatched when the cursor stops hovering over the UiNode.

**`priv`** none

**Parameters:**

▪ **callback**: *function*

▸ (`arg0`: [UiEventData](_lumin_.ui.uieventdata.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg0` | [UiEventData](_lumin_.ui.uieventdata.md) |

**Returns:** *[CallbackID](_lumin_.utils.callbackid.md)*

___

###  onHoverExitUnsub

▸ **onHoverExitUnsub**(`callbackID`: [CallbackID](_lumin_.utils.callbackid.md)): *boolean*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[onHoverExitUnsub](_lumin_.ui.uinode.md#onhoverexitunsub)*

**Parameters:**

Name | Type |
------ | ------ |
`callbackID` | [CallbackID](_lumin_.utils.callbackid.md) |

**Returns:** *boolean*

___

###  onHoverItemSub

▸ **onHoverItemSub**(`callback`: function): *[CallbackID](_lumin_.utils.callbackid.md)*

The on hover item Event.

This event is dispatched when the cursor starts hovering over an item in the drop-down list.

**`priv`** none

**Parameters:**

▪ **callback**: *function*

▸ (`arg0`: [UiEventData](_lumin_.ui.uieventdata.md), `arg1`: [DropDownListItem](_lumin_.ui.dropdownlistitem.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg0` | [UiEventData](_lumin_.ui.uieventdata.md) |
`arg1` | [DropDownListItem](_lumin_.ui.dropdownlistitem.md) |

**Returns:** *[CallbackID](_lumin_.utils.callbackid.md)*

___

###  onHoverItemUnsub

▸ **onHoverItemUnsub**(`callbackID`: [CallbackID](_lumin_.utils.callbackid.md)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`callbackID` | [CallbackID](_lumin_.utils.callbackid.md) |

**Returns:** *boolean*

___

###  onHoverMoveSub

▸ **onHoverMoveSub**(`callback`: function): *[CallbackID](_lumin_.utils.callbackid.md)*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[onHoverMoveSub](_lumin_.ui.uinode.md#onhovermovesub)*

The on hover move Event.

This event is dispatched when the cursor is hovering over the UiNode.

**`priv`** none

**Parameters:**

▪ **callback**: *function*

▸ (`arg0`: [UiEventData](_lumin_.ui.uieventdata.md), `arg1`: [number, number, number]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg0` | [UiEventData](_lumin_.ui.uieventdata.md) |
`arg1` | [number, number, number] |

**Returns:** *[CallbackID](_lumin_.utils.callbackid.md)*

___

###  onHoverMoveUnsub

▸ **onHoverMoveUnsub**(`callbackID`: [CallbackID](_lumin_.utils.callbackid.md)): *boolean*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[onHoverMoveUnsub](_lumin_.ui.uinode.md#onhovermoveunsub)*

**Parameters:**

Name | Type |
------ | ------ |
`callbackID` | [CallbackID](_lumin_.utils.callbackid.md) |

**Returns:** *boolean*

___

###  onListVisibilityChangedSub

▸ **onListVisibilityChangedSub**(`callback`: function): *[CallbackID](_lumin_.utils.callbackid.md)*

The on list visibility changed Event.

This event is dispatched when the visiblity of the drop-down list has changed.

**`priv`** none

**Parameters:**

▪ **callback**: *function*

▸ (`arg0`: [UiEventData](_lumin_.ui.uieventdata.md), `arg1`: boolean): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg0` | [UiEventData](_lumin_.ui.uieventdata.md) |
`arg1` | boolean |

**Returns:** *[CallbackID](_lumin_.utils.callbackid.md)*

___

###  onListVisibilityChangedUnsub

▸ **onListVisibilityChangedUnsub**(`callbackID`: [CallbackID](_lumin_.utils.callbackid.md)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`callbackID` | [CallbackID](_lumin_.utils.callbackid.md) |

**Returns:** *boolean*

___

###  onLongPressSub

▸ **onLongPressSub**(`callback`: function): *[CallbackID](_lumin_.utils.callbackid.md)*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[onLongPressSub](_lumin_.ui.uinode.md#onlongpresssub)*

The on long press Event.

This event is dispatched when the element has been held down on.

**`priv`** none

**Parameters:**

▪ **callback**: *function*

▸ (`arg0`: [UiEventData](_lumin_.ui.uieventdata.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg0` | [UiEventData](_lumin_.ui.uieventdata.md) |

**Returns:** *[CallbackID](_lumin_.utils.callbackid.md)*

___

###  onLongPressUnsub

▸ **onLongPressUnsub**(`callbackID`: [CallbackID](_lumin_.utils.callbackid.md)): *boolean*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[onLongPressUnsub](_lumin_.ui.uinode.md#onlongpressunsub)*

**Parameters:**

Name | Type |
------ | ------ |
`callbackID` | [CallbackID](_lumin_.utils.callbackid.md) |

**Returns:** *boolean*

___

###  onPressedSub

▸ **onPressedSub**(`callback`: function): *[CallbackID](_lumin_.utils.callbackid.md)*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[onPressedSub](_lumin_.ui.uinode.md#onpressedsub)*

The on pressed Event.

This event is dispatched when the element is pressed.

**`priv`** none

**Parameters:**

▪ **callback**: *function*

▸ (`arg0`: [UiEventData](_lumin_.ui.uieventdata.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg0` | [UiEventData](_lumin_.ui.uieventdata.md) |

**Returns:** *[CallbackID](_lumin_.utils.callbackid.md)*

___

###  onPressedUnsub

▸ **onPressedUnsub**(`callbackID`: [CallbackID](_lumin_.utils.callbackid.md)): *boolean*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[onPressedUnsub](_lumin_.ui.uinode.md#onpressedunsub)*

**Parameters:**

Name | Type |
------ | ------ |
`callbackID` | [CallbackID](_lumin_.utils.callbackid.md) |

**Returns:** *boolean*

___

###  onReleasedSub

▸ **onReleasedSub**(`callback`: function): *[CallbackID](_lumin_.utils.callbackid.md)*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[onReleasedSub](_lumin_.ui.uinode.md#onreleasedsub)*

The on released Event.

This event is dispatched when the element is released (after being pressed).

**`priv`** none

**Parameters:**

▪ **callback**: *function*

▸ (`arg0`: [UiEventData](_lumin_.ui.uieventdata.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg0` | [UiEventData](_lumin_.ui.uieventdata.md) |

**Returns:** *[CallbackID](_lumin_.utils.callbackid.md)*

___

###  onReleasedUnsub

▸ **onReleasedUnsub**(`callbackID`: [CallbackID](_lumin_.utils.callbackid.md)): *boolean*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[onReleasedUnsub](_lumin_.ui.uinode.md#onreleasedunsub)*

**Parameters:**

Name | Type |
------ | ------ |
`callbackID` | [CallbackID](_lumin_.utils.callbackid.md) |

**Returns:** *boolean*

___

###  onSelectionChangedSub

▸ **onSelectionChangedSub**(`callback`: function): *[CallbackID](_lumin_.utils.callbackid.md)*

The on selection changed Event.

This event is dispatched when the selection in the drop-down list has changed.

**`priv`** none

**Parameters:**

▪ **callback**: *function*

▸ (`arg0`: [UiEventData](_lumin_.ui.uieventdata.md), `arg1`: Array‹[DropDownListItem](_lumin_.ui.dropdownlistitem.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg0` | [UiEventData](_lumin_.ui.uieventdata.md) |
`arg1` | Array‹[DropDownListItem](_lumin_.ui.dropdownlistitem.md)› |

**Returns:** *[CallbackID](_lumin_.utils.callbackid.md)*

___

###  onSelectionChangedUnsub

▸ **onSelectionChangedUnsub**(`callbackID`: [CallbackID](_lumin_.utils.callbackid.md)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`callbackID` | [CallbackID](_lumin_.utils.callbackid.md) |

**Returns:** *boolean*

___

###  onUpdateSub

▸ **onUpdateSub**(`callback`: function): *[CallbackID](_lumin_.utils.callbackid.md)*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[onUpdateSub](_lumin_.ui.uinode.md#onupdatesub)*

The on update Event.

This event is dispatched during element update.

**`priv`** none

**Parameters:**

▪ **callback**: *function*

▸ (`arg0`: [UiEventData](_lumin_.ui.uieventdata.md), `arg1`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg0` | [UiEventData](_lumin_.ui.uieventdata.md) |
`arg1` | number |

**Returns:** *[CallbackID](_lumin_.utils.callbackid.md)*

___

###  onUpdateUnsub

▸ **onUpdateUnsub**(`callbackID`: [CallbackID](_lumin_.utils.callbackid.md)): *boolean*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[onUpdateUnsub](_lumin_.ui.uinode.md#onupdateunsub)*

**Parameters:**

Name | Type |
------ | ------ |
`callbackID` | [CallbackID](_lumin_.utils.callbackid.md) |

**Returns:** *boolean*

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

###  setAlignment

▸ **setAlignment**(`alignment`: [Alignment](_lumin_.ui.alignment.md)): *void*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[setAlignment](_lumin_.ui.uinode.md#setalignment)*

Sets the UiNodes's self alignment relative to Node position.

Alignment is defined as what side the Node position
is in relative to the planar, XY element bounds.  A horizontal
left alignment would result in the node position being on the
left side of the bounds area.  A vertical top alignment would
result in the node position being on the top side of the
bounds area.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`alignment` | [Alignment](_lumin_.ui.alignment.md) | The alignment.  |

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

###  setButtonModel

▸ **setButtonModel**(`pNode`: [Node](_lumin_.node.md), `offset?`: [number, number, number]): *void*

*Inherited from [UiButton](_lumin_.ui.uibutton.md).[setButtonModel](_lumin_.ui.uibutton.md#setbuttonmodel)*

Sets the Node hierarchy used as visual representation for this UiButton.

In situations where a custom appearance is required,
use this method to set a UiButton's visual representation using any
arbitrary Node hierarchy.  This call will automatically parent the Node
under this UiButton and offset it with the optionally provided vector.
Be sure to include a UiText node within the passed in Node hierarchy in order
for the UiButton to automatically use it for the setText and getText methods.
The UiButton will do a left-to-right breadth first search of the Node
hierarchy for a UiText node and will use the first found as the text label.

If there is a current Node hierarchy for the model, this call will delete the
current hierarchy and replace with the new hierarchy.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pNode` | [Node](_lumin_.node.md) | A pointer to the top of the Node hierarchy to use for visual representation. |
`offset?` | [number, number, number] | `default = VEC3_ZERO`<br/> - An optional offset to position the Node within the UiButton (default is [0,0,0]).  |

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

###  setEnabled

▸ **setEnabled**(`enabled`: boolean): *void*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[setEnabled](_lumin_.ui.uinode.md#setenabled)*

Sets the enabled state

Disabled UiNodes don't send out certain input events,
such as OnPress, OnRelease, OnActivate, etc.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`enabled` | boolean | The enabled state of the UiNode.  |

**Returns:** *void*

___

###  setEventPassThrough

▸ **setEventPassThrough**(`passThrough`: boolean): *void*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[setEventPassThrough](_lumin_.ui.uinode.md#seteventpassthrough)*

Sets whether this UiNode passes events through to the next UiNode
parent or processes them internally.

The UI events that will be passed through are the cursor interaction
events like onHoverEnter, onHoverExit, and onActivate.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`passThrough` | boolean | the event pass through flag.  |

**Returns:** *void*

___

###  setEventPassThroughChildren

▸ **setEventPassThroughChildren**(`passThrough`: boolean): *void*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[setEventPassThroughChildren](_lumin_.ui.uinode.md#seteventpassthroughchildren)*

Sets all descendant UiNodes to either pass through events or
not.

This call is handy if this UiNode potentially has many internal
UiNode children in the Node hierarchy but wants all input
events to pass through them to be processed and dispatched
by this UiNode parent.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`passThrough` | boolean | the event pass through flag.  |

**Returns:** *void*

___

###  setEventSoundID

▸ **setEventSoundID**(`event`: [SoundEvent](../enums/_lumin_.ui.soundevent.md), `nameID`: string): *void*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[setEventSoundID](_lumin_.ui.uinode.md#seteventsoundid)*

Sets the sound ID to be played for the UI event.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | [SoundEvent](../enums/_lumin_.ui.soundevent.md) | the sound event. |
`nameID` | string | the name of the sound to play for the sound event.  |

**Returns:** *void*

___

###  setGravityWellEnabled

▸ **setGravityWellEnabled**(`enabled`: boolean): *void*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[setGravityWellEnabled](_lumin_.ui.uinode.md#setgravitywellenabled)*

Sets whether the gravity well is enabled.

**`priv`** none

**Parameters:**

Name | Type |
------ | ------ |
`enabled` | boolean |

**Returns:** *void*

___

###  setGravityWellProperties

▸ **setGravityWellProperties**(`properties`: [GravityWellProperties](_lumin_.ui.gravitywellproperties.md)): *void*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[setGravityWellProperties](_lumin_.ui.uinode.md#setgravitywellproperties)*

Sets the gravity well properties for this UiNode.

The default gravity well properties for a UiNode are a sharp cornered rectangular
BoundaryShape that matches the UiNode's local AABB that snaps to center of the shape.
This should be sufficient in many situations and all that needs to be done to
turn on the gravity well for the UiNode is to setGravityWellEnabled(true).

The default BoundaryShape size is (0,0), which instructs the UiNode to use its
own local AABB for the shape size and offset.  Setting a size greater than 0 in
either X or Y will turn off the automatic use of local AABB and will use the specified
size and offset of the BoundaryShape instead.  Setting the size back to (0,0) will once
again inform the UiNode to use the local AABB for shape parameters.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`properties` | [GravityWellProperties](_lumin_.ui.gravitywellproperties.md) | the GravityWellProperties.  |

**Returns:** *void*

___

###  setIconColor

▸ **setIconColor**(`rgba`: [number, number, number, number]): *void*

*Inherited from [UiButton](_lumin_.ui.uibutton.md).[setIconColor](_lumin_.ui.uibutton.md#seticoncolor)*

Sets the RGBA color of the button icon.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`rgba` | [number, number, number, number] | Icon color.  |

**Returns:** *void*

___

###  setIconSize

▸ **setIconSize**(`size`: [number, number]): *void*

*Inherited from [UiButton](_lumin_.ui.uibutton.md).[setIconSize](_lumin_.ui.uibutton.md#seticonsize)*

Sets the button icon size in scene units.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`size` | [number, number] | Size of the icon.  |

**Returns:** *void*

___

###  setList

▸ **setList**(`list`: Array‹[DropDownListItem](_lumin_.ui.dropdownlistitem.md)›): *void*

Sets the list of options for the drop-down list.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`list` | Array‹[DropDownListItem](_lumin_.ui.dropdownlistitem.md)› | the list of options.  |

**Returns:** *void*

___

###  setListFont

▸ **setListFont**(`fontResourceId`: bigint): *void*

Sets the font for the list text.

If no font set, the list will use the same font used in the drop-down list
menu button itself.  If no text present in the menu button, the default font will
be used.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fontResourceId` | bigint | The resource id.  |

**Returns:** *void*

___

###  setListMaxHeight

▸ **setListMaxHeight**(`maxHeight`: number): *void*

Sets the max height of a dropdown list.

The default value (0) indicates there is no max and the list will grow as long as
it needs to.  Setting a value greater than zero will set the max height such that
if a list is larger than the max height, the list content will scroll.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`maxHeight` | number | The max height of a list.  |

**Returns:** *void*

___

###  setListTextSize

▸ **setListTextSize**(`size`: number): *void*

Sets the size of the list text.

If no size set, the list will use the same text size used in the drop-down list
menu button itself.  If no text present in the menu button, the default text size will
be used.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`size` | number | the text size  |

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

###  setMaxCharacterLimit

▸ **setMaxCharacterLimit**(`charLimit`: number): *void*

Sets the max amount of characters to be used per list item label before adding '...'.

The default charLimit is 0, which means there is no limit and the
labels will scale to the largest item.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`charLimit` | number | the max amount characters before adding '...'.  |

**Returns:** *void*

___

###  setMultiSelectMode

▸ **setMultiSelectMode**(`multiSelect`: boolean): *void*

Sets the multi-select mode of the drop-down list.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`multiSelect` | boolean | flag indicating if the drop-down list is multi-select capable or not.  |

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

###  setOnActivateResponse

▸ **setOnActivateResponse**(`activateResponse`: [OnActivateResponse](_lumin_.ui.onactivateresponse.md)): *void*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[setOnActivateResponse](_lumin_.ui.uinode.md#setonactivateresponse)*

Sets the OnActivateResponse properties of this UiNode.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`activateResponse` | [OnActivateResponse](_lumin_.ui.onactivateresponse.md) | the OnActivateResponse.  |

**Returns:** *void*

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

###  setRenderingLayer

▸ **setRenderingLayer**(`a_renderLayer`: [RenderingLayer](../enums/_lumin_.render.renderinglayer.md)): *void*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[setRenderingLayer](_lumin_.ui.uinode.md#setrenderinglayer)*

Sets Custom RenderLayer on this UiNode. Which internally sets the render layer
on all RenderNode Children

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_renderLayer` | [RenderingLayer](../enums/_lumin_.render.renderinglayer.md) | Of type uint16_t. Value will be clamped to kRenderingLayerMAX = 999, if more.  Note: Please use, "render::RenderingLayer" enum to set layers. for eg. RenderNode->setRenderingLayer(render::RenderingLayer::kHUDLayer); or you can also send in the layer value as well eg.     RenderNode->setRenderingLayer(static_cast<uint16_t>(render::RenderingLayer::kHUDLayer));  You can also create your own custom layering by using existing layers and your own. eg. uint16_t customHUDLayer1 = static_cast<uint16_t>(render::RenderingLayer::kHUDLayer) + 1;     uint16_t customHUDLayer2 = static_cast<uint16_t>(render::RenderingLayer::kHUDLayer) + 2;     uint16_t customHUDLayer3 = static_cast<uint16_t>(render::RenderingLayer::kHUDLayer) + 3;  |

**Returns:** *void*

▸ **setRenderingLayer**(`a_renderLayer`: number): *void*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[setRenderingLayer](_lumin_.ui.uinode.md#setrenderinglayer)*

Sets Custom RenderLayer on this UiNode. Which internally sets the render layer
on all RenderNode Children

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_renderLayer` | number | Of type uint16_t. Value will be clamped to kRenderingLayerMAX = 999, if more.  |

**Returns:** *void*

___

###  setSelected

▸ **setSelected**(`id`: number, `selected`: boolean): *void*

Set the selected state of a DropDownListItem. This uses the id set for a particular
DropDownListItem, which should be unique. If not unique, the first item with
that id will be set. State will be updated upon closing and reopening the list,
if the list is visible.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | number | the id assigned to the DropDownListItem |
`selected` | boolean | true if this item should be selected  |

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

###  setText

▸ **setText**(`text`: string): *void*

*Inherited from [UiButton](_lumin_.ui.uibutton.md).[setText](_lumin_.ui.uibutton.md#settext)*

Sets the UTF-8 encoded button text.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`text` | string | Text to set for the button.  |

**Returns:** *void*

___

###  setTextColor

▸ **setTextColor**(`rgba`: [number, number, number, number]): *void*

*Inherited from [UiButton](_lumin_.ui.uibutton.md).[setTextColor](_lumin_.ui.uibutton.md#settextcolor)*

Sets the RGBA color of the button text.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`rgba` | [number, number, number, number] | Text color.  |

**Returns:** *void*

___

###  setTextSize

▸ **setTextSize**(`size`: number): *void*

*Inherited from [UiButton](_lumin_.ui.uibutton.md).[setTextSize](_lumin_.ui.uibutton.md#settextsize)*

Sets the button text label render size height in scene units.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`size` | number | Size of text.  |

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

###  showList

▸ **showList**(`visible`: boolean): *void*

Show the dropdownlist or not.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`visible` | boolean | flag indicating if the dropdownlist should be visible.  |

**Returns:** *void*

___

###  stopTransformAnimations

▸ **stopTransformAnimations**(): *void*

*Inherited from [TransformNode](_lumin_.transformnode.md).[stopTransformAnimations](_lumin_.transformnode.md#stoptransformanimations)*

Stops all current property animations.

**`priv`** none

**Returns:** *void*

___

###  updateLayout

▸ **updateLayout**(): *void*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[updateLayout](_lumin_.ui.uinode.md#updatelayout)*

Updates the UiNode layout based on current component attributes.

**`priv`** none

**Returns:** *void*

___

### `Static` Create

▸ **Create**(`prism`: [Prism](_lumin_.prism.md), `labelText`: string): *[UiDropDownList](_lumin_.ui.uidropdownlist.md)*

*Overrides [UiButton](_lumin_.ui.uibutton.md).[Create](_lumin_.ui.uibutton.md#static-create)*

Creates a UiDropDownList element using default settings.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prism` | [Prism](_lumin_.prism.md) | The prism to create this node in. |
`labelText` | string | The UTF-8 encoded text to initially set the dropdownlist label to. |

**Returns:** *[UiDropDownList](_lumin_.ui.uidropdownlist.md)*

The new UiDropDownList node.

___

### `Static` CreateEclipseButton

▸ **CreateEclipseButton**(`prism`: [Prism](_lumin_.prism.md), `buttonParams`: [EclipseButtonParams](_lumin_.ui.eclipsebuttonparams.md)): *[UiButton](_lumin_.ui.uibutton.md)*

*Inherited from [UiButton](_lumin_.ui.uibutton.md).[CreateEclipseButton](_lumin_.ui.uibutton.md#static-createeclipsebutton)*

Creates an Eclipse button from UX specifications.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prism` | [Prism](_lumin_.prism.md) | The prism to create this button for. |
`buttonParams` | [EclipseButtonParams](_lumin_.ui.eclipsebuttonparams.md) | The EclipseButtonParams describing the Eclipse button to create. |

**Returns:** *[UiButton](_lumin_.ui.uibutton.md)*

The new UiButton node representing the Eclipse button.

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

### `Static` RequestFocus

▸ **RequestFocus**(`pUiNode`: [UiNode](_lumin_.ui.uinode.md)): *void*

*Inherited from [UiNode](_lumin_.ui.uinode.md).[RequestFocus](_lumin_.ui.uinode.md#static-requestfocus)*

Requests focus for a UiNode.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pUiNode` | [UiNode](_lumin_.ui.uinode.md) | Pointer to the UiNode that needs focus.  |

**Returns:** *void*

---
id: "_lumin_.node"
title: "Node"
sidebar_label: "Node"
---

Node - Fundamental Object that is used to represent a "Node" in a Prism

## Hierarchy

* **Node**

  ↳ [TransformNode](_lumin_.transformnode.md)

## Methods

###  addChild

▸ **addChild**(`a_pChild`: [Node](_lumin_.node.md)): *boolean*

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

###  addToLayer

▸ **addToLayer**(`a_layer`: bigint): *void*

Adds this node to the specified node layer.  Nodes can be members of multiple layers.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_layer` | bigint |   |

**Returns:** *void*

___

###  findChild

▸ **findChild**(`name`: string): *[Node](_lumin_.node.md)*

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

Returns the anchor position of the node.

**`priv`** none

**Returns:** *[number, number, number]*

The anchor position.

___

###  getChild

▸ **getChild**(`a_iIndex`: number): *[Node](_lumin_.node.md)*

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

Gets the number of immediate children this Node has

**`priv`** none

**Returns:** *number*

Count of immediate child Nodes

___

###  getCurrentPrismTransform

▸ **getCurrentPrismTransform**(): *[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]*

Get the Cached Prism Transform of this Node

**`priv`** none

**Returns:** *[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]*

Transform Matrix

___

###  getCurrentWorldTransform

▸ **getCurrentWorldTransform**(): *[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]*

Get the Cached World Transform of this Node

**`priv`** none

**Returns:** *[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]*

Transform Matrix

___

###  getCursorHoverState

▸ **getCursorHoverState**(): *[CursorHoverState](../enums/_lumin_.cursorhoverstate.md)*

Get the cursor hover state for this Node.

**`priv`** none

**Returns:** *[CursorHoverState](../enums/_lumin_.cursorhoverstate.md)*

the cursor state.

___

###  getLocalAABB

▸ **getLocalAABB**(): *[AABB](_lumin_.math.aabb.md)*

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

###  getLocalTransform

▸ **getLocalTransform**(): *[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]*

Get the Local Transform of this Node

**`priv`** none

**Returns:** *[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]*

Transform Matrix

___

###  getName

▸ **getName**(): *string*

Get the name of the Node.

This call returns EMPTY_STRING if the Node's
name has not been set.

**`priv`** none

**Returns:** *string*

The name of the Node, if set.

___

###  getNodeId

▸ **getNodeId**(): *bigint*

Gets the Node Id of this Node

Every Node is assigned a unique ID per Prism

**`priv`** none

**Returns:** *bigint*

Node id of the current Node

___

###  getParent

▸ **getParent**(): *[Node](_lumin_.node.md)*

Gets this Node's immediate parent

**`priv`** none

**Returns:** *[Node](_lumin_.node.md)*

Parent Node, nullptr = no parent

___

###  getParentedBoneName

▸ **getParentedBoneName**(): *string*

When parented to a parents bone with setParentedBoneName

**`priv`** none

**Returns:** *string*

Parents bone name we are attached to

___

###  getPrismId

▸ **getPrismId**(): *bigint*

Returns the id of the prism the node belongs to.

**`priv`** none

**Returns:** *bigint*

the prism id (0 = invalid prism)

___

###  getRoot

▸ **getRoot**(): *[RootNode](_lumin_.rootnode.md)*

Gets the root node of the node tree this node belongs to.

**`priv`** none

**Returns:** *[RootNode](_lumin_.rootnode.md)*

The root node, or nullptr if none.

___

###  isInLayer

▸ **isInLayer**(`a_layer`: bigint): *boolean*

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

Returns the skip raycast state of the node.

**`priv`** none

**Returns:** *boolean*

True if the node is skipped during raycasting.

___

###  isTriggerable

▸ **isTriggerable**(): *boolean*

Returns true if this node should handle trigger presses directly.

**Returns:** *boolean*

true if this node will handle trigger presses directly when focused,
        false if trigger press will instead enter prism placement mode.

___

###  isVisibilityInherited

▸ **isVisibilityInherited**(): *boolean*

Returns whether this Node's visibility is inherited by its children or not.

**`priv`** none

**Returns:** *boolean*

True if the Node's visiblity is inherited.

___

###  isVisible

▸ **isVisible**(): *boolean*

Returns the visibility state of the node. Note that only the local state is checked, the
effect of a parent's visibility is ignored.

**`priv`** none

**Returns:** *boolean*

True if the Node is visible.

___

###  isVisibleInPrism

▸ **isVisibleInPrism**(): *boolean*

Returns the visibility of the Node in the hierarchy based on self visibility and any
potential inherited visibility.

**`priv`** none

**Returns:** *boolean*

True if the Node is visible in the Prism.

___

###  removeChild

▸ **removeChild**(`a_pChild`: [Node](_lumin_.node.md)): *void*

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

Removes this node from the specified node layer.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_layer` | bigint | The layer this node will be removed from.  |

**Returns:** *void*

___

###  setCursorHoverState

▸ **setCursorHoverState**(`state`: [CursorHoverState](../enums/_lumin_.cursorhoverstate.md)): *void*

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

###  setName

▸ **setName**(`a_name`: string): *boolean*

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

Sets the skip raycast state of the node.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_skipRaycast` | boolean | Raycast skip flag. |
`a_propagateToChildren?` | boolean | `default = false`<br/> Flag to also set the raycast state of any children  |

**Returns:** *void*

___

###  setTriggerable

▸ **setTriggerable**(`a_triggerable`: boolean): *void*

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

Sets the visibility state of the node.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_visible` | boolean | Visibility flag |
`a_propagateToChildren?` | boolean | `default = false`<br/> Flag to also set the visibility state of any children  |

**Returns:** *void*

___

### `Static` Delete

▸ **Delete**(`node`: [Node](_lumin_.node.md)): *void*

Client-side only: this static function is used to delete a
node with its Prism's deleteNode function.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`node` | [Node](_lumin_.node.md) | is the node to delete  |

**Returns:** *void*

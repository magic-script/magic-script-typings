declare module 'lumin' {

  /**
   * Node - Fundamental Object that is used to represent a "Node" in a Prism
   */
  class Node {

    /**
     * Client-side only: this static function is used to delete a
     * node with its Prism's deleteNode function.
     *
     * @param node is the node to delete
     *
     * @priv none
     */
    static Delete(node: Node | null): void

    /**
     * Gets the Node Id of this Node
     *
     * Every Node is assigned a unique ID per Prism
     *
     * @return Node id of the current Node
     *
     * @priv none
     */
    getNodeId(): bigint /* uint64_t */

    /**
     * Returns the id of the prism the node belongs to.
     *
     * @return the prism id (0 = invalid prism)
     *
     * @priv none
     */
    getPrismId(): bigint /* uint64_t */

    /**
     * Adds a child to the current Node, removing it from its current parent.
     *
     * A child can only have a single Parent
     *
     * @param a_pChild The Node to add as a child to this Node.
     *
     * @return true if successful, false if failed
     *
     * @priv none
     */
    addChild(a_pChild: Node | null): boolean

    /**
     * Set the bone in the parent by name that this child will attach to
     * This node must have a parent and the parent must be of type ModelNode.
     *
     * @param a_boneName - bone name to attach to
     *
     * @return true if successful, false if failed
     *
     * @priv none
     */
    setParentedBoneName(a_boneName: string): boolean

    /**
     * When parented to a parents bone with setParentedBoneName
     *
     * @return Parents bone name we are attached to
     *
     * @priv none
     */
    getParentedBoneName(): string

    /**
     * Remove a child from the current Node
     *
     * @param a_pChild The child Node to remove.
     *
     * @priv none
     */
    removeChild(a_pChild: Node | null): void

    /**
     * Gets the n'th child from this Node's children
     *
     * @param a_iIndex The index of the child.
     * @return Child Node
     *
     * @priv none
     */
    getChild(a_iIndex: number /* unsigned int */): Node | null

    /**
     * Gets the number of immediate children this Node has
     *
     * @return Count of immediate child Nodes
     *
     * @priv none
     */
    getChildCount(): number /* unsigned int */

    /**
     * Get the local AABB of this Node only, not including children,
     * aligned to this Node's local coordinate system.
     *
     * A local AABB of math::AABB::EMPTY indicates the Node either
     * has no visual information or that local AABB is not supported
     * for the Node.
     *
     * Note:  The local AABB for ModelNodes is currently not supported
     * and will report math::AABB::EMPTY.
     *
     * @return The bounding box.
     *
     * @priv none
     */
    getLocalAABB(): math.AABB

    /**
     * Get the AABB of this Node's full hierarchy, including all descendants,
     * with all Node transforms applied.
     *
     * The returned AABB encompasses this Node and all descendant Nodes
     * and is aligned to the coordinate system the Node resides within,
     * i.e. the Node's parent coordinate system.
     * Note, the returned AABB is not guaranteed to be the minimal,
     * tightest fitting AABB to encompass the Node's descendant hierarchy,
     * but it will fully enlose the Node's hierarchy.
     *
     * @return The bounding box
     *
     * @priv none
     */
    getAABB(): math.AABB

    /**
     * Find the first named child in the node hierarchy, including this Node.
     *
     * Does a breadth-first search of the child node hierarchy
     * for the specified named Node and will return the first encountered match,
     * or nullptr if no named Node found.
     *
     * @param name The name to search for.
     *
     * @priv none
     */
    findChild(name: string): Node | null

    /**
     * Does a breadth-first search of the child node hierarchy
     * for the specified Node type.
     *
     * @param a_type The type of Node to find in the child hierarchy.
     * @param a_bExactType `default = false`<br/> Flag to indicate if the child node must be the exact type or can be derived from the type (default false).
     * @param a_bIncludeSelf `default = false`<br/> Flag to indicate if the search should include this Node (default false).
     * @return A vector of Node pointers containing the results.
     *
     * @priv none
     */
    findChildren(a_type: number /* int32_t */, a_bExactType?: boolean, a_bIncludeSelf?: boolean): Array<Node | null> /* std::vector<Node*> */

    /**
     * Searches up the tree parentage for the specific Node type.
     *
     * @param a_type The type of Node to find in the parent hierarchy.
     * @param a_bExactType `default = false`<br/> Flag to indicate if the parent node must be the exact type or can be derived from the type (default false).
     * @return The parent node, if found, null if not found.
     *
     * @priv none
     */
    findParent(a_type: number /* int32_t */, a_bExactType?: boolean): Node | null

    /**
     * Gets this Node's immediate parent
     *
     * @return Parent Node, nullptr = no parent
     *
     * @priv none
     */
    getParent(): Node | null

    /**
     * Determines if this Node is within the subtree.
     *
     * @return true if this Node is within the subtree, false if not.
     *
     * @priv none
     */
    isInSubtree(pParent: Node | null): boolean

    /**
     * Gets the root node of the node tree this node belongs to.
     *
     * @return The root node, or nullptr if none.
     *
     * @priv none
     */
    getRoot(): RootNode | null

    /**
     * Sets the visibility state of the node.
     *
     * @param a_visible Visibility flag
     * @param a_propagateToChildren `default = false`<br/> Flag to also set the visibility state of any children
     *
     * @priv none
     */
    setVisible(a_visible: boolean, a_propagateToChildren?: boolean): void

    /**
     * Returns the visibility state of the node. Note that only the local state is checked, the
     * effect of a parent's visibility is ignored.
     *
     * @return True if the Node is visible.
     *
     * @priv none
     */
    isVisible(): boolean

    /**
     * Returns the visibility of the Node in the hierarchy based on self visibility and any
     * potential inherited visibility.
     *
     * @return True if the Node is visible in the Prism.
     *
     * @priv none
     */
    isVisibleInPrism(): boolean

    /**
     * Flags that the visibility state of this node should be inherited by its children. This does
     * not change a child's visibility set by setVisible. A visibility of false will take precedence
     * over a visibility of true. The tables below show the draw result for various combinations of
     * node visibility and inheritance.
     *
     *              visible     inherit     drawn
     *     node  :   false       true        no
     *     child :   true          x         no
     *
     *              visible     inherit     drawn
     *     node  :   false       false       no
     *     child :   true          x         yes
     *
     *              visible     inherit     drawn
     *     node  :   true        true        yes
     *     child :   false         x         no
     *
     *              visible     inherit     drawn
     *     node  :   true        false       yes
     *     child :   false         x         no
     *
     * @param a_inherit Flag that this node's children should inherit its visibility.
     *
     * @priv none
     */
    setVisibilityInherited(a_inherit: boolean): void

    /**
     * Returns whether this Node's visibility is inherited by its children or not.
     *
     * @return True if the Node's visiblity is inherited.
     *
     * @priv none
     */
    isVisibilityInherited(): boolean

    /**
     * Sets whether this node should handle trigger presses directly.
     *
     * @param a_triggerable true if this node should handle trigger presses directly when focused,
     *                      false if trigger press should instead enter prism placement mode.
     *
     * @priv none
     */
    setTriggerable(a_triggerable: boolean): void

    /**
     * Returns true if this node should handle trigger presses directly.
     *
     * @return true if this node will handle trigger presses directly when focused,
     *         false if trigger press will instead enter prism placement mode.
     */
    isTriggerable(): boolean

    /**
     * Sets the skip raycast state of the node.
     *
     * @param a_skipRaycast Raycast skip flag.
     * @param a_propagateToChildren `default = false`<br/> Flag to also set the raycast state of any children
     *
     * @priv none
     */
    setSkipRaycast(a_skipRaycast: boolean, a_propagateToChildren?: boolean): void

    /**
     * Returns the skip raycast state of the node.
     *
     * @return True if the node is skipped during raycasting.
     *
     * @priv none
     */
    isSkipRaycast(): boolean

    /**
     * Get the Local Transform of this Node
     *
     * @return Transform Matrix
     *
     * @priv none
     */
    getLocalTransform(): [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] /* glm::mat4 */

    /**
     * Returns the anchor position of the node.
     *
     * @return The anchor position.
     *
     * @priv none
     */
    getAnchorPosition(): [number, number, number] /* glm::vec3 */

    /**
     * Get the Cached World Transform of this Node
     *
     * @return Transform Matrix
     *
     * @priv none
     */
    getCurrentWorldTransform(): [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] /* glm::mat4 */

    /**
     * Get the Cached Prism Transform of this Node
     *
     * @return Transform Matrix
     *
     * @priv none
     */
    getCurrentPrismTransform(): [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] /* glm::mat4 */

    /**
     * Set the name of the Node
     *
     * By default a Node has no name.
     *
     * @param a_name The new name of the Node.
     * @return true if the name of the Node was successfully set, false otherwise.
     *
     * @priv none
     */
    setName(a_name: string): boolean

    /**
     * Get the name of the Node.
     *
     * This call returns EMPTY_STRING if the Node's
     * name has not been set.
     *
     * @return The name of the Node, if set.
     *
     * @priv none
     */
    getName(): string

    /**
     * Set the cursor hover state for this Node.
     *
     * Setting this will set the cursor state when this Node
     * or any descendant Nodes, that are not explicitly set,
     * are hovered over.
     *
     * @param state The cursor state
     *
     * @priv none
     */
    setCursorHoverState(state: CursorHoverState): void

    /**
     * Get the cursor hover state for this Node.
     *
     * @return the cursor state.
     *
     * @priv none
     */
    getCursorHoverState(): CursorHoverState

    /**
     * Adds this node to the specified node layer.  Nodes can be members of multiple layers.
     * @param a_layer
     *
     * @priv none
     */
    addToLayer(a_layer: bigint /* uint64_t */): void

    /**
     * Removes this node from the specified node layer.
     * @param a_layer The layer this node will be removed from.
     *
     * @priv none
     */
    removeFromLayer(a_layer: bigint /* uint64_t */): void

    /**
     * Checks to see if node subscribes to the specified node layer.
     * @param a_layer The layer to test if this node is a member of.
     * @return True if this node subscribes to the specified layer.
     *
     * @priv none
     */
    isInLayer(a_layer: bigint /* uint64_t */): boolean
  }
}

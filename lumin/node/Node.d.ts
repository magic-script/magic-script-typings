declare module 'lumin' {
  class Node {
    static Delete(node: Node): void
    getNodeId(): number
    getPrismId(): number
    addChild(a_pChild: Node): boolean
    setParentedBoneName(a_boneName: string): boolean
    getParentedBoneName(): string
    removeChild(a_pChild: Node): void
    getChild(a_iIndex: number): Node
    getChildCount(): number
    getLocalAABB(): math.AABB
    getAABB(): math.AABB
    findChild(name: string): Node
    findChildren(a_type: number, a_bExactType: boolean = 0 /* 0 is not the actual default value */, a_bIncludeSelf: boolean = 0 /* 0 is not the actual default value */): Array<Node> /* std::vector */
    findParent(a_type: number, a_bExactType: boolean = 0 /* 0 is not the actual default value */): Node
    getParent(): Node
    isInSubtree(pParent: Node): boolean
    getRoot(): RootNode
    setVisible(a_visible: boolean, a_propagateToChildren: boolean = 0 /* 0 is not the actual default value */): void
    isVisible(): boolean
    isVisibleInPrism(): boolean
    setVisibilityInherited(a_inherit: boolean): void
    isVisibilityInherited(): boolean
    setTriggerable(a_triggerable: boolean): void
    isTriggerable(): boolean
    setSkipRaycast(a_skipRaycast: boolean, a_propagateToChildren: boolean = 0 /* 0 is not the actual default value */): void
    isSkipRaycast(): boolean
    getLocalTransform(): [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] /* glm::mat4 */
    getAnchorPosition(): [number, number, number] /* glm::vec3 */
    getCurrentWorldTransform(): [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] /* glm::mat4 */
    getCurrentPrismTransform(): [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] /* glm::mat4 */
    setName(a_name: string): boolean
    getName(): string
    setCursorHoverState(state: CursorHoverState): void
    getCursorHoverState(): CursorHoverState
    addToLayer(a_layer: number): void
    removeFromLayer(a_layer: number): void
    isInLayer(a_layer: number): boolean
  };
}

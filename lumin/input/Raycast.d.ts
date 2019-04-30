declare module 'lumin' {
  class RaycastResult {
    constructor() {}
    getPointHit(): [number, number, number] /* glm::vec3 */
    getNormal(): [number, number, number] /* glm::vec3 */
    getDistance(): number
    getPrismId(): number
  };
  class RaycastNodeResult extends RaycastResult {
    constructor() {}
    static Create(): RaycastNodeResult
    getNodeId(): number
    getTransitionNodeId(): number
    getTransitionNodePrismId(): number
  };
  class RaycastQuadNodeResult extends RaycastNodeResult {
    constructor() {}
    getUV(): [number, number] /* glm::vec2 */
    getHitFront(): boolean
  };
  class RaycastModelNodeSphereResult extends RaycastNodeResult {
    constructor() {}
  };
  class RaycastModelNodeResult extends RaycastNodeResult {
    constructor() {}
  };
  class RayCastResultLight {
    constructor()
    getDistance(): number
    getPointHit(): [number, number, number] /* glm::vec3 */
    getHitNormal(): [number, number, number] /* glm::vec3 */
    getNodeId(): number
    getPrismId(): number
  };
}

declare module 'lumin' {
  class RaycastResult {
    constructor()
    getPointHit(): [number, number, number] /* glm::vec3 */
    getNormal(): [number, number, number] /* glm::vec3 */
    getDistance(): number
    getPrismId(): BigInt /* uint64_t */
  };
  class RaycastNodeResult extends RaycastResult {
    constructor()
    static Create(): RaycastNodeResult
    getNodeId(): BigInt /* uint64_t */
    getTransitionNodeId(): BigInt /* uint64_t */
    getTransitionNodePrismId(): BigInt /* uint64_t */
  };
  class RaycastQuadNodeResult extends RaycastNodeResult {
    constructor()
    getUV(): [number, number] /* glm::vec2 */
    getHitFront(): boolean
  };
  class RaycastSpriteNodeResult extends RaycastNodeResult {
    constructor()
    getUV(): [number, number] /* glm::vec2 */
    getHitFront(): boolean
  };
  class RaycastModelNodeSphereResult extends RaycastNodeResult {
    constructor()
  };
  class RaycastModelNodeResult extends RaycastNodeResult {
    constructor()
  };
  class RayCastResultLight {
    constructor()
    getDistance(): number
    getPointHit(): [number, number, number] /* glm::vec3 */
    getHitNormal(): [number, number, number] /* glm::vec3 */
    getNodeId(): BigInt /* uint64_t */
    getPrismId(): BigInt /* uint64_t */
  };
}

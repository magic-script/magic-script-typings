declare module 'lumin' {

  /**
   * Base raycast result, also used for prism hits.
   */
  class RaycastResult {
    constructor()

    /**
     * Returns the ray origin, in prism coordinates.
     */
    getRayOrigin(): [number, number, number] /* glm::vec3 */

    /**
     * Returns the ray direction, in prism coordinates.
     */
    getRayDirection(): [number, number, number] /* glm::vec3 */

    /**
     * Returns the point in prism coordinates where the ray intersection occurred
     *
     * @priv none
     */
    getPointHit(): [number, number, number] /* glm::vec3 */

    /**
     * Normal vector at the intersection point. Note not all raycasts support generating normals, so
     * this value should be checked for a 0-length vector before using.
     *
     * @priv none
     **/
    getNormal(): [number, number, number] /* glm::vec3 */

    /**
     * Returns the distance (in meters) from the raycast source to the intersected object.
     * (if 0, source is inside or just touching the object)
     *
     * @priv none
     */
    getDistance(): number /* float */

    /**
     * Returns the prism that was intersected by a raycast.
     *
     * @priv none
     */
    getPrismId(): bigint /* uint64_t */
  }

  /**
   * Raycast result for nodes.
   */
  class RaycastNodeResult extends RaycastResult {
    constructor()

    /**
     * Factory
     */
    static Create(): RaycastNodeResult | null /* std::shared_ptr<RaycastNodeResult> */

    /**
     * Returns the ID of the Node that was intersected by a raycast
     *
     * @priv none
     */
    getNodeId(): bigint /* uint64_t */

    /**
     * Returns the ID of the Node transitioning between enter/exit states.
     *
     * This is the previous raycast hit node on cursor enter and the upcoming
     * raycast hit node on cursor exit
     *
     * @priv none
     */
    getTransitionNodeId(): bigint /* uint64_t */

    /**
     * Returns the Prism ID of the Node transitioning between enter/exit states.
     *
     * This is the previous raycast hit node's Prism on cursor enter and the upcoming
     * raycast hit node's Prism on cursor exit
     *
     * @priv none
     */
    getTransitionNodePrismId(): bigint /* uint64_t */
  }

  /**
   * Raycast result for quad node intersections.
   */
  class RaycastQuadNodeResult extends RaycastNodeResult {
    constructor()

    /**
     * Return normalized ray intersection on the node
     *
     * @priv none
     */
    getUV(): [number, number] /* glm::vec2 */

    /**
     * Return true if the intersection hit the "front" (+z) side of the quad
     *
     * @priv none
     */
    getHitFront(): boolean
  }

  /**
   * Raycast result for sprite node intersections.
   */
  class RaycastSpriteNodeResult extends RaycastNodeResult {
    constructor()

    /**
     * Return normalized ray intersection on the node
     *
     * @priv none
     */
    getUV(): [number, number] /* glm::vec2 */

    /**
     * Return true if the intersection hit the "front" (+z) side of the quad
     *
     * @priv none
     */
    getHitFront(): boolean
  }

  /**
   * Raycast result for model node sphere intersections.
   */
  class RaycastModelNodeSphereResult extends RaycastNodeResult {
    constructor()
  }

  /**
   * Raycast result for model node intersections.
   */
  class RaycastModelNodeResult extends RaycastNodeResult {
    constructor()
  }

  /**
   * A light weight ray cast result
   **/
  class RayCastResultLight {

    /** Constructor */
    constructor()

    /**
     * Return the distance between the ray start and the point hit.
     *
     * @priv none
     */
    getDistance(): number /* float */

    /**
     * Return the point hit, in prism-space.
     *
     * @priv none
     */
    getPointHit(): [number, number, number] /* glm::vec3 */

    /**
     * Return the normal vector at the point hit.
     *
     * @priv none
     */
    getHitNormal(): [number, number, number] /* glm::vec3 */

    /**
     * Return the id of the Node hit.
     *
     * @priv none
     */
    getNodeId(): bigint /* uint64_t */

    /**
     * Return the id of the Prism the hit Node is contained in.
     *
     * @priv none
     */
    getPrismId(): bigint /* uint64_t */
  }
}

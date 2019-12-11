declare module 'lumin' {

  /**
   * Structure to hold the World Raycast Result data.
   */
  class WorldRayCastResult {
    constructor()

    /**
     * Returns the ray start position in world coordinates.
     *
     * @priv none
     */
    getFromPos(): [number, number, number] /* glm::vec3 */

    /**
     * Returns the ray direction in world coordinates.
     *
     * @priv none
     */
    getFromDir(): [number, number, number] /* glm::vec3 */

    /**
     * Returns the number of horizontal rays.
     *
     * @priv none
     */
    getFromWidth(): number /* uint32_t */

    /**
     * Returns the number of vertical rays.
     *
     * @priv none
     */
    getFromHeight(): number /* uint32_t */

    /**
     * Returns the horizontal field-of-view, in degrees.
     *
     * @priv none
     */
    getFromHorizFovDeg(): number /* float */

    /**
     * Returns the ray hit position in world coordinates.
     *
     * @priv none
     */
    getHitPos(): [number, number, number] /* glm::vec3 */

    /**
     * Returns the ray hit normal in world coordinates.
     *
     * @priv none
     */
    getHitNormal(): [number, number, number] /* glm::vec3 */

    /**
     * Returns if the data in this struct is valid.
     *
     * @priv none
     */
    getValid(): boolean

    /**
     * Returns the user value set in the ray request.
     *
     * @priv none
     */
    getUserValue(): bigint /* uint64_t */

    /**
     * Returns the ray confidence level.
     *
     * @priv none
     */
    getConfidence(): number /* float */
  }
}

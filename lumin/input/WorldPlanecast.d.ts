declare module 'lumin' {

  /**
   * Structure to hold the World Raycast Result data.
   */
  class WorldPlaneCastResult {
    constructor()

    /**
     * Returns the planes data.
     *
     * @priv none
     */
    getPlanes(): Array<WorldPlaneCastResult.Plane> /* std::vector<Plane> */

    /**
     * Returns if the data in this struct is valid.
     *
     * @priv none
     */
    getSuccess(): boolean

    /**
     * Returns the user value set in the planes request.
     *
     * @priv none
     */
    getUserValue(): bigint /* uint64_t */
  }
  namespace WorldPlaneCastResult {
    class Plane {

      /**
       * center of the plane, in world space
       */
      center: [number, number, number] /* glm::vec3 */;

      /**
       * plane normal in world space
       */
      normal: [number, number, number] /* glm::vec3 */;

      /**
       * Vertices defining the plane boundary in world space
       */
      vertices: Array<[number, number, number]> /* std::vector<glm::vec3> */;

      /**
       * width of the plane
       */
      width: number /* float */;

      /**
       * height of the plane
       */
      height: number /* float */;

      /**
       * flags used to filter the plane search
       */
      flags: PlanecastFlags;

      /**
       * plane id
       */
      id: bigint /* uint64_t */;
      constructor()
    }
  }
}

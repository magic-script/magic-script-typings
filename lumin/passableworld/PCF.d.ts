declare module 'lumin' {

  /** Persistent Coordinate Frame Id */
  class PCFId {
    constructor()
    constructor(d0: bigint /* uint64_t */, d1: bigint /* uint64_t */)
    equals(other: PCFId): boolean
    static FromString(pcfIdString: string): PCFId
    toString(): string
    getData(): bigint /* uint64_t */
  }

  /**
   * `value = [0,0]`
   */
  const PCF_INVALID: PCFId;

  /**
   * Data associated with a Persistent Coordinate Frame.
   */
  class PCFData {
    constructor()

    /**
     * Returns the PCF id.
     */
    getId(): PCFId

    /**
     * Returns the PCF state.
     */
    getState(): PCFData.State

    /**
     * Returns the PCF transform.
     */
    getTransform(): [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] /* glm::mat4 */

    /**
     * Returns a confidence value (from [0, 1]) representing the confidence in the Persistent Coordinate Frame
     * error within the valid radius.
     */
    getConfidence(): number /* float */

    /**
     * Returns the radius (in meters) within which the confidence is valid.
     */
    getValidRadius(): number /* float */

    /**
     * Returns the rotational error (in degrees).
     */
    getRotationErr(): number /* float */

    /**
     * Returns the translation error (in meters).
     */
    getTranslationErr(): number /* float */
  }
  namespace PCFData {
    enum State {

      /**
       * data is valid
       */
      kValid,

      /**
       * data was requested for an invalid id
       */
      kBadId,

      /**
       * the world mesh has not been built up enough to create the PCF data
       */
      kNoMesh,

      /**
       * app does not have correct permissions to query the PCF system
       */
      kNoPermission,
      kUnknownError,
    }
  }
}

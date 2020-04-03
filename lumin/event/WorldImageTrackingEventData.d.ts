declare module 'lumin' {

  /**
   * WorldImageTrackingEventData - Result from an image tracking request.
   */
  class WorldImageTrackingEventData extends ServerEvent {
    constructor()

    /**
     * Returns the name of a tracked image.
     */
    getName(): string

    /**
     * Returns the location of a tracked image, relative to the volume.
     */
    getPosition(): [number, number, number] /* glm::vec3 */

    /**
     * Returns the rotation of a tracked image, relative to the volume.
     */
    getRotation(): [number, number, number, number] /* glm::quat */
  }
}

declare module 'lumin' {

  /**
   * Class for setting the properties of a light in the scene.
   */
  class LightNode extends TransformNode {

    /**
     * Sets the light type.
     * @param a_type The required light type.
     */
    setType(a_type: utils.LightType): void

    /**
     * Gets the light type.
     * @return The current light type.
     */
    getType(): utils.LightType

    /**
     * Sets the light color.
     * @param a_color The required light color.
     */
    setColor(a_color: [number, number, number] | Float32Array /* glm::vec3 */): void

    /**
     * Gets the light color.
     * @return The current light color.
     */
    getColor(): [number, number, number] /* glm::vec3 */

    /**
     * Sets the light intensity.
     * @param a_intensity The required intensity.
     */
    setIntensity(a_intensity: number /* float */): void

    /**
     * Gets the light intensity.
     * @return The current light type.
     */
    getIntensity(): number /* float */

    /**
     * Sets the light range.
     * @param a_range The required range.
     */
    setRange(a_range: number /* float */): void

    /**
     * Gets the light range.
     * @return The current light range.
     */
    getRange(): number /* float */

    /**
     * Sets the light spot angle (ignored if this is not a spot light).
     * @param a_spotAngle The required spot angle (in radians).
     */
    setSpotAngle(a_spotAngle: number /* float */): void

    /**
     * Gets the light spot angle.
     * @return The current light spot angle (in radians).
     */
    getSpotAngle(): number /* float */

    /**
    * Attempts to set the light's shadow casting status.  Currently the system supports only
    * one shadow casting light.  In landscape mode this light is created by the system and
    * shared by all apps.  In immersive mode, the developer is responsible for setting the
    * the shadow casting light.  Only directional lights can cast shadows.  If this function
    * fails, the reason for the failure will appear in the log.
    * @param a_castsShadows The required shadow casting status.
    * @return True if the transition was actually made.
    */
    trySetCastsShadows(a_castsShadows: boolean): boolean

    /**
     * Gets the light shadow casting status.
     * @return The light shadow casting status.
     */
    getCastsShadows(): boolean

    /**
     * Sets the head pose status of the light. Calling this function and setting
     * a_on to true will result in the light using the headpose world transform
     * as it's own transform.
     * @param a_on Flags whether or not the light will use the headpose world transform.
     * @param a_offset `default = glm.vec4()`<br/> The offset to apply when using the headpose matrix.
     */
    setUseHeadPose(a_on: boolean, a_offset?: [number, number, number, number] | Float32Array /* glm::vec4 */): void

    /**
     * Gets the head pose status of the light.
     * @return True if the light is using head pose in it's transformation.
     */
    getUseHeadPose(): boolean

    /**
     * Gets the headpose offset of the light.
     * Note that while all lights have a valid head pose offset, they will only be used if
     * setUseHeadPose(true, ...) has been called.
     * @return A vector containing the light's positional offset from the headpose matrix.
     */
    getHeadPoseOffset(): [number, number, number, number] /* glm::vec4 */
  }
}

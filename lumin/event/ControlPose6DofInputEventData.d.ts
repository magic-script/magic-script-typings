declare module 'lumin' {

  /**
   * Input event for tracking Control orientation and position (Six Degrees of Freedom)
   */
  class ControlPose6DofInputEventData extends InputEventData {
    constructor()

    /**
     * Returns the W component of the quaternion in world coordinates.
     *
     * @return the W component of the quaternion
     *
     * @priv none
     */
    getQuaternionW(): number /* float */

    /**
     * Returns the X component of the quaternion in world coordinates.
     *
     * @return the X component of the quaternion
     *
     * @priv none
     */
    getQuaternionX(): number /* float */

    /**
     * Returns the Y component of the quaternion in world coordinates.
     *
     * @return the Y component of the quaternion
     *
     * @priv none
     */
    getQuaternionY(): number /* float */

    /**
     * Returns the Z component of the quaternion in world coordinates.
     *
     * @return the Z component of the quaternion
     *
     * @priv none
     */
    getQuaternionZ(): number /* float */

    /**
     * Returns the full quaternion representing Control orientation in world coordinates.
     *
     * @return the full quaternion representing Control orientation.
     *
     * @priv none
     */
    getQuaternion(): [number, number, number, number] /* glm::quat */

    /**
     * Returns the position of the Control in world coordinates.
     *
     * @return X, Y, Z components of the Position
     *
     * @priv none
     */
    get6DofPosition(): [number, number, number] /* glm::vec3 */
  }
}

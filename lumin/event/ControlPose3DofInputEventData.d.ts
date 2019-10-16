declare module 'lumin' {

  /**
   * Input event for tracking Control or MLMA orientation (Three Degrees of Freedom)
   */
  class ControlPose3DofInputEventData extends InputEventData {
    constructor()

    /**
     * Returns the W component of the quaternion in world coordinates.
     *
     * @return the W component of the quaternion
     *
     * @priv none
     */
    getQuaternionW(): number

    /**
     * Returns the X component of the quaternion in world coordinates.
     *
     * @return the X component of the quaternion
     *
     * @priv none
     */
    getQuaternionX(): number

    /**
     * Returns the Y component of the quaternion in world coordinates.
     *
     * @return the Y component of the quaternion
     *
     * @priv none
     */
    getQuaternionY(): number

    /**
     * Returns the Z component of the quaternion in world coordinates.
     *
     * @return the Z component of the quaternion
     *
     * @priv none
     */
    getQuaternionZ(): number

    /**
     * Returns the full quaternion representing Control orientation in world coordinates.
     *
     * @return the full quaternion representing Control orientation.
     *
     * @priv none
     */
    getQuaternion(): [number, number, number, number] /* glm::quat */
  };
}

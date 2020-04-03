declare module 'lumin' {

  /**
   * TransformNode - This Node represents a transformation. Any Node representing something in the
   * physical space of the world should derive from this.
   */
  class TransformNode extends Node {

    /**
     * Set the local position of this Node
     *
     * @param aPos - new position
     *
     * @priv none
     */
    setLocalPosition(aPos: [number, number, number] | Float32Array /* glm::vec3 */): void

    /**
     * Set the local scale of this Node
     *
     * @param aScale - new scale
     *
     * @priv none
     */
    setLocalScale(aScale: [number, number, number] | Float32Array /* glm::vec3 */): void

    /**
     * Set the local rotation of this Node
     *
     * @param aRot - new rotation
     *
     * @priv none
     */
    setLocalRotation(aRot: [number, number, number, number] | Float32Array /* glm::quat */): void

    /**
     * Set the local transform of this Node
     *
     * @param aTransform - transform matrix
     *
     * @priv none
     */
    setLocalTransform(aTransform: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] | Float32Array /* glm::mat4 */): void

    /**
     * Get the Local Position of this Node
     *
     * @return Position
     *
     * @priv none
     */
    getLocalPosition(): [number, number, number] /* glm::vec3 */

    /**
     * Get the Local Scale of this Node
     *
     * @return Scale
     *
     * @priv none
     */
    getLocalScale(): [number, number, number] /* glm::vec3 */

    /**
     * Get the Local Rotation of this Node
     *
     * @return Rotation
     *
     * @priv none
     */
    getLocalRotation(): [number, number, number, number] /* glm::quat */

    /**
     * Sets the anchor position of the Node's transform. Rotations, scaling, and translations of the
     * transform will take place around this point. Changing the anchor point will recalculate
     * the transform to the new anchor point.
     *
     * @param a_position Anchor position. This is relative to the default 0,0,0 position of the
     *                   transform.
     *
     * @priv none
     */
    setAnchorPosition(a_position: [number, number, number] | Float32Array /* glm::vec3 */): void

    /**
     * Get the World Position of this Node
     *
     * @return Position
     *
     * @priv none
     */
    getWorldPosition(): [number, number, number] /* glm::vec3 */

    /**
     * Get the Prism Position of this Node
     *
     * @return Position
     *
     * @priv none
     */
    getPrismPosition(): [number, number, number] /* glm::vec3 */

    /**
     * Adds a delay to the current move sequence.
     *
     * @param durationSecs How long to delay, in seconds.
     * @param track `default = 0`<br/> which animation track to add the delay to.
     *
     * @priv none
     */
    delayMove(durationSecs: number /* float */, track?: number /* int */): void

    /**
     * Adds a client-side callback event to the move list. When the event is reached during the
     * animation playback, the ServerEventCallback function set in Client will be called
     * with an event TransformAnimationEventData.
     *
     * @priv none
     */
    addMoveCallback(track?: number /* int */): void

    /**
     * Stops all current property animations.
     *
     * @priv none
     */
    stopTransformAnimations(): void

    /**
     * Returns the PhysicsRigidBody attached to the node, if the node is participating in the physics
     * system.
     *
     * @return the rigid body
     *
     * @priv none
     */
    getRigidBody(): PhysicsRigidBody | null
  }
}

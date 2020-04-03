declare module 'lumin' {

  /**
   * TransformAnimationEventData - Transform Animation event
   */
  class TransformAnimationEventData extends ServerEvent {
    constructor()

    /**
     * Returns the id of the Node the animation was playing on.
     *
     * @priv none
     */
    getAnimatedNodeId(): bigint /* uint64_t */

    /**
     * Returns the animation track number the CallbackMoveData was triggered on.
     *
     * @priv none
     */
    getTrack(): number /* int */
  }
}

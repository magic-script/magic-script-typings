declare module 'lumin' {

  /**
   * AnimationBlendSetupEvent
   */
  class AnimationBlendSetupEvent extends ServerEvent {
    constructor()

    /**
     * Returns the node ID of the model node associated with this event.
     */
    getNodeId(): bigint /* uint64_t */

    /**
     * Returns the animation resource ID on which this event triggered.
     */
    getBlendSetupResourceId(): bigint /* uint64_t */

    /**
     * Returns state name.
     */
    getStateName(): string

    /** Gets the type of blendsetup event, the enum AnimationBlendSetupEventType.
     *
     * @return AnimationBlendSetupEventType
     */
    getBlendSetupEventType(): AnimationBlendSetupEventType
  }
}

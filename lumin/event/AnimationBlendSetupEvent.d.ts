declare module 'lumin' {

  /**
   * AnimationBlendSetupEvent
   */
  class AnimationBlendSetupEvent extends ServerEvent {
    constructor()

    /**
     * Returns the node ID of the model node associated with this event.
     */
    getNodeId(): BigInt /* uint64_t */

    /**
     * Returns the animation resource ID on which this event triggered.
     */
    getBlendSetupResourceId(): BigInt /* uint64_t */

    /**
     * Returns state name.
     */
    getStateName(): string

    /** Gets the type of blendsetup event, the enum AnimationBlendSetupEventType.
     *
     * @return AnimationBlendSetupEventType
     */
    getBlendSetupEventType(): AnimationBlendSetupEventType
  };
}

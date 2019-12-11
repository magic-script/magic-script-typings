declare module 'lumin' {

  /**
   * Base class for anim events
   */
  class AnimationEventBase extends ServerEvent {
    constructor()

    /**
     * Returns the node ID of the model node associated with this event.
     */
    getNodeId(): bigint /* uint64_t */

    /**
     * Returns the animation resource ID on which this event triggered.
     */
    getAnimationResourceId(): bigint /* uint64_t */

    /**
     * Returns the animation name on which this event triggered.
     */
    getAnimationName(): string
  }

  /**
   * AnimationEvent
   */
  class AnimationEvent extends AnimationEventBase {
    constructor()

    /** Gets the type of Animation event, the enum AnimationEventType.
     *
     * @return AnimationEventType
     */
    getAnimationEventType(): AnimationEventType
  }

  /**
   * Custom user event
   */
  class AnimationEventCustom extends AnimationEventBase {
    constructor()
    getTimeValue(): number /* float */
    getParameters(): string
    getTypeString(): string
  }
}

declare module 'lumin' {

  /**
   * SpriteAnimationEventData - SpriteAnimation events
   */
  class SpriteAnimationEventData extends ServerEvent {
    constructor()

    /**
     * Identify the cause/trigger for the event.
     *
     * @priv none
     */
    getSpriteAnimationEventType(): SpriteAnimationEventType

    /**
     * Get the index of the frame of the animation at which the event occurred.
     *
     * @priv none
     */
    getCurrentFrameIndex(): number /* int32_t */
  }
}

declare module 'lumin' {

  /**
   * Event subclass sent by VideoNode during media playback.
   *
   * The X and Y fields are used to store different data for differnet event types:
   * <ul>
   *   <li>kVideoSizeChanged: X is width, Y is height</li>
   *   <li>kBufferingUpdate: X is the buffering percent, Y is unused</li>
   *   <li>kInfo: X is the info or warning code, Y is an info code to provide more details</li>
   *   <li>kError: X is the type of fatal error, Y is the MediaError code</li>
   * </ul>
   */
  class VideoEventData extends ServerEvent {
    constructor()

    /**
     * Returns the video event type.
     *
     * @return the video event type
     * @priv none
     */
    getVideoEventType(): VideoEventType

    /**
     * Returns the ID of the VideoNode that was affected.
     *
     * @return the ID of the VideoNode that was affected
     * @priv none
     */
    getAffectedNodeId(): bigint /* uint64_t */

    /**
     * Returns event-specific data (see class description).
     *
     * @return event-specific data
     * @priv none
     */
    getXPos(): number /* int */

    /**
     * Returns event-specific data (see class description).
     *
     * @return event-specific data
     * @priv none
     */
    getYPos(): number /* int */
  }
}

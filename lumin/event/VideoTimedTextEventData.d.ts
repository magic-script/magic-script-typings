declare module 'lumin' {

  /**
   * VideoTimedTextEventData - Video events
   */
  class VideoTimedTextEventData extends ServerEvent {
    constructor()

    /**
     * Returns the node ID associated with this event.
     */
    getNodeId(): bigint /* uint64_t */

    /**
     * @return start time
     */
    getStartTime(): number /* int32_t */

    /**
     * @return end time
     */
    getEndTime(): number /* int32_t */

    /**
     * @return text
     */
    getText(): string
  }
}

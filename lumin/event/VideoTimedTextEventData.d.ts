declare module 'lumin' {

  /**
   * VideoTimedTextEventData - Video events
   */
  class VideoTimedTextEventData extends ServerEvent {
    constructor()

    /**
     * Returns the node ID associated with this event.
     */
    getNodeId(): BigInt /* uint64_t */

    /**
     * @return start time
     */
    getStartTime(): number

    /**
     * @return end time
     */
    getEndTime(): number

    /**
     * @return text
     */
    getText(): string
  };
}

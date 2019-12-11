declare module 'lumin' {

  /**
   * Event received for video subtitle updates.
   */
  class VideoSubtitleEventData extends ServerEvent {
    constructor()

    /**
     * Returns the node ID associated with this event.
     *
     * @return the node ID associated with this event
     */
    getNodeId(): bigint /* uint64_t */

    /**
     * Returns the track number.
     *
     * @return the track number
     */
    getTrack(): number /* int32_t */

    /**
     * Returns the time info.
     *
     * @return the time info
     */
    getTime(): bigint /* int64_t */

    /**
     * Returns the duration info.
     *
     * @return the duration info
     */
    getDuration(): bigint /* int64_t */

    /**
     * Returns the size info.
     *
     * @return the size info
     */
    getSize(): number /* int32_t */

    /**
     * Returns the text buffer.
     *
     * @return the text buffer
     */
    getBuffer(): Array<number> /* std::vector<uint8_t> */
  }
}

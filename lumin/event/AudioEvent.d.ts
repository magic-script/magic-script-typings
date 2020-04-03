declare module 'lumin' {

  /**
   * AudioEvent
   */
  class AudioEvent extends ServerEvent {
    constructor()

    /**
     * Returns the node ID of the audio node associated with this event.
     */
    getNodeId(): bigint /* uint64_t */

    /**
     * Returns the audio clip ID on which this event triggered.
     */
    getAudioId(): bigint /* uint64_t */

    /**
     * Gets the type of Audio event, the enum AudioEventType.
     *
     * @return AudioEventType
     */
    getAudioEventType(): AudioEventType
  }
}

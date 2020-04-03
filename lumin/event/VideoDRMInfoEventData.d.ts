declare module 'lumin' {

  /**
   * VideoDRMInfoEventData - Video events
   */
  class VideoDRMInfoEventData extends ServerEvent {
    constructor()

    /**
     * @brief Returns the node affected by this event
     * @return The Id of the Node
     */
    getAffectedNodeId(): bigint /* uint64_t */

    /**
     * @brief Returns MediaTrackType
     * @return MediaTrackType associated with the DrmInfo
     */
    getMediaTrackType(): MediaTrackType

    /**
     * @brief return PSSH infod
     * @return PSSH info
     */
    getPssh(): Map<Array<number>, Array<number>> /* std::map<std::vector<uint8_t>, std::vector<uint8_t>> */

    /**
     * @brief Returns supported schemes
     * @return Vector of supported DRM schemes
     */
    getSupportedSchemes(): Array<Array<number>> /* std::vector<std::vector<uint8_t>> */
  }
}

declare module 'lumin' {

  /**
  *  @enum Orientation
  *  @brief Cue orientation setting
  */
  enum WebVTTOrientation {
    Horizontal,
    Vertical,
  }

  /**
  *  @enum Direction
  *  @brief Cue direction setting
  */
  enum WebVTTDirection {
    Default,
    LeftToRight,
    RightToLeft,
  }

  /**
  *  @enum Align
  *  @brief Cue alignment setting
  */
  enum WebVTTAlignment {
    Start,
    Middle,
    End,
    Left,
    Right,
  }

  /**
   * VideoWebVTTEventData - Video events
   */
  class VideoWebVTTEventData extends ServerEvent {
    constructor()

    /**
     * Returns the node ID associated with this event.
     */
    getNodeId(): bigint /* uint64_t */

    /**
       * @brief Retrieves the start time to display cue.
       * @return The cue's start time in Ms.
       */
    getStartTimeMilliSeconds(): bigint /* int64_t */

    /**
     * @brief Retrieves the end time to display cue.
     * @return The cue's end time in Ms.
     */
    getEndTimeMilliSeconds(): bigint /* int64_t */

    /**
     * @brief Retrieves cue id.
     * @return The cue's Id.
     */
    getCueId(): string

    /**
     * @brief Retrieves cue body to display.
     * @return The cue's renderable text string.
     */
    getCueBody(): string

    /**
     * @brief Retrieves cue's snap to lines property.
     * @return The cue's snap to lines property.
     */
    getSnapToLines(): boolean

    /**
     * @brief Retrieves cue's orientation property.
     * @return The cue's orientation property.
     */
    getCueOrientation(): WebVTTOrientation

    /**
     * @brief Retrieves cue's direction property.
     * @return The cue's direction property.
     */
    getCueDirection(): WebVTTDirection

    /**
     * @brief Retrieves cue's relative line position property.
     * @return The cue's relative line position property.
     */
    getRelativeLinePosition(): number /* float */

    /**
     * @brief Retrieves cue's relative line position percentage property.
     * @return The cue's relative line position pencentage property.
     * 0xFFFFFFFF will be returned for WEBVTT_AUTO.
     */
    getRelativeLinePositionPercentage(): number /* uint32_t */

    /**
     * @brief Retrieves cue's relative line number property.
     * @return The cue's relative line number property.
     */
    getCueLine(): number /* int32_t */

    /**
     * @brief Retrieves cue's relative text position property.
     * @return The cue's relative text position property.
     */
    getCuePosition(): number /* float */

    /**
     * @brief Retrieves cue's text position percentage property.
     * @return The cue's text position percentage property.
     */
    getCuePositionPercentage(): number /* uint32_t */

    /**
     * @brief Retrieves cue's size property.
     * @return The cue's size property.
     */
    getCueSize(): number /* float */

    /**
     * @brief Retrieves cue's size percentage property.
     * @return The cue's size percentage property.
     */
    getCueSizePercentage(): number /* uint32_t */

    /**
     * @brief Retrieves cue's alignment property.
     * @return The cue's alignment property.
     */
    getCueAlignment(): WebVTTAlignment

    /**
     * @return a string representation of this event.
     */
    toString(): string
  }
}

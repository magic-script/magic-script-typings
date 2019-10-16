declare module 'lumin' {

  /**
   * VideoCEA608SubtitleEventData - Video CEA608 subtitle events
   */
  class VideoCEA608SubtitleEventData extends ServerEvent {
    constructor()

    /**
     * Returns the node ID associated with this event.
     */
    getNodeId(): BigInt /* uint64_t */

    /**
     * Returns the track No.
     */
    getTrack(): number

    /**
     * Get the subtitle line at the given index
     * @param index the index at which to retrieve the line
     * @return the given line if it exists, null otherwise
     */
    getLine(index: number): VideoCEA608SubtitleEventData.Line

    /**
     * @return the total number of lines
     */
    getNumLines(): number

    /**
     * @return the list of the line indices that are not empty
     */
    getNonEmptyLinesIndices(): Array<number> /* std::vector */
  };
  enum SubtitleColor {
    kInvalid,
    kWhite,
    kGreen,
    kBlue,
    kCyan,
    kRed,
    kYellow,
    kMagenta,
  }
  class StyleData {
    constructor()
    color: VideoCEA608SubtitleEventData.SubtitleColor;
    italics: boolean;
    underline: boolean;
  };
  class PACData {
    constructor()
    color: VideoCEA608SubtitleEventData.SubtitleColor;
    italics: boolean;
    underline: boolean;
    row: number;
    column: number;
  };
  class Line {
    constructor()
    text: string;
    styleData: Array<VideoCEA608SubtitleEventData.StyleData> /* std::vector */;
    pacData: Array<VideoCEA608SubtitleEventData.PACData> /* std::vector */;
  };
}

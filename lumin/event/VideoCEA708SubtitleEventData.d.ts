declare module 'lumin' {

  /**
   * VideoCEA708SubtitleEventData - Video CEA608 subtitle events
   */
  class VideoCEA708SubtitleEventData extends ServerEvent {
    constructor()

    /**
     * Returns the node ID associated with this event.
     */
    getNodeId(): bigint /* uint64_t */

    /**
     * Returns the track No.
     */
    getTrack(): number /* int32_t */

    /**
     * @return the caption emit type command
     */
    getCaptionEmitTypeCommand(): VideoCEA708SubtitleEventData.CaptionEmitTypeCommand

    /**
     */
    getBuffer(): string | null /* std::optional<std::string> */

    /**
     */
    getControl(): number | null /* std::optional<size_t> */

    /**
     */
    getCWXWindowID(): number | null /* std::optional<int32_t> */

    /**
     */
    getCLWWindowBitmap(): number | null /* std::optional<int32_t> */

    /**
     */
    getDSWWindowBitmap(): number | null /* std::optional<int32_t> */

    /**
     */
    getHDWWindowBitmap(): number | null /* std::optional<int32_t> */

    /**
     */
    getTGWWindowBitmap(): number | null /* std::optional<int32_t> */

    /**
     */
    getDLWWindowBitmap(): number | null /* std::optional<int32_t> */

    /**
     */
    getSPAPenAttributes(): VideoCEA708SubtitleEventData.PenAttributes | null /* std::optional<PenAttributes> */

    /**
     */
    getSPCPenColor(): VideoCEA708SubtitleEventData.PenColor | null /* std::optional<PenColor> */

    /**
     */
    getSPLPenLocation(): VideoCEA708SubtitleEventData.PenLocation | null /* std::optional<PenLocation> */

    /**
     */
    getSWAWindowAttributes(): VideoCEA708SubtitleEventData.WindowAttributes | null /* std::optional<WindowAttributes> */

    /**
     */
    getDFXCaptionWindow(): VideoCEA708SubtitleEventData.Window | null /* std::optional<Window> */
  }
  namespace VideoCEA708SubtitleEventData {
    enum CaptionEmitTypeCommand {

      /**
       * `value = 0`
       */
      kInvalid,

      /** Buffer.
       * `value = 1`
       */
      kBuffer,

      /** Control. */
      kControl,

      /** SetCurrentWindow0-7. */
      kCWX,

      /** ClearWindows. */
      kCLW,

      /** DisplayWindows. */
      kDSW,

      /** HideWindows. */
      kHDW,

      /** ToggleWindows. */
      kTGW,

      /** DeleteWindows. */
      kDLW,

      /** Delay tenths of seconds. */
      kDLY,

      /** DelayCancel. */
      kDLC,

      /** Reset. */
      kRST,

      /** SetPenAttributes. */
      kSPA,

      /** SetPenColor. */
      kSPC,

      /** SetPenLocation. */
      kSPL,

      /** SetWindowAttributes. */
      kSWA,
      kDFX,
    }
    class PenAttributes {
      constructor()
      constructor(penSize: VideoCEA708SubtitleEventData.PenAttributes.PenSize, penOffset: VideoCEA708SubtitleEventData.PenAttributes.Offset, textTag: number /* int32_t */, fontTag: number /* int32_t */, edgeType: number /* int32_t */, underline: boolean, italic: boolean)
      getPenSize(): VideoCEA708SubtitleEventData.PenAttributes.PenSize
      getOffset(): VideoCEA708SubtitleEventData.PenAttributes.Offset
      getTextTag(): number /* int32_t */
      getFontTag(): number /* int32_t */
      getEdgeType(): number /* int32_t */
      getUnderline(): boolean
      getItalic(): boolean
    }
    namespace PenAttributes {
      enum PenSize {
        kSMALL,
        kSTANDARD,
        kLARGE,
      }
      enum Offset {
        kSUBSCRIPT,
        kNORMAL,
        kSUPERSCRIPT,
      }
    }
    class Color {
      constructor()
      constructor(opacity: VideoCEA708SubtitleEventData.Color.Opacity, red: number /* int32_t */, green: number /* int32_t */, blue: number /* int32_t */)
      getOpacity(): VideoCEA708SubtitleEventData.Color.Opacity
      getRed(): number /* int32_t */
      getGreen(): number /* int32_t */
      getBlue(): number /* int32_t */
    }
    namespace Color {
      enum Opacity {
        kSOLID,
        kFLASH,
        kTRANSLUCENT,
        kTRANSPARENT,
      }
    }
    class PenColor {
      constructor()
      constructor(foregroundColor: VideoCEA708SubtitleEventData.Color, backgroundColor: VideoCEA708SubtitleEventData.Color, edgeColor: VideoCEA708SubtitleEventData.Color)
      getForegroundColor(): VideoCEA708SubtitleEventData.Color
      getBackgroundColor(): VideoCEA708SubtitleEventData.Color
      getEdgeColor(): VideoCEA708SubtitleEventData.Color
    }
    class PenLocation {
      constructor()
      constructor(row: number /* int32_t */, column: number /* int32_t */)
      getRow(): number /* int32_t */
      getColumn(): number /* int32_t */
    }
    class WindowAttributes {
      constructor()
      constructor(fillColor: VideoCEA708SubtitleEventData.Color, borderColor: VideoCEA708SubtitleEventData.Color, borderType: number /* int32_t */, wordWrap: boolean, printDirection: number /* int32_t */, scrollDirection: number /* int32_t */, justify: number /* int32_t */, effectDirection: number /* int32_t */, effectSpeed: number /* int32_t */, displayEffect: number /* int32_t */)
      getFillColor(): VideoCEA708SubtitleEventData.Color
      getBorderColor(): VideoCEA708SubtitleEventData.Color
      getBorderType(): number /* int32_t */
      getWordWrap(): boolean
      getPrintDirection(): number /* int32_t */
      getScrollDirection(): number /* int32_t */
      getJustify(): number /* int32_t */
      getEffectDirection(): number /* int32_t */
      getEffectSpeed(): number /* int32_t */
      getDisplayEffect(): number /* int32_t */
    }
    class Window {
      constructor()
      constructor(id: number /* int32_t */, visible: boolean, rowLock: boolean, columnLock: boolean, priority: number /* int32_t */, relativePositioning: boolean, anchorVertical: number /* int32_t */, anchorHorizontal: number /* int32_t */, anchorId: number /* int32_t */, rowCount: number /* int32_t */, columnCount: number /* int32_t */, penStyle: number /* int32_t */, windowStyle: number /* int32_t */)
      getID(): number /* int32_t */
      getVisible(): boolean
      getRowLock(): boolean
      getColumnLock(): boolean
      getPriority(): number /* int32_t */
      getRelativePositioning(): boolean
      getAnchorVertical(): number /* int32_t */
      getAnchorHorizontal(): number /* int32_t */
      getAnchorID(): number /* int32_t */
      getRowCount(): number /* int32_t */
      getColumnCount(): number /* int32_t */
      getPenStyle(): number /* int32_t */
      getWindowStyle(): number /* int32_t */
    }
  }
}

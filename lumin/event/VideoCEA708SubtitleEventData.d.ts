declare module 'lumin' {

  /**
   * VideoCEA708SubtitleEventData - Video CEA608 subtitle events
   */
  class VideoCEA708SubtitleEventData extends ServerEvent {
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
     * @return the caption emit type command
     */
    getCaptionEmitTypeCommand(): VideoCEA708SubtitleEventData.CaptionEmitTypeCommand

    /**
     * 
     */
    getBuffer(): string

    /**
     * 
     */
    getControl(): number

    /**
     * 
     */
    getCWXWindowID(): number

    /**
     * 
     */
    getCLWWindowBitmap(): number

    /**
     * 
     */
    getDSWWindowBitmap(): number

    /**
     * 
     */
    getHDWWindowBitmap(): number

    /**
     * 
     */
    getTGWWindowBitmap(): number

    /**
     * 
     */
    getDLWWindowBitmap(): number

    /**
     * 
     */
    getSPAPenAttributes(): VideoCEA708SubtitleEventData.PenAttributes

    /**
     * 
     */
    getSPCPenColor(): VideoCEA708SubtitleEventData.PenColor

    /**
     * 
     */
    getSPLPenLocation(): VideoCEA708SubtitleEventData.PenLocation

    /**
     * 
     */
    getSWAWindowAttributes(): VideoCEA708SubtitleEventData.WindowAttributes

    /**
     * 
     */
    getDFXCaptionWindow(): VideoCEA708SubtitleEventData.Window
  };
  enum CaptionEmitTypeCommand {
    kInvalid = 0,

    /** Buffer. */
    kBuffer = 1,

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
    constructor(penSize: VideoCEA708SubtitleEventData.PenAttributes.PenSize, penOffset: VideoCEA708SubtitleEventData.PenAttributes.Offset, textTag: number, fontTag: number, edgeType: number, underline: boolean, italic: boolean)
    getPenSize(): VideoCEA708SubtitleEventData.PenAttributes.PenSize
    getOffset(): VideoCEA708SubtitleEventData.PenAttributes.Offset
    getTextTag(): number
    getFontTag(): number
    getEdgeType(): number
    getUnderline(): boolean
    getItalic(): boolean
  };
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
  class Color {
    constructor()
    constructor(opacity: VideoCEA708SubtitleEventData.Color.Opacity, red: number, green: number, blue: number)
    getOpacity(): VideoCEA708SubtitleEventData.Color.Opacity
    getRed(): number
    getGreen(): number
    getBlue(): number
  };
  enum Opacity {
    kSOLID,
    kFLASH,
    kTRANSLUCENT,
    kTRANSPARENT,
  }
  class PenColor {
    constructor()
    constructor(foregroundColor: VideoCEA708SubtitleEventData.Color, backgroundColor: VideoCEA708SubtitleEventData.Color, edgeColor: VideoCEA708SubtitleEventData.Color)
    getForegroundColor(): VideoCEA708SubtitleEventData.Color
    getBackgroundColor(): VideoCEA708SubtitleEventData.Color
    getEdgeColor(): VideoCEA708SubtitleEventData.Color
  };
  class PenLocation {
    constructor()
    constructor(row: number, column: number)
    getRow(): number
    getColumn(): number
  };
  class WindowAttributes {
    constructor()
    constructor(fillColor: VideoCEA708SubtitleEventData.Color, borderColor: VideoCEA708SubtitleEventData.Color, borderType: number, wordWrap: boolean, printDirection: number, scrollDirection: number, justify: number, effectDirection: number, effectSpeed: number, displayEffect: number)
    getFillColor(): VideoCEA708SubtitleEventData.Color
    getBorderColor(): VideoCEA708SubtitleEventData.Color
    getBorderType(): number
    getWordWrap(): boolean
    getPrintDirection(): number
    getScrollDirection(): number
    getJustify(): number
    getEffectDirection(): number
    getEffectSpeed(): number
    getDisplayEffect(): number
  };
  class Window {
    constructor()
    constructor(id: number, visible: boolean, rowLock: boolean, columnLock: boolean, priority: number, relativePositioning: boolean, anchorVertical: number, anchorHorizontal: number, anchorId: number, rowCount: number, columnCount: number, penStyle: number, windowStyle: number)
    getID(): number
    getVisible(): boolean
    getRowLock(): boolean
    getColumnLock(): boolean
    getPriority(): number
    getRelativePositioning(): boolean
    getAnchorVertical(): number
    getAnchorHorizontal(): number
    getAnchorID(): number
    getRowCount(): number
    getColumnCount(): number
    getPenStyle(): number
    getWindowStyle(): number
  };
}

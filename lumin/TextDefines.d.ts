declare module 'lumin' {
  namespace text {

    /**
     * Direction of text flow from one line to the next; e.g., down in English.
     */
    enum FlowDirection {

      /**
       * The next line of text is below.
       */
      kBelow,

      /**
       * The next line of text is above.
       */
      kAbove,

      /**
       * The next line of text is to the right.
       */
      kRight,
      kLeft,
    }

    /**
     * Describes how text in a text region (e.g., paragraph) is justified.
     */
    enum Justification {

      /**
       * All lines start at the starting position (i.e., left-justified for English).
       */
      kStart,

      /**
       * All lines are centered with respect to the text-region boundary.
       */
      kCentered,

      /**
       * All lines end at the last position (i.e., right-justified for English).
       */
      kEnd,
      kJustified,
    }

    /**
     * Data to set up fixed bounds, which is a rectangular area for
     * typesetting and rendering the text of this node.
     *
     * Note the node position is controlled with the local transform.
     * For English, the node position is the upper-left corner of the
     * rendered region, whose shape can be controlled with this data;
     * see functions getFixedBounds and setFixedBounds.
     */
    class FixedBoundsData {

      /**
       * Width of the area in which to render the text.
       */
      width: number;

      /**
       * Height of the area in which to render the text.
       */
      height: number;

      /**
       * Control whether text wraps at the edge; single-line only if false.
       */
      wrap: boolean;

      /**
       * Not yet implemented; right now, partial glyphs will not display at all.
       */
      clip: boolean;

      /**
       * Note clip = true has no effect; clipping partially visible glyphs
       * to the edges of the area is not yet implemented.  At present, only
       * glyphs fully enclosed by the area will be drawn.
       */
      constructor(width: number, height: number, wrap: boolean = 0 /* 0 is not the actual default value */, clip: boolean = 0 /* 0 is not the actual default value */)

      /**
       * Leaves all values uninitialized, same as a C-style struct.
       */
      constructor()

      /** @return a string representation of the data. */
      toString(): string
    };

    /** Vertical flow direction (i.e., up or down). */
    function IsVertical(direction: text.FlowDirection): boolean

    /** Negative flow direction (i.e., left or down). */
    function IsNegative(direction: text.FlowDirection): boolean
  }
  namespace glyph {

    /** Abbreviated name of the 'no-character' in unicode. */
    const NUL_CHAR: number = 0;

    /** Newline character */
    const NEWLINE: number = '\n';

    /** Tab character */
    const TAB_CHAR: number = '\t';

    /** Space character */
    const SPACE_CHAR: number = ' ';

    /** Default size of glyphs in the sheet. */
    const DEFAULT_GLYPH_SIZE: number = 128;

    /** Glyph heights must be positive numbers. */
    const INVALID_HEIGHT: number = 0;
    const BASE_TEXTURE_LEVEL: number = 0;
    const MIN_MIPMAP_TILE_SIZE: number = 2;
    namespace kerning {

      /**
       * Spacing of letters is determined by both the character itself
       * and the one before it in the string, as defined by the font's
       * kerning parameters.
       */
      class Pair {
        previous: number;
        character: number;
        readonly NONE: [number, number] /* glm::vec2 */ = [0,0];
        static IsNone(vector: [number, number] /* glm::vec2 */): boolean
        constructor(prev: number, code: number)

        /**
         * Provide a convenient string representation.
         *
         * @param [assumeAscii=false] if true, print the characters assuming they are ASCII.
         */
        toString(assumeAscii: boolean = 0 /* 0 is not the actual default value */): string

        /** comparison operators */
        equals(rhs: glyph.kerning.Pair): boolean
      };
    }

    /** Identifies the size of the texture relative to the tile size. */
    enum TextureSize {

      /**
       * Glyph fits inside the tile; for most fonts, the majority glyphs are of this size.
       */
      kNormal,
      kLarge,
    }

    /**
     * Describes the quality vs. performance balance when rendering
     * with the font.  Can be controlled with Font2dDesc when the
     * font resource is created.  Note the quality levels above kStd
     * are still experimental and not recommended for most users.
     */
    enum Quality {

      /**
       * Fastest rendering, but the text quality is unacceptable for most use cases.
       */
      kFast,

      /**
       * Standard quality, which is ideal for on-the-fly font loading.
       */
      kStd,

      /**
       * N.B. these are still in development and deprecated; prefer kStd except for testing purposes.
       */
      kStd0,

      /**
       * Like kStd, but still in development.  Experimental -- never for production use.
       */
      kExper,

      /**
       * Uses the same data as kEnh1 with a less accurate but faster shader.
       */
      kEnh1Fast,

      /**
       * Enhanced lvl 1 text, which uses preconditioned font data.
       */
      kEnh1,

      /**
       * Uses same data as kEnh1 but applies extra anti-aliasing; slower than kEnh1.
       */
      kEnh1AA,

      /**
       * Enhanced lvl 2 text, which uses different preconditioned data than kEnh1.
       */
      kEnh2,
      kEnh3,
    }

    /**
     * Direction from the current glyph to the next one on the
     * baseline, which can be horizontal or vertical, in the
     * natural script of the language.
     *
     * Note this has nothing to do with where on the page the
     * writing starts for multiple words on the page (sentences).
     * This is the direction to the next glyph in a word along
     * the baseline of the font.
     */
    enum AdvanceDirection {

      /**
       * The next character is right, as in English and Greek.
       */
      kRight,

      /**
       * The next character is left, as in Hebrew and Arabic.
       */
      kLeft,

      /**
       * The next character is below, as in Mongolian and Japanese.
       */
      kDown,
      kUp,
    }

    /**
     * Metrics provided by the font to position glyphs.
     * Quantities are in tile coordinates, typically [0, 1].
     */
    class Metrics {

      /**
       * Pen advance in the AdvanceDirection to draw the next glyph.
       */
      advancePen: glyph.Metrics.AdvancePen;

      /**
       * The bounding box of the glyph within its tile for horizontal layouts.
       */
      horizBB: glyph.Metrics.BoundingBox;

      /**
       * The bounding box of the glyph within its tile for vertical layouts.
       */
      vertBB: glyph.Metrics.BoundingBox;

      /**
       * Padding for the glyph's width and height, respectively, added
       * for image effects.  The default indicates the glyph is not
       * padded; i.e., it fits snugly into its bounding box.
       */
      padding: [number, number] /* glm::vec2 */;
      constructor(ap: glyph.Metrics.AdvancePen, hbb: glyph.Metrics.BoundingBox, vbb: glyph.Metrics.BoundingBox)
      constructor()
      toString(): string
    };

    /**
     * The layout-dependent distances to advance the pen to the next glyph.
     */
    class AdvancePen {
      horizontal: number;
      vertical: number;
      constructor(horizontal: number = 0 /* 0 is not the actual default value */, vertical: number = 0 /* 0 is not the actual default value */)
      toString(): string
    };

    /**
     * Describes the bounding-box of a glyph within its tile.
     */
    class BoundingBox {
      horizMin: number;
      horizMax: number;
      vertMin: number;
      vertMax: number;

      /** Preconditions: 0 <= xmin <= xmax and 0 <= ymin <= ymax. */
      constructor(xmin: number = 0 /* 0 is not the actual default value */, xmax: number = 0 /* 0 is not the actual default value */, ymin: number = 0 /* 0 is not the actual default value */, ymax: number = 0 /* 0 is not the actual default value */)
      getWidth(): number
      getHeight(): number
      getAspectRatio(): number
      toString(): string
    };

    /**
     * Information about each glyph for use in rendering.  Glyphs occupy tiles,
     * which can be combined to draw text.
     */
    class TileInfo {

      /** Represents "no tile", which has a Unicode value of 0 (the NUL character). */
      readonly NO_TILE: glyph.TileInfo = TileInfo(NUL_CHAR,0,0,[],[],TextureSize.kNormal,Metrics());

      /**
       * Unicode character represented by the glyph.
       */
      charCode: number;

      /**
       * ID of the 2D texture array in which this glyph's tile is drawn.
       */
      textureId: number;

      /**
       * Index of the layer in the 2D texture array containing the glyph.
       */
      layerIndex: number;

      /**
       * Min texture coordinate (u, v) on the 2D-texture layer.
       */
      texMinCoord: [number, number] /* glm::vec2 */;

      /**
       * Max texture coordinate (u, v) on the 2D-texture layer.
       */
      texMaxCoord: [number, number] /* glm::vec2 */;

      /**
       * Identifies the texture size occupied by the glyph's image.
       */
      textureSize: glyph.TextureSize;

      /**
       * Positioning information for the glyph in a string of text.
       */
      metrics: glyph.Metrics;
      constructor(code: number, texId: number, layer: number, texMin: [number, number] /* glm::vec2 */, texMax: [number, number] /* glm::vec2 */, size: glyph.TextureSize, mt: glyph.Metrics)
    };

    /** Object that can be used to create a BitmapFontResource object. */
    class Font2dDesc {
      readonly DEFAULT: glyph.Font2dDesc = Font2dDesc(AdvanceDirection.kRight,text.FlowDirection.kBelow,DEFAULT_GLYPH_SIZE,Quality.kStd);

      /** Direction to the next glyph along the baseline. */
      advanceDirection: glyph.AdvanceDirection;

      /** Direction from one line of text to the next. */
      flowDirection: text.FlowDirection;

      /**
       * The size of all glyph images are given by this parameter; e.g., 32,
       * which implies each glyph will occupy a 32x32 region of a glyph sheet.
       */
      tileSize: number;

      /**
       * Control the quality of the rendered text.  Note kStd
       * does not require glyph pre-processing of fonts.  The other
       * quality levels require the font file to be pre-processed
       * (e.g., with the "prefont" tool; see /tools/prefont/).
       * In that case, the above tileSize field must match that of
       * the pre-processed resources, or the Font2dResource will
       * not load correctly.
       */
      quality: glyph.Quality;

      /**
       * Control the minimum alpha value rendered in each glyph of the
       * font.  Values above 0.2 will cause aliasing to display around
       * the edges of some fonts.  Depending on the use case, however,
       * this may be acceptable in return for improved blending of
       * overlapping letters (e.g., as is the norm in a cursive font).
       * Values much below 0.1, however, can lead to visible edges
       * from overlapping glyphs in the rendered text.
       */
      minAlphaToDiscard: number;
      constructor(advanceDir: glyph.AdvanceDirection, flowDir: text.FlowDirection, tileSize: number, quality: glyph.Quality = 0 /* 0 is not the actual default value */, minAlpha: number = 0 /* 0 is not the actual default value */)
    };

    /** Ratio of the texture size to the tile size: MEDIUM = 1.0, LARGE = 2.0. */
    function GetSizeRatio(size: glyph.TextureSize): number

    /**
     * @return true if the "prefont" tool is required to precondition
     *  the font prior to loading it as a resource.
     */
    function RequiresPreconditioning(qualityLevel: glyph.Quality): boolean

    /**
     * @return true for characters, such as SPACE_CHAR, that are used for
     *   typesetting and do not have a visual representation.
     */
    function IsSpecialCharacter(charCode: number): boolean

    /** Vertical layout (i.e., up or down). */
    function IsVertical(direction: glyph.AdvanceDirection): boolean

    /** Negative pen advance (i.e., left or down). */
    function IsNegative(direction: glyph.AdvanceDirection): boolean

    /** Gets texture size from ratio. */
    function FromSizeRatio(sizeRatio: number): glyph.TextureSize

    /**
     * For scaling glyph metrics in 26.6 pixel format (i.e., 1/64th of
     * pixels); see the FT manual.  Divide FreeType glyph metrics by
     * this value to normalize.
     */
    function PixelFormatNormalizationFactor(tileSize: number): number
  }

  /**
   * Text-node description with reasonable defaults for all properties,
   * with which clients can easily create a new text node; see
   * ClientVolume::createText2dNode.
   */
  class Text2dDesc {

    /**
     * set in constructor
     */
    unicodeText: string;
    advanceDirection: glyph.AdvanceDirection;
    flowDirection: text.FlowDirection;

    /**
     * Don't override the font's default glyph height
     */
    glyphHeight: number;
    tabWidth: number;
    lineSpacing: number;
    characterSpacing: number;

    /**
     * 0 implies no limit by default
     */
    maxGlyphsPerLine: number;
    justification: text.Justification;
    colorRGBA: [number, number, number, number] /* glm::vec4 */;
    constructor(text: string)
  };
  function ToString(vector: [number, number] /* glm::vec2 */): string

  /** Convert to a string representation. */
  function ToString(size: glyph.TextureSize): string

  /** kStd |-> "std", kEnh1 -> "enh1" */
  function ToString(quality: glyph.Quality): string
}

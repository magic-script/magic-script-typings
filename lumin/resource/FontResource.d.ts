declare module 'lumin' {

  /**
   * Interface for objects that manage font resources, which
   * describe how text will be rendered with Lumin.
   */
  class FontResource extends FileResource {
    constructor()

    /**
     * Get the font family; e.g., "Liberation Mono".
     *
     * @priv none
     */
    getFontName(): string

    /**
     * Get the font style; e.g., "Italic".
     *
     * @priv none
     */
    getFontStyle(): string

    /**
     * Get the size of the font; the units are not specified by the interface.
     *
     * @priv none
     */
    getFontSize(): number /* unsigned int */

    /**
     * Get the list of character codes for which glyphs have been loaded.
     *
     * @priv none
     */
    getLoadedGlyphs(): Array<number> /* std::vector<char32_t> */

    /**
     * Get the advance direction.
     *
     * @priv none
     */
    getAdvanceDirection(): glyph.AdvanceDirection

    /**
     * Get the text-flow direction.
     *
     * @priv none
     */
    getFlowDirection(): text.FlowDirection

    /**
     * Get the space between lines of text written with this font.
     *
     * This is a value provided by the font designer to indicate how
     * much space should separate lines of text written with the font
     * relative to the size of a tile (which is 1 in glyph space).
     *
     * @priv none
     */
    getLineSpacing(): number /* float */

    /**
     * The ascender is the vertical distance from the horizontal
     * baseline to the highest glyph coordinate.
     *
     * @priv none
     */
    getAscender(): number /* float */

    /**
     * The descender is the vertical distance from the horizontal
     * baseline to the lowest glyph coordinate, which is negative
     * if any glyphs extend below the baseline (usually they do).
     *
     * @priv none
     */
    getDescender(): number /* float */

    /**
     * Get the global glyph height for the font.
     *
     * Formally, this is the difference between the ascender and descender,
     * which is what getGlyphHeight() returns.
     *
     * @priv none
     */
    getGlyphHeight(): number /* float */
  }
}

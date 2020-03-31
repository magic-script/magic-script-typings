declare module 'lumin' {

  /**
   * Node type that uses fonts loaded with Font2dResource to render 2D text.
   */
  class Text2dNode extends RenderNode {

    /**
     * Convert to Unicode and render the given UTF-8 encoded text.
     *
     * @param utf8Text The text.
     *
     * @priv none
     */
    setUtf8Text(utf8Text: string): void

    /**
     * Convert from Unicode and return the UTF-8 encoded text.
     *
     * @return The UTF-8 encoded text.
     *
     * @priv none
     */
    getUtf8Text(): string

    /**
     * Get the world-space rectangle surrounding the text in the node.
     * Note the corners rotate with the node; this is an "oriented
     * bounding box".  Per the comment for getLocalAABB, this function
     * can be slow if redoing the typesetting is required.
     *
     * @priv none
     */
    getWorldBounds(): [[number, number, number], [number, number, number]] /* std::pair<glm::vec3, glm::vec3> */

    /**
     * The comments for getWorldBounds() apply to this function as well.
     *
     * @priv none
     */
    getPrismBounds(): [[number, number, number], [number, number, number]] /* std::pair<glm::vec3, glm::vec3> */

    /**
     * Set the font resource from a resource id. The font resource ID must be of a Font2dResource
     * object.
     *
     * @param fontResourceId The resource id.
     *
     * @priv none
     */
    setFont(fontResourceId: bigint /* uint64_t */): void

    /**
     * Set the font resource directly.
     *
     * @param fontResource The resource.
     *
     * @priv none
     */
    setFont(fontResource: Font2dResource): void

    /**
     * Set all text-node properties at once using the values in
     * the given data structure.
     *
     * @param desc Info about the text.
     *
     * @priv none
     */
    setProperties(desc: Text2dDesc): void

    /**
     * Set this to override the value specified by the font to lay
     * out the text differently than the default for the language.
     *
     * @param direction The text direction.
     *
     * @priv none
     */
    setAdvanceDirection(direction: glyph.AdvanceDirection): void

    /**
     * Get the advance direction, which comes from the font if
     * not overridden with setAdvanceDirection().
     *
     * @return The advance direction.
     *
     * @priv none
     */
    getAdvanceDirection(): glyph.AdvanceDirection

    /**
     * Set this to override the value specified by the font for
     * the direction of text flow (from one line to the next).
     *
     * @param flowDir The flow direction.
     *
     * @priv none
     */
    setFlowDirection(flowDir: text.FlowDirection): void

    /**
     * Get the text-flow direction, which comes from the font if
     * not overridden with setFlowDirection().
     *
     * @return The flow direction.
     *
     * @priv none
     */
    getFlowDirection(): text.FlowDirection

    /**
     * Get the number of spaces to use for '\t' characters in
     * the string to render with setText.  The default is 4.
     *
     * @return The tab width.
     *
     * @priv none
     */
    getTabWidth(): number /* unsigned int */

    /**
     * Set the number of spaces to use for '\t' characters in
     * the text string; e.g., use 2 for two spaces to be
     * inserted between rendered glyphs separated by '\t'.
     *
     * @param width The tab width.
     *
     * @priv none
     */
    setTabWidth(width: number /* unsigned int */): void

    /**
     * Get the height of the tallest glyph, which is provided
     * by the associated font resource if not overridden with
     * setGlyphHeight(); see FontResource::getGlyphHeight().
     *
     * @return The glyph height.
     *
     * @priv none
     */
    getGlyphHeight(): number /* float */

    /**
     * Control the size of glyphs independently of the node transform
     * by overriding the global glyph height of the font.  Glyph lines
     * will grow or shrink to conform to this constraint but always
     * retain their proportional baseline positions (ascent and descent)
     * and horizontal-to-vertical aspect ratio.
     *
     * @param height A positive value to which the tallest glyph will
     *   be adjusted to equal, with other glyphs adjusted proportionally.
     *
     * @priv none
     */
    setGlyphHeight(height: number /* float */): void

    /**
     * Get the line spacing for the text, which is by default 1 (i.e.,
     * single-spaced).  Spacing can be adjusted with setLineSpacing.
     *
     * @return The line spacing.
     *
     * @priv none
     */
    getLineSpacing(): number /* float */

    /**
     * Set the line spacing to adjust the distance between lines
     * of text; e.g., use 1 for single-spaced text, 2 for double-
     * spaced text.
     *
     * @param spacing The line spacing.
     *
     * @priv none
     */
    setLineSpacing(spacing: number /* float */): void

    /**
     * Sets the additional character spacing that is applied
     * between characters. Note a spacing of 0 is the default
     * spacing.
     * @param spacing the additional distance between characters
     *   as a multiplier of the glyph height.
     *
     * @priv none
     */
    setCharacterSpacing(spacing: number /* float */): void

    /**
     * Gets the current value of the additional character spacing.
     * @return the value of the additional character spacing (as a
     *   multiplier of the glyph height).
     *
     * @priv none
     */
    getCharacterSpacing(): number /* float */

    /**
     * Returns 0 by default, which means no maximum value; see
     * setMaxGlyphsPerLine().
     *
     * @return Number of gylphs before a line break.
     *
     * @priv none
     */
    getMaxGlyphsPerLine(): number /* unsigned int */

    /**
     * If 0, the default, no limit will be enforced on the line
     * length.
     * If positive and wrapping is enabled, line breaks will be added
     * so this limit is not exceeded. If wrapping is not enabled,
     * text will be truncated, instead.
     *
     * @param max Number of glyphs before a line break.
     *
     * @priv none
     */
    setMaxGlyphsPerLine(max: number /* unsigned int */): void

    /**
     * Get the text justification, which is kStart by default.
     *
     * @return The justification.
     *
     * @priv none
     */
    getJustification(): text.Justification

    /**
     * Set the justification for multi-line text.
     *
     * @priv none
     */
    setJustification(justification: text.Justification): void

    /**
     * Set a fixed region in which to render the text in the node.
     * setMaxGlyphsPerLine can still be used in conjunction with
     * setFixedBounds if wrapping is enabled.  Justification
     * will be performed with respect to the width of the given
     * area rather than the node's local bounding box, which is
     * the default behavior if fixed bounds are not set.
     *
     * @param pData `default = null`<br/> a pointer to the description of the text area
     *   to set or nullptr to disable rendering in fixed bounds and
     *   revert to the default behavior of Text2dNode.  If either
     *   the width or height of the data are not both positive,
     *   this function will have no effect, and the previous value
     *   will remain unchanged.
     *
     * @priv none
     */
    setFixedBounds(pData?: text.FixedBoundsData | null): void

    /**
     * @return the fixed bounds of the text node or else nullptr
     *   if fixed bounds have not been set; see setFixedBounds.
     *   Note: the caller must not delete the returned pointer.
     *
     * @priv none
     */
    getFixedBounds(): text.FixedBoundsData | null

    /**
     * Get the font resource or nullptr if no font has been set.
     *
     * @return The FontResource.
     *
     * @priv none
     */
    getFontResource(): Font2dResource | null

    /**
     * Get the text currently set to be rendered by this node.
     *
     * @return The text.
     *
     * @priv none
     */
    getText(): string

    /**
     * Uses a single font and the transform to render the text.
     * Use the '\n' character to advance to the next line and
     * '\t' to insert spaces between glyphs.  Note if a maximum
     * line width has been set, newlines will be automatically
     * inserted to prevent text lines from exceeding its value.
     *
     * See member functions setMaxLineWidth, setTabWidth, and
     * setLineSpacing to control this behavior.
     *
     * @param unicodeText The text.
     *
     * @priv none
     */
    setText(unicodeText: string): void

    /**
     * Sets whether the Text2dNode should be in edit mode
     * or not.  Edit mode allows the Text2dNode to be
     * used to enter and edit text, turning off white-space
     * trimming and providing cursor positions for each
     * character.
     *
     * @param editFlag The flag to set edit mode or not.
     *
     * @priv none
     */
    setEditMode(editFlag: boolean): void

    /**
     * Gets whether the Text2dNode is in edit mode.
     *
     * @return true if in edit mode, false otherwise.
     *
     * @priv none
     */
    getEditMode(): boolean

    /**
     * Retrieves cursor positions for each character in the
     * displayed text when in edit mode.  The list will be
     * empty if not in edit mode.
     *
     * The very first position index represents the cursor home
     * position (where the cursor would be without any text)
     * and all subsequent position indices are offset by +1
     * to their respective character in the text.
     *
     * @return the cursor position list.
     *
     * @priv none
     */
    getCursorPositions(): Array<[number, number]> /* std::vector<glm::vec2> */
  }
}

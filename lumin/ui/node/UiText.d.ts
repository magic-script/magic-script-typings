declare module 'lumin' {
  namespace ui {

    /**
     * UiText - This node represents a UI text element.
     */
    class UiText extends UiNode {

      /**
       * Creates a UiText element with default settings.
       *
       * @param prism The prism to create this node for.
       * @param text - The UTF-8 encoded text to initially set the UiText to.
       * @param style `default = resources.FontStyle.kNormal`<br/> The style of the Magic Leap font.
       * @param weight `default = resources.FontWeight.kRegular`<br/> The weight (i.e., thickness) of the Magic Leap font.
       * @return The new UiText node.
       *
       * @priv none
       */
      static Create(prism: Prism, text: string, style?: resources.FontStyle, weight?: resources.FontWeight): ui.UiText

      /**
       * Creates an Eclipse label from UX specifications.
       *
       * @param prism The prism to create this node for.
       * @param text - The UTF-8 encoded text to initially set the Eclipse label to.
       * @param labelType - The EclipseLabelType.
       *
       * @priv none
       */
      static CreateEclipseLabel(prism: Prism, text: string, labelType: ui.EclipseLabelType): ui.UiText

      /**
       * Gets the font parameters for the eclipse font type.
       *
       * @param labelType the Eclipse label type.
       * @return the font parameters associated with the Eclipse label type.
       *
       * @priv none
       */
      static GetEclipseFontParameters(labelType: ui.EclipseLabelType): ui.FontParams

      /**
       * Sets the font resource from a resource id. The font resource ID must be of a Font2dResource
       * object.
       *
       * @param fontResourceId The resource id.
       *
       * @priv none
       */
      setFont(fontResourceId: bigint /* uint64_t */): void

      /**
       * Sets the font resource directly.
       *
       * @param fontResource The resource.
       *
       * @priv none
       */
      setFont(fontResource: Font2dResource): void

      /**
       * Sets the font style and weight.
       *
       * This will use one of the default set of Magic Leap
       * font resources that support style and weight.
       *
       * @param style The style of the Magic Leap font.
       * @param weight `default = resources.FontWeight.kRegular`<br/> The weight (i.e., thickness) of the Magic Leap font.
       *
       * @priv none
       */
      setFont(style: resources.FontStyle, weight?: resources.FontWeight): void

      /**
       * Sets the font parameters, including syle, weight,
       * pixel size, and tracking.
       *
       * This will use one of the default set of Magic Leap
       * font resources that support style and weight.
       *
       * @param fontParameters The font parameters to use.
       *
       * @priv none
       */
      setFontParameters(fontParameters: ui.FontParams): void

      /**
       * Get the font resource or nullptr if no font has been set.
       *
       * @return The FontResource.
       *
       * @priv none
       */
      getFontResource(): Font2dResource

      /**
       * Sets the RGBA color of the rendered text.
       *
       * @param rgba Text color.
       *
       * @priv none
       */
      setTextColor(rgba: [number, number, number, number] /* glm::vec4 */): void

      /**
       * Gets the RGBA color of the rendered text.
       *
       * @return Text color.
       *
       * @priv none
       */
      getTextColor(): [number, number, number, number] /* glm::vec4 */

      /**
       * Sets the UTF-8 encoded text.
       *
       * @param text - Text to set for the UiText element.
       *
       * @priv none
       */
      setText(text: string): void

      /**
       * Gets the UTF-8 encoded text.
       *
       * @return a const reference to the text string.
       *
       * @priv none
       */
      getText(): string

      /**
       * Sets the text render size height in scene units.
       *
       * @param size - Size of text.
       *
       * @priv none
       */
      setTextSize(size: number): void

      /**
       * Gets the text render size height in scene units.
       *
       * @return the text size.
       *
       * @priv none
       */
      getTextSize(): number

      /**
       * Sets the text bounds size in scene units.
       *
       * The default value of 0,0 indicates there is no bounds
       * and the text can grow and will not wrap or truncate. Setting
       * the bounds greater than 0 in both X and Y will set
       * the text bounds and cause the text to wrap or truncate within.
       *
       * @param boundsSize the text bounds.
       * @param wrap `default = true`<br/> to wrap the text within the bounds or truncate
       *
       * @priv none
       */
      setBoundsSize(boundsSize: [number, number] /* glm::vec2 */, wrap?: boolean): void

      /**
       * Gets the text bounds size.
       *
       * @return the bounds size.
       *
       * @priv none
       */
      getBoundsSize(): [number, number] /* glm::vec2 */

      /**
       * Sets the additional character spacing that is applied
       * between characters. Note a spacing of 0 is the default
       * spacing.
       * @param spacing the additional distance between characters
       *   as a multiplier of the glyph height.
       *
       * @priv none
       */
      setCharacterSpacing(spacing: number): void

      /**
       * Gets the current value of the additional character spacing.
       * @return the value of the additional character spacing (as a
       *   multiplier of the glyph height).
       *
       * @priv none
       */
      getCharacterSpacing(): number

      /**
       * Sets the line spacing to adjust the distance between lines
       * of text; e.g., use 1 for single-spaced text, 2 for double-
       * spaced text. Default is 1.0.
       *
       * @param spacing The line spacing.
       *
       * @priv none
       */
      setLineSpacing(spacing: number): void

      /**
       * Gets the line spacing for the text, which is by default 1 (i.e.,
       * single-spaced).  Spacing can be adjusted with setLineSpacing.
       *
       * @return The line spacing.
       *
       * @priv none
       */
      getLineSpacing(): number

      /**
       * Sets whether all caps is enforced or not.
       *
       * @param allCaps - flag to enable all caps enforcement.
       *
       * @priv none
       */
      setAllCaps(allCaps: boolean): void

      /**
       * Gets whether all caps is enforced or not.
       *
       * @return True if all caps is enforced, false if not.
       *
       * @priv none
       */
      getAllCaps(): boolean

      /**
       * Aligns the text to the left, center or right or justifies it.
       * @param alignment One of the values defined in HorizontalTextAlignment.
       *
       * @priv none
       */
      setTextAlignment(alignment: ui.HorizontalTextAlignment): void

      /**
       * Gets the current alignment of the text.
       * @return The current alignment of the text.
       *
       * @priv none
       */
      getTextAlignment(): ui.HorizontalTextAlignment
    }
  }
}

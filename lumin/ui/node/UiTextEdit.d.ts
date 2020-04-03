declare module 'lumin' {
  namespace ui {
    namespace KeyboardEvent {
    }

    /**
     * UiTextEdit provides for text input and editing.
     */
    class UiTextEdit extends ui.UiNode {

      /**
       * Creates a UiTextEdit element with default settings.
       *
       * @param prism - The prism to create this node for.
       * @param text - The UTF-8 encoded text to initially set the UiTextEdit to.
       * @param width - The width of the text edit area.
       * @param height - The height of the text edit area.
       * @return The new UiTextEdit node.
       *
       * @priv none
       */
      static Create(prism: Prism | null, text: string, width: number /* float */, height: number /* float */): ui.UiTextEdit | null

      /**
       * The on text changed Event.
       *
       * This event is dispatched whenever the text has been altered by input.
       *
       * @priv none
       */
      onTextChangedSub(callback: ((arg0: ui.UiEventData) => void) | null /* std::function<void(UiEventData)> */): utils.CallbackID
      onTextChangedUnsub(callbackID: utils.CallbackID): boolean

      /**
       * The on character entered Event.
       *
       * This event is dispatched whenever a character has been entered into the
       * text edit field and processed, whether the character alters the text or not.
       *
       * @priv none
       */
      onCharacterEnteredSub(callback: ((arg0: ui.UiEventData, arg1: number) => void) | null /* std::function<void(UiEventData, char32_t)> */): utils.CallbackID
      onCharacterEnteredUnsub(callbackID: utils.CallbackID): boolean

      /**
       * The on keyboard event Event.
       *
       * This event is dispatched whenever a keyboard event is received by this text
       * edit field.
       *
       * @priv none
       */
      onKeyboardEventSub(callback: ((arg0: ui.UiEventData, arg1: ui.KeyboardEvent.EventData) => void) | null /* std::function<void(UiEventData,KeyboardEvent::EventData)> */): utils.CallbackID
      onKeyboardEventUnsub(callbackID: utils.CallbackID): boolean

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
       * Gets the font resource or nullptr if no font has been set.
       *
       * @return The FontResource.
       *
       * @priv none
       */
      getFontResource(): Font2dResource | null

      /**
       * Sets the RGBA color of the rendered text.
       *
       * @param rgba Text color.
       *
       * @priv none
       */
      setTextColor(rgba: [number, number, number, number] | Float32Array /* glm::vec4 */): void

      /**
       * Gets the RGBA color of the rendered text.
       *
       * @return Text color.
       *
       * @priv none
       */
      getTextColor(): [number, number, number, number] /* glm::vec4 */

      /**
       * Sets the padding around the text within the text edit area.
       * Defaults to half the text size unless explicitly set.
       *
       * The padding order is:  top, right, bottom, left.
       *
       * @param padding the padding vector for the 4 sides.
       *
       * @priv none
       */
      setTextPadding(padding: [number, number, number, number] | Float32Array /* glm::vec4 */): void

      /**
       * Gets the content padding of the 4 sides.
       *
       * @return the padding.
       *
       * @priv none
       */
      getTextPadding(): [number, number, number, number] /* glm::vec4 */

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
      setTextSize(size: number /* float */): void

      /**
       * Gets the text render size height in scene units.
       *
       * @return the text size.
       *
       * @priv none
       */
      getTextSize(): number /* float */

      /**
       * Sets whether the scrolling is enabled or not.
       *
       * @param scrollingEnabled the enabled flag.
       *
       * @priv none
       */
      setScrollingEnabled(scrollingEnabled: boolean): void

      /**
       * Gets whether the scrolling is enabled or not.
       *
       * @return true if scrolling is enabled, false if not.
       *
       * @priv none
       */
      getScrollingEnabled(): boolean

      /**
       * Sets the cursor edge scroll mode for this text edit.
       *
       * @param mode the CursorEdgeScrollMode.
       *
       * @priv none
       */
      setCursorEdgeScrollMode(mode: ui.CursorEdgeScrollMode): void

      /**
       * Gets the cursor edge scroll mode for this text edit.
       *
       * @return the CursorEdgeScrollMode.
       *
       * @priv none
       */
      getCursorEdgeScrollMode(): ui.CursorEdgeScrollMode

      /**
       * Sets the scroll speed in scene units per second.
       *
       * @param scrollSpeed the scroll speed.
       *
       * @priv none
       */
      setScrollSpeed(scrollSpeed: number /* float */): void

      /**
       * Gets the scroll speed in scene units per second.
       *
       * @return the scroll speed.
       *
       * @priv none
       */
      getScrollSpeed(): number /* float */

      /**
       * Sets the maximum number of characters allowed in the text edit.
       *
       * @param limit - the maximum number of characters.
       *
       * @priv none
       */
      setCharacterLimit(limit: number /* size_t */): void

      /**
       * Gets the maximum number of characters allowed in the text edit.
       *
       * @return the maximum number of characters.
       *
       * @priv none
       */
      getCharacterLimit(): number /* size_t */

      /**
       * Gets the character count in the text edit.
       *
       * @return the character count.
       *
       * @priv none
       */
      getCharacterCount(): number /* size_t */

      /**
       * Sets whether the text edit is in multiline mode or not.
       *
       * Default is single line.
       *
       * @param multilineMode the multi-line flag.
       *
       * @priv none
       */
      setMultilineMode(multilineMode: boolean): void

      /**
       * Gets whether the text edit is in multiline mode or not.
       *
       * @return true if multiline, false if not.
       *
       * @priv none
       */
      getMultilineMode(): boolean

      /**
       * Sets whether the text edit is in password mode or not.
       *
       * @param passwordMode the password mode flag.
       *
       * @priv none
       */
      setPasswordMode(passwordMode: boolean): void

      /**
       * Gets the password mode of the text edit.
       *
       * @return true if in password mode, false otherwise.
       *
       * @priv none
       */
      getPasswordMode(): boolean

      /**
       * Sets the current text entry mode of the text edit.
       *
       * @param entryMode the new text entry mode.
       *
       * @priv none
       */
      setTextEntryMode(entryMode: ui.TextEntryMode): void

      /**
       * Gets the text entry mode of the text edit.
       *
       * @return the current mode of text entry.
       *
       * @priv none
       */
      getTextEntryMode(): ui.TextEntryMode

      /**
       * Gets the size of the text edit area.
       *
       * @return the size of the area.
       *
       * @priv none
       */
      getSize(): [number, number] /* glm::vec2 */

      /**
       * Selects all characters between two zero-based indices.
       *
       * @param startIndex the first index for text selection.
       * @param endIndex the last index for text selection.
       *
       * @priv none
       */
      setSelectedText(startIndex: number /* unsigned int */, endIndex: number /* unsigned int */): void

      /**
       * Selects all characters in the text edit.
       *
       * @priv none
       */
      selectAll(): void

      /**
       * Unselects all characters in the text edit.
       *
       * @priv none
       */
      unselectAll(): void

      /**
       * Sets the properties of the keyboard that will be used when this text edit
       * field is activated.
       * @param keyboardProperties the structure containing the keyboard properties.
       *
       * @priv none
       */
      setKeyboardProperties(keyboardProperties: ui.KeyboardProperties): void

      /**
       * Gets the UTF-8 encoded text used for the hint.
       * @return text used for the hint.
       *
       * @priv none
       */
      getHintText(): string

      /**
       * Sets the UTF-8 encoded text for the hint.
       * @param str The text for the hint.
       *
       * Note, this call will be ignored if there is a current localization key set for the hint.
       * Set the localization key to empty string, "", to unset it.
       *
       * @priv none
       */
      setHintText(str: string): void

      /**
       * Sets the localization key and optional parameters for the hint text.
       *
       * Once a key is set, this hint text will be populated with the translation text
       * of the current locale based on the key and any potential parameters.
       *
       * @param key The localization key.  Use empty string, "", to unset the key.
       * @param params `default = []`<br/> The list of optional localization parameters.
       */
      setLocalizedHintText(key: string, params?: { [key:string]: utils.LocaleHelper.Param } | Map<string, utils.LocaleHelper.Param> /* std::unordered_map<std::string, utils::LocaleHelper::Param> */): void

      /**
       * Gets the text color of the hint.
       * @return The color of the hint text.
       *
       * @priv none
       */
      getHintTextColor(): [number, number, number, number] /* glm::vec4 */

      /**
       * Sets the text color of the hint.
       * @param color The color for the hint text. If its alpha value is 0, this color is ignored and the color returned by getTextColor() is used instead.
       *
       * @priv none
       */
      setHintTextColor(color: [number, number, number, number] | Float32Array /* glm::vec4 */): void

      /**
       * Creates and shows the scrollbar in the vertical direction.
       * If a scrollbar already exists, only its visibility is affected.
       * This function also attaches the scrollbar to the ScrollView that will manage it.
       * @param visibilityMode `default = ScrollBarVisibility.kAuto`<br/> the visibility mode of the scrollbar.
       *
       * @priv none
       */
      setScrollBarVisibilityMode(visibilityMode?: ui.ScrollBarVisibility): void

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
       * Sets the line spacing to adjust the distance between lines
       * of text; e.g., use 1 for single-spaced text, 2 for double-
       * spaced text. Default is 1.0.
       *
       * @param spacing The line spacing.
       *
       * @priv none
       */
      setLineSpacing(spacing: number /* float */): void

      /**
       * Gets the line spacing for the text, which is by default 1 (i.e.,
       * single-spaced).  Spacing can be adjusted with setLineSpacing.
       *
       * @return The line spacing.
       *
       * @priv none
       */
      getLineSpacing(): number /* float */

      /**
       * Aligns the text to the left, center or right or justifies it.
       * @param alignment One of the values defined in HorizontalTextAlignment.
       *
       *  @priv none
       */
      setTextAlignment(alignment: ui.HorizontalTextAlignment): void

      /**
       * Manually scrolls the textEdit content position using a normalized value between 0 and 1.
       *
       * @param scrollValue the normalized value between 0 and 1.
       *
       *  @priv none
       */
      setScrollValue(scrollValue: number /* float */): void

      /**
       * Gets the normalized position of the text edit's scroll content, between 0 and 1.
       *
       * @return the normalized position value of the scroll content, between 0 and 1.
       *
       *  @priv none
       */
      getScrollValue(): number /* float */
    }
  }
}

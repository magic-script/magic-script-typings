declare module 'lumin' {
  namespace ui {
    namespace KeyboardEvent {
    }
    class UiTextEdit extends UiNode {
      static Create(prism: Prism, text: string, width: number, height: number): ui.UiTextEdit
      onTextChangedSub(callback: callable): utils.CallbackID
      onTextChangedUnsub(callbackID: utils.CallbackID): boolean
      onCharacterEnteredSub(callback: callable): utils.CallbackID
      onCharacterEnteredUnsub(callbackID: utils.CallbackID): boolean
      onKeyboardEventSub(callback: callable): utils.CallbackID
      onKeyboardEventUnsub(callbackID: utils.CallbackID): boolean
      setFont(fontResourceId: number): void
      setFont(fontResource: Font2dResource): void
      setFont(style: resources.FontStyle, weight: resources.FontWeight = 0 /* 0 is not the actual default value */): void
      setFontParameters(fontParameters: ui.FontParams): void
      getFontResource(): Font2dResource
      setTextColor(rgba: [number, number, number, number] /* glm::vec4 */): void
      getTextColor(): [number, number, number, number] /* glm::vec4 */
      setTextPadding(padding: [number, number, number, number] /* glm::vec4 */): void
      getTextPadding(): [number, number, number, number] /* glm::vec4 */
      setText(text: string): void
      getText(): string
      setTextSize(size: number): void
      getTextSize(): number
      setScrollingEnabled(scrollingEnabled: boolean): void
      getScrollingEnabled(): boolean
      setCursorEdgeScrollMode(mode: ui.CursorEdgeScrollMode): void
      getCursorEdgeScrollMode(): ui.CursorEdgeScrollMode
      setScrollSpeed(scrollSpeed: number): void
      getScrollSpeed(): number
      setCharacterLimit(limit: number): void
      getCharacterLimit(): number
      getCharacterCount(): number
      setMultilineMode(multilineMode: boolean): void
      getMultilineMode(): boolean
      setPasswordMode(passwordMode: boolean): void
      getPasswordMode(): boolean
      setTextEntryMode(entryMode: ui.TextEntryMode): void
      getTextEntryMode(): ui.TextEntryMode
      getSize(): [number, number] /* glm::vec2 */
      setSelectedText(startIndex: number, endIndex: number): void
      selectAll(): void
      unselectAll(): void
      setKeyboardProperties(keyboardProperties: ui.KeyboardProperties): void
      getHintText(): string
      setHintText(str: string): void
      getHintTextColor(): [number, number, number, number] /* glm::vec4 */
      setHintTextColor(color: [number, number, number, number] /* glm::vec4 */): void
      setScrollBarVisibilityMode(visibilityMode: ui.ScrollBarVisibility = 0 /* 0 is not the actual default value */): void
      setCharacterSpacing(spacing: number): void
      getCharacterSpacing(): number
      setLineSpacing(spacing: number): void
      getLineSpacing(): number
      setTextAlignment(alignment: ui.HorizontalTextAlignment): void
      setScrollValue(scrollValue: number): void
      getScrollValue(): number
    };
  }
}

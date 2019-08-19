declare module 'lumin' {
  namespace ui {
    class UiText extends UiNode {
      static Create(prism: Prism, text: string, style: resources.FontStyle = 0 /* 0 is not the actual default value */, weight: resources.FontWeight = 0 /* 0 is not the actual default value */): ui.UiText
      static CreateEclipseLabel(prism: Prism, text: string, labelType: ui.EclipseLabelType): ui.UiText
      static CreateLocalized(prism: Prism, key: string, params: Object = 0 /* 0 is not the actual default value */): ui.UiText
      static CreateLocalizedEclipseLabel(prism: Prism, labelType: ui.EclipseLabelType, key: string, params: Object = 0 /* 0 is not the actual default value */): ui.UiText
      static GetEclipseFontParameters(labelType: ui.EclipseLabelType): ui.FontParams
      onLocaleChangedSub(callback: callable): utils.CallbackID
      onLocaleChangedUnsub(callbackID: utils.CallbackID): boolean
      setFont(fontResourceId: BigInt /* uint64_t */): void
      setFont(fontResource: Font2dResource): void
      setFont(style: resources.FontStyle, weight: resources.FontWeight = 0 /* 0 is not the actual default value */): void
      setFontParameters(fontParameters: ui.FontParams): void
      getFontResource(): Font2dResource
      setTextColor(rgba: [number, number, number, number] /* glm::vec4 */): void
      getTextColor(): [number, number, number, number] /* glm::vec4 */
      setText(text: string): void
      getText(): string
      setLocalization(key: string, params: Object): void
      setLocalizationKey(key: string): void
      getLocalizationKey(): string
      setLocalizationParams(params: Object): void
      getLocalizationParams(): Object
      setTextSize(size: number): void
      getTextSize(): number
      setBoundsSize(boundsSize: [number, number] /* glm::vec2 */, wrap: boolean = 0 /* 0 is not the actual default value */): void
      getBoundsSize(): [number, number] /* glm::vec2 */
      setCharacterSpacing(spacing: number): void
      getCharacterSpacing(): number
      setLineSpacing(spacing: number): void
      getLineSpacing(): number
      setAllCaps(allCaps: boolean): void
      getAllCaps(): boolean
      setTextAlignment(alignment: ui.HorizontalTextAlignment): void
      getTextAlignment(): ui.HorizontalTextAlignment
    };
  }
}

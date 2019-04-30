declare module 'lumin' {
  namespace ui {
    class UiText extends UiNode {
      static Create(prism: Prism, text: string, style: resources.FontStyle = 0 /* 0 is not the actual default value */, weight: resources.FontWeight = 0 /* 0 is not the actual default value */): ui.UiText
      static CreateEclipseLabel(prism: Prism, text: string, labelType: ui.EclipseLabelType): ui.UiText
      static GetEclipseFontParameters(labelType: ui.EclipseLabelType): ui.FontParams
      setFont(fontResourceId: number): void
      setFont(fontResource: Font2dResource): void
      setFont(style: resources.FontStyle, weight: resources.FontWeight = 0 /* 0 is not the actual default value */): void
      setFontParameters(fontParameters: ui.FontParams): void
      getFontResource(): Font2dResource
      setTextColor(rgba: [number, number, number, number] /* glm::vec4 */): void
      getTextColor(): [number, number, number, number] /* glm::vec4 */
      setText(text: string): void
      getText(): string
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

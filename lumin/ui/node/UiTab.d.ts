declare module 'lumin' {
  namespace ui {
    class UiTab extends UiNode {
      static Create(prism: Prism, labelText: string): ui.UiTab
      static CreateEclipseTab(prism: Prism, text: string, labelType: ui.EclipseLabelType): ui.UiTab
      setText(text: string): void
      getText(): string
      setTextColor(rgba: [number, number, number, number] /* glm::vec4 */): void
      getTextColor(): [number, number, number, number] /* glm::vec4 */
      setTextSize(size: number): void
      getTextSize(): number
      getUiTextLabel(): ui.UiText
    };
  }
}

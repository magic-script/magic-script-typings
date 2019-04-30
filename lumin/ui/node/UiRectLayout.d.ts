declare module 'lumin' {
  namespace ui {
    class UiRectLayout extends UiLayout {
      static Create(prism: Prism): ui.UiRectLayout
      setContent(pNode: TransformNode): void
      getContent(): TransformNode
      detachContent(): TransformNode
      setPadding(padding: [number, number, number, number] /* glm::vec4 */): void
      getPadding(): [number, number, number, number] /* glm::vec4 */
      setContentAlignment(alignment: ui.Alignment): void
      getContentAlignment(): ui.Alignment
    };
  }
}

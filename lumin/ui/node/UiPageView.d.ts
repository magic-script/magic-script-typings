declare module 'lumin' {
  namespace ui {
    class UiPageView extends UiNode {
      static Create(prism: Prism, width: number = 0 /* 0 is not the actual default value */, height: number = 0 /* 0 is not the actual default value */): ui.UiPageView
      setSize(size: [number, number] /* glm::vec2 */): void
      getSize(): [number, number] /* glm::vec2 */
      setDefaultPagePadding(padding: [number, number, number, number] /* glm::vec4 */): void
      getDefaultPagePadding(): [number, number, number, number] /* glm::vec4 */
      setDefaultPageAlignment(alignment: ui.Alignment): void
      getDefaultPageAlignment(): ui.Alignment
      getPageCount(): number
      addPage(page: TransformNode): void
      addPage(page: TransformNode, padding: [number, number, number, number] /* glm::vec4 */, alignment: ui.Alignment = 0 /* 0 is not the actual default value */): void
      addPageAt(index: number, page: TransformNode): void
      addPageAt(index: number, page: TransformNode, padding: [number, number, number, number] /* glm::vec4 */, alignment: ui.Alignment = 0 /* 0 is not the actual default value */): void
      setPagePadding(index: number, padding: [number, number, number, number] /* glm::vec4 */): void
      setPagePadding(page: TransformNode, padding: [number, number, number, number] /* glm::vec4 */): void
      getPagePadding(index: number): [number, number, number, number] /* glm::vec4 */
      getPagePadding(page: TransformNode): [number, number, number, number] /* glm::vec4 */
      setPageAlignment(index: number, alignment: ui.Alignment): void
      setPageAlignment(page: TransformNode, alignment: ui.Alignment): void
      getPageAlignment(index: number): ui.Alignment
      getPageAlignment(page: TransformNode): ui.Alignment
      getPage(index: number): TransformNode
      removePage(index: number): TransformNode
      removePage(page: TransformNode): boolean
      showPage(index: number): void
      showPage(page: TransformNode): void
      getActivePageIndex(): number
      getActivePage(): TransformNode
    };
  }
}

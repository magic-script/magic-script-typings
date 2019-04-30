declare module 'lumin' {
  namespace ui {
    class UiLinearLayout extends UiLayout {
      static Create(prism: Prism): ui.UiLinearLayout
      setOrientation(orientation: ui.Orientation): void
      getOrientation(): ui.Orientation
      setDefaultItemPadding(padding: [number, number, number, number] /* glm::vec4 */): void
      getDefaultItemPadding(): [number, number, number, number] /* glm::vec4 */
      setDefaultItemAlignment(alignment: ui.Alignment): void
      getDefaultItemAlignment(): ui.Alignment
      getItemCount(): number
      addItem(item: TransformNode): void
      addItem(item: TransformNode, padding: [number, number, number, number] /* glm::vec4 */): void
      addItem(item: TransformNode, padding: [number, number, number, number] /* glm::vec4 */, alignment: ui.Alignment): void
      addItemAt(index: number, item: TransformNode): void
      addItemAt(index: number, item: TransformNode, padding: [number, number, number, number] /* glm::vec4 */): void
      addItemAt(index: number, item: TransformNode, padding: [number, number, number, number] /* glm::vec4 */, alignment: ui.Alignment): void
      setItemPadding(index: number, padding: [number, number, number, number] /* glm::vec4 */): void
      setItemPadding(item: TransformNode, padding: [number, number, number, number] /* glm::vec4 */): void
      getItemPadding(index: number): [number, number, number, number] /* glm::vec4 */
      getItemPadding(item: TransformNode): [number, number, number, number] /* glm::vec4 */
      setItemAlignment(index: number, alignment: ui.Alignment): void
      setItemAlignment(item: TransformNode, alignment: ui.Alignment): void
      getItemAlignment(index: number): ui.Alignment
      getItemAlignment(item: TransformNode): ui.Alignment
      getItem(index: number): TransformNode
      removeItem(index: number): TransformNode
      removeItem(item: TransformNode): boolean
      replaceItem(index: number, newItem: TransformNode): TransformNode
      replaceItem(oldItem: TransformNode, newItem: TransformNode): boolean
      swapItems(index1: number, index2: number): boolean
      swapItems(item1: TransformNode, item2: TransformNode): boolean
      setSkipInvisibleItems(skip: boolean): void
      getSkipInvisibleItems(): boolean
    };
  }
}

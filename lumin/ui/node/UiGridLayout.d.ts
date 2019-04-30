declare module 'lumin' {
  namespace ui {
    class UiGridLayout extends UiLayout {
      static Create(prism: Prism): ui.UiGridLayout
      setColumns(columns: number): void
      getColumns(): number
      getCurrentColumns(): number
      setRows(rows: number): void
      getRows(): number
      getCurrentRows(): number
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
      setItemPadding(row: number, col: number, padding: [number, number, number, number] /* glm::vec4 */): void
      setItemPadding(item: TransformNode, padding: [number, number, number, number] /* glm::vec4 */): void
      getItemPadding(row: number, col: number): [number, number, number, number] /* glm::vec4 */
      getItemPadding(item: TransformNode): [number, number, number, number] /* glm::vec4 */
      setItemAlignment(row: number, col: number, alignment: ui.Alignment): void
      setItemAlignment(item: TransformNode, alignment: ui.Alignment): void
      getItemAlignment(row: number, col: number): ui.Alignment
      getItemAlignment(item: TransformNode): ui.Alignment
      getItem(index: number): TransformNode
      getItem(row: number, col: number): TransformNode
      removeItem(row: number, col: number): TransformNode
      replaceItem(row: number, col: number, newItem: TransformNode): TransformNode
      replaceItem(oldItem: TransformNode, newItem: TransformNode): boolean
      swapItems(row1: number, col1: number, row2: number, col2: number): boolean
      swapItems(item1: TransformNode, item2: TransformNode): boolean
      setSkipInvisibleItems(skip: boolean): void
      getSkipInvisibleItems(): boolean
    };
  }
}

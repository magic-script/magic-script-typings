declare module 'lumin' {
  namespace ui {
    class UiListView extends UiNode {
      static Create(prism: Prism, width: number = 0 /* 0 is not the actual default value */, height: number = 0 /* 0 is not the actual default value */): ui.UiListView
      onScrollChangedSub(callback: callable): utils.CallbackID
      onScrollChangedUnsub(callbackID: utils.CallbackID): boolean
      setOrientation(orientation: ui.Orientation): void
      getOrientation(): ui.Orientation
      setSize(size: [number, number] /* glm::vec2 */): void
      getSize(): [number, number] /* glm::vec2 */
      setDefaultItemPadding(padding: [number, number, number, number] /* glm::vec4 */): void
      getDefaultItemPadding(): [number, number, number, number] /* glm::vec4 */
      setDefaultItemAlignment(alignment: ui.Alignment): void
      getDefaultItemAlignment(): ui.Alignment
      setScrollingEnabled(scrollingEnabled: boolean): void
      getScrollingEnabled(): boolean
      setCursorEdgeScrollMode(mode: ui.CursorEdgeScrollMode): void
      getCursorEdgeScrollMode(): ui.CursorEdgeScrollMode
      setScrollSpeed(scrollSpeed: number): void
      getScrollSpeed(): number
      setScrollValue(value: number): void
      getScrollValue(): number
      scrollToItem(index: number): boolean
      scrollToItem(item: ui.UiListViewItem): boolean
      getItemCount(): number
      addItem(item: ui.UiListViewItem): void
      addItem(item: ui.UiListViewItem, padding: [number, number, number, number] /* glm::vec4 */): void
      addItem(item: ui.UiListViewItem, padding: [number, number, number, number] /* glm::vec4 */, alignment: ui.Alignment): void
      addItemAt(index: number, item: ui.UiListViewItem): void
      addItemAt(index: number, item: ui.UiListViewItem, padding: [number, number, number, number] /* glm::vec4 */): void
      addItemAt(index: number, item: ui.UiListViewItem, padding: [number, number, number, number] /* glm::vec4 */, alignment: ui.Alignment): void
      setItemPadding(index: number, padding: [number, number, number, number] /* glm::vec4 */): void
      setItemPadding(item: ui.UiListViewItem, padding: [number, number, number, number] /* glm::vec4 */): void
      getItemPadding(index: number): [number, number, number, number] /* glm::vec4 */
      getItemPadding(item: ui.UiListViewItem): [number, number, number, number] /* glm::vec4 */
      setItemAlignment(index: number, alignment: ui.Alignment): void
      setItemAlignment(item: ui.UiListViewItem, alignment: ui.Alignment): void
      getItemAlignment(index: number): ui.Alignment
      getItemAlignment(item: ui.UiListViewItem): ui.Alignment
      getItem(index: number): ui.UiListViewItem
      removeItem(index: number): ui.UiListViewItem
      replaceItem(index: number, newItem: ui.UiListViewItem): ui.UiListViewItem
      replaceItem(oldItem: ui.UiListViewItem, newItem: ui.UiListViewItem): boolean
      swapItems(index1: number, index2: number): boolean
      swapItems(item1: ui.UiListViewItem, item2: ui.UiListViewItem): boolean
      setSkipInvisibleItems(skip: boolean): void
      getSkipInvisibleItems(): boolean
      setScrollBar(uiSB: ui.UiScrollBar): void
      getScrollBar(): ui.UiScrollBar
      setScrollBarVisibilityMode(visibilityMode: ui.ScrollBarVisibility): void
      getScrollBarVisibilityMode(): ui.ScrollBarVisibility
    };
  }
}

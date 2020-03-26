declare module 'lumin' {
  namespace ui {

    /**
     * UiListView provides a scrollable, selectable
     * vertical list of elements.
     */
    class UiListView extends ui.UiNode {

      /**
       * Creates a UiListView element with default settings.
       *
       * @param prism - The prism to create this node for.
       * @param width `default = 0.0`<br/> - The width of the list view.  The default (0) allows the list to grow to content.
       * @param height `default = 0.0`<br/> - The height of the list view.  The default (0) allows the list to grow to content.
       * @return The new UiListView node.
       *
       * @priv none
       */
      static Create(prism: Prism | null, width?: number /* float */, height?: number /* float */): ui.UiListView | null

      /**
       * The on scroll changed Event.
       *
       * This event is dispatched whenever the content scroll position has changed.
       *
       * @priv none
       */
      onScrollChangedSub(callback: ((arg0: ui.UiEventData) => void) | null /* std::function<void(UiEventData)> */): utils.CallbackID
      onScrollChangedUnsub(callbackID: utils.CallbackID): boolean

      /**
       * Sets the orientation of this list view.
       *
       * The default orientation is Vertical.
       *
       * @param orientation The Orientation.
       *
       * @priv none
       */
      setOrientation(orientation: ui.Orientation): void

      /**
       * Gets the orientation of this list view.
       *
       * @return The Orientation.
       *
       * @priv none
       */
      getOrientation(): ui.Orientation

      /**
       * Sets the size of the list view.
       *
       * Setting a size of zero or less in either the X or Y dimension
       * indicates the list view should grow to fit content in that
       * dimension.  Setting a size greater than zero, on the other
       * hand, sets the size explicitly.
       *
       * The default setting is (0,0), which will grow to fit content
       * in both directions.
       *
       * @param size the size of the list view area.
       *
       * @priv none
       */
      setSize(size: [number, number] | Float32Array /* glm::vec2 */): void

      /**
       * Gets the size of the list view.
       *
       * @return the size of the list view area.
       *
       * @priv none
       */
      getSize(): [number, number] /* glm::vec2 */

      /**
       * Sets the default padding of each item within the list,
       * in scene units.  The default is no padding (0,0,0,0).
       *
       * The padding order is:  top, right, bottom, left
       *
       * This will be set for any new items that are added that
       * aren't explicitly specifying padding. The padding of each
       * individual item can still be set later if needed.
       *
       * @param padding the padding vector for the 4 sides.
       *
       * @priv none
       */
      setDefaultItemPadding(padding: [number, number, number, number] | Float32Array /* glm::vec4 */): void

      /**
       * Gets the default padding for items within the linear layout.
       *
       * @return the padding.
       *
       * @priv none
       */
      getDefaultItemPadding(): [number, number, number, number] /* glm::vec4 */

      /**
       * Sets the default item alignment within the list.
       *
       * Default item alignments are TOP_LEFT
       *
       * This will be set for any new items that are added that
       * aren't explicitly specifying alignment. The alignment of each
       * individual item can still be set later if needed.
       *
       * @param alignment The default item alignment.
       *
       * @priv none
       */
      setDefaultItemAlignment(alignment: ui.Alignment): void

      /**
       * Gets the default item alignment within the list.
       *
       * @return The default item alignment.
       *
       * @priv none
       */
      getDefaultItemAlignment(): ui.Alignment

      /**
       * Sets whether the list view scrolling is enabled or not.
       *
       * @param scrollingEnabled the enabled flag.
       *
       * @priv none
       */
      setScrollingEnabled(scrollingEnabled: boolean): void

      /**
       * Gets whether the list view scrolling is enabled or not.
       *
       * @return true if scrolling is enabled, false if not.
       *
       * @priv none
       */
      getScrollingEnabled(): boolean

      /**
       * Sets the cursor edge scroll mode for this list view.
       *
       * @param mode the CursorEdgeScrollMode.
       *
       * @priv none
       */
      setCursorEdgeScrollMode(mode: ui.CursorEdgeScrollMode): void

      /**
       * Gets the cursor edge scroll mode for this list view.
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
       * @return the scroll speed
       *
       * @priv none
       */
      getScrollSpeed(): number /* float */

      /**
       * Sets the scroll content position manually with normalized value between 0 and 1.
       *
       * @param value The normalized position value of the scroll content, between 0 and 1.
       *
       * @priv none
       */
      setScrollValue(value: number /* float */): void

      /**
       * Gets the normalized position of the scroll content, between 0 and 1.
       *
       * @return the normalized position value of the scroll content, between 0 and 1.
       *
       * @priv none
       */
      getScrollValue(): number /* float */

      /**
       * Scrolls the list view to item at position index.
       *
       * @param index The index of the item you would like to scroll to.
       * @return true if scroll succeeded else false.
       *
       * @priv none
       */
      scrollToItem(index: number /* unsigned int */): boolean

      /**
       * Scrolls the list view to the particular item.
       *
       * @param item The item you would like to scroll to.
       * @return true if scroll succeeded else false.
       *
       * @priv none
       */
      scrollToItem(item: ui.UiListViewItem | null): boolean

      /**
       * Gets the number of items in the list.
       *
       * @return Item count.
       *
       * @priv none
       */
      getItemCount(): number /* unsigned int */

      /**
       * Adds an item to the list.
       *
       * @param item The node hierarchy to add to the list.
       *
       * @priv none
       */
      addItem(item: ui.UiListViewItem | null): void

      /**
       * Adds an item to the list.
       *
       * @param item The node hierarchy to add to the list.
       * @param padding The item padding within the list.
       *
       * @priv none
       */
      addItem(item: ui.UiListViewItem | null, padding: [number, number, number, number] | Float32Array /* glm::vec4 */): void

      /**
       * Adds an item to the list.
       *
       * @param item The node hierarchy to add to the list.
       * @param padding The item padding within the list.
       * @param alignment The item alignment.
       *
       * @priv none
       */
      addItem(item: ui.UiListViewItem | null, padding: [number, number, number, number] | Float32Array /* glm::vec4 */, alignment: ui.Alignment): void

      /**
       * Adds an item to the list at the specific index.
       *
       * If the index is out of bounds, the item will be added
       * to the last index.
       *
       * @param index index at which item will be placed
       * @param item The node hierarchy to add to the list.
       *
       * @priv none
       */
      addItemAt(index: number /* unsigned int */, item: ui.UiListViewItem | null): void

      /**
       * Adds an item to the list at the specified index.
       *
       * If the index is out of bounds, the item will be added
       * to the last index.
       *
       * @param index index at which item will be placed
       * @param item The node hierarchy to add to the list.
       * @param padding The item padding within the list.
       *
       * @priv none
       */
      addItemAt(index: number /* unsigned int */, item: ui.UiListViewItem | null, padding: [number, number, number, number] | Float32Array /* glm::vec4 */): void

      /**
       * Adds an item to the list at the specified index.
       *
       * If the index is out of bounds, the item will be added
       * to the last index.
       *
       * @param index index at which item will be placed
       * @param item The node hierarchy to add to the list.
       * @param padding The item padding within the list.
       * @param alignment The item alignment.
       *
       * @priv none
       */
      addItemAt(index: number /* unsigned int */, item: ui.UiListViewItem | null, padding: [number, number, number, number] | Float32Array /* glm::vec4 */, alignment: ui.Alignment): void

      /**
       * Sets the item padding at the specified index.
       *
       * @param index The index of the item in the list.
       * @param padding The item padding.
       *
       * @priv none
       */
      setItemPadding(index: number /* unsigned int */, padding: [number, number, number, number] | Float32Array /* glm::vec4 */): void

      /**
       * Sets the item padding.
       *
       * @param item Pointer to the item Node.
       * @param padding The item padding.
       *
       * @priv none
       */
      setItemPadding(item: ui.UiListViewItem | null, padding: [number, number, number, number] | Float32Array /* glm::vec4 */): void

      /**
       * Gets the item padding at the specified index.
       *
       * @param index The index of the item in the list.
       * @return Reference to receive the setting.
       *
       * @priv none
       */
      getItemPadding(index: number /* unsigned int */): [number, number, number, number] | null /* std::optional<glm::vec4> */

      /**
       * Gets the item padding.
       *
       * @param item Pointer to the item Node.
       * @return Reference to receive the setting.
       *
       * @priv none
       */
      getItemPadding(item: ui.UiListViewItem | null): [number, number, number, number] | null /* std::optional<glm::vec4> */

      /**
       * Sets the item alignment at the specified index.
       *
       * @param index The index of the item in the list.
       * @param alignment The item alignment.
       *
       * @priv none
       */
      setItemAlignment(index: number /* unsigned int */, alignment: ui.Alignment): void

      /**
       * Sets the item alignment.
       *
       * @param item Pointer to the item Node.
       * @param alignment The item alignment.
       *
       * @priv none
       */
      setItemAlignment(item: ui.UiListViewItem | null, alignment: ui.Alignment): void

      /**
       * Gets the item alignment at the specified index.
       *
       * @param index The index of the item in the list.
       * @return Reference to receive the setting.
       *
       * @priv none
       */
      getItemAlignment(index: number /* unsigned int */): ui.Alignment | null /* std::optional<Alignment> */

      /**
       * Gets the item alignment.
       *
       * @param item Pointer to the item Node.
       * @return Reference to receive the setting.
       *
       * @priv none
       */
      getItemAlignment(item: ui.UiListViewItem | null): ui.Alignment | null /* std::optional<Alignment> */

      /**
       * Gets the n'th item in the list.
       *
       * If the index is out of bounds, nullptr will be returned.
       *
       * @param index The index of the item.
       * @return Item node pointer.
       *
       * @priv none
       */
      getItem(index: number /* unsigned int */): ui.UiListViewItem | null

      /**
       * Removes the n'th item from the list.
       *
       * The returned Node hierarchy will be orphaned (no longer attached
       * to the scene graph) and must be handled by the caller.
       *
       * If the index is out of bounds, nothing happens.
       *
       * @param index The index of the item.
       * @return Item node pointer.
       *
       * @priv none
       */
      removeItem(index: number /* unsigned int */): ui.UiListViewItem | null

      /**
       * Replaces the n'th item in the list.
       *
       * The returned Node hierarchy will be orphaned (no longer attached
       * to the scene graph) and must be handled by the caller.
       *
       * If the index is out of bounds, nothing happens.
       *
       * @param index The index of the item to be replaced.
       * @param newItem The new item replacing the UiListViewItem in the n'th position
       * @return replaced UiListViewItem's pointer.
       */
      replaceItem(index: number /* unsigned int */, newItem: ui.UiListViewItem | null): ui.UiListViewItem | null

      /**
       * Replaces an existing UiListViewItem with a new UiListViewItem
       *
       * If either of the Node's are invalid - Null or not contained in the list -
       * nothing happens.
       *
       * @param oldItem The pointer for the UiListViewItem you would like to replace
       * @param newItem The new UiListViewItem replacing the oldItem in the list
       * @return true if the newItem has successfully replaced the oldItem
       */
      replaceItem(oldItem: ui.UiListViewItem | null, newItem: ui.UiListViewItem | null): boolean

      /**
       * Swap two items in the list.
       *
       * If either of the indices are invalid, nothing happens.
       *
       * @param index1 a valid index in the list
       * @param index2 a valid index in the list
       * @return true if the two UiListViewItems at index1 and index2 have been sucessfully swapped
       */
      swapItems(index1: number /* unsigned int */, index2: number /* unsigned int */): boolean

      /**
       * Swap two items in the list.
       *
       * If the UiListViewItems are the same or invalid - Null or not contained in the list -
       * nothing happens.
       *
       * @param item1 a valid UiListViewItem in the list
       * @param item2 a valid UiListViewItem in the list
       * @return true if the two UiListViewItems have been sucessfully swapped
       */
      swapItems(item1: ui.UiListViewItem | null, item2: ui.UiListViewItem | null): boolean

      /**
       * Skips invisble items.
       *
       * Setting this value to true will cause the layout to skip over any
       * invisible items.  The layout will check the visibility of
       * each top-level item Node added and if invisible, along with
       * inherited visibility, will skip that Node for layout.
       *
       * @param skip Flag indicating whether to skip invis items or not.
       *
       * @priv none
       */
      setSkipInvisibleItems(skip: boolean): void

      /**
       * Gets whether this layout skips invisible items or not.
       *
       * @return true if the layout skips invisible items, false if not.
       *
       * @priv none
       */
      getSkipInvisibleItems(): boolean

      /**
       * Sets a scrollbar for the UiListView's orientation.
       *
       * @param uiSB the scrollbar to use for the UiListView.
       *
       * @priv none
       */
      setScrollBar(uiSB: ui.UiScrollBar | null): void

      /**
       * Gets the scrollbar associated with the UiListView's orientation.
       *
       * @return the scrollbar.
       *
       * @priv none
       */
      getScrollBar(): ui.UiScrollBar | null

      /**
       * Sets the vibility mode of the scrollbar(s) attached.
       *
       * @param visibilityMode one of three available modes: kOff, kAlways or kAuto.
       *
       * @priv none
       */
      setScrollBarVisibilityMode(visibilityMode: ui.ScrollBarVisibility): void

      /**
       * Gets the vibility mode of the scrollbar(s) attached.
       *
       * @return one of the three available modes: kOff, kAlways or kAuto.
       *
       * @priv none
       */
      getScrollBarVisibilityMode(): ui.ScrollBarVisibility
    }
  }
}

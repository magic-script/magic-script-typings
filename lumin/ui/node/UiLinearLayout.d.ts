declare module 'lumin' {
  namespace ui {

    /**
     * UiLinearLayout provides for automatic layout of elements
     * in a horizontal or vertical orientation.
     */
    class UiLinearLayout extends UiLayout {

      /**
       * Creates a new UiLinearLayout
       *
       * @param prism The prism to create this node for.
       * @return New UiLinearLayout on success; nullptr on failure.
       *
       * @priv none
       */
      static Create(prism: Prism): ui.UiLinearLayout

      /**
       * Sets the horizontal or vertical orientation of this linear layout.
       *
       * The default orientation is Vertical.
       *
       * @param orientation The Orientation.
       *
       * @priv none
       */
      setOrientation(orientation: ui.Orientation): void

      /**
       * Gets the horizontal or vertical orientation of this linear layout.
       *
       * @return The Orientation.
       *
       * @priv none
       */
      getOrientation(): ui.Orientation

      /**
       * Sets the default padding of each item within the grid,
       * in scene units.  The default is no padding (0,0,0,0).
       *
       * The padding order is:  top, right, bottom, left
       *
       * This will be set for any new items that are added that
       * aren't explicitly specifying padding. The padding of each
       * individual item can still be set later if needed.
       * When the size of the linear layout is set to zero
       * in a dimension, it grows in that dimension to fit
       * the largest content and its padding, if any.
       * When the size is set to greater than zero, the content
       * might scale down to fit in the room left by the padding.
       * In this case, alignment is ignored.
       *
       * @param padding the padding vector for the 4 sides.
       *
       * @priv none
       */
      setDefaultItemPadding(padding: [number, number, number, number] /* glm::vec4 */): void

      /**
       * Gets the default padding for items within the linear layout.
       *
       * @return the padding.
       *
       * @priv none
       */
      getDefaultItemPadding(): [number, number, number, number] /* glm::vec4 */

      /**
       * Sets the default item alignment within the grid.
       *
       * Default item alignments are TOP_LEFT.
       *
       * This will be set for any new items that are added that
       * aren't explicitly specifying alignment. The alignment of each
       * individual item can still be set later if needed.
       * When the size of the linear layout is set to zero
       * in a dimension, it grows in that dimension to fit
       * the largest content and its padding, if any.
       * When the size is set to greater than zero, the content
       * might scale down to fit in the room left by the padding.
       * In this case, alignment is ignored.
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
       * Gets the number of items in the list.
       *
       * @return Item count.
       *
       * @priv none
       */
      getItemCount(): number /* int */

      /**
       * Adds an item to the list.
       *
       * @param item The node hierarchy to add to the list.
       *
       * @priv none
       */
      addItem(item: TransformNode): void

      /**
       * Adds an item to the list.
       *
       * When the size of the linear layout is set to zero
       * in a dimension, it grows in that dimension to fit
       * the largest content and its padding, if any.
       * When the size is set to greater than zero, the content
       * might scale down to fit in the room left by the padding.
       * In this case, alignment is ignored.
       *
       * @param item The node hierarchy to add to the list.
       * @param padding The item padding within the list.
       *
       * @priv none
       */
      addItem(item: TransformNode, padding: [number, number, number, number] /* glm::vec4 */): void

      /**
       * Adds an item to the list.
       *
       * When the size of the linear layout is set to zero
       * in a dimension, it grows in that dimension to fit
       * the largest content and its padding, if any.
       * When the size is set to greater than zero, the content
       * might scale down to fit in the room left by the padding.
       * In this case, alignment is ignored.
       *
       * @param item The node hierarchy to add to the list.
       * @param padding The item padding within the list.
       * @param alignment The item alignment.
       *
       * @priv none
       */
      addItem(item: TransformNode, padding: [number, number, number, number] /* glm::vec4 */, alignment: ui.Alignment): void

      /**
       * Adds an item to the list at the specific index.
       *
       * If the index is out of bounds, the item will be added
       * to the last index.
       *
       * @param index index at which item will be placed
       * @param item The node hierarchy to add to the list.
       */
      addItemAt(index: number /* int */, item: TransformNode): void

      /**
       * Adds an item to the list at the specified index.
       *
       * If the index is out of bounds, the item will be added
       * to the last index.
       * When the size of the linear layout is set to zero
       * in a dimension, it grows in that dimension to fit
       * the largest content and its padding, if any.
       * When the size is set to greater than zero, the content
       * might scale down to fit in the room left by the padding.
       * In this case, alignment is ignored.
       *
       * @param index index at which item will be placed
       * @param item The node hierarchy to add to the list.
       * @param padding The item padding within the list.
       *
       * @priv none
       */
      addItemAt(index: number /* int */, item: TransformNode, padding: [number, number, number, number] /* glm::vec4 */): void

      /**
       * Adds an item to the list at the specified index.
       *
       * If the index is out of bounds, the item will be added
       * to the last index.
       * When the size of the linear layout is set to zero
       * in a dimension, it grows in that dimension to fit
       * the largest content and its padding, if any.
       * When the size is set to greater than zero, the content
       * might scale down to fit in the room left by the padding.
       * In this case, alignment is ignored.
       *
       * @param index index at which item will be placed
       * @param item The node hierarchy to add to the list.
       * @param padding The item padding within the list.
       * @param alignment The item alignment.
       *
       * @priv none
       */
      addItemAt(index: number /* int */, item: TransformNode, padding: [number, number, number, number] /* glm::vec4 */, alignment: ui.Alignment): void

      /**
       * Sets the item padding at the specified index.
       *
       * When the size of the linear layout is set to zero
       * in a dimension, it grows in that dimension to fit
       * the largest content and its padding, if any.
       * When the size is set to greater than zero, the content
       * might scale down to fit in the room left by the padding.
       * In this case, alignment is ignored.
       *
       * @param index The index of the item in the list.
       * @param padding The item padding.
       *
       * @priv none
       */
      setItemPadding(index: number /* int */, padding: [number, number, number, number] /* glm::vec4 */): void

      /**
       * Sets the item padding.
       *
       * When the size of the linear layout is set to zero
       * in a dimension, it grows in that dimension to fit
       * the largest content and its padding, if any.
       * When the size is set to greater than zero, the content
       * might scale down to fit in the room left by the padding.
       * In this case, alignment is ignored.
       *
       * @param item Pointer to the item Node.
       * @param padding The item padding.
       *
       * @priv none
       */
      setItemPadding(item: TransformNode, padding: [number, number, number, number] /* glm::vec4 */): void

      /**
       * Gets the item padding at the specified index.
       *
       * @param index The index of the item in the list.
       * @return Reference to receive the setting.
       *
       * @priv none
       */
      getItemPadding(index: number /* int */): [number, number, number, number] /* glm::vec4 */

      /**
       * Gets the item padding.
       *
       * @param item Pointer to the item Node.
       * @return Reference to receive the setting.
       *
       * @priv none
       */
      getItemPadding(item: TransformNode): [number, number, number, number] /* glm::vec4 */

      /**
       * Sets the item alignment at the specified index.
       *
       * When the size of the linear layout is set to zero
       * in a dimension, it grows in that dimension to fit
       * the largest content and its padding, if any.
       * When the size is set to greater than zero, the content
       * might scale down to fit in the room left by the padding.
       * In this case, alignment is ignored.
       *
       * @param index The index of the item in the list.
       * @param alignment The item alignment.
       *
       * @priv none
       */
      setItemAlignment(index: number /* int */, alignment: ui.Alignment): void

      /**
       * Sets the item alignment.
       *
       * When the size of the linear layout is set to zero
       * in a dimension, it grows in that dimension to fit
       * the largest content and its padding, if any.
       * When the size is set to greater than zero, the content
       * might scale down to fit in the room left by the padding.
       * In this case, alignment is ignored.
       *
       * @param item Pointer to the item Node.
       * @param alignment The item alignment.
       *
       * @priv none
       */
      setItemAlignment(item: TransformNode, alignment: ui.Alignment): void

      /**
       * Gets the item alignment at the specified index.
       *
       * @param index The index of the item in the list.
       * @return Reference to receive the setting.
       *
       * @priv none
       */
      getItemAlignment(index: number /* int */): ui.Alignment

      /**
       * Gets the item alignment.
       *
       * @param item Pointer to the item Node.
       * @return Reference to receive the setting.
       *
       * @priv none
       */
      getItemAlignment(item: TransformNode): ui.Alignment

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
      getItem(index: number /* int */): TransformNode

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
      removeItem(index: number /* int */): TransformNode

      /**
       * Skips invisble items.
       *
       * Setting this value true will cause the layout to skip over any
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
    }
  }
}

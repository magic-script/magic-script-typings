declare module 'lumin' {
  namespace ui {

    /**
     * UiPageView is used to switch display of individual page Node
     * hierarchies.
     */
    class UiPageView extends ui.UiNode {

      /**
       * Creates a UiPageView element with default settings.
       *
       * @param prism - The prism to create the icon for.
       * @param width `default = 0.0`<br/> - The width of the page view.  The default (0) allows the view to grow to content.
       * @param height `default = 0.0`<br/> - The height of the page view.  The default (0) allows the view to grow to content.
       * @return The new UiPageView node.
       *
       * @priv none
       */
      static Create(prism: Prism | null, width?: number /* float */, height?: number /* float */): ui.UiPageView | null

      /**
       * Sets the size of the page view.
       *
       * Setting a size of zero or less in either the X or Y dimension
       * indicates the page view should grow to fit content in that
       * dimension.  Setting a size greater than zero, on the other
       * hand, sets the size explicitly, and the content might be
       * scaled down to fit in the cell with padding, if any.
       *
       * The default setting is (0,0), which will grow to fit content
       * in both directions.
       *
       * @param size the size of the page view area.
       *
       * @priv none
       */
      setSize(size: [number, number] | Float32Array /* glm::vec2 */): void

      /**
       * Gets the size of the page view.
       *
       * @return the size of the page view area.
       *
       * @priv none
       */
      getSize(): [number, number] /* glm::vec2 */

      /**
       * Sets the default padding of each page within the view,
       * in scene units.  The default is no padding (0,0,0,0).
       *
       * The padding order is:  top, right, bottom, left
       *
       * This will be set for any new pages that are added that
       * aren't explicitly specifying padding. The padding of each
       * individual page can still be set later if needed.
       * When the page's size is set, the content might
       * scale down to fit in the room left by the padding.
       * When the page's width is set to zero, only the left
       * padding applies. The right padding is ignored.
       * Likewise, only the top padding is considered when
       * the page's height is set to zero. The bottom
       * padding is ignored.
       *
       * @param padding the padding vector for the 4 sides.
       *
       * @priv none
       */
      setDefaultPagePadding(padding: [number, number, number, number] | Float32Array /* glm::vec4 */): void

      /**
       * Gets the default padding for pages within the view.
       *
       * @return the padding.
       *
       * @priv none
       */
      getDefaultPagePadding(): [number, number, number, number] /* glm::vec4 */

      /**
       * Sets the default page alignment within the view.
       *
       * Default page alignments are TOP_LEFT.
       *
       * This will be set for any new pages that are added that
       * aren't explicitly specifying alignment. The alignment of each
       * individual page can still be set later if needed.
       * The bottom alignment comes into effect only when the height
       * of the page is greater than that of the content.
       * The same for the right alignment with respect to the widths
       * of the page and its content.
       *
       * @param alignment The default page alignment.
       *
       * @priv none
       */
      setDefaultPageAlignment(alignment: ui.Alignment): void

      /**
       * Gets the default page alignment within the view.
       *
       * @return The default page alignment.
       *
       * @priv none
       */
      getDefaultPageAlignment(): ui.Alignment

      /**
       * Gets the number of pages in the view.
       *
       * @return Page count.
       *
       * @priv none
       */
      getPageCount(): number /* unsigned int */

      /**
       * Adds a page to the view.
       *
       * @param page The node hierarchy to add to the view.
       *
       * @priv none
       */
      addPage(page: TransformNode | null): void

      /**
       * Adds a page to the view.
       *
       * When the page's size is set, the content might
       * scale down to fit in the room left by the padding.
       * When the page's width is set to zero. The right padding is ignored.
       * The same for the bottom padding when the page's height is zero.
       * The bottom alignment comes into effect only when the height
       * of the page is greater than that of the content.
       * The same for the right alignment with respect to the widths
       * of the page and its content.
       *
       * @param page The node hierarchy to add to the view.
       * @param padding The page padding within the view.
       * @param alignment `default = Alignment.TOP_LEFT`<br/> The page alignment.
       *
       * @priv none
       */
      addPage(page: TransformNode | null, padding: [number, number, number, number] | Float32Array /* glm::vec4 */, alignment?: ui.Alignment): void

      /**
       * Adds a page to the view at the specific index.
       *
       * If the index is out of bounds, the item will be added
       * to the last index.
       *
       * @param index index at which item will be placed
       * @param page The node hierarchy to add to the view.
       *
       * @priv none
       */
      addPageAt(index: number /* unsigned int */, page: TransformNode | null): void

      /**
       * Adds a page to the view at the specific index.
       *
       * If the index is out of bounds, the item will be added
       * to the last index.
       * When the page's size is set, the content might
       * scale down to fit in the room left by the padding.
       * When the page's width is set to zero. The right padding is ignored.
       * The same for the bottom padding when the page's height is zero.
       * The bottom alignment comes into effect only when the height
       * of the page is greater than that of the content.
       * The same for the right alignment with respect to the widths
       * of the page and its content.
       *
       * @param index index at which item will be placed
       * @param page The node hierarchy to add to the view.
       * @param padding The page padding within the view.
       * @param alignment `default = Alignment.TOP_LEFT`<br/> The page alignment.
       *
       * @priv none
       */
      addPageAt(index: number /* unsigned int */, page: TransformNode | null, padding: [number, number, number, number] | Float32Array /* glm::vec4 */, alignment?: ui.Alignment): void

      /**
       * Sets the page padding at the specified index.
       *
       * When the page's size is set, the content might
       * scale down to fit in the room left by the padding.
       * When the page's width is set to zero. The right padding is ignored.
       * The same for the bottom padding when the page's height is zero.
       *
       * @param index The index of the page in the view.
       * @param padding The page padding.
       *
       * @priv none
       */
      setPagePadding(index: number /* unsigned int */, padding: [number, number, number, number] | Float32Array /* glm::vec4 */): void

      /**
       * Sets the page padding.
       *
       * When the page's size is set, the content might
       * scale down to fit in the room left by the padding.
       * When the page's width is set to zero. The right padding is ignored.
       * The same for the bottom padding when the page's height is zero.
       *
       * @param page Pointer to the page Node.
       * @param padding The page padding.
       *
       * @priv none
       */
      setPagePadding(page: TransformNode | null, padding: [number, number, number, number] | Float32Array /* glm::vec4 */): void

      /**
       * Gets the page padding at the specified index.
       *
       * @param index The index of the page in the view.
       * @return Reference to receive the setting.
       *
       * @priv none
       */
      getPagePadding(index: number /* unsigned int */): [number, number, number, number] | null /* std::optional<glm::vec4> */

      /**
       * Gets the page padding.
       *
       * @param page Pointer to the page Node.
       * @return Reference to receive the setting.
       *
       * @priv none
       */
      getPagePadding(page: TransformNode | null): [number, number, number, number] | null /* std::optional<glm::vec4> */

      /**
       * Sets the page alignment at the specified index.
       *
       * The bottom alignment comes into effect only when the height
       * of the page is greater than that of the content.
       * The same for the right alignment with respect to the widths
       * of the page and its content.
       *
       * @param index The index of the page in the view.
       * @param alignment The page alignment.
       *
       * @priv none
       */
      setPageAlignment(index: number /* unsigned int */, alignment: ui.Alignment): void

      /**
       * Sets the page alignment.
       *
       * The bottom alignment comes into effect only when the height
       * of the page is greater than that of the content.
       * The same for the right alignment with respect to the widths
       * of the page and its content.
       *
       * @param page Pointer to the page Node.
       * @param alignment The page alignment.
       *
       * @priv none
       */
      setPageAlignment(page: TransformNode | null, alignment: ui.Alignment): void

      /**
       * Gets the page alignment at the specified index.
       *
       * @param index The index of the page in the view.
       * @return Reference to receive the setting.
       *
       * @priv none
       */
      getPageAlignment(index: number /* unsigned int */): ui.Alignment | null /* std::optional<Alignment> */

      /**
       * Gets the page alignment.
       *
       * @param page Pointer to the page Node.
       * @return Reference to receive the setting.
       *
       * @priv none
       */
      getPageAlignment(page: TransformNode | null): ui.Alignment | null /* std::optional<Alignment> */

      /**
       * Gets the n'th page in the view.
       *
       * If the index is out of bounds, nullptr will be returned.
       *
       * @param index The index of the page.
       * @return Page node pointer.
       *
       * @priv none
       */
      getPage(index: number /* unsigned int */): TransformNode | null

      /**
       * Removes the n'th page from the view.
       *
       * The returned Node hierarchy will be orphaned (no longer attached
       * to the scene graph) and must be handled by the caller.
       *
       * If the index is out of bounds, nothing happens.
       *
       * @param index The index of the page.
       * @return Page node pointer.
       *
       * @priv none
       */
      removePage(index: number /* unsigned int */): TransformNode | null

      /**
       * Removes the page from the view.
       *
       * The page Node hierarchy will be orphaned (no longer attached
       * to the scene graph) and must be handled by the caller.
       *
       * If the page is not found in the layout, nothing happens.
       *
       * @param page The page to remove.
       * @return TRUE if the removal is successful, FALSE otherwise.
       *
       * @priv none
       */
      removePage(page: TransformNode | null): boolean

      /**
       * Shows the n'th page in the page view, all others will be invisible.
       *
       * @param index The index of the page.
       *
       * @priv none
       */
      showPage(index: number /* unsigned int */): void

      /**
       * Shows the page in the page view, all others will be invisible.
       *
       * @param page The page to display.
       *
       * @priv none
       */
      showPage(page: TransformNode | null): void

      /**
       * Gets the currently active (displayed) page index in the page view.
       *
       * @return the index of the active page.
       *
       * @priv none
       */
      getActivePageIndex(): number /* unsigned int */

      /**
       * Gets the currently active (displayed) page in the page view.
       *
       * Can be nullptr if no pages in the view.
       *
       * @return the active page.
       *
       * @priv none
       */
      getActivePage(): TransformNode | null
    }
  }
}

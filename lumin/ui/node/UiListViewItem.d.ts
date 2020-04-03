declare module 'lumin' {
  namespace ui {

    /**
     * UiListViewItem - The top level node of a UiListView item.
     *
     * This node will automatically create the selectable, colorable
     * background quad that represents the bounds of the item.
     *
     * As a UiGroup, this node aggregates certain UI events.
     */
    class UiListViewItem extends ui.UiNode {

      /**
       * Creates a new UiListViewItem
       *
       * @param prism The prism to create this node for.
       * @return New UiListViewItem on success; nullptr on failure.
       *
       * @priv none
       */
      static Create(prism: Prism | null): ui.UiListViewItem | null

      /**
       * Sets the background color.
       *
       * The default is transparent black (0,0,0,0).
       *
       * @param color the background color.
       *
       * @priv none
       */
      setBackgroundColor(color: [number, number, number, number] | Float32Array /* glm::vec4 */): void

      /**
       * Gets the background color.
       *
       * @return the background color.
       *
       * @priv none
       */
      getBackgroundColor(): [number, number, number, number] /* glm::vec4 */
    }
  }
}

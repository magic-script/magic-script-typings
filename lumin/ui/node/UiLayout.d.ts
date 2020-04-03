declare module 'lumin' {
  namespace ui {

    /**
     * Abstract base class of all UI Layouts.
     *
     * UI Layout classes generally provide layout of content within
     * a planar XY rectangular area.
     */
    class UiLayout extends ui.UiNode {

      /**
       * Sets the requested size of the layout's rectangular area in
       * scene units.
       *
       * Setting a size of zero or less in either the X or Y dimension
       * indicates the layout should grow to fit content in that
       * dimension.  Setting a size greater than zero, on the other
       * hand, sets the layout size explicitly.
       *
       * The default setting is (0,0), which will grow to fit content
       * in both directions.
       *
       * Currently, content will not be clipped if it is larger than
       * the requested layout size (content will overflow).
       *
       * @param size the requested size of the layout area.
       *
       * @priv none
       */
      setSize(size: [number, number] | Float32Array /* glm::vec2 */): void

      /**
       * Gets the requested size of the layout area.
       *
       * @return the requested size.
       *
       * @priv none
       */
      getSize(): [number, number] /* glm::vec2 */
    }
  }
}

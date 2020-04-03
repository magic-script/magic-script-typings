declare module 'lumin' {
  namespace ui {

    /**
     * UiRectLayout provides for automatic layout of content
     * within a planar XY rectangular area, with given
     * side padding and content alignment.
     */
    class UiRectLayout extends ui.UiLayout {

      /**
       * Creates a new UiRectLayout.
       *
       * @param prism The prism to create this node for.
       * @return New UiRectLayout on success; nullptr on failure.
       *
       * @priv none
       */
      static Create(prism: Prism | null): ui.UiRectLayout | null

      /**
       * Sets the Node hierarchy used as content.
       *
       * This call will automatically parent the Node under this UiRectLayout.
       *
       * @param pNode - A pointer to the Node.
       *
       * @priv none
       */
      setContent(pNode: TransformNode | null): void

      /**
       * Gets the Node hierarchy used as content for this UiRectLayout.
       *
       * @return a pointer to the content node.
       *
       * @priv none
       */
      getContent(): TransformNode | null

      /**
       * Detaches the content node hierarchy from this UiRectLayout.
       *
       * The returned Node hierarchy will be orphaned (no longer attached
       * to the scene graph) and must be handled by the caller.
       *
       * @priv none
       */
      detachContent(): TransformNode | null

      /**
       * Sets the content padding for the 4 sides of the rectangular area,
       * in scene units.  The default is no padding (0,0,0,0).
       *
       * The padding order is:  top, right, bottom, left
       *
       * When the size of the rect layout is set to zero
       * in a dimension, it grows in that dimension to fit
       * the content and its padding, if any.
       * When the size is set to greater than zero, the content
       * might scale down to fit in the room left by the padding.
       * In this case, content alignment is ignored.
       *
       * @param padding the padding vector for the 4 sides.
       *
       * @priv none
       */
      setPadding(padding: [number, number, number, number] | Float32Array /* glm::vec4 */): void

      /**
       * Gets the content padding of the 4 sides.
       *
       * @return the padding.
       *
       * @priv none
       */
      getPadding(): [number, number, number, number] /* glm::vec4 */

      /**
       * Sets the content alignment within the rectangular area.
       *
       * Default content alignments are TOP_LEFT.
       *
       * When the size of the rect layout is set to zero
       * in a dimension, it grows in that dimension to fit
       * the content and its padding, if any.
       * When the size is set to greater than zero, the content
       * might scale down to fit in the room left by the padding.
       * In this case, content alignment is ignored.
       *
       * @param alignment Content alignment.
       *
       * @priv none
       */
      setContentAlignment(alignment: ui.Alignment): void

      /**
       * Gets the content alignment within the rectangular area.
       *
       * @return The content alignment.
       *
       * @priv none
       */
      getContentAlignment(): ui.Alignment
    }
  }
}

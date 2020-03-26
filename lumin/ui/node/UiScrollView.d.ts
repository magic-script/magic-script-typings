declare module 'lumin' {
  namespace ui {

    /**
     * UiScrollView - This node represents a scrollable view.
     */
    class UiScrollView extends ui.UiNode {

      /**
       * Creates a new UiScrollView
       *
       * @param prism The prism to create this node for.
       * @return New UiScrollView on success; nullptr on failure.
       *
       * @priv none
       */
      static Create(prism: Prism | null): ui.UiScrollView | null

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
       * Sets the Node hierarchy used as scrollable content.
       *
       * This call will automatically parent the Node under this UiScrollView
       * and initially offset it with the optionally provided vector.
       *
       * Any current node hierarchy previously set will be orphaned and must
       * be handled by the caller.
       *
       * @param pNode - A pointer to the Node.
       * @param offset `default = VEC3_ZERO`<br/> - An optional offset to position the Node (default is [0,0,0]).
       *
       * @priv none
       */
      setScrollContent(pNode: TransformNode | null, offset?: [number, number, number] | Float32Array /* glm::vec3 */): void

      /**
       * Gets the Node hierarchy used as scrollable content for this UiScrollView.
       *
       * @return a pointer to the model node used.
       *
       * @priv none
       */
      getScrollContent(): TransformNode | null

      /**
       * Sets the scroll direction for the scroll view (default is vertical).
       *
       * @param direction the supported scroll direction.
       *
       * @priv none
       */
      setScrollDirection(direction: ui.ScrollDirection): void

      /**
       * Gets the scroll direction for the scroll view.
       *
       * @return the supported scroll direction.
       *
       * @priv none
       */
      getScrollDirection(): ui.ScrollDirection

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
       * @return the scroll speed.
       *
       * @priv none
       */
      getScrollSpeed(): number /* float */

      /**
       * Sets the scroll content offset manually.
       *
       * @param offset The offset of the scroll content
       *
       * @priv none
       */
      setScrollOffset(offset: [number, number, number] | Float32Array /* glm::vec3 */): void

      /**
       * Gets the scroll content offset.
       *
       * @return the scroll offset.
       *
       * @priv none
       */
      getScrollOffset(): [number, number, number] /* glm::vec3 */

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
       * Sets the scroll view bounds.  The bounds are defined
       * within the UiScrollView's local coordinate
       * system.
       *
       * The scroll bounds is used to both clip content
       * visually and to automatically clamp content
       * scrolling extents to stay within the bounds.
       *
       * @param bounds The scrolling bounds.
       *
       * @priv none
       */
      setScrollBounds(bounds: math.AABB): void

      /**
       * Gets the scroll bounds.
       *
       * @return the scrolling bounds.
       *
       * @priv none
       */
      getScrollBounds(): math.AABB

      /**
       * Sets the cursor edge scroll mode for this scroll view.
       *
       * @param mode the CursorEdgeScrollMode.
       *
       * @priv none
       */
      setCursorEdgeScrollMode(mode: ui.CursorEdgeScrollMode): void

      /**
       * Gets the cursor edge scroll mode for this scroll view.
       *
       * @return the CursorEdgeScrollMode.
       *
       * @priv none
       */
      getCursorEdgeScrollMode(): ui.CursorEdgeScrollMode

      /**
       * Set a scrollbar for an orientation, so that UiScrollView updates it when there is a scroll in that orientation.
       *
       * @param orientation the orientation (vertical or horizontal) for which the scrollbar is to be set.
       * @param uiSB the scrollbar to use for the desired orientation.
       *
       * @priv none
       */
      setScrollBar(orientation: ui.Orientation, uiSB: ui.UiScrollBar | null): void

      /**
       * Gets the scrollbar accosiated to the indicated orientation.
       *
       * @param orientation the orientation (vertical or horizontal) to which the scrollbar is associated.
       * @return the scrollbar associated to the desired orientation.
       *
       * @priv none
       */
      getScrollBar(orientation: ui.Orientation): ui.UiScrollBar | null

      /**
       * Sets the vibility mode of any scrollbar(s) attached.
       *
       * The visibility mode will affect the visibility of any attached scroll bars.
       * Use setScrollBar() to manually attach a scroll bar to the scroll view.
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

      /**
       * Applies the texture resource as a mask for UiScrollView content.
       *
       * @param textureResource the render resource id for the mask node texture.
       *
       * @priv none
       */
      setScrollMask(textureResource: bigint /* uint64_t */): void
    }
  }
}

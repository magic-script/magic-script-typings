declare module 'lumin' {
  namespace ui {
    class UiScrollView extends UiNode {
      static Create(prism: Prism): ui.UiScrollView
      onScrollChangedSub(callback: callable): utils.CallbackID
      onScrollChangedUnsub(callbackID: utils.CallbackID): boolean
      setScrollContent(pNode: TransformNode, offset: [number, number, number] /* glm::vec3 */ = 0 /* 0 is not the actual default value */): void
      getScrollContent(): TransformNode
      setScrollDirection(direction: ui.ScrollDirection): void
      getScrollDirection(): ui.ScrollDirection
      setScrollSpeed(scrollSpeed: number): void
      getScrollSpeed(): number
      setScrollOffset(offset: [number, number, number] /* glm::vec3 */): void
      getScrollOffset(): [number, number, number] /* glm::vec3 */
      setScrollValue(value: number): void
      getScrollValue(): number
      setScrollBounds(bounds: math.AABB): void
      getScrollBounds(): math.AABB
      setCursorEdgeScrollMode(mode: ui.CursorEdgeScrollMode): void
      getCursorEdgeScrollMode(): ui.CursorEdgeScrollMode
      setScrollBar(orientation: ui.Orientation, uiSB: ui.UiScrollBar): void
      getScrollBar(orientation: ui.Orientation): ui.UiScrollBar
      setScrollBarVisibilityMode(visibilityMode: ui.ScrollBarVisibility): void
      getScrollBarVisibilityMode(): ui.ScrollBarVisibility
      setScrollMask(textureResource: number): void
    };
  }
}

declare module 'lumin' {
  namespace ui {
    class UiLayout extends UiNode {
      setSize(size: [number, number] /* glm::vec2 */): void
      getSize(): [number, number] /* glm::vec2 */
    };
  }
}

declare module 'lumin' {
  namespace ui {
    class UiListViewItem extends UiNode {
      static Create(prism: Prism): ui.UiListViewItem
      setBackgroundColor(color: [number, number, number, number] /* glm::vec4 */): void
      getBackgroundColor(): [number, number, number, number] /* glm::vec4 */
    };
  }
}

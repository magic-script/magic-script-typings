declare module 'lumin' {
  namespace ui {
    class UiScrollBar extends UiNode {
      static Create(prism: Prism, width: number, height: number = 0 /* 0 is not the actual default value */): ui.UiScrollBar
      setThumbSize(value: number): void
      getThumbSize(): number
      setThumbPosition(value: number): void
      getThumbPosition(): number
    };
  }
}

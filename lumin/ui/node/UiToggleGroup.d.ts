declare module 'lumin' {
  namespace ui {
    class UiToggleGroup extends UiNode {
      static Create(prism: Prism, allowMultipleOn: boolean = 0 /* 0 is not the actual default value */, allowAllOff: boolean = 0 /* 0 is not the actual default value */): ui.UiToggleGroup
      getTogglesOn(): Array<ui.UiToggle> /* std::vector */
      getTogglesOff(): Array<ui.UiToggle> /* std::vector */
      getAnyTogglesOn(): boolean
      setAllTogglesOff(): void
      setAllowMultipleTogglesOn(enable: boolean): void
      getAllowMultipleTogglesOn(): boolean
      setAllowAllTogglesOff(enable: boolean): void
      getAllowAllTogglesOff(): boolean
    };
  }
}

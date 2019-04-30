declare module 'lumin' {
  namespace ui {
    class UiColorPicker extends UiNode {
      static Create(prism: Prism, startingColor: [number, number, number, number] /* glm::vec4 */ = 0 /* 0 is not the actual default value */, height: number = 0 /* 0 is not the actual default value */): ui.UiColorPicker
      onColorChangedSub(callback: callable): utils.CallbackID
      onColorChangedUnsub(callbackID: utils.CallbackID): boolean
      onConfirmSub(callback: callable): utils.CallbackID
      onConfirmUnsub(callbackID: utils.CallbackID): boolean
      onCancelSub(callback: callable): utils.CallbackID
      onCancelUnsub(callbackID: utils.CallbackID): boolean
      getColor(): [number, number, number, number] /* glm::vec4 */
      setColor(color: [number, number, number, number] /* glm::vec4 */): void
    };
  }
}

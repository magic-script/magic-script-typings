declare module 'lumin' {
  namespace ui {
    class Keyboard {
      constructor() {}
      static Get(): ui.Keyboard
      show(a_pClientVol: Prism, a_pLocaleCode: ui.Locale.Code, a_keyboardProperties: ui.KeyboardProperties, a_eventHandler: callable, positionExtents: math.AABB = 0 /* 0 is not the actual default value */): ui.Keyboard.ShowKeyboardReturnCode
      hide(): void
      onVisibilityChangedSub(callback: callable): utils.CallbackID
      onVisibilityChangedUnsub(callbackID: utils.CallbackID): boolean
    };
    enum ShowKeyboardReturnCode {
      kVirtualKeyboardShown,
      kMCAKeyboardShown,
      kNoKeyboardShown,
      kError,
    }
  }
}

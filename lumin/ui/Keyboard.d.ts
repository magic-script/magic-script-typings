declare module 'lumin' {
  namespace ui {

    /**
     * Main entry point for interacting with the UiKit keyboard.
     */
    class Keyboard {
      constructor()

      /**
       * Returns the Keyboard singleton.
       *
       * @priv none
       */
      static Get(): ui.Keyboard | null

      /**
       * Requests that the keyboard be shown and enabled for the given prism.
       *
       * @param a_pClientVol the prism the keyboard will be positioned against.
       * @param a_pLocaleCode the locale to use with the keyboard.
       * @param a_keyboardProperties the properties to use for the keyboard.
       * @param a_eventHandler the keyboard event handling function.
       * @param positionExtents `default = math.AABB.EMPTY`<br/> the (volume-space) extents of the control that's calling the keyboard.
       * @return a ShowKeyboardReturnCode value indicating the result of the call.
       *
       * @priv none
       */
      show(a_pClientVol: Prism | null, a_pLocaleCode: ui.Locale.Code, a_keyboardProperties: ui.KeyboardProperties, a_eventHandler: ((arg0: ui.KeyboardEvent.EventData) => void) | null /* std::function<void(KeyboardEvent::EventData)> */, positionExtents?: math.AABB): ui.Keyboard.ShowKeyboardReturnCode

      /**
       * Requests that the keyboard be hidden.
       *
       * @priv none
       */
      hide(): void

      /**
       * The on keyboard visibility changed event.
       *
       * This event is dispatched whenever the visibility of the keyboard changes.
       *
       * @priv none
       */
      onVisibilityChangedSub(callback: ((arg0: boolean) => void) | null /* std::function<void(bool)> */): utils.CallbackID
      onVisibilityChangedUnsub(callbackID: utils.CallbackID): boolean
    }
    namespace Keyboard {
      enum ShowKeyboardReturnCode {
        kVirtualKeyboardShown,
        kMCAKeyboardShown,
        kNoKeyboardShown,
        kError,
      }
    }
  }
}

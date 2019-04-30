declare module 'lumin' {
  namespace ui {
    class UiCircleConfirmation extends UiNode {
      static Create(prism: Prism, height: number = 0 /* 0 is not the actual default value */): ui.UiCircleConfirmation
      getAngle(): number
      onConfirmationCompleteSub(callback: callable): utils.CallbackID
      onConfirmationCompleteUnsub(callbackID: utils.CallbackID): boolean
      onConfirmationCanceledSub(callback: callable): utils.CallbackID
      onConfirmationCanceledUnsub(callbackID: utils.CallbackID): boolean
      onConfirmationUpdateSub(callback: callable): utils.CallbackID
      onConfirmationUpdateUnsub(callbackID: utils.CallbackID): boolean
    };
  }
}

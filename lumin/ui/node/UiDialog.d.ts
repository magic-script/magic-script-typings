declare module 'lumin' {
  namespace ui {
    class DialogParams {
      dialogType: ui.DialogType;
      dialogLayout: ui.DialogLayout;
      title: string;
      titleL10nKey: string;
      titleL10nParams: Object;
      message: string;
      messageL10nKey: string;
      messageL10nParams: Object;
      confirmText: string;
      confirmL10nKey: string;
      confirmL10nParams: Object;
      confirmIcon: ui.SystemIcon;
      cancelText: string;
      cancelL10nKey: string;
      cancelL10nParams: Object;
      cancelIcon: ui.SystemIcon;
      buttonType: ui.EclipseButtonType;
      scrolling: boolean;
      expireTime: number;
      constructor(type: ui.DialogType, layout: ui.DialogLayout)
    };
    class UiDialog extends UiNode {
      static Create(prism: Prism, params: ui.DialogParams): ui.UiDialog
      static Create(prism: Prism, dialogType: ui.DialogType, dialogLayout: ui.DialogLayout = 0 /* 0 is not the actual default value */): ui.UiDialog
      static Create(prism: Prism, title: string, message: string, imageModel: TransformNode = 0 /* 0 is not the actual default value */, dialogType: ui.DialogType = 0 /* 0 is not the actual default value */, dialogLayout: ui.DialogLayout = 0 /* 0 is not the actual default value */): ui.UiDialog
      static CreateScrolling(prism: Prism, title: string, message: string, dialogType: ui.DialogType = 0 /* 0 is not the actual default value */, dialogLayout: ui.DialogLayout = 0 /* 0 is not the actual default value */): ui.UiDialog
      static CreateScrolling(prism: Prism, title: string, scrollContent: TransformNode, dialogType: ui.DialogType = 0 /* 0 is not the actual default value */, dialogLayout: ui.DialogLayout = 0 /* 0 is not the actual default value */): ui.UiDialog
      onCancelSub(callback: callable): utils.CallbackID
      onCancelUnsub(callbackID: utils.CallbackID): boolean
      onConfirmSub(callback: callable): utils.CallbackID
      onConfirmUnsub(callbackID: utils.CallbackID): boolean
      onTimeExpiredSub(callback: callable): utils.CallbackID
      onTimeExpiredUnsub(callbackID: utils.CallbackID): boolean
      setDialogContent(pNode: TransformNode): void
      getDialogContent(): TransformNode
      detachDialogContent(): TransformNode
      setDialogImage(pNode: TransformNode): void
      getDialogImage(): TransformNode
      detachDialogImage(): TransformNode
      setExpireTime(seconds: number): void
      getExpireTime(): number
      getCurrentExpireTime(): number
      startTimer(): void
      setButtonType(buttonType: ui.EclipseButtonType): void
      getButtonType(): ui.EclipseButtonType
      setConfirmButtonText(text: string): void
      getConfirmButtonText(): string
      setConfirmButtonIcon(icon: ui.SystemIcon): void
      getConfirmButtonIcon(): ui.SystemIcon
      setCancelButtonText(text: string): void
      getCancelButtonText(): string
      setCancelButtonIcon(icon: ui.SystemIcon): void
      getCancelButtonIcon(): ui.SystemIcon
      init(): void
    };
  }
}

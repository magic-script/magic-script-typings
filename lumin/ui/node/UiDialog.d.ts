declare module 'lumin' {
  namespace ui {

    /** Dialog parameters for dialog creation. */
    class DialogParams {

      /**
       * The dialog type
       */
      dialogType: ui.DialogType;

      /**
       * The dialog layout preference
       */
      dialogLayout: ui.DialogLayout;

      /**
       * The dialog title text
       */
      title: string;

      /**
       * The dialog title localization key
       */
      titleL10nKey: string;

      /**
       * The dialog title localization parameters
       */
      titleL10nParams: { [key:string]: utils.LocaleHelper.Param } /* std::unordered_map<std::string, utils::LocaleHelper::Param> */;

      /**
       * The dialog message text
       */
      message: string;

      /**
       * The dialog message localization key
       */
      messageL10nKey: string;

      /**
       * The dialog message localization parameters
       */
      messageL10nParams: { [key:string]: utils.LocaleHelper.Param } /* std::unordered_map<std::string, utils::LocaleHelper::Param> */;

      /**
       * The confirm button text
       */
      confirmText: string;

      /**
       * The confirm button localization key
       */
      confirmL10nKey: string;

      /**
       * The confirm button localization params
       */
      confirmL10nParams: { [key:string]: utils.LocaleHelper.Param } /* std::unordered_map<std::string, utils::LocaleHelper::Param> */;

      /**
       * The confirm button icon
       */
      confirmIcon: ui.SystemIcon;

      /**
       * The cancel button text
       */
      cancelText: string;

      /**
       * The cancel button localization key
       */
      cancelL10nKey: string;

      /**
       * The cancel button localization params
       */
      cancelL10nParams: { [key:string]: utils.LocaleHelper.Param } /* std::unordered_map<std::string, utils::LocaleHelper::Param> */;

      /**
       * The cancel button icon
       */
      cancelIcon: ui.SystemIcon;

      /**
       * The button type for the dialog.
       */
      buttonType: ui.EclipseButtonType;

      /**
       * Flag to indicate the dialog content will be placed within a scroll view.
       */
      scrolling: boolean;

      /**
       * The time in seconds for the dialog to expire.
       */
      expireTime: number /* float */;
      constructor(type: ui.DialogType, layout: ui.DialogLayout)
    }

    /**
     * UiDialog - Supports modal and modeless dialogs.
     */
    class UiDialog extends ui.UiNode {

      /**
       * Create a new UiDialog with provided parameters.
       *
       * @param prism The prism to create this dialog for.
       * @param params The dialog parameters.
       *
       * @priv none
       */
      static Create(prism: Prism | null, params: ui.DialogParams): ui.UiDialog | null

      /**
       * Creates a new UiDialog ready for content.
       *
       * @param prism The prism to create this dialog for.
       * @param dialogType The type of dialog.
       * @param dialogLayout `default = DialogLayout.kStandard`<br/> The dialog layout preference.
       * @return New UiDialog on success; nullptr on failure.
       *
       * @priv none
       */
      static Create(prism: Prism | null, dialogType: ui.DialogType, dialogLayout?: ui.DialogLayout): ui.UiDialog | null

      /**
       * Creates a new UiDialog with generated content.
       *
       * @param prism The prism to create this dialog for.
       * @param title The dialog title text.  Use an empty string to not show title.
       * @param message The dialog message text.  Use an empty string to not show message.
       * @param imageModel `default = null`<br/> The dialog image model hierarchy.  Use nullptr to not show image model.
       * @param dialogType `default = DialogType.kDualAction`<br/> The type of dialog.
       * @param dialogLayout `default = DialogLayout.kStandard`<br/> The dialog layout preference.
       * @return New UiDialog on success; nullptr on failure.
       *
       * @priv none
       */
      static Create(prism: Prism | null, title: string, message: string, imageModel?: TransformNode | null, dialogType?: ui.DialogType, dialogLayout?: ui.DialogLayout): ui.UiDialog | null

      /**
       * Creates a new UiDialog with vertical scrolling content.
       *
       * @param prism The prism to create this dialog for.
       * @param title The dialog title text.  Use an empty string to not show title.
       * @param message The dialog message text to scroll.
       * @param dialogType `default = DialogType.kDualAction`<br/> dialog type to use
       * @param dialogLayout `default = DialogLayout.kWide`<br/> dialog layout to use
       * @return New UiDialog on success; nullptr on failure.
       *
       * @priv none
       */
      static CreateScrolling(prism: Prism | null, title: string, message: string, dialogType?: ui.DialogType, dialogLayout?: ui.DialogLayout): ui.UiDialog | null

      /**
       * Create a new UiDialog with vertical scrolling content.
       *
       * @param prism The prism to create this dialog for.
       * @param title The dialog title text.  Use an empty string to not show title.
       * @param scrollContent The top level node of the content to scroll.
       * @param dialogType `default = DialogType.kDualAction`<br/> dialog type to use
       * @param dialogLayout `default = DialogLayout.kWide`<br/> dialog layout to use
       * @return New UiDialog on success; nullptr on failure.
       *
       * @priv none
       */
      static CreateScrolling(prism: Prism | null, title: string, scrollContent: TransformNode | null, dialogType?: ui.DialogType, dialogLayout?: ui.DialogLayout): ui.UiDialog | null

      /**
       * The on cancel event.
       *
       * This event is dispatched when the user cancels the dialog, if available as an option.
       *
       * @priv none
       */
      onCancelSub(callback: ((arg0: ui.UiEventData) => void) | null /* std::function<void(UiEventData)> */): utils.CallbackID
      onCancelUnsub(callbackID: utils.CallbackID): boolean

      /**
       * The on confirm event.
       *
       * This event is dispatched when the user confirms the dialog, if available as an option.
       *
       * @priv none
       */
      onConfirmSub(callback: ((arg0: ui.UiEventData) => void) | null /* std::function<void(UiEventData)> */): utils.CallbackID
      onConfirmUnsub(callbackID: utils.CallbackID): boolean

      /**
       * The on time expired event.
       *
       * This event is dispatched when the dialog's time has expired for timed dialogs.
       *
       * @priv none
       */
      onTimeExpiredSub(callback: ((arg0: ui.UiEventData) => void) | null /* std::function<void(UiEventData)> */): utils.CallbackID
      onTimeExpiredUnsub(callbackID: utils.CallbackID): boolean

      /**
       * Sets the dialog content, not including any confirm/cancel buttons
       * which are provided by the element.
       *
       * If there is content already set, the old content will be destroyed
       * and the new content will take its place.  If the old content needs
       * to be kept, call detachDialogContent() before calling setDialogContent().
       *
       * @param pNode - A pointer to the Node hierarchy representing dialog content.
       *
       * @priv none
       */
      setDialogContent(pNode: TransformNode | null): void

      /**
       * Gets the dialog content, not including any confirm/cancel buttons
       * which are provided by the element.
       *
       * @return A pointer to the Node hierarchy representing dialog content.
       *
       * @priv none
       */
      getDialogContent(): TransformNode | null

      /**
       * Detaches the content from the UiDialog.
       *
       * The returned Node hierarchy will be orphaned (no longer attached
       * to the scene graph) and must be handled by the caller.
       *
       * @priv none
       */
      detachDialogContent(): TransformNode | null

      /**
       * Sets the dialog image at the top of the dialog, above content and title.
       *
       * If there is an image already set, the old one will be destroyed
       * and the new image will take its place.  If the old image needs
       * to be kept, call detachDialogImage() before calling setDialogImage().
       *
       * @param pNode - A pointer to the Node hierarchy representing the dialog image.
       *
       * @priv none
       */
      setDialogImage(pNode: TransformNode | null): void

      /**
       * Gets the dialog image.
       *
       * @return A pointer to the Node hierarchy representing the dialog image.
       *
       * @priv none
       */
      getDialogImage(): TransformNode | null

      /**
       * Detaches the image from the UiDialog.
       *
       * The returned Node hierarchy will be orphaned (no longer attached
       * to the scene graph) and must be handled by the caller.
       *
       * @priv none
       */
      detachDialogImage(): TransformNode | null

      /**
       * Sets the expiration time for the dialog in seconds.
       *
       * For modeless timed dialogs, and optionally for other dialogs, a timer can be set
       * that will send out the onTimeExpired event when the dialog time expires.
       * The dialog does not destroy itself and must
       * be handled by the caller using the event.
       *
       * @param seconds the amount of seconds before the modeless dialog box expires.
       *
       * @priv none
       */
      setExpireTime(seconds: number /* float */): void

      /**
       * Gets the dialog expiration time setting in seconds.
       *
       * @return the expiration time setting.
       *
       * @priv none
       */
      getExpireTime(): number /* float */

      /**
       * Gets the current expiration time in seconds.
       *
       * @return the current expiration time.
       *
       * @priv none
       */
      getCurrentExpireTime(): number /* float */

      /**
       * Start the expiration timer.
       *
       * The timer is started automatically for timed dialogs in the init() call,
       * or can be started manually with this method.
       *
       * Subsequent calls to this method reset the timer to the set expire time.
       *
       * @priv none
       */
      startTimer(): void

      /**
       * Sets the button type to use for the dialog.
       *
       * @param buttonType The button type.
       *
       * @priv none
       */
      setButtonType(buttonType: ui.EclipseButtonType): void

      /**
       * Gets the button type used for the dialog.
       *
       * @return the button type.
       *
       * @priv none
       */
      getButtonType(): ui.EclipseButtonType

      /**
       * Sets the UTF-8 encoded Confirm button text, default is "Confirm".
       *
       * @param text the button text.
       *
       * @priv none
       */
      setConfirmButtonText(text: string): void

      /**
       * Gets the UTF-8 encoded Confirm button text.
       *
       * @return the button text.
       *
       * @priv none
       */
      getConfirmButtonText(): string

      /**
       * Sets the Confirm button icon.
       *
       * @param icon the button icon.
       *
       * @priv none
       */
      setConfirmButtonIcon(icon: ui.SystemIcon): void

      /**
       * Gets the Confirm button icon.
       *
       * @return the button icon.
       *
       * @priv none
       */
      getConfirmButtonIcon(): ui.SystemIcon

      /**
       * Sets the UTF-8 encoded Cancel button text, default is "Cancel".
       *
       * @param text the button text.
       *
       * @priv none
       */
      setCancelButtonText(text: string): void

      /**
       * Gets the UTF-8 encoded Cancel button text.
       *
       * @return the button text.
       *
       * @priv none
       */
      getCancelButtonText(): string

      /**
       * Sets the Cancel button icon.
       *
       * @param icon the button icon.
       *
       * @priv none
       */
      setCancelButtonIcon(icon: ui.SystemIcon): void

      /**
       * Gets the Cancel button icon.
       *
       * @return the button icon.
       *
       * @priv none
       */
      getCancelButtonIcon(): ui.SystemIcon

      /**
       * Initialize the dialog.
       *
       * Call init() when the dialog is ready to be shown.  For
       * modal dialogs, the cursor will transition to one of the
       * dialog's action buttons and will be constrained to the
       * dialog area.  For timed, modeless dialogs, the
       * expiration timer will be started automatically.
       *
       * @priv none
       */
      init(): void
    }
  }
}

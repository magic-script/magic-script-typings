declare module 'lumin' {
  namespace ui {

    /** Eclipse toggle parameters for creating sliders */
    class EclipseToggleParams {

      /**
       * Type of eclipse toggle.
       */
      type: ui.EclipseToggleType;

      /**
       * Eclipse toggle icon path used in kRadialWithIcon.
       */
      iconPath: string;

      /**
       * If the icon path is an absolute path (default false).
       */
      absoluteIconPath: boolean;

      /**
       * The toggle label text
       */
      labelText: string;

      /**
       * The localization key for the element label.
       */
      l10nKey: string;

      /**
       * The optional localization parameters for the element label.
       */
      l10nParams: { [key:string]: utils.LocaleHelper.Param } /* std::unordered_map<std::string, utils::LocaleHelper::Param> */;

      /**
       * The display mode of the label, used in kIcon.
       */
      labelDisplayMode: ui.LabelDisplayMode;

      /**
       * What side the label text sits on, used in kIcon.
       */
      labelSide: ui.Side;

      /**
       * The left status label of the kSwitchWithLabel ("OFF")
       */
      statusText1: string;

      /**
       * The right status label of the kSwitchWithLabel ("ON")
       */
      statusText2: string;

      /**
       * Icon scale (default 1.0f).
       */
      iconScale: number /* float */;

      /**
       * Whether to show the toggle background (OFF outline or solid ON states)
       */
      showBackground: boolean;

      /**
       * Height of the Eclipse toggle, (default 0 = default toggle height).
       */
      height: number /* float */;

      /**
       * The type of SystemIcon to be used for the eclipse toggle
       */
      iconType: ui.SystemIcon;

      /**
       * Optional SystemIcon to be displayed in the toggle off state
       */
      iconTypeOffState: ui.SystemIcon;
      constructor(a_type: ui.EclipseToggleType, a_iconPath: string, a_labelText?: string, a_statusText1?: string, a_statusText2?: string, a_height?: number /* float */)
      constructor(a_type: ui.EclipseToggleType, a_iconPath: string, a_labelText: string, a_statusText1: string, a_statusText2: string, a_height: number /* float */, a_iconType: ui.SystemIcon)
      constructor(a_type: ui.EclipseToggleType, a_iconPath: string, a_labelText: string, a_statusText1: string, a_statusText2: string, a_height: number /* float */, a_iconType: ui.SystemIcon, a_iconTypeOffState: ui.SystemIcon)
      constructor(a_type: ui.EclipseToggleType, a_iconType: ui.SystemIcon, a_labelText?: string, a_statusText1?: string, a_statusText2?: string, a_height?: number /* float */)
      constructor(a_type: ui.EclipseToggleType, a_iconType: ui.SystemIcon, a_iconTypeOffState: ui.SystemIcon, a_labelText?: string, a_statusText1?: string, a_statusText2?: string, a_height?: number /* float */)
    }

    /**
     * UiToggle - This node represents a standard, clickable toggle.
     */
    class UiToggle extends ui.UiNode {

      /**
       * Creates a UiToggle element using default settings.
       *
       * The default values for height is 0, which instructs
       * the toggle to use the default toggle height.  A value
       * greater than 0 will override the defaults.
       *
       * Label text size is automatically set based on the toggle height
       * unless overridden with UiToggle::setTextSize().
       *
       * Note: This creates a standard, typed (default switch, radio, checkbox) toggle element.
       *
       * @param prism - The prism to create the toggle for.
       * @param labelText - The UTF-8 encoded text to initially set the UiToggle label to.
       * @param height `default = 0.0`<br/> - The height of the toggle, 0 for default.
       * @return The new UiToggle node.
       *
       * @priv none
       */
      static Create(prism: Prism | null, labelText: string, height?: number /* float */): ui.UiToggle | null

      /** Creates a UiToggle element using default settings.
       *
       * The default values for height is 0, which instructs
       * the toggle to use the default toggle height.  A value
       * greater than 0 will override the defaults.
       *
       * Label text size is automatically set based on the toggle height
       * unless overridden with UiToggle::setTextSize().
       *
       * Note: This creates a standard, typed (default switch, radio, checkbox) toggle element.
       * For specific instances of toggle from the UX spec, see createEclipseToggle.
       *
       * @param prism - The prism to create the toggle for.
       * @param labelText - The UTF-8 encoded text to initially set the UiToggle label to.
       * @param toggleType - The type of the toggle (kDefault, kRadio, kCheckbox).
       * @param height `default = 0.0`<br/> - The height of the toggle, 0 for default.
       * @return The new UiToggle node.
       *
       * @priv none
       */
      static Create(prism: Prism | null, labelText: string, toggleType: ui.ToggleType, height?: number /* float */): ui.UiToggle | null

      /**
       * Creates an Eclipse toggle from UX specifications.
       *
       * @param prism - The prism to create the toggle for.
       * @param toggleParams - The EclipseToggleParams describing the Eclipse toggle to create.
       * @return The new UiToggle node representing the Eclipse toggle.
       *
       * @priv none
       */
      static CreateEclipseToggle(prism: Prism | null, toggleParams: ui.EclipseToggleParams): ui.UiToggle | null

      /**
       * The on toggle changed Event.
       *
       * This event is dispatched whenever the toggle state has changed.
       *
       * @priv none
       */
      onToggleChangedSub(callback: ((arg0: ui.UiEventData) => void) | null /* std::function<void(UiEventData)> */): utils.CallbackID
      onToggleChangedUnsub(callbackID: utils.CallbackID): boolean

      /**
       * Sets whether the toggle is ON or not.
       *
       * @param state the ON (true/false) state of the toggle.
       *
       * @priv none
       */
      setOn(state: boolean): void

      /**
       * Gets whether the toggle is ON or not.
       *
       * @return true if the toggle is ON, false if not.
       *
       * @priv none
       */
      getOn(): boolean

      /**
       * Sets the Node hierarchy used as visual representation for this UiToggle.
       *
       * In situations where a custom appearance is required,
       * use this method to set a UiToggle's visual representation using any
       * arbitrary Node hierarchy.  This call will automatically parent the Node
       * under this UiToggle and offset it with the optionally provided vector.
       * Be sure to include a UiText node within the passed in Node hierarchy in order
       * for the UiToggle to automatically use it for the setText and getText methods.
       * The UiToggle will do a left-to-right breadth first search of the Node
       * hierarchy for a UiText node and will use the first found as the text label.
       *
       * If there is a current Node hierarchy for the model, this call will delete the
       * current hierarchy and replace with the new hierarchy.
       *
       * @param pNode - A pointer to the top of the Node hierarchy to use for visual representation.
       * @param offset `default = VEC3_ZERO`<br/> - An optional offset to position the Node within the UiToggle (default is [0,0,0]).
       *
       * @priv none
       */
      setToggleModel(pNode: Node | null, offset?: [number, number, number] | Float32Array /* glm::vec3 */): void

      /**
       * Gets the Node hierarchy used as visual representation for this UiToggle.
       *
       * @return a pointer to the model node used.
       *
       * @priv none
       */
      getToggleModel(): Node | null

      /**
       * Detaches the Node hierarchy used as visual representation for this UiToggle.
       *
       * The returned Node hierarchy will be orphaned (no longer attached
       * to the scene graph) and must be handled by the caller.
       *
       * @priv none
       */
      detachToggleModel(): Node | null

      /**
       * Sets the UTF-8 encoded toggle label text.
       *
       * @param text - Text to set for the toggle label.
       *
       * @priv none
       */
      setText(text: string): void

      /**
       * Gets the UTF-8 encoded toggle label text.
       *
       * @return The toggle label text.
       *
       * @priv none
       */
      getText(): string

      /**
       * Sets the RGBA color of the toggle label.
       *
       * @param rgba Toggle label color.
       *
       * @priv none
       */
      setTextColor(rgba: [number, number, number, number] | Float32Array /* glm::vec4 */): void

      /**
       * Gets the RGBA color of the toggle label text; the default is white; i.e., (1, 1, 1, 1).
       *
       * @return Text color.
       *
       * @priv none
       */
      getTextColor(): [number, number, number, number] /* glm::vec4 */

      /**
       * Sets the toggle text size in scene units.
       *
       * @param size - Size of text.
       *
       * @priv none
       */
      setTextSize(size: number /* float */): void

      /**
       * Gets the toggle text size in scene units.
       *
       * @return the text size.
       *
       * @priv none
       */
      getTextSize(): number /* float */

      /**
       * Gets the UiText label for this toggle if one exists
       * in the button hierarchy.
       *
       * @return a UiText pointer (can be null).
       *
       * @priv none
       */
      getUiTextLabel(): ui.UiText | null
    }
  }
}

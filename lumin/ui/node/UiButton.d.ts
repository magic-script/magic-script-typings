declare module 'lumin' {
  namespace ui {

    /** Button parameters for creating Eclipse buttons */
    class EclipseButtonParams {

      /**
       * Type of Eclipse Button.
       */
      type: ui.EclipseButtonType;

      /**
       * Button icon path used in kIcon, kIconWithLabel, and kTextWithIcon.
       */
      iconPath: string;

      /**
       * If the icon path is an absolute path (default false).
       */
      absoluteIconPath: boolean;

      /**
       * Icon scale (default 1.0f).
       */
      iconScale: number /* float */;

      /**
       * Button label text used in kIconWithLabel, kText, and kTextWithIcon.
       */
      labelText: string;

      /**
       * The localization key for the element label, used in kIconWithLabel, kText, and kTextWithIcon.
       */
      l10nKey: string;

      /**
       * The optional localization parameters for the element label.
       */
      l10nParams: { [key:string]: utils.LocaleHelper.Param } /* std::unordered_map<std::string, utils::LocaleHelper::Param> */;

      /**
       * What side the button label text sits on, used in kIconWithLabel.
       */
      labelSide: ui.Side;

      /**
       * The display mode of the label, used in kIconWithLabel.
       */
      labelDisplayMode: ui.LabelDisplayMode;

      /**
       * Whether the button has an outline. Considered only for kText and kTextWithIcon type button.
       */
      outlineButton: boolean;

      /**
       * Height of the Eclipse Button, (default 0 = default button height).
       */
      height: number /* float */;

      /**
       * Width of the Eclipse Button, (default 0 = auto calculated width).
       */
      width: number /* float */;

      /**
       * The type of SystemIcon to be used for the eclipse button.
       */
      iconType: ui.SystemIcon;
      constructor(a_type: ui.EclipseButtonType)
      constructor(a_type: ui.EclipseButtonType, a_pathOrText: string, a_height?: number /* float */)
      constructor(a_type: ui.EclipseButtonType, a_iconPath: string, a_labelText: string, a_height?: number /* float */)
      constructor(a_type: ui.EclipseButtonType, a_iconPath: string, a_labelText: string, a_labelSide: ui.Side, a_height?: number /* float */)
      constructor(a_type: ui.EclipseButtonType, a_iconPath: string, a_labelText: string, a_labelSide: ui.Side, a_height: number /* float */, iconType: ui.SystemIcon)
      constructor(a_type: ui.EclipseButtonType, a_iconType: ui.SystemIcon, a_labelText: string, a_labelSide: ui.Side, a_height?: number /* float */)
      constructor(a_type: ui.EclipseButtonType, a_iconType: ui.SystemIcon, a_height?: number /* float */)
    }

    /**
     * UiButton - This node represents a standard, clickable button.
     */
    class UiButton extends ui.UiNode {

      /**
       * Creates a UiButton element using default settings.
       *
       * The default values for width and height are 0, which instructs
       * the button to use the default button height and automatically
       * calculates button width based on the button text dimensions.
       *
       * Setting a value greater than 0 for width or height will override
       * the defaults.
       *
       * Button text size is automatically set based on the button height
       * unless overridden with UiButton::setTextSize().
       *
       * @param prism - The prism to create this button for.
       * @param labelText - The UTF-8 encoded text to initially set the UiButton label to.
       * @param width `default = 0.0`<br/> - The width of the button, 0 for default.
       * @param height `default = 0.0`<br/> - The height of the button, 0 for default.
       * @param roundness `default = 1.0`<br/> - The ratio of corner rounding (0-1).  1 [default] = fully rounded (circle, capsule), 0 = sharp corner.
       * @return The new UiButton node.
       *
       * @priv none
       */
      static Create(prism: Prism | null, labelText: string, width?: number /* float */, height?: number /* float */, roundness?: number /* float */): ui.UiButton | null

      /**
       * Creates an Eclipse button from UX specifications.
       *
       * @param prism - The prism to create this button for.
       * @param buttonParams - The EclipseButtonParams describing the Eclipse button to create.
       * @return The new UiButton node representing the Eclipse button.
       *
       * @priv none
       */
      static CreateEclipseButton(prism: Prism | null, buttonParams: ui.EclipseButtonParams): ui.UiButton | null

      /**
       * Sets the Node hierarchy used as visual representation for this UiButton.
       *
       * In situations where a custom appearance is required,
       * use this method to set a UiButton's visual representation using any
       * arbitrary Node hierarchy.  This call will automatically parent the Node
       * under this UiButton and offset it with the optionally provided vector.
       * Be sure to include a UiText node within the passed in Node hierarchy in order
       * for the UiButton to automatically use it for the setText and getText methods.
       * The UiButton will do a left-to-right breadth first search of the Node
       * hierarchy for a UiText node and will use the first found as the text label.
       *
       * If there is a current Node hierarchy for the model, this call will delete the
       * current hierarchy and replace with the new hierarchy.
       *
       * @param pNode - A pointer to the top of the Node hierarchy to use for visual representation.
       * @param offset `default = VEC3_ZERO`<br/> - An optional offset to position the Node within the UiButton (default is [0,0,0]).
       *
       * @priv none
       */
      setButtonModel(pNode: Node | null, offset?: [number, number, number] | Float32Array /* glm::vec3 */): void

      /**
       * Gets the Node hierarchy used as visual representation for this UiButton.
       *
       * @return a pointer to the model node used.
       *
       * @priv none
       */
      getButtonModel(): Node | null

      /**
       * Detaches the Node hierarchy used as visual representation for this UiButton.
       *
       * The returned Node hierarchy will be orphaned (no longer attached
       * to the scene graph) and must be handled by the caller.
       *
       * @priv none
       */
      detachButtonModel(): Node | null

      /**
       * Sets the UTF-8 encoded button text.
       *
       * @param text - Text to set for the button.
       *
       * @priv none
       */
      setText(text: string): void

      /**
       * Gets the UTF-8 encoded button text.
       *
       * @return The button text.
       *
       * @priv none
       */
      getText(): string

      /**
       * Sets the RGBA color of the button text.
       *
       * @param rgba Text color.
       *
       * @priv none
       */
      setTextColor(rgba: [number, number, number, number] | Float32Array /* glm::vec4 */): void

      /**
       * Gets the RGBA color of the button text; the default is white; i.e., (1, 1, 1, 1).
       *
       * @return Text color.
       *
       * @priv none
       */
      getTextColor(): [number, number, number, number] /* glm::vec4 */

      /**
       * Sets the RGBA color of the button icon.
       *
       * @param rgba Icon color.
       *
       * @priv none
       */
      setIconColor(rgba: [number, number, number, number] | Float32Array /* glm::vec4 */): void

      /**
       * Gets the RGBA color of the button icon; the default is white; i.e., (1, 1, 1, 1).
       *
       * @return Icon color.
       *
       * @priv none
       */
      getIconColor(): [number, number, number, number] /* glm::vec4 */

      /**
       * Sets the button text label render size height in scene units.
       *
       * @param size - Size of text.
       *
       * @priv none
       */
      setTextSize(size: number /* float */): void

      /**
       * Gets the button text label render size height in scene units.
       *
       * @return the text size.
       *
       * @priv none
       */
      getTextSize(): number /* float */

      /**
       * Sets the button icon size in scene units.
       *
       * @param size - Size of the icon.
       *
       * @priv none
       */
      setIconSize(size: [number, number] | Float32Array /* glm::vec2 */): void

      /**
       * Gets the button icon size in scene units.
       *
       * @return the icon size.
       *
       * @priv none
       */
      getIconSize(): [number, number] /* glm::vec2 */

      /**
       * Gets the UiText label for this button if one exists
       * in the button hierarchy.
       *
       * @return a UiText pointer (can be null).
       *
       * @priv none
       */
      getUiTextLabel(): ui.UiText | null

      /**
       * Gets the UiImage icon for this button if one exists
       * in the button hierarchy.
       *
       * @return a UiImage pointer (can be null).
       *
       * @priv none
       */
      getUiImageIcon(): ui.UiImage | null
    }
  }
}

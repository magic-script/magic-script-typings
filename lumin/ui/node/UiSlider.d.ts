declare module 'lumin' {
  namespace ui {

    /** Eclipse slider parameters for creating sliders */
    class EclipseSliderParams {

      /**
       * Type of eclipse slider.
       */
      type: ui.EclipseSliderType;

      /**
       * Eclipse slider icon path used in kRadialWithIcon.
       */
      iconPath1: string;

      /**
       * If the icon path is an absolute path (default false).
       */
      absoluteIconPath1: boolean;

      /**
       * Eclipse slider icon path used in kRadialWithIcon.
       */
      iconPath2: string;

      /**
       * If the icon path is an absolute path (default false).
       */
      absoluteIconPath2: boolean;
      labelText1: string;
      labelText2: string;

      /**
       * Icon scale (default 1.0f).
       */
      iconScale: number /* float */;

      /**
       * Height of the Eclipse slider, (default 0 = default slider height).
       */
      height: number /* float */;

      /**
       * Width of the Eclipse slider, (default 0 = default slider width. Ignored if type == kCircularWithIcon).
       */
      width: number /* float */;

      /**
       * The type of SystemIcon to be used for the eclipse slider icon_1.
       */
      iconType1: ui.SystemIcon;

      /**
       * The type of SystemIcon to be used for the eclipse slider icon_2.
       */
      iconType2: ui.SystemIcon;
      constructor(a_type: ui.EclipseSliderType)
      constructor(a_type: ui.EclipseSliderType, a_pathOrText: string, a_height?: number /* float */, a_width?: number /* float */)
      constructor(a_type: ui.EclipseSliderType, a_pathOrText1: string, a_pathOrText2: string, a_height?: number /* float */, a_width?: number /* float */)
      constructor(a_type: ui.EclipseSliderType, a_iconPath1: string, a_iconPath2: string, a_labelText1: string, a_labelText2: string, a_height?: number /* float */, a_width?: number /* float */)
      constructor(a_type: ui.EclipseSliderType, a_iconPath1: string, a_iconPath2: string, a_labelText1: string, a_labelText2: string, a_height: number /* float */, a_width: number /* float */, a_iconType1: ui.SystemIcon)
      constructor(a_type: ui.EclipseSliderType, a_iconPath1: string, a_iconPath2: string, a_labelText1: string, a_labelText2: string, a_height: number /* float */, a_width: number /* float */, a_iconType1: ui.SystemIcon, a_iconType2: ui.SystemIcon)
      constructor(a_type: ui.EclipseSliderType, a_iconType1: ui.SystemIcon, a_height?: number /* float */, a_width?: number /* float */)
      constructor(a_type: ui.EclipseSliderType, a_iconType1: ui.SystemIcon, a_labelText1: string, a_height?: number /* float */, a_width?: number /* float */)
    }

    /**
     * UiSlider - This node represents a standard slider.
     */
    class UiSlider extends ui.UiNode {

      /**
       * Creates a UiSlider element using default settings.
       *
       * The default values for height is 0, which instructs
       * the slider to use the default slider height.  A value
       * greater than 0 will override the defaults.
       *
       * Note: This creates a standard, horizontal slider.  For specific
       * instances of slider from the UX spec, see createEclipseSlider.
       *
       * @param prism - The voluem to create this slider for.
       * @param width - The width of the slider.
       * @param height `default = 0.0`<br/> - The height of the slider, 0 for default.
       * @return The new UiSlider node.
       *
       * @priv none
       */
      static Create(prism: Prism | null, width: number /* float */, height?: number /* float */): ui.UiSlider | null

      /**
       * Creates an Eclipse slider from UX specifications.
       *
       * @param prism - The voluem to create this slider for.
       * @param sliderParams - The EclipseButtonParams describing the Eclipse slider to create.
       * @return The new UiSlider node representing the Eclipse slider.
       *
       * @priv none
       */
      static CreateEclipseSlider(prism: Prism | null, sliderParams: ui.EclipseSliderParams): ui.UiSlider | null

      /**
       * The on slider changed Event.
       *
       * This event is dispatched whenever the slider value has changed.
       *
       * @priv none
       */
      onSliderChangedSub(callback: ((arg0: ui.UiEventData) => void) | null /* std::function<void(UiEventData)> */): utils.CallbackID
      onSliderChangedUnsub(callbackID: utils.CallbackID): boolean

      /**
       * Sets the min slider value.
       * This min value is set only if it is less than the slider's max value.
       * @param min The minimum slider value.
       *
       * @priv none
       */
      setMin(min: number /* float */): void

      /**
       * Sets the max slider value.
       * This max value is set only if it is greater than the slider's min value.
       * @param max The maximum slider value.
       *
       * @priv none
       */
      setMax(max: number /* float */): void

      /**
       * Gets the min slider value.
       * @return The minimum slider value.
       *
       * @priv none
       */
      getMin(): number /* float */

      /**
       * Gets the max slider value.
       * @return The maximum slider value.
       *
       * @priv none
       */
      getMax(): number /* float */

      /**
       * Sets the slider min and max values.
       *
       * These values are set only if min is less than max.
       * Default values for min and max are 0 and 1.
       *
       * @param min the minimum value.
       * @param max the maximum value.
       *
       * @priv none
       */
      setMinMax(min: number /* float */, max: number /* float */): void

      /**
       * Gets the slider min and max values.
       *
       * @return pair of minimum and maximum values
       *
       * @priv none
       */
      getMinMax(): [number, number] /* glm::vec2 */

      /**
       * Sets the slider value.
       *
       * The value will be clamped within the current min and max range.
       *
       * @param value the value to set the slider to.
       *
       * @priv none
       */
      setValue(value: number /* float */): void

      /**
       * Gets the current slider value.
       *
       * @return the slider value.
       *
       * @priv none
       */
      getValue(): number /* float */

      /**
       * Sets the Node hierarchy used as visual representation for this UiSlider.
       *
       * In situations where a custom appearance is required,
       * use this method to set a UiSlider's visual representation using any
       * arbitrary Node hierarchy.  This call will automatically parent the Node
       * under this UiSlider and offset it with the optionally provided vector.
       *
       * If there is a current Node hierarchy for the model, this call will delete the
       * current hierarchy and replace with the new hierarchy.
       *
       * @param pNode - A pointer to the top of the Node hierarchy to use for visual representation.
       * @param offset `default = VEC3_ZERO`<br/> - An optional offset to position the Node within the UiSlider (default is [0,0,0])
       *
       * @priv none
       */
      setSliderModel(pNode: Node | null, offset?: [number, number, number] | Float32Array /* glm::vec3 */): void

      /**
       * Gets the Node hierarchy used as visual representation for this UiSlider.
       *
       * @return a pointer to the model node used.
       *
       * @priv none
       */
      getSliderModel(): Node | null

      /**
       * Detaches the Node hierarchy used as visual representation for this UiSlider.
       *
       * The returned Node hierarchy will be orphaned (no longer attached
       * to the scene graph) and must be handled by the caller.
       *
       * @priv none
       */
      detachSliderModel(): Node | null

      /**
       * Gets the size of the slider.
       *
       * @return the size.
       *
       * @priv none
       */
      getSize(): [number, number] /* glm::vec2 */

      /**
       * Gets the UiImage icon for this slider if one exists
       * in the slider hierarchy.
       *
       * @return a UiImage pointer (can be null).
       *
       * @priv none
       */
      getUiImageIcon(): ui.UiImage | null

      /**
       * Gets the UiText label for this slider if one exists
       * in the slider hierarchy.
       *
       * @return a UiText pointer (can be null).
       *
       * @priv none
       */
      getUiTextLabel(): ui.UiText | null
    }
  }
}

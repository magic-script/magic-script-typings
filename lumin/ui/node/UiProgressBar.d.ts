declare module 'lumin' {
  namespace ui {

    /**
     * UiProgressBar - This node represents a standard progress bar.
     */
    class UiProgressBar extends ui.UiNode {

      /**
       * Creates a UiProgressBar element using default settings.
       *
       * The default values for height is 0, which instructs
       * the progress bar to use the default progress bar height.  A value
       * greater than 0 will override the defaults.
       *
       * Note: This creates a standard, horizontal progress bar.
       *
       * @param prism - The prism to create the icon for.
       * @param width - The width of the progress bar.
       * @param height `default = 0.0`<br/> - The height of the progress bar, 0 for default.
       * @return The new UiProgressBar node.
       *
       * @priv none
       */
      static Create(prism: Prism | null, width: number /* float */, height?: number /* float */): ui.UiProgressBar | null

      /**
       * The on progress bar changed Event.
       *
       * This event is dispatched whenever the progress bar value has changed.
       *
       * @priv none
       */
      onProgressBarChangedSub(callback: ((arg0: ui.UiEventData) => void) | null /* std::function<void(UiEventData)> */): utils.CallbackID
      onProgressBarChangedUnsub(callbackID: utils.CallbackID): boolean

      /**
       * Sets the progress bar min value.
       * Default value for min is 0.
       * This min value is set only if it is less than the progress bar's max value.
       * @param min The minimum value.
       *
       * @priv none
       */
      setMin(min: number /* float */): void

      /**
       * Sets the progress bar max value.
       * Default value for max is 1.
       * This max value is set only if it is greater than the progress bar's min value.
       * @param max The maximum value.
       *
       * @priv none
       */
      setMax(max: number /* float */): void

      /**
       * Acquires the progress bar min value.
       * @return Progress bar min value.
       *
       * @priv none
       */
      getMin(): number /* float */

      /**
       * Acquires the progress bar max value.
       * @return Progress bar max value.
       *
       * @priv none
       */
      getMax(): number /* float */

      /**
       * Sets the progress bar min and max values.
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
       * Gets the progress bar min and max values.
       *
       * @return pair of minimum and maximum values
       *
       * @priv none
       */
      getMinMax(): [number, number] /* glm::vec2 */

      /**
       * Sets the progress bar value.
       *
       * The value will be clamped within the current min and max range.
       *
       * @param value the value to set the progress bar to.
       *
       * @priv none
       */
      setValue(value: number /* float */): void

      /**
       * Gets the current progress bar value.
       *
       * @return the progress bar value.
       *
       * @priv none
       */
      getValue(): number /* float */

      /**
       * Gets the size of the progress bar.
       *
       * @return the size.
       *
       * @priv none
       */
      getSize(): [number, number] /* glm::vec2 */

      /**
       * Sets the progress color.
       *
       * @param startColor
       * @param endColor
       *
       * @priv none
       */
      setProgressColor(startColor: [number, number, number, number] | Float32Array /* glm::vec4 */, endColor: [number, number, number, number] | Float32Array /* glm::vec4 */): void

      /**
       * Gets the progress color.
       *
       * @return pair of startColor and endColor
       *
       * @priv none
       */
      getProgressColor(): Array<[number, number, number, number]> /* std::vector<glm::vec4> */
    }
  }
}

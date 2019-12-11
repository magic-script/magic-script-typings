declare module 'lumin' {
  namespace ui {
    class UiColorPicker extends UiNode {

      /**
       * Creates a UiColorPicker element using default settings.
       *
       * @param prism The prism to create the node for.
       * @param startingColor `default = VEC4_ONE`<br/> The initial color for the color picker.
       * @param height `default = 0.0`<br/> Optional height for the color picker.
       *
       * @return The new UiColorPicker node.
       *
       * @priv none
       */
      static Create(prism: Prism, startingColor?: [number, number, number, number] /* glm::vec4 */, height?: number /* float */): ui.UiColorPicker

      /**
       * The on color changed Event.
       *
       * This event is dispatched whenever the rgba value has changed.
       *
       * @priv none
       */
      onColorChangedSub(callback: (arg0: ui.UiEventData, arg1: [number, number, number, number] /* glm::vec4 */) => void): utils.CallbackID
      onColorChangedUnsub(callbackID: utils.CallbackID): boolean

      /**
       * The on confirm Event.
       *
       * This event is dispatched whenever the confirm button is pressed.
       *
       * @priv none
       */
      onConfirmSub(callback: (arg0: ui.UiEventData, arg1: [number, number, number, number] /* glm::vec4 */) => void): utils.CallbackID
      onConfirmUnsub(callbackID: utils.CallbackID): boolean

      /**
       * The on cancel Event.
       *
       * This event is dispatched whenever the cancel button is pressed.
       *
       * @priv none
       */
      onCancelSub(callback: (arg0: ui.UiEventData, arg1: [number, number, number, number] /* glm::vec4 */) => void): utils.CallbackID
      onCancelUnsub(callbackID: utils.CallbackID): boolean

      /**
      * Gets the current color.
      *
      * @return the current color.
       *
       * @priv none
      */
      getColor(): [number, number, number, number] /* glm::vec4 */

      /**
      * Sets the color manually.
      *
      * @param color The color to set.
      *
      * @priv none
      */
      setColor(color: [number, number, number, number] /* glm::vec4 */): void
    }
  }
}

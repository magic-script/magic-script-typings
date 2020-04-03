declare module 'lumin' {
  namespace ui {

    /**
     * UiCircleConfirmation is the UI element intended to confirm powering off.
     * UiCircleConfirmation a knob that the user controls using the touchepad of the control.
     * When the user gets the knob to make a complete circle, UiCircleConfirmation signals this to the client code.
     * The client code would power off upon receipt of confirmation.
     */
    class UiCircleConfirmation extends ui.UiNode {

      /**
       * Creates a UiCircleConfirmation element using default settings.
       *
       * @param prism - The prism to create the icon for.
       * @param height `default = 0`<br/> - The radius of the circle the knob evolves at.
       * @return The new UiCircleConfirmation node.
       *
       * @priv none
       */
      static Create(prism: Prism | null, height?: number /* float */): ui.UiCircleConfirmation | null

      /**
       * Returns the angle of the vector origin-knob with respect to 3 o'clock direction.
       * It used to place the knob in the scene.
       *
       * @priv none
       */
      getAngle(): number /* float */

      /**
       * The on confirmation complete Event.
       *
       * When the knob complete a complete circle, starting from any position, this event is dispatched.
       * If the knob changes direction, the event is fired when the knob reaches the spot where it changed the direction.
       * The client code should register to this event to act upon circle completion.
       *
       * @priv none
       */
      onConfirmationCompleteSub(callback: ((arg0: ui.UiEventData) => void) | null /* std::function<void(UiEventData)> */): utils.CallbackID
      onConfirmationCompleteUnsub(callbackID: utils.CallbackID): boolean

      /**
       * The on confirmation canceled Event.
       *
       * When the user hits the home button, this event is fired.
       * The client code should register to this event to act upon powering off canceling.
       *
       * @priv none
       */
      onConfirmationCanceledSub(callback: ((arg0: ui.UiEventData) => void) | null /* std::function<void(UiEventData)> */): utils.CallbackID
      onConfirmationCanceledUnsub(callbackID: utils.CallbackID): boolean

      /**
       * The on update Event.
       *
       * When the knob's position is changed, this event is dispatched.
       * The data sent with the event represents how far along the user is confirming shutdown.
       * This data is a normalized value between 0 and 1. A value approaching 1, meaning the circle is about to complete.
       *
       * @priv none
       */
      onConfirmationUpdateSub(callback: ((arg0: ui.UiEventData, arg1: number) => void) | null /* std::function<void(UiEventData,float)> */): utils.CallbackID
      onConfirmationUpdateUnsub(callbackID: utils.CallbackID): boolean
    }
  }
}

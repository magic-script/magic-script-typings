declare module 'lumin' {
  namespace ui {

    /**
     * UiTimePicker - This node represents a timepicker component.
     */
    class UiTimePicker extends UiNode {

      /**
       * Creates an UiTimePicker element using default settings.
       *
       * @param volume The volume to create the node for.
       * @param label `default = ""`<br/> The text label that appears with the TimePicker.
       * @param labelSide `default = Side.kTop`<br/> Boolean value specifying whether the label appears on the side or top.
       * @param timeFormat `default = "hh:mm:ss"`<br/> The format for the picker time - hh:mm:ss p, hh:mm p, hh:ss p, hh:mm:ss, hh:mm, hh:ss, mm:ss.
       *                   If the format contains a 'p' (period) the TimePicker will display hours as 1-12, otherwise hours will be displayed as 0-23.
       * @param defaultTime `default = Time()`<br/> The default time to set for the TimePicker.
       *
       * @return The new UiTimePicker node.
       */
      static Create(volume: Prism, label?: string, labelSide?: ui.Side, timeFormat?: string, defaultTime?: ui.Time): ui.UiTimePicker

      /**
       * The on time changed Event.
       *
       * This event is dispatched whenever the time has been changed.
       */
      onTimeChangedSub(callback: (arg0: ui.UiEventData, arg1: string, arg2: ui.Time) => void): utils.CallbackID
      onTimeChangedUnsub(callbackID: utils.CallbackID): boolean

      /**
       * The on time confirmed Event.
       *
       * This event is dispatched whenever the time has been confirmed.
       */
      onTimeConfirmedSub(callback: (arg0: ui.UiEventData, arg1: string, arg2: ui.Time) => void): utils.CallbackID
      onTimeConfirmedUnsub(callbackID: utils.CallbackID): boolean

      /**
      * Gets the time as a string in the specified format.
      *
      * @return the time chosen from the picker
      */
      getTimeString(): string

      /**
      * Gets the time as a Time object
      *
      * @return the time object with values chosen from the picker
      */
      getTime(): ui.Time

      /**
      * Sets the Time manually
      *
      * @param newTime The time Sets
      */
      setTime(newTime: ui.Time): boolean

      /**
      * Sets the TimePicker component's color. This doesn't affect label.
      *
      * @param color The color to set
      */
      setColor(color: [number, number, number, number] /* glm::vec4 */): void

      /**
      * Gets the TimePicker component's color
      *
      * @return the Timepicker's color
      */
      getColor(): [number, number, number, number] /* glm::vec4 */

      /**
      * Gets the TimePicker's UiText label
      *
      * @return the UiText label
      */
      getUiTextLabel(): ui.UiText
    }
  }
}

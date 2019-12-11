declare module 'lumin' {
  namespace ui {

    /**
     * UiDatePicker - This node represents a datepicker component.
     */
    class UiDatePicker extends UiNode {

      /**
       * Creates a UiDatePicker element using default settings.
       *
       * @param volume The volume to create the node for.
       * @param label `default = ""`<br/> The text label that appears with the DatePicker.
       * @param labelSide `default = Side.kTop`<br/> Side enum specifying whether the label appears on the side or top. Only top and left currently supported.
       * @param dateFormat `default = "MM/DD/YYYY"`<br/> The format for the picker date - MM/DD/YYYY, DD/MM/YYYY, MM/YYYY, DD/YYYY.
       * @param defaultDate `default = Date()`<br/> The default date to appear on the picker instead of the placeholder strings.
       * @param yearMin `default = -1`<br/> The minimum year available to choose from.
       * @param yearMax `default = -1`<br/> The maximum year available to choose from.
       *
       * @return The new UiDatePicker node.
       */
      static Create(volume: Prism, label?: string, labelSide?: ui.Side, dateFormat?: string, defaultDate?: ui.Date, yearMin?: number /* int */, yearMax?: number /* int */): ui.UiDatePicker

      /**
       * The on Date changed Event.
       *
       * This event is dispatched whenever a dateComponent has been changed.
       */
      onDateChangedSub(callback: (arg0: ui.UiEventData, arg1: string, arg2: ui.Date) => void): utils.CallbackID
      onDateChangedUnsub(callbackID: utils.CallbackID): boolean

      /**
       * The on Date confirmed Event.
       *
       * This event is dispatched whenever the date has been confirmed.
       */
      onDateConfirmedSub(callback: (arg0: ui.UiEventData, arg1: string, arg2: ui.Date) => void): utils.CallbackID
      onDateConfirmedUnsub(callbackID: utils.CallbackID): boolean

      /**
      * Gets the picked Date as a string in the specified format.
      *
      * @return the date chosen from the picker.
      */
      getDateString(): string

      /**
      * Gets the picked Date as an object.
      *
      * @return the date chosen from the picker.
      */
      getDate(): ui.Date

      /**
      * Sets the Date manually.
      *
      * @param date The Date to set, will ignore values that arent in the dateFormat.
      * @return true if its a valid date and it has been set.
      */
      setDate(date: ui.Date): boolean

      /**
      * Sets the DatePicker component's color, doesn't affect label.
      *
      * @param color The color to set.
      */
      setColor(color: [number, number, number, number] /* glm::vec4 */): void

      /**
      * Gets the DatePicker component's color.
      *
      * @return the DatePicker's color.
      */
      getColor(): [number, number, number, number] /* glm::vec4 */

      /**
      * Gets the DatePicker's UiText label
      *
      * @return the UiText label
      */
      getUiTextLabel(): ui.UiText
    }
  }
}

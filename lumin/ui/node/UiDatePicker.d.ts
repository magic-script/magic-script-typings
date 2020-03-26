declare module 'lumin' {
  namespace ui {

    /** DatePicker parameters */
    class DatePickerParams {

      /**
       * The text label that appears with the DatePicker - Default ""
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
       * Side enum specifying which side the label appears on - Default kTop
       */
      labelSide: ui.Side;

      /**
       * DateFormat enum specifying the display format - Default kAuto based on locale
       */
      dateFormat: ui.DateFormat;

      /**
       * Default Date to initialize the DatePicker to - Default today's date
       */
      defaultDate: ui.Date;

      /**
       * Minimum year available to choose from - Default defaultDate.year - 25
       */
      yearMin: number /* int */;

      /**
       * Maximum year available to choose from - Default defaultDate.year
       */
      yearMax: number /* int */;

      /**
       * Delimiter between MM DD YYYY - Default to locale based delimiter
       */
      delimiter: number /* char32_t */;
      constructor()
    }

    /**
     * UiDatePicker - This node represents a datepicker component.
     */
    class UiDatePicker extends ui.UiNode {

      /**
       * Deprecated - please use Create(Prism*, const DatePickerParams&);
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
      static Create(volume: Prism | null, label?: string, labelSide?: ui.Side, dateFormat?: string, defaultDate?: ui.Date, yearMin?: number /* int */, yearMax?: number /* int */): ui.UiDatePicker | null

      /**
       * Creates a UiDatePicker element using default settings.
       *
       * @param volume The volume to create the node for
       * @param datePickerParams Custom params set for this UiDatePicker
       *
       * @return The new UiDatePicker node.
       */
      static Create(volume: Prism | null, datePickerParams: ui.DatePickerParams): ui.UiDatePicker | null

      /**
       * The on Date changed Event.
       *
       * This event is dispatched whenever a dateComponent has been changed.
       */
      onDateChangedSub(callback: ((arg0: ui.UiEventData, arg1: string, arg2: ui.Date) => void) | null /* std::function<void(UiEventData,std::string,Date)> */): utils.CallbackID
      onDateChangedUnsub(callbackID: utils.CallbackID): boolean

      /**
       * The on Date confirmed Event.
       *
       * This event is dispatched when the user has activated a selected date.
       */
      onDateConfirmedSub(callback: ((arg0: ui.UiEventData, arg1: string, arg2: ui.Date) => void) | null /* std::function<void(UiEventData,std::string,Date)> */): utils.CallbackID
      onDateConfirmedUnsub(callbackID: utils.CallbackID): boolean

      /**
       * Gets the Date as a string in the specified format
       *
       * @return the Date string
       */
      getDateString(): string

      /**
       * Gets the chosen Date as an object.
       *
       * @return the Date object with values chosen from the DatePicker
       */
      getDate(): ui.Date

      /**
       * Sets the Date manually. This will only have an affect when
       * not currently focused.
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
      setColor(color: [number, number, number, number] | Float32Array /* glm::vec4 */): void

      /**
       * Gets the DatePicker component's color.
       *
       * @return the DatePicker's color.
       */
      getColor(): [number, number, number, number] /* glm::vec4 */

      /**
       * Gets the UiText label
       *
       * @return a pointer to the UiText label
       */
      getUiTextLabel(): ui.UiText | null

      /**
       * To show the selected Date eg. 01/01/2019 or the format hint eg. MM/DD/YYYY
       * This will only have an affect when not currently focused.
       *
       * The full hint is always displayed on creation. Each field will continue
       * to show the hint, ie MM or DD or YYYYY, until that field is focused.
       *
       * This can override that behavior and display the Date immediately if desired.
       * The full Date will be shown when the user confirms a selected Date.
       *
       * @param showHint True to show the hint, False for the Date
       */
      showDateFormatHint(showHint: boolean): void
    }
  }
}

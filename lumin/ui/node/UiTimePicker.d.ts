declare module 'lumin' {
  namespace ui {

    /** TimePicker parameters */
    class TimePickerParams {

      /**
       * The text label that appears with the TimePicker - Default ""
       */
      labelText: string;

      /**
       * The localization key for the element label.
       */
      l10nKey: string;

      /**
       * The optional localization parameters for the element label.
       */
      l10nParams: Object;

      /**
       * Side enum specifying which side the label appears on - Default kTop
       */
      labelSide: ui.Side;

      /**
       * TimeFormat enum specifying the display format - Default kAuto based on locale
       */
      timeFormat: ui.TimeFormat;

      /**
       * Default Time to initialize the TimePicker to - Default current time
       */
      defaultTime: ui.Time;

      /**
       * Delimiter between hh mm ss - Default to locale based delimiter
       */
      delimiter: number;
      constructor()
    };

    /**
     * UiTimePicker - This node represents a timepicker component.
     */
    class UiTimePicker extends UiNode {

      /**
       * Deprecated - please use Create(Prism*, const TimePickerParams&);
       * Creates an UiTimePicker element using default settings.
       *
       * @param volume The volume to create the node for.
       * @param [label=""] The text label that appears with the TimePicker.
       * @param [labelSide=Side.kTop] Boolean value specifying whether the label appears on the side or top.
       * @param [timeFormat="hh:mm:ss"] The format for the picker time - hh:mm:ss p, hh:mm p, hh:ss p, hh:mm:ss, hh:mm, hh:ss, mm:ss.
       *                   If the format contains a 'p' (period) the TimePicker will display hours as 1-12, otherwise hours will be displayed as 0-23.
       * @param [defaultTime=Time()] The default time to set for the TimePicker.
       *
       * @return The new UiTimePicker node.
       */
      static Create(volume: Prism, label: string = 0 /* 0 is not the actual default value */, labelSide: ui.Side = 0 /* 0 is not the actual default value */, timeFormat: string = 0 /* 0 is not the actual default value */, defaultTime: ui.Time = 0 /* 0 is not the actual default value */): ui.UiTimePicker

      /**
       * Creates a UiTimePicker element using default settings.
       *
       * @param volume The volume to create the node for
       * @param timePickerParams Custom params set for this UiTimePicker
       *
       * @return The new UiTimePicker node.
       */
      static Create(volume: Prism, timePickerParams: ui.TimePickerParams): ui.UiTimePicker

      /**
       * The on time changed Event.
       *
       * This event is dispatched whenever the time has been changed.
       */
      onTimeChangedSub(callback: callable): utils.CallbackID
      onTimeChangedUnsub(callbackID: utils.CallbackID): boolean

      /**
       * The on time confirmed Event.
       *
       * This event is dispatched when the user has activated a selected time.
       */
      onTimeConfirmedSub(callback: callable): utils.CallbackID
      onTimeConfirmedUnsub(callbackID: utils.CallbackID): boolean

      /**
       * Gets the Time as a string in the specified format
       *
       * @return the Time string
       */
      getTimeString(): string

      /**
       * Gets the time as a Time object
       *
       * @return the Time object with values chosen from the TimePicker
       */
      getTime(): ui.Time

      /**
       * Sets the Time manually. This will only have an affect when
       * not currently focused.
       *
       * @param newTime The Time to set, will ignore values that arent in the TimeFormat.
       * @return true if its a valid Time and it has been set.
       */
      setTime(newTime: ui.Time): boolean

      /**
       * Sets the TimePicker component's color, doesn't affect the label.
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
       * @return a pointer to the UiText label
       */
      getUiTextLabel(): ui.UiText

      /**
       * To show the selected Time eg. 12:30:00 or the format hint eg. hh:mm:ss
       * This will only have an affect when not currently focused.
       *
       * The full hint is always displayed on creation. Each field will continue
       * to show the hint, eg. hh or mm or ss, until that field is focused.
       *
       * This can override that behavior and display the Time immediately if desired.
       * The full Time will be shown when the user confirms a selected Time.
       *
       * @param showHint True to show the hint, False for the Time
       */
      showTimeFormatHint(showHint: boolean): void
    };
  }
}

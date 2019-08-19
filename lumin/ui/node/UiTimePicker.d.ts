declare module 'lumin' {
  namespace ui {
    class TimePickerParams {
      labelText: string;
      l10nKey: string;
      l10nParams: Object;
      labelSide: ui.Side;
      timeFormat: ui.TimeFormat;
      defaultTime: ui.Time;
      delimiter: number;
      constructor()
    };
    class UiTimePicker extends UiNode {
      static Create(volume: Prism, label: string = 0 /* 0 is not the actual default value */, labelSide: ui.Side = 0 /* 0 is not the actual default value */, timeFormat: string = 0 /* 0 is not the actual default value */, defaultTime: ui.Time = 0 /* 0 is not the actual default value */): ui.UiTimePicker
      static Create(volume: Prism, timePickerParams: ui.TimePickerParams): ui.UiTimePicker
      onTimeChangedSub(callback: callable): utils.CallbackID
      onTimeChangedUnsub(callbackID: utils.CallbackID): boolean
      onTimeConfirmedSub(callback: callable): utils.CallbackID
      onTimeConfirmedUnsub(callbackID: utils.CallbackID): boolean
      getTimeString(): string
      getTime(): ui.Time
      setTime(newTime: ui.Time): boolean
      setColor(color: [number, number, number, number] /* glm::vec4 */): void
      getColor(): [number, number, number, number] /* glm::vec4 */
      getUiTextLabel(): ui.UiText
      showTimeFormatHint(showHint: boolean): void
    };
  }
}

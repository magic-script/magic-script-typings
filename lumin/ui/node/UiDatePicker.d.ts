declare module 'lumin' {
  namespace ui {
    class UiDatePicker extends UiNode {
      static Create(volume: Prism, label: string = 0 /* 0 is not the actual default value */, labelSide: ui.Side = 0 /* 0 is not the actual default value */, dateFormat: string = 0 /* 0 is not the actual default value */, defaultDate: ui.Date = 0 /* 0 is not the actual default value */, yearMin: number = 0 /* 0 is not the actual default value */, yearMax: number = 0 /* 0 is not the actual default value */): ui.UiDatePicker
      onDateChangedSub(callback: callable): utils.CallbackID
      onDateChangedUnsub(callbackID: utils.CallbackID): boolean
      onDateConfirmedSub(callback: callable): utils.CallbackID
      onDateConfirmedUnsub(callbackID: utils.CallbackID): boolean
      getDateString(): string
      getDate(): ui.Date
      setDate(date: ui.Date): boolean
      setColor(color: [number, number, number, number] /* glm::vec4 */): void
      getColor(): [number, number, number, number] /* glm::vec4 */
      getUiTextLabel(): ui.UiText
    };
  }
}

declare module 'lumin' {
  class SelectionEventData extends ServerEvent {
    constructor() {}
    getSelectionEventType(): SelectionEventType
    getAffectedPrismId(): number
  };
}

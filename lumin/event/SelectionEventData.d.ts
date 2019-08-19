declare module 'lumin' {
  class SelectionEventData extends ServerEvent {
    constructor()
    getSelectionEventType(): SelectionEventType
    getAffectedPrismId(): BigInt /* uint64_t */
  };
}

declare module 'lumin' {
  class VideoTimedTextEventData extends ServerEvent {
    constructor()
    getNodeId(): BigInt /* uint64_t */
    getStartTime(): number
    getEndTime(): number
    getText(): string
  };
}

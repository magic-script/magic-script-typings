declare module 'lumin' {
  class VideoTimedTextEventData extends ServerEvent {
    constructor() {}
    getNodeId(): number
    getStartTime(): number
    getEndTime(): number
    getText(): string
  };
}

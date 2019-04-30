declare module 'lumin' {
  class VideoEventData extends ServerEvent {
    constructor() {}
    getVideoEventType(): VideoEventType
    getAffectedNodeId(): number
    getXPos(): number
    getYPos(): number
  };
}

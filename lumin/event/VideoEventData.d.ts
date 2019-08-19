declare module 'lumin' {
  class VideoEventData extends ServerEvent {
    constructor()
    getVideoEventType(): VideoEventType
    getAffectedNodeId(): BigInt /* uint64_t */
    getXPos(): number
    getYPos(): number
  };
}

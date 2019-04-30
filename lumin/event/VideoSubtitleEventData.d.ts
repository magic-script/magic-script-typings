declare module 'lumin' {
  class VideoSubtitleEventData extends ServerEvent {
    constructor() {}
    getNodeId(): number
    getTrack(): number
    getTime(): number
    getDuration(): number
    getSize(): number
    getBuffer(): Array<number> /* std::vector */
  };
}

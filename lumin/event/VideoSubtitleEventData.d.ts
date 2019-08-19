declare module 'lumin' {
  class VideoSubtitleEventData extends ServerEvent {
    constructor()
    getNodeId(): BigInt /* uint64_t */
    getTrack(): number
    getTime(): BigInt /* int64_t */
    getDuration(): BigInt /* int64_t */
    getSize(): number
    getBuffer(): Array<number> /* std::vector */
  };
}

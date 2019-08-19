declare module 'lumin' {
  class VideoDRMInfoEventData extends ServerEvent {
    constructor()
    getAffectedNodeId(): BigInt /* uint64_t */
    getMediaTrackType(): MediaTrackType
    getPssh(): Object
    getSupportedSchemes(): Array<Array<number> /* std::vector */> /* std::vector */
  };
}

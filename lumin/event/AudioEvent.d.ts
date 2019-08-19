declare module 'lumin' {
  class AudioEvent extends ServerEvent {
    constructor()
    getNodeId(): BigInt /* uint64_t */
    getAudioId(): BigInt /* uint64_t */
    getAudioEventType(): AudioEventType
  };
}

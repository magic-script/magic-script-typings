declare module 'lumin' {
  class AudioEvent extends ServerEvent {
    constructor() {}
    getNodeId(): number
    getAudioId(): number
    getAudioEventType(): AudioEventType
  };
}

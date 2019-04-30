declare module 'lumin' {
  class TransformAnimationEventData extends ServerEvent {
    constructor() {}
    getAnimatedNodeId(): number
    getTrack(): number
  };
}

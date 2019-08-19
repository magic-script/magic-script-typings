declare module 'lumin' {
  class TransformAnimationEventData extends ServerEvent {
    constructor()
    getAnimatedNodeId(): BigInt /* uint64_t */
    getTrack(): number
  };
}

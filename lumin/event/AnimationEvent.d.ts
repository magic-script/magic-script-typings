declare module 'lumin' {
  class AnimationEventBase extends ServerEvent {
    constructor()
    getNodeId(): BigInt /* uint64_t */
    getAnimationResourceId(): BigInt /* uint64_t */
    getAnimationName(): string
  };
  class AnimationEvent extends AnimationEventBase {
    constructor()
    getAnimationEventType(): AnimationEventType
  };
  class AnimationEventCustom extends AnimationEventBase {
    constructor()
    getTimeValue(): number
    getParameters(): string
    getTypeString(): string
  };
}

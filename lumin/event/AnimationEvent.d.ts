declare module 'lumin' {
  class AnimationEventBase extends ServerEvent {
    constructor() {}
    getNodeId(): number
    getAnimationResourceId(): number
    getAnimationName(): string
  };
  class AnimationEvent extends AnimationEventBase {
    constructor() {}
    getAnimationEventType(): AnimationEventType
  };
  class AnimationEventCustom extends AnimationEventBase {
    constructor() {}
    getTimeValue(): number
    getParameters(): string
    getTypeString(): string
  };
}

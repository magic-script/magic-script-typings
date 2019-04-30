declare module 'lumin' {
  class AnimationBlendSetupEvent extends ServerEvent {
    constructor() {}
    getNodeId(): number
    getBlendSetupResourceId(): number
    getStateName(): string
    getBlendSetupEventType(): AnimationBlendSetupEventType
  };
}

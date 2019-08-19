declare module 'lumin' {
  class AnimationBlendSetupEvent extends ServerEvent {
    constructor()
    getNodeId(): BigInt /* uint64_t */
    getBlendSetupResourceId(): BigInt /* uint64_t */
    getStateName(): string
    getBlendSetupEventType(): AnimationBlendSetupEventType
  };
}

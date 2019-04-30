declare module 'lumin' {
  class SpriteAnimationEventData extends ServerEvent {
    constructor() {}
    getSpriteAnimationEventType(): SpriteAnimationEventType
    getCurrentFrameIndex(): number
  };
}

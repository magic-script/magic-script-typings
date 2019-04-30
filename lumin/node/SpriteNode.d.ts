declare module 'lumin' {
  enum SpriteEvent {
    kNone,
    kStarted,
    kResumed,
    kPaused,
    kStopped,
    kNextFrame,
    kLooped,
  }
  class SpriteNode extends RenderNode {
    setResource(a_spriteRes: TexturePackResource): void
    getPlaybackOrder(): animation.PlaybackOrder
    setPlaybackOrder(playbackOrder: animation.PlaybackOrder): void
    getSpeedFactor(): number
    setSpeedFactor(a_factor: number): void
    getFrameDuration(): number
    setFrameDuration(a_factor: number): void
    getRepeatCount(): number
    setRepeatCount(a_repeatCount: number): void
    setRepeatForever(): void
    start(): void
    stop(): void
    resume(): void
    pauseFor(a_pauseTimeInS: number): void
    pause(): void
    isPaused(): boolean
    isPlaying(): boolean
    getCurrentFrame(): number
    setCurrentFrame(a_frame: number): boolean
    getFrameCount(): number
  };
}

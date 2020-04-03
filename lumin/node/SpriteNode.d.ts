declare module 'lumin' {

  /** flags that indicate an event has occurred in the sprite player. */
  enum SpriteEvent {
    kNone,
    kStarted,
    kResumed,
    kPaused,
    kStopped,
    kNextFrame,
    kLooped,
  }

  /**
   * Node used to play a sprite animation from a TexturePackResource.
   */
  class SpriteNode extends RenderNode {

    /**
     * Set the TexturePackResource, which is to be used for the texture sequence that the node will play.
     *
     * @priv none
     */
    setResource(a_spriteRes: TexturePackResource | null): void

    /**
     * Accessor function to retrieve the current PlaybackOrder.
     *
     * @priv none
     */
    getPlaybackOrder(): animation.PlaybackOrder

    /**
     * Set whether to play the frames forward or in reverse.
     *
     * @priv none
     */
    setPlaybackOrder(playbackOrder: animation.PlaybackOrder): void

    /**
     * Get the speed factor, (how fast a frame is played); default is 1.0.  Only positive values.
     *
     * @priv none
     */
    getSpeedFactor(): number /* float */

    /**
     * Set the speed factor; by default, this is 1.0.  Only positive values will be accepted.
     *
     * @priv none
     */
    setSpeedFactor(a_factor: number /* float */): void

    /**
     * Retrieve the duration of an individual frame.
     *
     * @priv none
     */
    getFrameDuration(): number /* float */

    /**
     * Set the duration of an individual frame.
     *
     * @priv none
     */
    setFrameDuration(a_factor: number /* float */): void

    /**
     * Retrieve the number of iterations remaining.
     *
     * @priv none
     */
    getRepeatCount(): number /* uint32_t */

    /**
     * Set number of times to repeat playing the Sequence.
     *
     * @priv none
     */
    setRepeatCount(a_repeatCount: number /* uint32_t */): void

    /**
     * @priv none
     */
    setRepeatForever(): void

    /**
     * @priv none
     */
    start(): void

    /**
     * @priv none
     */
    stop(): void

    /**
     * @priv none
     */
    resume(): void

    /**
     * Set the number of seconds to pause playback.
     *
     * @priv none
     */
    pauseFor(a_pauseTimeInS: number /* float */): void

    /**
     * @priv none
     */
    pause(): void

    /**
     * Helper function to check if the node is in a paused state.
     *
     * @priv none
     */
    isPaused(): boolean

    /**
     * Helper function to check if the node is in a playing state.
     *
     * @priv none
     */
    isPlaying(): boolean

    /**
     * Retrieve the current frame the sprite is currently set to.
     *
     * @priv none
     */
    getCurrentFrame(): number /* uint32_t */

    /**
     * Set the current frame the sprite is displaying. Cannot be used while animating.
     *
     * @param a_frame an integer specifying the the new frame index.
     * @return True if the frame was changed, otherwise false.
     *
     * @priv none
     */
    setCurrentFrame(a_frame: number /* uint32_t */): boolean

    /**
     * Retrieve the total number of frames in the sprites.
     *
     * @priv none
     */
    getFrameCount(): number /* uint32_t */
  }
}

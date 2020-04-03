declare module 'lumin' {

  /**
   * A Node that represents a simple 2-d rectangle that video resources can be played on.
   */
  class VideoNode extends QuadNode {
    constructor()

    /**
     * Returns the ID for the resource that the video will be displayed on.
     *
     * @return the resource that the video will be displayed on or INVALID_RESOURCE_ID if not set
     *
     * @priv none
     */
    getPlanarResourceId(): bigint /* uint64_t */

    /**
     * Sets the file to Play.
     *
     * Preparation for playback begins asynchronously after this function is called.
     * The VideoNode is not ready to actually play (via VideoNode::start) until a
     * VideoEvent of type VideoEventType::kPrepared is received.
     *
     * @param a_sFile - file name of video to play
     * @return NO_ERROR if successful, error code otherwise
     *
     * @priv none
     */
    setVideoPath(a_sFile: string): number /* int32_t */

    /**
     * Sets the file Uri to Play.
     *
     * Preparation for playback begins asynchronously after this function is called.
     * The VideoNode is not ready to actually play (via VideoNode::start) until a
     * VideoEvent of type VideoEventType::kPrepared is received.
     *
     * @param a_sUri - URI of video to play
     * @return NO_ERROR if successful, error code otherwise
     *
     * @priv none
     */
    setVideoUri(a_sUri: string): number /* int32_t */

    /**
     * Sets the timed text file.
     *
     * @param a_tFile - file name of Timed Text to play
     * @return NO_ERROR if successful, error code otherwise
     *
     * @priv none
     */
    setTimedTextPath(a_tFile: string): number /* int32_t */

    /**
     * Seeks to the specified time position.
     *
     * @param msec - the offset in milliseconds from the start to seek to
     * @return NO_ERROR if successful, error code otherwise
     *
     * @priv none
     */
    seekTo(msec: number /* int */): number /* int32_t */

    /**
     * This function is now a no-op and there is no need to call it.
     *
     * The node is automatically prepared for playback when content is chosen
     * via setVideoPath or setVideoUri.
     *
     * @return NO_ERROR unconditionally
     * @priv none
     *
     * @deprecated Preparing the node for playback is done automatically when the
     *             content to play is selected (via setVideoPath or setVideoUri)
     */
    prepareAsync(): number /* int32_t */

    /**
     * Starts or resumes playback.
     *
     * @return NO_ERROR if successful, error code otherwise
     *
     * @priv none
     */
    start(): number /* int32_t */

    /**
     * Stops playback after playback has been stopped or paused.
     *
     * @return NO_ERROR if successful, error code otherwise
     *
     * @priv none
     */
    stop(): number /* int32_t */

    /**
     * Resets the node to its uninitialized state.
     *
     * @return NO_ERROR if successful, error code otherwise
     *
     * @priv none
     */
    reset(): number /* int32_t */

    /**
     * Pauses playback.
     *
     * @return NO_ERROR if successful, error code otherwise
     *
     * @priv none
     */
    pause(): number /* int32_t */

    /**
     * Sets the looping mode of the player.
     *
     * @param loop - The looping mode. True if the node should loop to beginning when EOS reached.
     *        False if the node should simply stop playback at end of media.
     * @return NO_ERROR if successful, error code otherwise.
     *
     * @priv none
     */
    setLooping(loop: boolean): number /* int32_t */

    /**
     * Checks whether the node is looping or non-looping.
     *
     * @return true if the node is currently looping, false otherwise
     *
     * @priv none
     */
    isLooping(): boolean

    /**
     * Sets the volume of the node.
     *
     * @param volume - The new volume in the [0.0, 1.0] range
     * @return NO_ERROR if successful, error code otherwise
     *
     * @priv none
     */
    setVolume(volume: number /* float */): number /* int32_t */

    /**
     * Checks whether the MediaPlayer is playing.
     *
     * @return true if currently playing, false otherwise
     *
     * @priv none
     */
    isPlaying(): boolean

    /**
     * Protected/Copyrighted content, do not share with other clients
     *
     * @param value true if protected
     */
    setProtectedContent(value: boolean): void

    /**
     * Check if content is protected
     *
     * @return true if protected
     */
    isProtectedContent(): boolean
  }
}

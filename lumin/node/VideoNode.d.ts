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
    setVideoPath(a_sFile: string): number

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
    setVideoUri(a_sUri: string): number

    /**
     * Sets the timed text file.
     *
     * @param a_tFile - file name of Timed Text to play
     * @return NO_ERROR if successful, error code otherwise
     *
     * @priv none
     */
    setTimedTextPath(a_tFile: string): number

    /**
     * Seeks to the specified time position.
     *
     * @param msec - the offset in milliseconds from the start to seek to
     * @return NO_ERROR if successful, error code otherwise
     *
     * @priv none
     */
    seekTo(msec: number): number

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
    prepareAsync(): number

    /**
     * Starts or resumes playback.
     *
     * @return NO_ERROR if successful, error code otherwise
     *
     * @priv none
     */
    start(): number

    /**
     * Stops playback after playback has been stopped or paused.
     *
     * @return NO_ERROR if successful, error code otherwise
     *
     * @priv none
     */
    stop(): number

    /**
     * Resets the node to its uninitialized state.
     *
     * @return NO_ERROR if successful, error code otherwise
     *
     * @priv none
     */
    reset(): number

    /**
     * Pauses playback.
     *
     * @return NO_ERROR if successful, error code otherwise
     *
     * @priv none
     */
    pause(): number

    /**
     * Sets the looping mode of the player.
     *
     * @param loop - The looping mode. True if the node should loop to beginning when EOS reached.
     *        False if the node should simply stop playback at end of media.
     * @return NO_ERROR if successful, error code otherwise.
     *
     * @priv none
     */
    setLooping(loop: number): number

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
    setVolume(volume: number): number

    /**
     * Checks whether the MediaPlayer is playing.
     *
     * @return true if currently playing, false otherwise
     *
     * @priv none
     */
    isPlaying(): boolean

    /**
     * @brief Selects a given track
     *
     * @param index of the track to select
     * @return Returns INVALID_OPERATION if media player has not been initialized
     * @return Returns XXX if the track is not valid; NO_ERROR otherwise
     * @priv none
     */
    selectTrack(index: number): number

    /**
     * @brief unSelects a given track
     *
     * @param index of the track to unselect
     * @return Returns INVALID_OPERATION if media player has not been initialized
     * @return Returns XXX if the track is not valid; NO_ERROR otherwise
     * @priv none
     */
    unSelectTrack(index: number): number
  }
}

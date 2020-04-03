declare module 'lumin' {

  /**
   * EyeTrackingEventData - Eye tracking update events
   */
  class EyeTrackingEventData extends ServerEvent {
    constructor()

    /**
     * Get the position of the user's left eye in world space
     *
     * @return the world space position of the user's left eye
     * @priv none
     */
    getEyeTrackingLeftEyePosition(): [number, number, number] /* glm::vec3 */

    /**
     * Get the rotation of the user's left eye in world space
     *
     * @return the world space rotation of the user's left eye
     * @priv none
     */
    getEyeTrackingLeftEyeRotation(): [number, number, number, number] /* glm::quat */

    /**
     * Get the confidence value of the left eye tracking data
     *
     * @return a confidence value between 0.0f (no confidence) and
     *         1.0f (full confidence) indicating eye tracking
     *         data confidence for the left eye this frame.
     * @priv none
     */
    getEyeTrackingLeftEyeConfidence(): number /* float */

    /**
     * Get the blink state of the left eye
     *
     * @return true if the left eye is blinking, false otherwise
     * @priv none
     */
    getEyeTrackingLeftEyeBlinkState(): boolean

    /**
     * Get the position of the user's right eye in world space
     *
     * @return the world space position of the user's right eye
     * @priv none
     */
    getEyeTrackingRightEyePosition(): [number, number, number] /* glm::vec3 */

    /**
     * Get the position of the user's left eye in world space
     *
     * @return the world space position of the user's left eye
     * @priv none
     */
    getEyeTrackingRightEyeRotation(): [number, number, number, number] /* glm::quat */

    /**
     * Get the confidence value of the right eye tracking data
     *
     * @return a confidence value between 0.0f (no confidence) and
     *         1.0f (full confidence) indicating eye tracking
     *         data confidence for the right eye this frame.
     * @priv none
     */
    getEyeTrackingRightEyeConfidence(): number /* float */

    /**
     * Get the blink state of the right eye
     *
     * @return true if the right eye is blinking, false otherwise
     * @priv none
     */
    getEyeTrackingRightEyeBlinkState(): boolean

    /**
     * Get the position of the fixation point of the user's eyes in world space
     *
     * @return the world space position of the fixation point of the user's eyes
     * @priv none
     */
    getEyeTrackingFixationPosition(): [number, number, number] /* glm::vec3 */

    /**
     * Get the confidence value of the fixation tracking data
     *
     * @return a confidence value between 0.0f (no confidence) and
     *         1.0f (full confidence) indicating eye tracking
     *         data confidence for the eye fixation point this frame.
     * @priv none
     */
    getEyeTrackingFixationConfidence(): number /* float */

    /**
     * Get whether the current fixation depth is uncomfortable for the user (< 37cm)
     *
     * @return true if the fixation depth is uncomfortable, false otherwise
     * @priv none
     */
    isFixationDepthUnconfortable(): boolean

    /**
     * Get whether a fixation violation has occured (fixation depth has been too close
     * for longer than 10 seconds)
     *
     * @return true if a violation has occured, false otherwise
     * @priv none
     */
    hasFixationViolationOccured(): boolean

    /**
     * Get the remaining time the fixation point can remain at an uncomfortable depth
     *
     * @return the time remaining at the uncomfortable depth (in seconds)
     * @priv none
     */
    remainingTimeAtUncomfortableDepth(): number /* float */
  }
}

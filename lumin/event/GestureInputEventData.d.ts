declare module 'lumin' {

  /**
   * GestureInputEventData - Gesture input event
   */
  class GestureInputEventData extends InputEventData {
    constructor()

    /**
     * @return The gesture type
     *
     * @priv none
     */
    getGesture(): input.GestureType

    /**
     * @return The hand gesture index
     *
     * @priv none
     */
    getHandGestureIndex(): number /* uint32_t */

    /**
     * @return The hand gesture location in world coordinates.
     *
     * @priv none
     */
    getHandGestureLocation(): [number, number, number] /* glm::vec3 */

    /**
     * @return the number of hand gesture key points available for this gesture
     *
     * @priv none
     */
    getHandGestureKeyPointCount(): number /* uint32_t */

    /**
     * Get the position of the hand gesture key point with the given index
     *
     * @param keypointName the keypoint for which to get the position
     * @return vector containing positions of keypoint
     */
    getHandGestureKeypoint(keypointName: input.HandGestureKeypointName): [number, number, number] /* glm::vec3 */

    /**
     * Get the confidence that a hand is recognized.
     *
     * @priv none
     */
    getHandConfidence(): number /* float */

    /**
     * Get the confidence of a given hand pose
     * @param gesture the hand pose for which to retreive the confidence
     * @return a confidence value between 0 and 1 (higher means greater confidence)
     */
    getGestureKeyPoseConfidence(gesture: input.GestureType): number /* float */

    /**
     * Get the confidence that a hand is recognized.
     * @deprecated use getHandConfidence instead.
     *
     * @priv none
     */
    getHandGestureConfidence(): number /* float */

    /**
     * Get the confidence of a given hand pose
     * @param gesture the hand pose for which to retreive the confidence
     * @return a confidence value between 0 and 1 (higher means greater confidence)
     * @deprecated use getGestureKeyPoseConfidence instead.
     *
     * @priv none
     */
    getHandGestureKeyPoseConfidence(gesture: input.GestureType): number /* float */

    /**
     * Checks whether a given keypoint was recognized this event
     * @param keypointName the keypoint to test
     * @return true if the point was recognized, false otherwise
     */
    isHandGestureKeypointRecognized(keypointName: input.HandGestureKeypointName): boolean

    /**
     * @return The gesture direction
     *
     * @priv none
     */
    getGestureDirection(): input.GestureDirection

    /**
     * @return The gesture speed
     *
     * @priv none
     */
    getGestureSpeed(): number /* float */

    /**
     * @return The absolute value of the angular value in case of radial gestures
     *
     * @priv none
     */
    getGestureDistance(): number /* float */

    /**
     * @return Distance between 2 fingers
     *
     * @priv none
     */
    getGestureFingerGap(): number /* float */

    /**
     * @return Radius of the gesture in case of Radial gestures
     *
     * @priv none
     */
    getGestureRadius(): number /* float */

    /**
     * @return Angle from center of touchpad to finger
     *
     * @priv none
     */
    getGestureAngle(): number /* float */

    /**
     * @return Location of the gesture in normalized touch coordinates (-1.0 to 1.0).
     * @see getTouch()
     * @priv none
     */
    getGestureLocation(): [number, number] /* glm::vec2 */

    /**
     * @return The force/pressure value for the gesture (0.0 to 1.0)
     * @see getTouch()
     * @priv none
     */
    getGestureForceValue(): number /* float */

    /**
     * Get touch xy coordinates and z force
     *
     * The coordinate ranges are:
     * <ul>
     *   <li>x: -1.0 to 1.0 (left to right)</li>
     *   <li>y: -1.0 to 1.0 (bottom to top)</li>
     *   <li>z:  0.0 to 1.0 (no touch to full force)</li>
     * </ul>
     *
     * The center of the touchpad corresponds to xy coordinate (0, 0).
     *
     * @param tidx `default = 0`<br/> touch index
     * @return vector containing xy coordinates and force of the touch
     *         at the given touch index
     *
     * @priv none
     */
    getTouch(tidx?: number /* uint8_t */): [number, number, number] /* glm::vec3 */

    /**
     * @return the current touch count
     *
     * @priv none
     */
    getTouchCount(): number /* uint32_t */

    /**
     * Get current state of the touch
     *
     * @return true if the touch is active
     *
     * @priv none
     */
    getTouchState(): boolean

    /**
     * Get whether the touch is a single or multi touch
     *
     * @return true if the touch is a multi touch
     *
     * @priv none
     */
    isMultiTouch(): boolean
  }
}

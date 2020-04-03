declare module 'lumin' {

  /**
   * The input event received for Control or Magic Leap Mobile App touchpad input.
   */
  class ControlTouchPadInputEventData extends InputEventData {
    constructor()

    /**
     * Returns touch xy coordinates and z force.
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
     * Returns the current touch count.
     *
     * @return the current touch count
     *
     * @priv none
     */
    getTouchCount(): number /* uint32_t */

    /**
     * Returns current state of the touch
     *
     * @return true if the touch is active
     *
     * @priv none
     */
    getTouchState(): boolean

    /**
     * Returns whether the touch is a single or multi touch.
     *
     * @return true if the touch is a multi touch
     *
     * @priv none
     */
    isMultiTouch(): boolean
  }
}

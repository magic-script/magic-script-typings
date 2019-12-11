declare module 'lumin' {

  /**
   * NamedInputEventData - Named input event
   */
  class NamedInputEventData extends ServerEvent {
    constructor()

    /**
     * @return Hash of action's name
     *
     * @priv none
     */
    getActionNameHash(): number /* std::size_t */

    /**
     * @return Action's world location
     *
     * @priv none
     */
    getActionLocation(): [number, number, number] /* glm::vec3 */

    /**
     * @return Action's world orientation
     *
     * @priv none
     */
    getActionOrientation(): [number, number, number, number] /* glm::quat */
  }
}

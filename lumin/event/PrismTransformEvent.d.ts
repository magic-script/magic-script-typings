declare module 'lumin' {

  /**
   * PrismTransformEvent - Message that the prism transform has changed.
   */
  class PrismTransformEvent extends ServerEvent {
    constructor()

    /**
     * Returns transform that was applied to the prism.
     *
     * @priv none
     */
    getTransform(): [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] /* glm::mat4 */
  }
}

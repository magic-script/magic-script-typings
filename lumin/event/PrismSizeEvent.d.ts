declare module 'lumin' {

  /**
   * PrismSizeEvent - Message that the prism size has changed.
   */
  class PrismSizeEvent extends ServerEvent {
    constructor()

    /**
     * Returns size that was applied to the prism.
     *
     * @priv none
     */
    getSize(): [number, number, number] /* glm::vec3 */
  }
}

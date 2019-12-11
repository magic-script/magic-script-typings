declare module 'lumin' {
  class PlanarResource extends Resource {
    constructor()

    /**
     * Refresh the resource
     */
    refresh(): void

    /**
     * Get the height of the resource
     *
     * @return height.
     */
    getHeight(): number /* uint32_t */

    /**
     * Get the width of the resource
     *
     * @return the width
     */
    getWidth(): number /* uint32_t */
  }
}

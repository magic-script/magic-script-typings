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

    /**
     * Returns the EGL Context associated with this resource.
     *
     * NOTE: This is only available after initPlanarGLContext has been called
     *       (this note applies only to internal applications since that method
     *       will be called automatically when a planar resource is created by
     *       3rd party apps using the createPlanarEGLResource function)
     */
    getEGLContext(): void | null /* void* */

    /**
     * Returns the EGL Surface associated with this resource.
     *
     * NOTE: This is only available after initPlanarGLContext has been called
     *       (this note applies only to internal applications since that method
     *       will be called automatically when a planar resource is created by
     *       3rd party apps using the createPlanarEGLResource function)
     */
    getEGLSurface(): void | null /* void* */
  }
}

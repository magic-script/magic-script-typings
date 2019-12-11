declare module 'lumin' {

  /**
   * Data required to initialize a Image3d, in order to customize its behavior.
   */
  class Desc3d {

    /**
     * `value = Desc3d()`
     */
    static readonly DEFAULT: Desc3d;

    /** Specify if mipmapping is enabled or disabled */
    allowMipmaps: boolean;

    /** if 0 and mipmaps are allowed, full mipmap is used, else the num. Defaults to 0 */
    numMipmaps: number /* int8_t */;

    /** Parameters for how rendered 3d textures will appear */
    params: utils.Params3d;

    /**
     * Creates an empty Desc3d object.
     */
    constructor()

    /**
     * Compares this object with other Desc3d reference for equality.
     *
     * @param rhs the other Desc3d object
     * @return true if the object being compared with is the same
     */
    equals(rhs: Desc3d): boolean
  }

  /**
   * Texture-3D Resource - Holds and renders a preloaded Image-3D data
   * Pre-loaded and Decoded Image-3D data is required in order to render this resource
   */
  class Texture3dResource extends Resource {
    constructor()

    /**
     * Get the description of this Texture-3D resource.
     * @return Texture-3D description.
     */
    getTextureDesc(): Desc3d

    /**
     * Gets the pixel format used for this Texture-3D resource.
     * @return pixel format of this resource if initialized, otherwise Format::INVALID.
     */
    getFormat(): utils.Format

    /**
     * Gets the width of this Texture-3D resource.
     * @return width of this resource.
     */
    getWidth(): number /* uint32_t */

    /**
     * Gets the height of this Texture-3D resource.
     * @return height of this resource.
     */
    getHeight(): number /* uint32_t */

    /**
     * Gets the depth of this Texture-3D resource.
     * @return depth of this resource.
     */
    getDepth(): number /* uint32_t */
  }
}

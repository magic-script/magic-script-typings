declare module 'lumin' {

  /**
   * Optional data with which to initialize a TextureResource, which is a 2D texture, in order to customize its behavior.
   */
  class Desc2d {

    /**
     * `value = Desc2d()`
     */
    static readonly DEFAULT: Desc2d;

    /**
     * Upscale images that have fewer than 3 bytes per channel to RGB.
     */
    upscaleToRGB: boolean;

    /**
     * Specify if mipmapping is enabled or disabled
     */
    allowMipmaps: boolean;

    /**
     * if 0 and mipmaps are allowed, full mipmap is used, else the numMipmaps. Defaults to 0
     */
    numMipmaps: number /* int8_t */;
    params: utils.Params2d;
    constructor()
  }

  /**
   * Texture Resource - Loads and Holds a Texture resource
   */
  class TextureResource extends FileResource {
    constructor()

    /** Get the descriptor used to initialize this. */
    getTextureDesc(): Desc2d

    /** Get the shader to use for rendering this resource as an unlit, textured mesh. */
    getUnlitTex2dShader(): utils.ShaderType

    /** Get the width of this texture resource. */
    getWidth(): number /* uint32_t */

    /** Get the height of this texture resource. */
    getHeight(): number /* uint32_t */

    /** Get the format of this texture resource. */
    getFormat(): utils.Format
  }
}

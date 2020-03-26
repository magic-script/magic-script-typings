declare module 'lumin' {
  namespace utils {
  }

  /**
   * A 2D font is a font rendered onto a planar image (whatever the format),
   * as opposed to a 3D model of the glyphs or other graphical representation.
   *
   * Note, for this implementation, the loadGlyphs() and unloadGlyphs()
   * functions will only work if called on the render thread by the process
   * with the OpenGL context.  These two methods are also not needed by Lumin
   * clients, which can create font resources within their prisms; see
   * Prism::createFont2dResource.
   */
  class Font2dResource extends FontResource {
    constructor()

    /**
     * @priv none
     */
    setFont2dDesc(fontDesc: glyph.Font2dDesc): void

    /**
     * Get the size of the tiles for the glyphs managed by this resource.
     *
     * @priv none
     */
    getTileSize(): number /* short */

    /**
     * Get the glyph quality of the font resource specified in the
     * Font2dDesc when the font resource was created.
     *
     * @priv none
     */
    getGlyphQuality(): glyph.Quality

    /**
     * Get the minimum value of text fragments to render; see Font2dDesc.
     *
     * @priv none
     */
    getMinAlphaToDiscard(): number /* float */

    /**
     * Get the information for rendering a particular character.
     *
     * @param character Glyph identifier
     * @return Information about the glyph representing the given character,
     *   which will equal NONE if no such character has been loaded.
     *
     * @priv none
     */
    getTileInfo(character: number /* char32_t */): glyph.TileInfo

    /**
     * Get the type of shader to use for rendering this resource.
     *
     * @return kMAX only if an error occurred; shader type otherwise.
     *
     * @priv none
     */
    getShaderType(): utils.ShaderType

    /**
     * After the server has loaded the font resource, this will
     * return the dimensions of the texture with the given ID.
     *
     * @return the (height, width, depth) of the texture with the given ID,
     *   or else (0, 0, 0) if the textureID equals 0 or is not known.
     *
     * @priv none
     */
    getTextureDims(textureId: number /* unsigned int */): [number, number, number] /* glm::ivec3 */

    /**
     * Get the IDs of all 2D texture arrays containing the glyphs of the font.
     *
     * @priv none
     */
    getTexture2dArrayIds(): Array<number> /* std::vector<unsigned int> */
  }
}

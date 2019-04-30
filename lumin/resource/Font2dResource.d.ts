declare module 'lumin' {
  namespace utils {
  }
  class Font2dResource extends FontResource {
    constructor() {}
    setFont2dDesc(fontDesc: glyph.Font2dDesc): void
    getTileSize(): number
    getGlyphQuality(): glyph.Quality
    getMinAlphaToDiscard(): number
    getTileInfo(character: number): glyph.TileInfo
    getShaderType(): utils.ShaderType
    getTextureDims(textureId: number): [number, number, number] /* glm::ivec3 */
    getTexture2dArrayIds(): Array<number> /* std::vector */
  };
}

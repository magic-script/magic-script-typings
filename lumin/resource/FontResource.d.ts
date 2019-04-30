declare module 'lumin' {
  class FontResource extends FileResource {
    constructor() {}
    getFontName(): string
    getFontStyle(): string
    getFontSize(): number
    getLoadedGlyphs(): Array<number> /* std::vector */
    getAdvanceDirection(): glyph.AdvanceDirection
    getFlowDirection(): text.FlowDirection
    getLineSpacing(): number
    getAscender(): number
    getDescender(): number
    getGlyphHeight(): number
  };
}

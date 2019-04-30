declare module 'lumin' {
  class Text2dNode extends RenderNode {
    setText(asciiText: string): void
    setUtf8Text(utf8Text: string): void
    getUtf8Text(): string
    getWorldBounds(): [[number, number, number] /* glm::vec3 */, [number, number, number] /* glm::vec3 */] /* std::pair */
    getPrismBounds(): [[number, number, number] /* glm::vec3 */, [number, number, number] /* glm::vec3 */] /* std::pair */
    setFont(fontResourceId: number): void
    setFont(fontResource: Font2dResource): void
    setProperties(desc: Text2dDesc): void
    setAdvanceDirection(direction: glyph.AdvanceDirection): void
    getAdvanceDirection(): glyph.AdvanceDirection
    setFlowDirection(flowDir: text.FlowDirection): void
    getFlowDirection(): text.FlowDirection
    getTabWidth(): number
    setTabWidth(width: number): void
    getGlyphHeight(): number
    setGlyphHeight(height: number): void
    getLineSpacing(): number
    setLineSpacing(spacing: number): void
    setCharacterSpacing(spacing: number): void
    getCharacterSpacing(): number
    getMaxGlyphsPerLine(): number
    setMaxGlyphsPerLine(max: number): void
    getJustification(): text.Justification
    setJustification(justification: text.Justification): void
    setFixedBounds(pData: text.FixedBoundsData = 0 /* 0 is not the actual default value */): void
    getFixedBounds(): text.FixedBoundsData
    getFontResource(): Font2dResource
    getText(): string
    setText(unicodeText: string): void
    setEditMode(editFlag: boolean): void
    getEditMode(): boolean
    getCursorPositions(): Array<[number, number] /* glm::vec2 */> /* std::vector */
  };
}

declare module 'lumin' {
  class QuadNode extends RenderNode {
    setViewMode(mode: ViewMode): void
    getViewMode(): ViewMode
    setRenderResource(id: number): void
    setSubTexture(subTextureName: string): void
    setSubTexture(subTextureIndex: number): void
    getTexCoords(): Array<[number, number] /* glm::vec2 */> /* std::vector */
    setTexCoords(texCoords: Array<[number, number] /* glm::vec2 */> /* std::vector */): void
    getVertices(): Array<[number, number, number] /* glm::vec3 */> /* std::vector */
    setSize(size: [number, number] /* glm::vec2 */): void
    getSize(): [number, number] /* glm::vec2 */
    getRenderResource(): Resource
    getShaderType(): utils.ShaderType
    setLodBias(a_lodBias: number): void
  };
}

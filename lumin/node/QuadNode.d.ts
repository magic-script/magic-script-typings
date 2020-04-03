declare module 'lumin' {

  /**
   * A Node that represents a simple 2-d rectangle that can be drawn on.
   */
  class QuadNode extends RenderNode {

    /**
     * Set the current ViewMode to the given value.
     *
     * @param mode View mode
     * @priv none
     */
    setViewMode(mode: ViewMode): void

    /**
     * Get the current ViewMode value.
     *
     * @priv none
     */
    getViewMode(): ViewMode

    /**
     * Sets the resource to be used when drawing the QuadNode.
     *
     * @param id The resource id.
     *
     * @priv none
     */
    setRenderResource(id: bigint /* uint64_t */): void

    /**
     * Set's the SubTexture to render.
     * When a TexturePackResource is assigned to the QuadNode as the render resource
     * this function lets the user set which sub texture of the TexturePack
     * should be used when rendering, otherwise this function will have no effect.
     *
     * @param subTextureName Name of the sub-texture.
     *
     * @priv none
     */
    setSubTexture(subTextureName: string): void

    /**
     * Set's the SubTexture to render.
     * When a TexturePackResource is assigned to the QuadNode as the render resource
     * this function lets the user set which sub texture of the TexturePack
     * should be used when rendering, otherwise this function will have no effect.
     *
     * @param subTextureIndex Index of the sub-texture.
     *
     * @priv none
     */
    setSubTexture(subTextureIndex: number /* int32_t */): void

    /**
     * Returns the texture coordinates used by the QuadNode.
     *
     * @return The coordinates.
     *
     * @priv none
     */
    getTexCoords(): Array<[number, number]> /* std::vector<glm::vec2> */

    /**
     * Set the texture coordinates of the node being rendered, if the
     * resource is a texture.  If the type of the render resource
     * is not a texture, this will have no effect.
     *
     * @param texCoords The coordinates.
     *
     * @priv none
     */
    setTexCoords(texCoords: Array<[number, number] | Float32Array> /* std::vector<glm::vec2> */): void

    /**
     * Get the vertices that define the quad geometry.
     *
     * @priv none
     */
    getVertices(): Array<[number, number, number]> /* std::vector<glm::vec3> */

    /**
     * Set the custom size, which is by default one: { 1, 1 }.
     *
     * @param size for the width and height of the quadnode.
     *
     * @priv none
     */
    setSize(size: [number, number] | Float32Array /* glm::vec2 */): void

    /**
     * Get the custom size, which is by default one: { 1, 1 }.
     *
     * @return The size.
     *
     * @priv none
     */
    getSize(): [number, number] /* glm::vec2 */

    /**
     * Returns the underlying Resource
     *
     * @return Resource The underlying resource, can be a nullptr
     *
     * @priv none
     */
    getRenderResource(): Resource | null

    /**
     * Get the type of the shader that will be applied to the QuadNode.
     *
     * This depends on the render resource; see setRenderResource().
     *
     * @priv none
     */
    getShaderType(): utils.ShaderType

    /**
     * Sets the LOD Bias for the this QuadNode
     * Which forces and overwrites the lod on the one of
     * Used to modify the lod selection during runtime
     * NOTE: This only works with SurfaceQueueResource
     *
     * @param a_lodBias float value for lodBias. Default is 0. When 0, Resource LODBias will be used
     */
    setLodBias(a_lodBias: number /* float */): void
  }
}

declare module 'lumin' {

  /**
   * A Node that represents a simple 2-d rectangle that can be drawn on using a Texture3dResource.
   */
  class Quad3dNode extends RenderNode {
    getLocalAABB(): math.AABB

    /**
     * Sets the resource to be used when drawing the Quad3dNode.
     * The id should refer to a Texture3dResource.
     *
     * @param a_ID The resource id.
     */
    setRenderResource(a_ID: bigint /* uint64_t */): void

    /**
     * Returns the underlying Resource.
     *
     * @return Resource The underlying resource, can be a nullptr.
     */
    getRenderResource(): Resource | null

    /**
     * Returns the texture coordinates used by the Quad3dNode.
     *
     * @return The coordinates.
     */
    getTexCoords(): Array<[number, number, number]> /* std::vector<glm::vec3> */

    /**
     * Set the texture coordinates of the node being rendered.
     * if the resource is not a Texture3dResource, this will have no effect.
     * @param texCoords The coordinates.
     */
    setTexCoords(texCoords: Array<[number, number, number] | Float32Array> /* std::vector<glm::vec3> */): void

    /**
     * Set the custom size, which is by default one: { 1, 1 }.
     *
     * @param size for the width and height of the Quad3dNode.
     */
    setSize(size: [number, number] | Float32Array /* glm::vec2 */): void

    /**
     * Get the custom size, which is by default one: { 1, 1 }.
     *
     * @return The size.
     */
    getSize(): [number, number] /* glm::vec2 */
  }
}

declare module 'lumin' {
  class Quad3dNode extends RenderNode {
    getLocalAABB(): math.AABB
    setRenderResource(a_ID: BigInt /* uint64_t */): void
    getRenderResource(): Resource
    getTexCoords(): Array<[number, number, number] /* glm::vec3 */> /* std::vector */
    setTexCoords(texCoords: Array<[number, number, number] /* glm::vec3 */> /* std::vector */): void
    setSize(size: [number, number] /* glm::vec2 */): void
    getSize(): [number, number] /* glm::vec2 */
  };
}

declare module 'lumin' {
  class WorldMeshBlockData {

    /**
     * Constructor.
     */
    constructor()

    /**
     * Returns if the data is valid.
     */
    isValid(): boolean

    /**
     * Returns the block id.
     */
    getId(): WorldMeshBlockData.Id

    /**
     * Returns the local AABB for the mesh.
     */
    getAABB(): math.AABB

    /**
     * Returns the vertices for this block.
     */
    getVertices(): Array<[number, number, number]> /* std::vector<glm::vec3> */

    /**
     * Returns the indices for this block.
     */
    getIndices(): Array<number> /* std::vector<uint32_t> */

    /**
     * Returns the vertex normals for this block.
     */
    getNormals(): Array<[number, number, number]> /* std::vector<glm::vec3> */

    /**
     * Returns the offset that should be applied to the block's vertices.
     *
     * @return coordinate frame offset
     */
    getCoordinateFrameOffset(): [number, number, number] /* glm::vec3 */

    /**
     * Returns the rotation that should be applied to the block's vertices.
     *
     * @return coordinate frame rotation
     */
    getCoordinateFrameRotation(): [number, number, number, number] /* glm::quat */

    /**
     * Returns the offset transform that should be applied to the block's vertices.
     *
     * @return coordinate frame transform
     */
    getCoordinateFrameTransform(): [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] /* glm::mat4 */

    /**
     * Returns the offset inverse transform. This can be used to put a world-space position
     * into the block's frame.
     *
     * @return coordinate frame inverse transform
     */
    getCoordinateFrameInvTransform(): [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] /* glm::mat4 */
  }
  namespace WorldMeshBlockData {
    class Id {
      constructor()
      toString(): string
    }
  }
}

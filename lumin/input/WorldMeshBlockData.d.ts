declare module 'lumin' {
  class WorldMeshBlockData {
    constructor()
    isValid(): boolean
    getId(): WorldMeshBlockData.Id
    getAABB(): math.AABB
    getVertices(): Array<[number, number, number] /* glm::vec3 */> /* std::vector */
    getIndices(): Array<number> /* std::vector */
    getNormals(): Array<[number, number, number] /* glm::vec3 */> /* std::vector */
    getCoordinateFrameOffset(): [number, number, number] /* glm::vec3 */
    getCoordinateFrameRotation(): [number, number, number, number] /* glm::quat */
    getCoordinateFrameTransform(): [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] /* glm::mat4 */
    getCoordinateFrameInvTransform(): [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] /* glm::mat4 */
  };
  class Id {
    constructor()
    toString(): string
  };
}

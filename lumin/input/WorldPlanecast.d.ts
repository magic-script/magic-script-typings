declare module 'lumin' {
  class WorldPlaneCastResult {
    constructor()
    getPlanes(): Array<WorldPlaneCastResult.Plane> /* std::vector */
    getSuccess(): boolean
    getUserValue(): BigInt /* uint64_t */
  };
  class Plane {
    center: [number, number, number] /* glm::vec3 */;
    normal: [number, number, number] /* glm::vec3 */;
    vertices: Array<[number, number, number] /* glm::vec3 */> /* std::vector */;
    width: number;
    height: number;
    flags: PlanecastFlags;
    id: BigInt /* uint64_t */;
    constructor()
  };
}

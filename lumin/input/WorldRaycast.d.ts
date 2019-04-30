declare module 'lumin' {
  class WorldRayCastResult {
    constructor() {}
    getFromPos(): [number, number, number] /* glm::vec3 */
    getFromDir(): [number, number, number] /* glm::vec3 */
    getFromWidth(): number
    getFromHeight(): number
    getFromHorizFovDeg(): number
    getHitPos(): [number, number, number] /* glm::vec3 */
    getHitNormal(): [number, number, number] /* glm::vec3 */
    getValid(): boolean
    getUserValue(): number
    getConfidence(): number
  };
}

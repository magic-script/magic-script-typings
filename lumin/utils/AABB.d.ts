declare module 'lumin' {
  namespace math {
    class AABB {
      readonly EMPTY: math.AABB = AABB();
      constructor()
      constructor(min: [number, number, number] /* glm::vec3 */, max: [number, number, number] /* glm::vec3 */)
      isEmpty(): boolean
      isZeroVolume(): boolean
      isZeroSize(): boolean
      isValid(): boolean
      getMin(): [number, number, number] /* glm::vec3 */
      getMax(): [number, number, number] /* glm::vec3 */
      getCenter(): [number, number, number] /* glm::vec3 */
      getExtents(): [number, number, number] /* glm::vec3 */
      getWidth(): number
      getHeight(): number
      getDepth(): number
      setMin(min: [number, number, number] /* glm::vec3 */): void
      setMax(max: [number, number, number] /* glm::vec3 */): void
      extend(other: math.AABB): void
      extend(point: [number, number, number] /* glm::vec3 */): void
      translate(offset: [number, number, number] /* glm::vec3 */): void
      transform(transform: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] /* glm::mat4 */): void
      contains(point: [number, number, number] /* glm::vec3 */): boolean
      toString(): string
      intersect(rayOri: [number, number, number] /* glm::vec3 */, rayDir: [number, number, number] /* glm::vec3 */): number
    };
  }
}

declare module 'lumin' {
  namespace ui {
    class BoundaryShape {
      constructor(size: [number, number] /* glm::vec2 */, roundness: number, offset: [number, number, number] /* glm::vec3 */ = 0 /* 0 is not the actual default value */)
      setSize(size: [number, number] /* glm::vec2 */): void
      getSize(): [number, number] /* glm::vec2 */
      setOffset(offset: [number, number, number] /* glm::vec3 */): void
      getOffset(): [number, number, number] /* glm::vec3 */
      setRoundness(roundness: number): void
      getRoundness(): number
    };
  }
}

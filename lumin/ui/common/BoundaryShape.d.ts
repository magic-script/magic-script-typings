declare module 'lumin' {
  namespace ui {

    /**
     * Describes a rounded rectangular shaped boundary, from sharp corner to circular,
     * used for user interface interactions.
     *
     * This class uses cursor raycasts, instead of a single point, to calculate
     * cursor promity.
     */
    class BoundaryShape {

      /** Constructor */
      constructor(size: [number, number] | Float32Array /* glm::vec2 */, roundness: number /* float */, offset?: [number, number, number] | Float32Array /* glm::vec3 */)

      /**
       * Sets the size of the shape.
       *
       * @param size - the shape size in X and Y.
       */
      setSize(size: [number, number] | Float32Array /* glm::vec2 */): void

      /**
       * Gets the size of the shape.
       *
       * @return the shape size in X and Y.
       */
      getSize(): [number, number] /* glm::vec2 */

      /**
       * Sets the offset of the shape.
       *
       * @param offset - the offset of the shape.
       */
      setOffset(offset: [number, number, number] | Float32Array /* glm::vec3 */): void

      /**
       * Gets the offset of the shape.
       *
       * @return the shape offset.
       */
      getOffset(): [number, number, number] /* glm::vec3 */

      /**
       * Sets the roundness of the shape.
       *
       * 0 for sharp corners, 1 for fully rounded corners.
       *
       * @param roundness - the corner roundness
       */
      setRoundness(roundness: number /* float */): void

      /**
       * Gets the roundness of the shape.
       *
       * @return the corner roundness.
       */
      getRoundness(): number /* float */
    }
  }
}

declare module 'lumin' {
  namespace math {

    /**
     * Axis-aligned bounding box.
     */
    class AABB {

      /** Default constructed AABB with no enclosed volume.
       * `value = AABB()`
       */
      static readonly EMPTY: math.AABB;

      /** Initially, the AABB is empty. */
      constructor()
      constructor(min: [number, number, number] | Float32Array /* glm::vec3 */, max: [number, number, number] | Float32Array /* glm::vec3 */)

      /**
       * Get whether the AABB is EMPTY.
       *
       * An EMPTY AABB is un-initialized and contains
       * no valid data, but is ready for extending.
       */
      isEmpty(): boolean

      /**
       * Get whether the AABB is of zero volume.
       *
       * An AABB with zero volume is where any component
       * in min equals the same component in max.
       */
      isZeroVolume(): boolean

      /**
       * Get whether the AABB is of zero size.
       *
       * An AABB with zero size is where min and max
       * are at the same point.
       */
      isZeroSize(): boolean

      /**
       * Get whether the AABB is valid.
       *
       * An invalid AABB is where any component in max is
       * less than the same component in min.
       *
       * EMPTY is an invalid AABB.
       */
      isValid(): boolean

      /** Get the minimum coordinate of the bounding box. */
      getMin(): [number, number, number] /* glm::vec3 */

      /** Get the maximum coordinate of the bounding box. */
      getMax(): [number, number, number] /* glm::vec3 */

      /** Get the center of the bounding box. */
      getCenter(): [number, number, number] /* glm::vec3 */

      /** Get the extents (w/2,h/2,d/2) of the bounding box. */
      getExtents(): [number, number, number] /* glm::vec3 */

      /** Get the width (x dimension) of the bounding box. */
      getWidth(): number /* float */

      /** Get the height (y dimension) of the bounding box. */
      getHeight(): number /* float */

      /** Get the depth (z dimension) of the bounding box. */
      getDepth(): number /* float */

      /**
       * Set the minimum coordinate of the bounding box
       */
      setMin(min: [number, number, number] | Float32Array /* glm::vec3 */): void

      /**
       * Set the maximum coordinate of the bounding box
       */
      setMax(max: [number, number, number] | Float32Array /* glm::vec3 */): void

      /**
       * Extend this AABB to also enclose the given AABB.
       */
      extend(other: math.AABB): void

      /**
       * Extend this AABB to enclose the given point.
       */
      extend(point: [number, number, number] | Float32Array /* glm::vec3 */): void

      /**
       * Translate this AABB by the given offset.
       */
      translate(offset: [number, number, number] | Float32Array /* glm::vec3 */): void

      /**
       * Transform the AABB.  The resulting AABB will be the
       * minimal AABB enclosing the original AABB with the provided
       * transform applied.
       */
      transform(mat: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] | Float32Array /* glm::mat4 */): void

      /**
       * Is the point contained within the bounds.
       */
      contains(point: [number, number, number] | Float32Array /* glm::vec3 */): boolean

      /**
       * Return a readable string representation of the given AABB object.
       */
      toString(): string

      /**
       * Intersect AABB with a ray. The AABB is assumed to be a solid block; if the ray origin is inside
       * the AABB it will be considered a hit with a distance of 0.
       *
       * @param rayOri Start point of the ray.
       * @param rayDir Direction of the ray. The ray is assumed to be infinite in length.
       * @return Distance to the intersection. To get the intersection point, use rayOri + rayDir * dist.
       */
      intersect(rayOri: [number, number, number] | Float32Array /* glm::vec3 */, rayDir: [number, number, number] | Float32Array /* glm::vec3 */): number | null /* std::optional<float> */
    }
  }
}

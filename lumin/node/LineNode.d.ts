declare module 'lumin' {

  /**
   * Node that represents a series of line segments.
   */
  class LineNode extends RenderNode {

    /**
     * Add a point to the set of points that describe this series of line segments.
     * The line follows the order in which the points are added.
     * No line can exist if there is less than two points.
     * @param a_vPos The point to add.
     *
     * @priv none
     */
    addPoints(a_vPos: [number, number, number] | Float32Array /* glm::vec3 */): void

    /**
     * Remove all line segment points.
     *
     * @priv none
     */
    clearPoints(): void

    /**
     * Breaks the current line segment. The next point added in addPoints will not be connected to
     * the previous point.
     *
     * @priv none
     */
    addLineBreak(): void
  }
}

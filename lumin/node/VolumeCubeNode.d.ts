declare module 'lumin' {

  /**
   * A Node that represents a 3-d cube that can be drawn on using a Texture3dResource.
   */
  class VolumeCubeNode extends TransformNode {

    /**
     * Sets the resource to be used when drawing the VolumeCubeNode.
     * The id should refer to a Texture3dResource.
     *
     * @param a_ID The resource id.
     */
    setRenderResource(a_ID: bigint /* uint64_t */): void

    /**
     * Returns the underlying Resource.
     *
     * @return Resource The underlying resource, can be a nullptr.
     */
    getRenderResource(): Resource | null

    /**
     * Returns the texture coordinates used by the VolumeCubeNode.
     *
     * @return The coordinates.
     */
    getTexCoords(): Array<[number, number, number]> /* std::vector<glm::vec3> */

    /**
     * Set the texture coordinates of the node being rendered.
     * if the resource is not a Texture3dResource, this will have no effect.
     *
     * @param texCoords The coordinates.
     */
    setTexCoords(texCoords: Array<[number, number, number] | Float32Array> /* std::vector<glm::vec3> */): void

    /**
     * Set a color to use when rendering the cube. The effect of this
     * depends on the Texture3dResource; see setRenderResource.
     *
     * The color will modulate the color of the Texture3dResource at ever pixel;
     * e.g., to add transparency if blending is enabled.
     *
     * The default color (i.e., white: {1, 1, 1, 1}) has no effect on
     * the appearance of the Texture3dResource, since every channel is multiplied
     * by 1.0.
     *
     * @param color The color.
     */
    setColor(color: [number, number, number, number] | Float32Array /* glm::vec4 */): void

    /**
     * Get the custom color, which is by default white: { 1, 1, 1, 1 }.
     *
     * @return The color.
     */
    getColor(): [number, number, number, number] /* glm::vec4 */

    /**
     * Set the range along each axis between 0.0 and 1.0 (inclusive) that the sampler can sample.
     *
     * @param clipRanges minimum and maximum range for each axis.
     */
    setSampleClipRanges(clipRanges: VolumeCubeNode.SampleClipRange): void

    /**
     * Get the range along each axis that the sampler can sample.
     *
     * @return SampleClipRange.
     */
    getSampleClipRanges(): VolumeCubeNode.SampleClipRange
  }
  namespace VolumeCubeNode {

    /**
    * Clipping range for Ray Marching Sampler
    */
    class SampleClipRange {

      /** Minimum clipping range. */
      minClipRange: [number, number, number] /* glm::vec3 */;

      /** Maximum clipping range. */
      maxClipRange: [number, number, number] /* glm::vec3 */;
      constructor(a_minClipRange: [number, number, number] | Float32Array /* glm::vec3 */, a_maxClipRange: [number, number, number] | Float32Array /* glm::vec3 */)
    }
  }
}

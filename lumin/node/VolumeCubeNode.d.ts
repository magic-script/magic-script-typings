declare module 'lumin' {
  class VolumeCubeNode extends TransformNode {
    setRenderResource(a_ID: BigInt /* uint64_t */): void
    getRenderResource(): Resource
    getTexCoords(): Array<[number, number, number] /* glm::vec3 */> /* std::vector */
    setTexCoords(texCoords: Array<[number, number, number] /* glm::vec3 */> /* std::vector */): void
    setColor(color: [number, number, number, number] /* glm::vec4 */): void
    getColor(): [number, number, number, number] /* glm::vec4 */
    setSampleClipRanges(clipRanges: VolumeCubeNode.SampleClipRange): void
    getSampleClipRanges(): VolumeCubeNode.SampleClipRange
  };
  class SampleClipRange {
    minClipRange: [number, number, number] /* glm::vec3 */;
    maxClipRange: [number, number, number] /* glm::vec3 */;
    constructor(a_minClipRange: [number, number, number] /* glm::vec3 */, a_maxClipRange: [number, number, number] /* glm::vec3 */)
  };
}

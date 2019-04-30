declare module 'lumin' {
  class LightNode extends TransformNode {
    setType(a_type: utils.LightType): void
    getType(): utils.LightType
    setColor(a_color: [number, number, number] /* glm::vec3 */): void
    getColor(): [number, number, number] /* glm::vec3 */
    setIntensity(a_intensity: number): void
    getIntensity(): number
    setRange(a_range: number): void
    getRange(): number
    setSpotAngle(a_spotAngle: number): void
    getSpotAngle(): number
    trySetCastsShadows(a_castsShadows: boolean): boolean
    getCastsShadows(): boolean
    setUseHeadPose(a_on: boolean, a_offset: [number, number, number, number] /* glm::vec4 */ = 0 /* 0 is not the actual default value */): void
    getUseHeadPose(): boolean
    getHeadPoseOffset(): [number, number, number, number] /* glm::vec4 */
  };
}

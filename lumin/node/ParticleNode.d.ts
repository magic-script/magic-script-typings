declare module 'lumin' {
  namespace particles {
  }
  class ParticleNode extends RenderNode {
    setPackageResource(a_ID: number): void
    setEffectName(effectName: string, infiniteLived: boolean = 0 /* 0 is not the actual default value */): void
    setProperty(a_name: string, a_value: number): boolean
    setProperty(a_name: string, a_value: number): boolean
    setProperty(a_name: string, a_value: [number, number] /* glm::vec2 */): boolean
    setProperty(a_name: string, a_value: [number, number, number] /* glm::vec3 */): boolean
    setProperty(a_name: string, a_value: [number, number, number, number] /* glm::vec4 */): boolean
    setProperty(a_name: string, a_value: [number, number] /* glm::ivec2 */): boolean
    setProperty(a_name: string, a_value: [number, number, number] /* glm::ivec3 */): boolean
    setProperty(a_name: string, a_value: [number, number, number, number] /* glm::ivec4 */): boolean
    play(): void
    stop(): void
    kill(): void
    reset(): void
  };
}

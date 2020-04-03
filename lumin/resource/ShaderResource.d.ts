declare module 'lumin' {
  namespace utils {
  }
  class UniformBuffer {
    set(index: number /* int */, value: number /* int32_t */): void
    set(index: number /* int */, value: number /* uint32_t */): void
    set(index: number /* int */, value: number /* float */): void
    set(index: number /* int */, value: number /* double */): void
    set(index: number /* int */, value: boolean): void
    set(index: number /* int */, value: [number, number] | Float32Array /* glm::vec2 */): void
    set(index: number /* int */, value: [number, number, number] | Float32Array /* glm::vec3 */): void
    set(index: number /* int */, value: [number, number, number, number] | Float32Array /* glm::vec4 */): void
    set(index: number /* int */, value: [number, number, number, number] | Float32Array /* glm::quat */): void
    set(index: number /* int */, value: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] | Float32Array /* glm::mat4 */): void
    constructor()
  }
  class ShaderResource extends Resource {
    constructor()
    createUniformBuffer(): UniformBuffer
    getShaderType(): utils.ShaderType
  }
}

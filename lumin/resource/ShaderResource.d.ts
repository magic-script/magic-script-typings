declare module 'lumin' {
  namespace utils {
  }
  class UniformBuffer {
    set(index: number, value: number): void
    set(index: number, value: number): void
    set(index: number, value: number): void
    set(index: number, value: number): void
    set(index: number, value: boolean): void
    set(index: number, value: [number, number] /* glm::vec2 */): void
    set(index: number, value: [number, number, number] /* glm::vec3 */): void
    set(index: number, value: [number, number, number, number] /* glm::vec4 */): void
    set(index: number, value: [number, number, number, number] /* glm::quat */): void
    set(index: number, value: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] /* glm::mat4 */): void
    constructor()
  };
  class ShaderResource extends Resource {
    constructor()
    createUniformBuffer(): UniformBuffer
    getShaderType(): utils.ShaderType
  };
}

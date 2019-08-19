declare module 'lumin' {
  class PrismTransformEvent extends ServerEvent {
    constructor()
    getTransform(): [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] /* glm::mat4 */
  };
}

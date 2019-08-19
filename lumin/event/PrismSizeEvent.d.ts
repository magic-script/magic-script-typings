declare module 'lumin' {
  class PrismSizeEvent extends ServerEvent {
    constructor()
    getSize(): [number, number, number] /* glm::vec3 */
  };
}

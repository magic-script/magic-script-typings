declare module 'lumin' {
  class WorldImageTrackingEventData extends ServerEvent {
    constructor() {}
    getName(): string
    getPosition(): [number, number, number] /* glm::vec3 */
    getRotation(): [number, number, number, number] /* glm::quat */
  };
}

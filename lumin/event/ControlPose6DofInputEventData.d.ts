declare module 'lumin' {
  class ControlPose6DofInputEventData extends InputEventData {
    constructor() {}
    getQuaternionW(): number
    getQuaternionX(): number
    getQuaternionY(): number
    getQuaternionZ(): number
    getQuaternion(): [number, number, number, number] /* glm::quat */
    get6DofPosition(): [number, number, number] /* glm::vec3 */
  };
}

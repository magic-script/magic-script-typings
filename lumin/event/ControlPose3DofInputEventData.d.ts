declare module 'lumin' {
  class ControlPose3DofInputEventData extends InputEventData {
    constructor() {}
    getQuaternionW(): number
    getQuaternionX(): number
    getQuaternionY(): number
    getQuaternionZ(): number
    getQuaternion(): [number, number, number, number] /* glm::quat */
  };
}

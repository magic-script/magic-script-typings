declare module 'lumin' {
  class ControlTouchPadInputEventData extends InputEventData {
    constructor() {}
    getTouch(tidx: number = 0 /* 0 is not the actual default value */): [number, number, number] /* glm::vec3 */
    getTouchCount(): number
    getTouchState(): boolean
    isMultiTouch(): boolean
  };
}

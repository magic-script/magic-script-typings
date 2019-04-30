declare module 'lumin' {
  class GestureInputEventData extends InputEventData {
    constructor() {}
    getGesture(): input.GestureType
    getHandGestureIndex(): number
    getHandGestureLocation(): [number, number, number] /* glm::vec3 */
    getHandGestureKeyPointCount(): number
    getHandGestureKeypoint(keypointName: input.HandGestureKeypointName): [number, number, number] /* glm::vec3 */
    getHandGestureConfidence(): number
    getHandGestureKeyPoseConfidence(gesture: input.GestureType): number
    isHandGestureKeypointRecognized(keypointName: input.HandGestureKeypointName): boolean
    getGestureDirection(): input.GestureDirection
    getGestureSpeed(): number
    getGestureDistance(): number
    getGestureFingerGap(): number
    getGestureRadius(): number
    getGestureAngle(): number
    getGestureLocation(): [number, number] /* glm::vec2 */
    getGestureForceValue(): number
    getTouch(tidx: number = 0 /* 0 is not the actual default value */): [number, number, number] /* glm::vec3 */
    getTouchCount(): number
    getTouchState(): boolean
    isMultiTouch(): boolean
  };
}

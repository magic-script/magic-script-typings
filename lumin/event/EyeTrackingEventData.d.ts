declare module 'lumin' {
  class EyeTrackingEventData extends ServerEvent {
    constructor() {}
    getEyeTrackingLeftEyePosition(): [number, number, number] /* glm::vec3 */
    getEyeTrackingLeftEyeRotation(): [number, number, number, number] /* glm::quat */
    getEyeTrackingLeftEyeConfidence(): number
    getEyeTrackingLeftEyeBlinkState(): boolean
    getEyeTrackingRightEyePosition(): [number, number, number] /* glm::vec3 */
    getEyeTrackingRightEyeRotation(): [number, number, number, number] /* glm::quat */
    getEyeTrackingRightEyeConfidence(): number
    getEyeTrackingRightEyeBlinkState(): boolean
    getEyeTrackingFixationPosition(): [number, number, number] /* glm::vec3 */
    getEyeTrackingFixationConfidence(): number
    isFixationDepthUnconfortable(): boolean
    hasFixationViolationOccured(): boolean
    remainingTimeAtUncomfortableDepth(): number
  };
}

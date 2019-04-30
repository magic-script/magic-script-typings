declare module 'lumin' {
  class TransformNode extends Node {
    setLocalPosition(aPos: [number, number, number] /* glm::vec3 */): void
    setLocalScale(aScale: [number, number, number] /* glm::vec3 */): void
    setLocalRotation(aRot: [number, number, number, number] /* glm::quat */): void
    setLocalTransform(aTransform: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] /* glm::mat4 */): void
    getLocalPosition(): [number, number, number] /* glm::vec3 */
    getLocalScale(): [number, number, number] /* glm::vec3 */
    getLocalRotation(): [number, number, number, number] /* glm::quat */
    setAnchorPosition(a_position: [number, number, number] /* glm::vec3 */): void
    getWorldPosition(): [number, number, number] /* glm::vec3 */
    getPrismPosition(): [number, number, number] /* glm::vec3 */
    delayMove(durationSecs: number, track: number = 0 /* 0 is not the actual default value */): void
    addMoveCallback(track: number = 0 /* 0 is not the actual default value */): void
    stopTransformAnimations(): void
    getRigidBody(): PhysicsRigidBody
  };
}

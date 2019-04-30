declare module 'lumin' {
  class PhysicsRigidBody {
    constructor() {}
    node(): Node
    getBodyType(): physics.RigidBodyType
    setBodyType(type: physics.RigidBodyType): void
    getMass(): number
    setMass(massKg: number): void
    getColliderFlags(): number
    isColliderFlagSet(flag: number): boolean
    setColliderFlags(flags: number): void
    setColliderFlag(flag: number): void
    clearColliderFlag(flag: number): void
    getCollidesWithFlags(): number
    isCollidesWithFlagSet(flag: number): boolean
    setCollidesWithFlags(flags: number): void
    setCollidesWithFlag(flag: number): void
    clearCollidesWithFlag(flag: number): void
    addShape(shape: PhysicsShape, position: [number, number, number] /* glm::vec3 */ = 0 /* 0 is not the actual default value */, rotation: [number, number, number, number] /* glm::quat */ = 0 /* 0 is not the actual default value */): number
    removeShape(id: number): boolean
    getCenterOfMass(): [number, number, number] /* glm::vec3 */
    setCenterOfMass(com: [number, number, number] /* glm::vec3 */): void
    getInertiaTensor(): [number, number, number] /* glm::vec3 */
    setInertiaTensor(tensor: [number, number, number] /* glm::vec3 */): void
    getLinearVelocity(): [number, number, number] /* glm::vec3 */
    setLinearVelocity(velocity: [number, number, number] /* glm::vec3 */): void
    getAngularVelocity(): [number, number, number] /* glm::vec3 */
    setAngularVelocity(velocity: [number, number, number] /* glm::vec3 */): void
    getLinearDamping(): number
    setLinearDamping(damping: number): void
    getAngularDamping(): number
    setAngularDamping(damping: number): void
    getMaxAngularVelocity(): number
    setMaxAngularVelocity(velocity: number): void
    getSleepThreshold(): number
    setSleepThreshold(threshold: number): void
    applyForce(type: physics.ForceType, force: [number, number, number] /* glm::vec3 */): void
    applyForceAtPos(type: physics.ForceType, force: [number, number, number] /* glm::vec3 */, pos: [number, number, number] /* glm::vec3 */): void
    applyLocalForceAtPos(type: physics.ForceType, force: [number, number, number] /* glm::vec3 */, pos: [number, number, number] /* glm::vec3 */): void
    applyTorque(type: physics.ForceType, force: [number, number, number] /* glm::vec3 */): void
    clearForce(): void
    clearTorque(): void
    setIgnoreGravity(ignore: boolean): void
    lockAxes(linear: physics.AxisLock, angular: physics.AxisLock): void
    setEnableCCD(enable: boolean): void
  };
}

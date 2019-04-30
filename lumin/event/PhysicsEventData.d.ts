declare module 'lumin' {
  class PhysicsEventData extends ServerEvent {
    constructor() {}
    getCollisionType(): physics.CollisionType
    getRigidBody1(): number
    getRigidBody2(): number
    getCollisionCount(): number
    getCollisionPoints(): Array<[number, number, number] /* glm::vec3 */> /* std::vector */
    getCollisionNormals(): Array<[number, number, number] /* glm::vec3 */> /* std::vector */
    getCollisionForces(): Array<[number, number, number] /* glm::vec3 */> /* std::vector */
    getBody1CollisionMaterial(collision: number): PhysicsMaterial
    getBody2CollisionMaterial(collision: number): PhysicsMaterial
  };
}

declare module 'lumin' {
  class PhysicsEventData extends ServerEvent {
    constructor()

    /**
     * Returns the type of collision event being reported.
     */
    getCollisionType(): physics.CollisionType

    /**
     * Returns id of the 1st colliding rigid body.
     * If this is a trigger event, this will be the trigger body.
     * If this body is the world mesh, the id will be 0.
     */
    getRigidBody1(): bigint /* uint64_t */

    /**
     * Returns id of the 2nd colliding rigid body.
     * If this body is the world mesh, the id will be 0.
     */
    getRigidBody2(): bigint /* uint64_t */

    /** Returns collision points, in prism-space */
    getCollisionPoints(): Array<[number, number, number]> /* std::vector<glm::vec3> */

    /** Returns collision forces, in Newtons (kg-m/s^2) */
    getCollisionForces(): Array<[number, number, number]> /* std::vector<glm::vec3> */
  }
}

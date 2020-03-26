declare module 'lumin' {

  /**
   * Defines the mass and movement properties of a physics object. A rigid body has no inherent shape,
   * one or more PhysicsShapes need to be added to it.
   *
   * A rigid body is one of 3 types: static, kinematic, or dynamic
   *     static : The body never moves.
   *     kinematic : The body can be moved by external systems, such as animation, but is not
   *                 affected by forces or collisions.
   *     dynamic : The body is affected by forces and collisions.
   *
   * It is important that apart from their initial position, static and dynamic bodies should not
   * have their positions changed by calls to setLocalPosition, etc. This will cause unexpected
   * results in the simulation.
   */
  class PhysicsRigidBody {
    constructor()

    /**
     * Get the Node this RigidBody is attached to.
     *
     * @return the Node pointer.
     */
    node(): Node | null

    /**
     * Returns the rigid body type (static/kinematic/dynamic).
     *
     * @return The body type.
     *
     * @priv none
     */
    getBodyType(): physics.RigidBodyType

    /**
     * Sets the rigid body type (static/kinematic/dynamic). Changing this may result in the loss of
     * data for the body in the simulation. The preferred way to change the body type is to remove
     * the body from its volume, change the type, and re-add to the volume.
     *
     * @return The body type.
     *
     * @priv none
     */
    setBodyType(type: physics.RigidBodyType): void

    /**
     * Returns the mass of the rigid body.
     *
     * @return Mass, in kilograms.
     *
     * @priv none
     */
    getMass(): number /* float */

    /**
     * Sets the mass of the rigid body.
     *
     * @param massKg Mass, in kilograms. Must be > 0.
     *
     * @priv none
     */
    setMass(massKg: number /* float */): void

    /**
     * Returns the collider flags for the body.
     *
     * @return The collider flags.
     *
     * @priv none
     */
    getColliderFlags(): number /* uint32_t */

    /**
     * Returns if a given collider flag is set.
     *
     * @param flag Flag value, in the range of 0 - 31.
     * @return true if the flag is set.
     *
     * @priv none
     */
    isColliderFlagSet(flag: number /* int */): boolean

    /**
     * Sets the collider flags for the body. If the collider flags of one body anded with the
     * collides with flags of another body is 0, the bodies will not collide.
     *
     * @param flags Collider flags.
     *
     * @priv none
     */
    setColliderFlags(flags: number /* uint32_t */): void

    /**
     * Sets a single collider flag for the body.
     *
     * @param flag Collider flag, in the range of 0 - 31.
     *
     * @priv none
     */
    setColliderFlag(flag: number /* int */): void

    /**
     * Clears a single collider flag for the body.
     *
     * @param flag Collider flag, in the range of 0 - 31.
     *
     * @priv none
     */
    clearColliderFlag(flag: number /* int */): void

    /**
     * Returns the collides with flags for the body.
     *
     * @return The collides with flags.
     *
     * @priv none
     */
    getCollidesWithFlags(): number /* uint32_t */

    /**
     * Returns if a given collides with flag is set.
     *
     * @param flag Flag value, in the range of 0 - 31.
     * @return true if the flag is set.
     *
     * @priv none
     */
    isCollidesWithFlagSet(flag: number /* int */): boolean

    /**
     * Sets the collides with flags for the body. If the collider flags of one body anded with the
     * collides with flags of another body is 0, the bodies will not collide.
     *
     * @param flags Collides with flags.
     *
     * @priv none
     */
    setCollidesWithFlags(flags: number /* uint32_t */): void

    /**
     * Sets a single collides with flag for the body.
     *
     * @param flag Collides with flag, in the range of 0 - 31.
     *
     * @priv none
     */
    setCollidesWithFlag(flag: number /* int */): void

    /**
     * Clears a single collides with flag for the body.
     *
     * @param flag Collides with flag, in the range of 0 - 31.
     *
     * @priv none
     */
    clearCollidesWithFlag(flag: number /* int */): void

    /**
     * Adds a shape to the body. A shape may not be added to the body after it has been added to a Prism.
     *
     * @param shape The shape to add.
     * @param position `default = VEC3_ZERO`<br/> Offset from the body's location to place the shape.
     * @param rotation `default = QUAT_IDENTITY`<br/> Rotation of the shape relative to the body's orientation.
     * @return Id of the shape for the body. INVALID_PHYSICS_ID if the shape was not added.
     *
     * @priv none
     */
    addShape(shape: PhysicsShape | null /* std::shared_ptr<PhysicsShape> */, position?: [number, number, number] | Float32Array /* glm::vec3 */, rotation?: [number, number, number, number] | Float32Array /* glm::quat */): bigint /* uint64_t */

    /**
     * Removes a shape from the body. A shape may not be removed from the body after it has been added to a Prism.
     *
     * @param id Id of the shape to remove.
     * @return true if the shape was removed
     *
     * @priv none
     */
    removeShape(id: bigint /* uint64_t */): boolean

    /**
     * Returns the center of mass of the body.
     *
     * @return Center of mass.
     *
     * @priv none
     */
    getCenterOfMass(): [number, number, number] /* glm::vec3 */

    /**
     * Sets the center of mass of the body. Note setting it outside the body's area as defined by
     * the shapes attached to it may result in an unstable simulation.
     *
     * @param com Center of mass
     *
     * @priv none
     */
    setCenterOfMass(com: [number, number, number] | Float32Array /* glm::vec3 */): void

    /**
     * Returns the inertia tensor of the body.
     *
     * @return Inertia tensor.
     *
     * @priv none
     */
    getInertiaTensor(): [number, number, number] /* glm::vec3 */

    /**
     * Sets the inertia tensor of the body. A value of 0 is the equivalent of infinite inertia on
     * the axis.
     *
     * @param tensor Inertia tensor.
     *
     * @priv none
     */
    setInertiaTensor(tensor: [number, number, number] | Float32Array /* glm::vec3 */): void

    /**
     * Returns the linear velocity of the body, in meter/sec.
     *
     * @return velocity
     *
     * @priv none
     */
    getLinearVelocity(): [number, number, number] /* glm::vec3 */

    /**
     * Sets the linear velocity of the body, in meter/sec.
     *
     * @param velocity
     *
     * @priv none
     */
    setLinearVelocity(velocity: [number, number, number] | Float32Array /* glm::vec3 */): void

    /**
     * Returns the angular velocity of the body, in rad/sec.
     *
     * @return velocity
     *
     * @priv none
     */
    getAngularVelocity(): [number, number, number] /* glm::vec3 */

    /**
     * Sets the angular velocity of the body, in rad/sec.
     *
     * @param velocity
     *
     * @priv none
     */
    setAngularVelocity(velocity: [number, number, number] | Float32Array /* glm::vec3 */): void

    /**
     * Returns linear damping coefficient being applied to the body.
     *
     * @return Damping
     *
     * @priv none
     */
    getLinearDamping(): number /* float */

    /**
     * Sets linear damping coefficient being applied to the body. This can be used to simulate things
     * like air resistance.
     *
     * @param damping Damping coefficient
     *
     * @priv none
     */
    setLinearDamping(damping: number /* float */): void

    /**
     * Returns angular damping coefficient being applied to the body.
     *
     * @return Damping
     *
     * @priv none
     */
    getAngularDamping(): number /* float */

    /**
     * Sets angular damping coefficient being applied to the body. This can be used to simulate things
     * like rolling friction.
     *
     * @param damping Damping coefficient
     *
     * @priv none
     */
    setAngularDamping(damping: number /* float */): void

    /**
     * Returns the maximum angular velocity of the body.
     *
     * @return Max velocity
     *
     * @priv none
     */
    getMaxAngularVelocity(): number /* float */

    /**
     * Sets the maximum angular velocity of the body. This helps keep the simulation stable; it can become
     * unstable if the object rotates too fast.
     *
     * @param velocity Max velocity
     *
     * @priv none
     */
    setMaxAngularVelocity(velocity: number /* float */): void

    /**
     * Returns the sleep threshold of the body.
     *
     * @return Threshold
     *
     * @priv none
     */
    getSleepThreshold(): number /* float */

    /**
     * Sets the sleep threshold of the body. This controls when the body is marked to be stopped
     * simulating due to lack of motion.
     *
     * @param threshold Sleep threshold value
     *
     * @priv none
     */
    setSleepThreshold(threshold: number /* float */): void

    /**
     * Applies a force to the body. The force will only be applied for the current frame; to apply a
     * continuous force, this function must be called every frame.
     *
     * @param type Type of force to apply (force or impulse).
     * @param force Amount of force. Units depend on the force type.
     *
     * @priv none
     */
    applyForce(type: physics.ForceType, force: [number, number, number] | Float32Array /* glm::vec3 */): void

    /**
     * Applies a force to the body at a given position. If the force is not at the center of mass, this
     * will result in a torque being applied to the body as well. Both the force and position are in
     * volume-space reference frame. The force will only be applied for the current frame; to apply a
     * continuous force, this function must be called every frame.
     *
     * @param type Type of force to apply (force or impulse).
     * @param force Amount of force. Units depend on the force type.
     * @param pos Position to apply the force
     *
     * @priv none
     */
    applyForceAtPos(type: physics.ForceType, force: [number, number, number] | Float32Array /* glm::vec3 */, pos: [number, number, number] | Float32Array /* glm::vec3 */): void

    /**
     * Applies a force to the body at a given position. If the force is not at the center of mass, this
     * will result in a torque being applied to the body as well. Both the force and position are in
     * local-space of the body reference frame. The force will only be applied for the current frame;
     * to apply a continuous force, this function must be called every frame.
     *
     * @param type Type of force to apply (force or impulse).
     * @param force Amount of force. Units depend on the force type.
     * @param pos Position to apply the force
     *
     * @priv none
     */
    applyLocalForceAtPos(type: physics.ForceType, force: [number, number, number] | Float32Array /* glm::vec3 */, pos: [number, number, number] | Float32Array /* glm::vec3 */): void

    /**
     * Applies a torque to the body. The torque will only be applied for the current frame; to apply a
     * continuous torque, this function must be called every frame.
     *
     * @param type Type of torque to apply (force or impulse).
     * @param force Amount of torque. Units depend on the force type.
     *
     * @priv none
     */
    applyTorque(type: physics.ForceType, force: [number, number, number] | Float32Array /* glm::vec3 */): void

    /**
     * Clears all linear forces on the body.
     *
     * @priv none
     */
    clearForce(): void

    /**
     * Clears all angular forces on the body.
     *
     * @priv none
     */
    clearTorque(): void

    /**
     * Flags the body as ignoring gravity.
     *
     * @param ignore If true, the body won't be affected by gravity.
     *
     * @priv none
     */
    setIgnoreGravity(ignore: boolean): void

    /**
     * Prevents motion on the given axes. Values can be or'ed together to prevent motion on multiple axes.
     *
     * @param linear Linear axes to lock
     * @param angular Angular axes to lock
     *
     * @priv none
     */
    lockAxes(linear: physics.AxisLock, angular: physics.AxisLock): void

    /**
     * Enable/disable continuous collision detection (CCD) for this body. Enabling CCD can be used to
     * prevent a body from "tunneling" through another due to it moving too fast.
     *
     * IMPORTANT: Physics must have been enabled with the solverType initialization data set to
     * kFastNormal or kFastFast for this to have an effect.
     *
     * @param enable Flag to enable CCD on the body.
     *
     * @priv none
     */
    setEnableCCD(enable: boolean): void
  }
}

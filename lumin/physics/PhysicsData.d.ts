declare module 'lumin' {

  /**
   * Struct containing data used to initialize physics.
   */
  class PhysicsInitializationData {

    /**
     * Gravity vector, in m/s^2.
     */
    gravity: [number, number, number] /* glm::vec3 */;

    /**
     * Rate to run the simulation, in frames per second. Should be less
     * than the update/render rate.
     */
    simulationRateFps: number /* float */;

    /**
     * A velocity limit below which objects will not bounce. 2 is a good base value.
     */
    bounceThreshold: number /* float */;

    /**
     * Type of collision solver to use. If the type is kFastNormal or kFastFast,
     * setEnableCCD() can be called on a rigid body to enable CCD collisions for it.
     *
     */
    solverType: physics.SolverType;
    constructor()
  }
}

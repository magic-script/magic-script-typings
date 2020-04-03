declare module 'lumin' {

  /**
   * Data representing the surface properties of a PhysicsShape. There are 3 values:
   *
   * Static friction : Friction applied to the body if it is not in motion. Most sliding bodies have
   *                   a higher friction when stationary than when moving.
   * Dynamic friction : Friction applied to the body if it is in motion.
   * Restitution : Measure of how much relative energy a body has after a collision. A value of 0
   *               means all energy is lost, 1 means no energy is lost. Can be considered how
   *               "bouncy" a body is.
   */
  class PhysicsMaterial {

    /**
     * Default constructor. Creates a material with light friction and no restitution.
     *
     * @priv none
     */
    constructor()

    /**
     * Constructor
     *
     * @param staticFriction Friction for resting bodies.
     * @param dynamicFriction Friction for moving bodies.
     * @param restitution Measure of the amount of energy the body has after a collision.
     *
     * @priv none
     */
    constructor(staticFriction: number /* float */, dynamicFriction: number /* float */, restitution: number /* float */)

    /**
     * Returns the static friction.
     *
     * @return static friction
     *
     * @priv none
     */
    getStaticFriction(): number /* float */

    /**
     * Returns the dynamic friction.
     *
     * @return dynamic friction
     *
     * @priv none
     */
    getDynamicFriction(): number /* float */

    /**
     * Returns the restitution.
     *
     * @return restitution
     *
     * @priv none
     */
    getRestitution(): number /* float */
  }
}

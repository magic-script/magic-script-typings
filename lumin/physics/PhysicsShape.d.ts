declare module 'lumin' {

  /**
   * A shape that can be added to a PhysicsRigidBody. While the PhysicsRigidBody defines how the
   * body moves, due to its mass, PhysicsShapes define the actual shape of the body. PhysicsShapes
   * come in two general types: primitive, and mesh. Primitive shapes are plane, sphere, capsule,
   * and box; they are defined by parameters such as radius and length. Mesh shapes are convex and
   * open; they are defined by mesh data similar to a 3d mesh for rendering.
   *
   * NOTE: mesh shapes are currently not supported.
   *
   * A shape can have one of two behaviors: collision or trigger. A collision shape will collide
   * with other collision shapes and generally act as expected in a physics simulation. A trigger
   * shape does not collide with other shapes. However, if a collision shape enters or exits the
   * bounds of a trigger shape, a PhysicsEventData server event will be generated with a kTriggerEnter
   * or kTriggerExit type. Note a trigger shape interacting with another trigger shape does not
   * generate an event.
   *
   * Multiple shapes can be added to a PhysicsRigidBody. The localPosition and localRotation of the
   * shape sets its position relative to the position of the body.
   *
   * A shape may not be added to or removed from a PhysicsRigidBody once the body has been added to a Prism.
   *
   * A plane or open mesh shape cannot be added to a dynamic PhysicsRigidBody.
   *
   * Note that PhysicsShape have no setters for its data. If you want to modify a shape, you must
   * create a new one.
   */
  class PhysicsShape {
    constructor()

    /**
     * Returns the shape type.
     *
     * @return the type
     *
     * @priv none
     */
    getShapeType(): physics.ShapeType

    /**
     * Returns the shape behavior.
     *
     * @return the behavior
     *
     * @priv none
     */
    getShapeBehavior(): physics.ShapeBehavior

    /**
     * Returns the radius of a sphere shape.
     *
     * @return The radius, or undefined if the shape isn't a sphere.
     *
     * @priv none
     */
    getSphereRadius(): number /* float */

    /**
     * Returns the radius of a capsule shape.
     *
     * @return The radius, or undefined if the shape isn't a capsule.
     *
     * @priv none
     */
    getCapsuleRadius(): number /* float */

    /**
     * Returns the length of a capsule shape. The length is for the cylinder part of the shape,
     * it does not include the caps.
     *
     * @return The length, or undefined if the shape isn't a capsule.
     *
     * @priv none
     */
    getCapsuleLength(): number /* float */

    /**
     * Returns the side lengths of a box shape.
     *
     * @return The lengths, or undefined if the shape isn't a box.
     *
     * @priv none
     */
    getBoxSides(): [number, number, number] /* glm::vec3 */

    /**
     * Returns the PhysicsMaterial for this shape.
     *
     * @return the material
     *
     * @priv none
     */
    getMaterial(): PhysicsMaterial

    /**
     * Sets the PhysicsMaterial for the shape.
     *
     * @param material The Material
     *
     * @priv none
     */
    setMaterial(material: PhysicsMaterial): void
  }
}

declare module 'lumin' {
  class PhysicsShape {
    constructor() {}
    getShapeType(): physics.ShapeType
    getShapeBehavior(): physics.ShapeBehavior
    getSphereRadius(): number
    getCapsuleRadius(): number
    getCapsuleLength(): number
    getBoxSides(): [number, number, number] /* glm::vec3 */
    getMaterial(): PhysicsMaterial
    setMaterial(material: PhysicsMaterial): void
  };
}

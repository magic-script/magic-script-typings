declare module 'lumin' {
  class ModelResource extends FileResource {
    constructor() {}
    getAABB(): math.AABB
    getBoneNames(): Array<string> /* std::vector */
    getAnimationNames(): Array<string> /* std::vector */
    getSubMeshNames(): Array<string> /* std::vector */
  };
}

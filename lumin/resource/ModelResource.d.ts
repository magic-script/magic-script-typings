declare module 'lumin' {

  /**
   * Resource loads a Model and its mesh and textures etc
   */
  class ModelResource extends FileResource {
    constructor()
    getAABB(): math.AABB
  }
}

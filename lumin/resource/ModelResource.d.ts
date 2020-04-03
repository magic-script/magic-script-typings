declare module 'lumin' {

  /**
   * Resource loads a Model and its mesh and textures etc
   */
  class ModelResource extends FileResource {
    constructor()
    getAABB(): math.AABB

    /**
    * @return The vector of bone names associated with this ModelResource
    */
    getBoneNames(): Array<string> /* std::vector<std::string> */

    /**
    * @return The vector of animation names associated with this ModelResource
    */
    getAnimationNames(): Array<string> /* std::vector<std::string> */

    /**
    * @return The vector of sub mesh names associated with this ModelResource
    */
    getSubMeshNames(): Array<string> /* std::vector<std::string> */
  }
}

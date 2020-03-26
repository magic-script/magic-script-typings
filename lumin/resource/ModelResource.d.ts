declare module 'lumin' {
  class ModelResourceCamera {
    constructor()
    getLocalTransform(): [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] /* glm::mat4 */
    type: ModelResourceCamera.Type;
    xmag: number /* float */;
    ymag: number /* float */;
    aspectRatio: number /* float */;
    yfov: number /* float */;
    znear: number /* float */;
    zfar: number /* float */;
  }
  namespace ModelResourceCamera {
    enum Type {

      /**
       * `value = 0`
       */
      Undefined,
      Orthographic,
      Perspective,
    }
  }

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

    /**
     * Gets the list of Cameras that are imported with this model resource.
     * Only GLTF resource files support Camera information import as of now.
     */
    getCameraList(): Array<ModelResourceCamera | null> /* std::vector<ModelResourceCamera*> */
  }
}

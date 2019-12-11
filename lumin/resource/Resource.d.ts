declare module 'lumin' {
  namespace resources {

    /**
     * Query whether a resource of the given type derives from FileResource.
     *
     * @param resourceType type of the resource.
     * @return true if resources of the given type derive from FileResource.
     *
     * @priv none
     */
    function DerivesFromFileResource(resourceType: ResourceType): boolean
  }

  /**
   * All resources Derive from this Base Resource type
   *
   */
  class Resource {
    constructor()

    /**
     * Returns the Unique ID of this resource
     *
     * @return Resource ID
     *
     * @priv none
     */
    getResourceId(): bigint /* uint64_t */

    /**
     * Returns True if the Resource was successfully loaded
     *
     * Loading only happens on the server-side so this call is
     * only useful to the server
     *
     * @return TRUE = Successfully loaded
     *
     * @priv none
     */
    isResourceValid(): boolean

    /**
     * Returns the type of this resource
     *
     * @return Resource Type
     *
     * @priv none
     */
    getResourceType(): ResourceType

    /**
     * Gets the FileName Associated with this resource.
     *
     * @return Filename
     *
     * @priv none
     */
    getFileName(): string

    /**
     * Gets the base path of the resource.
     *
     * @return Base path
     *
     * @priv none
     */
    getBasePath(): string

    /**
     * Return a int that contains the result of loading this resource.
     *
     * @return int with the result value.
     */
    getLoadStatus(): resources.LoadStatus
  }
}

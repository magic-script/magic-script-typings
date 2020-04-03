declare module 'lumin' {
  namespace resources {
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

    /**
     * Protected/Copyrighted content, do not share with other clients
     *
     * @param value true if protected
     */
    setProtectedContent(value: boolean): void

    /**
     * Check if content is protected
     *
     * @return true if protected
     */
    isProtectedContent(): boolean
  }
}

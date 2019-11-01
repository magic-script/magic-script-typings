declare module 'lumin' {

  /**
   * Event indicating the result of loading a resource.
   */
  class ResourceEvent extends ServerEvent {
    constructor()

    /**
     * Get the ID for the resource.
     *
     * @return resource ID
     *
     * @priv none
     */
    getResourceId(): bigint /* uint64_t */

    /**
     * Get the result of loading the resource.
     *
     * @return Resource LoadStatus
     *
     * @priv none
     */
    getResult(): resources.LoadStatus
  }
}

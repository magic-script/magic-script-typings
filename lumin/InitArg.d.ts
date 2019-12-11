declare module 'lumin' {

  /**
   * Initialization argument for Lumin Runtime applications.
   */
  class InitArg {
    constructor()

    /**
     * Returns the URI string for this argument.
     *
     * @return the URI string.
     * @priv none
     */
    getUri(): string

    /**
     * Get the count of FileInfo objects in this argument.
     *
     * @return the count of FileInfo objects.
     * @priv none
     */
    getFileInfoCount(): number /* uint32_t */

    /**
     * Gets the FileInfo object at the specified index.
     *
     * @param index The index of the FileInfo object to return.
     * @return the FileInfo object or nullptr if out of bounds.
     * @priv none
     */
    getFileInfo(index: number /* uint32_t */): FileInfo
  }
}

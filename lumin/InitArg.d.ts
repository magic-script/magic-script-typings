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
     * Gets the map Args.
     *
     * @return ArgMap a map of the arguments.
     * @priv none
     */
    getArgs(): { [key:string]: string } /* std::unordered_map<std::string, std::string> */

    /**
     * Gets the Arg with the specified key.
     *
     * @param a_key The key of the arg pair to find and return.
     * @return Out parameter, the value of the Arg.
     * @priv none
     */
    getArg(a_key: string): string | null /* std::optional<std::string> */

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
    getFileInfo(index: number /* uint32_t */): FileInfo | null
  }
}

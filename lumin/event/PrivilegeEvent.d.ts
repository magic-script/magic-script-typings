declare module 'lumin' {

  /**
   * Event indicating a privilege request was granted or denied.
   */
  class PrivilegeEvent extends ServerEvent {
    constructor()

    /**
     * Get the privilege ID that was requested.
     *
     * @return Requested privilege ID
     */
    getPrivilegeId(): PrivilegeId

    /**
     * Get the privilege result (granted or denied).
     *
     * @return Privilege result
     */
    getPrivilegeResult(): PrivilegeResult
  }
}

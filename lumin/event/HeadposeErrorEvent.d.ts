declare module 'lumin' {

  /**
   * HeadposeEventData - Headpose error state changed events
   */
  class HeadposeErrorEvent extends ServerEvent {
    constructor()

    /**
    * Get the current headpose error (if any)
    *
    * @return the current headpose error
    */
    getErrorCode(): headtracking.Error
  }
}

declare module 'lumin' {

  /**
   * ConnectionsInvitationEventData - Video web timed text events
   */
  class ConnectionsInvitationEventData extends ServerEvent {
    constructor()

    /**
     * @return true if the user accepted the invite, false otherwise
     */
    didUserAccept(): boolean

    /**
     * @return the payload of the inviting application
     */
    getPayload(): string
  }
}

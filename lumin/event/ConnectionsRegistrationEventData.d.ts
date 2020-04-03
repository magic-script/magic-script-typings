declare module 'lumin' {
  enum ConnectionsCallResult {
    kNone,
    kOk,
    kPending,
    kTimeout,
    kLocked,
    kUnspecifiedFailure,
    kInvalidParam,
    kAllocFailed,
    kPrivilegeDenied,
    kNotImplemented,
    kMax,
  }

  /**
   * ConnectionsRegistrationEventData - Event for the state of registering for social invitations
   */
  class ConnectionsRegistrationEventData extends ServerEvent {
    constructor()

    /**
     * Get the result of the registration
     * @return kOk when successful and error otherwise
     */
    getResult(): ConnectionsCallResult
  }
}

declare module 'lumin' {

  /**
   * subscribe a listener to receive notifications for invitee status updates
   *
   * @requires SocialConnectionsInvitesAccess
   *
   * @param callable a callable to invoke with the notification
   * @return RequestStatus status of request's submission
   */
  function SubscribeInviteeStatusNotifications(callable: ((arg0: InviteeStatus) => void) | null /* std::function<void(InviteeStatus)> */): RequestStatus

  /**
   * unsubscribe from notifications for invitee status updates
   *
   * @requires SocialConnectionsInvitesAccess
   *
   * @return RequestStatus value
   */
  function UnsubscribeInviteeStatusNotifications(): RequestStatus
}

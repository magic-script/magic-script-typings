declare module 'lumin' {
  class InviteeStatus {
    constructor()

    /**
     * The user ID of the invitee
     */
    userID_: string;

    /**
     * The user name of the invitee
     */
    username_: string;

    /**
     * The avatar of the invitee
     */
    avatar_: string;

    /**
     * The delivery status of the invitee's invitation
     */
    invitationStatus_: InvitationDeliveryStatus;
  }
}

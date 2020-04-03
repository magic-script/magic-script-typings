declare module 'lumin' {
  class TaggedAttribute {
    constructor()
    tag: string;
    value: string;
  }

  /**
   * `value = -1`
   */
  const kInvalidRequestId: number /* int32_t */;

  /**
   * `value = 250`
   */
  const kDefaultFetchLimit: number /* int32_t */;
  enum RequestStatus {
    kNone,

    /**
     * `value = 1`
     */
    kSuccess,

    /**
     * `value = 1`
     */
    kSubmitted,
    kServiceUnavailableError,
    kServiceError,
    kNotImplemented,
    kIllegalState,
    kInvalidRequest,
    kUnregistered,
    kMissingPrivileges,
    kCompleted,
    kTimedOut,
    kRequestStatusSize,
  }
  enum ConnectionsSelectStatus {
    kNone,
    kFriendPickerStartFailed,
    kInvalidSelectionRequest,
    kSelectionCancelled,
    kSelectionConfirmed,
    kSelectionStatusSize,
  }
  enum UserStatus {
    kNone,

    /**
     * `value = 0b1`
     */
    kOnline,

    /**
     * `value = 0b10`
     */
    kBusy,

    /**
     * `value = 0b100`
     */
    kOffline,

    /**
     * `value = 4`
     */
    kMax,
  }
  enum RelationshipType {

    /**
     * self user
     *
     * `value = 0b0`
     */
    kNone,

    /**
     * a user which is following you
     *
     * `value = 0b1`
     */
    kFollower,

    /**
     * a user which is being followed by you
     *
     * `value = 0b10`
     */
    kFollowing,

    /**
     * a user which is both, following you and is being followed by you
     *
     * `value = 0b11`
     */
    kMutual,

    /**
     * a manually added user
     *
     * `value = 0b100`
     */
    kCustom,

    /**
     * a user which is blocked by you
     *
     * `value = 0b1000`
     */
    kBlocked,

    /**
     * self user
     *
     * `value = 0b10000`
     */
    kSelf,

    /**
     * `value = 7`
     */
    kMax,
  }
  enum ComponentMode {
    kNone,
    kSysUi,
    kLandscape,
    kMax,
  }
  enum QueryType {
    kNone,

    /**
     * `value = 1`
     */
    kFollowing,
    kFollowers,
    kMutualFollowers,
    kCustomContacts,
    kBlockedUsers,
    kRecommendations,
    kNearby,
    kQueryTypeSize,
  }
  enum FriendPickerPage {
    kNone,
    kConnectionsPicker,
    kJoinByCode,
    kMax,
  }
  enum InviteStatus {
    kNone,

    /**
     * `value = 1`
     */
    kInviteDispatched,
    kInvitePending,
    kInviteCancelled,
    kInviteDispatchFailed,
    kInviteFailedFriendPickerStart,
    kInviteStatusSize,
  }
  enum InvitationDeliveryStatus {
    kNone,
    kInvitationDeliveryStatus_Processing,
    kInvitationDeliveryStatus_Dispatched,
    kInvitationDeliveryStatus_Delivered,
    kInvitationDeliveryStatus_Joined,
    kInvitationDeliveryStatus_Failed,
    kInvitationDeliveryStatus_Size,
  }
  enum JoinRoomType {
    kNone,
    kPublic,
    kPrivate,
    kMax,
  }
}

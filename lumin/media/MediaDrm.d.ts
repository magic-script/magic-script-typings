declare module 'lumin' {
  class MediaDrm {
    constructor()
  };
  enum EventType {
    kDrmPluginEventProvisionRequired = 1,
    kDrmPluginEventKeyNeeded,
    kDrmPluginEventKeyExpired,
    kDrmPluginEventVendorDefined,
    kDrmPluginEventSessionReclaimed,
    kDrmPluginEventExpirationUpdate,
    kDrmPluginEventKeysChange,
  }
  enum KeyType {
    kKeyType_Offline,
    kKeyType_Streaming,
    kKeyType_Release,
  }
  enum KeyRequestType {
    kKeyRequestType_Unknown,
    kKeyRequestType_Initial,
    kKeyRequestType_Renewal,
    kKeyRequestType_Release,
  }
  enum KeyStatusType {
    kKeyStatusType_Usable,
    kKeyStatusType_Expired,
    kKeyStatusType_OutputNotAllowed,
    kKeyStatusType_StatusPending,
    kKeyStatusType_InternalError,
  }
}

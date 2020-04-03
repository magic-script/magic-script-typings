declare module 'lumin' {

  /**
   * @class MediaDrm
   * @brief MediaDrm can be used to obtain keys for decrypting protected media streams,
   * in conjunction with MediaCrypto.
   * The MediaDrm APIs are designed to support the ISO/IEC 23001-7: Common Encryption standard,
   * but may also be used to implement other encryption schemes.
   */
  class MediaDrm {
    constructor()
  }
  namespace MediaDrm {
    enum EventType {

      /**
       * `value = 1`
       */
      kDrmPluginEventProvisionRequired,
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

    /**
     * Enumerate KeyStatusTypes which indicate the state of a key
     */
    enum KeyStatusType {
      kKeyStatusType_Usable,
      kKeyStatusType_Expired,
      kKeyStatusType_OutputNotAllowed,
      kKeyStatusType_StatusPending,
      kKeyStatusType_InternalError,
    }
  }
}

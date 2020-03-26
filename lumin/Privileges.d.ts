declare module 'lumin' {

  /**
   * Privilege IDs that applications can request.
   */
  enum PrivilegeId {

    /**
     * `value = 0`
     */
    kInvalid,

    /**
     * `value = 13`
     */
    kAudioRecognizer,

    /**
     * `value = 18`
     */
    kBatteryInfo,

    /**
     * `value = 26`
     */
    kCameraCapture,

    /**
     * `value = 33`
     */
    kWorldReconstruction,

    /**
     * `value = 42`
     */
    kInAppPurchase,

    /**
     * `value = 49`
     */
    kAudioCaptureMic,

    /**
     * `value = 51`
     */
    kDrmCertificates,

    /**
     * `value = 52`
     */
    kOcclusion,

    /**
     * `value = 59`
     */
    kLowLatencyLightwear,

    /**
     * `value = 96`
     */
    kInternet,

    /**
     * `value = 113`
     */
    kIdentityRead,

    /**
     * `value = 120`
     */
    kBackgroundDownload,

    /**
     * `value = 121`
     */
    kBackgroundUpload,

    /**
     * `value = 129`
     */
    kMediaDrm,

    /**
     * `value = 130`
     */
    kMedia,

    /**
     * `value = 140`
     */
    kMediaMetadata,

    /**
     * `value = 150`
     */
    kPowerInfo,

    /**
     * `value = 171`
     */
    kLocalAreaNetwork,

    /**
     * `value = 173`
     */
    kVoiceInput,

    /**
     * `value = 175`
     */
    kDocuments,

    /**
     * `value = 192`
     */
    kConnectBackgroundMusicService,

    /**
     * `value = 193`
     */
    kRegisterBackgroundMusicService,

    /**
     * `value = 201`
     */
    kPwFoundObjRead,

    /**
     * `value = 201`
     */
    kPcfRead,

    /**
     * `value = 208`
     */
    kNormalNotificationsUsage,

    /**
     * `value = 218`
     */
    kMusicService,

    /**
     * `value = 263`
     */
    kControllerPose,

    /**
     * `value = 264`
     */
    kScreensProvider,

    /**
     * `value = 268`
     */
    kGesturesSubscribe,

    /**
     * `value = 269`
     */
    kGesturesConfig,

    /**
     * `value = 300`
     */
    kWebView,

    /**
     * `value = 315`
     */
    kHandMesh,

    /**
     * `value = 350`
     */
    kConnectionAccess,

    /**
     * `value = 351`
     */
    kConnectionAudioCaptureStreaming,

    /**
     * `value = 352`
     */
    kConnectionVideoCaptureStreaming,

    /**
     * `value = 381`
     */
    kSessionCapabilityAccess,
  }

  /**
   * The result of a privilege request.
   */
  enum PrivilegeResult {
    kInvalid,
    kGranted,
    kDenied,
  }
}

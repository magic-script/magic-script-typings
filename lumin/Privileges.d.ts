declare module 'lumin' {
  enum PrivilegeId {
    kInvalid = 0,
    kAudioRecognizer = 13,
    kBatteryInfo = 18,
    kCameraCapture = 26,
    kWorldReconstruction = 33,
    kInAppPurchase = 42,
    kAudioCaptureMic = 49,
    kDrmCertificates = 51,
    kOcclusion = 52,
    kLowLatencyLightwear = 59,
    kInternet = 96,
    kIdentityRead = 113,
    kBackgroundDownload = 120,
    kBackgroundUpload = 121,
    kMediaDrm = 129,
    kMedia = 130,
    kMediaMetadata = 140,
    kPowerInfo = 150,
    kLocalAreaNetwork = 171,
    kVoiceInput = 173,
    kDocuments = 175,
    kConnectBackgroundMusicService = 192,
    kRegisterBackgroundMusicService = 193,
    kPwFoundObjRead = 201,
    kNormalNotificationsUsage = 208,
    kMusicService = 218,
    kControllerPose = 263,
    kScreensProvider = 264,
    kGesturesSubscribe = 268,
    kGesturesConfig = 269,
    kWebView = 300,
  }
  enum PrivilegeResult {
    kInvalid,
    kGranted,
    kDenied,
  }
}

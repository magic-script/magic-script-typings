declare module 'lumin' {
  enum MediaError {
    kOK = 0,
    kErrorBase = -1000,
    kErrorAlreadyConnected = kErrorBase,
    kErrorNotConnected = kErrorBase-1,
    kErrorUnknownHost = kErrorBase-2,
    kErrorCannotConnect = kErrorBase-3,
    kErrorIo = kErrorBase-4,
    kErrorConnectionLost = kErrorBase-5,
    kErrorMalformed = kErrorBase-7,
    kErrorOutOfRange = kErrorBase-8,
    kErrorBufferTooSmall = kErrorBase-9,
    kErrorUnsupported = kErrorBase-10,
    kErrorEndOfStream = kErrorBase-11,
    kInfoFormatChanged = kErrorBase-12,
    kInfoDiscontinuity = kErrorBase-13,
    kInfoOutputBuffersChanged = kErrorBase-14,
    kErrorPermissionRevoked = kErrorBase-15,
    kErrorDrmBase = -2000,
    kErrorDrmUnknown = kErrorDrmBase,
    kErrorDrmNoLicense = kErrorDrmBase-1,
    kErrorDrmLicenseExpired = kErrorDrmBase-2,
    kErrorDrmSessionNotOpened = kErrorDrmBase-3,
    kErrorDrmDecryptUnitNotInitialized = kErrorDrmBase-4,
    kErrorDrmDecrypt = kErrorDrmBase-5,
    kErrorDrmCannotHandle = kErrorDrmBase-6,
    kErrorDrmTamperDetected = kErrorDrmBase-7,
    kErrorDrmNotProvisioned = kErrorDrmBase-8,
    kErrorDrmDeviceRevoked = kErrorDrmBase-9,
    kErrorDrmResourceBusy = kErrorDrmBase-10,
    kErrorDrmInsufficientOutputProtection = kErrorDrmBase-11,
    kErrorDrmLastUsedErrorCode = kErrorDrmBase-11,
    kErrorDrmVendorMax = kErrorDrmBase-500,
    kErrorDrmVendorMin = kErrorDrmBase-999,
    kErrorHeartbeatTerminateRequested = -3000,
    kErrorCodecMax = 0x9000FFFF,
    kErrorCodecMin = 0x80001000,
    kErrorUnsupportedAudioFormat = -19,
    kErrorTimedOut = -110,
    kErrorSystem = -2147483648,
  }

  /**
  *  @enum CodecActionCode
  *  @brief action codes for MediaCodecs that tell the upper layer and application
  *         the severity of any error..
  */
  enum CodecActionCode {
    kCodecActionCodeFatal,
    kCodecActionCodeTransient,
    kCodecActionCodeRecoverable,
  }
}

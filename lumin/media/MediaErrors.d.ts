declare module 'lumin' {
  enum MediaError {

    /**
     * `value = 0`
     */
    kOK,

    /**
     * `value = -1000`
     */
    kErrorBase,

    /**
     * `value = kErrorBase`
     */
    kErrorAlreadyConnected,

    /**
     * `value = kErrorBase-1`
     */
    kErrorNotConnected,

    /**
     * `value = kErrorBase-2`
     */
    kErrorUnknownHost,

    /**
     * `value = kErrorBase-3`
     */
    kErrorCannotConnect,

    /**
     * `value = kErrorBase-4`
     */
    kErrorIo,

    /**
     * `value = kErrorBase-5`
     */
    kErrorConnectionLost,

    /**
     * `value = kErrorBase-7`
     */
    kErrorMalformed,

    /**
     * `value = kErrorBase-8`
     */
    kErrorOutOfRange,

    /**
     * `value = kErrorBase-9`
     */
    kErrorBufferTooSmall,

    /**
     * `value = kErrorBase-10`
     */
    kErrorUnsupported,

    /**
     * `value = kErrorBase-11`
     */
    kErrorEndOfStream,

    /**
     * `value = kErrorBase-12`
     */
    kInfoFormatChanged,

    /**
     * `value = kErrorBase-13`
     */
    kInfoDiscontinuity,

    /**
     * `value = kErrorBase-14`
     */
    kInfoOutputBuffersChanged,

    /**
     * `value = kErrorBase-15`
     */
    kErrorPermissionRevoked,

    /**
     * `value = -2000`
     */
    kErrorDrmBase,

    /**
     * `value = kErrorDrmBase`
     */
    kErrorDrmUnknown,

    /**
     * `value = kErrorDrmBase-1`
     */
    kErrorDrmNoLicense,

    /**
     * `value = kErrorDrmBase-2`
     */
    kErrorDrmLicenseExpired,

    /**
     * `value = kErrorDrmBase-3`
     */
    kErrorDrmSessionNotOpened,

    /**
     * `value = kErrorDrmBase-4`
     */
    kErrorDrmDecryptUnitNotInitialized,

    /**
     * `value = kErrorDrmBase-5`
     */
    kErrorDrmDecrypt,

    /**
     * `value = kErrorDrmBase-6`
     */
    kErrorDrmCannotHandle,

    /**
     * `value = kErrorDrmBase-7`
     */
    kErrorDrmTamperDetected,

    /**
     * `value = kErrorDrmBase-8`
     */
    kErrorDrmNotProvisioned,

    /**
     * `value = kErrorDrmBase-9`
     */
    kErrorDrmDeviceRevoked,

    /**
     * `value = kErrorDrmBase-10`
     */
    kErrorDrmResourceBusy,

    /**
     * `value = kErrorDrmBase-11`
     */
    kErrorDrmInsufficientOutputProtection,

    /**
     * `value = kErrorDrmBase-11`
     */
    kErrorDrmLastUsedErrorCode,

    /**
     * `value = kErrorDrmBase-500`
     */
    kErrorDrmVendorMax,

    /**
     * `value = kErrorDrmBase-999`
     */
    kErrorDrmVendorMin,

    /**
     * `value = -3000`
     */
    kErrorHeartbeatTerminateRequested,

    /**
     * `value = 0x9000FFFF`
     */
    kErrorCodecMax,

    /**
     * `value = 0x80001000`
     */
    kErrorCodecMin,

    /**
     * `value = -19`
     */
    kErrorUnsupportedAudioFormat,

    /**
     * `value = -110`
     */
    kErrorTimedOut,

    /**
     * `value = -2147483648`
     */
    kErrorSystem,
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

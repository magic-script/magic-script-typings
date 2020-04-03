declare module 'lumin' {

  /**
   * Class used to retrieve track media format info
   */
  class MediaFormat {

    /**
     * `value = "aac-encoded-target-level"`
     */
    static readonly KEY_AAC_ENCODED_TARGET_LEVEL: string | null /* char* */;

    /**
     * `value = "aac-drc-boost-level"`
     */
    static readonly KEY_AAC_DRC_BOOST_FACTOR: string | null /* char* */;

    /**
     * `value = "aac-drc-cut-level"`
     */
    static readonly KEY_AAC_DRC_ATTENUATION_FACTOR: string | null /* char* */;

    /**
     * `value = "aac-drc-heavy-compression"`
     */
    static readonly KEY_AAC_DRC_HEAVY_COMPRESSION: string | null /* char* */;

    /**
     * `value = "aac-target-ref-level"`
     */
    static readonly KEY_AAC_DRC_TARGET_REFERENCE_LEVEL: string | null /* char* */;

    /**
     * `value = "aac-max-output-channel_count"`
     */
    static readonly KEY_AAC_MAX_OUTPUT_CHANNEL_COUNT: string | null /* char* */;

    /**
     * `value = "aac-profile"`
     */
    static readonly KEY_AAC_PROFILE: string | null /* char* */;

    /**
     * `value = "aac-sbr-mode"`
     */
    static readonly KEY_AAC_SBR_MODE: string | null /* char* */;

    /**
     * `value = "bitrate"`
     */
    static readonly KEY_BIT_RATE: string | null /* char* */;

    /**
     * `value = "capture-rate"`
     */
    static readonly KEY_CAPTURE_RATE: string | null /* char* */;

    /**
     * `value = "channel-count"`
     */
    static readonly KEY_CHANNEL_COUNT: string | null /* char* */;

    /**
     * `value = "channel-mask"`
     */
    static readonly KEY_CHANNEL_MASK: string | null /* char* */;

    /**
     * `value = "color-format"`
     */
    static readonly KEY_COLOR_FORMAT: string | null /* char* */;

    /**
     * `value = "durationUs"`
     */
    static readonly KEY_DURATION: string | null /* char* */;

    /**
     * `value = "flac-compression-level"`
     */
    static readonly KEY_FLAC_COMPRESSION_LEVEL: string | null /* char* */;

    /**
     * `value = "frame-rate"`
     */
    static readonly KEY_FRAME_RATE: string | null /* char* */;

    /**
     * `value = "height"`
     */
    static readonly KEY_HEIGHT: string | null /* char* */;

    /**
     * `value = "i-frame-interval"`
     */
    static readonly KEY_I_FRAME_INTERVAL: string | null /* char* */;

    /**
     * `value = "intra-refresh-period"`
     */
    static readonly KEY_INTRA_REFRESH_PERIOD: string | null /* char* */;

    /**
     * `value = "is-adts"`
     */
    static readonly KEY_IS_ADTS: string | null /* char* */;

    /**
     * `value = "is-autoselect"`
     */
    static readonly KEY_IS_AUTOSELECT: string | null /* char* */;

    /**
     * `value = "is-default"`
     */
    static readonly KEY_IS_DEFAULT: string | null /* char* */;

    /**
     * `value = "is-forced-subtitle"`
     */
    static readonly KEY_IS_FORCED_SUBTITLE: string | null /* char* */;

    /**
     * `value = "language"`
     */
    static readonly KEY_LANGUAGE: string | null /* char* */;

    /**
     * `value = "max-height"`
     */
    static readonly KEY_MAX_HEIGHT: string | null /* char* */;

    /**
     * `value = "max-input-size"`
     */
    static readonly KEY_MAX_INPUT_SIZE: string | null /* char* */;

    /**
     * `value = "max-width"`
     */
    static readonly KEY_MAX_WIDTH: string | null /* char* */;

    /**
     * `value = "mime"`
     */
    static readonly KEY_MIME: string | null /* char* */;

    /**
     * `value = "pcm-encoding"`
     */
    static readonly KEY_PCM_ENCODING: string | null /* char* */;

    /**
     * `value = "push-blank-buffers-on-shutdown"`
     */
    static readonly KEY_PUSH_BLANK_BUFFERS_ON_STOP: string | null /* char* */;

    /**
     * `value = "repeat-previous-frame-after"`
     */
    static readonly KEY_REPEAT_PREVIOUS_FRAME_AFTER: string | null /* char* */;

    /**
     * `value = "sample-rate"`
     */
    static readonly KEY_SAMPLE_RATE: string | null /* char* */;

    /**
     * `value = "bits-persample"`
     */
    static readonly KEY_BIT_DEPTH: string | null /* char* */;

    /**
     * `value = "stride"`
     */
    static readonly KEY_STRIDE: string | null /* char* */;

    /**
     * `value = "ts-schema"`
     */
    static readonly KEY_TEMPORAL_LAYERING: string | null /* char* */;

    /**
     * `value = "width"`
     */
    static readonly KEY_WIDTH: string | null /* char* */;

    /**
     * `value = "crop-left"`
     */
    static readonly KEY_CROP_LEFT: string | null /* char* */;

    /**
     * `value = "crop-right"`
     */
    static readonly KEY_CROP_RIGHT: string | null /* char* */;

    /**
     * `value = "crop-bottom"`
     */
    static readonly KEY_CROP_BOTTOM: string | null /* char* */;

    /**
     * `value = "crop-top"`
     */
    static readonly KEY_CROP_TOP: string | null /* char* */;

    /**
     * Human readable representation of the format.
     */
    toString(): string
    setInt32(name: string | null /* char* */, value: number /* int32_t */): void
    setInt64(name: string | null /* char* */, value: bigint /* int64_t */): void
    setFloat(name: string | null /* char* */, value: number /* float */): void
    setSize(name: string | null /* char* */, value: number /* size_t */): void
    setString(name: string | null /* char* */, value: string): void
    setBuffer(name: string | null /* char* */, buffer: Array<number> /* std::vector<uint8_t> */): void
  }
}

declare module 'lumin' {

  /**
   * Class used to retrieve track media format info
   */
  class MediaFormat {

    /**
     * `value = "aac-encoded-target-level"`
     */
    static readonly KEY_AAC_ENCODED_TARGET_LEVEL: string;

    /**
     * `value = "aac-drc-boost-level"`
     */
    static readonly KEY_AAC_DRC_BOOST_FACTOR: string;

    /**
     * `value = "aac-drc-cut-level"`
     */
    static readonly KEY_AAC_DRC_ATTENUATION_FACTOR: string;

    /**
     * `value = "aac-drc-heavy-compression"`
     */
    static readonly KEY_AAC_DRC_HEAVY_COMPRESSION: string;

    /**
     * `value = "aac-target-ref-level"`
     */
    static readonly KEY_AAC_DRC_TARGET_REFERENCE_LEVEL: string;

    /**
     * `value = "aac-max-output-channel_count"`
     */
    static readonly KEY_AAC_MAX_OUTPUT_CHANNEL_COUNT: string;

    /**
     * `value = "aac-profile"`
     */
    static readonly KEY_AAC_PROFILE: string;

    /**
     * `value = "aac-sbr-mode"`
     */
    static readonly KEY_AAC_SBR_MODE: string;

    /**
     * `value = "bitrate"`
     */
    static readonly KEY_BIT_RATE: string;

    /**
     * `value = "capture-rate"`
     */
    static readonly KEY_CAPTURE_RATE: string;

    /**
     * `value = "channel-count"`
     */
    static readonly KEY_CHANNEL_COUNT: string;

    /**
     * `value = "channel-mask"`
     */
    static readonly KEY_CHANNEL_MASK: string;

    /**
     * `value = "color-format"`
     */
    static readonly KEY_COLOR_FORMAT: string;

    /**
     * `value = "durationUs"`
     */
    static readonly KEY_DURATION: string;

    /**
     * `value = "flac-compression-level"`
     */
    static readonly KEY_FLAC_COMPRESSION_LEVEL: string;

    /**
     * `value = "frame-rate"`
     */
    static readonly KEY_FRAME_RATE: string;

    /**
     * `value = "height"`
     */
    static readonly KEY_HEIGHT: string;

    /**
     * `value = "i-frame-interval"`
     */
    static readonly KEY_I_FRAME_INTERVAL: string;

    /**
     * `value = "intra-refresh-period"`
     */
    static readonly KEY_INTRA_REFRESH_PERIOD: string;

    /**
     * `value = "is-adts"`
     */
    static readonly KEY_IS_ADTS: string;

    /**
     * `value = "is-autoselect"`
     */
    static readonly KEY_IS_AUTOSELECT: string;

    /**
     * `value = "is-default"`
     */
    static readonly KEY_IS_DEFAULT: string;

    /**
     * `value = "is-forced-subtitle"`
     */
    static readonly KEY_IS_FORCED_SUBTITLE: string;

    /**
     * `value = "language"`
     */
    static readonly KEY_LANGUAGE: string;

    /**
     * `value = "max-height"`
     */
    static readonly KEY_MAX_HEIGHT: string;

    /**
     * `value = "max-input-size"`
     */
    static readonly KEY_MAX_INPUT_SIZE: string;

    /**
     * `value = "max-width"`
     */
    static readonly KEY_MAX_WIDTH: string;

    /**
     * `value = "mime"`
     */
    static readonly KEY_MIME: string;

    /**
     * `value = "pcm-encoding"`
     */
    static readonly KEY_PCM_ENCODING: string;

    /**
     * `value = "push-blank-buffers-on-shutdown"`
     */
    static readonly KEY_PUSH_BLANK_BUFFERS_ON_STOP: string;

    /**
     * `value = "repeat-previous-frame-after"`
     */
    static readonly KEY_REPEAT_PREVIOUS_FRAME_AFTER: string;

    /**
     * `value = "sample-rate"`
     */
    static readonly KEY_SAMPLE_RATE: string;

    /**
     * `value = "bits-persample"`
     */
    static readonly KEY_BIT_DEPTH: string;

    /**
     * `value = "stride"`
     */
    static readonly KEY_STRIDE: string;

    /**
     * `value = "ts-schema"`
     */
    static readonly KEY_TEMPORAL_LAYERING: string;

    /**
     * `value = "width"`
     */
    static readonly KEY_WIDTH: string;

    /**
     * `value = "crop-left"`
     */
    static readonly KEY_CROP_LEFT: string;

    /**
     * `value = "crop-right"`
     */
    static readonly KEY_CROP_RIGHT: string;

    /**
     * `value = "crop-bottom"`
     */
    static readonly KEY_CROP_BOTTOM: string;

    /**
     * `value = "crop-top"`
     */
    static readonly KEY_CROP_TOP: string;

    /**
     * Human readable representation of the format.
     */
    toString(): string
    setInt32(name: string, value: number /* int32_t */): void
    setInt64(name: string, value: bigint /* int64_t */): void
    setFloat(name: string, value: number /* float */): void
    setSize(name: string, value: number /* size_t */): void
    setString(name: string, value: string): void
    setBuffer(name: string, buffer: Array<number> /* std::vector<uint8_t> */): void
  }
}

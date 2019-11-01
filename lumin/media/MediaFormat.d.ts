declare module 'lumin' {

  /**
   * Class used to retrieve track media format info
   */
  class MediaFormat {

    /**
     * `value = "aac-encoded-target-level"`
     */
    readonly KEY_AAC_ENCODED_TARGET_LEVEL: string;

    /**
     * `value = "aac-drc-boost-level"`
     */
    readonly KEY_AAC_DRC_BOOST_FACTOR: string;

    /**
     * `value = "aac-drc-cut-level"`
     */
    readonly KEY_AAC_DRC_ATTENUATION_FACTOR: string;

    /**
     * `value = "aac-drc-heavy-compression"`
     */
    readonly KEY_AAC_DRC_HEAVY_COMPRESSION: string;

    /**
     * `value = "aac-target-ref-level"`
     */
    readonly KEY_AAC_DRC_TARGET_REFERENCE_LEVEL: string;

    /**
     * `value = "aac-max-output-channel_count"`
     */
    readonly KEY_AAC_MAX_OUTPUT_CHANNEL_COUNT: string;

    /**
     * `value = "aac-profile"`
     */
    readonly KEY_AAC_PROFILE: string;

    /**
     * `value = "aac-sbr-mode"`
     */
    readonly KEY_AAC_SBR_MODE: string;

    /**
     * `value = "bitrate"`
     */
    readonly KEY_BIT_RATE: string;

    /**
     * `value = "capture-rate"`
     */
    readonly KEY_CAPTURE_RATE: string;

    /**
     * `value = "channel-count"`
     */
    readonly KEY_CHANNEL_COUNT: string;

    /**
     * `value = "channel-mask"`
     */
    readonly KEY_CHANNEL_MASK: string;

    /**
     * `value = "color-format"`
     */
    readonly KEY_COLOR_FORMAT: string;

    /**
     * `value = "durationUs"`
     */
    readonly KEY_DURATION: string;

    /**
     * `value = "flac-compression-level"`
     */
    readonly KEY_FLAC_COMPRESSION_LEVEL: string;

    /**
     * `value = "frame-rate"`
     */
    readonly KEY_FRAME_RATE: string;

    /**
     * `value = "height"`
     */
    readonly KEY_HEIGHT: string;

    /**
     * `value = "i-frame-interval"`
     */
    readonly KEY_I_FRAME_INTERVAL: string;

    /**
     * `value = "intra-refresh-period"`
     */
    readonly KEY_INTRA_REFRESH_PERIOD: string;

    /**
     * `value = "is-adts"`
     */
    readonly KEY_IS_ADTS: string;

    /**
     * `value = "is-autoselect"`
     */
    readonly KEY_IS_AUTOSELECT: string;

    /**
     * `value = "is-default"`
     */
    readonly KEY_IS_DEFAULT: string;

    /**
     * `value = "is-forced-subtitle"`
     */
    readonly KEY_IS_FORCED_SUBTITLE: string;

    /**
     * `value = "language"`
     */
    readonly KEY_LANGUAGE: string;

    /**
     * `value = "max-height"`
     */
    readonly KEY_MAX_HEIGHT: string;

    /**
     * `value = "max-input-size"`
     */
    readonly KEY_MAX_INPUT_SIZE: string;

    /**
     * `value = "max-width"`
     */
    readonly KEY_MAX_WIDTH: string;

    /**
     * `value = "mime"`
     */
    readonly KEY_MIME: string;

    /**
     * `value = "pcm-encoding"`
     */
    readonly KEY_PCM_ENCODING: string;

    /**
     * `value = "push-blank-buffers-on-shutdown"`
     */
    readonly KEY_PUSH_BLANK_BUFFERS_ON_STOP: string;

    /**
     * `value = "repeat-previous-frame-after"`
     */
    readonly KEY_REPEAT_PREVIOUS_FRAME_AFTER: string;

    /**
     * `value = "sample-rate"`
     */
    readonly KEY_SAMPLE_RATE: string;

    /**
     * `value = "bits-persample"`
     */
    readonly KEY_BIT_DEPTH: string;

    /**
     * `value = "stride"`
     */
    readonly KEY_STRIDE: string;

    /**
     * `value = "ts-schema"`
     */
    readonly KEY_TEMPORAL_LAYERING: string;

    /**
     * `value = "width"`
     */
    readonly KEY_WIDTH: string;

    /**
     * `value = "crop-left"`
     */
    readonly KEY_CROP_LEFT: string;

    /**
     * `value = "crop-right"`
     */
    readonly KEY_CROP_RIGHT: string;

    /**
     * `value = "crop-bottom"`
     */
    readonly KEY_CROP_BOTTOM: string;

    /**
     * `value = "crop-top"`
     */
    readonly KEY_CROP_TOP: string;

    /**
     * Human readable representation of the format.
     */
    toString(): string
    setInt32(name: string, value: number): void
    setInt64(name: string, value: bigint /* int64_t */): void
    setFloat(name: string, value: number): void
    setSize(name: string, value: number): void
    setString(name: string, value: string): void
    setBuffer(name: string, buffer: Array<number> /* std::vector */): void
  }
}

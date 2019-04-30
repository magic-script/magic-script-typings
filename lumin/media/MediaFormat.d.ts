declare module 'lumin' {
  class MediaFormat {
    readonly KEY_AAC_ENCODED_TARGET_LEVEL: string = "aac-encoded-target-level";
    readonly KEY_AAC_DRC_BOOST_FACTOR: string = "aac-drc-boost-level";
    readonly KEY_AAC_DRC_ATTENUATION_FACTOR: string = "aac-drc-cut-level";
    readonly KEY_AAC_DRC_HEAVY_COMPRESSION: string = "aac-drc-heavy-compression";
    readonly KEY_AAC_DRC_TARGET_REFERENCE_LEVEL: string = "aac-target-ref-level";
    readonly KEY_AAC_MAX_OUTPUT_CHANNEL_COUNT: string = "aac-max-output-channel_count";
    readonly KEY_AAC_PROFILE: string = "aac-profile";
    readonly KEY_AAC_SBR_MODE: string = "aac-sbr-mode";
    readonly KEY_BIT_RATE: string = "bitrate";
    readonly KEY_CAPTURE_RATE: string = "capture-rate";
    readonly KEY_CHANNEL_COUNT: string = "channel-count";
    readonly KEY_CHANNEL_MASK: string = "channel-mask";
    readonly KEY_COLOR_FORMAT: string = "color-format";
    readonly KEY_DURATION: string = "durationUs";
    readonly KEY_FLAC_COMPRESSION_LEVEL: string = "flac-compression-level";
    readonly KEY_FRAME_RATE: string = "frame-rate";
    readonly KEY_HEIGHT: string = "height";
    readonly KEY_I_FRAME_INTERVAL: string = "i-frame-interval";
    readonly KEY_INTRA_REFRESH_PERIOD: string = "intra-refresh-period";
    readonly KEY_IS_ADTS: string = "is-adts";
    readonly KEY_IS_AUTOSELECT: string = "is-autoselect";
    readonly KEY_IS_DEFAULT: string = "is-default";
    readonly KEY_IS_FORCED_SUBTITLE: string = "is-forced-subtitle";
    readonly KEY_LANGUAGE: string = "language";
    readonly KEY_MAX_HEIGHT: string = "max-height";
    readonly KEY_MAX_INPUT_SIZE: string = "max-input-size";
    readonly KEY_MAX_WIDTH: string = "max-width";
    readonly KEY_MIME: string = "mime";
    readonly KEY_PCM_ENCODING: string = "pcm-encoding";
    readonly KEY_PUSH_BLANK_BUFFERS_ON_STOP: string = "push-blank-buffers-on-shutdown";
    readonly KEY_REPEAT_PREVIOUS_FRAME_AFTER: string = "repeat-previous-frame-after";
    readonly KEY_SAMPLE_RATE: string = "sample-rate";
    readonly KEY_BIT_DEPTH: string = "bits-persample";
    readonly KEY_STRIDE: string = "stride";
    readonly KEY_TEMPORAL_LAYERING: string = "ts-schema";
    readonly KEY_WIDTH: string = "width";
    readonly KEY_CROP_LEFT: string = "crop-left";
    readonly KEY_CROP_RIGHT: string = "crop-right";
    readonly KEY_CROP_BOTTOM: string = "crop-bottom";
    readonly KEY_CROP_TOP: string = "crop-top";
    toString(): string
    setInt32(name: string, value: number): void
    setInt64(name: string, value: number): void
    setFloat(name: string, value: number): void
    setSize(name: string, value: number): void
    setString(name: string, value: string): void
    setBuffer(name: string, buffer: Array<number> /* std::vector */): void
  };
}

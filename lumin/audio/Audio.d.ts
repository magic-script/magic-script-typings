declare module 'lumin' {

  /**
   * `value = 0n`
   */
  const INVALID_AUDIO_ID: bigint /* uint64_t */;

  /**
   * `value = 8`
   */
  const kMaxAudioChannels: number;

  /**
   * An audio clip can be in three states, stopped, playing or paused.
   * Upon creating new audio clip it's in stopped state.
   */
  enum AudioState {

    /**
     * `value = 0`
     */
    kInvalidAudioState,

    /**
     *1
     */
    kStopped,

    /**
     *2
     */
    kPlaying,
    kPaused,
  }

  /**
   * Audio event types.
   */
  enum AudioEventType {

    /**
     * `value = 0`
     */
    kInvalidAudioEvent,

    /**
     * Fires when reached end of the audio playback.
     */
    kPlayEnd,

    /**
     * If the audio is in looping mode, the event fires at the end of each loop.
     */
    kPlayLooped,

    /**
     * Audio volume is muted by system.
     */
    kMutedBySystem,

    /**
     * Audio volume is un-muted by system.
     */
    kUnmutedBySystem,

    /**
     * Ducked by system.
     */
    kDuckedBySystem,
    kUnduckedBySystem,
  }
  class SpatialSoundDistanceProperties {
    min_distance: number;
    max_distance: number;
    rolloff_factor: number;
    constructor()
  }
  class SpatialSoundRadiationProperties {
    inner_angle: number;
    outer_angle: number;
    outer_gain: number;
    outer_gain_hf: number;
    constructor()
  }
  class SpatialSoundSendLevels {
    gain: number;
    gain_lf: number;
    gain_mf: number;
    gain_hf: number;
    constructor()
    toString(): string
    fromString(a_str: string): boolean
  }
  enum AudioSampleFormat {
    Integer,
    Float,
  }
  class AudioBufferFormat {
    channel_count: number;
    samples_per_second: number;
    bits_per_sample: number;
    valid_bits_per_sample: number;
    sample_format: AudioSampleFormat;
    reserved: number;
    constructor()
  }

  /**
   * System Sound Enums.
   */
  enum SystemSoundEnum {

    /**
     * `value = 0`
     */
    kInvalid,
    kHover,
    kSelect_01,
    kSelect_02,
    kHover_Small,
    kSelect_Small,
    kDropdown_Expand,
    kToggle_On,
    kToggle_Off,
    kSwitch_On,
    kSwitch_Off,
    kSlider_Grab,
    kSlider_Drop,
    kDial_Grab,
    kDial_Drop,
    kCheckbox_On,
    kCheckbox_Off,
    kError,
    kBack,
    kNext,
    kSettings,
    kAdd,
    kEdit,
    kDelete,
  }
}

declare module 'lumin' {

  /**
   * `value = 0n`
   */
  const INVALID_AUDIO_ID: bigint /* uint64_t */;

  /**
   * `value = 8`
   */
  const kMaxAudioChannels: number /* uint8_t */;

  /**
   * An audio clip can be in three states, stopped, playing or paused.
   * Upon creating new audio clip it's in stopped state.
   */
  enum AudioState {

    /**
     * `value = 0`
     */
    kInvalidAudioState,
    kStopped,
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

    /** Fires when reached end of the audio playback. */
    kPlayEnd,

    /** If the audio is in looping mode, the event fires at the end of each loop. */
    kPlayLooped,

    /** Audio volume is muted by system. */
    kMutedBySystem,

    /** Audio volume is un-muted by system. */
    kUnmutedBySystem,

    /** Ducked by system. */
    kDuckedBySystem,
    kUnduckedBySystem,
  }
  class SpatialSoundDistanceProperties {
    min_distance: number /* float */;
    max_distance: number /* float */;
    rolloff_factor: number /* float */;
    constructor()
  }
  class SpatialSoundRadiationProperties {
    inner_angle: number /* float */;
    outer_angle: number /* float */;
    outer_gain: number /* float */;
    outer_gain_hf: number /* float */;
    constructor()
  }
  class SpatialSoundSendLevels {
    gain: number /* float */;
    gain_lf: number /* float */;
    gain_mf: number /* float */;
    gain_hf: number /* float */;
    constructor()
    toString(): string
    fromString(a_str: string): boolean
  }
  enum AudioSampleFormat {
    Integer,
    Float,
  }

  /**
   * Types of audio output devices.
   */
  enum AudioOutputDevice {

    /** Built-in speakers in the wearable. */
    AudioOutputDevice_Wearable,
    AudioOutputDevice_AnalogJack,
  }
  class AudioBufferFormat {
    channel_count: number /* uint32_t */;
    samples_per_second: number /* uint32_t */;
    bits_per_sample: number /* uint32_t */;
    valid_bits_per_sample: number /* uint32_t */;
    sample_format: AudioSampleFormat;
    reserved: number /* uint32_t */;
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

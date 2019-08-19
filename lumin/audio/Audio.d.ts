declare module 'lumin' {
  const INVALID_AUDIO_ID: BigInt /* uint64_t */ = 0n;
  const kMaxAudioChannels: number = 8;
  enum AudioState {
    kInvalidAudioState = 0,
    kStopped,
    kPlaying,
    kPaused,
  }
  enum AudioEventType {
    kInvalidAudioEvent = 0,
    kPlayEnd,
    kPlayLooped,
    kMutedBySystem,
    kUnmutedBySystem,
    kDuckedBySystem,
    kUnduckedBySystem,
  }
  class SpatialSoundDistanceProperties {
    min_distance: number;
    max_distance: number;
    rolloff_factor: number;
    constructor()
  };
  class SpatialSoundRadiationProperties {
    inner_angle: number;
    outer_angle: number;
    outer_gain: number;
    outer_gain_hf: number;
    constructor()
  };
  class SpatialSoundSendLevels {
    gain: number;
    gain_lf: number;
    gain_mf: number;
    gain_hf: number;
    constructor()
    toString(): string
    fromString(a_str: string): boolean
  };
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
  };
  enum SystemSoundEnum {
    kInvalid = 0,
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

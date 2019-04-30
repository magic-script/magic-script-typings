declare module 'lumin' {
  const INVALID_AUDIO_ID: number = 0;
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
}

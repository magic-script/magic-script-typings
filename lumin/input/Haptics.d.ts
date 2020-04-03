declare module 'lumin' {

  /**
   * A fully custom LED pattern.
   */
  class LedArcPattern {
    start_angle_: number /* float */;
    end_angle_: number /* float */;
    start_gradient_: number /* float */;
    end_gradient_: number /* float */;
    rgb_start_: Array<number> /* std::vector<uint32_t> */;
    rgb_end_: Array<number> /* std::vector<uint32_t> */;
    alpha_begin_: Array<number> /* std::vector<uint32_t> */;
    alpha_end_: Array<number> /* std::vector<uint32_t> */;
    flags_: number /* uint32_t */;

    /**
     * Arc animation fields
     */
    color_change_duration_: number /* int32_t */;
    alpha_change_duration_: number /* int32_t */;
    arc_shrink_angle_: number /* float */;
    arc_shrink_duration_: number /* int32_t */;
    constructor()
    equals(other: LedArcPattern): boolean
  }

  /**
   * A customizable built-in LED pattern.
   */
  class LedInbuiltPattern {
    patterns_: Array<haptics.LedPattern> /* std::vector<haptics::LedPattern> */;
    color_: haptics.LedColor;
    led_effect_: haptics.LedEffect;
    led_effect_speed_: haptics.LedEffectSpeed;
    constructor()
    equals(other: LedInbuiltPattern): boolean
  }

  /**
   * A vibration pattern for the Control.
   */
  class VibeHapticPattern {
    pattern_: haptics.VibePattern;
    intensity_: haptics.VibeIntensity;
    num_pulse_: number /* int32_t */;
    pulse_width_: number /* int32_t */;
    constructor()
    equals(other: VibeHapticPattern): boolean
  }

  /**
   * Top-level haptics structure that may cortain custom or built-in LED patterns
   * as well as vibration patterns for the Control.
   */
  class HapticInfo {
    haptic_: haptics.Type;
    is_custom_led_pattern_: boolean;
    duration_: number /* int32_t */;
    vibe_pattern_: VibeHapticPattern;
    inbuilt_pattern_: LedInbuiltPattern;
    led_arc_patterns_: Array<LedArcPattern> /* std::vector<LedArcPattern> */;
    constructor()
    equals(other: HapticInfo): boolean
  }
}

declare module 'lumin' {

  /**
   * A fully custom LED pattern.
   */
  class LedArcPattern {
    start_angle_: number;
    end_angle_: number;
    start_gradient_: number;
    end_gradient_: number;
    rgb_start_: Array<number> /* std::vector */;
    rgb_end_: Array<number> /* std::vector */;
    alpha_begin_: Array<number> /* std::vector */;
    alpha_end_: Array<number> /* std::vector */;
    flags_: number;

    /**
     * Arc animation fields
     */
    color_change_duration_: number;
    alpha_change_duration_: number;
    arc_shrink_angle_: number;
    arc_shrink_duration_: number;
    constructor()
    equals(other: LedArcPattern): boolean
  };

  /**
   * A customizable built-in LED pattern.
   */
  class LedInbuiltPattern {
    patterns_: Array<haptics.LedPattern> /* std::vector */;
    color_: haptics.LedColor;
    led_effect_: haptics.LedEffect;
    led_effect_speed_: haptics.LedEffectSpeed;
    constructor()
    equals(other: LedInbuiltPattern): boolean
  };

  /**
   * A vibration pattern for the Control.
   */
  class VibeHapticPattern {
    pattern_: haptics.VibePattern;
    intensity_: haptics.VibeIntensity;
    num_pulse_: number;
    pulse_width_: number;
    constructor()
    equals(other: VibeHapticPattern): boolean
  };

  /**
   * Top-level haptics structure that may cortain custom or built-in LED patterns
   * as well as vibration patterns for the Control.
   */
  class HapticInfo {
    haptic_: haptics.Type;
    is_custom_led_pattern_: boolean;
    duration_: number;
    vibe_pattern_: VibeHapticPattern;
    inbuilt_pattern_: LedInbuiltPattern;
    led_arc_patterns_: Array<LedArcPattern> /* std::vector */;
    constructor()
    equals(other: HapticInfo): boolean
  };
}

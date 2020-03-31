declare module 'lumin' {

  /**
   * `value = 60.0`
   */
  const MAX_CLIENT_FPS: number /* float */;

  /**
   * `value = 1.0/MAX_CLIENT_FPS`
   */
  const FPS_DELTA: number /* float */;

  /**
   * `value = 0n`
   */
  const INVALID_NODE_ID: bigint /* uint64_t */;

  /**
   * `value = 0n`
   */
  const INVALID_PRISM_ID: bigint /* uint64_t */;

  /**
   * `value = 0n`
   */
  const INVALID_RESOURCE_ID: bigint /* uint64_t */;

  /**
   * `value = 0n`
   */
  const INVALID_SESSION_ID: bigint /* uint64_t */;

  /**
   * `value = 0n`
   */
  const INVALID_PHYSICS_ID: bigint /* uint64_t */;

  /**
   * `value = -1`
   */
  const INVALID_CONTROL_ID: number /* int32_t */;

  /**
   * `value = -1`
   */
  const INVALID_DEVICE_ID: number /* int32_t */;

  /**
   * PrismType Indicates the type of Bound Volume
   */
  enum PrismType {

    /**
     * `value = 0`
     */
    kWorld,
    kCamera,
  }

  /**
   * RayCastEventType Indicates the type of Raycast event for Volumes or Nodes,
   * and whether it involves Head, Control, or Cursor raycasts.
   */
  enum RayCastEventType {

    /**
     * `value = 0`
     */
    kInvalid,
    kVolumeOnHeadEnter,
    kVolumeOnHeadExit,
    kVolumeOnHeadMove,
    kVolumeOnControlEnter,
    kVolumeOnControlExit,
    kVolumeOnControlMove,
    kNodeOnHeadEnter,
    kNodeOnHeadExit,
    kNodeOnHeadMove,
    kNodeOnControlEnter,
    kNodeOnControlExit,
    kNodeOnControlMove,
    kNodeOnCursorEnter,
    kNodeOnCursorExit,
    kNodeOnCursorMove,
  }

  /**
   * Used to filter types of planes when doing a plane cast.
   */
  enum PlanecastFlags {

    /**
     * Include planes whose normal is perpendicular to gravity.
     *
     * `value = 1<<0`
     */
    kVertical,

    /**
     * Include planes whose normal is parallel to gravity.
     *
     * `value = 1<<1`
     */
    kHorizontal,

    /**
     * Include planes with arbitrary normals.
     *
     * `value = 1<<2`
     */
    kArbitrary,

    /**
     * For non-horizontal planes, setting this flag will result in the
     * top of the plane rectangle being perpendicular to gravity.
     *
     * `value = 1<<3`
     */
    kOrientToGravity,

    /**
     * If this flag is set, inner planes will be returned; if it is not
     * set, outer planes will be returned.
     *
     * `value = 1<<4`
     */
    kFlagInner,

    /**
     * Instructs the plane system to ignore holes in planar surfaces.
     *
     * `value = 1<<5`
     */
    kIgnoreHoles,

    /**
     * Include planes tagged as ceiling.
     *
     * `value = 1<<6`
     */
    kCeiling,

    /**
     * Include planes tagged as floor.
     *
     * `value = 1<<7`
     */
    kFloor,

    /**
     * Include planes tagged as wall.
     *
     * `value = 1<<8`
     */
    kWall,

    /**
     * `value = kVertical|kHorizontal|kArbitrary`
     */
    kAllOrientations,

    /**
     * `value = kCeiling|kFloor|kWall`
     */
    kAllTypes,
  }

  /**
   * Hand Gestures for Tracking
   */
  enum HandGestureFlags {

    /**
     * `value = 1<<0`
     */
    kHandFinger,

    /**
     * `value = 1<<1`
     */
    kHandFist,

    /**
     * `value = 1<<2`
     */
    kHandPinch,

    /**
     * `value = 1<<3`
     */
    kHandThumb,

    /**
     * `value = 1<<4`
     */
    kHandL,

    /**
     * `value = 1<<5`
     */
    kHandOpenHandBack,

    /**
     * `value = 1<<6`
     */
    kHandOk,

    /**
     * `value = 1<<7`
     */
    kHandC,

    /**
     * `value = 1<<8`
     */
    kHandTrackingGestureUp,

    /**
     * `value = 1<<9`
     */
    kHandTrackingGestureDown,

    /**
     * `value = 1<<10`
     */
    kHandDynamicVerticalWag,

    /**
     * `value = 1<<11`
     */
    kHandDynamicHorizontalWag,

    /**
     * `value = 1<<12`
     */
    kHandDynamicClosingHand,

    /**
     * `value = 1<<13`
     */
    kHandDynamicThumbsUp,

    /**
     * `value = 1<<14`
     */
    kHandDynamicThumbsDown,

    /**
     * `value = 1<<15`
     */
    kHandNoPose,
  }
  enum DeviceGestureFlags {

    /**
     *use this tap for MCA
     *
     * `value = 1<<0`
     */
    kDeviceTap,

    /**
     * `value = 1<<1`
     */
    kDeviceHardTap,

    /**
     * `value = 1<<2`
     */
    kDeviceSecondaryHardTap,

    /**
     * `value = 1<<3`
     */
    kDeviceForcePress,

    /**
     * `value = 1<<4`
     */
    kDeviceHoldPress,

    /**
     * `value = 1<<5`
     */
    kDeviceEdgeTap,

    /**
     * `value = 1<<6`
     */
    kDeviceEdgeHardTap,

    /**
     * `value = 1<<7`
     */
    kDeviceEdgeForcePress,

    /**
     * `value = 1<<8`
     */
    kDeviceEdgeHoldPress,

    /**
     * `value = 1<<9`
     */
    kDeviceRadialScroll,

    /**
     * `value = 1<<10`
     */
    kDeviceSwipe,

    /**
     * `value = 1<<11`
     */
    kDeviceScroll,

    /**
     * `value = 1<<12`
     */
    kDevicePinch,

    /**
     *use this tap for Control
     *
     * `value = 1<<13`
     */
    kDeviceTap2,

    /**
     * `value = 1<<14`
     */
    kDeviceDoubleTap,

    /**
     * `value = 1<<15`
     */
    kDeviceForceTapDown,

    /**
     * `value = 1<<16`
     */
    kDeviceForceTapUp,

    /**
     * `value = 1<<17`
     */
    kDeviceForceDwell,

    /**
     * `value = 1<<18`
     */
    kDeviceSecondForceDown,

    /**
     * `value = 1<<19`
     */
    kDeviceEdgePress,

    /**
     * `value = 1<<20`
     */
    kDeviceLongHold,

    /**
     * `value = 1<<21`
     */
    kDeviceRadialScroll2,
  }

  /**
   * SelectionEventType Indicates the type of selection, whether Volume or Node.
   */
  enum SelectionEventType {
    kVolumeOnSelected,
    kVolumeOnDeselected,
  }
  enum SystemEventType {

    /**
     * prism becomes visible and is in the frustrum
     *
     * `value = 8`
     */
    kBecomeVisible,

    /**
     * prism becomes invisible or is out of the frustrum
     *
     * `value = 9`
     */
    kBecomeInvisible,

    /**
     * `value = 10`
     */
    kMovementSequenceStarted,

    /**
     * `value = 11`
     */
    kMovementSequenceStopped,

    /**
     * `value = 12`
     */
    kMovementTabEvent,

    /**
     * prism becomes visible
     *
     * `value = 16`
     */
    kBecomeUnHidden,

    /**
     * `value = 17`
     */
    kBecomeHidden,
  }

  /**
   * Animation event types.
   */
  enum AnimationEventType {

    /**
     * Fires started playing the animation
     *
     * `value = 0`
     */
    kAnimationStart,

    /**
     * Fires when reached end of the animation. In case of loop count > 1 after
     * playing as many time as loop count.
     */
    kAnimationEnd,
    kAnimationLoop,
  }

  /**
   * Animation blendsetup (state machine) event types.
   */
  enum AnimationBlendSetupEventType {

    /**
     * Entered a new state
     */
    kStateEntered,

    /**
     * Current state ended, entered new state
     */
    kStateEnded,

    /**
     * Entering a new state
     */
    kStateEntering,
    kStateEnding,
  }

  /**
   * MediaPlayerInfo Indicates the type of video info event
   */
  enum MediaPlayerInfo {

    /**
     * The player just pushed the very first video frame for rendering.
     *
     * `value = 3`
     */
    kRenderingStart,

    /**
     * The player acknowledgement that it is started playing.
     *
     * `value = 5`
     */
    kStarted,

    /**
     * The player acknowledgement that it has paused.
     *
     * `value = 6`
     */
    kPaused,

    /**
     * The player acknowledgement that it has stopped playing.
     *
     * `value = 7`
     */
    kStopped,

    /**
     * Media player is started playback as a result of shared player's request.
     *
     * `value = 8`
     */
    kStartedBySharedPlayer,

    /**
     * Media player is paused playback as a result of shared player's request.
     *
     * `value = 9`
     */
    kPausedBySharedPlayer,

    /**
     * Media player is seeking as a result of shared player's request.
     *
     * `value = 10`
     */
    kSeekBySharedPlayer,

    /**
     * Media player has stopped as a result of shared player's request.
     *
     * `value = 11`
     */
    kStoppedBySharedPlayer,

    /**
     * Media player has started sync'ing with other shared players.
     *
     * `value = 12`
     */
    kSyncStart,

    /**
     * Media player has completed sync'ing with other shared players.
     *
     * `value = 13`
     */
    kSyncComplete,

    /**
     * Media player is temporarily pausing playback.
     *
     * `value = 701`
     */
    kBufferingStart,

    /**
     * `value = 702`
     */
    kBufferingEnd,
  }

  /**
   * VideoEventType Indicates types of video specific events.
   */
  enum VideoEventType {

    /**
     * `value = 0`
     */
    kBufferingUpdate,
    kCompletion,
    kError,
    kInfo,
    kPrepared,
    kSeekComplete,
    kVideoSizeChanged,
  }

  /**
   * MediaSharedType Indicates the type of media sharing
   */
  enum MediaSharedType {

    /**
     * `value = 0`
     */
    kNone,
    kInitiator,
    kFollower,
  }

  /** Event types triggered on the server when a SpriteNode updates. */
  enum SpriteAnimationEventType {

    /**
     * The sprite animation sequence has stated playback.
     */
    kStarted,

    /**
     * The sprite animation playback has entered a paused state.
     */
    kPaused,

    /**
     * The sprite animation playback has resumed from a paused state.
     */
    kResumed,

    /**
     * The sprite animation reached the end of the sequence and is restarting the sequence.
     */
    kLooped,
    kStopped,
  }

  /**
  * How images rendered on nodes are intended to be viewed within the region specified by the texture coordinates.
  * See QuadNode::setTexCoords() and QuadNode::getTexCoords().
  */
  enum ViewMode {

    /**
     *Render the image over the full area of the quad for all eyes.
     */
    kFullArea,
    kLeftRight,
  }
  namespace render {

    /**
     * Approximate minimum offset to avoid Z fighting
     *
     * `value = 0.001`
     */
    const MIN_ZDEPTH_OFFSET: number /* float */;
    enum RenderingLayer {

      /**
       * `value = 100`
       */
      kBackgroundLayer,

      /**
       * `value = 200`
       */
      kPreObjectLayer,

      /**
       * `value = 300`
       */
      kObjectLayer,

      /**
       * `value = 400`
       */
      kPostObjectLayer,

      /**
       * `value = 500`
       */
      kHUDLayer,

      /**
       * `value = 600`
       */
      kPostHUDLayer,

      /**
       * `value = 999`
       */
      kRenderingLayerMAX,
    }
    namespace quads {

      /** Number of coordinates in the texture buffer of a quad.
       * `value = 4`
       */
      const NUM_TEXTURE_COORDS: number /* int */;

      /** Number of coordinates in the vertex buffer of a quad.
       * `value = 4`
       */
      const NUM_VERTEX_COORDS: number /* int */;

      /** Number of indices into the vertex buffer of a quad.
       * `value = 6`
       */
      const NUM_INDICES: number /* int */;

      /**
       * Default texture coordinates for a quad.
       *
       * `value = [[0,1],[1,1],[1,0],[0,0]]`
       */
      const DEFAULT_TEX_COORDS: Array<[number, number]> /* std::vector<glm::vec2> */;

      /**
       * Default vertices for a square quad.
       *
       * `value = [[0,0,0],[1,0,0],[1,1,0],[0,1,0]]`
       */
      const DEFAULT_VERTICES: Array<[number, number, number]> /* std::vector<glm::vec3> */;

      /**
       * Default indices into a quad mesh.
       *
       * `value = [0,1,2,0,2,3]`
       */
      const DEFAULT_INDICES: Array<number> /* std::vector<uint32_t> */;

      /**
       * Default local AABB for a quad.
       *
       * `value = [[0,0,0],[1,1,0]]`
       */
      const DEFAULT_LOCAL_AABB: math.AABB;
    }
    enum TextureType {
      kAlbedo,
    }
  }
  namespace animation {

    /** Order to play back an animation sequence. */
    enum PlaybackOrder {

      /**
       * Play in forward order.
       */
      kForward,
      kReverse,
    }
  }
  namespace resources {

    /**
     * Enumerate common weights (glyph thickness) of fonts in the same
     * family and style. Font families will not have all weights in
     * general.  The default weight is kRegular.
     */
    enum FontWeight {
      kExtraLight,
      kLight,

      /**
       * The default weight
       */
      kRegular,
      kMedium,
      kBold,
      kExtraBold,
    }

    /** Enumerate the most common font styles. */
    enum FontStyle {

      /**
       * Normal (aka Roman) style with upright glyphs
       */
      kNormal,
      kItalic,
    }

    /** Resource Loading Priority **/
    enum LoadStatus {

      /**
       * `value = -1`
       */
      kInvalid,

      /**
       * `value = 0`
       */
      kOk,

      /**
       * `value = 0`
       */
      kLoaded,

      /**
       * `value = 1`
       */
      kLoading,
      kGenericError,
      kReadFileError,
      kLoadDataError,
      kParseDataError,
      kInvalidArgument,
      kInvalidData,
      kInvalidOperation,
      kUnsupportedVersion,
      kSystemError,
    }
  }
  namespace haptics {
    enum Type {

      /**
       * `value = 0`
       */
      UNKNOWN,
      CONTROL_LED,
      CONTROL_BODY,

      /**
       * `value = CONTROL_BODY`
       */
      CONTROL_TOUCH,

      /**
       * `value = CONTROL_BODY`
       */
      MCA_BODY,
      CUSTOM,
    }
    enum VibePattern {

      /**
       * `value = 0`
       */
      VIBE_NONE,
      VIBE_CLICK,
      VIBE_BUMP,
      VIBE_DOUBLE_CLICK,
      VIBE_BUZZ,
      VIBE_TICK,
      VIBE_TAP,
      VIBE_FORCE_DOWN,
      VIBE_FORCE_UP,
      VIBE_FORCE_DWELL,
      VIBE_SECOND_FORCE_DOWN,
      VIBE_PULSE_RAW,
    }
    enum LedPattern {

      /**
       * `value = 0`
       */
      LED_NONE,
      LED_CLOCK_12,

      /**
       * can do LED_EFFECT_TOUCH_FORCE_VAL effect
       *
       * `value = LED_CLOCK_12`
       */
      LED_TOP,
      LED_CLOCK_1,
      LED_CLOCK_2,
      LED_CLOCK_3,

      /**
       * can do LED_EFFECT_TOUCH_FORCE_VAL effect
       *
       * `value = LED_CLOCK_3`
       */
      LED_RIGHT,
      LED_CLOCK_4,
      LED_CLOCK_5,
      LED_CLOCK_6,

      /**
       * can do LED_EFFECT_TOUCH_FORCE_VAL effect
       *
       * `value = LED_CLOCK_6`
       */
      LED_BOTTOM,
      LED_CLOCK_7,
      LED_CLOCK_8,
      LED_CLOCK_9,

      /**
       * can do LED_EFFECT_TOUCH_FORCE_VAL effect
       *
       * `value = LED_CLOCK_9`
       */
      LED_LEFT,
      LED_CLOCK_10,
      LED_CLOCK_11,
      LED_CLOCK_12_6,
      LED_CLOCK_1_7,
      LED_CLOCK_2_8,
      LED_CLOCK_3_9,
      LED_CLOCK_4_10,
      LED_CLOCK_5_11,
      LED_REALITY_BUTTON,
      LED_BATTERY_STATUS,
      LED_6DOF_FAULT,
    }
    enum LedColor {

      /**
       * `value = 0`
       */
      LED_COLOR_DEFAULT,

      /**
       * `value = LED_COLOR_DEFAULT`
       */
      LED_COLOR_BRIGHT_RED,
      LED_COLOR_PASTEL_RED,
      LED_COLOR_BRIGHT_FLORIDA_ORANGE,
      LED_COLOR_PASTEL_FLORIDA_ORANGE,
      LED_COLOR_BRIGHT_LUNA_YELLOW,
      LED_COLOR_PASTEL_LUNA_YELLOW,
      LED_COLOR_BRIGHT_NEBULA_PINK,
      LED_COLOR_PASTEL_NEBULA_PINK,
      LED_COLOR_BRIGHT_COSMIC_PURPLE,
      LED_COLOR_PASTEL_COSMIC_PURPLE,
      LED_COLOR_BRIGHT_MYSTIC_BLUE,
      LED_COLOR_PASTEL_MYSTIC_BLUE,
      LED_COLOR_BRIGHT_CELESTIAL_BLUE,
      LED_COLOR_PASTEL_CELESTIAL_BLUE,
      LED_COLOR_BRIGHT_TATOOINE_GREEN,
      LED_COLOR_PASTEL_TATOOINE_GREEN,
    }
    enum LedEffect {

      /**
       * `value = 0`
       */
      LED_EFFECT_DEFAULT,
      LED_EFFECT_ROTATE_CLOCK,
      LED_EFFECT_ROTATE_ANTICLOCK,
      LED_EFFECT_PULSE,
      LED_EFFECT_PAINT_CLOCK,
      LED_EFFECT_PAINT_ANTICLOCK,
      LED_EFFECT_BLINK,
      LED_EFFECT_TOUCH_FORCE_VAL,
    }
    enum LedEffectSpeed {

      /**
       * `value = 0`
       */
      LED_EFFECT_SPEED_NONE,
      LED_EFFECT_SPEED_SLOW,
      LED_EFFECT_SPEED_MEDIUM,
      LED_EFFECT_SPEED_FAST,
    }
    enum VibeIntensity {

      /**
       * `value = 1`
       */
      LOW,
      MEDIUM,
      HIGH,
    }
  }
  namespace densemesh {
    enum MeshBlockUpdate {

      /**
       * New mesh block
       */
      kNew,

      /**
       * Mesh block changed
       */
      kChanged,
      kDeleted,
    }
  }
  namespace color {

    /**
     * `value = [1,1,1,1]`
     */
    const WHITE: [number, number, number, number] /* glm::vec4 */;

    /**
     * `value = [0,0,0,1]`
     */
    const BLACK: [number, number, number, number] /* glm::vec4 */;

    /**
     * `value = [1,0,0,1]`
     */
    const RED: [number, number, number, number] /* glm::vec4 */;

    /**
     * `value = [0,1,0,1]`
     */
    const GREEN: [number, number, number, number] /* glm::vec4 */;

    /**
     * `value = [0,0,1,1]`
     */
    const BLUE: [number, number, number, number] /* glm::vec4 */;

    /**
     * `value = [1,1,0,1]`
     */
    const YELLOW: [number, number, number, number] /* glm::vec4 */;

    /**
     * `value = [1,0,1,1]`
     */
    const MAGENTA: [number, number, number, number] /* glm::vec4 */;

    /**
     * `value = [0,1,1,1]`
     */
    const CYAN: [number, number, number, number] /* glm::vec4 */;

    /**
     * `value = [1,0.45,0.21,1]`
     */
    const ORANGE: [number, number, number, number] /* glm::vec4 */;

    /**
     * `value = [0.58,0.51,0.92,1]`
     */
    const INDIGO: [number, number, number, number] /* glm::vec4 */;

    /**
     * `value = [1,0.75,0.80,1]`
     */
    const PINK: [number, number, number, number] /* glm::vec4 */;

    /**
     * `value = [1,0.41,0.70,1]`
     */
    const HOTPINK: [number, number, number, number] /* glm::vec4 */;
  }

  /**
   * `value = ""`
   */
  const EMPTY_STRING: string;

  /**
   * `value = [0,0,0,0]`
   */
  const VEC4_ZERO: [number, number, number, number] /* glm::vec4 */;

  /**
   * `value = [1,1,1,1]`
   */
  const VEC4_ONE: [number, number, number, number] /* glm::vec4 */;

  /**
   * `value = [0,0,0]`
   */
  const VEC3_ZERO: [number, number, number] /* glm::vec3 */;

  /**
   * `value = [1,1,1]`
   */
  const VEC3_ONE: [number, number, number] /* glm::vec3 */;

  /**
   * `value = [1,0,0]`
   */
  const VEC3_RIGHT: [number, number, number] /* glm::vec3 */;

  /**
   * `value = [0,1,0]`
   */
  const VEC3_UP: [number, number, number] /* glm::vec3 */;

  /**
   * `value = [0,0,-1]`
   */
  const VEC3_FORWARD: [number, number, number] /* glm::vec3 */;

  /**
   * `value = [0,0]`
   */
  const VEC2_ZERO: [number, number] /* glm::vec2 */;

  /**
   * `value = [1,1]`
   */
  const VEC2_ONE: [number, number] /* glm::vec2 */;

  /**
   * `value = [1,0,0,0]`
   */
  const QUAT_IDENTITY: [number, number, number, number] /* glm::quat */;

  /**
   * `value = [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]`
   */
  const MAT4_IDENTITY: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] /* glm::mat4 */;
  namespace input {

    /**
     * Definition of all gesture types for both touch and hand gestures.
     */
    enum GestureType {
      NONE,

      /**
       * Touch gestures
       *
       * `value = 12`
       */
      Scroll,
      Pinch,
      Tap,
      DoubleTap,
      ForceTapDown,
      ForceTapUp,
      ForceDwell,
      SecondForceDown,
      EdgePress,
      LongHold,
      RadialScroll,
      Swipe,

      /**
       * Trigger gestures
       */
      TriggerDown,
      TriggerUp,
      TriggerClick,

      /**
       * `value = TriggerClick+2`
       */
      TriggerHold,

      /**
       * Hand gestures
       */
      HAND_FINGER,
      HAND_FIST,
      HAND_PINCH,
      HAND_THUMB,
      HAND_L,
      HAND_OPENHANDBACK,
      HAND_OK,
      HAND_C,
      HAND_NO_POSE,
    }
    enum HandGestureKeypointName {
      NONE,
      THUMB_TIP,
      THUMB_FIRST_JOINT,
      THUMB_BASE,
      THUMB_CARPAL_JOINT,
      INDEX_FINGER_TIP,
      INDEX_FINGER_FIRST_JOINT,
      INDEX_FINGER_SECOND_JOINT,
      INDEX_FINGER_BASE,
      MIDDLE_FINGER_TIP,
      MIDDLE_FINGER_FIRST_JOINT,
      MIDDLE_FINGER_SECOND_JOINT,
      MIDDLE_FINGER_BASE,
      RING_FINGER_TIP,
      RING_FINGER_FIRST_JOINT,
      RING_FINGER_SECOND_JOINT,
      RING_FINGER_BASE,
      PINKY_FINGER_TIP,
      PINKY_FINGER_FIRST_JOINT,
      PINKY_FINGER_SECOND_JOINT,
      PINKY_FINGER_BASE,
      HAND_CENTER,
      WRIST_CENTER,
      WRIST_PINKY_SIDE,
      WRIST_THUMB_SIDE,
    }
    enum GestureDirection {

      /**
       * `value = 0`
       */
      UNKNOWN,
      UP,
      DOWN,
      LEFT,
      RIGHT,
      IN,
      OUT,
      CLOCKWISE,
      ANTICLOCKWISE,
      CENTER,
    }
    enum EventSource {

      /**
       * `value = 0`
       */
      UNKNOWN,
      POWER_BUTTON,
      HOME_BUTTON,
      CAPTURE_BUTTON,
      REALITY_BUTTON,
      BLE_CONTROL,

      /**
       * `value = BLE_CONTROL+2`
       */
      CONTROL,
      KEYBOARD,
      VOLUME,
      VOICE,
      GESTURE,
      COMPANION_APP,
      HEADPHONE,
      BATTERY,
      TABLET_DEVICE,
    }
    enum EventType {

      /**
       * `value = 0`
       */
      EVENT_UNKNOWN,
      EVENT_KEY_DOWN,
      EVENT_KEY_UP,
      EVENT_KEY_LONG_DOWN,
      EVENT_KEY_LONG_UP,
      EVENT_POSE_3DOF,
      EVENT_POSE_6DOF,
      EVENT_CONTROL_TOUCHPAD,
      EVENT_AXIS_VALUE,
      EVENT_GESTURE_START,

      /**
       * `value = EVENT_GESTURE_START`
       */
      EVENT_CONTROL_GESTURE,
      EVENT_GESTURE_CONTINUE,
      EVENT_GESTURE_END,
      EVENT_PLUGGED_IN,
      EVENT_PLUGGED_OUT,
      EVENT_VOICE,
    }
    enum TabletToolType {

      /**
       * `value = 0`
       */
      TOOL_TYPE_UNKNOWN,
      TOOL_TYPE_PEN,
      TOOL_TYPE_ERASER,
    }
    enum DeviceEventType {

      /**
       * `value = 0`
       */
      UNKNOWN,
      CONNECT,
      DISCONNECT,
      STATE_CHANGE,
    }
  }
  namespace headtracking {
    enum Mode {

      /**
       * Full 6 degrees of freedom tracking (position and orientation).
       */
      k6DOF,
      k3DOF,
    }
    enum Error {

      /**
       * No error, tracking is nominal.
       */
      kNone,

      /**
       * There are not enough features in the environment.
       */
      kNotEnoughFeatures,

      /**
       * Lighting in the environment is not sufficient to track accurately.
       */
      kLowLight,
      kUnknown,
    }
  }
  namespace physics {

    /** Rigid body type for physics simulation. */
    enum RigidBodyType {

      /**
       * body never moves
       */
      kStatic,

      /**
       * body moves from non-physics forces
       */
      kKinematic,
      kDynamic,
    }

    /**
     * Type of force to apply in the force functions.
     * Units : mass = kg, dist = meters/radians, time = sec.
     */
    enum ForceType {

      /**
       * mass * dist / time^2
       */
      kForce,
      kImpulse,
    }
    enum ShapeType {

      /**
       * for internal use
       */
      kUndefined,

      /**
       * defined by the orientation of the shape
       */
      kPlane,

      /**
       * defined by a radius
       */
      kSphere,

      /**
       * defined by a radius and length
       */
      kCapsule,

      /**
       * defined by 3 lengths
       */
      kBox,

      /**
       * defined by mesh vertex data
       */
      kConvexMesh,

      /**
       * defined by mesh vertex data
       */
      kOpenMesh,
      kQuad,
    }
    enum ShapeBehavior {

      /**
       * shape collides with other collision shapes
       */
      kCollision,

      /**
       * shape only generates trigger enter and exit events
       */
      kTrigger,
      kRaycast,
    }
    enum CollisionType {
      kInvalid,

      /**
       * A collision has started
       */
      kCollisionStart,

      /**
       * A collision is continuing
       */
      kCollisionContinue,

      /**
       * A collision has stopped
       */
      kCollisionStop,

      /**
       * A trigger volume is being entered
       */
      kTriggerEnter,
      kTriggerExit,
    }
    enum AxisLock {

      /**
       * Don't lock any axes
       *
       * `value = 0`
       */
      kNone,

      /**
       * Lock the x axis
       *
       * `value = 1`
       */
      kXAxis,

      /**
       * Lock the y axis
       *
       * `value = 2`
       */
      kYAxis,

      /**
       * `value = 4`
       */
      kZAxis,
    }
    enum SolverType {

      /**
       * Use when objects are moving at normal speeds
       */
      kNormal,

      /**
       * Use if fast objects will collide with normal objects
       */
      kFastNormal,
      kFastFast,
    }
  }

  /** Cursor Hover States */
  enum CursorHoverState {

    /**
     * No requested cursor state.
     */
    kNone,

    /**
     * Default cursor glow.
     */
    kDefault,

    /**
     * Browser default cursor.
     */
    kBrowserDefault,

    /**
     * Browser pointer cursor.
     */
    kBrowserPointer,

    /**
     * Text input cursor.
     */
    kTextInput,

    /**
     * Crosshair cursor.
     */
    kCrosshair,

    /**
     * Move cursor.
     */
    kMove,

    /**
     * Scroll cursor.
     */
    kScroll,

    /**
     * Scroll north cursor.
     */
    kScrollN,

    /**
     * Scroll northeast cursor.
     */
    kScrollNE,

    /**
     * Scroll east cursor.
     */
    kScrollE,

    /**
     * Scroll southeast cursor.
     */
    kScrollSE,

    /**
     * Scroll south cursor.
     */
    kScrollS,

    /**
     * Scroll southwest cursor.
     */
    kScrollSW,

    /**
     * Scroll west cursor.
     */
    kScrollW,
    kScrollNW,
  }

  /** body dynamics for a Prism */
  enum BodyDynamicType {
    kNone,

    /**
     * The Prism's body dynamic is "body centric"
     *
     * The Prism will loosely move with the user.  This means that if the user gets too close to the
     * Prism then the Prism will be "pushed" backwards.  If the user gets too far from the Prism then
     * the Prism will be "pulled" towards the user.  The Prism also billboards towards the user.
     */
    kBodyCentric,

    /**
     * The Prism's body dynamic is "edge billboard"
     *
     * The Prism's position remains constant, however it will rotate about the vertical (y) axis if
     * the user starts walking around it.
     */
    kEdgeBillboard,
  }

  /** scale modes for a Prism during direct manipulation */
  enum ScaleModeType {
    kNone,

    /** when scaling in direct manipulation, only scale the Prism's width */
    kX,

    /** when scaling during direct manipulation, only scale the Prism's height */
    kY,

    /** when scaling during direct manipulation, only scale the Prism's depth */
    kZ,

    /** when scaling during direct manipulation, only scale the Prism's width and height */
    kXY,

    /** when scaling during direct manipulation, only scale the Prism's width and depth */
    kXZ,

    /** when scaling during direct manipulation, only scale the Prism's height and depth */
    kYZ,

    /** (default) when scaling during direct manipulation, scale the Prism's width and height and depth */
    kXYZ,
  }
}

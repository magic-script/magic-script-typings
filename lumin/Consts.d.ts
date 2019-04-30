declare module 'lumin' {
  const MAX_CLIENT_FPS: number = 60.0;
  const FPS_DELTA: number = 1.0/MAX_CLIENT_FPS;
  const INVALID_NODE_ID: number = 0;
  const INVALID_PRISM_ID: number = 0;
  const INVALID_RESOURCE_ID: number = 0;
  const INVALID_SESSION_ID: number = 0;
  const INVALID_PHYSICS_ID: number = 0;
  const INVALID_CONTROL_ID: number = -1;
  const INVALID_DEVICE_ID: number = -1;
  enum PrismType {
    kWorld = 0,
    kCamera,
  }
  enum RayCastEventType {
    kInvalid = 0,
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
  enum PlanecastFlags {
    kVertical = 1<<0,
    kHorizontal = 1<<1,
    kArbitrary = 1<<2,
    kOrientToGravity = 1<<3,
    kFlagInner = 1<<4,
    kIgnoreHoles = 1<<5,
    kCeiling = 1<<6,
    kFloor = 1<<7,
    kWall = 1<<8,
    kAllOrientations = kVertical|kHorizontal|kArbitrary,
    kAllTypes = kCeiling|kFloor|kWall,
  }
  enum HandGestureFlags {
    kHandFinger = 1<<0,
    kHandFist = 1<<1,
    kHandPinch = 1<<2,
    kHandThumb = 1<<3,
    kHandL = 1<<4,
    kHandOpenHandBack = 1<<5,
    kHandOk = 1<<6,
    kHandC = 1<<7,
    kHandTrackingGestureUp = 1<<8,
    kHandTrackingGestureDown = 1<<9,
    kHandDynamicVerticalWag = 1<<10,
    kHandDynamicHorizontalWag = 1<<11,
    kHandDynamicClosingHand = 1<<12,
    kHandDynamicThumbsUp = 1<<13,
    kHandDynamicThumbsDown = 1<<14,
  }
  enum DeviceGestureFlags {
    kDeviceTap = 1<<0,
    kDeviceHardTap = 1<<1,
    kDeviceSecondaryHardTap = 1<<2,
    kDeviceForcePress = 1<<3,
    kDeviceHoldPress = 1<<4,
    kDeviceEdgeTap = 1<<5,
    kDeviceEdgeHardTap = 1<<6,
    kDeviceEdgeForcePress = 1<<7,
    kDeviceEdgeHoldPress = 1<<8,
    kDeviceRadialScroll = 1<<9,
    kDeviceSwipe = 1<<10,
    kDeviceScroll = 1<<11,
    kDevicePinch = 1<<12,
    kDeviceTap2 = 1<<13,
    kDeviceDoubleTap = 1<<14,
    kDeviceForceTapDown = 1<<15,
    kDeviceForceTapUp = 1<<16,
    kDeviceForceDwell = 1<<17,
    kDeviceSecondForceDown = 1<<18,
    kDeviceEdgePress = 1<<19,
    kDeviceLongHold = 1<<20,
    kDeviceRadialScroll2 = 1<<21,
  }
  enum SelectionEventType {
    kVolumeOnSelected,
    kVolumeOnDeselected,
  }
  enum SystemEventType {
    kBecomeVisible = 8,
    kBecomeInvisible = 9,
    kMovementSequenceStarted = 10,
    kMovementSequenceStopped = 11,
    kMovementTabEvent = 12,
    kBecomeUnHidden = 16,
    kBecomeHidden = 17,
  }
  enum AnimationEventType {
    kAnimationStart = 0,
    kAnimationEnd,
    kAnimationLoop,
  }
  enum AnimationBlendSetupEventType {
    kStateEntered,
    kStateEnded,
    kStateEntering,
    kStateEnding,
  }
  enum VideoEventType {
    kBufferingUpdate = 0,
    kCompletion,
    kError,
    kInfo,
    kPrepared,
    kSeekComplete,
    kVideoSizeChanged,
  }
  enum SpriteAnimationEventType {
    kStarted,
    kPaused,
    kResumed,
    kLooped,
    kStopped,
  }
  enum ViewMode {
    kFullArea,
    kLeftRight,
  }
  namespace render {
    const MIN_ZDEPTH_OFFSET: number = 0.001;
    enum RenderingLayer {
      kBackgroundLayer = 100,
      kPreObjectLayer = 200,
      kObjectLayer = 300,
      kPostObjectLayer = 400,
      kHUDLayer = 500,
      kPostHUDLayer = 600,
      kRenderingLayerMAX = 999,
    }
    namespace quads {
      const NUM_TEXTURE_COORDS: number = 4;
      const NUM_VERTEX_COORDS: number = 4;
      const NUM_INDICES: number = 6;
      const DEFAULT_TEX_COORDS: Array<[number, number] /* glm::vec2 */> /* std::vector */ = [[0,1],[1,1],[1,0],[0,0]];
      const DEFAULT_VERTICES: Array<[number, number, number] /* glm::vec3 */> /* std::vector */ = [[0,0,0],[1,0,0],[1,1,0],[0,1,0]];
      const DEFAULT_INDICES: Array<number> /* std::vector */ = [0,1,2,0,2,3];
      const DEFAULT_LOCAL_AABB: math.AABB = [[0,0,0],[1,1,0]];
    }
    enum TextureType {
      kAlbedo,
    }
  }
  namespace animation {
    enum PlaybackOrder {
      kForward,
      kReverse,
    }
  }
  namespace resources {
    enum FontWeight {
      kExtraLight,
      kLight,
      kRegular,
      kMedium,
      kBold,
      kExtraBold,
    }
    enum FontStyle {
      kNormal,
      kItalic,
    }
    enum LoadStatus {
      kInvalid = -1,
      kOk = 0,
      kLoaded = 0,
      kLoading = 1,
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
      UNKNOWN = 0,
      CONTROL_LED,
      CONTROL_BODY,
      CONTROL_TOUCH = CONTROL_BODY,
      MCA_BODY = CONTROL_BODY,
      CUSTOM,
    }
    enum VibePattern {
      VIBE_NONE = 0,
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
      LED_NONE = 0,
      LED_CLOCK_12,
      LED_TOP = LED_CLOCK_12,
      LED_CLOCK_1,
      LED_CLOCK_2,
      LED_CLOCK_3,
      LED_RIGHT = LED_CLOCK_3,
      LED_CLOCK_4,
      LED_CLOCK_5,
      LED_CLOCK_6,
      LED_BOTTOM = LED_CLOCK_6,
      LED_CLOCK_7,
      LED_CLOCK_8,
      LED_CLOCK_9,
      LED_LEFT = LED_CLOCK_9,
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
      LED_COLOR_DEFAULT = 0,
      LED_COLOR_BRIGHT_RED = LED_COLOR_DEFAULT,
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
      LED_EFFECT_DEFAULT = 0,
      LED_EFFECT_ROTATE_CLOCK,
      LED_EFFECT_ROTATE_ANTICLOCK,
      LED_EFFECT_PULSE,
      LED_EFFECT_PAINT_CLOCK,
      LED_EFFECT_PAINT_ANTICLOCK,
      LED_EFFECT_BLINK,
      LED_EFFECT_TOUCH_FORCE_VAL,
    }
    enum LedEffectSpeed {
      LED_EFFECT_SPEED_NONE = 0,
      LED_EFFECT_SPEED_SLOW,
      LED_EFFECT_SPEED_MEDIUM,
      LED_EFFECT_SPEED_FAST,
    }
    enum VibeIntensity {
      LOW = 1,
      MEDIUM,
      HIGH,
    }
  }
  namespace densemesh {
    enum MeshBlockUpdate {
      kNew,
      kChanged,
      kDeleted,
    }
  }
  namespace color {
    const WHITE: [number, number, number, number] /* glm::vec4 */ = [1,1,1,1];
    const BLACK: [number, number, number, number] /* glm::vec4 */ = [0,0,0,1];
    const RED: [number, number, number, number] /* glm::vec4 */ = [1,0,0,1];
    const GREEN: [number, number, number, number] /* glm::vec4 */ = [0,1,0,1];
    const BLUE: [number, number, number, number] /* glm::vec4 */ = [0,0,1,1];
    const YELLOW: [number, number, number, number] /* glm::vec4 */ = [1,1,0,1];
    const MAGENTA: [number, number, number, number] /* glm::vec4 */ = [1,0,1,1];
    const CYAN: [number, number, number, number] /* glm::vec4 */ = [0,1,1,1];
    const ORANGE: [number, number, number, number] /* glm::vec4 */ = [1,0.45,0.21,1];
    const INDIGO: [number, number, number, number] /* glm::vec4 */ = [0.58,0.51,0.92,1];
    const PINK: [number, number, number, number] /* glm::vec4 */ = [1,0.75,0.80,1];
    const HOTPINK: [number, number, number, number] /* glm::vec4 */ = [1,0.41,0.70,1];
  }
  const EMPTY_STRING: string = "";
  const VEC4_ZERO: [number, number, number, number] /* glm::vec4 */ = [0,0,0,0];
  const VEC4_ONE: [number, number, number, number] /* glm::vec4 */ = [1,1,1,1];
  const VEC3_ZERO: [number, number, number] /* glm::vec3 */ = [0,0,0];
  const VEC3_ONE: [number, number, number] /* glm::vec3 */ = [1,1,1];
  const VEC3_RIGHT: [number, number, number] /* glm::vec3 */ = [1,0,0];
  const VEC3_UP: [number, number, number] /* glm::vec3 */ = [0,1,0];
  const VEC3_FORWARD: [number, number, number] /* glm::vec3 */ = [0,0,-1];
  const VEC2_ZERO: [number, number] /* glm::vec2 */ = [0,0];
  const VEC2_ONE: [number, number] /* glm::vec2 */ = [1,1];
  const QUAT_IDENTITY: [number, number, number, number] /* glm::quat */ = [1,0,0,0];
  const MAT4_IDENTITY: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] /* glm::mat4 */ = [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];
  namespace input {
    enum GestureType {
      NONE,
      Scroll = 12,
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
      TriggerDown,
      TriggerUp,
      TriggerClick,
      TriggerHold = TriggerClick+2,
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
      UNKNOWN = 0,
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
      UNKNOWN = 0,
      POWER_BUTTON,
      HOME_BUTTON,
      CAPTURE_BUTTON,
      REALITY_BUTTON,
      BLE_CONTROL,
      CONTROL = BLE_CONTROL+2,
      KEYBOARD,
      VOLUME,
      VOICE,
      GESTURE,
      COMPANION_APP,
      HEADPHONE,
      BATTERY,
    }
    enum EventType {
      EVENT_UNKNOWN = 0,
      EVENT_KEY_DOWN,
      EVENT_KEY_UP,
      EVENT_KEY_LONG_DOWN,
      EVENT_KEY_LONG_UP,
      EVENT_POSE_3DOF,
      EVENT_POSE_6DOF,
      EVENT_CONTROL_TOUCHPAD,
      EVENT_AXIS_VALUE,
      EVENT_GESTURE_START,
      EVENT_CONTROL_GESTURE = EVENT_GESTURE_START,
      EVENT_GESTURE_CONTINUE,
      EVENT_GESTURE_END,
      EVENT_PLUGGED_IN,
      EVENT_PLUGGED_OUT,
      EVENT_VOICE,
    }
  }
  namespace headtracking {
    enum Mode {
      k6DOF,
      k3DOF,
    }
    enum Error {
      kNone,
      kNotEnoughFeatures,
      kLowLight,
      kUnknown,
    }
  }
  namespace physics {
    enum RigidBodyType {
      kStatic,
      kKinematic,
      kDynamic,
    }
    enum ForceType {
      kForce,
      kImpulse,
    }
    enum ShapeType {
      kUndefined,
      kPlane,
      kSphere,
      kCapsule,
      kBox,
      kConvexMesh,
      kOpenMesh,
      kQuad,
    }
    enum ShapeBehavior {
      kCollision,
      kTrigger,
      kRaycast,
    }
    enum CollisionType {
      kInvalid,
      kCollisionStart,
      kCollisionContinue,
      kCollisionStop,
      kTriggerEnter,
      kTriggerExit,
    }
    enum AxisLock {
      kNone = 0,
      kXAxis = 1,
      kYAxis = 2,
      kZAxis = 4,
    }
    enum SolverType {
      kNormal,
      kFastNormal,
      kFastFast,
    }
  }
  enum CursorHoverState {
    kNone,
    kDefault,
    kBrowserDefault,
    kBrowserPointer,
    kTextInput,
    kCrosshair,
    kMove,
    kScroll,
    kScrollN,
    kScrollNE,
    kScrollE,
    kScrollSE,
    kScrollS,
    kScrollSW,
    kScrollW,
    kScrollNW,
  }
  enum BodyDynamicType {
    kNone,
    kBodyCentric,
    kEdgeBillboard,
  }
  enum ScaleModeType {
    kNone,
    kX,
    kY,
    kZ,
    kXY,
    kXZ,
    kYZ,
    kXYZ,
  }
}

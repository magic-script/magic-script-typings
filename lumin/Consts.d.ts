declare module 'lumin' {
  const MAX_CLIENT_FPS: number = 60.0;
  const FPS_DELTA: number = 1.0/MAX_CLIENT_FPS;
  const INVALID_NODE_ID: BigInt /* uint64_t */ = 0n;
  const INVALID_PRISM_ID: BigInt /* uint64_t */ = 0n;
  const INVALID_RESOURCE_ID: BigInt /* uint64_t */ = 0n;
  const INVALID_SESSION_ID: BigInt /* uint64_t */ = 0n;
  const INVALID_PHYSICS_ID: BigInt /* uint64_t */ = 0n;
  const INVALID_CONTROL_ID: number = -1;
  const INVALID_DEVICE_ID: number = -1;

  /**
   * PrismType Indicates the type of Bound Volume
   */
  enum PrismType {
    kWorld = 0,
    kCamera,
  }

  /**
   * RayCastEventType Indicates the type of Raycast event for Volumes or Nodes,
   * and whether it involves Head, Control, or Cursor raycasts.
   */
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

  /**
   * Used to filter types of planes when doing a plane cast.
   */
  enum PlanecastFlags {

    /**
     * Include planes whose normal is perpendicular to gravity.
     */
    kVertical = 1<<0,

    /**
     * Include planes whose normal is parallel to gravity.
     */
    kHorizontal = 1<<1,

    /**
     * Include planes with arbitrary normals.
     */
    kArbitrary = 1<<2,

    /**
     * For non-horizontal planes, setting this flag will result in the
     * top of the plane rectangle being perpendicular to gravity.
     */
    kOrientToGravity = 1<<3,

    /**
     * If this flag is set, inner planes will be returned; if it is not
     * set, outer planes will be returned.
     */
    kFlagInner = 1<<4,

    /**
     * Instructs the plane system to ignore holes in planar surfaces.
     */
    kIgnoreHoles = 1<<5,

    /**
     * Include planes tagged as ceiling.
     */
    kCeiling = 1<<6,

    /**
     * Include planes tagged as floor.
     */
    kFloor = 1<<7,

    /**
     * Include planes tagged as wall.
     */
    kWall = 1<<8,
    kAllOrientations = kVertical|kHorizontal|kArbitrary,
    kAllTypes = kCeiling|kFloor|kWall,
  }

  /**
   * Hand Gestures for Tracking
   */
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
    kHandNoPose = 1<<15,
  }
  enum DeviceGestureFlags {

    /**
     *use this tap for MCA
     */
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

    /**
     *use this tap for Control
     */
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
     */
    kBecomeVisible = 8,

    /**
     * prism becomes invisible or is out of the frustrum
     */
    kBecomeInvisible = 9,
    kMovementSequenceStarted = 10,
    kMovementSequenceStopped = 11,
    kMovementTabEvent = 12,

    /**
     * prism becomes visible
     */
    kBecomeUnHidden = 16,
    kBecomeHidden = 17,
  }

  /**
   * Animation event types.
   */
  enum AnimationEventType {

    /**
     * Fires started playing the animation
     */
    kAnimationStart = 0,

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
   * VideoEventType Indicates types of video specific events.
   */
  enum VideoEventType {
    kBufferingUpdate = 0,
    kCompletion,
    kError,
    kInfo,
    kPrepared,
    kSeekComplete,
    kVideoSizeChanged,
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
     */
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

      /** Number of coordinates in the texture buffer of a quad. */
      const NUM_TEXTURE_COORDS: number = 4;

      /** Number of coordinates in the vertex buffer of a quad. */
      const NUM_VERTEX_COORDS: number = 4;

      /** Number of indices into the vertex buffer of a quad. */
      const NUM_INDICES: number = 6;

      /**
       * Default texture coordinates for a quad.
       */
      const DEFAULT_TEX_COORDS: Array<[number, number] /* glm::vec2 */> /* std::vector */ = [[0,1],[1,1],[1,0],[0,0]];

      /**
       * Default vertices for a square quad.
       */
      const DEFAULT_VERTICES: Array<[number, number, number] /* glm::vec3 */> /* std::vector */ = [[0,0,0],[1,0,0],[1,1,0],[0,1,0]];

      /**
       * Default indices into a quad mesh.
       */
      const DEFAULT_INDICES: Array<number> /* std::vector */ = [0,1,2,0,2,3];

      /**
       * Default local AABB for a quad.
       */
      const DEFAULT_LOCAL_AABB: math.AABB = [[0,0,0],[1,1,0]];
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

      /**
       * can do LED_EFFECT_TOUCH_FORCE_VAL effect
       */
      LED_TOP = LED_CLOCK_12,
      LED_CLOCK_1,
      LED_CLOCK_2,
      LED_CLOCK_3,

      /**
       * can do LED_EFFECT_TOUCH_FORCE_VAL effect
       */
      LED_RIGHT = LED_CLOCK_3,
      LED_CLOCK_4,
      LED_CLOCK_5,
      LED_CLOCK_6,

      /**
       * can do LED_EFFECT_TOUCH_FORCE_VAL effect
       */
      LED_BOTTOM = LED_CLOCK_6,
      LED_CLOCK_7,
      LED_CLOCK_8,
      LED_CLOCK_9,

      /**
       * can do LED_EFFECT_TOUCH_FORCE_VAL effect
       */
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

    /**
     * Definition of all gesture types for both touch and hand gestures.
     */
    enum GestureType {
      NONE,

      /**
       * Touch gestures
       */
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

      /**
       * Trigger gestures
       */
      TriggerDown,
      TriggerUp,
      TriggerClick,
      TriggerHold = TriggerClick+2,

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
      TABLET_DEVICE,
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
    enum TabletToolType {
      TOOL_TYPE_UNKNOWN = 0,
      TOOL_TYPE_PEN,
      TOOL_TYPE_ERASER,
    }
    enum DeviceEventType {
      UNKNOWN = 0,
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
       */
      kNone = 0,

      /**
       * Lock the x axis
       */
      kXAxis = 1,

      /**
       * Lock the y axis
       */
      kYAxis = 2,
      kZAxis = 4,
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

declare module 'lumin' {

  /**
   * Base class for Lumin Runtime landscape apps.
   */
  class LandscapeApp extends BaseApp {

    /**
     * Creates a landscape application instance.
     *
     * @param a_fTimeDelta `default = 0.0`<br/> - the preferred update rate as a time interval in seconds.
     *        As a special case, 0.0f represents event-based mode, where update callbacks
     *        will not happen at regular intervals -- only in response to events.
     */
    constructor(a_fTimeDelta?: number /* float */)

    /**
     * Get a new Prism for use by the Application
     *
     * @param a_size - width, height, and breadth of the prism.
     * @return Prism - The prism
     * @priv none
     */
    requestNewPrism(a_size: [number, number, number] | Float32Array /* glm::vec3 */): Prism | null

    /**
     * Stops persisting a given Prism's content across reboots
     *
     * By default a Prism's content persists across reboots.  This means that all opened Prisms are
     * saved when the device shuts down.  Prisms that are explicitly closed by the user or app prior
     * to shutdown are not saved.  When the device boots up, and the area (dense mesh) is recognized,
     * then all saved Prisms are restored by automatically starting the apps associated with the
     * Prisms and asking them to request new Prisms.  If the app saved their content persistence ID
     * locally prior to shutdown, then for each restored Prism they can figure out how exactly to
     * restore it.
     *
     * @param a_prism the Prism
     * @return whether this call was successful or not
     */
    disableContentPersistence(a_prism: Prism | null): boolean

    /**
     * Gets the Content Persistence ID assigned to the Prism
     *
     * This is the ID assigned to a Prism that is saved across reboots.  Note that if this Prism
     * is destroyed before the device shuts down, then this ID is no longer valid.  See
     * disableContentPersistence for more information on content persistence.
     *
     * @param a_prism the Prism
     * @return the Content Persistence ID assigned to this Prism
     */
    getContentPersistenceId(a_prism: Prism | null): string | null /* std::optional<std::string> */

    /**
     * Sets a body dynamic with the given parameters to the Prism
     *
     * A body dynamic is how the Prism behaves passively in the landscape.  For example, one body
     * dynamic can make a Prism rotate (billboard) towards the user as they walk around the Prism.
     * By default Prisms are static (un-moving) once placed in the landscape.
     *
     * @param a_prism the Prism
     * @param a_bodyDynamicType the body dynamic type to set to the prism
     * @return whether this call was successful or not
     */
    setBodyDynamic(a_prism: Prism | null, a_bodyDynamicType: BodyDynamicType): boolean

    /**
     * Retrieves the current body dynamic type for the Prism
     *
     * See setBodyDynamic for information on body dynamics.
     *
     * @param a_prism the Prism
     * @return the body dynamic of the Prism
     */
    getBodyDynamic(a_prism: Prism | null): BodyDynamicType | null /* std::optional<BodyDynamicType> */

    /**
     * Sets the scale mode for the Prism
     *
     * When a Prism is directly manipulated, the user can scale it.  This sets which dimension for the
     * Prism to be scaled (by default width, height, and depth are scaled).
     *
     * @param a_prism the Prism
     * @param a_scaleModeType the scale mode to set to the Prism
     * @return whether this call was successful or not
     */
    setScaleMode(a_prism: Prism | null, a_scaleModeType: ScaleModeType): boolean

    /**
     * Gets the scale mode of the Prism
     *
     * See setBodyDynamic for information on scale modes.
     *
     * @param a_prism the Prism
     * @return the scale mode retrieved from the Prism
     */
    getScaleMode(a_prism: Prism | null): ScaleModeType | null /* std::optional<ScaleModeType> */

    /**
     * Sets whether this Prism should snap while being moved or not
     *
     * "snapping" basically means that while a Prism is being moved by the user and it is near a
     * stationary Prism, then the moving Prism will suddenly move adjacent to the stationary Prism.
     *
     * @param a_prism the Prism
     * @param a_snap whether this Prism should snap or not
     * @return whether this call was successful or not
     */
    setSnap(a_prism: Prism | null, a_snap: boolean): boolean

    /**
     * Gets whether this Prism should snap while being moved or not
     *
     * See setSnap for information on snapping.
     *
     * @param a_prism the Prism
     * @return whether this Prism is snapping or not
     */
    getSnap(a_prism: Prism | null): boolean | null /* std::optional<bool> */

    /**
     * Sets the physical size range for the Prism
     *
     * The range of physical sizes (extent * scale) that this prism's largest extent can be scaled to.
     *
     * @param a_prism the Prism
     * @param a_min the minimum physical size this prism can be, in meters
     * @param a_max the maximum physical size this prism can be, in meters
     * @return whether this call was successful or not
     */
    setPhysicalSizeRange(a_prism: Prism | null, a_min: number /* float */, a_max: number /* float */): boolean

    /**
     * Gets the physical size range of the Prism
     *
     * See setPhysicalSizeRange for information on size ranges.
     *
     * @param a_prism the Prism
     * @return pair of minimum/maximum phisical size this prism can be, in meters
     *         or null if call was not successful
     */
    getPhysicalSizeRange(a_prism: Prism | null): [number, number] | null /* std::optional<glm::vec2> */

    /**
     * Sets whether this Prism can be directly manipulated while being moved or not
     *
     * Whether to support direct manipulation of the Prism's position in 6dof. Direct manipulation
     * is analogous to grabbing an object with your hand, but using the Control instead. The
     * grabbed prism is attached to the Control's pose while moving it. This is true by default.
     *
     * @param a_prism the Prism
     * @param a_enableDirectManipulation Whether this prism can be directly manipulated or not.
     * @return whether this call was successful or not
     */
    setDirectManipulationEnabled(a_prism: Prism | null, a_enableDirectManipulation: boolean): boolean

    /**
     * Gets the bool for whether direct manipulation is enabled or not for this Prism
     *
     * See setDirectManipulationEnabled for information on direct manipulation.
     *
     * @param a_prism the Prism
     * @return whether direct manipulation is enabled for the prism
     */
    getDirectManipulationEnabled(a_prism: Prism | null): boolean | null /* std::optional<bool> */

    /**
     * Set whether the given prism participates in collisions when prisms are in motion.
     *
     * This capability has been provided for app developers to handle edge cases
     * involving multi-prism apps.  By default, collisions are enabled when new
     * prisms are created.  It is recommended to change it only with discretion.
     *
     * @param a_prism Prism to enable/disable collisions.
     * @param a_enableCollisions Collisions will be enabled if true; disabled if false.
     * @return True if this call was successful; false otherwise.
     */
    setCollisionsEnabled(a_prism: Prism | null, a_enableCollisions: boolean): boolean

    /**
     * Get whether the given prism participates in collisions when prisms are in motion.
     *
     * @param a_prism Prism to get whether collisions are enabled.
     * @return True if collisions are enabled
     * for the given prism; false otherwise.
     */
    getCollisionsEnabled(a_prism: Prism | null): boolean | null /* std::optional<bool> */

    /**
     * Set the components of the transform of the collision box attached to the given prism.
     *
     * The transform of the collision box is relative to the boundaries of the
     * prism. It is required that the final transformed collision box not exceed
     * the boundaries of the prism itself along any axis.
     *
     * @param a_prism Prism whose collision box will be affected.
     * @param a_position Position to set for the collision box attached to the given
     * prism.  The default value is the origin: (0, 0, 0).
     * @param a_rotation Rotation to set for the collision box attached to the given
     * prism, which must be normalized.  The default value is unrotated.
     * @param a_scale Scale to set for the collision box attached to the given
     * prism.  The default value is unscaled: (1, 1, 1).
     * @return True if the call was successful and the collision-box transform was set;
     * false otherwise, in which case additional information will be posted in the log.
     */
    setCollisionBoxTransform(a_prism: Prism | null, a_position: [number, number, number] | Float32Array /* glm::vec3 */, a_rotation: [number, number, number, number] | Float32Array /* glm::quat */, a_scale: [number, number, number] | Float32Array /* glm::vec3 */): boolean

    /**
     * Get the transform of the collision box attached to the given prism.
     *
     * @param a_prism the prism.
     * @return transform of collision box attached to the given prism
     *         or null if call was not successful
     */
    getCollisionBoxTransform(a_prism: Prism | null): [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] | null /* std::optional<glm::mat4> */

    /**
     * Start a full screen exclusive mode for a landscape app which does its own rendering full screen
     * @param options exclusive client options
     * @param ctxGl OpenGL render context
     * @param clientVol owner volume id
     * @return exclusive mode renderer
     */
    startExclusiveModeGL(options: ExclusiveRender.ClientOptions, ctxGl: void | null /* void* */, clientVol: bigint /* uint64_t */): ExclusiveRender | null

    /**
     * Stop full screen exclusive mode
     */
    stopExclusiveMode(): boolean
    deInit(): number /* int */
    onSharingStart(sessionId: bigint /* uint64_t */, sceneGraphIDs: Array<bigint> /* std::vector<uint64_t> */): void
    onSharingStop(sessionId: bigint /* uint64_t */): void
    onAppStart(initArg: InitArg): void
    onAppPause(): void
    onAppResume(): void
    onAppUnloadResources(): void
    onDeviceActive(): void
    onDeviceReality(): void
    onDeviceStandby(): void
    updateLoop(a_fDelta: number /* float */): boolean
    eventListener(a_pEvent: ServerEvent | null): boolean
  }
}

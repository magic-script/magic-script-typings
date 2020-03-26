declare module 'lumin' {
  namespace AssetPacker {
  }

  /**
   * Base class for Lumin Runtime immersive apps.
   */
  class ImmersiveApp extends BaseApp {

    /**
     * Creates an immersive application instance.
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
     * @param a_ePrismType `default = PrismType.kWorld`<br/> - Type of Prism (eg: Tied to Headpose or Fixed in the world)
     * @return Prism - The prism
     *
     * @priv none
     */
    requestNewPrism(a_size: [number, number, number] | Float32Array /* glm::vec3 */, a_ePrismType?: PrismType): Prism | null

    /**
     * Toggles occlusion.
     *
     * @param a_enabled true to enable occlusion, false to disable
     * @priv Occlusion
     */
    setOcclusionEnabled(a_enabled: boolean): void

    /**
     * Enables or disables hand occlusion
     *
     * @param a_enable Set to true to enable hand occlusion, false to disable
     */
    setHandOcclusionEnabled(a_enable: boolean): void

    /**
     * Selects or deselects the specified prism.
     *
     * Input and other events are delivered only to the selected prism.
     *
     * @param a_prism - the prism
     * @param a_bSelected - true to select; false to deselect
     *
     * @priv none
     */
    selectPrism(a_prism: Prism | null, a_bSelected: boolean): void

    /**
     * Sets the skip raycast state of the prism. If the prism is skipped, all its Nodes will be as
     * well.
     *
     * @param a_prism The Prism.
     * @param a_skipRaycast Raycast skip flag.
     */
    setSkipRaycast(a_prism: Prism | null, a_skipRaycast: boolean): void

    /**
     * Returns the skip raycast state of the volume.
     *
     * @param a_prism The Prism.
     * @return true if the prism is skipped during raycasting
     **/
    isSkipRaycast(a_prism: Prism | null): boolean

    /**
     * Returns the world mesh data for a block at a given location.
     *
     * @param a_blockPos Block position in world-space.
     * @param a_blockData Class that will be filled in with the block data.
     * @return true if blockData has valid data
     */
    getWorldMeshBlockData(a_blockPos: [number, number, number] | Float32Array /* glm::vec3 */, a_blockData: WorldMeshBlockData): boolean

    /**
     * Request to get updates when world mesh block data has changed. WorldMeshBlockEventData messages
     * will be sent to the app's eventListener function when there is a change to the mesh blocks.
     *
     * @param a_prism Prism used to send the event messages.
     * @return true if the request was made successfully
     */
    requestWorldMeshBlockUpdates(a_prism: Prism | null): boolean

    /**
     * Request to stop getting updates when world mesh block data has changed.
     *
     * @param a_prism Prism used to make the requestWorldMeshBlockUpdates call.
     * @return true if the request was made successfully
     */
    stopWorldMeshBlockUpdates(a_prism: Prism | null): boolean

    /**
     * Gets whether hand occlusion is currently enabled or not
     *
     * @return true if currently enabled, false otherwise
     */
    isHandOcclusionEnabled(): boolean

    /**
     * Start a full screen exclusive mode for a landscape app which does its own rendering full screen
     * @param options exclusive client options
     * @param ctxGl OpenGL render context
     * @return exclusive mode renderer
     */
    startExclusiveModeGL(options: ExclusiveRender.ClientOptions, ctxGl: void | null /* void* */): ExclusiveRender | null

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

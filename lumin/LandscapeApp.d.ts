declare module 'lumin' {
  class LandscapeApp extends BaseApp {
    constructor(a_fTimeDelta: number = 0 /* 0 is not the actual default value */)
    requestNewPrism(a_size: [number, number, number] /* glm::vec3 */): Prism
    disableContentPersistence(a_prism: Prism): boolean
    getContentPersistenceId(a_prism: Prism): string
    setBodyDynamic(a_prism: Prism, a_bodyDynamicType: BodyDynamicType): boolean
    getBodyDynamic(a_prism: Prism): BodyDynamicType
    setScaleMode(a_prism: Prism, a_scaleModeType: ScaleModeType): boolean
    getScaleMode(a_prism: Prism): ScaleModeType
    setSnap(a_prism: Prism, a_snap: boolean): boolean
    getSnap(a_prism: Prism): boolean
    setPhysicalSizeRange(a_prism: Prism, a_min: number, a_max: number): boolean
    getPhysicalSizeRange(a_prism: Prism): [number, number] /* glm::vec2 */
    setDirectManipulationEnabled(a_prism: Prism, a_enableDirectManipulation: boolean): boolean
    getDirectManipulationEnabled(a_prism: Prism): boolean
    setCollisionsEnabled(a_prism: Prism, a_enableCollisions: boolean): boolean
    getCollisionsEnabled(a_prism: Prism): boolean
    setCollisionBoxTransform(a_prism: Prism, a_position: [number, number, number] /* glm::vec3 */, a_rotation: [number, number, number, number] /* glm::quat */, a_scale: [number, number, number] /* glm::vec3 */): boolean
    getCollisionBoxTransform(a_prism: Prism): [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] /* glm::mat4 */
    deInit(): number
    onSharingStart(sessionId: number, sceneGraphIDs: Array<number> /* std::vector */): void
    onSharingStop(sessionId: number): void
    onAppStart(initArg: InitArg): void
    onAppPause(): void
    onAppResume(): void
    onAppUnloadResources(): void
    onDeviceActive(): void
    onDeviceReality(): void
    onDeviceStandby(): void
    updateLoop(a_fDelta: number): boolean
    eventListener(a_pEvent: ServerEvent): boolean
  };
}

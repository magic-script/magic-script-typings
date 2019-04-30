declare module 'lumin' {
  namespace resources {
  }
  class BaseApp {
    constructor() {}
    quit(): void
    getWritablePath(): string
    getWritablePathWhenUnlocked(): string
    getPackagePath(): string
    getTempPath(): string
    getPackageName(): string
    getComponentName(): string
    getVisibleName(): string
    waitForTermination(): void
    isShareableApp(): boolean
    setEventSleepTime(a_fSleepTime: number): void
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
    getPrism(prismId: number): Prism
    deletePrism(prism: Prism): void
    resizePrism(a_prism: Prism, a_size: [number, number, number] /* glm::vec3 */): void
    positionPrism(a_prism: Prism, a_position: [number, number, number] /* glm::vec3 */): void
    orientPrism(a_prism: Prism, a_orientation: [number, number, number, number] /* glm::quat */): void
    positionPrismRelativeToCamera(a_prism: Prism, a_position: [number, number, number] /* glm::vec3 */): void
    orientPrismRelativeToCamera(a_prism: Prism, a_orientation: [number, number, number, number] /* glm::quat */): void
    getPrismPosition(a_prism: Prism): [number, number, number] /* glm::vec3 */
    getPrismRotation(a_prism: Prism): [number, number, number, number] /* glm::quat */
    getPrismTransform(a_prism: Prism): [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] /* glm::mat4 */
    getHeadposeWorldPosition(): [number, number, number] /* glm::vec3 */
    getHeadposeWorldForwardVector(): [number, number, number] /* glm::vec3 */
    getHeadposeWorldUpVector(): [number, number, number] /* glm::vec3 */
    getHeadposeConfidence(): number
    getHeadposeMode(): headtracking.Mode
    getHeadposeError(): headtracking.Error
    getFloorHeight(): number
    checkPrivilege(privilegeId: PrivilegeId): PrivilegeResult
    requestPrivilege(privilegeId: PrivilegeId): void
    requestPrivilegeBlocking(privilegeId: PrivilegeId): PrivilegeResult
    postNotification(notification: Notification): boolean
    dismissNotification(notification: Notification): boolean
    dismissAllNotifications(): void
    triggerControlHaptic(haptic: haptics.VibePattern, controlID: number = 0 /* 0 is not the actual default value */, deviceID: number = 0 /* 0 is not the actual default value */): void
    triggerControlHaptic(haptic: haptics.LedPattern, controlID: number = 0 /* 0 is not the actual default value */, deviceID: number = 0 /* 0 is not the actual default value */): void
    triggerControlCustomHaptics(haptics: Array<HapticInfo> /* std::vector */, controlID: number = 0 /* 0 is not the actual default value */, deviceID: number = 0 /* 0 is not the actual default value */): void
    triggerControlCustomHaptic(haptic: HapticInfo, controlID: number = 0 /* 0 is not the actual default value */, deviceID: number = 0 /* 0 is not the actual default value */): void
    triggerControlBodyHaptics(pattern: haptics.VibePattern, duration: number = 0 /* 0 is not the actual default value */, intensity: haptics.VibeIntensity = 0 /* 0 is not the actual default value */, controlID: number = 0 /* 0 is not the actual default value */, deviceID: number = 0 /* 0 is not the actual default value */): void
    triggerControlLEDHaptics(pattern: haptics.LedPattern, duration: number = 0 /* 0 is not the actual default value */, intensity: haptics.VibeIntensity = 0 /* 0 is not the actual default value */, controlID: number = 0 /* 0 is not the actual default value */, deviceID: number = 0 /* 0 is not the actual default value */): void
    getPreloadedResources(): resources.Preloaded
    raycastNodes(a_prism: Prism, a_rayStart: [number, number, number] /* glm::vec3 */, a_rayEnd: [number, number, number] /* glm::vec3 */): RayCastResultLight
    requestWorldRayCast(rayStart: [number, number, number] /* glm::vec3 */, rayDir: [number, number, number] /* glm::vec3 */, userValue: number, confidenceThreshold: number = 0 /* 0 is not the actual default value */): boolean
    requestWorldRayCast(rayStart: [number, number, number] /* glm::vec3 */, rayDir: [number, number, number] /* glm::vec3 */, width: number, height: number, horizFovDeg: number, userValue: number, confidenceThreshold: number = 0 /* 0 is not the actual default value */): boolean
    requestWorldPlaneCast(center: [number, number, number] /* glm::vec3 */, maxDistance: number, maxPlaneCount: number, flags: PlanecastFlags, userValue: number): boolean
    isImageTrackingReady(): boolean
    trackStaticImage(imageName: string, dimensions: [number, number] /* glm::vec2 */, file: string, prism: Prism): boolean
    trackMovingImage(imageName: string, dimensions: [number, number] /* glm::vec2 */, file: string, prism: Prism): boolean
    stopTrackImage(imageName: string): boolean
    static RunOnMainThread(a_runnable: callable): utils.CallbackID
    static RunOnMainThread(a_runnable: callable, delay: number): utils.CallbackID
    static RunOnMainThreadSync(a_runnable: callable): void
    static IsMainThreadRunnablePending(callbackId: utils.CallbackID): boolean
    static CancelMainThreadRunnable(callbackId: utils.CallbackID): boolean
  };
}

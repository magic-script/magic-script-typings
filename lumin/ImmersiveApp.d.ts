declare module 'lumin' {
  namespace AssetPacker {
  }
  class ImmersiveApp extends BaseApp {
    constructor(a_fTimeDelta: number = 0 /* 0 is not the actual default value */)
    requestNewPrism(a_size: [number, number, number] /* glm::vec3 */, a_ePrismType: PrismType = 0 /* 0 is not the actual default value */): Prism
    setOcclusionEnabled(a_enabled: boolean): void
    setHandOcclusionEnabled(a_enable: boolean): void
    selectPrism(a_prism: Prism, a_bSelected: boolean): void
    setSkipRaycast(a_prism: Prism, a_skipRaycast: boolean): void
    isSkipRaycast(a_prism: Prism): boolean
    getWorldMeshBlockData(a_blockPos: [number, number, number] /* glm::vec3 */, a_blockData: WorldMeshBlockData): boolean
    requestWorldMeshBlockUpdates(a_prism: Prism): boolean
    stopWorldMeshBlockUpdates(a_prism: Prism): boolean
    isHandOcclusionEnabled(): boolean
    startExclusiveModeGL(options: ExclusiveRender.ClientOptions, ctxGl: void): ExclusiveRender
    stopExclusiveMode(): boolean
    deInit(): number
    onSharingStart(sessionId: BigInt /* uint64_t */, sceneGraphIDs: Array<BigInt /* uint64_t */> /* std::vector */): void
    onSharingStop(sessionId: BigInt /* uint64_t */): void
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

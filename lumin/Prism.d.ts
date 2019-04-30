declare module 'lumin' {
  namespace glyph {
  }
  namespace multipack {
  }
  class KEmpty {
    constructor() {}
  };
  class PrismDataHandle {
    constructor() {}
  };
  class Prism {
    constructor() {}
    getPrismId(): number
    getRootNode(): RootNode
    getPosition(): [number, number, number] /* glm::vec3 */
    getScale(): [number, number, number] /* glm::vec3 */
    getRotation(): [number, number, number, number] /* glm::quat */
    getTransform(): [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] /* glm::mat4 */
    getSize(): [number, number, number] /* glm::vec3 */
    getUserHandGesture(): number
    getUserAutoHapticGesture(): number
    getHandGestureTouchDistance(): number
    getHandGestureHoverDistance(): number
    getNode(a_id: number): Node
    findNode(a_name: string, a_parent: Node): Node
    createNode(): Node
    createTransformNode(localTransform: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] /* glm::mat4 */): TransformNode
    createLineNode(): LineNode
    createModelAttachmentNode(modelNode: ModelNode, boneName: string): ModelAttachmentNode
    createModelNode(resourceId: number): ModelNode
    createQuadNode(resourceId: number): QuadNode
    createSpriteNode(resourceId: number): SpriteNode
    createAudioNode(): AudioNode
    createParticleNode(packageResource: number): ParticleNode
    createVideoNode(a_width: number = 0 /* 0 is not the actual default value */, a_height: number = 0 /* 0 is not the actual default value */): VideoNode
    createDefaultText2dNode(desc: Text2dDesc, style: resources.FontStyle = 0 /* 0 is not the actual default value */): Text2dNode
    createText2dNode(fontResourceId: number, desc: Text2dDesc): Text2dNode
    createLightNode(): LightNode
    deleteNode(a_pNode: Node): void
    createMaterialResourceId(a_fileName: string, a_localScopeOnly: boolean = 0 /* 0 is not the actual default value */, a_absolutePath: boolean = 0 /* 0 is not the actual default value */): number
    createModelResourceId(a_fileName: string, a_importScale: number, a_absolutePath: boolean = 0 /* 0 is not the actual default value */, a_descriptor: number = 0 /* 0 is not the actual default value */, a_basePath: string = 0 /* 0 is not the actual default value */): number
    createInstancedModelResourceId(a_fileName: string, a_maxInstances: number, a_absolutePath: boolean = 0 /* 0 is not the actual default value */, a_descriptor: number = 0 /* 0 is not the actual default value */, a_basePath: string = 0 /* 0 is not the actual default value */): number
    createAnimationResourceId(a_fileName: string, a_absolutePath: boolean = 0 /* 0 is not the actual default value */, a_descriptor: number = 0 /* 0 is not the actual default value */, a_basePath: string = 0 /* 0 is not the actual default value */): number
    createAnimationSetResourceId(a_fileName: string, a_absolutePath: boolean = 0 /* 0 is not the actual default value */, a_descriptor: number = 0 /* 0 is not the actual default value */, a_basePath: string = 0 /* 0 is not the actual default value */): number
    createAnimationBlendSetupResourceId(a_fileName: string, a_absolutePath: boolean = 0 /* 0 is not the actual default value */, a_descriptor: number = 0 /* 0 is not the actual default value */, a_basePath: string = 0 /* 0 is not the actual default value */): number
    createPlanarEGLResourceId(a_width: number = 0 /* 0 is not the actual default value */, a_height: number = 0 /* 0 is not the actual default value */): number
    createTextureResourceId(tex2dDesc: Desc2d, imageFile: string, a_absolutePath: boolean = 0 /* 0 is not the actual default value */, a_fileDescriptor: number = 0 /* 0 is not the actual default value */): number
    createTexturePackResourceId(a_vMetaDataNames: Array<string> /* std::vector */, a_params: multipack.Params, absolutePath: boolean = 0 /* 0 is not the actual default value */): number
    createTexturePackResourceId(directory: string, params: multipack.Params, absolutePath: boolean = 0 /* 0 is not the actual default value */): number
    createTexturePackResourceId(desc: multipack.Descriptor, absolutePath: boolean = 0 /* 0 is not the actual default value */): number
    createFont2dResourceId(fontDesc: glyph.Font2dDesc, fontFile: string, a_absolutePath: boolean = 0 /* 0 is not the actual default value */): number
    createLoadedFileAudioResourceId(a_fileName: string, a_absolutePath: boolean = 0 /* 0 is not the actual default value */, a_descriptor: number = 0 /* 0 is not the actual default value */, a_basePath: string = 0 /* 0 is not the actual default value */): number
    createStreamedFileAudioResourceId(a_fileName: string, a_absolutePath: boolean = 0 /* 0 is not the actual default value */, a_descriptor: number = 0 /* 0 is not the actual default value */, a_basePath: string = 0 /* 0 is not the actual default value */): number
    createParticlePackageResourceId(a_fileName: string, a_absolutePath: boolean = 0 /* 0 is not the actual default value */): number
    createObjMtlResourceId(a_fileName: string, a_absolutePath: boolean = 0 /* 0 is not the actual default value */): number
    destroyResource(a_iID: number): void
    getResource(a_iID: number): Resource
    isPrismSelected(): boolean
    getPrismType(): PrismType
    startTrackHandGesture(a_uieHandGesture: number): void
    stopTrackHandGesture(a_uieHandGesture: number): void
    startTrackingAutoHapticOnGesture(a_uieGesture: number): void
    stopTrackingAutoHapticOnGesture(a_uieGesture: number): void
    setHandGestureTouchDistance(distance: number): void
    setHandGestureHoverDistance(distance: number): void
    setHandGestureFilterPollRate(pollRate: number): void
    setHandGestureFilterPositionDelta(positionDelta: number): void
    setHandGestureFilterConfidenceLevel(confidenceLevel: number): void
    loadResourceModel(filePath: string): boolean
    loadSoundModel(filePath: string): boolean
    loadObjectModel(filePath: string): string
    parseObjectModel(modelString: string): string
    unloadObjectModel(name: string): boolean
    unloadResourceModels(): void
    unloadSoundModels(): void
    objectModelLoaded(name: string): boolean
    createNode(objectModelName: string, objectName: string = 0 /* 0 is not the actual default value */): Node
    createTree(objectModelName: string, objectName: string = 0 /* 0 is not the actual default value */): Node
    createAll(objectModelName: string): Node
    updateNode(node: Node, objectModelName: string, objectName: string = 0 /* 0 is not the actual default value */): boolean
    updateNodeFromString(node: Node, modelString: string, objectName: string): boolean
    getResource(name: string): number
    getSound(name: string): Sound
    setPrismController(rootPrismController: PrismController): void
    enableVisualState(value: boolean): void
    onDestroyEventSub(callback: callable): utils.CallbackID
    onDestroyEventUnsub(callbackID: utils.CallbackID): boolean
    setExcludeFromAutoFocus(exclude: boolean): void
    retainFPSMode(): KEmpty
    retainHeadposeUpdates(): PrismDataHandle
    retainEyeTrackingUpdates(): PrismDataHandle
    retainFloorUpdates(): PrismDataHandle
    setVolumeBloomStrength(a_volumeBloomStrength: number): void
    setPrismBloomStrength(a_prismBloomStrength: number): void
  };
}

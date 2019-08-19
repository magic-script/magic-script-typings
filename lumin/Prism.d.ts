declare module 'lumin' {
  namespace shader {
  }
  namespace utils {
  }
  namespace AssetPacker {
  }
  namespace glyph {
  }
  namespace multipack {
  }
  class KEmpty {
    constructor()
  };
  class PrismDataHandle {
    constructor()
  };
  class Prism {
    constructor()
    getPrismId(): BigInt /* uint64_t */
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
    getNode(a_id: BigInt /* uint64_t */): Node
    findNode(a_name: string, a_parent: Node): Node
    createNode(): Node
    createTransformNode(localTransform: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] /* glm::mat4 */): TransformNode
    createLineNode(): LineNode
    createModelAttachmentNode(modelNode: ModelNode, boneName: string): ModelAttachmentNode
    createModelNode(resourceId: BigInt /* uint64_t */): ModelNode
    createQuadNode(resourceId: BigInt /* uint64_t */): QuadNode
    createQuad3dNode(resourceId: BigInt /* uint64_t */): Quad3dNode
    createVolumeCubeNode(resourceId: BigInt /* uint64_t */): VolumeCubeNode
    createSpriteNode(resourceId: BigInt /* uint64_t */): SpriteNode
    createAudioNode(): AudioNode
    createParticleNode(packageResource: BigInt /* uint64_t */): ParticleNode
    createVideoNode(a_width: number = 0 /* 0 is not the actual default value */, a_height: number = 0 /* 0 is not the actual default value */): VideoNode
    createDefaultText2dNode(desc: Text2dDesc, style: resources.FontStyle = 0 /* 0 is not the actual default value */): Text2dNode
    createText2dNode(fontResourceId: BigInt /* uint64_t */, desc: Text2dDesc): Text2dNode
    createLightNode(): LightNode
    deleteNode(a_pNode: Node): void
    setPhysicsEnabled(a_enable: boolean, a_data: PhysicsInitializationData = 0 /* 0 is not the actual default value */): void
    setPhysicsPaused(a_pause: boolean): void
    setPhysicsWorldMeshEnabled(a_enable: boolean): void
    setPhysicsWorldMeshEnabled(a_enable: boolean, a_material: PhysicsMaterial): void
    createMaterialResourceId(a_fileName: string, a_localScopeOnly: boolean = 0 /* 0 is not the actual default value */, a_absolutePath: boolean = 0 /* 0 is not the actual default value */): BigInt /* uint64_t */
    createModelResourceId(a_fileName: string, a_importScale: number, a_absolutePath: boolean = 0 /* 0 is not the actual default value */, a_descriptor: number = 0 /* 0 is not the actual default value */, a_basePath: string = 0 /* 0 is not the actual default value */): BigInt /* uint64_t */
    createInstancedModelResourceId(a_fileName: string, a_maxInstances: number, a_absolutePath: boolean = 0 /* 0 is not the actual default value */, a_descriptor: number = 0 /* 0 is not the actual default value */, a_basePath: string = 0 /* 0 is not the actual default value */): BigInt /* uint64_t */
    createAnimationResourceId(a_fileName: string, a_absolutePath: boolean = 0 /* 0 is not the actual default value */, a_descriptor: number = 0 /* 0 is not the actual default value */, a_basePath: string = 0 /* 0 is not the actual default value */): BigInt /* uint64_t */
    createAnimationSetResourceId(a_fileName: string, a_absolutePath: boolean = 0 /* 0 is not the actual default value */, a_descriptor: number = 0 /* 0 is not the actual default value */, a_basePath: string = 0 /* 0 is not the actual default value */): BigInt /* uint64_t */
    createAnimationBlendSetupResourceId(a_fileName: string, a_absolutePath: boolean = 0 /* 0 is not the actual default value */, a_descriptor: number = 0 /* 0 is not the actual default value */, a_basePath: string = 0 /* 0 is not the actual default value */): BigInt /* uint64_t */
    createPlanarEGLResourceId(a_width: number = 0 /* 0 is not the actual default value */, a_height: number = 0 /* 0 is not the actual default value */): BigInt /* uint64_t */
    createTextureResourceId(tex2dDesc: Desc2d, imageFile: string, a_absolutePath: boolean = 0 /* 0 is not the actual default value */, a_fileDescriptor: number = 0 /* 0 is not the actual default value */): BigInt /* uint64_t */
    createTexturePackResourceId(a_vMetaDataNames: Array<string> /* std::vector */, a_params: multipack.Params, absolutePath: boolean = 0 /* 0 is not the actual default value */): BigInt /* uint64_t */
    createTexturePackResourceId(directory: string, params: multipack.Params, absolutePath: boolean = 0 /* 0 is not the actual default value */): BigInt /* uint64_t */
    createTexturePackResourceId(desc: multipack.Descriptor, absolutePath: boolean = 0 /* 0 is not the actual default value */): BigInt /* uint64_t */
    createTexture3dResourceId(image: Object, desc: Desc3d = 0 /* 0 is not the actual default value */): BigInt /* uint64_t */
    createFont2dResourceId(fontDesc: glyph.Font2dDesc, fontFile: string, a_absolutePath: boolean = 0 /* 0 is not the actual default value */): BigInt /* uint64_t */
    createLoadedFileAudioResourceId(a_fileName: string, a_absolutePath: boolean = 0 /* 0 is not the actual default value */, a_descriptor: number = 0 /* 0 is not the actual default value */, a_basePath: string = 0 /* 0 is not the actual default value */): BigInt /* uint64_t */
    createStreamedFileAudioResourceId(a_fileName: string, a_absolutePath: boolean = 0 /* 0 is not the actual default value */, a_descriptor: number = 0 /* 0 is not the actual default value */, a_basePath: string = 0 /* 0 is not the actual default value */): BigInt /* uint64_t */
    createParticlePackageResourceId(a_fileName: string, a_absolutePath: boolean = 0 /* 0 is not the actual default value */): BigInt /* uint64_t */
    createObjMtlResourceId(a_fileName: string, a_absolutePath: boolean = 0 /* 0 is not the actual default value */): BigInt /* uint64_t */
    destroyResource(a_iID: BigInt /* uint64_t */): void
    getResource(a_iID: BigInt /* uint64_t */): Resource
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
    getResource(name: string): BigInt /* uint64_t */
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
    createImage3d(format: utils.Format, width: number, height: number, depth: number): Object
  };
}

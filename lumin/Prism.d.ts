declare module 'lumin' {
  namespace glyph {
  }
  namespace multipack {
  }
  class KEmpty {
    constructor()
  }
  class PrismDataHandle {
    constructor()
  }

  /**
   * Represents the bounded volume within which the Scenegraph renders. Prisms are created via
   * the App::requestNewPrism function.
   */
  class Prism {
    constructor()

    /**
     * Get the Prism ID
     *
     * @return Prism ID
     *
     * @priv none
     */
    getPrismId(): bigint /* uint64_t */

    /**
     * Get the root node of the scene graph. The node version will be the last seen version.
     *
     * @return the root node
     *
     * @priv none
     */
    getRootNode(): RootNode

    /**
     * Get the position of this prism in world space
     *
     * @return Prism position
     */
    getPosition(): [number, number, number] /* glm::vec3 */

    /**
     * Get the scale of this prism
     *
     * @return Prism scale
     */
    getScale(): [number, number, number] /* glm::vec3 */

    /**
     * Get the rotation of this prism in world space
     *
     * @return Prism rotation
     */
    getRotation(): [number, number, number, number] /* glm::quat */

    /**
     * Get the Real World Transform of this prism
     *
     * @return Prism transform matrix
     */
    getTransform(): [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] /* glm::mat4 */

    /**
     * Get the Bounding size
     *
     * @return Size (width,height,depth)
     *
     * @priv none
     */
    getSize(): [number, number, number] /* glm::vec3 */

    /**
     * Gives the current set of Hand Gesture for this prism
     * required by User
     * @return - Active HandGesture Flags
     *
     * @priv none
     */
    getUserHandGesture(): number /* uint32_t */

    /**
     * Gives the current set of Auto Haptic Gestures for this prism
     * required by User
     * @return - Active DeviceGestureFlags
     *
     * @priv none
     */
    getUserAutoHapticGesture(): number /* uint32_t */

    /**
     * @return the distance threshold the hand gesture cursor must be at for a node
     *         register as touched
     *
     * @priv none
     */
    getHandGestureTouchDistance(): number /* float */

    /**
     * @return the distance threshold the hand gesture cursor must be at for a node
     *         register as hovered
     *
     * @priv none
     */
    getHandGestureHoverDistance(): number /* float */

    /**
     * Get a Node by its Id
     *
     * @param a_id The Node id to look for
     * @return the Node
     *
     * @priv none
     */
    getNode(a_id: bigint /* uint64_t */): Node

    /**
     * Find a Node by name.
     *
     * @param a_name The Node name to look for
     * @param a_parent The node which to look for a decendant node of.
     *
     * @priv none
     */
    findNode(a_name: string, a_parent: Node): Node

    /**
     * Creates a node of the base type, suitable for organizing a group of child nodes.
     */
    createNode(): Node

    /**
     * Create a new TransformNode.
     *
     * @param localTransform The local transform of the new node;
     *   use glm::mat4() for the identity matrix.
     * @return New TransformNode on success; nullptr on failure.
     *
     * @priv none
     */
    createTransformNode(localTransform: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] /* glm::mat4 */): TransformNode

    /**
     * Create a new LineNode.
     *
     * @return New LineNode on success; nullptr on failure.
     *
     * @priv none
     */
    createLineNode(): LineNode

    /**
     * Create a new ModelAttachmentNode.
     * @param modelNode the ModelNode to which the bone is attached
     * @param boneName the name of the bone
     * @return New ModelAttachmentNode on success; nullptr on failure.
     */
    createModelAttachmentNode(modelNode: ModelNode, boneName: string): ModelAttachmentNode

    /**
     * Create a new ModelNode.
     *
     * @param resourceId optional resource Id to use for the node.
     * @return New ModelNode on success; nullptr on failure.
     *
     * @priv none
     */
    createModelNode(resourceId: bigint /* uint64_t */): ModelNode

    /**
     * Create a new QuadNode.
     *
     * @param resourceId optional resource Id to use for the node.
     * @return New QuadNode on success; nullptr on failure.
     *
     * @priv none
     */
    createQuadNode(resourceId: bigint /* uint64_t */): QuadNode

    /** Create a new SpriteNode from a texture pack resource.
     *
     * @param resourceId id of the resource that contains the frames for the sprite.
     * @return New SpriteNode on success; nullptr on failure.
     *
     * @priv none
     */
    createSpriteNode(resourceId: bigint /* uint64_t */): SpriteNode

    /**
     * Create a new AudioNode.
     * After calling this createAudioNode(), must call one of the AudioNode::createSoundXxxxX() methods
     * to create a specific type of audio node.
     *
     * @return New AudioNode on success; nullptr on failure.
     */
    createAudioNode(): AudioNode

    /**
     * Create a new ParticleNode.
     *
     * @param packageResource resource Id of the particle effect package to use.
     * @return New ParticleNode on success; nullptr on failure.
     */
    createParticleNode(packageResource: bigint /* uint64_t */): ParticleNode

    /**
     * Creates a VideoNode with the given resolution and display mode.
     *
     * @param a_width `default = 512`<br/> - The surface resolution width 1 to 2048
     * @param a_height `default = 512`<br/> - The surface resolution height 1 to 2048
     * @return The new VideoNode
     *
     * @priv none
     */
    createVideoNode(a_width?: number /* uint32_t */, a_height?: number /* uint32_t */): VideoNode

    /**
     * Create a 2D text node using the Magic Leap UI font (regular weight).
     *
     * @param desc Information about the Text2dNode to create.
     * @param style `default = resources.FontStyle.kNormal`<br/> Either normal or italic style are supported.
     * @return The new Text2dNode.
     *
     * @priv none
     */
    createDefaultText2dNode(desc: Text2dDesc, style?: resources.FontStyle): Text2dNode

    /**
     * Create a 2D text node with the given font and properties
     * encapsulated in the description object.
     *
     * @param fontResourceId Id of a FontResource to use.
     * @param desc Information about the Text2dNode to create.
     * @return The new Text2dNode.
     *
     * @priv none
     */
    createText2dNode(fontResourceId: bigint /* uint64_t */, desc: Text2dDesc): Text2dNode

    /**
     * Creates directional light node
     *
     * @return The new LightNode
     *
     * @priv none
     */
    createLightNode(): LightNode

    /**
     * Tells the Prism to delete this Node and all its children
     *
     * @param a_pNode - The Node that will be deleted
     *
     * @priv none
     */
    deleteNode(a_pNode: Node): void

    /**
    * Creates a MaterialResource
    *
    * @param a_fileName File name of the resource to load. By default assumed to be a relative path
    *                    from the executable file.
    * @param a_localScopeOnly `default = false`<br/> The scope of this material. When set to true the kmat's contained in the material
    *                     will not be added to the prism's list of materials for general resolve.
    * @param a_absolutePath `default = false`<br/> Flag that a_fileName is an absolute path name, instead of a relative path.
    *
    * @return resource instance
    */
    createMaterialResourceId(a_fileName: string, a_localScopeOnly?: boolean, a_absolutePath?: boolean): bigint /* uint64_t */

    /**
    * Creates a ModelResource
    *
    * @param a_fileName File name of the resource to load. By default assumed to be a relative path
    *                    from the executable file.
    * @param a_importScale The scale that will be applied to this resource
    * @param a_absolutePath `default = false`<br/> Flag that a_fileName is an absolute path name, instead of a relative path.
    * @param a_descriptor `default = -1`<br/> - optional file descriptor that points to a resource.
    *                     If passed to the resource the resource takes ownership of the File Descriptor.
    * @param a_basePath `default = null`<br/> - If you are loading a resource from an absolute path, and that path !=
    *                     The current process path, set this field to the equivalent base path in the other
    *                     client directory. This allows path relative dependencies to solve a fully
    *                     qualified (absolute) path outside of the current process. This value defaults to
    *                     the currently executing process root.
    *
    * @return ID for the Resource
    */
    createModelResourceId(a_fileName: string, a_importScale: number /* float */, a_absolutePath?: boolean, a_descriptor?: number /* int */, a_basePath?: string): bigint /* uint64_t */

    /**
      * Creates instanced model resource
      *
      * @param a_fileName File name of the resource to load. By default assumed to be a relative path
      *                   from the executable file.
      * @param a_maxInstances MaximumInstances the resource can have
      * @param a_absolutePath `default = false`<br/> Flag that a_fileName is an absolute path name, instead of a relative path.
      * @param a_descriptor `default = -1`<br/> - optional file descriptor that points to a resource.
      *                     If passed to the resource the resource takes ownership of the File Descriptor.
      * @param a_basePath `default = null`<br/> - If you are loading a resource from an absolute path, and that path !=
      *                     The current process path, set this field to the equivalent base path in the other
      *                     client directory. This allows path relative dependencies to solve a fully
      *                     qualified (absolute) path outside of the current process. This value defaults to
      *                     the currently executing process root.
      *
      * NOTE: In case a Standard resource is already created. And a new resource is created with the same filename but instanced,
      * it will not overwrite the standard resource. In that case, you will have to delete that resource, and post that, create
      * a new instanced resource.
      * This is not required if you want to use an instanced resource as a standard resource.
      *
      * @return ID for the Resource
      *
      * @priv none
      */
    createInstancedModelResourceId(a_fileName: string, a_maxInstances: number /* uint32_t */, a_absolutePath?: boolean, a_descriptor?: number /* int */, a_basePath?: string): bigint /* uint64_t */

    /**
     * Creates animation resource
     *
     * @param a_fileName File name of the resource to load. By default assumed to be a relative path
     *                    from the executable file.
     * @param a_absolutePath `default = false`<br/> Flag that a_fileName is an absolute path name, instead of a relative path.
     * @param a_descriptor `default = -1`<br/> - optional file descriptor that points to a resource.
     *                     If passed to the resource the resource takes ownership of the File Descriptor.
     * @param a_basePath `default = null`<br/> - If you are loading a resource from an absolute path, and that path !=
     *                     The current process path, set this field to the equivalent base path in the other
     *                     client directory. This allows path relative dependencies to solve a fully
     *                     qualified (absolute) path outside of the current process. This value defaults to
     *                     the currently executing process root.
     *
     * NOTE: In case a Standard resource is already created. And a new resource is created with the same filename but instanced,
     * it will not overwrite the standard resource. In that case, you will have to delete that resource, and post that, create
     * a new instanced resource.
     * This is not required if you want to use an instanced resource as a standard resource.
     *
     * @return ID for the Resource
     *
     * @priv none
     */
    createAnimationResourceId(a_fileName: string, a_absolutePath?: boolean, a_descriptor?: number /* int */, a_basePath?: string): bigint /* uint64_t */

    /**
     * Creates animation set resource
     *
     * @param a_fileName File name of the resource to load. By default assumed to be a relative path
     *                    from the executable file.
     * @param a_absolutePath `default = false`<br/> Flag that a_fileName is an absolute path name, instead of a relative path.
     * @param a_descriptor `default = -1`<br/> - optional file descriptor that points to a resource.
     *                     If passed to the resource the resource takes ownership of the File Descriptor.
     * @param a_basePath `default = null`<br/> - If you are loading a resource from an absolute path, and that path !=
     *                     The current process path, set this field to the equivalent base path in the other
     *                     client directory. This allows path relative dependencies to solve a fully
     *                     qualified (absolute) path outside of the current process. This value defaults to
     *                     the currently executing process root.
     *
     * NOTE: In case a Standard resource is already created. And a new resource is created with the same filename but instanced,
     * it will not overwrite the standard resource. In that case, you will have to delete that resource, and post that, create
     * a new instanced resource.
     * This is not required if you want to use an instanced resource as a standard resource.
     *
     * @return ID for the Resource
     *
     * @priv none
     */
    createAnimationSetResourceId(a_fileName: string, a_absolutePath?: boolean, a_descriptor?: number /* int */, a_basePath?: string): bigint /* uint64_t */

    /**
     * Creates animation blend setup resource
     *
     * @param a_fileName File name of the resource to load. By default assumed to be a relative path
     *                    from the executable file.
     * @param a_absolutePath `default = false`<br/> Flag that a_fileName is an absolute path name, instead of a relative path.
     * @param a_descriptor `default = -1`<br/> - optional file descriptor that points to a resource.
     *                     If passed to the resource the resource takes ownership of the File Descriptor.
     * @param a_basePath `default = null`<br/> - If you are loading a resource from an absolute path, and that path !=
     *                     The current process path, set this field to the equivalent base path in the other
     *                     client directory. This allows path relative dependencies to solve a fully
     *                     qualified (absolute) path outside of the current process. This value defaults to
     *                     the currently executing process root.
     *
     * NOTE: In case a Standard resource is already created. And a new resource is created with the same filename but instanced,
     * it will not overwrite the standard resource. In that case, you will have to delete that resource, and post that, create
     * a new instanced resource.
     * This is not required if you want to use an instanced resource as a standard resource.
     *
     * @return ID for the Resource
     *
     * @priv none
     */
    createAnimationBlendSetupResourceId(a_fileName: string, a_absolutePath?: boolean, a_descriptor?: number /* int */, a_basePath?: string): bigint /* uint64_t */

    /**
     * Creates a PlanarResource of given size which provides access to EGL Context and EGL Surface.
     *
     * @param a_width `default = 512`<br/> - The Width 1 to 2048
     * @param a_height `default = 512`<br/> - The Height 1 to 2048
     * @return The new PlanarResource
     *
     * @priv none
     */
    createPlanarEGLResourceId(a_width?: number /* uint32_t */, a_height?: number /* uint32_t */): bigint /* uint64_t */

    /**
     * Create a TextureResource with the given description from the PNG image file.
     *
     * @param tex2dDesc Initialization parameters for the resource.  For reasonable default values,
     *                  use the DEFAULT static member.
     * @param imageFile PNG or JPEG-encoded image file. By default assumed to be a relative path
     *  from the executable file.
     * @param a_absolutePath `default = false`<br/> Flag that pngFile is an absolute path name, instead of a relative path.
     * @param a_fileDescriptor `default = -1`<br/> - optional file descriptor that points to a png resource.
     *        If passed to the resource the resource takes ownership of the File Descriptor.
     * @return The new TextureResource.
     *
     * @priv none
     */
    createTextureResourceId(tex2dDesc: Desc2d, imageFile: string, a_absolutePath?: boolean, a_fileDescriptor?: number /* int */): bigint /* uint64_t */

    /**
     * Create and initialize a TexturePackResource.
     *
     * @param a_vMetaDataNames a list of json files that define the TexturePack.
     * @param a_params control how the textures are rendered;
     * @param absolutePath `default = false`<br/> flag that the location is an absolute path instead of a relative path.
     * @return The new TexturePackResource.
     *
     * @priv none
     */
    createTexturePackResourceId(a_vMetaDataNames: Array<string> /* std::vector<std::string> */, a_params: multipack.Params, absolutePath?: boolean): bigint /* uint64_t */

    /**
     * Create and initialize a TexturePackResource.
     *
     * @param directory file-system directory where the data to initialize the resource is located.
     * @param params control how the textures are rendered; see PackedTextureParams::DEFAULT.
     * @param absolutePath `default = false`<br/> flag that the location is an absolute path instead of a relative path.
     * @return The new TexturePackResource.
     *
     * @priv none
     */
    createTexturePackResourceId(directory: string, params: multipack.Params, absolutePath?: boolean): bigint /* uint64_t */

    /**
     * Create and initialize a TexturePackResource.
     *
     * @param desc user-created descriptor object, which includes the location of the data.
     * @param absolutePath `default = false`<br/> flag that the location is an absolute path instead of a relative path.
     * @return The new TexturePackResource.
     *
     * @priv none
     */
    createTexturePackResourceId(desc: multipack.Descriptor, absolutePath?: boolean): bigint /* uint64_t */

    /**
     * Create a Font2dResource with the given description.
     *
     * @param fontDesc Initialization parameters for the resource.  For
     *   reasonable default values, use the DEFAULT static member.
     * @param fontFile The font file from which to load the glyphs. By default assumed to be a relative
     *                 path from the executable file.
     * @param a_absolutePath `default = false`<br/> Flag that fontFile is an absolute path name, instead of a relative path.
     * @return The new Font2dResource.
     *
     * @priv none
     */
    createFont2dResourceId(fontDesc: glyph.Font2dDesc, fontFile: string, a_absolutePath?: boolean): bigint /* uint64_t */

    /**
     * Creates audio resource by loading the entire audio file in the memory.
     * Use this method for audio files which are not too big to hog memory.
     * For big files you may use the createStreamedFileAudioResource method.
     *
     * @param a_fileName File name of the resource to load. By default assumed to be a relative path
     *                    from the executable file.
     * @param a_absolutePath `default = false`<br/> Flag that a_fileName is an absolute path name, instead of a relative path.
     * @param a_descriptor `default = -1`<br/> - optional file descriptor that points to a resource.
     *                     If passed to the resource the resource takes ownership of the File Descriptor.
     * @param a_basePath `default = null`<br/> - If you are loading a resource from an absolute path, and that path !=
     *                     The current process path, set this field to the equivalent base path in the other
     *                     client directory. This allows path relative dependencies to solve a fully
     *                     qualified (absolute) path outside of the current process. This value defaults to
     *                     the currently executing process root.
     *
     * @return Resource ID
     */
    createLoadedFileAudioResourceId(a_fileName: string, a_absolutePath?: boolean, a_descriptor?: number /* int */, a_basePath?: string): bigint /* uint64_t */

    /**
     * Create audio resource with streamed file.
     * Use this resource for big audio files where the audio file is loaded only chunk at a time in then memory.
     * Normally audio resource will be fully loaded in memory, in which case use createLoadedFileAudioResource() method.
     *
     * Uses same params as createLoadedFileAudioResource method.
     *
     * @return Resource ID
     */
    createStreamedFileAudioResourceId(a_fileName: string, a_absolutePath?: boolean, a_descriptor?: number /* int */, a_basePath?: string): bigint /* uint64_t */

    /**
     * Creates particle package resource
     *
     * @param a_fileName File name of the resource to load. By default assumed to be a relative path
     *                    from the executable file.
     * @param a_absolutePath `default = false`<br/> Flag that a_fileName is an absolute path name, instead of a relative path.
     *
     * @return ID for the Resource
     */
    createParticlePackageResourceId(a_fileName: string, a_absolutePath?: boolean): bigint /* uint64_t */

    /**
     * Creates mtl resource
     *
     * @param a_fileName File name of the resource to load. By default assumed to be a relative path
     *                    from the executable file.
     * @param a_absolutePath `default = false`<br/> Flag that a_fileName is an absolute path name, instead of a relative path.
     *
     * @return ID for the Resource
     */
    createObjMtlResourceId(a_fileName: string, a_absolutePath?: boolean): bigint /* uint64_t */

    /**
     * Destroys a Resource with a given ResourceIDType.
     * Paired with createResource(). For each create() there should be a destroy().
     *
     * @param a_iID - ID of the resource
     *
     * @priv none
     */
    destroyResource(a_iID: bigint /* uint64_t */): void

    /**
     * Get the resource with the given ID.  Should only be called on the render
     * thread for resources related to rendering.
     *
     * @param a_iID the unique ID of the resource to find.
     * @return pointer to the resource or else nullptr if not found.
     *
     * @priv none
     */
    getResource(a_iID: bigint /* uint64_t */): Resource

    /**
     * Get whether this Prism is selected.
     *
     * @return the selected state of the prism.
     *
     * @priv none
     */
    isPrismSelected(): boolean

    /**
     * Returns the Prism type.
     *
     * @return The Prism type.
     *
     * @priv none
     */
    getPrismType(): PrismType

    /**
     * Tracks a set of Hand gesture directed at this prism
     *
     * when Gesture occurs it is deliverd on the eventCallback
     * @param a_uieHandGesture The HandGestureFlags to start Tracking
     *
     * @priv none
     */
    startTrackHandGesture(a_uieHandGesture: number /* uint32_t */): void

    /**
     * Stops Tracking a set of Hand Gesture
     *
     * @param a_uieHandGesture The HandGestureFlags to stop Tracking
     *
     * @priv none
     */
    stopTrackHandGesture(a_uieHandGesture: number /* uint32_t */): void

    /**
     * Tracks a set of gestures we wish to enable auto haptics on
     *
     * @param a_uieGesture The DeviceGestureFlags to start Tracking
     *
     * @priv none
     */
    startTrackingAutoHapticOnGesture(a_uieGesture: number /* uint32_t */): void

    /**
     * Stops tracking a set of gestures for auto haptics
     *
     * @param a_uieGesture The DeviceGestureFlags to stop Tracking
     *
     * @priv none
     */
    stopTrackingAutoHapticOnGesture(a_uieGesture: number /* uint32_t */): void

    /**
     * Set how close the hand gesture cursor must be to a node for a touch to register
     * @param distance The touch distance threshold
     *
     * @priv none
     */
    setHandGestureTouchDistance(distance: number /* float */): void

    /**
     * Set how close the hand gesture cursor must be to a node for a hover to register
     * @param distance The hover distance threshold
     *
     * @priv none
     */
    setHandGestureHoverDistance(distance: number /* float */): void

    /**
     * Set the input service hand gesture poll rate
     * @param pollRate the poll rate (in Hz, default is 20.0f)
     *
     * @priv none
     */
    setHandGestureFilterPollRate(pollRate: number /* float */): void

    /**
     * Set the input service hand gesture position delta filter
     * @param positionDelta the position delta (in world space meters, default is 0.03f)
     *
     * @priv none
     */
    setHandGestureFilterPositionDelta(positionDelta: number /* float */): void

    /**
     * Set the input service hand gesture confidence level filter
     * @param confidenceLevel the confidence level filter (between 0.0f and 1.0f, default is 0.0f)
     *
     * @priv none
     */
    setHandGestureFilterConfidenceLevel(confidenceLevel: number /* float */): void

    /**
     * Load a resource model into memory, and create its defined resources.
     * @param filePath Path to resource model file.
     * @return True if the resource model was successfully loaded.
     *
     * @priv none
     */
    loadResourceModel(filePath: string): boolean

    /**
     * Load a sound model into memory, and create its defined sounds.
     * @param filePath Path to sound model file.
     * @return True if the sound model was successfully loaded.
     *
     * @priv none
     */
    loadSoundModel(filePath: string): boolean

    /**
     * Load an object model into memory.
     *
     * @param filePath Path to object model file.
     * @return If successful this string will be populated with the object model's name.
     *
     * @priv none
     */
    loadObjectModel(filePath: string): string

    /**
     * Load an object model from a string into memory.
     *
     * @param modelString Object model data as a string.
     * @return If successful this string will be populated with the object model's name.
     *
     * @priv none
     */
    parseObjectModel(modelString: string): string

    /**
     * Unload cached object model.
     * @param name The name of the object model.
     * @return True if an object model with the given name was found and unloaded.
     *
     * @priv none
     */
    unloadObjectModel(name: string): boolean

    /**
     * Unload all resource models.
     * Current behaviour is to clear all name to resource mappings, but will not destroy resources.
     *
     * @priv none
     */
    unloadResourceModels(): void

    /**
     * Unload all sound models.
     * Current behaviour is to clear all sound mappings and destroy sound instances.
     *
     * @priv none
     */
    unloadSoundModels(): void

    /**
     * Determine whether or not an object model is loaded.
     * @param name The name of the object model.
     * @return True if a object model with the given name is loaded.
     *
     * @priv none
     */
    objectModelLoaded(name: string): boolean

    /**
     * Create a node from a loaded object model.
     * @param objectModelName The name of the object model.
     * @param objectName `default = ""`<br/> The name of an object in the object model. If empty, the first object in the object model is used.
     * @return Newly created node or nullptr if creation failed.
     *
     * @priv none
     */
    createNode(objectModelName: string, objectName?: string): Node

    /**
     * Create a node tree from a loaded object model.
     * @param objectModelName The name of the object model.
     * @param objectName `default = ""`<br/> The name of an object in the object model. A node tree will be created using this node and its descendants. If empty, the first object in the object model is used.
     * @return Root node of a newly created node tree or nullptr if creation failed.
     *
     * @priv none
     */
    createTree(objectModelName: string, objectName?: string): Node

    /**
     * Create all objects from a loaded object model and
     * return them as children of newly created root Node.
     * @param objectModelName The name of the object model.
     * @return Root node containing all objects from model or nullptr if creation failed
     *
     * @priv none
     */
    createAll(objectModelName: string): Node

    /**
     * Update a node with property values from an object in an object model.
     * @param node The node to be updated.
     * @param objectModelName The name of a loaded object model.
     * @param objectName `default = ""`<br/> The name of an object in the object model. If empty, the first object in the object model is used.
     * @return True if the object model is loaded, the object was found in the object model and all object properties were successfully updated to the node.
     *
     * @priv none
     */
    updateNode(node: Node, objectModelName: string, objectName?: string): boolean

    /**
     * Update a node with property values from an object in an object model as a string.
     * @param node The node to be updated.
     * @param modelString The object model as a string.
     * @param objectName The name of an object in the object model. If empty, the first object in the object model is used.
     * @return True if the object was found in the object model and all object properties were successfully updated to the node.
     *
     * @priv none
     */
    updateNodeFromString(node: Node, modelString: string, objectName: string): boolean

    /**
     * Acquire loaded resource mapped to the given name in the declarative system.
     * @param name The name of the resource.
     * @return ID of named resource or INVALID_RESOURCE_ID if no resource is loaded with that name.
     *
     * @priv none
     */
    getResource(name: string): bigint /* uint64_t */

    /**
     * Acquire loaded sound mapped to the given name in the declarative system.
     * @param name The name of the sound.
     * @return Pointer to named sound or nullptr if no sound is loaded with that name.
     *
     * @priv none
     */
    getSound(name: string): Sound

    /**
     * Sets the root prism controller that will receive event and update loop callbacks
     * for this prism.
     *
     * The root prism controller's scene graph will be attached to the prism root node.
     *
     * @param rootPrismController The prism controller to use or nullptr to just remove
     *        the current root prism controller
     *
     * @priv none
     */
    setPrismController(rootPrismController: PrismController): void

    /**
     * Enable//Disable the Prism Visual state changes
     *
     * @param value - Enable/Disable the state changing
     *
     * @priv none
     */
    enableVisualState(value: boolean): void

    /**
     * Returns an Event that will be triggered right before this prism is destroyed.
     *
     * This event will be dispatched after PrismController::onDetachPrism is called
     * (if there is a PrismController attached to the prism).
     *
     * @priv none
     */
    onDestroyEventSub(callback: (arg0: Prism) => void): utils.CallbackID
    onDestroyEventUnsub(callbackID: utils.CallbackID): boolean

    /**
     * If true, this prism will be excluded from the server's auto focus calculation
     *
     * @priv none
     */
    setExcludeFromAutoFocus(exclude: boolean): void

    /**
     * Retain this shared pointer to force the prism to enter fps mode
     *
     * @priv none
     */
    retainFPSMode(): KEmpty

    /**
     * Retain this shared pointer to force the prism to receive headpose updates.
     *
     * NOTE: Must be called on client main thread.
     *
     * @priv none
     */
    retainHeadposeUpdates(): PrismDataHandle

    /**
     * Retain this shared pointer to force the prism to receive eye tracking updates.
     *
     * NOTE: Must be called on client main thread.
     *
     * @priv none
     */
    retainEyeTrackingUpdates(): PrismDataHandle

    /** deprecated, please use setPrismBloomStrength instead */
    setVolumeBloomStrength(a_volumeBloomStrength: number /* float */): void

    /**
     * Set the Bloom Strength for this prism. Default is set to 1.0
     *
     * @param a_prismBloomStrength - Bloom strength that will be applied to all the RenderNodes of the prism
     */
    setPrismBloomStrength(a_prismBloomStrength: number /* float */): void
  }
}

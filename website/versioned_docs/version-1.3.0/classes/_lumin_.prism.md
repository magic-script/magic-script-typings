---
id: "_lumin_.prism"
title: "Prism"
sidebar_label: "Prism"
---

Represents the bounded volume within which the Scenegraph renders. Prisms are created via
the App::requestNewPrism function.

## Hierarchy

* **Prism**

## Constructors

###  constructor

\+ **new Prism**(): *[Prism](_lumin_.prism.md)*

**Returns:** *[Prism](_lumin_.prism.md)*

## Methods

###  createAll

▸ **createAll**(`objectModelName`: string): *[Node](_lumin_.node.md)*

Create all objects from a loaded object model and
return them as children of newly created root Node.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`objectModelName` | string | The name of the object model. |

**Returns:** *[Node](_lumin_.node.md)*

Root node containing all objects from model or nullptr if creation failed

___

###  createAnimationBlendSetupResourceId

▸ **createAnimationBlendSetupResourceId**(`a_fileName`: string, `a_absolutePath?`: boolean, `a_descriptor?`: number, `a_basePath?`: string): *bigint*

Creates animation blend setup resource

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_fileName` | string | File name of the resource to load. By default assumed to be a relative path                    from the executable file. |
`a_absolutePath?` | boolean | `default = false`<br/> Flag that a_fileName is an absolute path name, instead of a relative path. |
`a_descriptor?` | number | `default = -1`<br/> - optional file descriptor that points to a resource.                     If passed to the resource the resource takes ownership of the File Descriptor. |
`a_basePath?` | string | `default = null`<br/> - If you are loading a resource from an absolute path, and that path !=                     The current process path, set this field to the equivalent base path in the other                     client directory. This allows path relative dependencies to solve a fully                     qualified (absolute) path outside of the current process. This value defaults to                     the currently executing process root.  NOTE: In case a Standard resource is already created. And a new resource is created with the same filename but instanced, it will not overwrite the standard resource. In that case, you will have to delete that resource, and post that, create a new instanced resource. This is not required if you want to use an instanced resource as a standard resource.  |

**Returns:** *bigint*

ID for the Resource

___

###  createAnimationResourceId

▸ **createAnimationResourceId**(`a_fileName`: string, `a_absolutePath?`: boolean, `a_descriptor?`: number, `a_basePath?`: string): *bigint*

Creates animation resource

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_fileName` | string | File name of the resource to load. By default assumed to be a relative path                    from the executable file. |
`a_absolutePath?` | boolean | `default = false`<br/> Flag that a_fileName is an absolute path name, instead of a relative path. |
`a_descriptor?` | number | `default = -1`<br/> - optional file descriptor that points to a resource.                     If passed to the resource the resource takes ownership of the File Descriptor. |
`a_basePath?` | string | `default = null`<br/> - If you are loading a resource from an absolute path, and that path !=                     The current process path, set this field to the equivalent base path in the other                     client directory. This allows path relative dependencies to solve a fully                     qualified (absolute) path outside of the current process. This value defaults to                     the currently executing process root.  NOTE: In case a Standard resource is already created. And a new resource is created with the same filename but instanced, it will not overwrite the standard resource. In that case, you will have to delete that resource, and post that, create a new instanced resource. This is not required if you want to use an instanced resource as a standard resource.  |

**Returns:** *bigint*

ID for the Resource

___

###  createAnimationSetResourceId

▸ **createAnimationSetResourceId**(`a_fileName`: string, `a_absolutePath?`: boolean, `a_descriptor?`: number, `a_basePath?`: string): *bigint*

Creates animation set resource

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_fileName` | string | File name of the resource to load. By default assumed to be a relative path                    from the executable file. |
`a_absolutePath?` | boolean | `default = false`<br/> Flag that a_fileName is an absolute path name, instead of a relative path. |
`a_descriptor?` | number | `default = -1`<br/> - optional file descriptor that points to a resource.                     If passed to the resource the resource takes ownership of the File Descriptor. |
`a_basePath?` | string | `default = null`<br/> - If you are loading a resource from an absolute path, and that path !=                     The current process path, set this field to the equivalent base path in the other                     client directory. This allows path relative dependencies to solve a fully                     qualified (absolute) path outside of the current process. This value defaults to                     the currently executing process root.  NOTE: In case a Standard resource is already created. And a new resource is created with the same filename but instanced, it will not overwrite the standard resource. In that case, you will have to delete that resource, and post that, create a new instanced resource. This is not required if you want to use an instanced resource as a standard resource.  |

**Returns:** *bigint*

ID for the Resource

___

###  createAudioNode

▸ **createAudioNode**(): *[AudioNode](_lumin_.audionode.md)*

Create a new AudioNode.
After calling this createAudioNode(), must call one of the AudioNode::createSoundXxxxX() methods
to create a specific type of audio node.

**Returns:** *[AudioNode](_lumin_.audionode.md)*

New AudioNode on success; nullptr on failure.

___

###  createDefaultText2dNode

▸ **createDefaultText2dNode**(`desc`: [Text2dDesc](_lumin_.text2ddesc.md), `style?`: [FontStyle](../enums/_lumin_.resources.fontstyle.md)): *[Text2dNode](_lumin_.text2dnode.md)*

Create a 2D text node using the Magic Leap UI font (regular weight).

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`desc` | [Text2dDesc](_lumin_.text2ddesc.md) | Information about the Text2dNode to create. |
`style?` | [FontStyle](../enums/_lumin_.resources.fontstyle.md) | `default = resources.FontStyle.kNormal`<br/> Either normal or italic style are supported. |

**Returns:** *[Text2dNode](_lumin_.text2dnode.md)*

The new Text2dNode.

___

###  createFont2dResourceId

▸ **createFont2dResourceId**(`fontDesc`: [Font2dDesc](_lumin_.glyph.font2ddesc.md), `fontFile`: string, `a_absolutePath?`: boolean): *bigint*

Create a Font2dResource with the given description.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fontDesc` | [Font2dDesc](_lumin_.glyph.font2ddesc.md) | Initialization parameters for the resource.  For   reasonable default values, use the DEFAULT static member. |
`fontFile` | string | The font file from which to load the glyphs. By default assumed to be a relative                 path from the executable file. |
`a_absolutePath?` | boolean | `default = false`<br/> Flag that fontFile is an absolute path name, instead of a relative path. |

**Returns:** *bigint*

The new Font2dResource.

___

###  createInstancedModelResourceId

▸ **createInstancedModelResourceId**(`a_fileName`: string, `a_maxInstances`: number, `a_absolutePath?`: boolean, `a_descriptor?`: number, `a_basePath?`: string): *bigint*

Creates instanced model resource

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_fileName` | string | File name of the resource to load. By default assumed to be a relative path                   from the executable file. |
`a_maxInstances` | number | MaximumInstances the resource can have |
`a_absolutePath?` | boolean | `default = false`<br/> Flag that a_fileName is an absolute path name, instead of a relative path. |
`a_descriptor?` | number | `default = -1`<br/> - optional file descriptor that points to a resource.                     If passed to the resource the resource takes ownership of the File Descriptor. |
`a_basePath?` | string | `default = null`<br/> - If you are loading a resource from an absolute path, and that path !=                     The current process path, set this field to the equivalent base path in the other                     client directory. This allows path relative dependencies to solve a fully                     qualified (absolute) path outside of the current process. This value defaults to                     the currently executing process root.  NOTE: In case a Standard resource is already created. And a new resource is created with the same filename but instanced, it will not overwrite the standard resource. In that case, you will have to delete that resource, and post that, create a new instanced resource. This is not required if you want to use an instanced resource as a standard resource.  |

**Returns:** *bigint*

ID for the Resource

___

###  createLightNode

▸ **createLightNode**(): *[LightNode](_lumin_.lightnode.md)*

Creates directional light node

**`priv`** none

**Returns:** *[LightNode](_lumin_.lightnode.md)*

The new LightNode

___

###  createLineNode

▸ **createLineNode**(): *[LineNode](_lumin_.linenode.md)*

Create a new LineNode.

**`priv`** none

**Returns:** *[LineNode](_lumin_.linenode.md)*

New LineNode on success; nullptr on failure.

___

###  createLoadedFileAudioResourceId

▸ **createLoadedFileAudioResourceId**(`a_fileName`: string, `a_absolutePath?`: boolean, `a_descriptor?`: number, `a_basePath?`: string): *bigint*

Creates audio resource by loading the entire audio file in the memory.
Use this method for audio files which are not too big to hog memory.
For big files you may use the createStreamedFileAudioResource method.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_fileName` | string | File name of the resource to load. By default assumed to be a relative path                    from the executable file. |
`a_absolutePath?` | boolean | `default = false`<br/> Flag that a_fileName is an absolute path name, instead of a relative path. |
`a_descriptor?` | number | `default = -1`<br/> - optional file descriptor that points to a resource.                     If passed to the resource the resource takes ownership of the File Descriptor. |
`a_basePath?` | string | `default = null`<br/> - If you are loading a resource from an absolute path, and that path !=                     The current process path, set this field to the equivalent base path in the other                     client directory. This allows path relative dependencies to solve a fully                     qualified (absolute) path outside of the current process. This value defaults to                     the currently executing process root.  |

**Returns:** *bigint*

Resource ID

___

###  createMaterialResourceId

▸ **createMaterialResourceId**(`a_fileName`: string, `a_localScopeOnly?`: boolean, `a_absolutePath?`: boolean): *bigint*

Creates a MaterialResource

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_fileName` | string | File name of the resource to load. By default assumed to be a relative path                    from the executable file. |
`a_localScopeOnly?` | boolean | `default = false`<br/> The scope of this material. When set to true the kmat's contained in the material                     will not be added to the prism's list of materials for general resolve. |
`a_absolutePath?` | boolean | `default = false`<br/> Flag that a_fileName is an absolute path name, instead of a relative path.  |

**Returns:** *bigint*

resource instance

___

###  createModelAttachmentNode

▸ **createModelAttachmentNode**(`modelNode`: [ModelNode](_lumin_.modelnode.md), `boneName`: string): *[ModelAttachmentNode](_lumin_.modelattachmentnode.md)*

Create a new ModelAttachmentNode.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`modelNode` | [ModelNode](_lumin_.modelnode.md) | the ModelNode to which the bone is attached |
`boneName` | string | the name of the bone |

**Returns:** *[ModelAttachmentNode](_lumin_.modelattachmentnode.md)*

New ModelAttachmentNode on success; nullptr on failure.

___

###  createModelNode

▸ **createModelNode**(`resourceId`: bigint): *[ModelNode](_lumin_.modelnode.md)*

Create a new ModelNode.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`resourceId` | bigint | optional resource Id to use for the node. |

**Returns:** *[ModelNode](_lumin_.modelnode.md)*

New ModelNode on success; nullptr on failure.

___

###  createModelResourceId

▸ **createModelResourceId**(`a_fileName`: string, `a_importScale`: number, `a_absolutePath?`: boolean, `a_descriptor?`: number, `a_basePath?`: string): *bigint*

Creates a ModelResource

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_fileName` | string | File name of the resource to load. By default assumed to be a relative path                    from the executable file. |
`a_importScale` | number | The scale that will be applied to this resource |
`a_absolutePath?` | boolean | `default = false`<br/> Flag that a_fileName is an absolute path name, instead of a relative path. |
`a_descriptor?` | number | `default = -1`<br/> - optional file descriptor that points to a resource.                     If passed to the resource the resource takes ownership of the File Descriptor. |
`a_basePath?` | string | `default = null`<br/> - If you are loading a resource from an absolute path, and that path !=                     The current process path, set this field to the equivalent base path in the other                     client directory. This allows path relative dependencies to solve a fully                     qualified (absolute) path outside of the current process. This value defaults to                     the currently executing process root.  |

**Returns:** *bigint*

ID for the Resource

___

###  createNode

▸ **createNode**(): *[Node](_lumin_.node.md)*

Creates a node of the base type, suitable for organizing a group of child nodes.

**Returns:** *[Node](_lumin_.node.md)*

▸ **createNode**(`objectModelName`: string, `objectName?`: string): *[Node](_lumin_.node.md)*

Create a node from a loaded object model.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`objectModelName` | string | The name of the object model. |
`objectName?` | string | `default = ""`<br/> The name of an object in the object model. If empty, the first object in the object model is used. |

**Returns:** *[Node](_lumin_.node.md)*

Newly created node or nullptr if creation failed.

___

###  createObjMtlResourceId

▸ **createObjMtlResourceId**(`a_fileName`: string, `a_absolutePath?`: boolean): *bigint*

Creates mtl resource

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_fileName` | string | File name of the resource to load. By default assumed to be a relative path                    from the executable file. |
`a_absolutePath?` | boolean | `default = false`<br/> Flag that a_fileName is an absolute path name, instead of a relative path.  |

**Returns:** *bigint*

ID for the Resource

___

###  createParticleNode

▸ **createParticleNode**(`packageResource`: bigint): *[ParticleNode](_lumin_.particlenode.md)*

Create a new ParticleNode.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`packageResource` | bigint | resource Id of the particle effect package to use. |

**Returns:** *[ParticleNode](_lumin_.particlenode.md)*

New ParticleNode on success; nullptr on failure.

___

###  createParticlePackageResourceId

▸ **createParticlePackageResourceId**(`a_fileName`: string, `a_absolutePath?`: boolean): *bigint*

Creates particle package resource

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_fileName` | string | File name of the resource to load. By default assumed to be a relative path                    from the executable file. |
`a_absolutePath?` | boolean | `default = false`<br/> Flag that a_fileName is an absolute path name, instead of a relative path.  |

**Returns:** *bigint*

ID for the Resource

___

###  createPlanarEGLResourceId

▸ **createPlanarEGLResourceId**(`a_width?`: number, `a_height?`: number): *bigint*

Creates a PlanarResource of given size which provides access to EGL Context and EGL Surface.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_width?` | number | `default = 512`<br/> - The Width 1 to 2048 |
`a_height?` | number | `default = 512`<br/> - The Height 1 to 2048 |

**Returns:** *bigint*

The new PlanarResource

___

###  createQuadNode

▸ **createQuadNode**(`resourceId`: bigint): *[QuadNode](_lumin_.quadnode.md)*

Create a new QuadNode.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`resourceId` | bigint | optional resource Id to use for the node. |

**Returns:** *[QuadNode](_lumin_.quadnode.md)*

New QuadNode on success; nullptr on failure.

___

###  createSpriteNode

▸ **createSpriteNode**(`resourceId`: bigint): *[SpriteNode](_lumin_.spritenode.md)*

Create a new SpriteNode from a texture pack resource.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`resourceId` | bigint | id of the resource that contains the frames for the sprite. |

**Returns:** *[SpriteNode](_lumin_.spritenode.md)*

New SpriteNode on success; nullptr on failure.

___

###  createStreamedFileAudioResourceId

▸ **createStreamedFileAudioResourceId**(`a_fileName`: string, `a_absolutePath?`: boolean, `a_descriptor?`: number, `a_basePath?`: string): *bigint*

Create audio resource with streamed file.
Use this resource for big audio files where the audio file is loaded only chunk at a time in then memory.
Normally audio resource will be fully loaded in memory, in which case use createLoadedFileAudioResource() method.

Uses same params as createLoadedFileAudioResource method.

**Parameters:**

Name | Type |
------ | ------ |
`a_fileName` | string |
`a_absolutePath?` | boolean |
`a_descriptor?` | number |
`a_basePath?` | string |

**Returns:** *bigint*

Resource ID

___

###  createText2dNode

▸ **createText2dNode**(`fontResourceId`: bigint, `desc`: [Text2dDesc](_lumin_.text2ddesc.md)): *[Text2dNode](_lumin_.text2dnode.md)*

Create a 2D text node with the given font and properties
encapsulated in the description object.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fontResourceId` | bigint | Id of a FontResource to use. |
`desc` | [Text2dDesc](_lumin_.text2ddesc.md) | Information about the Text2dNode to create. |

**Returns:** *[Text2dNode](_lumin_.text2dnode.md)*

The new Text2dNode.

___

###  createTexturePackResourceId

▸ **createTexturePackResourceId**(`a_vMetaDataNames`: Array‹string›, `a_params`: [Params](_lumin_.multipack.params.md), `absolutePath?`: boolean): *bigint*

Create and initialize a TexturePackResource.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_vMetaDataNames` | Array‹string› | a list of json files that define the TexturePack. |
`a_params` | [Params](_lumin_.multipack.params.md) | control how the textures are rendered; |
`absolutePath?` | boolean | `default = false`<br/> flag that the location is an absolute path instead of a relative path. |

**Returns:** *bigint*

The new TexturePackResource.

▸ **createTexturePackResourceId**(`directory`: string, `params`: [Params](_lumin_.multipack.params.md), `absolutePath?`: boolean): *bigint*

Create and initialize a TexturePackResource.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`directory` | string | file-system directory where the data to initialize the resource is located. |
`params` | [Params](_lumin_.multipack.params.md) | control how the textures are rendered; see PackedTextureParams::DEFAULT. |
`absolutePath?` | boolean | `default = false`<br/> flag that the location is an absolute path instead of a relative path. |

**Returns:** *bigint*

The new TexturePackResource.

▸ **createTexturePackResourceId**(`desc`: [Descriptor](_lumin_.multipack.descriptor.md), `absolutePath?`: boolean): *bigint*

Create and initialize a TexturePackResource.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`desc` | [Descriptor](_lumin_.multipack.descriptor.md) | user-created descriptor object, which includes the location of the data. |
`absolutePath?` | boolean | `default = false`<br/> flag that the location is an absolute path instead of a relative path. |

**Returns:** *bigint*

The new TexturePackResource.

___

###  createTextureResourceId

▸ **createTextureResourceId**(`tex2dDesc`: [Desc2d](_lumin_.desc2d.md), `imageFile`: string, `a_absolutePath?`: boolean, `a_fileDescriptor?`: number): *bigint*

Create a TextureResource with the given description from the PNG image file.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tex2dDesc` | [Desc2d](_lumin_.desc2d.md) | Initialization parameters for the resource.  For reasonable default values,                  use the DEFAULT static member. |
`imageFile` | string | PNG or JPEG-encoded image file. By default assumed to be a relative path  from the executable file. |
`a_absolutePath?` | boolean | `default = false`<br/> Flag that pngFile is an absolute path name, instead of a relative path. |
`a_fileDescriptor?` | number | `default = -1`<br/> - optional file descriptor that points to a png resource.        If passed to the resource the resource takes ownership of the File Descriptor. |

**Returns:** *bigint*

The new TextureResource.

___

###  createTransformNode

▸ **createTransformNode**(`localTransform`: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]): *[TransformNode](_lumin_.transformnode.md)*

Create a new TransformNode.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`localTransform` | [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] | The local transform of the new node;   use glm::mat4() for the identity matrix. |

**Returns:** *[TransformNode](_lumin_.transformnode.md)*

New TransformNode on success; nullptr on failure.

___

###  createTree

▸ **createTree**(`objectModelName`: string, `objectName?`: string): *[Node](_lumin_.node.md)*

Create a node tree from a loaded object model.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`objectModelName` | string | The name of the object model. |
`objectName?` | string | `default = ""`<br/> The name of an object in the object model. A node tree will be created using this node and its descendants. If empty, the first object in the object model is used. |

**Returns:** *[Node](_lumin_.node.md)*

Root node of a newly created node tree or nullptr if creation failed.

___

###  createVideoNode

▸ **createVideoNode**(`a_width?`: number, `a_height?`: number): *[VideoNode](_lumin_.videonode.md)*

Creates a VideoNode with the given resolution and display mode.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_width?` | number | `default = 512`<br/> - The surface resolution width 1 to 2048 |
`a_height?` | number | `default = 512`<br/> - The surface resolution height 1 to 2048 |

**Returns:** *[VideoNode](_lumin_.videonode.md)*

The new VideoNode

___

###  deleteNode

▸ **deleteNode**(`a_pNode`: [Node](_lumin_.node.md)): *void*

Tells the Prism to delete this Node and all its children

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_pNode` | [Node](_lumin_.node.md) | The Node that will be deleted  |

**Returns:** *void*

___

###  destroyResource

▸ **destroyResource**(`a_iID`: bigint): *void*

Destroys a Resource with a given ResourceIDType.
Paired with createResource(). For each create() there should be a destroy().

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_iID` | bigint | ID of the resource  |

**Returns:** *void*

___

###  enableVisualState

▸ **enableVisualState**(`value`: boolean): *void*

Enable//Disable the Prism Visual state changes

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | boolean | Enable/Disable the state changing  |

**Returns:** *void*

___

###  findNode

▸ **findNode**(`a_name`: string, `a_parent`: [Node](_lumin_.node.md)): *[Node](_lumin_.node.md)*

Find a Node by name.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_name` | string | The Node name to look for |
`a_parent` | [Node](_lumin_.node.md) | The node which to look for a decendant node of.  |

**Returns:** *[Node](_lumin_.node.md)*

___

###  getHandGestureHoverDistance

▸ **getHandGestureHoverDistance**(): *number*

**`priv`** none

**Returns:** *number*

the distance threshold the hand gesture cursor must be at for a node
        register as hovered

___

###  getHandGestureTouchDistance

▸ **getHandGestureTouchDistance**(): *number*

**`priv`** none

**Returns:** *number*

the distance threshold the hand gesture cursor must be at for a node
        register as touched

___

###  getNode

▸ **getNode**(`a_id`: bigint): *[Node](_lumin_.node.md)*

Get a Node by its Id

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_id` | bigint | The Node id to look for |

**Returns:** *[Node](_lumin_.node.md)*

the Node

___

###  getPosition

▸ **getPosition**(): *[number, number, number]*

Get the position of this prism in world space

**Returns:** *[number, number, number]*

Prism position

___

###  getPrismId

▸ **getPrismId**(): *bigint*

Get the Prism ID

**`priv`** none

**Returns:** *bigint*

Prism ID

___

###  getPrismType

▸ **getPrismType**(): *[PrismType](../enums/_lumin_.prismtype.md)*

Returns the Prism type.

**`priv`** none

**Returns:** *[PrismType](../enums/_lumin_.prismtype.md)*

The Prism type.

___

###  getResource

▸ **getResource**(`a_iID`: bigint): *[Resource](_lumin_.resource.md)*

Get the resource with the given ID.  Should only be called on the render
thread for resources related to rendering.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_iID` | bigint | the unique ID of the resource to find. |

**Returns:** *[Resource](_lumin_.resource.md)*

pointer to the resource or else nullptr if not found.

▸ **getResource**(`name`: string): *bigint*

Acquire loaded resource mapped to the given name in the declarative system.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The name of the resource. |

**Returns:** *bigint*

ID of named resource or INVALID_RESOURCE_ID if no resource is loaded with that name.

___

###  getRootNode

▸ **getRootNode**(): *[RootNode](_lumin_.rootnode.md)*

Get the root node of the scene graph. The node version will be the last seen version.

**`priv`** none

**Returns:** *[RootNode](_lumin_.rootnode.md)*

the root node

___

###  getRotation

▸ **getRotation**(): *[number, number, number, number]*

Get the rotation of this prism in world space

**Returns:** *[number, number, number, number]*

Prism rotation

___

###  getScale

▸ **getScale**(): *[number, number, number]*

Get the scale of this prism

**Returns:** *[number, number, number]*

Prism scale

___

###  getSize

▸ **getSize**(): *[number, number, number]*

Get the Bounding size

**`priv`** none

**Returns:** *[number, number, number]*

Size (width,height,depth)

___

###  getSound

▸ **getSound**(`name`: string): *[Sound](_lumin_.sound.md)*

Acquire loaded sound mapped to the given name in the declarative system.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The name of the sound. |

**Returns:** *[Sound](_lumin_.sound.md)*

Pointer to named sound or nullptr if no sound is loaded with that name.

___

###  getTransform

▸ **getTransform**(): *[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]*

Get the Real World Transform of this prism

**Returns:** *[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]*

Prism transform matrix

___

###  getUserAutoHapticGesture

▸ **getUserAutoHapticGesture**(): *number*

Gives the current set of Auto Haptic Gestures for this prism
required by User

**`priv`** none

**Returns:** *number*

- Active DeviceGestureFlags

___

###  getUserHandGesture

▸ **getUserHandGesture**(): *number*

Gives the current set of Hand Gesture for this prism
required by User

**`priv`** none

**Returns:** *number*

- Active HandGesture Flags

___

###  isPrismSelected

▸ **isPrismSelected**(): *boolean*

Get whether this Prism is selected.

**`priv`** none

**Returns:** *boolean*

the selected state of the prism.

___

###  loadObjectModel

▸ **loadObjectModel**(`filePath`: string): *string*

Load an object model into memory.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`filePath` | string | Path to object model file. |

**Returns:** *string*

If successful this string will be populated with the object model's name.

___

###  loadResourceModel

▸ **loadResourceModel**(`filePath`: string): *boolean*

Load a resource model into memory, and create its defined resources.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`filePath` | string | Path to resource model file. |

**Returns:** *boolean*

True if the resource model was successfully loaded.

___

###  loadSoundModel

▸ **loadSoundModel**(`filePath`: string): *boolean*

Load a sound model into memory, and create its defined sounds.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`filePath` | string | Path to sound model file. |

**Returns:** *boolean*

True if the sound model was successfully loaded.

___

###  objectModelLoaded

▸ **objectModelLoaded**(`name`: string): *boolean*

Determine whether or not an object model is loaded.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The name of the object model. |

**Returns:** *boolean*

True if a object model with the given name is loaded.

___

###  onDestroyEventSub

▸ **onDestroyEventSub**(`callback`: function): *[CallbackID](_lumin_.utils.callbackid.md)*

Returns an Event that will be triggered right before this prism is destroyed.

This event will be dispatched after PrismController::onDetachPrism is called
(if there is a PrismController attached to the prism).

**`priv`** none

**Parameters:**

▪ **callback**: *function*

▸ (`arg0`: [Prism](_lumin_.prism.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg0` | [Prism](_lumin_.prism.md) |

**Returns:** *[CallbackID](_lumin_.utils.callbackid.md)*

___

###  onDestroyEventUnsub

▸ **onDestroyEventUnsub**(`callbackID`: [CallbackID](_lumin_.utils.callbackid.md)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`callbackID` | [CallbackID](_lumin_.utils.callbackid.md) |

**Returns:** *boolean*

___

###  parseObjectModel

▸ **parseObjectModel**(`modelString`: string): *string*

Load an object model from a string into memory.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`modelString` | string | Object model data as a string. |

**Returns:** *string*

If successful this string will be populated with the object model's name.

___

###  retainEyeTrackingUpdates

▸ **retainEyeTrackingUpdates**(): *[PrismDataHandle](_lumin_.prismdatahandle.md)*

Retain this shared pointer to force the prism to receive eye tracking updates.

NOTE: Must be called on client main thread.

**`priv`** none

**Returns:** *[PrismDataHandle](_lumin_.prismdatahandle.md)*

___

###  retainFPSMode

▸ **retainFPSMode**(): *[KEmpty](_lumin_.kempty.md)*

Retain this shared pointer to force the prism to enter fps mode

**`priv`** none

**Returns:** *[KEmpty](_lumin_.kempty.md)*

___

###  retainHeadposeUpdates

▸ **retainHeadposeUpdates**(): *[PrismDataHandle](_lumin_.prismdatahandle.md)*

Retain this shared pointer to force the prism to receive headpose updates.

NOTE: Must be called on client main thread.

**`priv`** none

**Returns:** *[PrismDataHandle](_lumin_.prismdatahandle.md)*

___

###  setExcludeFromAutoFocus

▸ **setExcludeFromAutoFocus**(`exclude`: boolean): *void*

If true, this prism will be excluded from the server's auto focus calculation

**`priv`** none

**Parameters:**

Name | Type |
------ | ------ |
`exclude` | boolean |

**Returns:** *void*

___

###  setHandGestureFilterConfidenceLevel

▸ **setHandGestureFilterConfidenceLevel**(`confidenceLevel`: number): *void*

Set the input service hand gesture confidence level filter

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`confidenceLevel` | number | the confidence level filter (between 0.0f and 1.0f, default is 0.0f)  |

**Returns:** *void*

___

###  setHandGestureFilterPollRate

▸ **setHandGestureFilterPollRate**(`pollRate`: number): *void*

Set the input service hand gesture poll rate

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pollRate` | number | the poll rate (in Hz, default is 20.0f)  |

**Returns:** *void*

___

###  setHandGestureFilterPositionDelta

▸ **setHandGestureFilterPositionDelta**(`positionDelta`: number): *void*

Set the input service hand gesture position delta filter

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`positionDelta` | number | the position delta (in world space meters, default is 0.03f)  |

**Returns:** *void*

___

###  setHandGestureHoverDistance

▸ **setHandGestureHoverDistance**(`distance`: number): *void*

Set how close the hand gesture cursor must be to a node for a hover to register

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`distance` | number | The hover distance threshold  |

**Returns:** *void*

___

###  setHandGestureTouchDistance

▸ **setHandGestureTouchDistance**(`distance`: number): *void*

Set how close the hand gesture cursor must be to a node for a touch to register

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`distance` | number | The touch distance threshold  |

**Returns:** *void*

___

###  setPrismBloomStrength

▸ **setPrismBloomStrength**(`a_prismBloomStrength`: number): *void*

Set the Bloom Strength for this prism. Default is set to 1.0

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_prismBloomStrength` | number | Bloom strength that will be applied to all the RenderNodes of the prism  |

**Returns:** *void*

___

###  setPrismController

▸ **setPrismController**(`rootPrismController`: [PrismController](_lumin_.prismcontroller.md)): *void*

Sets the root prism controller that will receive event and update loop callbacks
for this prism.

The root prism controller's scene graph will be attached to the prism root node.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`rootPrismController` | [PrismController](_lumin_.prismcontroller.md) | The prism controller to use or nullptr to just remove        the current root prism controller  |

**Returns:** *void*

___

###  setVolumeBloomStrength

▸ **setVolumeBloomStrength**(`a_volumeBloomStrength`: number): *void*

deprecated, please use setPrismBloomStrength instead

**Parameters:**

Name | Type |
------ | ------ |
`a_volumeBloomStrength` | number |

**Returns:** *void*

___

###  startTrackHandGesture

▸ **startTrackHandGesture**(`a_uieHandGesture`: number): *void*

Tracks a set of Hand gesture directed at this prism

when Gesture occurs it is deliverd on the eventCallback

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_uieHandGesture` | number | The HandGestureFlags to start Tracking  |

**Returns:** *void*

___

###  startTrackingAutoHapticOnGesture

▸ **startTrackingAutoHapticOnGesture**(`a_uieGesture`: number): *void*

Tracks a set of gestures we wish to enable auto haptics on

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_uieGesture` | number | The DeviceGestureFlags to start Tracking  |

**Returns:** *void*

___

###  stopTrackHandGesture

▸ **stopTrackHandGesture**(`a_uieHandGesture`: number): *void*

Stops Tracking a set of Hand Gesture

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_uieHandGesture` | number | The HandGestureFlags to stop Tracking  |

**Returns:** *void*

___

###  stopTrackingAutoHapticOnGesture

▸ **stopTrackingAutoHapticOnGesture**(`a_uieGesture`: number): *void*

Stops tracking a set of gestures for auto haptics

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_uieGesture` | number | The DeviceGestureFlags to stop Tracking  |

**Returns:** *void*

___

###  unloadObjectModel

▸ **unloadObjectModel**(`name`: string): *boolean*

Unload cached object model.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The name of the object model. |

**Returns:** *boolean*

True if an object model with the given name was found and unloaded.

___

###  unloadResourceModels

▸ **unloadResourceModels**(): *void*

Unload all resource models.
Current behaviour is to clear all name to resource mappings, but will not destroy resources.

**`priv`** none

**Returns:** *void*

___

###  unloadSoundModels

▸ **unloadSoundModels**(): *void*

Unload all sound models.
Current behaviour is to clear all sound mappings and destroy sound instances.

**`priv`** none

**Returns:** *void*

___

###  updateNode

▸ **updateNode**(`node`: [Node](_lumin_.node.md), `objectModelName`: string, `objectName?`: string): *boolean*

Update a node with property values from an object in an object model.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`node` | [Node](_lumin_.node.md) | The node to be updated. |
`objectModelName` | string | The name of a loaded object model. |
`objectName?` | string | `default = ""`<br/> The name of an object in the object model. If empty, the first object in the object model is used. |

**Returns:** *boolean*

True if the object model is loaded, the object was found in the object model and all object properties were successfully updated to the node.

___

###  updateNodeFromString

▸ **updateNodeFromString**(`node`: [Node](_lumin_.node.md), `modelString`: string, `objectName`: string): *boolean*

Update a node with property values from an object in an object model as a string.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`node` | [Node](_lumin_.node.md) | The node to be updated. |
`modelString` | string | The object model as a string. |
`objectName` | string | The name of an object in the object model. If empty, the first object in the object model is used. |

**Returns:** *boolean*

True if the object was found in the object model and all object properties were successfully updated to the node.

---
id: "_lumin_.multipack.descriptor"
title: "Descriptor"
sidebar_label: "Descriptor"
---

Describes the pre-generated data used to initialize a
TexturePackResource, which includes one or more JSON
data files corresponding to packed-texture images, as
well as extra parameters and information.  Provides
the data and facilities required to access sub-textures.

## Hierarchy

* **Descriptor**

## Constructors

###  constructor

\+ **new Descriptor**(): *[Descriptor](_lumin_.multipack.descriptor.md)*

Default initialize all fields

**Returns:** *[Descriptor](_lumin_.multipack.descriptor.md)*

\+ **new Descriptor**(`location`: string, `sheets`: Array‹[SheetFiles](_lumin_.multipack.sheetfiles.md)›, `subTextures`: Array‹[SubTexture](_lumin_.multipack.subtexture.md)›, `params`: [Params](_lumin_.multipack.params.md)): *[Descriptor](_lumin_.multipack.descriptor.md)*

Initialize the fields with the given parameters, guaranteeing the lists are ordered.

**Parameters:**

Name | Type |
------ | ------ |
`location` | string |
`sheets` | Array‹[SheetFiles](_lumin_.multipack.sheetfiles.md)› |
`subTextures` | Array‹[SubTexture](_lumin_.multipack.subtexture.md)› |
`params` | [Params](_lumin_.multipack.params.md) |

**Returns:** *[Descriptor](_lumin_.multipack.descriptor.md)*

## Methods

###  empty

▸ **empty**(): *boolean*

True if no sheets are present in the multi-pack.

**Returns:** *boolean*

___

###  getLocation

▸ **getLocation**(): *string*

Where the data is located (often a directory); see Assemble().

**Returns:** *string*

___

###  getParams

▸ **getParams**(): *[Params](_lumin_.multipack.params.md)*

Parameters that control the rendering of the textures.

**Returns:** *[Params](_lumin_.multipack.params.md)*

___

###  getSheetCount

▸ **getSheetCount**(): *number*

Number of sheets contained in the multi-pack.

**Returns:** *number*

___

###  getSheets

▸ **getSheets**(): *Array‹[SheetFiles](_lumin_.multipack.sheetfiles.md)›*

List of sheets contained in the texture multi-pack, which is ordered by SheetFiles::index.

**Returns:** *Array‹[SheetFiles](_lumin_.multipack.sheetfiles.md)›*

___

###  getSubTextureCount

▸ **getSubTextureCount**(): *number*

Number of sub-textures contained in the multi-pack.

**Returns:** *number*

___

###  getSubTextures

▸ **getSubTextures**(): *Array‹[SubTexture](_lumin_.multipack.subtexture.md)›*

List of sub-textures, which is ordered by SubTexture::name.

**Returns:** *Array‹[SubTexture](_lumin_.multipack.subtexture.md)›*

___

### `Static` Assemble

▸ **Assemble**(`directory`: string, `params?`: [Params](_lumin_.multipack.params.md)): *[Descriptor](_lumin_.multipack.descriptor.md)*

Descriptor factory function that scans the given directory on
the local file system (not recursively) for JSON files that
correspond to exported, packed-texture images.  The multi-
pack descriptor used to initialize a TexturePackResource
is assembled from this information.  Note the lists in the
returned object are in alphabetical order.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`directory` | string | A directory containing packed-texture images. |
`params?` | [Params](_lumin_.multipack.params.md) | `default = Params.DEFAULT`<br/> To control the rendering of the images. |

**Returns:** *[Descriptor](_lumin_.multipack.descriptor.md)*

The information gathered about the texture multi-pack.

▸ **Assemble**(`vMetaDataNames`: Array‹string›, `params?`: [Params](_lumin_.multipack.params.md)): *[Descriptor](_lumin_.multipack.descriptor.md)*

Descriptor factory function that opens JSON files that
correspond to exported, packed-texture images.  The multi-
pack descriptor used to initialize a TexturePackResource
is assembled from this information.  Note the lists in the
returned object are in alphabetical order.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`vMetaDataNames` | Array‹string› | A list of texture pack meta data file names. |
`params?` | [Params](_lumin_.multipack.params.md) | `default = Params.DEFAULT`<br/> To control the rendering of the images. |

**Returns:** *[Descriptor](_lumin_.multipack.descriptor.md)*

The information gathered about the texture multi-pack.

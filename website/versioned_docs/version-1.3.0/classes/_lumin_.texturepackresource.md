---
id: "_lumin_.texturepackresource"
title: "TexturePackResource"
sidebar_label: "TexturePackResource"
---

Texture Pack Resource - Loads and Holds a Texture resource which contains sub textures

## Hierarchy

* [Resource](_lumin_.resource.md)

  ↳ **TexturePackResource**

## Constructors

###  constructor

\+ **new TexturePackResource**(): *[TexturePackResource](_lumin_.texturepackresource.md)*

*Overrides [Resource](_lumin_.resource.md).[constructor](_lumin_.resource.md#constructor)*

**Returns:** *[TexturePackResource](_lumin_.texturepackresource.md)*

## Methods

###  getBasePath

▸ **getBasePath**(): *string*

*Inherited from [Resource](_lumin_.resource.md).[getBasePath](_lumin_.resource.md#getbasepath)*

Gets the base path of the resource.

**`priv`** none

**Returns:** *string*

Base path

___

###  getDescriptor

▸ **getDescriptor**(): *[Descriptor](_lumin_.multipack.descriptor.md)*

Get the descriptor data used to initialize this resource.

**Returns:** *[Descriptor](_lumin_.multipack.descriptor.md)*

___

###  getFileName

▸ **getFileName**(): *string*

*Inherited from [Resource](_lumin_.resource.md).[getFileName](_lumin_.resource.md#getfilename)*

Gets the FileName Associated with this resource.

**`priv`** none

**Returns:** *string*

Filename

___

###  getLoadStatus

▸ **getLoadStatus**(): *[LoadStatus](../enums/_lumin_.resources.loadstatus.md)*

*Inherited from [Resource](_lumin_.resource.md).[getLoadStatus](_lumin_.resource.md#getloadstatus)*

Return a int that contains the result of loading this resource.

**Returns:** *[LoadStatus](../enums/_lumin_.resources.loadstatus.md)*

int with the result value.

___

###  getResourceId

▸ **getResourceId**(): *bigint*

*Inherited from [Resource](_lumin_.resource.md).[getResourceId](_lumin_.resource.md#getresourceid)*

Returns the Unique ID of this resource

**`priv`** none

**Returns:** *bigint*

Resource ID

___

###  getResourceType

▸ **getResourceType**(): *[ResourceType](../enums/_lumin_.resourcetype.md)*

*Inherited from [Resource](_lumin_.resource.md).[getResourceType](_lumin_.resource.md#getresourcetype)*

Returns the type of this resource

**`priv`** none

**Returns:** *[ResourceType](../enums/_lumin_.resourcetype.md)*

Resource Type

___

###  getSubTextureCount

▸ **getSubTextureCount**(): *number*

**Returns:** *number*

___

###  isResourceValid

▸ **isResourceValid**(): *boolean*

*Inherited from [Resource](_lumin_.resource.md).[isResourceValid](_lumin_.resource.md#isresourcevalid)*

Returns True if the Resource was successfully loaded

Loading only happens on the server-side so this call is
only useful to the server

**`priv`** none

**Returns:** *boolean*

TRUE = Successfully loaded

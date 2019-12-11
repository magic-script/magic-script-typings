---
id: "_lumin_.resource"
title: "Resource"
sidebar_label: "Resource"
---

All resources Derive from this Base Resource type

## Hierarchy

* **Resource**

  ↳ [FileResource](_lumin_.fileresource.md)

  ↳ [PlanarResource](_lumin_.planarresource.md)

  ↳ [TexturePackResource](_lumin_.texturepackresource.md)

## Constructors

###  constructor

\+ **new Resource**(): *[Resource](_lumin_.resource.md)*

**Returns:** *[Resource](_lumin_.resource.md)*

## Methods

###  getBasePath

▸ **getBasePath**(): *string*

Gets the base path of the resource.

**`priv`** none

**Returns:** *string*

Base path

___

###  getFileName

▸ **getFileName**(): *string*

Gets the FileName Associated with this resource.

**`priv`** none

**Returns:** *string*

Filename

___

###  getLoadStatus

▸ **getLoadStatus**(): *[LoadStatus](../enums/_lumin_.resources.loadstatus.md)*

Return a int that contains the result of loading this resource.

**Returns:** *[LoadStatus](../enums/_lumin_.resources.loadstatus.md)*

int with the result value.

___

###  getResourceId

▸ **getResourceId**(): *bigint*

Returns the Unique ID of this resource

**`priv`** none

**Returns:** *bigint*

Resource ID

___

###  getResourceType

▸ **getResourceType**(): *[ResourceType](../enums/_lumin_.resourcetype.md)*

Returns the type of this resource

**`priv`** none

**Returns:** *[ResourceType](../enums/_lumin_.resourcetype.md)*

Resource Type

___

###  isResourceValid

▸ **isResourceValid**(): *boolean*

Returns True if the Resource was successfully loaded

Loading only happens on the server-side so this call is
only useful to the server

**`priv`** none

**Returns:** *boolean*

TRUE = Successfully loaded

---
id: "_lumin_.multipack.params"
title: "Params"
sidebar_label: "Params"
---

Parameters used to control initialization of a texture multi-pack descriptor.

## Hierarchy

* **Params**

## Constructors

###  constructor

\+ **new Params**(): *[Params](_lumin_.multipack.params.md)*

By default, packed textures use mipmaps with trilinear filtering for best image quality when rendering.

**Returns:** *[Params](_lumin_.multipack.params.md)*

## Properties

###  allowMipmaps

• **allowMipmaps**: *boolean*

If mipmapping is enabled or disabled.

___

###  magFilter

• **magFilter**: *[Filter](../enums/_lumin_.utils.filter.md)*

All textures will use the same magnification filter.

___

###  minFilter

• **minFilter**: *[Filter](../enums/_lumin_.utils.filter.md)*

All textures will use the same minification filter.

___

###  mipMapFilter

• **mipMapFilter**: *[Filter](../enums/_lumin_.utils.filter.md)*

All textures will use the same mipmap filter.

___

###  numMipmaps

• **numMipmaps**: *number*

if 0 and mipmaps are allowed, full mipmap is used, else the num. Defaults to 0

___

### `Static` DEFAULT

▪ **DEFAULT**: *[Params](_lumin_.multipack.params.md)*

`value = Params()`

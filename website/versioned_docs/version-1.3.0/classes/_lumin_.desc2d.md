---
id: "_lumin_.desc2d"
title: "Desc2d"
sidebar_label: "Desc2d"
---

Optional data with which to initialize a TextureResource, which is a 2D texture, in order to customize its behavior.

## Hierarchy

* **Desc2d**

## Constructors

###  constructor

\+ **new Desc2d**(): *[Desc2d](_lumin_.desc2d.md)*

**Returns:** *[Desc2d](_lumin_.desc2d.md)*

## Properties

###  allowMipmaps

• **allowMipmaps**: *boolean*

Specify if mipmapping is enabled or disabled

___

###  numMipmaps

• **numMipmaps**: *number*

if 0 and mipmaps are allowed, full mipmap is used, else the numMipmaps. Defaults to 0

___

###  params

• **params**: *[Params2d](_lumin_.utils.params2d.md)*

___

###  upscaleToRGB

• **upscaleToRGB**: *boolean*

Upscale images that have fewer than 3 bytes per channel to RGB.

___

### `Static` DEFAULT

▪ **DEFAULT**: *[Desc2d](_lumin_.desc2d.md)*

`value = Desc2d()`

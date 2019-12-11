---
id: "_lumin_.render.quads"
title: "quads"
sidebar_label: "quads"
---

## Index

### Variables

* [DEFAULT_INDICES](_lumin_.render.quads.md#const-default_indices)
* [DEFAULT_LOCAL_AABB](_lumin_.render.quads.md#const-default_local_aabb)
* [DEFAULT_TEX_COORDS](_lumin_.render.quads.md#const-default_tex_coords)
* [DEFAULT_VERTICES](_lumin_.render.quads.md#const-default_vertices)
* [NUM_INDICES](_lumin_.render.quads.md#const-num_indices)
* [NUM_TEXTURE_COORDS](_lumin_.render.quads.md#const-num_texture_coords)
* [NUM_VERTEX_COORDS](_lumin_.render.quads.md#const-num_vertex_coords)

## Variables

### `Const` DEFAULT_INDICES

• **DEFAULT_INDICES**: *Array‹number›*

Default indices into a quad mesh.

`value = [0,1,2,0,2,3]`

___

### `Const` DEFAULT_LOCAL_AABB

• **DEFAULT_LOCAL_AABB**: *[AABB](../classes/_lumin_.math.aabb.md)*

Default local AABB for a quad.

`value = [[0,0,0],[1,1,0]]`

___

### `Const` DEFAULT_TEX_COORDS

• **DEFAULT_TEX_COORDS**: *Array‹[number, number]›*

Default texture coordinates for a quad.

`value = [[0,1],[1,1],[1,0],[0,0]]`

___

### `Const` DEFAULT_VERTICES

• **DEFAULT_VERTICES**: *Array‹[number, number, number]›*

Default vertices for a square quad.

`value = [[0,0,0],[1,0,0],[1,1,0],[0,1,0]]`

___

### `Const` NUM_INDICES

• **NUM_INDICES**: *number*

Number of indices into the vertex buffer of a quad.
`value = 6`

___

### `Const` NUM_TEXTURE_COORDS

• **NUM_TEXTURE_COORDS**: *number*

Number of coordinates in the texture buffer of a quad.
`value = 4`

___

### `Const` NUM_VERTEX_COORDS

• **NUM_VERTEX_COORDS**: *number*

Number of coordinates in the vertex buffer of a quad.
`value = 4`

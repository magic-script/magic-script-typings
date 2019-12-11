---
id: "_lumin_.math"
title: "math"
sidebar_label: "math"
---

## Index

### Classes

* [AABB](../classes/_lumin_.math.aabb.md)

### Functions

* [ApplyPosition](_lumin_.math.md#applyposition)
* [ApplyPositionLocal](_lumin_.math.md#applypositionlocal)
* [ApplyRotation](_lumin_.math.md#applyrotation)
* [ApplyRotationLocal](_lumin_.math.md#applyrotationlocal)
* [ApplyScale](_lumin_.math.md#applyscale)
* [GetPosition](_lumin_.math.md#getposition)
* [GetRotation](_lumin_.math.md#getrotation)
* [GetScale](_lumin_.math.md#getscale)
* [GetViewTransform](_lumin_.math.md#getviewtransform)
* [SetPosition](_lumin_.math.md#setposition)
* [SetRotation](_lumin_.math.md#setrotation)
* [SetScale](_lumin_.math.md#setscale)

## Functions

###  ApplyPosition

▸ **ApplyPosition**(`a_transform`: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number], `a_position`: [number, number, number]): *[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]*

Moves a transform by a given position, and returns the new transform. The transform is assumed
to be a view transform (world->camera space).

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_transform` | [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] | The transform. |
`a_position` | [number, number, number] | Offset to move the transform by. |

**Returns:** *[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]*

The modified transform.

___

###  ApplyPositionLocal

▸ **ApplyPositionLocal**(`a_transform`: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number], `a_position`: [number, number, number]): *[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]*

Moves a transform by a given position, and returns the new transform. The move is in the local
space of the transform (e.g. moving along the z-axis will perform the move relative to
the transform's local z-axis, not the world z-axis). The transform is assumed to be a view
transform (world->camera space).

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_transform` | [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] | The transform. |
`a_position` | [number, number, number] | The position to apply to the transform. |

**Returns:** *[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]*

The modified transform.

___

###  ApplyRotation

▸ **ApplyRotation**(`a_transform`: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number], `a_rotation`: [number, number, number, number]): *[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]*

Applies a rotation to a transform, and returns the new transform. The transform is assumed
to be a view transform (world->camera space).

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_transform` | [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] | The transform. |
`a_rotation` | [number, number, number, number] | The rotation to apply to the transform. |

**Returns:** *[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]*

The modified transform.

___

###  ApplyRotationLocal

▸ **ApplyRotationLocal**(`a_transform`: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number], `a_rotation`: [number, number, number, number]): *[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]*

Applies a rotation to a transform, and returns the new transform. The rotation is in the local
space of the transform (e.g. rotating around the z-axis will perform the rotation relative to
the transform's local z-axis, not the world z-axis). The transform is assumed to be a view
transform (world->camera space).

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_transform` | [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] | The transform. |
`a_rotation` | [number, number, number, number] | The rotation to apply to the transform. |

**Returns:** *[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]*

The modified transform.

___

###  ApplyScale

▸ **ApplyScale**(`a_transform`: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number], `a_scale`: [number, number, number]): *[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]*

Scales a transform by a given amount, and returns the new transform. The transform is assumed
to be a view transform (world->camera space).

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_transform` | [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] | The transform. |
`a_scale` | [number, number, number] | The scale to apply. |

**Returns:** *[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]*

The modified transform.

___

###  GetPosition

▸ **GetPosition**(`a_transform`: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]): *[number, number, number]*

Returns the position component of a transform matrix. The transform is assumed to be a view
transform (world->camera space).

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_transform` | [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] | The transform. |

**Returns:** *[number, number, number]*

The position.

___

###  GetRotation

▸ **GetRotation**(`a_transform`: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]): *[number, number, number, number]*

Returns the rotation component of a transform matrix. The transform is assumed to be a view
transform (world->camera space).

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_transform` | [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] | The transform. |

**Returns:** *[number, number, number, number]*

The rotation.

___

###  GetScale

▸ **GetScale**(`a_transform`: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]): *[number, number, number]*

Returns the scale component of a transform matrix. The transform is assumed to be a view
transform (world->camera space).

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_transform` | [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] | The transform. |

**Returns:** *[number, number, number]*

The scale.

___

###  GetViewTransform

▸ **GetViewTransform**(`a_position`: [number, number, number], `a_rotation`: [number, number, number, number], `a_scale`: [number, number, number]): *[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]*

Creates a view transform matrix from position, rotation, and scale components.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_position` | [number, number, number] | The position component. |
`a_rotation` | [number, number, number, number] | The rotation component. |
`a_scale` | [number, number, number] | The scale component. |

**Returns:** *[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]*

The new transform.

___

###  SetPosition

▸ **SetPosition**(`a_transform`: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number], `a_position`: [number, number, number]): *[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]*

Returns a copy of a transform matrix, with the position component replaced by a new position.
The transform is assumed to be a view transform (world->camera space).

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_transform` | [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] | The transform. |
`a_position` | [number, number, number] | The new position. |

**Returns:** *[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]*

The modified transform.

___

###  SetRotation

▸ **SetRotation**(`a_transform`: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number], `a_rotation`: [number, number, number, number]): *[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]*

Returns a copy of a transform matrix, with the rotation component replaced by a new rotation.
The transform is assumed to be a view transform (world->camera space).

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_transform` | [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] | The transform. |
`a_rotation` | [number, number, number, number] | The new rotation. |

**Returns:** *[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]*

The modified transform.

___

###  SetScale

▸ **SetScale**(`a_transform`: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number], `a_scale`: [number, number, number]): *[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]*

Returns a copy of a transform matrix, with the scale component replaced by a new scale. The
transform is assumed to be a view transform (world->camera space).

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_transform` | [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] | The transform. |
`a_scale` | [number, number, number] | The new scale. |

**Returns:** *[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]*

The modified transform.

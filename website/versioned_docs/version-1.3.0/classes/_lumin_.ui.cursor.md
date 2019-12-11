---
id: "_lumin_.ui.cursor"
title: "Cursor"
sidebar_label: "Cursor"
---

Main entry point for interacting with the UiKit cursor.

## Hierarchy

* **Cursor**

## Constructors

###  constructor

\+ **new Cursor**(): *[Cursor](_lumin_.ui.cursor.md)*

**Returns:** *[Cursor](_lumin_.ui.cursor.md)*

## Methods

### `Static` GetCursorSnapMinDistance

▸ **GetCursorSnapMinDistance**(`prism`: [Prism](_lumin_.prism.md)): *number*

Gets the cursor minimum travel distance for a snap transition.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prism` | [Prism](_lumin_.prism.md) | the volume owning the cursor.  |

**Returns:** *number*

___

### `Static` GetCursorSnapMinTime

▸ **GetCursorSnapMinTime**(`prism`: [Prism](_lumin_.prism.md)): *number*

Gets the cursor minimum visit time for a snap transition.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prism` | [Prism](_lumin_.prism.md) | the volume owning the cursor.  |

**Returns:** *number*

___

### `Static` GetCursorSnapMode

▸ **GetCursorSnapMode**(`prism`: [Prism](_lumin_.prism.md)): *boolean*

Gets the cursor snap mode.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prism` | [Prism](_lumin_.prism.md) | the volume owning the cursor.  |

**Returns:** *boolean*

___

### `Static` GetGravityWellBlendTime

▸ **GetGravityWellBlendTime**(`prism`: [Prism](_lumin_.prism.md)): *number*

Gets the gravity well blend time in seconds.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prism` | [Prism](_lumin_.prism.md) | the volume owning the cursor.  |

**Returns:** *number*

___

### `Static` GetGravityWellMaxDistance

▸ **GetGravityWellMaxDistance**(`prism`: [Prism](_lumin_.prism.md)): *number*

Gets the gravity well max distance.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prism` | [Prism](_lumin_.prism.md) | the volume owning the cursor.  |

**Returns:** *number*

___

### `Static` GetMoveRate

▸ **GetMoveRate**(`prism`: [Prism](_lumin_.prism.md)): *number*

Returns the current movement rate of the Eclipse Cursor.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prism` | [Prism](_lumin_.prism.md) | the volume owning the cursor. |

**Returns:** *number*

The move rate.

___

### `Static` GetPlaneDepth

▸ **GetPlaneDepth**(`prism`: [Prism](_lumin_.prism.md)): *number*

Gets the depth of the cursor plane along the Prism's Z axis.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prism` | [Prism](_lumin_.prism.md) | the volume owning the cursor. |

**Returns:** *number*

The plane depth.

___

### `Static` GetPosition

▸ **GetPosition**(`prism`: [Prism](_lumin_.prism.md)): *[number, number, number]*

Gets the Prism Position of the Eclipse Cursor.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prism` | [Prism](_lumin_.prism.md) | the volume owning the cursor. |

**Returns:** *[number, number, number]*

Position

___

### `Static` GetScale

▸ **GetScale**(`prism`: [Prism](_lumin_.prism.md)): *number*

Returns the scale of the Eclipse Cursor in scene units.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prism` | [Prism](_lumin_.prism.md) | the volume owning the cursor. |

**Returns:** *number*

The scale.

___

### `Static` GetState

▸ **GetState**(`prism`: [Prism](_lumin_.prism.md)): *[CursorHoverState](../enums/_lumin_.cursorhoverstate.md)*

Gets the manual cursor state.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prism` | [Prism](_lumin_.prism.md) | the volume owning the cursor.  |

**Returns:** *[CursorHoverState](../enums/_lumin_.cursorhoverstate.md)*

___

### `Static` IsEnabled

▸ **IsEnabled**(`prism`: [Prism](_lumin_.prism.md)): *boolean*

Returns the enabled state of the Eclipse Cursor.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prism` | [Prism](_lumin_.prism.md) | the volume owning the cursor. |

**Returns:** *boolean*

Flag if the cursor is enabled or not.

___

### `Static` ResetDefaults

▸ **ResetDefaults**(`prism`: [Prism](_lumin_.prism.md)): *void*

Resets cursor defaults for scale and move rate
based on Prism extents.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prism` | [Prism](_lumin_.prism.md) | the volume owning the cursor to alter.  |

**Returns:** *void*

___

### `Static` ResetState

▸ **ResetState**(`prism`: [Prism](_lumin_.prism.md)): *void*

Resets the cursor state back to automatic based on hovered elements.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prism` | [Prism](_lumin_.prism.md) | the volume owning the cursor to alter.  |

**Returns:** *void*

___

### `Static` SetCursorSnapMinDistance

▸ **SetCursorSnapMinDistance**(`prism`: [Prism](_lumin_.prism.md), `distance`: number): *void*

Sets the cursor minimum travel distance for a snap transition.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prism` | [Prism](_lumin_.prism.md) | the volume owning the cursor to alter. |
`distance` | number | the minimum travel distance for a snap transition.  |

**Returns:** *void*

___

### `Static` SetCursorSnapMinTime

▸ **SetCursorSnapMinTime**(`prism`: [Prism](_lumin_.prism.md), `seconds`: number): *void*

Sets the cursor minimum visit time for a snap transition.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prism` | [Prism](_lumin_.prism.md) | the volume owning the cursor to alter. |
`seconds` | number | the minimum visit time for a snap transition.  |

**Returns:** *void*

___

### `Static` SetCursorSnapMode

▸ **SetCursorSnapMode**(`prism`: [Prism](_lumin_.prism.md), `snap`: boolean): *void*

Sets the cursor snap mode.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prism` | [Prism](_lumin_.prism.md) | the volume owning the cursor to alter. |
`snap` | boolean | true to enable, false to disable cursor snap  |

**Returns:** *void*

___

### `Static` SetEnabled

▸ **SetEnabled**(`prism`: [Prism](_lumin_.prism.md), `a_enabled`: boolean): *void*

Sets the enabled state of the Eclipse Cursor.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prism` | [Prism](_lumin_.prism.md) | the volume owning the cursor to alter. |
`a_enabled` | boolean | Enabled flag.  |

**Returns:** *void*

___

### `Static` SetGravityWellBlendTime

▸ **SetGravityWellBlendTime**(`prism`: [Prism](_lumin_.prism.md), `seconds`: number): *void*

Sets the gravity well blend time in seconds.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prism` | [Prism](_lumin_.prism.md) | the volume owning the cursor to alter. |
`seconds` | number | time in seconds  |

**Returns:** *void*

___

### `Static` SetGravityWellMaxDistance

▸ **SetGravityWellMaxDistance**(`prism`: [Prism](_lumin_.prism.md), `distance`: number): *void*

Sets the gravity well max distance.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prism` | [Prism](_lumin_.prism.md) | the volume owning the cursor to alter. |
`distance` | number | gravity well max distance to set  |

**Returns:** *void*

___

### `Static` SetMoveRate

▸ **SetMoveRate**(`prism`: [Prism](_lumin_.prism.md), `a_rate`: number): *void*

Sets the movement rate of the Eclipse Cursor.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prism` | [Prism](_lumin_.prism.md) | the volume owning the cursor to alter. |
`a_rate` | number | The movement rate of the cursor.  |

**Returns:** *void*

___

### `Static` SetPlaneDepth

▸ **SetPlaneDepth**(`prism`: [Prism](_lumin_.prism.md), `a_depth`: number): *void*

Sets the depth of the cursor plane along the Prism's Z axis.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prism` | [Prism](_lumin_.prism.md) | prism for which to set the depth of cursor |
`a_depth` | number | The depth of the cursor plane.  |

**Returns:** *void*

___

### `Static` SetScale

▸ **SetScale**(`prism`: [Prism](_lumin_.prism.md), `a_scale`: number): *void*

Sets the scale of the Eclipse Cursor in scene units.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prism` | [Prism](_lumin_.prism.md) | the volume owning the cursor to alter. |
`a_scale` | number | The scale of the cursor in scene units.  |

**Returns:** *void*

___

### `Static` SetStartupPosition

▸ **SetStartupPosition**(`prism`: [Prism](_lumin_.prism.md), `position`: [number, number]): *void*

Sets the cursor start position for this Prism during
initial Prism startup (one time only).

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prism` | [Prism](_lumin_.prism.md) | the volume owning the cursor to alter. |
`position` | [number, number] | the startup cursor position.  |

**Returns:** *void*

___

### `Static` SetState

▸ **SetState**(`prism`: [Prism](_lumin_.prism.md), `cursorState`: [CursorHoverState](../enums/_lumin_.cursorhoverstate.md)): *void*

Sets the cursor state manually.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prism` | [Prism](_lumin_.prism.md) | the volume owning the cursor to alter. |
`cursorState` | [CursorHoverState](../enums/_lumin_.cursorhoverstate.md) | cursor state to set  |

**Returns:** *void*

___

### `Static` TransitionToPanel

▸ **TransitionToPanel**(`prism`: [Prism](_lumin_.prism.md), `panel`: [UiPanel](_lumin_.ui.uipanel.md)): *void*

Manually transitions the cursor to a Panel.

Allows for a Panel to be transitioned to manually.  The cursor will end up
at the position specified by the Panel's cursor transition properties.

This call is intended to make occasional, logic based transitions to a Panel
and cannot be used every frame to explicitly control cursor position.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prism` | [Prism](_lumin_.prism.md) | the volume owning the cursor to alter. |
`panel` | [UiPanel](_lumin_.ui.uipanel.md) | panel to transition to  |

**Returns:** *void*

---
id: "_lumin_.glyph"
title: "glyph"
sidebar_label: "glyph"
---

## Index

### Modules

* [kerning](_lumin_.glyph.kerning.md)

### Enumerations

* [AdvanceDirection](../enums/_lumin_.glyph.advancedirection.md)
* [Quality](../enums/_lumin_.glyph.quality.md)
* [TextureSize](../enums/_lumin_.glyph.texturesize.md)

### Classes

* [Font2dDesc](../classes/_lumin_.glyph.font2ddesc.md)
* [Metrics](../classes/_lumin_.glyph.metrics.md)
* [TileInfo](../classes/_lumin_.glyph.tileinfo.md)

### Variables

* [BASE_TEXTURE_LEVEL](_lumin_.glyph.md#const-base_texture_level)
* [DEFAULT_GLYPH_SIZE](_lumin_.glyph.md#const-default_glyph_size)
* [INVALID_HEIGHT](_lumin_.glyph.md#const-invalid_height)
* [MIN_MIPMAP_TILE_SIZE](_lumin_.glyph.md#const-min_mipmap_tile_size)
* [NEWLINE](_lumin_.glyph.md#const-newline)
* [NUL_CHAR](_lumin_.glyph.md#const-nul_char)
* [SPACE_CHAR](_lumin_.glyph.md#const-space_char)
* [TAB_CHAR](_lumin_.glyph.md#const-tab_char)

### Functions

* [FromSizeRatio](_lumin_.glyph.md#fromsizeratio)
* [GetSizeRatio](_lumin_.glyph.md#getsizeratio)
* [IsNegative](_lumin_.glyph.md#isnegative)
* [IsSpecialCharacter](_lumin_.glyph.md#isspecialcharacter)
* [IsVertical](_lumin_.glyph.md#isvertical)
* [PixelFormatNormalizationFactor](_lumin_.glyph.md#pixelformatnormalizationfactor)
* [RequiresPreconditioning](_lumin_.glyph.md#requirespreconditioning)

## Variables

### `Const` BASE_TEXTURE_LEVEL

• **BASE_TEXTURE_LEVEL**: *number*

`value = 0`

___

### `Const` DEFAULT_GLYPH_SIZE

• **DEFAULT_GLYPH_SIZE**: *number*

Default size of glyphs in the sheet.
`value = 128`

___

### `Const` INVALID_HEIGHT

• **INVALID_HEIGHT**: *number*

Glyph heights must be positive numbers.
`value = 0`

___

### `Const` MIN_MIPMAP_TILE_SIZE

• **MIN_MIPMAP_TILE_SIZE**: *number*

`value = 2`

___

### `Const` NEWLINE

• **NEWLINE**: *number*

Newline character
`value = '\n'`

___

### `Const` NUL_CHAR

• **NUL_CHAR**: *number*

Abbreviated name of the 'no-character' in unicode.
`value = 0`

___

### `Const` SPACE_CHAR

• **SPACE_CHAR**: *number*

Space character
`value = ' '`

___

### `Const` TAB_CHAR

• **TAB_CHAR**: *number*

Tab character
`value = '\t'`

## Functions

###  FromSizeRatio

▸ **FromSizeRatio**(`sizeRatio`: number): *[TextureSize](../enums/_lumin_.glyph.texturesize.md)*

Gets texture size from ratio.

**Parameters:**

Name | Type |
------ | ------ |
`sizeRatio` | number |

**Returns:** *[TextureSize](../enums/_lumin_.glyph.texturesize.md)*

___

###  GetSizeRatio

▸ **GetSizeRatio**(`size`: [TextureSize](../enums/_lumin_.glyph.texturesize.md)): *number*

Ratio of the texture size to the tile size: MEDIUM = 1.0, LARGE = 2.0.

**Parameters:**

Name | Type |
------ | ------ |
`size` | [TextureSize](../enums/_lumin_.glyph.texturesize.md) |

**Returns:** *number*

___

###  IsNegative

▸ **IsNegative**(`direction`: [AdvanceDirection](../enums/_lumin_.glyph.advancedirection.md)): *boolean*

Negative pen advance (i.e., left or down).

**Parameters:**

Name | Type |
------ | ------ |
`direction` | [AdvanceDirection](../enums/_lumin_.glyph.advancedirection.md) |

**Returns:** *boolean*

___

###  IsSpecialCharacter

▸ **IsSpecialCharacter**(`charCode`: number): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`charCode` | number |

**Returns:** *boolean*

true for characters, such as SPACE_CHAR, that are used for
  typesetting and do not have a visual representation.

___

###  IsVertical

▸ **IsVertical**(`direction`: [AdvanceDirection](../enums/_lumin_.glyph.advancedirection.md)): *boolean*

Vertical layout (i.e., up or down).

**Parameters:**

Name | Type |
------ | ------ |
`direction` | [AdvanceDirection](../enums/_lumin_.glyph.advancedirection.md) |

**Returns:** *boolean*

___

###  PixelFormatNormalizationFactor

▸ **PixelFormatNormalizationFactor**(`tileSize`: number): *number*

For scaling glyph metrics in 26.6 pixel format (i.e., 1/64th of
pixels); see the FT manual.  Divide FreeType glyph metrics by
this value to normalize.

**Parameters:**

Name | Type |
------ | ------ |
`tileSize` | number |

**Returns:** *number*

___

###  RequiresPreconditioning

▸ **RequiresPreconditioning**(`qualityLevel`: [Quality](../enums/_lumin_.glyph.quality.md)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`qualityLevel` | [Quality](../enums/_lumin_.glyph.quality.md) |

**Returns:** *boolean*

true if the "prefont" tool is required to precondition
 the font prior to loading it as a resource.

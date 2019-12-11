---
id: "_lumin_.resources.preloaded"
title: "Preloaded"
sidebar_label: "Preloaded"
---

This class encapsulates preloaded resources available for use
by all Lumin clients. These resources are not configurable, never change
after the server is started, and their backing data sources are not
available to clients.

## Hierarchy

* **Preloaded**

## Constructors

###  constructor

\+ **new Preloaded**(): *[Preloaded](_lumin_.resources.preloaded.md)*

**Returns:** *[Preloaded](_lumin_.resources.preloaded.md)*

## Methods

###  getDefaultUiFont2d

▸ **getDefaultUiFont2d**(`style?`: [FontStyle](../enums/_lumin_.resources.fontstyle.md), `weight?`: [FontWeight](../enums/_lumin_.resources.fontweight.md)): *[Font2dResource](_lumin_.font2dresource.md)*

Get the Magic Leap default UI font, which is called Lomino.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`style?` | [FontStyle](../enums/_lumin_.resources.fontstyle.md) | `default = FontStyle.kNormal`<br/> The style of UI font. |
`weight?` | [FontWeight](../enums/_lumin_.resources.fontweight.md) | `default = FontWeight.kRegular`<br/> The weight (i.e., thickness) of the UI font.  |

**Returns:** *[Font2dResource](_lumin_.font2dresource.md)*

▸ **getDefaultUiFont2d**(`styleAndWeight`: [StyleAndWeight](_lumin_.resources.preloaded.styleandweight.md)): *[Font2dResource](_lumin_.font2dresource.md)*

Get the Magic Leap default UI font, which is called Lomino.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`styleAndWeight` | [StyleAndWeight](_lumin_.resources.preloaded.styleandweight.md) | The style and weight (i.e., thickness) of the UI font.  |

**Returns:** *[Font2dResource](_lumin_.font2dresource.md)*

___

###  getDefaultUiFontStylesAndWeights

▸ **getDefaultUiFontStylesAndWeights**(): *Array‹[StyleAndWeight](_lumin_.resources.preloaded.styleandweight.md)›*

Get a list of all supported styles and weights for the default UI font.

**`priv`** none

**Returns:** *Array‹[StyleAndWeight](_lumin_.resources.preloaded.styleandweight.md)›*

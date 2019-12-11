---
id: "_lumin_.ui.eclipsebuttonparams"
title: "EclipseButtonParams"
sidebar_label: "EclipseButtonParams"
---

Button parameters for creating Eclipse buttons

## Hierarchy

* **EclipseButtonParams**

## Constructors

###  constructor

\+ **new EclipseButtonParams**(`a_type`: [EclipseButtonType](../enums/_lumin_.ui.eclipsebuttontype.md)): *[EclipseButtonParams](_lumin_.ui.eclipsebuttonparams.md)*

**Parameters:**

Name | Type |
------ | ------ |
`a_type` | [EclipseButtonType](../enums/_lumin_.ui.eclipsebuttontype.md) |

**Returns:** *[EclipseButtonParams](_lumin_.ui.eclipsebuttonparams.md)*

\+ **new EclipseButtonParams**(`a_type`: [EclipseButtonType](../enums/_lumin_.ui.eclipsebuttontype.md), `a_pathOrText`: string, `a_height?`: number): *[EclipseButtonParams](_lumin_.ui.eclipsebuttonparams.md)*

**Parameters:**

Name | Type |
------ | ------ |
`a_type` | [EclipseButtonType](../enums/_lumin_.ui.eclipsebuttontype.md) |
`a_pathOrText` | string |
`a_height?` | number |

**Returns:** *[EclipseButtonParams](_lumin_.ui.eclipsebuttonparams.md)*

\+ **new EclipseButtonParams**(`a_type`: [EclipseButtonType](../enums/_lumin_.ui.eclipsebuttontype.md), `a_iconPath`: string, `a_labelText`: string, `a_height?`: number): *[EclipseButtonParams](_lumin_.ui.eclipsebuttonparams.md)*

**Parameters:**

Name | Type |
------ | ------ |
`a_type` | [EclipseButtonType](../enums/_lumin_.ui.eclipsebuttontype.md) |
`a_iconPath` | string |
`a_labelText` | string |
`a_height?` | number |

**Returns:** *[EclipseButtonParams](_lumin_.ui.eclipsebuttonparams.md)*

\+ **new EclipseButtonParams**(`a_type`: [EclipseButtonType](../enums/_lumin_.ui.eclipsebuttontype.md), `a_iconPath`: string, `a_labelText`: string, `a_labelSide`: [Side](../enums/_lumin_.ui.side.md), `a_height?`: number): *[EclipseButtonParams](_lumin_.ui.eclipsebuttonparams.md)*

**Parameters:**

Name | Type |
------ | ------ |
`a_type` | [EclipseButtonType](../enums/_lumin_.ui.eclipsebuttontype.md) |
`a_iconPath` | string |
`a_labelText` | string |
`a_labelSide` | [Side](../enums/_lumin_.ui.side.md) |
`a_height?` | number |

**Returns:** *[EclipseButtonParams](_lumin_.ui.eclipsebuttonparams.md)*

\+ **new EclipseButtonParams**(`a_type`: [EclipseButtonType](../enums/_lumin_.ui.eclipsebuttontype.md), `a_iconPath`: string, `a_labelText`: string, `a_labelSide`: [Side](../enums/_lumin_.ui.side.md), `a_height`: number, `iconType`: [SystemIcon](../enums/_lumin_.ui.systemicon.md)): *[EclipseButtonParams](_lumin_.ui.eclipsebuttonparams.md)*

**Parameters:**

Name | Type |
------ | ------ |
`a_type` | [EclipseButtonType](../enums/_lumin_.ui.eclipsebuttontype.md) |
`a_iconPath` | string |
`a_labelText` | string |
`a_labelSide` | [Side](../enums/_lumin_.ui.side.md) |
`a_height` | number |
`iconType` | [SystemIcon](../enums/_lumin_.ui.systemicon.md) |

**Returns:** *[EclipseButtonParams](_lumin_.ui.eclipsebuttonparams.md)*

\+ **new EclipseButtonParams**(`a_type`: [EclipseButtonType](../enums/_lumin_.ui.eclipsebuttontype.md), `a_iconType`: [SystemIcon](../enums/_lumin_.ui.systemicon.md), `a_labelText`: string, `a_labelSide`: [Side](../enums/_lumin_.ui.side.md), `a_height?`: number): *[EclipseButtonParams](_lumin_.ui.eclipsebuttonparams.md)*

**Parameters:**

Name | Type |
------ | ------ |
`a_type` | [EclipseButtonType](../enums/_lumin_.ui.eclipsebuttontype.md) |
`a_iconType` | [SystemIcon](../enums/_lumin_.ui.systemicon.md) |
`a_labelText` | string |
`a_labelSide` | [Side](../enums/_lumin_.ui.side.md) |
`a_height?` | number |

**Returns:** *[EclipseButtonParams](_lumin_.ui.eclipsebuttonparams.md)*

\+ **new EclipseButtonParams**(`a_type`: [EclipseButtonType](../enums/_lumin_.ui.eclipsebuttontype.md), `a_iconType`: [SystemIcon](../enums/_lumin_.ui.systemicon.md), `a_height?`: number): *[EclipseButtonParams](_lumin_.ui.eclipsebuttonparams.md)*

**Parameters:**

Name | Type |
------ | ------ |
`a_type` | [EclipseButtonType](../enums/_lumin_.ui.eclipsebuttontype.md) |
`a_iconType` | [SystemIcon](../enums/_lumin_.ui.systemicon.md) |
`a_height?` | number |

**Returns:** *[EclipseButtonParams](_lumin_.ui.eclipsebuttonparams.md)*

## Properties

###  absoluteIconPath

• **absoluteIconPath**: *boolean*

If the icon path is an absolute path (default false).

___

###  height

• **height**: *number*

Height of the Eclipse Button, (default 0 = default button height).

___

###  iconPath

• **iconPath**: *string*

Button icon path used in kIcon, kIconWithLabel, and kTextWithIcon.

___

###  iconScale

• **iconScale**: *number*

Icon scale (default 1.0f).

___

###  iconType

• **iconType**: *[SystemIcon](../enums/_lumin_.ui.systemicon.md)*

The type of SystemIcon to be used for the eclipse button.

___

###  labelDisplayMode

• **labelDisplayMode**: *[LabelDisplayMode](../enums/_lumin_.ui.labeldisplaymode.md)*

The display mode of the label, used in kIconWithLabel.

___

###  labelSide

• **labelSide**: *[Side](../enums/_lumin_.ui.side.md)*

What side the button label text sits on, used in kIconWithLabel.

___

###  labelText

• **labelText**: *string*

Button label text used in kIconWithLabel, kText, and kTextWithIcon.

___

###  outlineButton

• **outlineButton**: *boolean*

Whether the button has an outline. Considered only for kText and kTextWithIcon type button.

___

###  type

• **type**: *[EclipseButtonType](../enums/_lumin_.ui.eclipsebuttontype.md)*

Type of Eclipse Button.

___

###  width

• **width**: *number*

Width of the Eclipse Button, (default 0 = auto calculated width).

---
id: "_lumin_.ui.eclipsetoggleparams"
title: "EclipseToggleParams"
sidebar_label: "EclipseToggleParams"
---

Eclipse toggle parameters for creating sliders

## Hierarchy

* **EclipseToggleParams**

## Constructors

###  constructor

\+ **new EclipseToggleParams**(`a_type`: [EclipseToggleType](../enums/_lumin_.ui.eclipsetoggletype.md), `a_iconPath`: string, `a_labelText?`: string, `a_statusText1?`: string, `a_statusText2?`: string, `a_height?`: number): *[EclipseToggleParams](_lumin_.ui.eclipsetoggleparams.md)*

**Parameters:**

Name | Type |
------ | ------ |
`a_type` | [EclipseToggleType](../enums/_lumin_.ui.eclipsetoggletype.md) |
`a_iconPath` | string |
`a_labelText?` | string |
`a_statusText1?` | string |
`a_statusText2?` | string |
`a_height?` | number |

**Returns:** *[EclipseToggleParams](_lumin_.ui.eclipsetoggleparams.md)*

\+ **new EclipseToggleParams**(`a_type`: [EclipseToggleType](../enums/_lumin_.ui.eclipsetoggletype.md), `a_iconPath`: string, `a_labelText`: string, `a_statusText1`: string, `a_statusText2`: string, `a_height`: number, `a_iconType`: [SystemIcon](../enums/_lumin_.ui.systemicon.md)): *[EclipseToggleParams](_lumin_.ui.eclipsetoggleparams.md)*

**Parameters:**

Name | Type |
------ | ------ |
`a_type` | [EclipseToggleType](../enums/_lumin_.ui.eclipsetoggletype.md) |
`a_iconPath` | string |
`a_labelText` | string |
`a_statusText1` | string |
`a_statusText2` | string |
`a_height` | number |
`a_iconType` | [SystemIcon](../enums/_lumin_.ui.systemicon.md) |

**Returns:** *[EclipseToggleParams](_lumin_.ui.eclipsetoggleparams.md)*

\+ **new EclipseToggleParams**(`a_type`: [EclipseToggleType](../enums/_lumin_.ui.eclipsetoggletype.md), `a_iconPath`: string, `a_labelText`: string, `a_statusText1`: string, `a_statusText2`: string, `a_height`: number, `a_iconType`: [SystemIcon](../enums/_lumin_.ui.systemicon.md), `a_iconTypeOffState`: [SystemIcon](../enums/_lumin_.ui.systemicon.md)): *[EclipseToggleParams](_lumin_.ui.eclipsetoggleparams.md)*

**Parameters:**

Name | Type |
------ | ------ |
`a_type` | [EclipseToggleType](../enums/_lumin_.ui.eclipsetoggletype.md) |
`a_iconPath` | string |
`a_labelText` | string |
`a_statusText1` | string |
`a_statusText2` | string |
`a_height` | number |
`a_iconType` | [SystemIcon](../enums/_lumin_.ui.systemicon.md) |
`a_iconTypeOffState` | [SystemIcon](../enums/_lumin_.ui.systemicon.md) |

**Returns:** *[EclipseToggleParams](_lumin_.ui.eclipsetoggleparams.md)*

\+ **new EclipseToggleParams**(`a_type`: [EclipseToggleType](../enums/_lumin_.ui.eclipsetoggletype.md), `a_iconType`: [SystemIcon](../enums/_lumin_.ui.systemicon.md), `a_labelText?`: string, `a_statusText1?`: string, `a_statusText2?`: string, `a_height?`: number): *[EclipseToggleParams](_lumin_.ui.eclipsetoggleparams.md)*

**Parameters:**

Name | Type |
------ | ------ |
`a_type` | [EclipseToggleType](../enums/_lumin_.ui.eclipsetoggletype.md) |
`a_iconType` | [SystemIcon](../enums/_lumin_.ui.systemicon.md) |
`a_labelText?` | string |
`a_statusText1?` | string |
`a_statusText2?` | string |
`a_height?` | number |

**Returns:** *[EclipseToggleParams](_lumin_.ui.eclipsetoggleparams.md)*

\+ **new EclipseToggleParams**(`a_type`: [EclipseToggleType](../enums/_lumin_.ui.eclipsetoggletype.md), `a_iconType`: [SystemIcon](../enums/_lumin_.ui.systemicon.md), `a_iconTypeOffState`: [SystemIcon](../enums/_lumin_.ui.systemicon.md), `a_labelText?`: string, `a_statusText1?`: string, `a_statusText2?`: string, `a_height?`: number): *[EclipseToggleParams](_lumin_.ui.eclipsetoggleparams.md)*

**Parameters:**

Name | Type |
------ | ------ |
`a_type` | [EclipseToggleType](../enums/_lumin_.ui.eclipsetoggletype.md) |
`a_iconType` | [SystemIcon](../enums/_lumin_.ui.systemicon.md) |
`a_iconTypeOffState` | [SystemIcon](../enums/_lumin_.ui.systemicon.md) |
`a_labelText?` | string |
`a_statusText1?` | string |
`a_statusText2?` | string |
`a_height?` | number |

**Returns:** *[EclipseToggleParams](_lumin_.ui.eclipsetoggleparams.md)*

## Properties

###  absoluteIconPath

• **absoluteIconPath**: *boolean*

If the icon path is an absolute path (default false).

___

###  height

• **height**: *number*

Height of the Eclipse toggle, (default 0 = default toggle height).

___

###  iconPath

• **iconPath**: *string*

Eclipse toggle icon path used in kRadialWithIcon.

___

###  iconScale

• **iconScale**: *number*

Icon scale (default 1.0f).

___

###  iconType

• **iconType**: *[SystemIcon](../enums/_lumin_.ui.systemicon.md)*

The type of SystemIcon to be used for the eclipse toggle

___

###  iconTypeOffState

• **iconTypeOffState**: *[SystemIcon](../enums/_lumin_.ui.systemicon.md)*

Optional SystemIcon to be displayed in the toggle off state

___

###  labelDisplayMode

• **labelDisplayMode**: *[LabelDisplayMode](../enums/_lumin_.ui.labeldisplaymode.md)*

The display mode of the label, used in kIcon.

___

###  labelSide

• **labelSide**: *[Side](../enums/_lumin_.ui.side.md)*

What side the label text sits on, used in kIcon.

___

###  labelText

• **labelText**: *string*

The toggle label text

___

###  showBackground

• **showBackground**: *boolean*

Whether to show the toggle background (OFF outline or solid ON states)

___

###  statusText1

• **statusText1**: *string*

The left status label of the kSwitchWithLabel ("OFF")

___

###  statusText2

• **statusText2**: *string*

The right status label of the kSwitchWithLabel ("ON")

___

###  type

• **type**: *[EclipseToggleType](../enums/_lumin_.ui.eclipsetoggletype.md)*

Type of eclipse toggle.

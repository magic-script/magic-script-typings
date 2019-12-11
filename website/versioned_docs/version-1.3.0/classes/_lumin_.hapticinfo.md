---
id: "_lumin_.hapticinfo"
title: "HapticInfo"
sidebar_label: "HapticInfo"
---

Top-level haptics structure that may cortain custom or built-in LED patterns
as well as vibration patterns for the Control.

## Hierarchy

* **HapticInfo**

## Constructors

###  constructor

\+ **new HapticInfo**(): *[HapticInfo](_lumin_.hapticinfo.md)*

**Returns:** *[HapticInfo](_lumin_.hapticinfo.md)*

## Properties

###  duration_

• **duration_**: *number*

___

###  haptic_

• **haptic_**: *[Type](../enums/_lumin_.haptics.type.md)*

___

###  inbuilt_pattern_

• **inbuilt_pattern_**: *[LedInbuiltPattern](_lumin_.ledinbuiltpattern.md)*

___

###  is_custom_led_pattern_

• **is_custom_led_pattern_**: *boolean*

___

###  led_arc_patterns_

• **led_arc_patterns_**: *Array‹[LedArcPattern](_lumin_.ledarcpattern.md)›*

___

###  vibe_pattern_

• **vibe_pattern_**: *[VibeHapticPattern](_lumin_.vibehapticpattern.md)*

## Methods

###  equals

▸ **equals**(`other`: [HapticInfo](_lumin_.hapticinfo.md)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [HapticInfo](_lumin_.hapticinfo.md) |

**Returns:** *boolean*

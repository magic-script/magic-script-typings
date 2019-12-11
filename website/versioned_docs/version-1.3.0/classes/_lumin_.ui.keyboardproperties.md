---
id: "_lumin_.ui.keyboardproperties"
title: "KeyboardProperties"
sidebar_label: "KeyboardProperties"
---

Struct for keyboard properties defining the capabilities and behavior of the keyboard

## Hierarchy

* **KeyboardProperties**

## Constructors

###  constructor

\+ **new KeyboardProperties**(): *[KeyboardProperties](_lumin_.ui.keyboardproperties.md)*

**Returns:** *[KeyboardProperties](_lumin_.ui.keyboardproperties.md)*

## Properties

###  cancelLabel

• **cancelLabel**: *[CancelLabel](../enums/_lumin_.ui.keyboardproperties.cancellabel.md)*

Label to use for a cancel button

___

###  clearLabel

• **clearLabel**: *[ClearLabel](../enums/_lumin_.ui.keyboardproperties.clearlabel.md)*

Label to use for a clear button

___

###  closeLabel

• **closeLabel**: *[CloseLabel](../enums/_lumin_.ui.keyboardproperties.closelabel.md)*

Label to use for a close button

___

###  customCancelLabel

• **customCancelLabel**: *string*

Custom string label to use for a cancel button

___

###  customClearLabel

• **customClearLabel**: *string*

Custom string label to use for a clear button

___

###  customCloseLabel

• **customCloseLabel**: *string*

Custom string label to use for a close button

___

###  customFormProperties

• **customFormProperties**: *[CustomFormProperties](_lumin_.ui.keyboardproperties.customformproperties.md)*

If the FormMode is kcustom then use these properties

___

###  customNextLabel

• **customNextLabel**: *string*

Custom string label to use for a next button

___

###  customPreviousLabel

• **customPreviousLabel**: *string*

Custom string label to use for a previous button

___

###  customSubmitLabel

• **customSubmitLabel**: *string*

Custom string label to use for a submit button

___

###  enterIsSubmit

• **enterIsSubmit**: *boolean*

Whether the enter button should be replaced with a submit button

___

###  formMode

• **formMode**: *[FormMode](../enums/_lumin_.ui.keyboardproperties.formmode.md)*

The mode of the form buttons

___

###  keyboardMode

• **keyboardMode**: *[KeyboardMode](../enums/_lumin_.ui.keyboardproperties.keyboardmode.md)*

___

###  keyboardZPosition

• **keyboardZPosition**: *[KeyboardZPosition](../enums/_lumin_.ui.keyboardproperties.keyboardzposition.md)*

Specifies the location to position the keyboard along the z axis

___

###  layoutType

• **layoutType**: *[LayoutType](../enums/_lumin_.ui.layouttype.md)*

The layout type to use on the keyboard

___

###  nextLabel

• **nextLabel**: *[NextLabel](../enums/_lumin_.ui.keyboardproperties.nextlabel.md)*

Label to use for a next button

___

###  offsetPosition

• **offsetPosition**: *[number, number]*

The offset in world coordinates to move the keyboard from its location

___

###  previousLabel

• **previousLabel**: *[PreviousLabel](../enums/_lumin_.ui.keyboardproperties.previouslabel.md)*

Label to use for a previous button

___

###  showAuxiliaryRow

• **showAuxiliaryRow**: *boolean*

Whether the auxiliary is to be displayed

___

###  speechToTextEnabled

• **speechToTextEnabled**: *boolean*

Whether the speech to text button should be enabled

___

###  submitLabel

• **submitLabel**: *[SubmitLabel](../enums/_lumin_.ui.keyboardproperties.submitlabel.md)*

Label to use for a submit button

___

###  suggestionMode

• **suggestionMode**: *[SuggestionMode](../enums/_lumin_.ui.keyboardproperties.suggestionmode.md)*

Mode to use for suggestions

___

###  width

• **width**: *number*

The width of the keyboard in world coordinates

___

###  widthRatio

• **widthRatio**: *number*

The width of the keyboard as a ratio of the calling volume

## Methods

###  equals

▸ **equals**(`other`: [KeyboardProperties](_lumin_.ui.keyboardproperties.md)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [KeyboardProperties](_lumin_.ui.keyboardproperties.md) |

**Returns:** *boolean*

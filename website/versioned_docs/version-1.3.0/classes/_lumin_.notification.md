---
id: "_lumin_.notification"
title: "Notification"
sidebar_label: "Notification"
---

## Hierarchy

* **Notification**

## Constructors

###  constructor

\+ **new Notification**(): *[Notification](_lumin_.notification.md)*

Default constructor

**Returns:** *[Notification](_lumin_.notification.md)*

## Methods

###  getActivateButtonGlyph

▸ **getActivateButtonGlyph**(): *[NotificationActivateGlyph](../enums/_lumin_.notification.notificationactivateglyph.md)*

**`priv`** none

**Returns:** *[NotificationActivateGlyph](../enums/_lumin_.notification.notificationactivateglyph.md)*

the glyph used for the activate button

___

###  getActivateButtonText

▸ **getActivateButtonText**(): *string*

**`priv`** none

**Returns:** *string*

the text used on the activate button

___

###  getActivatePayload

▸ **getActivatePayload**(): *string*

**`priv`** none

**Returns:** *string*

the custom data of the notification

___

###  getDetailedMessage

▸ **getDetailedMessage**(): *string*

**`priv`** none

**Returns:** *string*

the detailed message in the notification

___

###  getDismissButtonGlyph

▸ **getDismissButtonGlyph**(): *[NotificationDismissGlyph](../enums/_lumin_.notification.notificationdismissglyph.md)*

**`priv`** none

**Returns:** *[NotificationDismissGlyph](../enums/_lumin_.notification.notificationdismissglyph.md)*

the glyph used with the dismiss button

___

###  getDismissButtonText

▸ **getDismissButtonText**(): *string*

**`priv`** none

**Returns:** *string*

the text used on the dismiss button

___

###  getIconModelPath

▸ **getIconModelPath**(): *string*

**`priv`** none

**Returns:** *string*

the path of the icon model file

___

###  getIconTexturePath

▸ **getIconTexturePath**(): *string*

**`priv`** none

**Returns:** *string*

the path of the icon texture file

___

###  getIsExclusiveNotification

▸ **getIsExclusiveNotification**(): *boolean*

**`priv`** none

**Returns:** *boolean*

true if this is an exclusive notification, false otherwise

___

###  getNotificationSound

▸ **getNotificationSound**(): *[NotificationSound](../enums/_lumin_.notification.notificationsound.md)*

**`priv`** none

**Returns:** *[NotificationSound](../enums/_lumin_.notification.notificationsound.md)*

the notification sound

___

###  getSummarizedMessage

▸ **getSummarizedMessage**(): *string*

**`priv`** none

**Returns:** *string*

the summarized message in the notification

___

###  getTitle

▸ **getTitle**(): *string*

**`priv`** none

**Returns:** *string*

the title of the notification

___

###  setActivateAction

▸ **setActivateAction**(`action`: function): *void*

Set the callback for the action performed when the notification is activated

**`priv`** none

**Parameters:**

▪ **action**: *function*

the callback to run on activate

▸ (`arg0`: [Notification](_lumin_.notification.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg0` | [Notification](_lumin_.notification.md) |

**Returns:** *void*

___

###  setActivateButtonGlyph

▸ **setActivateButtonGlyph**(`glyph`: [NotificationActivateGlyph](../enums/_lumin_.notification.notificationactivateglyph.md)): *void*

Set the glyph used for the activate button

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`glyph` | [NotificationActivateGlyph](../enums/_lumin_.notification.notificationactivateglyph.md) | the glyph used for the activate button |

**Returns:** *void*

___

###  setActivateButtonText

▸ **setActivateButtonText**(`activateText`: string): *void*

Set the text used in the activate button

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`activateText` | string | the text to use on the activate button |

**Returns:** *void*

___

###  setActivatePayload

▸ **setActivatePayload**(`activatePayload`: string): *void*

Set the custom data of the notification

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`activatePayload` | string | the custom data to set |

**Returns:** *void*

___

###  setDetailedMessage

▸ **setDetailedMessage**(`message`: string): *void*

Set the detailed version of the notification message

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | string | the detailed message |

**Returns:** *void*

___

###  setDismissAction

▸ **setDismissAction**(`action`: function): *void*

Set the callback for the action performed when the notification is dismissed

**`priv`** none

**Parameters:**

▪ **action**: *function*

the callback to run on dismiss

▸ (`arg0`: [Notification](_lumin_.notification.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg0` | [Notification](_lumin_.notification.md) |

**Returns:** *void*

___

###  setDismissButtonGlyph

▸ **setDismissButtonGlyph**(`glyph`: [NotificationDismissGlyph](../enums/_lumin_.notification.notificationdismissglyph.md)): *void*

Set the glyph used for the dismiss button

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`glyph` | [NotificationDismissGlyph](../enums/_lumin_.notification.notificationdismissglyph.md) | the glyph used for the dismiss button |

**Returns:** *void*

___

###  setDismissButtonText

▸ **setDismissButtonText**(`dismissText`: string): *void*

Set the text used for the dismiss button

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`dismissText` | string | the text used on the dismiss button |

**Returns:** *void*

___

###  setIconModelPath

▸ **setIconModelPath**(`iconModelPath`: string): *void*

Set the path of the icon model used in the notification

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`iconModelPath` | string | the path to the icon model file |

**Returns:** *void*

___

###  setIconTexturePath

▸ **setIconTexturePath**(`iconTexturePath`: string): *void*

Set the path of the icon texture used in the notification

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`iconTexturePath` | string | the path to the icon texture file |

**Returns:** *void*

___

###  setIsExclusiveNotification

▸ **setIsExclusiveNotification**(`isExclusiveNotification`: boolean): *void*

Set whether or not this is an exclusive notification

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isExclusiveNotification` | boolean | true for an exclusive notification, false otherwise |

**Returns:** *void*

___

###  setNotificationSound

▸ **setNotificationSound**(`notificationSound`: [NotificationSound](../enums/_lumin_.notification.notificationsound.md)): *void*

Set the sound to use when the notification is shown

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`notificationSound` | [NotificationSound](../enums/_lumin_.notification.notificationsound.md) | the sound to use with the notification |

**Returns:** *void*

___

###  setSummarizedMessage

▸ **setSummarizedMessage**(`message`: string): *void*

Set the brief version of the notification message

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | string | the brief message |

**Returns:** *void*

___

###  setTitle

▸ **setTitle**(`title`: string): *void*

Set the title of the notification

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`title` | string | the title of the notification |

**Returns:** *void*

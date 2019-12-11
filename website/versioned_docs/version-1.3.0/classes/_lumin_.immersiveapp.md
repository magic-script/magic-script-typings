---
id: "_lumin_.immersiveapp"
title: "ImmersiveApp"
sidebar_label: "ImmersiveApp"
---

Base class for Lumin Runtime immersive apps.

## Hierarchy

* [BaseApp](_lumin_.baseapp.md)

  ↳ **ImmersiveApp**

## Constructors

###  constructor

\+ **new ImmersiveApp**(`a_fTimeDelta?`: number): *[ImmersiveApp](_lumin_.immersiveapp.md)*

*Overrides [BaseApp](_lumin_.baseapp.md).[constructor](_lumin_.baseapp.md#constructor)*

Creates an immersive application instance.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_fTimeDelta?` | number | `default = 0.0`<br/> - the preferred update rate as a time interval in seconds.        As a special case, 0.0f represents event-based mode, where update callbacks        will not happen at regular intervals -- only in response to events.  |

**Returns:** *[ImmersiveApp](_lumin_.immersiveapp.md)*

## Methods

###  checkPrivilege

▸ **checkPrivilege**(`privilegeId`: [PrivilegeId](../enums/_lumin_.privilegeid.md)): *[PrivilegeResult](../enums/_lumin_.privilegeresult.md)*

*Inherited from [BaseApp](_lumin_.baseapp.md).[checkPrivilege](_lumin_.baseapp.md#checkprivilege)*

Checks if a privilege is currently granted.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`privilegeId` | [PrivilegeId](../enums/_lumin_.privilegeid.md) | The privilege ID to check |

**Returns:** *[PrivilegeResult](../enums/_lumin_.privilegeresult.md)*

Granted or Denied

___

###  deInit

▸ **deInit**(): *number*

*Overrides [BaseApp](_lumin_.baseapp.md).[deInit](_lumin_.baseapp.md#deinit)*

**Returns:** *number*

___

###  deletePrism

▸ **deletePrism**(`prism`: [Prism](_lumin_.prism.md)): *void*

*Inherited from [BaseApp](_lumin_.baseapp.md).[deletePrism](_lumin_.baseapp.md#deleteprism)*

Deletes the prism

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prism` | [Prism](_lumin_.prism.md) | the Prism to delete  |

**Returns:** *void*

___

###  dismissAllNotifications

▸ **dismissAllNotifications**(): *void*

*Inherited from [BaseApp](_lumin_.baseapp.md).[dismissAllNotifications](_lumin_.baseapp.md#dismissallnotifications)*

Dismss all notifications from this application

**`priv`** NormalNotificationsUsage

**Returns:** *void*

___

###  dismissNotification

▸ **dismissNotification**(`notification`: [Notification](_lumin_.notification.md)): *boolean*

*Inherited from [BaseApp](_lumin_.baseapp.md).[dismissNotification](_lumin_.baseapp.md#dismissnotification)*

Dismiss the given notification

**`priv`** NormalNotificationsUsage

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`notification` | [Notification](_lumin_.notification.md) | the notification to dismiss |

**Returns:** *boolean*

true if the notification was dismissed, false otherwise

___

###  eventListener

▸ **eventListener**(`a_pEvent`: [ServerEvent](_lumin_.serverevent.md)): *boolean*

*Overrides [BaseApp](_lumin_.baseapp.md).[eventListener](_lumin_.baseapp.md#eventlistener)*

**Parameters:**

Name | Type |
------ | ------ |
`a_pEvent` | [ServerEvent](_lumin_.serverevent.md) |

**Returns:** *boolean*

___

###  getComponentName

▸ **getComponentName**(): *string*

*Inherited from [BaseApp](_lumin_.baseapp.md).[getComponentName](_lumin_.baseapp.md#getcomponentname)*

Returns the name of the component this application instance belongs to.

**`priv`** none

**Returns:** *string*

___

###  getHeadposeConfidence

▸ **getHeadposeConfidence**(): *number*

*Inherited from [BaseApp](_lumin_.baseapp.md).[getHeadposeConfidence](_lumin_.baseapp.md#getheadposeconfidence)*

Get the underlying system's confidence in the headpose values

**Returns:** *number*

a value between 0.0 and 1.0 indicating the confidence

___

###  getHeadposeError

▸ **getHeadposeError**(): *[Error](../enums/_lumin_.headtracking.error.md)*

*Inherited from [BaseApp](_lumin_.baseapp.md).[getHeadposeError](_lumin_.baseapp.md#getheadposeerror)*

Get the current headpose error (if any)

**Returns:** *[Error](../enums/_lumin_.headtracking.error.md)*

the current headpose error

___

###  getHeadposeMode

▸ **getHeadposeMode**(): *[Mode](../enums/_lumin_.headtracking.mode.md)*

*Inherited from [BaseApp](_lumin_.baseapp.md).[getHeadposeMode](_lumin_.baseapp.md#getheadposemode)*

Get the current headpose mode (6-DOF or 3-DOF)

**Returns:** *[Mode](../enums/_lumin_.headtracking.mode.md)*

the current headpose mode

___

###  getHeadposeWorldForwardVector

▸ **getHeadposeWorldForwardVector**(): *[number, number, number]*

*Inherited from [BaseApp](_lumin_.baseapp.md).[getHeadposeWorldForwardVector](_lumin_.baseapp.md#getheadposeworldforwardvector)*

Get the Headpose forward vector in world space.

**Returns:** *[number, number, number]*

the world space headpose forward vector.

___

###  getHeadposeWorldPosition

▸ **getHeadposeWorldPosition**(): *[number, number, number]*

*Inherited from [BaseApp](_lumin_.baseapp.md).[getHeadposeWorldPosition](_lumin_.baseapp.md#getheadposeworldposition)*

Get the Headpose position in world space.

**Returns:** *[number, number, number]*

the world space headpose position.

___

###  getHeadposeWorldUpVector

▸ **getHeadposeWorldUpVector**(): *[number, number, number]*

*Inherited from [BaseApp](_lumin_.baseapp.md).[getHeadposeWorldUpVector](_lumin_.baseapp.md#getheadposeworldupvector)*

Get the Headpose up vector in world space.

**Returns:** *[number, number, number]*

the world space headpose up vector.

___

###  getPackageName

▸ **getPackageName**(): *string*

*Inherited from [BaseApp](_lumin_.baseapp.md).[getPackageName](_lumin_.baseapp.md#getpackagename)*

Returns the package name for this application.

**`priv`** none

**Returns:** *string*

___

###  getPackagePath

▸ **getPackagePath**(): *string*

*Inherited from [BaseApp](_lumin_.baseapp.md).[getPackagePath](_lumin_.baseapp.md#getpackagepath)*

Returns the application's path

**`note`** the path will have a trailing / appended to it
    e.g. /data/local/tmp/

**Returns:** *string*

___

###  getPreloadedResources

▸ **getPreloadedResources**(): *[Preloaded](_lumin_.resources.preloaded.md)*

*Inherited from [BaseApp](_lumin_.baseapp.md).[getPreloadedResources](_lumin_.baseapp.md#getpreloadedresources)*

Get an object clients can use to find preloaded resources.

**`priv`** none

**Returns:** *[Preloaded](_lumin_.resources.preloaded.md)*

___

###  getPrism

▸ **getPrism**(`prismId`: bigint): *[Prism](_lumin_.prism.md)*

*Inherited from [BaseApp](_lumin_.baseapp.md).[getPrism](_lumin_.baseapp.md#getprism)*

Returns pointer to the Prism

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prismId` | bigint | the Id of the Prism |

**Returns:** *[Prism](_lumin_.prism.md)*

The prism

___

###  getPrismPosition

▸ **getPrismPosition**(`a_prism`: [Prism](_lumin_.prism.md)): *[number, number, number]*

Returns the position of a volume in world space

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_prism` | [Prism](_lumin_.prism.md) | the prism |

**Returns:** *[number, number, number]*

- the prism position

___

###  getPrismRotation

▸ **getPrismRotation**(`a_prism`: [Prism](_lumin_.prism.md)): *[number, number, number, number]*

 Returns the rotation of a volume in world space

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_prism` | [Prism](_lumin_.prism.md) | the prism |

**Returns:** *[number, number, number, number]*

- the prism orientation quaternion

___

###  getPrismTransform

▸ **getPrismTransform**(`a_prism`: [Prism](_lumin_.prism.md)): *[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]*

Returns the transform of a volume in world space

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_prism` | [Prism](_lumin_.prism.md) | the prism |

**Returns:** *[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]*

The transform of the Prism in world space

___

###  getTempPath

▸ **getTempPath**(): *string*

*Inherited from [BaseApp](_lumin_.baseapp.md).[getTempPath](_lumin_.baseapp.md#gettemppath)*

Returns the application's path for temporary files

**`note`** the path will have a trailing / appended to it
    e.g. /data/local/tmp/

**`priv`** none

**Returns:** *string*

___

###  getVisibleName

▸ **getVisibleName**(): *string*

*Inherited from [BaseApp](_lumin_.baseapp.md).[getVisibleName](_lumin_.baseapp.md#getvisiblename)*

Returns the user-visible name for this application.

**`priv`** none

**Returns:** *string*

___

###  getWritablePath

▸ **getWritablePath**(): *string*

*Inherited from [BaseApp](_lumin_.baseapp.md).[getWritablePath](_lumin_.baseapp.md#getwritablepath)*

Returns the application's writable path.

This folder is accessible to the application when the user has logged in once,
even if the device is locked and not in use.
An application that needs to write data when running in the background
(e.g. a music app) should use this path. The same application can continue
using this path when the device is unlocked afterwards.

**`note`** the path will have a trailing / appended to it
    e.g. /data/user/1/apps/com.magicleap.app/documents/C2/

**`priv`** none

**Returns:** *string*

___

###  getWritablePathWhenUnlocked

▸ **getWritablePathWhenUnlocked**(): *string*

*Inherited from [BaseApp](_lumin_.baseapp.md).[getWritablePathWhenUnlocked](_lumin_.baseapp.md#getwritablepathwhenunlocked)*

Returns the application's writable path while unlocked.

This folder is accessible to the application when the user has logged in and the
device is unlocked and being used.

**`note`** the path will have a trailing / appended to it
    e.g. /data/user/1/apps/com.magicleap.app/documents/C2/

**`priv`** none

**Returns:** *string*

___

###  isImageTrackingReady

▸ **isImageTrackingReady**(): *boolean*

*Inherited from [BaseApp](_lumin_.baseapp.md).[isImageTrackingReady](_lumin_.baseapp.md#isimagetrackingready)*

Returns if the image tracking system is ready to be used. Do not call any image tracking functions
until this function returns true.

**`priv`** CameraCapture

**Returns:** *boolean*

true if we can start tracking images.

___

###  isShareableApp

▸ **isShareableApp**(): *boolean*

*Inherited from [BaseApp](_lumin_.baseapp.md).[isShareableApp](_lumin_.baseapp.md#isshareableapp)*

Returns if the app running is a Shareable app

**`priv`** none

**Returns:** *boolean*

___

###  isSkipRaycast

▸ **isSkipRaycast**(`a_prism`: [Prism](_lumin_.prism.md)): *boolean*

Returns the skip raycast state of the volume.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_prism` | [Prism](_lumin_.prism.md) | The Prism. |

**Returns:** *boolean*

true if the prism is skipped during raycasting

___

###  onAppPause

▸ **onAppPause**(): *void*

*Overrides [BaseApp](_lumin_.baseapp.md).[onAppPause](_lumin_.baseapp.md#onapppause)*

**Returns:** *void*

___

###  onAppResume

▸ **onAppResume**(): *void*

*Overrides [BaseApp](_lumin_.baseapp.md).[onAppResume](_lumin_.baseapp.md#onappresume)*

**Returns:** *void*

___

###  onAppStart

▸ **onAppStart**(`initArg`: [InitArg](_lumin_.initarg.md)): *void*

*Overrides [BaseApp](_lumin_.baseapp.md).[onAppStart](_lumin_.baseapp.md#onappstart)*

**Parameters:**

Name | Type |
------ | ------ |
`initArg` | [InitArg](_lumin_.initarg.md) |

**Returns:** *void*

___

###  onAppUnloadResources

▸ **onAppUnloadResources**(): *void*

*Overrides [BaseApp](_lumin_.baseapp.md).[onAppUnloadResources](_lumin_.baseapp.md#onappunloadresources)*

**Returns:** *void*

___

###  onSharingStart

▸ **onSharingStart**(`sessionId`: bigint, `sceneGraphIDs`: Array‹bigint›): *void*

*Overrides [BaseApp](_lumin_.baseapp.md).[onSharingStart](_lumin_.baseapp.md#onsharingstart)*

**Parameters:**

Name | Type |
------ | ------ |
`sessionId` | bigint |
`sceneGraphIDs` | Array‹bigint› |

**Returns:** *void*

___

###  onSharingStop

▸ **onSharingStop**(`sessionId`: bigint): *void*

*Overrides [BaseApp](_lumin_.baseapp.md).[onSharingStop](_lumin_.baseapp.md#onsharingstop)*

**Parameters:**

Name | Type |
------ | ------ |
`sessionId` | bigint |

**Returns:** *void*

___

###  orientPrism

▸ **orientPrism**(`a_prism`: [Prism](_lumin_.prism.md), `a_orientation`: [number, number, number, number]): *void*

Sets the Orientation of the Prism

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_prism` | [Prism](_lumin_.prism.md) | the prism |
`a_orientation` | [number, number, number, number] | the new prism orientation quaternion  |

**Returns:** *void*

___

###  orientPrismRelativeToCamera

▸ **orientPrismRelativeToCamera**(`a_prism`: [Prism](_lumin_.prism.md), `a_orientation`: [number, number, number, number]): *void*

Sets the Orientation of the Prism relative to the Camera

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_prism` | [Prism](_lumin_.prism.md) | the prism |
`a_orientation` | [number, number, number, number] | the new prism orientation quaternion  |

**Returns:** *void*

___

###  positionPrism

▸ **positionPrism**(`a_prism`: [Prism](_lumin_.prism.md), `a_position`: [number, number, number]): *void*

Sets the Prism Position

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_prism` | [Prism](_lumin_.prism.md) | the prism |
`a_position` | [number, number, number] | the new prism position  |

**Returns:** *void*

___

###  positionPrismRelativeToCamera

▸ **positionPrismRelativeToCamera**(`a_prism`: [Prism](_lumin_.prism.md), `a_position`: [number, number, number]): *void*

Sets the Prism Position relative to the camera

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_prism` | [Prism](_lumin_.prism.md) | the prism |
`a_position` | [number, number, number] | the new prism position, relative to the camera  |

**Returns:** *void*

___

###  postNotification

▸ **postNotification**(`notification`: [Notification](_lumin_.notification.md)): *boolean*

*Inherited from [BaseApp](_lumin_.baseapp.md).[postNotification](_lumin_.baseapp.md#postnotification)*

Post the given notification

**`priv`** NormalNotificationsUsage

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`notification` | [Notification](_lumin_.notification.md) | the notification to post |

**Returns:** *boolean*

true if the notification was posted successfully, false otherwise

___

###  quit

▸ **quit**(): *void*

*Inherited from [BaseApp](_lumin_.baseapp.md).[quit](_lumin_.baseapp.md#quit)*

The application will terminate on the next update loop when this is called.

**`priv`** none

**Returns:** *void*

___

###  requestNewPrism

▸ **requestNewPrism**(`a_size`: [number, number, number], `a_ePrismType?`: [PrismType](../enums/_lumin_.prismtype.md)): *[Prism](_lumin_.prism.md)*

Get a new Prism for use by the Application

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_size` | [number, number, number] | width, height, and breadth of the prism. |
`a_ePrismType?` | [PrismType](../enums/_lumin_.prismtype.md) | `default = PrismType.kWorld`<br/> - Type of Prism (eg: Tied to Headpose or Fixed in the world) |

**Returns:** *[Prism](_lumin_.prism.md)*

Prism - The prism

___

###  requestPrivilege

▸ **requestPrivilege**(`privilegeId`: [PrivilegeId](../enums/_lumin_.privilegeid.md)): *void*

*Inherited from [BaseApp](_lumin_.baseapp.md).[requestPrivilege](_lumin_.baseapp.md#requestprivilege)*

Asynchronously requests a privilege.

The result will be returned on the main thread as a PrivilegeEvent.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`privilegeId` | [PrivilegeId](../enums/_lumin_.privilegeid.md) | The privilege ID to request  |

**Returns:** *void*

___

###  requestPrivilegeBlocking

▸ **requestPrivilegeBlocking**(`privilegeId`: [PrivilegeId](../enums/_lumin_.privilegeid.md)): *[PrivilegeResult](../enums/_lumin_.privilegeresult.md)*

*Inherited from [BaseApp](_lumin_.baseapp.md).[requestPrivilegeBlocking](_lumin_.baseapp.md#requestprivilegeblocking)*

Makes a blocking request for a privilege (may require user interaction).

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`privilegeId` | [PrivilegeId](../enums/_lumin_.privilegeid.md) | The privilege ID to check |

**Returns:** *[PrivilegeResult](../enums/_lumin_.privilegeresult.md)*

Granted or Denied

___

###  requestWorldMeshBlockUpdates

▸ **requestWorldMeshBlockUpdates**(`a_prism`: [Prism](_lumin_.prism.md)): *boolean*

Request to get updates when world mesh block data has changed. WorldMeshBlockEventData messages
will be sent to the app's eventListener function when there is a change to the mesh blocks.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_prism` | [Prism](_lumin_.prism.md) | Prism used to send the event messages. |

**Returns:** *boolean*

true if the request was made successfully

___

###  requestWorldPlaneCast

▸ **requestWorldPlaneCast**(`center`: [number, number, number], `maxDistance`: number, `maxPlaneCount`: number, `flags`: [PlanecastFlags](../enums/_lumin_.planecastflags.md), `userValue`: bigint): *boolean*

*Inherited from [BaseApp](_lumin_.baseapp.md).[requestWorldPlaneCast](_lumin_.baseapp.md#requestworldplanecast)*

Sends a request to the server to search for planes in the environment that match given
criteria. A WorldPlaneCastEventData instance will be sent to the app's eventListener
function when the data is ready.

**`priv`** WorldReconstruction

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`center` | [number, number, number] | Position in world-space that is the center of the search space. |
`maxDistance` | number | Max distance from the center to search for planes. |
`maxPlaneCount` | number | Maximum number of planes to return. |
`flags` | [PlanecastFlags](../enums/_lumin_.planecastflags.md) | Flags to determine what kind of planes to look for. |
`userValue` | bigint | Value that will be sent back in the WorldPlaneCastEventData instance. |

**Returns:** *boolean*

true if the request was sent, false on error

___

###  requestWorldRayCast

▸ **requestWorldRayCast**(`rayStart`: [number, number, number], `rayDir`: [number, number, number], `userValue`: bigint, `confidenceThreshold?`: number): *boolean*

*Inherited from [BaseApp](_lumin_.baseapp.md).[requestWorldRayCast](_lumin_.baseapp.md#requestworldraycast)*

Performs a single ray cast against the world around you. Results are returned as a WorldRayCastEventData
to the app's eventListener function.

**`priv`** WorldReconstruction

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`rayStart` | [number, number, number] | The start point of the ray, in world space. |
`rayDir` | [number, number, number] | Direction to shoot the ray |
`userValue` | bigint | Custom data that you wish to record with this request |
`confidenceThreshold?` | number | `default = 0.199`<br/> Confidence level (between 0 and 1) that must be reached for the        raycast to be considered valid |

**Returns:** *boolean*

true if the request was sent, false on error

▸ **requestWorldRayCast**(`rayStart`: [number, number, number], `rayDir`: [number, number, number], `width`: number, `height`: number, `horizFovDeg`: number, `userValue`: bigint, `confidenceThreshold?`: number): *boolean*

*Inherited from [BaseApp](_lumin_.baseapp.md).[requestWorldRayCast](_lumin_.baseapp.md#requestworldraycast)*

Performs an area ray cast against the world around you. Results are returned as a WorldRayCastEventData
to the app's eventListener function.

**`priv`** WorldReconstruction

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`rayStart` | [number, number, number] | The start point of the ray, in world space. |
`rayDir` | [number, number, number] | Direction to shoot the ray |
`width` | number | Number of horizontal rays |
`height` | number | Number of vertical rays |
`horizFovDeg` | number | Horizontal field-of-view, in degrees |
`userValue` | bigint | Custom data that you wish to record with this request |
`confidenceThreshold?` | number | `default = 0.199`<br/> Confidence level (between 0 and 1) that must be reached for the        raycast to be considered valid |

**Returns:** *boolean*

true if the request was sent, false on error

___

###  resizePrism

▸ **resizePrism**(`a_prism`: [Prism](_lumin_.prism.md), `a_size`: [number, number, number]): *void*

Resizes the Prism

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_prism` | [Prism](_lumin_.prism.md) | the prism to resize |
`a_size` | [number, number, number] | the new size of the prism  |

**Returns:** *void*

___

###  selectPrism

▸ **selectPrism**(`a_prism`: [Prism](_lumin_.prism.md), `a_bSelected`: boolean): *void*

Selects or deselects the specified prism.

Input and other events are delivered only to the selected prism.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_prism` | [Prism](_lumin_.prism.md) | the prism |
`a_bSelected` | boolean | true to select; false to deselect  |

**Returns:** *void*

___

###  setEventSleepTime

▸ **setEventSleepTime**(`a_fSleepTime`: number): *void*

*Inherited from [BaseApp](_lumin_.baseapp.md).[setEventSleepTime](_lumin_.baseapp.md#seteventsleeptime)*

Set the Event Sleep Time

This is the amount of time the client should sleep before firing
the updateloop callback, if no other events have occured.

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_fSleepTime` | number | Time to sleep in seconds, or 0.0f to sleep        indefinitely, until an event occurs.  |

**Returns:** *void*

___

###  setOcclusionEnabled

▸ **setOcclusionEnabled**(`a_enabled`: boolean): *void*

Toggles occlusion.

**`priv`** Occlusion

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_enabled` | boolean | true to enable occlusion, false to disable |

**Returns:** *void*

___

###  setSkipRaycast

▸ **setSkipRaycast**(`a_prism`: [Prism](_lumin_.prism.md), `a_skipRaycast`: boolean): *void*

Sets the skip raycast state of the prism. If the prism is skipped, all its Nodes will be as
well.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_prism` | [Prism](_lumin_.prism.md) | The Prism. |
`a_skipRaycast` | boolean | Raycast skip flag.  |

**Returns:** *void*

___

###  stopTrackImage

▸ **stopTrackImage**(`imageName`: string): *boolean*

*Inherited from [BaseApp](_lumin_.baseapp.md).[stopTrackImage](_lumin_.baseapp.md#stoptrackimage)*

Stops tracking an image. If no images are being tracked, will disable tracking.

**`priv`** CameraCapture

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`imageName` | string | Name of the image. Should be the same as the name passed to one of the the trackImage functions. |

**Returns:** *boolean*

true if tracking the image was stopped

___

###  stopWorldMeshBlockUpdates

▸ **stopWorldMeshBlockUpdates**(`a_prism`: [Prism](_lumin_.prism.md)): *boolean*

Request to stop getting updates when world mesh block data has changed.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_prism` | [Prism](_lumin_.prism.md) | Prism used to make the requestWorldMeshBlockUpdates call. |

**Returns:** *boolean*

true if the request was made successfully

___

###  trackMovingImage

▸ **trackMovingImage**(`imageName`: string, `dimensions`: [number, number], `file`: string, `prism`: [Prism](_lumin_.prism.md)): *boolean*

*Inherited from [BaseApp](_lumin_.baseapp.md).[trackMovingImage](_lumin_.baseapp.md#trackmovingimage)*

Starts a request to track a moving image, based on an image file. Moving images are harder to
track than non-moving ones; use this function only if sure the image is moving. This will enable
tracking if it is not already enabled.

**`priv`** CameraCapture

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`imageName` | string | Unique name for the image. |
`dimensions` | [number, number] | Approximate size of the image, in meters. This is used to help identify the image. |
`file` | string | File name of the image to track. Name is relative to the app's location. |
`prism` | [Prism](_lumin_.prism.md) | Where to send the image position info |

**Returns:** *boolean*

true if tracking was started, false if there was an error.

___

###  trackStaticImage

▸ **trackStaticImage**(`imageName`: string, `dimensions`: [number, number], `file`: string, `prism`: [Prism](_lumin_.prism.md)): *boolean*

*Inherited from [BaseApp](_lumin_.baseapp.md).[trackStaticImage](_lumin_.baseapp.md#trackstaticimage)*

Starts a request to track an non-moving image, based on an image file. Static images are easier
to track than moving ones, so use this method if possible. This will enable tracking if it is
not already enabled.

**`priv`** CameraCapture

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`imageName` | string | Unique name for the image. |
`dimensions` | [number, number] | Approximate size of the image, in meters. This is used to help identify the image. |
`file` | string | File name of the image to track. Name is relative to the app's location. |
`prism` | [Prism](_lumin_.prism.md) | Where to send the image position info |

**Returns:** *boolean*

true if tracking was started, false if there was an error.

___

###  triggerControlBodyHaptics

▸ **triggerControlBodyHaptics**(`pattern`: [VibePattern](../enums/_lumin_.haptics.vibepattern.md), `duration?`: number, `intensity?`: [VibeIntensity](../enums/_lumin_.haptics.vibeintensity.md), `controlID?`: number): *void*

*Inherited from [BaseApp](_lumin_.baseapp.md).[triggerControlBodyHaptics](_lumin_.baseapp.md#triggercontrolbodyhaptics)*

Request vibration haptics on the body of the control device

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pattern` | [VibePattern](../enums/_lumin_.haptics.vibepattern.md) | the vibration pattern to use |
`duration?` | number | `default = 100`<br/> the duration to play the pattern over (ms) |
`intensity?` | [VibeIntensity](../enums/_lumin_.haptics.vibeintensity.md) | `default = haptics.VibeIntensity.MEDIUM`<br/> the intensity of the vibration |
`controlID?` | number | `default = 0`<br/> the id of the device to send the haptic request to  |

**Returns:** *void*

___

###  triggerControlCustomHaptic

▸ **triggerControlCustomHaptic**(`haptic`: [HapticInfo](_lumin_.hapticinfo.md), `controlID?`: number): *void*

*Inherited from [BaseApp](_lumin_.baseapp.md).[triggerControlCustomHaptic](_lumin_.baseapp.md#triggercontrolcustomhaptic)*

Trigger a custom control haptic

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`haptic` | [HapticInfo](_lumin_.hapticinfo.md) | and individual custom haptic |
`controlID?` | number | `default = 0`<br/> id of control device  |

**Returns:** *void*

___

###  triggerControlCustomHaptics

▸ **triggerControlCustomHaptics**(`haptics`: Array‹[HapticInfo](_lumin_.hapticinfo.md)›, `controlID?`: number): *void*

*Inherited from [BaseApp](_lumin_.baseapp.md).[triggerControlCustomHaptics](_lumin_.baseapp.md#triggercontrolcustomhaptics)*

Trigger a list of custom control haptics

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`haptics` | Array‹[HapticInfo](_lumin_.hapticinfo.md)› | the combined list of haptics |
`controlID?` | number | `default = 0`<br/> id of control device  |

**Returns:** *void*

___

###  triggerControlHaptic

▸ **triggerControlHaptic**(`haptic`: [VibePattern](../enums/_lumin_.haptics.vibepattern.md), `controlID?`: number): *void*

*Inherited from [BaseApp](_lumin_.baseapp.md).[triggerControlHaptic](_lumin_.baseapp.md#triggercontrolhaptic)*

Trigger a control vibration haptic

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`haptic` | [VibePattern](../enums/_lumin_.haptics.vibepattern.md) | the VibePattern to trigger |
`controlID?` | number | `default = 0`<br/> id of control device  |

**Returns:** *void*

▸ **triggerControlHaptic**(`haptic`: [LedPattern](../enums/_lumin_.haptics.ledpattern.md), `controlID?`: number): *void*

*Inherited from [BaseApp](_lumin_.baseapp.md).[triggerControlHaptic](_lumin_.baseapp.md#triggercontrolhaptic)*

Trigger a control LED haptic

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`haptic` | [LedPattern](../enums/_lumin_.haptics.ledpattern.md) | the LedPattern to trigger |
`controlID?` | number | `default = 0`<br/> id of control device  |

**Returns:** *void*

___

###  triggerControlLEDHaptics

▸ **triggerControlLEDHaptics**(`pattern`: [LedPattern](../enums/_lumin_.haptics.ledpattern.md), `duration?`: number, `intensity?`: [VibeIntensity](../enums/_lumin_.haptics.vibeintensity.md), `controlID?`: number): *void*

*Inherited from [BaseApp](_lumin_.baseapp.md).[triggerControlLEDHaptics](_lumin_.baseapp.md#triggercontrolledhaptics)*

Request light haptics on the LEDs of the control device

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pattern` | [LedPattern](../enums/_lumin_.haptics.ledpattern.md) | the LED light pattern to use |
`duration?` | number | `default = 100`<br/> the duration to play the pattern over (ms) |
`intensity?` | [VibeIntensity](../enums/_lumin_.haptics.vibeintensity.md) | `default = haptics.VibeIntensity.MEDIUM`<br/> the intensity of the haptic |
`controlID?` | number | `default = 0`<br/> the id of the device to send the haptic request to  |

**Returns:** *void*

___

###  updateLoop

▸ **updateLoop**(`a_fDelta`: number): *boolean*

*Overrides [BaseApp](_lumin_.baseapp.md).[updateLoop](_lumin_.baseapp.md#updateloop)*

**Parameters:**

Name | Type |
------ | ------ |
`a_fDelta` | number |

**Returns:** *boolean*

___

###  waitForTermination

▸ **waitForTermination**(): *void*

*Inherited from [BaseApp](_lumin_.baseapp.md).[waitForTermination](_lumin_.baseapp.md#waitfortermination)*

This call will block the caller thread until the app has finished running.
It must NOT be called from the client update thread or it will assert.

**`priv`** none

**Returns:** *void*

___

### `Static` CancelMainThreadRunnable

▸ **CancelMainThreadRunnable**(`callbackId`: [CallbackID](_lumin_.utils.callbackid.md)): *boolean*

*Inherited from [BaseApp](_lumin_.baseapp.md).[CancelMainThreadRunnable](_lumin_.baseapp.md#static-cancelmainthreadrunnable)*

Cancels a previously added runnable if it has not yet run.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`callbackId` | [CallbackID](_lumin_.utils.callbackid.md) | the ID returned when the runnable was added.  |

**Returns:** *boolean*

true if the runnable was canceled, false if it has already been scheduled.

___

### `Static` IsMainThreadRunnablePending

▸ **IsMainThreadRunnablePending**(`callbackId`: [CallbackID](_lumin_.utils.callbackid.md)): *boolean*

*Inherited from [BaseApp](_lumin_.baseapp.md).[IsMainThreadRunnablePending](_lumin_.baseapp.md#static-ismainthreadrunnablepending)*

Returns true if the runnable with the given ID is still pending.

**Parameters:**

Name | Type |
------ | ------ |
`callbackId` | [CallbackID](_lumin_.utils.callbackid.md) |

**Returns:** *boolean*

true if the runnable with the given ID is still in the queue.

___

### `Static` RunOnMainThread

▸ **RunOnMainThread**(`a_runnable`: function): *[CallbackID](_lumin_.utils.callbackid.md)*

*Inherited from [BaseApp](_lumin_.baseapp.md).[RunOnMainThread](_lumin_.baseapp.md#static-runonmainthread)*

Runs the given task on the main thread (with an optional delay).

**Parameters:**

▪ **a_runnable**: *function*

the callback to run on the main thread.

▸ (): *void*

**Returns:** *[CallbackID](_lumin_.utils.callbackid.md)*

a unique ID that can be used to cancel the runnable.

▸ **RunOnMainThread**(`a_runnable`: function, `delay`: number): *[CallbackID](_lumin_.utils.callbackid.md)*

*Inherited from [BaseApp](_lumin_.baseapp.md).[RunOnMainThread](_lumin_.baseapp.md#static-runonmainthread)*

Runs the given task on the main thread (with an optional delay).

**Parameters:**

▪ **a_runnable**: *function*

the callback to run on the main thread.

▸ (): *void*

▪ **delay**: *number*

the optional time in seconds to wait before running the callback

**Returns:** *[CallbackID](_lumin_.utils.callbackid.md)*

a unique ID that can be used to cancel the runnable.

___

### `Static` RunOnMainThreadSync

▸ **RunOnMainThreadSync**(`a_runnable`: function): *void*

*Inherited from [BaseApp](_lumin_.baseapp.md).[RunOnMainThreadSync](_lumin_.baseapp.md#static-runonmainthreadsync)*

Similar to RunOnMainThread() but synchronous. Will
block caller until client event loop will process callback
event. Except when invoked form client eventloop thread - in
that case a_runnable will be called immediately.

**Parameters:**

▪ **a_runnable**: *function*

▸ (): *void*

**Returns:** *void*

---
id: "_lumin_.baseapp"
title: "BaseApp"
sidebar_label: "BaseApp"
---

Base class for Lumin Runtime apps.

## Hierarchy

* **BaseApp**

  ↳ [ImmersiveApp](_lumin_.immersiveapp.md)

  ↳ [LandscapeApp](_lumin_.landscapeapp.md)

## Constructors

###  constructor

\+ **new BaseApp**(): *[BaseApp](_lumin_.baseapp.md)*

**Returns:** *[BaseApp](_lumin_.baseapp.md)*

## Methods

###  checkPrivilege

▸ **checkPrivilege**(`privilegeId`: [PrivilegeId](../enums/_lumin_.privilegeid.md)): *[PrivilegeResult](../enums/_lumin_.privilegeresult.md)*

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

Override this method to do one-time de-initialization before quitting.

**`priv`** none

**Returns:** *number*

___

###  deletePrism

▸ **deletePrism**(`prism`: [Prism](_lumin_.prism.md)): *void*

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

Dismss all notifications from this application

**`priv`** NormalNotificationsUsage

**Returns:** *void*

___

###  dismissNotification

▸ **dismissNotification**(`notification`: [Notification](_lumin_.notification.md)): *boolean*

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

Override this method to react to incoming events

Note: This is triggered on the same thread as the clientUpdateThread

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_pEvent` | [ServerEvent](_lumin_.serverevent.md) | Server Events |

**Returns:** *boolean*

true = Event has been consumed

___

###  getComponentName

▸ **getComponentName**(): *string*

Returns the name of the component this application instance belongs to.

**`priv`** none

**Returns:** *string*

___

###  getHeadposeConfidence

▸ **getHeadposeConfidence**(): *number*

Get the underlying system's confidence in the headpose values

**Returns:** *number*

a value between 0.0 and 1.0 indicating the confidence

___

###  getHeadposeError

▸ **getHeadposeError**(): *[Error](../enums/_lumin_.headtracking.error.md)*

Get the current headpose error (if any)

**Returns:** *[Error](../enums/_lumin_.headtracking.error.md)*

the current headpose error

___

###  getHeadposeMode

▸ **getHeadposeMode**(): *[Mode](../enums/_lumin_.headtracking.mode.md)*

Get the current headpose mode (6-DOF or 3-DOF)

**Returns:** *[Mode](../enums/_lumin_.headtracking.mode.md)*

the current headpose mode

___

###  getHeadposeWorldForwardVector

▸ **getHeadposeWorldForwardVector**(): *[number, number, number]*

Get the Headpose forward vector in world space.

**Returns:** *[number, number, number]*

the world space headpose forward vector.

___

###  getHeadposeWorldPosition

▸ **getHeadposeWorldPosition**(): *[number, number, number]*

Get the Headpose position in world space.

**Returns:** *[number, number, number]*

the world space headpose position.

___

###  getHeadposeWorldUpVector

▸ **getHeadposeWorldUpVector**(): *[number, number, number]*

Get the Headpose up vector in world space.

**Returns:** *[number, number, number]*

the world space headpose up vector.

___

###  getPackageName

▸ **getPackageName**(): *string*

Returns the package name for this application.

**`priv`** none

**Returns:** *string*

___

###  getPackagePath

▸ **getPackagePath**(): *string*

Returns the application's path

**`note`** the path will have a trailing / appended to it
    e.g. /data/local/tmp/

**Returns:** *string*

___

###  getPreloadedResources

▸ **getPreloadedResources**(): *[Preloaded](_lumin_.resources.preloaded.md)*

Get an object clients can use to find preloaded resources.

**`priv`** none

**Returns:** *[Preloaded](_lumin_.resources.preloaded.md)*

___

###  getPrism

▸ **getPrism**(`prismId`: bigint): *[Prism](_lumin_.prism.md)*

Returns pointer to the Prism

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`prismId` | bigint | the Id of the Prism |

**Returns:** *[Prism](_lumin_.prism.md)*

The prism

___

###  getTempPath

▸ **getTempPath**(): *string*

Returns the application's path for temporary files

**`note`** the path will have a trailing / appended to it
    e.g. /data/local/tmp/

**`priv`** none

**Returns:** *string*

___

###  getVisibleName

▸ **getVisibleName**(): *string*

Returns the user-visible name for this application.

**`priv`** none

**Returns:** *string*

___

###  getWritablePath

▸ **getWritablePath**(): *string*

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

Returns if the image tracking system is ready to be used. Do not call any image tracking functions
until this function returns true.

**`priv`** CameraCapture

**Returns:** *boolean*

true if we can start tracking images.

___

###  isShareableApp

▸ **isShareableApp**(): *boolean*

Returns if the app running is a Shareable app

**`priv`** none

**Returns:** *boolean*

___

###  onAppPause

▸ **onAppPause**(): *void*

The app should backup its data to disk and be prepared to be
killed if the system thinks it is necessary. It should also
stop drawing to the surface since it will not be rendered.

**`priv`** none

**Returns:** *void*

___

###  onAppResume

▸ **onAppResume**(): *void*

The app can resume drawing to the surface and recover the
resources it stashed during onPause()

**`priv`** none

**Returns:** *void*

___

###  onAppStart

▸ **onAppStart**(`initArg`: [InitArg](_lumin_.initarg.md)): *void*

Entry point for all application launch requests.

This method will be called right after init() on first application launch.
It will also be called whenever an attempt is made to launch the application
again (from launcher menu, or to open a file or URI).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`initArg` | [InitArg](_lumin_.initarg.md) | The initial application argument.  |

**Returns:** *void*

___

###  onAppUnloadResources

▸ **onAppUnloadResources**(): *void*

The app should release resources that it is not actively using
to reduce the load on the system

**`priv`** none

**Returns:** *void*

___

###  onSharingStart

▸ **onSharingStart**(`sessionId`: bigint, `sceneGraphIDs`: Array‹bigint›): *void*

Override this method to receive sharing start callback

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sessionId` | bigint | Id associated with the sharing session that has just started |
`sceneGraphIDs` | Array‹bigint› | Vector of SceneGraphIDs that are associated with an ongoing session  |

**Returns:** *void*

___

###  onSharingStop

▸ **onSharingStop**(`sessionId`: bigint): *void*

Override this method to receive sharing stop callback

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sessionId` | bigint | Id associated with the sharing session that has just stopped  |

**Returns:** *void*

___

###  postNotification

▸ **postNotification**(`notification`: [Notification](_lumin_.notification.md)): *boolean*

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

The application will terminate on the next update loop when this is called.

**`priv`** none

**Returns:** *void*

___

###  requestPrivilege

▸ **requestPrivilege**(`privilegeId`: [PrivilegeId](../enums/_lumin_.privilegeid.md)): *void*

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

Makes a blocking request for a privilege (may require user interaction).

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`privilegeId` | [PrivilegeId](../enums/_lumin_.privilegeid.md) | The privilege ID to check |

**Returns:** *[PrivilegeResult](../enums/_lumin_.privilegeresult.md)*

Granted or Denied

___

###  requestWorldPlaneCast

▸ **requestWorldPlaneCast**(`center`: [number, number, number], `maxDistance`: number, `maxPlaneCount`: number, `flags`: [PlanecastFlags](../enums/_lumin_.planecastflags.md), `userValue`: bigint): *boolean*

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

###  setEventSleepTime

▸ **setEventSleepTime**(`a_fSleepTime`: number): *void*

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

###  stopTrackImage

▸ **stopTrackImage**(`imageName`: string): *boolean*

Stops tracking an image. If no images are being tracked, will disable tracking.

**`priv`** CameraCapture

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`imageName` | string | Name of the image. Should be the same as the name passed to one of the the trackImage functions. |

**Returns:** *boolean*

true if tracking the image was stopped

___

###  trackMovingImage

▸ **trackMovingImage**(`imageName`: string, `dimensions`: [number, number], `file`: string, `prism`: [Prism](_lumin_.prism.md)): *boolean*

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

Trigger a control vibration haptic

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`haptic` | [VibePattern](../enums/_lumin_.haptics.vibepattern.md) | the VibePattern to trigger |
`controlID?` | number | `default = 0`<br/> id of control device  |

**Returns:** *void*

▸ **triggerControlHaptic**(`haptic`: [LedPattern](../enums/_lumin_.haptics.ledpattern.md), `controlID?`: number): *void*

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

Override this method to do things on the Event Update Thread

**`priv`** none

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a_fDelta` | number | Time Delta since last frame |

**Returns:** *boolean*

true = continue

___

###  waitForTermination

▸ **waitForTermination**(): *void*

This call will block the caller thread until the app has finished running.
It must NOT be called from the client update thread or it will assert.

**`priv`** none

**Returns:** *void*

___

### `Static` CancelMainThreadRunnable

▸ **CancelMainThreadRunnable**(`callbackId`: [CallbackID](_lumin_.utils.callbackid.md)): *boolean*

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

Runs the given task on the main thread (with an optional delay).

**Parameters:**

▪ **a_runnable**: *function*

the callback to run on the main thread.

▸ (): *void*

**Returns:** *[CallbackID](_lumin_.utils.callbackid.md)*

a unique ID that can be used to cancel the runnable.

▸ **RunOnMainThread**(`a_runnable`: function, `delay`: number): *[CallbackID](_lumin_.utils.callbackid.md)*

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

Similar to RunOnMainThread() but synchronous. Will
block caller until client event loop will process callback
event. Except when invoked form client eventloop thread - in
that case a_runnable will be called immediately.

**Parameters:**

▪ **a_runnable**: *function*

▸ (): *void*

**Returns:** *void*

declare module 'lumin' {
  namespace resources {
  }

  /**
   * Base class for Lumin Runtime apps.
   */
  class BaseApp {
    constructor()

    /**
     * The application will terminate on the next update loop when this is called.
     *
     * @priv none
     */
    quit(): void

    /**
     * Returns the application's writable path.
     *
     * This folder is accessible to the application when the user has logged in once,
     * even if the device is locked and not in use.
     * An application that needs to write data when running in the background
     * (e.g. a music app) should use this path. The same application can continue
     * using this path when the device is unlocked afterwards.
     *
     * @note the path will have a trailing / appended to it
     *     e.g. /data/user/1/apps/com.magicleap.app/documents/C2/
     *
     * @priv none
     */
    getWritablePath(): string

    /**
     * Returns the application's writable path while unlocked.
     *
     * This folder is accessible to the application when the user has logged in and the
     * device is unlocked and being used.
     *
     * @note the path will have a trailing / appended to it
     *     e.g. /data/user/1/apps/com.magicleap.app/documents/C2/
     *
     * @priv none
     */
    getWritablePathWhenUnlocked(): string

    /**
     * Returns the application's path
     *
     * @note the path will have a trailing / appended to it
     *     e.g. /data/local/tmp/
     */
    getPackagePath(): string

    /**
     * Returns the application's path for temporary files
     *
     * @note the path will have a trailing / appended to it
     *     e.g. /data/local/tmp/
     *
     * @priv none
     */
    getTempPath(): string

    /**
     * Returns the package name for this application.
     *
     * @priv none
     */
    getPackageName(): string

    /**
     * Returns the name of the component this application instance belongs to.
     *
     * @priv none
     */
    getComponentName(): string

    /**
     * Returns the user-visible name for this application.
     *
     * @priv none
     */
    getVisibleName(): string

    /**
     * This call will block the caller thread until the app has finished running.
     * It must NOT be called from the client update thread or it will assert.
     *
     * @priv none
     */
    waitForTermination(): void

    /**
     * Returns if the app running is a Shareable app
     *
     * @priv none
     */
    isShareableApp(): boolean

    /**
     * Set the Event Sleep Time
     *
     * This is the amount of time the client should sleep before firing
     * the updateloop callback, if no other events have occured.
     *
     * @param a_fSleepTime - Time to sleep in seconds, or 0.0f to sleep
     *        indefinitely, until an event occurs.
     *
     * @priv none
     */
    setEventSleepTime(a_fSleepTime: number /* float */): void

    /**
     * Override this method to do one-time de-initialization before quitting.
     *
     * @priv none
     */
    deInit(): number /* int */

    /**
     * Override this method to receive sharing start callback
     *
     * @param sessionId Id associated with the sharing session that has just started
     * @param sceneGraphIDs Vector of SceneGraphIDs that are associated with an ongoing session
     */
    onSharingStart(sessionId: bigint /* uint64_t */, sceneGraphIDs: Array<bigint> /* std::vector<uint64_t> */): void

    /**
     * Override this method to receive sharing stop callback
     *
     * @param sessionId Id associated with the sharing session that has just stopped
     */
    onSharingStop(sessionId: bigint /* uint64_t */): void

    /**
     * Entry point for all application launch requests.
     *
     * This method will be called right after init() on first application launch.
     * It will also be called whenever an attempt is made to launch the application
     * again (from launcher menu, or to open a file or URI).
     *
     * @param initArg The initial application argument.
     */
    onAppStart(initArg: InitArg): void

    /**
     * The app should backup its data to disk and be prepared to be
     * killed if the system thinks it is necessary. It should also
     * stop drawing to the surface since it will not be rendered.
     *
     * @priv none
     */
    onAppPause(): void

    /**
     * The app can resume drawing to the surface and recover the
     * resources it stashed during onPause()
     *
     * @priv none
     */
    onAppResume(): void

    /**
     * The app should release resources that it is not actively using
     * to reduce the load on the system
     *
     * @priv none
     */
    onAppUnloadResources(): void

    /**
     * This indicates to the app that the device has transtioned to the active mode
     *
     * @priv none
     */
    onDeviceActive(): void

    /**
     * This indicates to the app that the device has transitioned to the reality mode
     *
     * @priv none
     */
    onDeviceReality(): void

    /**
     * This indicates to the app that the device has transitioned to the standby mode
     *
     * @priv none
     */
    onDeviceStandby(): void

    /**
     * Override this method to do things on the Event Update Thread
     *
     * @param a_fDelta - Time Delta since last frame
     * @return true = continue
     *
     * @priv none
     */
    updateLoop(a_fDelta: number /* float */): boolean

    /**
     * Override this method to react to incoming events
     *
     * Note: This is triggered on the same thread as the clientUpdateThread
     *
     * @param a_pEvent - Server Events
     * @return true = Event has been consumed
     * @priv none
     */
    eventListener(a_pEvent: ServerEvent | null): boolean

    /**
     * Returns pointer to the Prism
     *
     * @param prismId the Id of the Prism
     * @return The prism
     *
     * @priv none
     */
    getPrism(prismId: bigint /* uint64_t */): Prism | null

    /**
     * Deletes the prism
     *
     * @param prism the Prism to delete
     *
     * @priv none
     */
    deletePrism(prism: Prism | null): void

    /**
     * Resizes the Prism
     *
     * @param a_prism - the prism to resize
     * @param a_size - the new size of the prism
     */
    resizePrism(a_prism: Prism | null, a_size: [number, number, number] | Float32Array /* glm::vec3 */): void

    /**
     * Sets the Prism Position
     *
     * @param a_prism - the prism
     * @param a_position - the new prism position
     */
    positionPrism(a_prism: Prism | null, a_position: [number, number, number] | Float32Array /* glm::vec3 */): void

    /**
     * Sets the Orientation of the Prism
     *
     * @param a_prism - the prism
     * @param a_orientation - the new prism orientation quaternion
     */
    orientPrism(a_prism: Prism | null, a_orientation: [number, number, number, number] | Float32Array /* glm::quat */): void

    /**
     * Sets the Prism Position relative to the camera
     *
     * @param a_prism - the prism
     * @param a_position - the new prism position, relative to the camera
     */
    positionPrismRelativeToCamera(a_prism: Prism | null, a_position: [number, number, number] | Float32Array /* glm::vec3 */): void

    /**
     * Sets the Orientation of the Prism relative to the Camera
     *
     * @param a_prism - the prism
     * @param a_orientation - the new prism orientation quaternion
     */
    orientPrismRelativeToCamera(a_prism: Prism | null, a_orientation: [number, number, number, number] | Float32Array /* glm::quat */): void

    /**
     * Returns the position of a volume in world space
     *
     * @param a_prism - the prism
     * @return - the prism position
     */
    getPrismPosition(a_prism: Prism | null): [number, number, number] /* glm::vec3 */

    /**
     *  Returns the rotation of a volume in world space
     *
     * @param a_prism - the prism
     * @return - the prism orientation quaternion
     */
    getPrismRotation(a_prism: Prism | null): [number, number, number, number] /* glm::quat */

    /**
     * Returns the transform of a volume in world space
     *
     * @param a_prism the prism
     * @return The transform of the Prism in world space
     */
    getPrismTransform(a_prism: Prism | null): [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] /* glm::mat4 */

    /**
     * Get the Headpose position in world space.
     *
     * @return the world space headpose position.
     */
    getHeadposeWorldPosition(): [number, number, number] /* glm::vec3 */

    /**
     * Get the Headpose forward vector in world space.
     *
     * @return the world space headpose forward vector.
     */
    getHeadposeWorldForwardVector(): [number, number, number] /* glm::vec3 */

    /**
     * Get the Headpose up vector in world space.
     *
     * @return the world space headpose up vector.
     */
    getHeadposeWorldUpVector(): [number, number, number] /* glm::vec3 */

    /**
     * Get the underlying system's confidence in the headpose values
     *
     * @return a value between 0.0 and 1.0 indicating the confidence
     */
    getHeadposeConfidence(): number /* float */

    /**
     * Get the current headpose mode (6-DOF or 3-DOF)
     *
     * @return the current headpose mode
     */
    getHeadposeMode(): headtracking.Mode

    /**
     * Get the current headpose error (if any)
     *
     * @return the current headpose error
     */
    getHeadposeError(): headtracking.Error

    /**
     * Returns the height (y-value) of the floor, if known, in world coordinates.
     *
     * @return Returned floor height.
     *
     * @priv WorldReconstruction
     */
    getFloorHeight(): number | null /* std::optional<float> */

    /**
     * Checks if a privilege is currently granted.
     *
     * @param privilegeId The privilege ID to check
     * @return Granted or Denied
     *
     * @priv none
     */
    checkPrivilege(privilegeId: PrivilegeId): PrivilegeResult

    /**
     * Asynchronously requests a privilege.
     *
     * The result will be returned on the main thread as a PrivilegeEvent.
     *
     * @param privilegeId The privilege ID to request
     *
     * @priv none
     */
    requestPrivilege(privilegeId: PrivilegeId): void

    /**
     * Makes a blocking request for a privilege (may require user interaction).
     *
     * @param privilegeId The privilege ID to check
     * @return Granted or Denied
     *
     * @priv none
     */
    requestPrivilegeBlocking(privilegeId: PrivilegeId): PrivilegeResult

    /**
     * Post the given notification
     * @param notification the notification to post
     * @return true if the notification was posted successfully, false otherwise
     *
     * @priv NormalNotificationsUsage
     */
    postNotification(notification: Notification | null): boolean

    /**
     * Dismiss the given notification
     * @param notification the notification to dismiss
     * @return true if the notification was dismissed, false otherwise
     *
     * @priv NormalNotificationsUsage
     */
    dismissNotification(notification: Notification): boolean

    /**
     * Dismss all notifications from this application
     *
     * @priv NormalNotificationsUsage
     */
    dismissAllNotifications(): void

    /**
     * Trigger a control vibration haptic
     *
     * @param haptic the VibePattern to trigger
     * @param controlID `default = INVALID_CONTROL_ID`<br/> the ID of the control to use (0 will be the primary control)
     * @param deviceID `default = INVALID_DEVICE_ID`<br/> the internal ID of the device to use (note, this takes precedence over the control ID)
     *
     * @priv none
     */
    triggerControlHaptic(haptic: haptics.VibePattern, controlID?: number /* int32_t */, deviceID?: number /* int32_t */): void

    /**
     * Trigger a control LED haptic
     *
     * @param haptic the LedPattern to trigger
     * @param controlID `default = INVALID_CONTROL_ID`<br/> the ID of the control to use (0 will be the primary control)
     * @param deviceID `default = INVALID_DEVICE_ID`<br/> the internal ID of the device to use (note, this takes precedence over the control ID)
     *
     * @priv none
     */
    triggerControlHaptic(haptic: haptics.LedPattern, controlID?: number /* int32_t */, deviceID?: number /* int32_t */): void

    /**
     * Trigger a list of custom control haptics
     *
     * @param haptics the combined list of haptics
     * @param controlID `default = INVALID_CONTROL_ID`<br/> the ID of the control to use (0 will be the primary control)
     * @param deviceID `default = INVALID_DEVICE_ID`<br/> the internal ID of the device to use (note, this takes precedence over the control ID)
     *
     * @priv none
     */
    triggerControlCustomHaptics(haptics: Array<HapticInfo> /* std::vector<HapticInfo> */, controlID?: number /* int32_t */, deviceID?: number /* int32_t */): void

    /**
     * Trigger a custom control haptic
     *
     * @param haptic and individual custom haptic
     * @param controlID `default = INVALID_CONTROL_ID`<br/> the ID of the control to use (0 will be the primary control)
     * @param deviceID `default = INVALID_DEVICE_ID`<br/> the internal ID of the device to use (note, this takes precedence over the control ID)
     *
     * @priv none
     */
    triggerControlCustomHaptic(haptic: HapticInfo, controlID?: number /* int32_t */, deviceID?: number /* int32_t */): void

    /**
     * Request vibration haptics on the body of the control device
     * @param pattern the vibration pattern to use
     * @param duration `default = 100`<br/> the duration to play the pattern over (ms)
     * @param intensity `default = haptics.VibeIntensity.MEDIUM`<br/> the intensity of the vibration
     * @param controlID `default = INVALID_CONTROL_ID`<br/> the ID of the control to use (0 will be the primary control)
     * @param deviceID `default = INVALID_DEVICE_ID`<br/> the internal ID of the device to use (note, this takes precedence over the control ID)
     *
     * @priv none
     */
    triggerControlBodyHaptics(pattern: haptics.VibePattern, duration?: number /* int32_t */, intensity?: haptics.VibeIntensity, controlID?: number /* int32_t */, deviceID?: number /* int32_t */): void

    /**
     * Request light haptics on the LEDs of the control device
     * @param pattern the LED light pattern to use
     * @param duration `default = 100`<br/> the duration to play the pattern over (ms)
     * @param intensity `default = haptics.VibeIntensity.MEDIUM`<br/> the intensity of the haptic
     * @param controlID `default = INVALID_CONTROL_ID`<br/> the ID of the control to use (0 will be the primary control)
     * @param deviceID `default = INVALID_DEVICE_ID`<br/> the internal ID of the device to use (note, this takes precedence over the control ID)
     *
     * @priv none
     */
    triggerControlLEDHaptics(pattern: haptics.LedPattern, duration?: number /* int32_t */, intensity?: haptics.VibeIntensity, controlID?: number /* int32_t */, deviceID?: number /* int32_t */): void

    /**
     * Get an object clients can use to find preloaded resources.
     *
     * @priv none
     */
    getPreloadedResources(): resources.Preloaded

    /**
     * Do a raycast in a prism and return the results.
     *
     * @param a_prism Prism to do the ray in.
     * @param a_rayStart Ray starting position, in volume coordinates.
     * @param a_rayEnd Ray end position, in volume coordinates.
     * @return Hit data.
     */
    raycastNodes(a_prism: Prism | null, a_rayStart: [number, number, number] | Float32Array /* glm::vec3 */, a_rayEnd: [number, number, number] | Float32Array /* glm::vec3 */): RayCastResultLight | null /* std::optional<RayCastResultLight> */

    /**
    * Performs a single ray cast against the world around you. Results are returned as a WorldRayCastEventData
    * to the app's eventListener function.
    *
    * @param rayStart The start point of the ray, in world space.
    * @param rayDir Direction to shoot the ray
    * @param userValue Custom data that you wish to record with this request
    * @param confidenceThreshold `default = 0.199`<br/> Confidence level (between 0 and 1) that must be reached for the
    *        raycast to be considered valid
    * @return true if the request was sent, false on error
    *
    * @priv WorldReconstruction
    */
    requestWorldRayCast(rayStart: [number, number, number] | Float32Array /* glm::vec3 */, rayDir: [number, number, number] | Float32Array /* glm::vec3 */, userValue: bigint /* uint64_t */, confidenceThreshold?: number /* float */): boolean

    /**
     * Performs an area ray cast against the world around you. Results are returned as a WorldRayCastEventData
     * to the app's eventListener function.
     *
     * @param rayStart The start point of the ray, in world space.
     * @param rayDir Direction to shoot the ray
     * @param width Number of horizontal rays
     * @param height Number of vertical rays
     * @param horizFovDeg Horizontal field-of-view, in degrees
     * @param userValue Custom data that you wish to record with this request
     * @param confidenceThreshold `default = 0.199`<br/> Confidence level (between 0 and 1) that must be reached for the
     *        raycast to be considered valid
     * @return true if the request was sent, false on error
     *
     * @priv WorldReconstruction
     */
    requestWorldRayCast(rayStart: [number, number, number] | Float32Array /* glm::vec3 */, rayDir: [number, number, number] | Float32Array /* glm::vec3 */, width: number /* uint32_t */, height: number /* uint32_t */, horizFovDeg: number /* float */, userValue: bigint /* uint64_t */, confidenceThreshold?: number /* float */): boolean

    /**
     * Sends a request to the server to search for planes in the environment that match given
     * criteria. A WorldPlaneCastEventData instance will be sent to the app's eventListener
     * function when the data is ready.
     *
     * @param center Position in world-space that is the center of the search space.
     * @param maxDistance Max distance from the center to search for planes.
     * @param maxPlaneCount Maximum number of planes to return.
     * @param flags Flags to determine what kind of planes to look for.
     * @param userValue Value that will be sent back in the WorldPlaneCastEventData instance.
     * @return true if the request was sent, false on error
     *
     * @priv WorldReconstruction
     */
    requestWorldPlaneCast(center: [number, number, number] | Float32Array /* glm::vec3 */, maxDistance: number /* float */, maxPlaneCount: number /* uint32_t */, flags: PlanecastFlags, userValue: bigint /* uint64_t */): boolean

    /**
     * Returns if the image tracking system is ready to be used. Do not call any image tracking functions
     * until this function returns true.
     *
     * Currently image tracking is only available for immersive apps.
     *
     * @return true if we can start tracking images.
     * @priv CameraCapture
     */
    isImageTrackingReady(): boolean

    /**
     * Starts a request to track an non-moving image, based on an image file. Static images are easier
     * to track than moving ones, so use this method if possible. This will enable tracking if it is
     * not already enabled.
     *
     * Currently image tracking is only available for immersive apps.
     *
     * @param imageName Unique name for the image.
     * @param dimensions Approximate size of the image, in meters. This is used to help identify the image.
     * @param file File name of the image to track. Name is relative to the app's location.
     * @param prism Where to send the image position info
     * @return true if tracking was started, false if there was an error.
     * @priv CameraCapture
     */
    trackStaticImage(imageName: string, dimensions: [number, number] | Float32Array /* glm::vec2 */, file: string, prism: Prism | null): boolean

    /**
     * Starts a request to track a moving image, based on an image file. Moving images are harder to
     * track than non-moving ones; use this function only if sure the image is moving. This will enable
     * tracking if it is not already enabled.
     *
     * Currently image tracking is only available for immersive apps.
     *
     * @param imageName Unique name for the image.
     * @param dimensions Approximate size of the image, in meters. This is used to help identify the image.
     * @param file File name of the image to track. Name is relative to the app's location.
     * @param prism Where to send the image position info
     * @return true if tracking was started, false if there was an error.
     * @priv CameraCapture
     */
    trackMovingImage(imageName: string, dimensions: [number, number] | Float32Array /* glm::vec2 */, file: string, prism: Prism | null): boolean

    /**
     * Stops tracking an image. If no images are being tracked, will disable tracking.
     *
     * Currently image tracking is only available for immersive apps.
     *
     * @param imageName Name of the image. Should be the same as the name passed to one of the the
     * trackImage functions.
     * @return true if tracking the image was stopped
     * @priv CameraCapture
     */
    stopTrackImage(imageName: string): boolean

    /**
     * Gets the LocaleHelper that's set to the current system locale
     * @return the current system LocaleHelper
     */
    getCurrentLocaleHelper(): utils.LocaleHelper | null

    /**
     * Lock the LocaleHelper to the given locale. It will no longer change when the system locale is changed
     * @param localeCode the lock that the LocaleHelper will be locked to
     */
    lockCurrentLocaleHelperToLocale(localeCode: string): void

    /**
     * Unlock the locale of the LocaleHelper. This will set the LocaleHelper back to the current system locale
     */
    unlockCurrentLocaleHelper(): void

    /**
     * Get the system locale code
     */
    getLocaleCode(): string | null /* std::optional<std::string> */

    /**
     * Register a callback for when the system locale is changed
     * @param callbackFunction the function to be called (the new locale code is given as a parameter)
     * @return the internal ID of the callback, can be used to unregister the callback
     */
    registerOnLocaleChangedCallback(callbackFunction: ((arg0: string) => void) | null /* std::function<void(std::string)> */): utils.CallbackID

    /**
     * Unregister a callback for when the system locale is changed
     * @param callbackID the ID of the callback to unregister
     * @return true if succesfully unregistered, false otherwise
     */
    unregisterOnLocaleChangedCallback(callbackID: utils.CallbackID): boolean

    /**
     * Get the input state tracking system (used to maintain the list of active input devices and track their input)
     *
     * @return a pointer to the input state tracking system
     */
    getInput(): InputHelper | null

    /**
     * Get WiFi Enabled status.
     * return True if Wifi is enabled in settings, otherwise false.
     */
    isWiFiEnabled(): boolean

    /**
     * Get WiFi Connected status.
     * return True if there is a connection, otherwise false.
     */
    isWiFiConnected(): boolean

    /**
     * Get Internet Connection status.
     * return True if there is a connection, otherwise false.
     */
    isInternetConnected(): boolean

    /**
     * Maps the hand gesture to a NamedInputEventData.
     *
     * @param a_actionName The name of the NamedInputEventData.
     * @param a_handGesture Hand gesture type.
     * @param a_hold `default = false`<br/> Whether the event should be sent immediately (true), or send only if the
     *   gesture is held for 1.5 seconds (false).
     * @param a_once `default = true`<br/> Whether the event should be repeated (true), or send only once (false).
     * @param a_handIndex `default = 0xFFFFFFFF`<br/> Hand index that the event should be associated with
     *   (Left = 0, Right = 1, Both = 0xFFFFFFFF).
     * @return The Id that can be used to identify this event when received in the eventListener.
     */
    addNamedHandGestureAction(a_actionName: string, a_handGesture: input.GestureType, a_hold?: boolean, a_once?: boolean, a_handIndex?: number /* uint32_t */): number /* std::size_t */

    /**
     * Maps a Control button to a NamedInputEventData.
     *
     * @param a_actionName The name of the NamedInputEventData.
     * @param a_keyCode The button's key code
     * @param a_longPress `default = false`<br/> Whether the event should be emitted on long press (true) or short press (false)
     * @return The Id that can be used to identify this event when received in the eventListener
     */
    addNamedButtonAction(a_actionName: string, a_keyCode: input.KeyCodes, a_longPress?: boolean): number /* std::size_t */

    /**
     * Maps a Control gesture to a NamedInputEventData.
     *
     * @param a_actionName The name of the NamedInputEventData.
     * @param a_touchGesture Touch gesture type.
     * @param a_touchDirection `default = input.GestureDirection.UNKNOWN`<br/> Gesture's direction (GestureDirection::UNKNOWN for all).
     * @return The Id that can be used to identify this event when received in the eventListener
     */
    addNamedTouchAction(a_actionName: string, a_touchGesture: input.GestureType, a_touchDirection?: input.GestureDirection): number /* std::size_t */

    /**
     * Maps Control's 6DoF to a NamedInputEventData.
     *
     * @param a_actionName The name of the NamedInputEventData.
     * @return The Id that can be used to identify this event when received in the eventListener
     */
    addNamed6DOFPoseAction(a_actionName: string): number /* std::size_t */

    /**
     * Maps eye tracking events to a NamedInputEventData.
     *
     * @param a_actionName The name of the NamedInputEventData.
     * @return The Id that can be used to identify this event when received in the eventListener
     */
    addNamedEyeTrackingAction(a_actionName: string): number /* std::size_t */

    /**
     * Returns the nearest Persistent Coordinate Frame to a given world location.
     * NOTE: This function can be slow, use sparingly.
     *
     * @param worldLocation Position to get the PCF from.
     * @return The PCF. If it is INVALID_PCF, it is likely the world mesh hasn't been built up enough
     * to create the PCF data, or the app doesn't have the PcfRead privilege set.
     *
     * @priv PcfRead
     */
    getNearestPCF(worldLocation: [number, number, number] | Float32Array /* glm::vec3 */): PCFId

    /**
     * Returns the number of Persistent Coordinate Frames the system knows about.
     *
     * @return The PCF count.
     *
     * @priv PcfRead
     */
    getPCFCount(): number /* uint32_t */

    /**
     * Returns a list of the Persistent Coordinate Frames the system knows about. It is suggested that
     * this function should only be called when getPCFCount() > 0 and has changed since the previous call.
     *
     * @return PCF list.
     *
     * @priv PcfRead
     */
    getPCFs(): Array<PCFId> /* std::vector<PCFId> */

    /**
     * Gets data associated with a given PCF.
     *
     * @param pcf The PCF to fetch data for.
     * @return PCF data. Check the state value of the returned data to verify that it is good.
     *
     * @priv PcfRead
     */
    getPCFData(pcf: PCFId): PCFData

    /**
     * Sets the callback function to be called when audio output device is changed.
     * Note: The callback will run on main thread.
     *       No need to use runOnMainThread() inside the callback.
     *
     * @param callback std::function to be called as callback.
     *        See AudioOutputDeviceChangedCallback.
     */
    setAudioOutputDeviceChangeCallback(callback: ((arg0: AudioOutputDevice) => void) | null /* std::function<void(AudioOutputDevice)> */): void

    /**
     * Register this client to receive invites
     * @return true if successfully registered, false otherwise
     */
    registerForConnectionsInviteEvents(): boolean

    /**
     * Deregister this client from receving invites
     * @return true if successfully deregistered, false otherwise
     */
    deregisterForConnectionsInviteEvents(): boolean
  }
}

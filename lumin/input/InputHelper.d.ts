declare module 'lumin' {
  class InputHelper {
    constructor()

    /**
     * Returns The DeviceID for the primary control device.
     * @return The DeviceID of the primary Control, if no devices then be invalid returned.
     */
    getPrimaryDeviceId(): number /* int32_t */

    /**
     * Returns The DeviceInfo for the primary control device.
     * @return a DeviceInfo instance, if no devices then DeviceInfo.deviceID will be invalid
     */
    getPrimaryDevice(): InputHelper.DeviceInfo

    /**
     * Returns Checks if the DeviceId provided is the Primary DeviceId.
     * @param deviceID the ID of the device to check.
     * @return true if the deviceId is that of the Primary device otherwise false is returned.
     */
    isPrimaryDevice(deviceID: number /* int32_t */): boolean

    /**
     * Returns infomation about the devices that have been used with this client
     * @return a vector containing the active device information
     */
    getActiveDevices(): Array<InputHelper.DeviceInfo> /* std::vector<DeviceInfo> */

    /**
     * Returns the type of a requested device
     * @param deviceID the ID of the device
     * @return the type of the device
     */
    getDeviceType(deviceID: number /* int32_t */): input.EventSource | null /* std::optional<input::EventSource> */

    /**
     * Returns whether a given key has been pressed on ANY active device this frame (Note that
     * a button is considered "pressed" only on the first frame that it is held, use
     * isButtonDown to test if the button is down over multiple frames)
     * @param keycode the code of the key to test
     * @return true if there is a device has pressed the given key this frame, false otherwise
     */
    isButtonPressed(keycode: input.KeyCodes): boolean

    /**
     * Returns whether a given key has been pressed on the given device this frame (Note that
     * a button is considered "pressed" only on the first frame that it is held, use
     * isButtonDown to test if the button is down over multiple frames)
     * @param keycode the code of the key to test
     * @param deviceID the device to test the keycode on
     * @return true if the given device has the given key pressed this frame, false otherwise
     */
    isButtonPressed(keycode: input.KeyCodes, deviceID: number /* int32_t */): boolean

    /**
     * Returns a list of all the devices that a given key has been pressed on this frame (Note
     * that a button is considered "pressed" only on the first frame that it is held, use
     * isButtonDown to test if the button is down over multiple frames)
     * @param keycode the code of the key to test
     * @return the list of devices that have the given key pressed
     */
    getDevicesButtonPressed(keycode: input.KeyCodes): Array<number> | null /* std::optional<std::vector<int32_t>> */

    /**
     * Returns a map of all keys pressed this frame, mapped by their devices
     * @return a map of devices to lists of keys that are currently pressed
     *        on that device
     */
    getPressedButtons(): { [key:number]: Array<input.KeyCodes> } | null /* std::optional<std::unordered_map<int32_t, std::vector<input::KeyCodes>>> */

    /**
     * Returns whether a given key is currently down on ANY active device (Note that a button
     * is considered "down" at any point while it is held)
     * @param keycode the code of the key to test
     * @return true if there is a device has the given key down, false otherwise
     */
    isButtonDown(keycode: input.KeyCodes): boolean

    /**
     * Returns whether a given key is currently down the given device (Note that a button
     * is considered "down" at any point while it is held)
     * @param keycode the code of the key to test
     * @param deviceID the device to test the keycode on
     * @return true if the given device has the given key down, false otherwise
     */
    isButtonDown(keycode: input.KeyCodes, deviceID: number /* int32_t */): boolean

    /**
     * Returns a list of all the devices that a given key is down on (Note that a button is
     * considered "down" at any point while it is held)
     * @param keycode the code of the key to test
     * @return the list of devices that have the given key down
     */
    getDevicesButtonDown(keycode: input.KeyCodes): Array<number> | null /* std::optional<std::vector<int32_t>> */

    /**
     * Returns a map of all keys down this frame, mapped by their devices
     * @return a map of devices to lists of keys that are currently down on
     *        that device
     */
    getDownButtons(): { [key:number]: Array<input.KeyCodes> } | null /* std::optional<std::unordered_map<int32_t, std::vector<input::KeyCodes>>> */

    /**
     * Returns whether a given key has been released on ANY active device this frame
     * @param keycode the code of the key to test
     * @return true if there is a device has released the given key this frame, false otherwise
     */
    isButtonReleased(keycode: input.KeyCodes): boolean

    /**
     * Returns whether a given key has been released on the given device this frame
     * @param keycode the code of the key to test
     * @param deviceID the device to test the keycode on
     * @return true if the given deivce has released the given key this frame, false otherwise
     */
    isButtonReleased(keycode: input.KeyCodes, deviceID: number /* int32_t */): boolean

    /**
      * Returns a list of all the devices that a given key has been released on this frame
      * @param keycode the code of the key to test
      * @return the list of devices that have the given key released
      */
    getDevicesButtonReleased(keycode: input.KeyCodes): Array<number> | null /* std::optional<std::vector<int32_t>> */

    /**
     * Returns a map of all keys released this frame, mapped by their devices
     * @return a map of devices to lists of keys released on that device
     */
    getReleasedButtons(): { [key:number]: Array<input.KeyCodes> } | null /* std::optional<std::unordered_map<int32_t, std::vector<input::KeyCodes>>> */

    /**
     * Checks if the given device's orientation has been updated this frame
     * @param deviceID the ID of the device to test
     * @return true if the given device has had its orientation updated this frame, false
     *         otherwise
     */
    isDeviceOrientationUpdated(deviceID: number /* int32_t */): boolean

    /**
     * Returns the orientation of the given device (in world coordinates)
     * @param deviceID the ID of the device to retreive the orientation for
     * @return the given device's orientation (in world coordinates)
     */
    getDeviceOrientation(deviceID: number /* int32_t */): [number, number, number, number] | null /* std::optional<glm::quat> */

    /**
     * Checks if the given device's position has been updated this frame
     * @param deviceID the ID of the device to test
     * @return true if the given device has had its position updated this frame, false
     *         otherwise
     */
    isDevicePositionUpdated(deviceID: number /* int32_t */): boolean

    /**
     * Returns the position of the given device (in world coordinates)
     * @param deviceID the ID of the device to retreive the position for
     * @return the given device's position (in world coordinates)
     */
    getDevicePosition(deviceID: number /* int32_t */): [number, number, number] | null /* std::optional<glm::vec3> */

    /**
     * Returns whether ANY active device's touchpad is currently being used
     * @return true if there is a device whose touchpad is being used, false otherwise
     */
    isTouchPadDown(): boolean

    /**
     * Returns whether the given device's touchpad is currently being used
     * @return true if the given device exists and has its touchpad being used
     */
    isTouchPadDown(deviceID: number /* int32_t */): boolean

    /**
     * Returns the touched touchpad position(s) for a given device
     * @param deviceID the ID of the device to retreive the touchpad position for
     * @return the returned touchpad information
     */
    getTouchPadPosition(deviceID: number /* int32_t */): InputHelper.TouchPadState | null /* std::optional<InputHelper::TouchPadState> */

    /**
     * Returns the touchpad touch information for all active devices that have touchpad information
     * @return touchPadInfo the list of device touchpad information
     * return true if at least one device with touchpad information exists, false otherwise
     */
    getTouchPadPosition(): Array<InputHelper.TouchPadState> | null /* std::optional<std::vector<InputHelper::TouchPadState>> */

    /**
     * Returns whether ANY device is receiving (or has received) a given gesture this frame
     * @param gesture the gesture to test
     * @return true if the given gesture has been received (or is being received) this frame by
     *         any device, false otherwise
     */
    isGesturePerformed(gesture: input.GestureType): boolean

    /**
     * Returns whether ANY device is receiving (or has received) a given gesture this frame and
     * also returns a list of those devices
     * @param gesture the gesture to test
     * @return a list of devices currently performing the given gesture
     *         any device, false otherwise
     */
    getDevicesGesturePerformed(gesture: input.GestureType): Array<number> | null /* std::optional<std::vector<int32_t>> */

    /**
     * Returns a list of all gestures performed (or being performed) on a given device this frame
     * @param deviceID the ID of the device for which to retreive the gesture data
     * @return the list of gestures performed (or being performed) this frame
     *         device this frame, false otherwise
     */
    getPerformedGesture(deviceID: number /* int32_t */): Array<input.GestureType> | null /* std::optional<std::vector<input::GestureType>> */

    /**
     * Returns a map of the gestures performed by all the active devices, mapped by their device IDs
     * @return the map of devices and gestures
     */
    getAllPerformedGestures(): { [key:number]: Array<input.GestureType> } | null /* std::optional<std::unordered_map<int32_t, std::vector<input::GestureType>>> */

    /**
     * Returns whether new data for a gesture has been received this frame
     * @param deviceID the device to check the gesture data for
     * @param gesture the gesture to check the gesture data for
     * @return true if this device exists, has data for the given gesture and that data has been
     *         updated this frame, false otherwise
     */
    isGestureDataUpdated(deviceID: number /* int32_t */, gesture: input.GestureType): boolean

    /**
     * Returns the gesture data associated with a given gesture for a given device
     * @param deviceID the device to retreive the gesture data for
     * @param gesture the gesture to retrieve the gesture data for
     * @return a list of the gesture data that has been received since it was last
     *        updated
     */
    getGestureData(deviceID: number /* int32_t */, gesture: input.GestureType): Array<InputHelper.GestureState> | null /* std::optional<std::vector<InputHelper::GestureState>> */

    /**
     * Returns whether or not new eye tracking information has been received this frame
     * @return true if new eye tracking information has been received this frame, false otherwise
     */
    isEyeTrackingUpdated(): boolean

    /**
     * Returns the data associated with the left eye (in world coordinates)
     * @return data structure of the left eye information if it exists
     *         - position the position of the left eye
     *         - rotation the rotation of the left eye
     *         - confidence the confidence in the values given by the eye tracking system
     *           (ranges from 0.0 to 1.0f)
     *         - isBlinking true if the user has their left eye closed, false otherwise
     *         null otherwise
     */
    getLeftEyeInformation(): InputHelper.EyeInfo | null /* std::optional<EyeInfo> */

    /**
     * Returns the data associated with the right eye (in world coordinates)
     * @return data structure of the right eye information if it exists
     *         - position the position of the right eye
     *         - rotation the rotation of the right eye
     *         - confidence the confidence in the values given by the eye tracking system
     *           (ranges from 0.0 to 1.0f)
     *         - isBlinking true if the user has their right eye closed, false otherwise
     *         null otherwise
     */
    getRightEyeInformation(): InputHelper.EyeInfo | null /* std::optional<EyeInfo> */

    /**
     * Returns the data associated with the fixation of the eyes (in world coordinates)
     * @return the position of the user's fixation and the confidence in the values given
     *         by the eye tracking system(ranges from 0.0 to 1.0f), null if eye fixation
               data doesn't exist
     */
    getEyeFixationPosition(): InputHelper.EyeFixationPosition | null /* std::optional<EyeFixationPosition> */

    /**
     * Returns data about potential eye stress
     * @return data structure of eye stress if it exists
     *         - isFixationDepthUncomfortable whether or not the users current fixation point
     *           is too close to them
     *         - hasDepthViolationOccured whether or not a depth violation has occurred (this
     *           happens when a user's fixation point remains too close for too long)
     *         - remainingAtUncomfortableDistance the number of seconds remaining for a user
     *           to have their fixation depth at an unacceptable distance before a depth
     *           violation occurs
     *         null thoerwise
     */
    getEyeStressInformation(): InputHelper.EyeStressInfo | null /* std::optional<EyeStressInfo> */

    /**
     * Returns whether or not new left hand tracking information has been received this frame
     * @return true if new left hand tracking information has been received this frame, false
     *         otherwise
     */
    isLeftHandTrackingUpdated(): boolean

    /**
     * Returns the left hand tracking information
     * @return the left hand tracking information
     */
    getLeftHandState(): InputHelper.HandState | null /* std::optional<InputHelper::HandState> */

    /**
     * Returns whether or not new right hand tracking information has been received this frame
     * @return true if new right hand tracking information has been received this frame, false
     *         otherwise
     */
    isRightHandTrackingUpdated(): boolean

    /**
     * Returns the right hand tracking information
     * @return the right hand tracking information
     */
    getRightHandState(): InputHelper.HandState | null /* std::optional<InputHelper::HandState> */
  }
  namespace InputHelper {

    /** Structure describing the available device information */
    class DeviceInfo {
      constructor()
      deviceID: number /* int32_t */;
      deviceType: input.EventSource;
    }

    /** Structure describing the state of a touchpad */
    class TouchPadState {
      constructor()
      deviceID: number /* int32_t */;
      touchPositions: Array<[number, number]> /* std::vector<glm::vec2> */;
      touchForces: Array<number> /* std::vector<float> */;
    }

    /** Structure describing the state of a hand gesture */
    class HandState {
      constructor()
      gesture: input.GestureType;
      position: [number, number, number] /* glm::vec3 */;
      gestureConfidence: number /* float */;
      keypointPositions: Array<[number, number, number]> /* std::vector<glm::vec3> */;
    }

    /** Structure describing the state of a device gesture */
    class GestureState {
      constructor()
      deviceID: number /* int32_t */;
      gesture: input.GestureType;
      direction: input.GestureDirection;
      speed: number /* float */;
      distance: number /* float */;
      fingerGap: number /* float */;
      radius: number /* float */;
      angle: number /* float */;
      position: [number, number] /* glm::vec2 */;
      force: number /* float */;
      isFinal: boolean;
    }

    /** Structure describing the eye information */
    class EyeInfo {
      constructor()
      position: [number, number, number] /* glm::vec3 */;
      rotation: [number, number, number, number] /* glm::quat */;
      confidence: number /* float */;
      isBlinking: boolean;
    }

    /** Structure describing the eye fixation position */
    class EyeFixationPosition {
      constructor()
      position: [number, number, number] /* glm::vec3 */;
      confidence: number /* float */;
    }

    /** Structure describing the eye stress information */
    class EyeStressInfo {
      constructor()
      isFixationDepthUncomfortable: boolean;
      hasDepthViolationOccured: boolean;
      remainingAtUncomfortableDistance: number /* float */;
    }
  }
}

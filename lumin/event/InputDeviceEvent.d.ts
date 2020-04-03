declare module 'lumin' {

  /**
   * InputDeviceEvent - Input device event provides information when a device or it's data changes.
   */
  class InputDeviceEvent extends ServerEvent {
    constructor()

    /**
     * @return The device Id
     */
    getDeviceId(): number /* int32_t */

    /**
     * @return The device source
     */
    getSource(): input.EventSource

    /**
     * @return true if the device is connected, otherwise false
     */
    isConnected(): boolean

    /**
     * @return DeviceEventType which describes the type of event that occured.
     */
    getEventType(): input.DeviceEventType
  }
}

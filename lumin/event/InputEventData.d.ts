declare module 'lumin' {

  /**
   * InputEventData - abstract base input event
   */
  class InputEventData extends ServerEvent {
    constructor()

    /**
     * @return The event source
     *
     * @priv none
     */
    getEventSource(): input.EventSource

    /**
     * @return The event type
     *
     * @priv none
     */
    getEventType(): input.EventType

    /**
     * @return The device Id
     *
     * @priv none
     */
    getDeviceId(): number /* int32_t */
  }
}

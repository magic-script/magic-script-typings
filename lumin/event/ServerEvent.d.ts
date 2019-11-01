declare module 'lumin' {

  /**
   * Base class for all events sent from the Lumin Runtime Server
   * to client application Prisms.
   */
  class ServerEvent {
    constructor()

    /**
     * Returns the Prism ID of the target Prism.
     *
     * @return the Prism ID of the target Prism.
     * @priv none
     */
    getPrismId(): bigint /* uint64_t */

    /**
     * Returns true if this is an input event (a subclass of InputEventData).
     *
     * @return true if this is an input event
     * @priv none
     */
    isInputEventType(): boolean

    /**
     * Returns a string representation of this event for debug purposes.
     *
     * @priv none
     */
    toString(): string
  }
}

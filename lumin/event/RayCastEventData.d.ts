declare module 'lumin' {

  /**
   * RayCastEventData - Raycast events
   */
  class RayCastEventData extends ServerEvent {
    constructor()

    /**
     * Get the pointer to the RaycastResult
     *
     * @priv none
     */
    getHitData(): RaycastResult

    /**
     * Get the Raycast event type
     *
     * @priv none
     */
    getRayCastEvent(): RayCastEventType
  };
}

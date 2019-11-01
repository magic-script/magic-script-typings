declare module 'lumin' {

  /**
   * WorldRayCastEventData - World Raycast events
   */
  class WorldRayCastEventData extends ServerEvent {
    constructor()

    /**
     * Get the WorldRaycastResult
     *
     * @priv none
     */
    getResult(): WorldRayCastResult
  }
}

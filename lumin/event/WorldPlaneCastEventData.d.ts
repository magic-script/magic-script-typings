declare module 'lumin' {

  /**
   * WorldPlaneCastEventData - World Planecast events
   */
  class WorldPlaneCastEventData extends ServerEvent {
    constructor()

    /**
     * Get the WorldPlaneCastResult
     *
     * @priv none
     */
    getResult(): WorldPlaneCastResult
  }
}

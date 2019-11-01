declare module 'lumin' {

  /**
   * An event sent whenever a prism is selected or deselected.
   *
   * The deselection event for the currently selected prism will always
   * be sent before the selection event for a newly selected prism.
   *
   * Only the currently selected prism receives input events.
   */
  class SelectionEventData extends ServerEvent {
    constructor()

    /**
     * Returns the type of event (volume selected or deselected)
     *
     * @return the type of selection event
     * @priv none
     */
    getSelectionEventType(): SelectionEventType

    /**
     * Returns the ID of the prism that has been selected or deselected.
     *
     * @return the ID of the affected prism
     * @priv none
     */
    getAffectedPrismId(): bigint /* uint64_t */
  }
}

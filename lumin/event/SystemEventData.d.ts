declare module 'lumin' {

  /**
   * SystemEventData - System events
   */
  class SystemEventData extends ServerEvent {
    constructor()
    getSystemEvent(): SystemEventType
  }
}

declare module 'lumin' {

  /**
   * WifiStatusEvent - This event relays information about the Wifi connection status.
   */
  class WifiStatusEvent extends ServerEvent {
    constructor()

    /**
     * @return true if Wifi is enabled, otherwise false
     */
    isEnabled(): boolean

    /**
     * @return true if there is a Wifi connection, otherwise false
     */
    isConnected(): boolean

    /**
     * @return true if there is an internet connection, otherwise false
     */
    isInternetConnected(): boolean
  }
}

declare module 'lumin' {
  class InputDeviceEvent extends ServerEvent {
    constructor()
    getDeviceId(): number
    getSource(): input.EventSource
    isConnected(): boolean
    getEventType(): input.DeviceEventType
  };
}

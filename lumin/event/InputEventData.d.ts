declare module 'lumin' {
  class InputEventData extends ServerEvent {
    constructor() {}
    getEventSource(): input.EventSource
    getEventType(): input.EventType
    getDeviceId(): number
  };
}

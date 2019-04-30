declare module 'lumin' {
  class SystemEventData extends ServerEvent {
    constructor() {}
    getSystemEvent(): SystemEventType
  };
}

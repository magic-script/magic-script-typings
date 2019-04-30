declare module 'lumin' {
  class ResourceEvent extends ServerEvent {
    constructor() {}
    getResourceId(): number
    getResult(): resources.LoadStatus
  };
}

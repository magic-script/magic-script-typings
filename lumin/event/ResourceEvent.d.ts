declare module 'lumin' {
  class ResourceEvent extends ServerEvent {
    constructor()
    getResourceId(): BigInt /* uint64_t */
    getResult(): resources.LoadStatus
  };
}

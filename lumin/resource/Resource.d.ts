declare module 'lumin' {
  namespace resources {
  }
  class Resource {
    constructor()
    getResourceId(): BigInt /* uint64_t */
    isResourceValid(): boolean
    getFileName(): string
    getBasePath(): string
    getLoadStatus(): resources.LoadStatus
  };
}

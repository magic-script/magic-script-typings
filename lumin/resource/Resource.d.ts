declare module 'lumin' {
  namespace resources {
  }
  class Resource {
    constructor() {}
    getResourceId(): number
    isResourceValid(): boolean
    getFileName(): string
    getBasePath(): string
    getLoadStatus(): resources.LoadStatus
  };
}

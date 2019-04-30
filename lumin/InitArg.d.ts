declare module 'lumin' {
  class InitArg {
    constructor() {}
    getUri(): string
    getFileInfoCount(): number
    getFileInfo(index: number): FileInfo
  };
}

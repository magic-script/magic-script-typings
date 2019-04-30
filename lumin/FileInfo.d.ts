declare module 'lumin' {
  class FileInfo {
    constructor()
    getFileDescriptor(): number
    getFileName(): string
    getMimeType(): string
    setFileDescriptor(fd: number): void
    setFileName(filename: string): void
    setMimeType(mimeType: string): void
  };
}

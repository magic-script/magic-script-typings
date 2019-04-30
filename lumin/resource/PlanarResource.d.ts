declare module 'lumin' {
  class PlanarResource extends Resource {
    constructor() {}
    refresh(): void
    getHeight(): number
    getWidth(): number
    getEGLContext(): void
    getEGLSurface(): void
  };
}

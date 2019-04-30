declare module 'lumin' {
  namespace multipack {
  }
  class TexturePackResource extends Resource {
    constructor() {}
    getDescriptor(): multipack.Descriptor
    getSubTextureCount(): number
  };
}

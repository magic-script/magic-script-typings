declare module 'lumin' {
  namespace multipack {
  }

  /**
   * Texture Pack Resource - Loads and Holds a Texture resource which contains sub textures
   */
  class TexturePackResource extends Resource {
    constructor()

    /** Get the descriptor data used to initialize this resource. */
    getDescriptor(): multipack.Descriptor
    getSubTextureCount(): number /* uint32_t */
  }
}

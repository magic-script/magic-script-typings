declare module 'lumin' {
  namespace AssetPacker {

    /**
     * Image-3D Data - Holds the pixel data for rendering.
     * Pixel data to be filled up by fetching the raw memory (getData) and transferred to Texture-3D Resource.
     */
    class Image3d {
      constructor()

      /**
       * Returns pixel format used for this image data.
       *
       * @return pixel format.
       */
      getFormat(): utils.Format

      /**
       * Returns width of this image data in pixels.
       *
       * @return image width.
       */
      getWidth(): number

      /**
       * Returns height of this image data in pixels.
       *
       * @return image height.
       */
      getHeight(): number

      /**
       * Returns depth of this image data in pixels.
       *
       * @return image depth.
       */
      getDepth(): number
    };
  }
}

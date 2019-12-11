declare module 'lumin' {
  namespace AssetPacker {

    /**
     * Image-2D Data - Holds the pixel data for rendering.
     * Pixel data to be filled up by fetching the raw memory (getData) and transferred to Texture Resource.
     */
    class Image2d {
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
      getWidth(): number /* uint32_t */

      /**
       * Returns height of this image data in pixels.
       *
       * @return image height.
       */
      getHeight(): number /* uint32_t */
    }
  }
}

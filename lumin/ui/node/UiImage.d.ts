declare module 'lumin' {
  namespace ui {

    /**
     * UiImage - This node represents an image that can be aligned and
     * send out standard UI events (onHoverEnter, onHoverExit, etc.)
     */
    class UiImage extends ui.UiNode {

      /**
       * Creates a UiImage element with System icon.
       *
       * @param prism - The prism to create this image for.
       * @param type - The SystemIcon type for the image.
       * @param height - The height of the image.
       * @return The new UiImage node.
       *
       * @priv none
       */
      static Create(prism: Prism | null, type: ui.SystemIcon, height: number /* float */): ui.UiImage | null

      /**
       * Creates a UiImage element with default settings.
       *
       * @param prism - The prism to create this image for.
       * @param resID - The resource ID to render for the image.
       * @param width - The width of the image.
       * @param height - The height of the image.
       * @param useFrame `default = false`<br/> - Specifies whether the image should have a frame.
       * @return The new UiImage node.
       *
       * @priv none
       */
      static Create(prism: Prism | null, resID: bigint /* uint64_t */, width: number /* float */, height: number /* float */, useFrame?: boolean): ui.UiImage | null

      /**
       * Creates a UiImage element with default settings.
       *
       * @param prism - The prism to create this image for.
       * @param pngFile - The path to the PNG to render for the image.
       * @param width - The width of the image.
       * @param height - The height of the image.
       * @param a_absolutePath `default = false`<br/> Flag that pngFile is an absolute path name, instead of a relative path.
       * @param useFrame `default = false`<br/> Specifies whether the image should have a frame.
       * @return The new UiImage node.
       *
       * @priv none
       */
      static Create(prism: Prism | null, pngFile: string, width: number /* float */, height: number /* float */, a_absolutePath?: boolean, useFrame?: boolean): ui.UiImage | null

      /**
       * Gets the texture resource for the system icon.
       *
       * @param prism the prism.
       * @param icon the SystemIcon to get the ResourceIdType for.
       *
       * @return the resource ID.
       *
       * @priv none
       */
      static GetSystemIconResource(prism: Prism | null, icon: ui.SystemIcon): bigint /* uint64_t */

      /**
       * Sets the render resource used for the image.
       *
       * @param resID The resource ID.
       *
       * @priv none
       */
      setRenderResource(resID: bigint /* uint64_t */): void

      /**
       * Gets the render resource for the image.
       *
       * @return the resource ID.
       *
       * @priv none
       */
      getRenderResource(): bigint /* uint64_t */

      /**
       * Sets the model resource used for the image frame.
       * Note: Frame models are expected to be sized at 1 meter high
       * and 1 meter wide and to be centered at the origin.
       *
       * @param resID The resource ID.
       *
       * @priv none
       */
      setImageFrameResource(resID: bigint /* uint64_t */): void

      /**
       * Gets the model resource for the image frame.
       *
       * @return the resource ID.
       *
       * @priv none
       */
      getImageFrameResource(): bigint /* uint64_t */

      /**
       * Sets the texture coordinates used by the UiImage.
       *
       * The texture coordinates must be a list of 4 coordinates
       * representing the UV coordinates of the 4 corners.
       *
       * @param texCoords The coordinates.
       *
       * @priv none
       */
      setTexCoords(texCoords: Array<[number, number] | Float32Array> /* std::vector<glm::vec2> */): void

      /**
       * Returns the texture coordinates used by the UiImage.
       *
       * @return The coordinates.
       *
       * @priv none
       */
      getTexCoords(): Array<[number, number]> /* std::vector<glm::vec2> */

      /**
       * Sets a color to modulate the image with.
       *
       * @param color The color.
       *
       * @priv none
       */
      setColor(color: [number, number, number, number] | Float32Array /* glm::vec4 */): void

      /**
       * Gets the image color.
       *
       * @return The color.
       *
       * @priv none
       */
      getColor(): [number, number, number, number] /* glm::vec4 */

      /**
       * Sets the opacity state of the image.
       *
       * @param isOpaque The new opacity state of the image.
       *
       * @priv none
       */
      setIsOpaque(isOpaque: boolean): void

      /**
       * Sets if the image needs to be rendered on UI Layer.
       *
       * @param isUI The new UiLayerRender state of the image.
       *
       * @priv none
       */
      setIsUI(isUI: boolean): void

      /**
       * Sets the image size.
       *
       * @param size The image size.
       *
       * @priv none
       */
      setSize(size: [number, number] | Float32Array /* glm::vec2 */): void

      /**
       * Gets the image size.
       *
       * @return the image size.
       *
       * @priv none
       */
      getSize(): [number, number] /* glm::vec2 */
    }
  }
}

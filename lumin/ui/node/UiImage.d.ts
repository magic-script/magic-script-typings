declare module 'lumin' {
  namespace ui {
    class UiImage extends UiNode {
      static Create(prism: Prism, type: ui.SystemIcon, height: number): ui.UiImage
      static Create(prism: Prism, resID: number, width: number, height: number, useFrame: boolean = 0 /* 0 is not the actual default value */): ui.UiImage
      static Create(prism: Prism, pngFile: string, width: number, height: number, a_absolutePath: boolean = 0 /* 0 is not the actual default value */, useFrame: boolean = 0 /* 0 is not the actual default value */): ui.UiImage
      static GetSystemIconResource(prism: Prism, icon: ui.SystemIcon): number
      setRenderResource(resID: number): void
      getRenderResource(): number
      setImageFrameResource(resID: number): void
      getImageFrameResource(): number
      setTexCoords(texCoords: Array<[number, number] /* glm::vec2 */> /* std::vector */): void
      getTexCoords(): Array<[number, number] /* glm::vec2 */> /* std::vector */
      setColor(color: [number, number, number, number] /* glm::vec4 */): void
      getColor(): [number, number, number, number] /* glm::vec4 */
      setIsOpaque(isOpaque: boolean): void
      setIsUI(isUI: boolean): void
      setSize(size: [number, number] /* glm::vec2 */): void
      getSize(): [number, number] /* glm::vec2 */
    };
  }
}

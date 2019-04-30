declare module 'lumin' {
  namespace ui {
    enum LoadingSpinnerType {
      kParticlePackage,
      k2dSpriteAnimation,
    }
    class UiLoadingSpinner extends UiNode {
      static Create(prism: Prism, type: ui.LoadingSpinnerType, resID: number = 0 /* 0 is not the actual default value */, resPath: string = 0 /* 0 is not the actual default value */, height: number = 0 /* 0 is not the actual default value */): ui.UiLoadingSpinner
      static CreateDeterminate(volume: Prism, height: number = 0 /* 0 is not the actual default value */): ui.UiLoadingSpinner
      getParticleEffect(): ParticleNode
      getSpriteNode(): SpriteNode
      setSize(size: [number, number] /* glm::vec2 */): void
      getSize(): [number, number] /* glm::vec2 */
      isDeterminate(): boolean
      setValue(value: number): void
      getValue(): number
    };
  }
}

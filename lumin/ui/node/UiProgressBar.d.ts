declare module 'lumin' {
  namespace ui {
    class UiProgressBar extends UiNode {
      static Create(prism: Prism, width: number, height: number = 0 /* 0 is not the actual default value */): ui.UiProgressBar
      onProgressBarChangedSub(callback: callable): utils.CallbackID
      onProgressBarChangedUnsub(callbackID: utils.CallbackID): boolean
      setMin(min: number): void
      setMax(max: number): void
      getMin(): number
      getMax(): number
      setMinMax(min: number, max: number): void
      getMinMax(): [number, number] /* glm::vec2 */
      setValue(value: number): void
      getValue(): number
      getSize(): [number, number] /* glm::vec2 */
      setProgressColor(startColor: [number, number, number, number] /* glm::vec4 */, endColor: [number, number, number, number] /* glm::vec4 */): void
      getProgressColor(): Array<[number, number, number, number] /* glm::vec4 */> /* std::vector */
    };
  }
}

declare module 'lumin' {
  namespace ui {
    class EclipseSliderParams {
      type: ui.EclipseSliderType;
      iconPath1: string;
      absoluteIconPath1: boolean;
      iconPath2: string;
      absoluteIconPath2: boolean;
      labelText1: string;
      labelText2: string;
      iconScale: number;
      height: number;
      width: number;
      iconType1: ui.SystemIcon;
      iconType2: ui.SystemIcon;
      constructor(a_type: ui.EclipseSliderType)
      constructor(a_type: ui.EclipseSliderType, a_pathOrText: string, a_height: number = 0 /* 0 is not the actual default value */, a_width: number = 0 /* 0 is not the actual default value */)
      constructor(a_type: ui.EclipseSliderType, a_pathOrText1: string, a_pathOrText2: string, a_height: number = 0 /* 0 is not the actual default value */, a_width: number = 0 /* 0 is not the actual default value */)
      constructor(a_type: ui.EclipseSliderType, a_iconPath1: string, a_iconPath2: string, a_labelText1: string, a_labelText2: string, a_height: number = 0 /* 0 is not the actual default value */, a_width: number = 0 /* 0 is not the actual default value */)
      constructor(a_type: ui.EclipseSliderType, a_iconPath1: string, a_iconPath2: string, a_labelText1: string, a_labelText2: string, a_height: number, a_width: number, a_iconType1: ui.SystemIcon)
      constructor(a_type: ui.EclipseSliderType, a_iconPath1: string, a_iconPath2: string, a_labelText1: string, a_labelText2: string, a_height: number, a_width: number, a_iconType1: ui.SystemIcon, a_iconType2: ui.SystemIcon)
      constructor(a_type: ui.EclipseSliderType, a_iconType1: ui.SystemIcon, a_height: number = 0 /* 0 is not the actual default value */, a_width: number = 0 /* 0 is not the actual default value */)
      constructor(a_type: ui.EclipseSliderType, a_iconType1: ui.SystemIcon, a_labelText1: string, a_height: number = 0 /* 0 is not the actual default value */, a_width: number = 0 /* 0 is not the actual default value */)
    };
    class UiSlider extends UiNode {
      static Create(prism: Prism, width: number, height: number = 0 /* 0 is not the actual default value */): ui.UiSlider
      static CreateEclipseSlider(prism: Prism, sliderParams: ui.EclipseSliderParams): ui.UiSlider
      onSliderChangedSub(callback: callable): utils.CallbackID
      onSliderChangedUnsub(callbackID: utils.CallbackID): boolean
      setMin(min: number): void
      setMax(max: number): void
      getMin(): number
      getMax(): number
      setMinMax(min: number, max: number): void
      getMinMax(): [number, number] /* glm::vec2 */
      setValue(value: number): void
      getValue(): number
      setSliderModel(pNode: Node, offset: [number, number, number] /* glm::vec3 */ = 0 /* 0 is not the actual default value */): void
      getSliderModel(): Node
      detachSliderModel(): Node
      getSize(): [number, number] /* glm::vec2 */
      getUiImageIcon(): ui.UiImage
      getUiTextLabel(): ui.UiText
    };
  }
}

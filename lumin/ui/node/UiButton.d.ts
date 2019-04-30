declare module 'lumin' {
  namespace ui {
    class EclipseButtonParams {
      type: ui.EclipseButtonType;
      iconPath: string;
      absoluteIconPath: boolean;
      iconScale: number;
      labelText: string;
      labelSide: ui.Side;
      labelDisplayMode: ui.LabelDisplayMode;
      outlineButton: boolean;
      height: number;
      width: number;
      iconType: ui.SystemIcon;
      constructor(a_type: ui.EclipseButtonType)
      constructor(a_type: ui.EclipseButtonType, a_pathOrText: string, a_height: number = 0 /* 0 is not the actual default value */)
      constructor(a_type: ui.EclipseButtonType, a_iconPath: string, a_labelText: string, a_height: number = 0 /* 0 is not the actual default value */)
      constructor(a_type: ui.EclipseButtonType, a_iconPath: string, a_labelText: string, a_labelSide: ui.Side, a_height: number = 0 /* 0 is not the actual default value */)
      constructor(a_type: ui.EclipseButtonType, a_iconPath: string, a_labelText: string, a_labelSide: ui.Side, a_height: number, iconType: ui.SystemIcon)
      constructor(a_type: ui.EclipseButtonType, a_iconType: ui.SystemIcon, a_labelText: string, a_labelSide: ui.Side, a_height: number = 0 /* 0 is not the actual default value */)
      constructor(a_type: ui.EclipseButtonType, a_iconType: ui.SystemIcon, a_height: number = 0 /* 0 is not the actual default value */)
    };
    class UiButton extends UiNode {
      static Create(prism: Prism, labelText: string, width: number = 0 /* 0 is not the actual default value */, height: number = 0 /* 0 is not the actual default value */, roundness: number = 0 /* 0 is not the actual default value */): ui.UiButton
      static CreateEclipseButton(prism: Prism, buttonParams: ui.EclipseButtonParams): ui.UiButton
      setButtonModel(pNode: Node, offset: [number, number, number] /* glm::vec3 */ = 0 /* 0 is not the actual default value */): void
      getButtonModel(): Node
      detachButtonModel(): Node
      setText(text: string): void
      getText(): string
      setTextColor(rgba: [number, number, number, number] /* glm::vec4 */): void
      getTextColor(): [number, number, number, number] /* glm::vec4 */
      setIconColor(rgba: [number, number, number, number] /* glm::vec4 */): void
      getIconColor(): [number, number, number, number] /* glm::vec4 */
      setTextSize(size: number): void
      getTextSize(): number
      setIconSize(size: [number, number] /* glm::vec2 */): void
      getIconSize(): [number, number] /* glm::vec2 */
      getUiTextLabel(): ui.UiText
      getUiImageIcon(): ui.UiImage
    };
  }
}

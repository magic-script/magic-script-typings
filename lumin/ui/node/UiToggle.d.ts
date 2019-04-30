declare module 'lumin' {
  namespace ui {
    enum ToggleType {
      kDefault,
      kRadio,
      kCheckbox,
    }
    enum EclipseToggleType {
      kIcon,
      kSwitchWithIcon,
      kSwitchWithLabel,
    }
    class EclipseToggleParams {
      type: ui.EclipseToggleType;
      iconPath: string;
      absoluteIconPath: boolean;
      labelText: string;
      labelDisplayMode: ui.LabelDisplayMode;
      labelSide: ui.Side;
      statusText1: string;
      statusText2: string;
      iconScale: number;
      showBackground: boolean;
      height: number;
      iconType: ui.SystemIcon;
      iconTypeOffState: ui.SystemIcon;
      constructor(a_type: ui.EclipseToggleType, a_iconPath: string, a_labelText: string = 0 /* 0 is not the actual default value */, a_statusText1: string = 0 /* 0 is not the actual default value */, a_statusText2: string = 0 /* 0 is not the actual default value */, a_height: number = 0 /* 0 is not the actual default value */)
      constructor(a_type: ui.EclipseToggleType, a_iconPath: string, a_labelText: string, a_statusText1: string, a_statusText2: string, a_height: number, a_iconType: ui.SystemIcon)
      constructor(a_type: ui.EclipseToggleType, a_iconPath: string, a_labelText: string, a_statusText1: string, a_statusText2: string, a_height: number, a_iconType: ui.SystemIcon, a_iconTypeOffState: ui.SystemIcon)
      constructor(a_type: ui.EclipseToggleType, a_iconType: ui.SystemIcon, a_labelText: string = 0 /* 0 is not the actual default value */, a_statusText1: string = 0 /* 0 is not the actual default value */, a_statusText2: string = 0 /* 0 is not the actual default value */, a_height: number = 0 /* 0 is not the actual default value */)
      constructor(a_type: ui.EclipseToggleType, a_iconType: ui.SystemIcon, a_iconTypeOffState: ui.SystemIcon, a_labelText: string = 0 /* 0 is not the actual default value */, a_statusText1: string = 0 /* 0 is not the actual default value */, a_statusText2: string = 0 /* 0 is not the actual default value */, a_height: number = 0 /* 0 is not the actual default value */)
    };
    class UiToggle extends UiNode {
      static Create(prism: Prism, labelText: string, height: number = 0 /* 0 is not the actual default value */): ui.UiToggle
      static Create(prism: Prism, labelText: string, toggleType: ui.ToggleType, height: number = 0 /* 0 is not the actual default value */): ui.UiToggle
      static CreateEclipseToggle(prism: Prism, toggleParams: ui.EclipseToggleParams): ui.UiToggle
      onToggleChangedSub(callback: callable): utils.CallbackID
      onToggleChangedUnsub(callbackID: utils.CallbackID): boolean
      setOn(state: boolean): void
      getOn(): boolean
      setToggleModel(pNode: Node, offset: [number, number, number] /* glm::vec3 */ = 0 /* 0 is not the actual default value */): void
      getToggleModel(): Node
      detachToggleModel(): Node
      setText(text: string): void
      getText(): string
      setTextColor(rgba: [number, number, number, number] /* glm::vec4 */): void
      getTextColor(): [number, number, number, number] /* glm::vec4 */
      setTextSize(size: number): void
      getTextSize(): number
      getUiTextLabel(): ui.UiText
    };
  }
}

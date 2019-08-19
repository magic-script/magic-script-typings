declare module 'lumin' {
  namespace ui {
    class DropDownListItem {
      label: string;
      subItems: Array<ui.DropDownListItem> /* std::vector */;
      id: number;
      setSelected(selected: boolean): void
      getSelected(): boolean
      getLevel(): number
      getParent(): ui.DropDownListItem
      constructor(a_label: string, a_id: number = 0 /* 0 is not the actual default value */)
      constructor(a_label: string, a_subItems: Array<ui.DropDownListItem> /* std::vector */, a_id: number = 0 /* 0 is not the actual default value */)
    };
    class EclipseDropDownListParams {
      type: ui.EclipseDropDownListType;
      iconPath: string;
      absoluteIconPath: boolean;
      iconScale: number;
      labelText: string;
      l10nKey: string;
      l10nParams: Object;
      underline: boolean;
      height: number;
      width: number;
      iconType: ui.SystemIcon;
      constructor(a_type: ui.EclipseDropDownListType)
    };
    class UiDropDownList extends UiButton {
      static Create(prism: Prism, labelText: string): ui.UiDropDownList
      static CreateEclipseDropDownList(prism: Prism, dropDownListParams: ui.EclipseDropDownListParams): ui.UiDropDownList
      onHoverItemSub(callback: callable): utils.CallbackID
      onHoverItemUnsub(callbackID: utils.CallbackID): boolean
      onSelectionChangedSub(callback: callable): utils.CallbackID
      onSelectionChangedUnsub(callbackID: utils.CallbackID): boolean
      onListVisibilityChangedSub(callback: callable): utils.CallbackID
      onListVisibilityChangedUnsub(callbackID: utils.CallbackID): boolean
      setList(list: Array<ui.DropDownListItem> /* std::vector */): void
      getList(): Array<ui.DropDownListItem> /* std::vector */
      showList(visible: boolean): void
      setMultiSelectMode(multiSelect: boolean): void
      getMultiSelectMode(): boolean
      getSelectedItems(): Array<ui.DropDownListItem> /* std::vector */
      setListFont(fontResourceId: BigInt /* uint64_t */): void
      getListFont(): BigInt /* uint64_t */
      setListTextSize(size: number): void
      getListTextSize(): number
      setListMaxHeight(maxHeight: number): void
      getListMaxHeight(): number
      setMaxCharacterLimit(charLimit: number): void
      getMaxCharacterLimit(): number
      clearSelected(): void
      setSelected(id: number, selected: boolean): void
    };
  }
}

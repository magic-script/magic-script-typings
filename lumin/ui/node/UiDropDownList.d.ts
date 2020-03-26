declare module 'lumin' {
  namespace ui {

    /** Structure containing information about each item in a drop-down list. */
    class DropDownListItem {

      /**
       * UTF-8 encoded label for the item.
       */
      label: string;

      /**
       * Potential list of sub-items (for multi-level) for this item.
       */
      subItems: Array<ui.DropDownListItem> /* std::vector<DropDownListItem> */;

      /**
       * An optional, custom defined, identifier to associate with each item.
       */
      id: number /* uint32_t */;

      /**
       * Set the selected state of this item
       */
      setSelected(selected: boolean): void

      /**
       * Get whether the item is selected.
       */
      getSelected(): boolean

      /**
       * Get the zero-based level of the item in the multi-level list.
       */
      getLevel(): number /* unsigned int */

      /**
       * The parent list item this item belongs to, if any.
       */
      getParent(): ui.DropDownListItem | null

      /** Constructor with specified label and optional id (no sub-items) */
      constructor(a_label: string, a_id?: number /* uint32_t */)

      /** Constructor with specified label, list of sub-items, and optional id */
      constructor(a_label: string, a_subItems: Array<ui.DropDownListItem> /* std::vector<DropDownListItem> */, a_id?: number /* uint32_t */)
    }

    /** Dropdown parameters for creating Eclipse Dropdowns */
    class EclipseDropDownListParams {

      /**
       * Type of eclipse Dropdown.
       */
      type: ui.EclipseDropDownListType;

      /**
       * Button icon path used in kIconWithLabel
       */
      iconPath: string;

      /**
       * If the icon path is an absolute path (default false).
       */
      absoluteIconPath: boolean;

      /**
       * Icon scale (default 1.0f).
       */
      iconScale: number /* float */;

      /**
       * Button label text used in kIconWithLabel and kTextWithArrow
       */
      labelText: string;

      /**
       * The localization key for the element label, used in kIconWithLabel and kTextWithArrow.
       */
      l10nKey: string;

      /**
       * The optional localization parameters for the element label.
       */
      l10nParams: { [key:string]: utils.LocaleHelper.Param } /* std::unordered_map<std::string, utils::LocaleHelper::Param> */;

      /**
       * Whether the text has an underline (default false). Considered only for kTextWithArrow
       */
      underline: boolean;

      /**
       * Height of the eclipse Dropdown Button, (default 0 = default button height).
       */
      height: number /* float */;

      /**
       * Width of the eclipse Dropdown Button, (default 0 = auto calculated width).
       */
      width: number /* float */;

      /**
       * The type of SystemIcon to be used for the eclipse dropdown button
       */
      iconType: ui.SystemIcon;
      constructor(a_type: ui.EclipseDropDownListType)
    }

    /**
     * UiDropDownList - This node represents a multi-level, multi-selection capable
     *                  drop-down list.
     */
    class UiDropDownList extends ui.UiButton {

      /**
       * Creates a UiDropDownList element using default settings.
       *
       * @param prism - The prism to create this node in.
       * @param labelText - The UTF-8 encoded text to initially set the dropdownlist label to.
       * @return The new UiDropDownList node.
       *
       * @priv none
       */
      static Create(prism: Prism | null, labelText: string): ui.UiDropDownList | null

      /**
       * Creates an Eclipse dropDownList from UX specifications.
       *
       * @param prism - The prism to create this dropDownList for.
       * @param dropDownListParams - The EclipseDropDownListParams describing the Eclipse dropDownList to create.
       * @return The new UiDropDownList node.
       */
      static CreateEclipseDropDownList(prism: Prism | null, dropDownListParams: ui.EclipseDropDownListParams): ui.UiDropDownList | null

      /**
       * The on hover item Event.
       *
       * This event is dispatched when the cursor starts hovering over an item in the drop-down list.
       *
       * @priv none
       */
      onHoverItemSub(callback: ((arg0: ui.UiEventData, arg1: ui.DropDownListItem | null) => void) | null /* std::function<void(UiEventData,DropDownListItem*)> */): utils.CallbackID
      onHoverItemUnsub(callbackID: utils.CallbackID): boolean

      /**
       * The on selection changed Event.
       *
       * This event is dispatched when the selection in the drop-down list has changed.
       *
       * @priv none
       */
      onSelectionChangedSub(callback: ((arg0: ui.UiEventData, arg1: Array<ui.DropDownListItem | null>) => void) | null /* std::function<void(UiEventData,std::vector<DropDownListItem*>)> */): utils.CallbackID
      onSelectionChangedUnsub(callbackID: utils.CallbackID): boolean

      /**
       * The on list visibility changed Event.
       *
       * This event is dispatched when the visiblity of the drop-down list has changed.
       *
       * @priv none
       */
      onListVisibilityChangedSub(callback: ((arg0: ui.UiEventData, arg1: boolean) => void) | null /* std::function<void(UiEventData, bool)> */): utils.CallbackID
      onListVisibilityChangedUnsub(callbackID: utils.CallbackID): boolean

      /**
       * Sets the list of options for the drop-down list.
       *
       * @param list - the list of options.
       *
       * @priv none
       */
      setList(list: Array<ui.DropDownListItem> /* std::vector<DropDownListItem> */): void

      /**
       * Gets the list of options for the drop-down list.
       *
       * @return the list of options.
       *
       * @priv none
       */
      getList(): Array<ui.DropDownListItem> /* std::vector<DropDownListItem> */

      /**
       * Show the dropdownlist or not.
       *
       * @param visible - flag indicating if the dropdownlist should be visible.
       *
       * @priv none
       */
      showList(visible: boolean): void

      /**
       * Sets the multi-select mode of the drop-down list.
       *
       * @param multiSelect - flag indicating if the drop-down list is multi-select capable or not.
       *
       * @priv none
       */
      setMultiSelectMode(multiSelect: boolean): void

      /**
       * Gets the multi-select mode of the drop-down list.
       *
       * @priv none
       */
      getMultiSelectMode(): boolean

      /**
       * Gets the currently selected item list.
       *
       * @priv none
       */
      getSelectedItems(): Array<ui.DropDownListItem | null> /* std::vector<DropDownListItem*> */

      /**
       * Sets the font for the list text.
       *
       * If no font set, the list will use the same font used in the drop-down list
       * menu button itself.  If no text present in the menu button, the default font will
       * be used.
       *
       * @param fontResourceId The resource id.
       *
       * @priv none
       */
      setListFont(fontResourceId: bigint /* uint64_t */): void

      /**
       * Gets the font for the list text.
       *
       * @return the list font resource ID.
       *
       * @priv none
       */
      getListFont(): bigint /* uint64_t */

      /**
       * Sets the size of the list text.
       *
       * If no size set, the list will use the same text size used in the drop-down list
       * menu button itself.  If no text present in the menu button, the default text size will
       * be used.
       *
       * @param size - the text size
       *
       * @priv none
       */
      setListTextSize(size: number /* float */): void

      /**
       * Gets the size of the list text.
       *
       * @return the list text size.
       *
       * @priv none
       */
      getListTextSize(): number /* float */

      /**
       * Sets the max height of a dropdown list.
       *
       * The default value (0) indicates there is no max and the list will grow as long as
       * it needs to.  Setting a value greater than zero will set the max height such that
       * if a list is larger than the max height, the list content will scroll.
       *
       * @param maxHeight The max height of a list.
       *
       * @priv none
       */
      setListMaxHeight(maxHeight: number /* float */): void

      /**
       * Gets the max height of lists.
       *
       * @return the list max height.
       *
       * @priv none
       */
      getListMaxHeight(): number /* float */

      /**
       * Sets the max amount of characters to be used per list item label before adding '...'.
       *
       * The default charLimit is 0, which means there is no limit and the
       * labels will scale to the largest item.
       *
       * @param charLimit - the max amount characters before adding '...'.
       *
       * @priv none
       */
      setMaxCharacterLimit(charLimit: number /* unsigned int */): void

      /**
       * Gets the max amount of characters to be used per list item label.
       * 0 is default, which means there is no limit.
       *
       * @return the max characters
       *
       * @priv none
       */
      getMaxCharacterLimit(): number /* unsigned int */

      /**
       * Unselects all selected items in the list and sublists.
       *
       * @priv none
       */
      clearSelected(): void

      /**
       * Set the selected state of a DropDownListItem. This uses the id set for a particular
       * DropDownListItem, which should be unique. If not unique, the first item with
       * that id will be set. State will be updated upon closing and reopening the list,
       * if the list is visible.
       *
       *
       * @param id - the id assigned to the DropDownListItem
       * @param selected - true if this item should be selected
       */
      setSelected(id: number /* unsigned int */, selected: boolean): void
    }
  }
}

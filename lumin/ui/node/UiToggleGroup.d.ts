declare module 'lumin' {
  namespace ui {

    /**
     * UiToggleGroup - This node represents a group of standard, clickable toggles.
     */
    class UiToggleGroup extends ui.UiNode {

      /**
       * Creates a UiToggleGroup element using default settings.
       *
       * @param prism - The prism to create the toggle group for.
       * @param allowMultipleOn `default = false`<br/> - The default (false) does not allow multiple toggles ON.
       * @param allowAllOff `default = false`<br/> - The default (false) does not allow all toggles OFF.
       * @return The new UiToggleGroup node.
       *
       * @priv none
       */
      static Create(prism: Prism | null, allowMultipleOn?: boolean, allowAllOff?: boolean): ui.UiToggleGroup | null

      /**
       * Returns toggles switched ON in the toggle group.
       *
       * @return A vector of toggles containing the results.
       *
       * @priv none
       */
      getTogglesOn(): Array<ui.UiToggle | null> /* std::vector<UiToggle*> */

      /**
       * Returns toggles switched OFF in the toggle group.
       *
       * @return A vector of toggles containing the results.
       *
       * @priv none
       */
      getTogglesOff(): Array<ui.UiToggle | null> /* std::vector<UiToggle*> */

      /**
       * Returns whether any of the toggles are ON.
       *
       * @return True if any of the toggles are ON.
       *
       * @priv none
       */
      getAnyTogglesOn(): boolean

      /**
       * Switch all toggles OFF regardless of whether all toggles are allowed
       * to be switched off or not.
       *
       * @priv none
       */
      setAllTogglesOff(): void

      /**
       * Flags that whether multiple toggles are allowed to be switched ON
       * in the toggle group.
       *
       * @param enable Flag that multiple toggles can be switched ON.
       *
       * @priv none
       */
      setAllowMultipleTogglesOn(enable: boolean): void

      /**
       * Returns the flag that whether multiple toggles are allowed to be switched ON
       * in the toggle group.
       *
       * @return True if multiple toggles can be switched ON.
       *
       * @priv none
       */
      getAllowMultipleTogglesOn(): boolean

      /**
       * Flags that whether all toggles are allowed to be switched OFF
       * in the toggle group.
       *
       * @param enable Flag that all toggles can be switched OFF.
       *
       * @priv none
       */
      setAllowAllTogglesOff(enable: boolean): void

      /**
       * Returns the flag that whether all toggles are allowed to be switched OFF
       * in the toggle group.
       *
       * @return True if all toggles can be switched OFF.
       *
       * @priv none
       */
      getAllowAllTogglesOff(): boolean
    }
  }
}

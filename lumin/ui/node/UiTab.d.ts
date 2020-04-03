declare module 'lumin' {
  namespace ui {

    /**
     * UiTab - This node represents a clickable text tab.
     */
    class UiTab extends ui.UiNode {

      /**
       * Creates a UiTab element using default settings.
       *
       * @param prism - The prism to create this button for.
       * @param labelText - The UTF-8 encoded text to initially set the UiTab label to.
       * @return The new UiTab node.
       *
       * @priv none
       */
      static Create(prism: Prism | null, labelText: string): ui.UiTab | null

      /**
       * Creates an Eclipse Tab from UX specifications.
       *
       * @param prism The prism to create this node for.
       * @param text - The UTF-8 encoded text to initially set the Eclipse label to.
       * @param labelType - The EclipseLabelType
       *
       * @priv none
       */
      static CreateEclipseTab(prism: Prism | null, text: string, labelType: ui.EclipseLabelType): ui.UiTab | null

      /**
       * Sets the UTF-8 encoded tab text.
       *
       * @param text - Text to set for the tab.
       *
       * @priv none
       */
      setText(text: string): void

      /**
       * Gets the UTF-8 encoded tab text.
       *
       * @return The tab text.
       *
       * @priv none
       */
      getText(): string

      /**
       * Set the RGBA color of the tab text.
       *
       * @param rgba Text color.
       *
       * @priv none
       */
      setTextColor(rgba: [number, number, number, number] | Float32Array /* glm::vec4 */): void

      /**
       * Get the RGBA color of the tab text; the default is white; i.e., (1, 1, 1, 1).
       *
       * @return Text color.
       *
       * @priv none
       */
      getTextColor(): [number, number, number, number] /* glm::vec4 */

      /**
       * Sets the tab text label render size height in scene units.
       *
       * @param size - Size of text.
       *
       * @priv none
       */
      setTextSize(size: number /* float */): void

      /**
       * Gets the tab text label render size height in scene units.
       *
       * @return the text size.
       *
       * @priv none
       */
      getTextSize(): number /* float */

      /**
       * Gets the UiText label for this button if one exists
       * in the button hierarchy.
       *
       * @return a UiText pointer (can be null).
       *
       * @priv none
       */
      getUiTextLabel(): ui.UiText | null
    }
  }
}

declare module 'lumin' {
  namespace ui {

    /** Portal Icon Sizes */
    enum PortalIconSize {
      kExtraSmall,
      kSmall,
      kMedium,
      kLarge,
      kExtraLarge,
    }

    /**
     * UiPortalIcon - This node represents a portal icon for use in the Universe
     * icon grid launcer.
     */
    class UiPortalIcon extends ui.UiNode {

      /**
       * Creates a UiPortalIcon element using default settings.
       *
       * @param prism - The prism to create the icon for.
       * @param labelText - The UTF-8 encoded text to initially set the portal icon label to.
       * @param portalSize `default = PortalIconSize.kSmall`<br/> - One of the built-in sizes for the portal icon (defaults to Small)
       * @return The new UiPortalIcon node.
       *
       * @priv none
       */
      static Create(prism: Prism | null, labelText: string, portalSize?: ui.PortalIconSize): ui.UiPortalIcon | null

      /**
       * Sets the overall hover scale of the portal icon element.
       *
       * This value is provided as a multiplier, with 1 being normal
       * scale, 2 being scaled two times normal, etc.
       *
       * @param scale The overall hover scale multiplier.
       *
       * @priv none
       */
      setHoverScale(scale: number /* float */): void

      /**
       * Gets the overall hover scale multiplier of the portal icon element.
       *
       * @priv none
       */
      getHoverScale(): number /* float */

      /**
       * Sets the overall hover Z offset of the portal icon element.
       *
       * This value is provided in local space to the portal icon element
       * +Z axis.  Positive values will move towards the camera.
       *
       * @param offset The hover Z offset
       *
       * @priv none
       */
      setHoverZOffset(offset: number /* float */): void

      /**
       * Gets the overall hover Z offset of the portal icon element.
       *
       * @priv none
       */
      getHoverZOffset(): number /* float */

      /**
       * Sets the display mode for the protal icon label.  The default
       * value is kAlways, to always show the label.
       *
       * @param mode the LabelDisplayMode of the portal icon label.
       *
       * @priv none
       */
      setLabelDisplayMode(mode: ui.LabelDisplayMode): void

      /**
       * Gets the display mode for the portal icon label.
       *
       * @priv none
       */
      getLabelDisplayMode(): ui.LabelDisplayMode

      /**
       * Sets the Node hierarchy used as visual representation for the background of
       * the portal icon.
       *
       * If there is a current Node hierarchy for the background, this call will delete the
       * current hierarchy and replace with the new hierarchy.
       *
       * @param pNode - A pointer to the top of the Node hierarchy to use for visual representation.
       * @param offset `default = VEC3_ZERO`<br/> - An optional offset to position the Node within the UiPortalIcon (default is [0,0,0]).
       *
       * @priv none
       */
      setBackgroundModel(pNode: Node | null, offset?: [number, number, number] | Float32Array /* glm::vec3 */): void

      /**
       * Gets the Node hierarchy used as background visual representation for the portal icon.
       *
       * @return a pointer to the model node used.
       *
       * @priv none
       */
      getBackgroundModel(): Node | null

      /**
       * Detaches the Node hierarchy used as background visual representation for this portal icon.
       *
       * The returned Node hierarchy will be orphaned (no longer attached
       * to the scene graph) and must be handled by the caller.
       *
       * @priv none
       */
      detachBackgroundModel(): Node | null

      /**
       * Sets the Node hierarchy used as visual representation for the icon of
       * the portal icon.
       *
       * If there is a current Node hierarchy for the icon, this call will delete the
       * current hierarchy and replace with the new hierarchy.
       *
       * @param pNode - A pointer to the top of the Node hierarchy to use for visual representation.
       * @param offset `default = VEC3_ZERO`<br/> - An optional offset to position the Node within the UiPortalIcon (default is [0,0,0]).
       *
       * @priv none
       */
      setIconModel(pNode: ModelNode | null, offset?: [number, number, number] | Float32Array /* glm::vec3 */): void

      /**
       * Gets the Node hierarchy used as icon visual representation for the portal icon.
       *
       * @return a pointer to the model node used.
       *
       * @priv none
       */
      getIconModel(): ModelNode | null

      /**
       * Detaches the Node hierarchy used as icon visual representation for this portal icon.
       *
       * The returned Node hierarchy will be orphaned (no longer attached
       * to the scene graph) and must be handled by the caller.
       *
       * @priv none
       */
      detachIconModel(): ModelNode | null

      /**
       * Sets the icon hover position relative to portal circle.
       *
       * This value is specified in local space to the portal element
       * and gets scaled along with the rest of the portal elements
       * during hover scale animation.
       *
       * @param position - the icon hover position.
       *
       * @priv none
       */
      setIconHoverPosition(position: [number, number, number] | Float32Array /* glm::vec3 */): void

      /**
       * Gets the icon hover position.
       *
       * @return the icon hover position.
       *
       * @priv none
       */
      getIconHoverPosition(): [number, number, number] /* glm::vec3 */

      /**
       * Sets the icon idle animation name.
       *
       * @param animationName - the name of the animation.
       *
       * @priv none
       */
      setIconIdleAnimation(animationName: string): void

      /**
       * Gets the icon idle animation name.
       *
       * @return the animation name.
       *
       * @priv none
       */
      getIconIdleAnimation(): string

      /**
       * Sets the icon hover animation name.
       *
       * @param animationName - the name of the animation.
       *
       * @priv none
       */
      setIconHoverAnimation(animationName: string): void

      /**
       * Gets the icon hover animation name.
       *
       * @return the animation name.
       *
       * @priv none
       */
      getIconHoverAnimation(): string

      /**
       * Sets the icon activate animation name.
       *
       * @param animationName - the name of the animation.
       *
       * @priv none
       */
      setIconActivateAnimation(animationName: string): void

      /**
       * Gets the icon activate animation name.
       *
       * @return the animation name.
       *
       * @priv none
       */
      getIconActivateAnimation(): string

      /**
       * Sets the icon ContextMenu animation name.
       *
       * @param animationName - the name of the animation.
       *
       * @priv none
       */
      setIconContextMenuAnimation(animationName: string): void

      /**
       * Gets the icon ContextMenu animation name.
       *
       * @return the animation name.
       *
       * @priv none
       */
      getIconContextMenuAnimation(): string

      /**
       * Sets the UTF-8 encoded portal icon text.
       *
       * @param text - Text to set for the portal icon.
       *
       * @priv none
       */
      setText(text: string): void

      /**
       * Gets the UTF-8 encoded portal icon text.
       *
       * @return The portal icon text.
       *
       * @priv none
       */
      getText(): string

      /**
       * Sets the RGBA color of the portal icon text.
       *
       * @param rgba Text color.
       *
       * @priv none
       */
      setTextColor(rgba: [number, number, number, number] | Float32Array /* glm::vec4 */): void

      /**
       * Gets the RGBA color of the portal icon text; the default is white; i.e., (1, 1, 1, 1).
       *
       * @return Text color.
       *
       * @priv none
       */
      getTextColor(): [number, number, number, number] /* glm::vec4 */

      /**
       * Sets the portal icon text label render size height in scene units.
       *
       * @param size - Size of text.
       *
       * @priv none
       */
      setTextSize(size: number /* float */): void

      /**
       * Gets the portal icon text label render size height in scene units.
       *
       * @return the text size.
       *
       * @priv none
       */
      getTextSize(): number /* float */

      /**
       * Gets the UiText label for this portal icon.
       *
       * @return a UiText pointer (can be null).
       *
       * @priv none
       */
      getUiTextLabel(): ui.UiText | null
    }
  }
}

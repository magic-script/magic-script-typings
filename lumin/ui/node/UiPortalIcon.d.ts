declare module 'lumin' {
  namespace ui {
    enum PortalIconSize {
      kExtraSmall,
      kSmall,
      kMedium,
      kLarge,
      kExtraLarge,
    }
    class UiPortalIcon extends UiNode {
      static Create(prism: Prism, labelText: string, portalSize: ui.PortalIconSize = 0 /* 0 is not the actual default value */): ui.UiPortalIcon
      setHoverScale(scale: number): void
      getHoverScale(): number
      setHoverZOffset(offset: number): void
      getHoverZOffset(): number
      setLabelDisplayMode(mode: ui.LabelDisplayMode): void
      getLabelDisplayMode(): ui.LabelDisplayMode
      setBackgroundModel(pNode: Node, offset: [number, number, number] /* glm::vec3 */ = 0 /* 0 is not the actual default value */): void
      getBackgroundModel(): Node
      detachBackgroundModel(): Node
      setIconModel(pNode: ModelNode, offset: [number, number, number] /* glm::vec3 */ = 0 /* 0 is not the actual default value */): void
      getIconModel(): ModelNode
      detachIconModel(): ModelNode
      setIconHoverPosition(position: [number, number, number] /* glm::vec3 */): void
      getIconHoverPosition(): [number, number, number] /* glm::vec3 */
      setIconIdleAnimation(animationName: string): void
      getIconIdleAnimation(): string
      setIconHoverAnimation(animationName: string): void
      getIconHoverAnimation(): string
      setIconActivateAnimation(animationName: string): void
      getIconActivateAnimation(): string
      setIconContextMenuAnimation(animationName: string): void
      getIconContextMenuAnimation(): string
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

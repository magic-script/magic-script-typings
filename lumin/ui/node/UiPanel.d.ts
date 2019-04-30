declare module 'lumin' {
  namespace ui {
    class UiPanel extends UiGroup {
      static Create(prism: Prism): ui.UiPanel
      onPanelEnterSub(callback: callable): utils.CallbackID
      onPanelEnterUnsub(callbackID: utils.CallbackID): boolean
      onPanelExitSub(callback: callable): utils.CallbackID
      onPanelExitUnsub(callbackID: utils.CallbackID): boolean
      onCursorEdgeSub(callback: callable): utils.CallbackID
      onCursorEdgeUnsub(callbackID: utils.CallbackID): boolean
      onCursorOffEdgeSub(callback: callable): utils.CallbackID
      onCursorOffEdgeUnsub(callbackID: utils.CallbackID): boolean
      setPanelShape(shape: ui.BoundaryShape): void
      getPanelShape(): ui.BoundaryShape
      setCursorConstrained(constrained: boolean): void
      getCursorConstrained(): boolean
      setCursorVisible(visible: boolean): void
      getCursorVisible(): boolean
      setCursorTransitionType(type: ui.PanelCursorTransitionType): void
      getCursorTransitionType(): ui.PanelCursorTransitionType
      setCursorInitialPosition(position: [number, number, number] /* glm::vec3 */): void
      getCursorInitialPosition(): [number, number, number] /* glm::vec3 */
      setEdgeConstraint(side: ui.Side, constraintMagnitude: number, transitionPanel: ui.UiPanel): void
      setEdgeConstraint(side: ui.Side, constraintMagnitude: number): void
      getEdgeConstraint(side: ui.Side): number
      setEdgeConstraintLevel(side: ui.Side, level: ui.PanelEdgeConstraintLevel): void
      getEdgeConstraintLevel(side: ui.Side): ui.PanelEdgeConstraintLevel
      setEdgeTransition(side: ui.Side, transitionPanel: ui.UiPanel): void
      getEdgeTransition(side: ui.Side): ui.UiPanel
      getEscapeMagnitude(side: ui.Side): number
      getNormalizedEscapeMagnitude(side: ui.Side): number
      addExternalGravityWell(uiNode: ui.UiNode): void
      removeExternalGravityWell(uiNode: ui.UiNode): boolean
      isExternalGravityWell(uiNode: ui.UiNode): boolean
      clearExternalGravityWells(): void
    };
  }
}

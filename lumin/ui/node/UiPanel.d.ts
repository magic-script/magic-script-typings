declare module 'lumin' {
  namespace ui {

    /**
     * UiPanel - Represents an area to group elements and to confine cursor
     *           interactions within a shaped boundary.
     *
     * The boundary shape is a rounded rectangular area, from sharp corner to circular,
     * where the cursor can be restricted within or provide means to move between
     * different UiPanel areas.
     */
    class UiPanel extends ui.UiGroup {

      /**
       * Creates a new UiPanel.
       *
       * @param prism The prism to create this node for.
       * @return New UiPanel on success; nullptr on failure.
       *
       * @priv none
       */
      static Create(prism: Prism | null): ui.UiPanel | null

      /**
       * The on Panel enter event.
       *
       * This event is dispatched when the cursor enters this UiPanel.
       *
       * @priv none
       */
      onPanelEnterSub(callback: ((arg0: ui.UiEventData) => void) | null /* std::function<void(UiEventData)> */): utils.CallbackID
      onPanelEnterUnsub(callbackID: utils.CallbackID): boolean

      /**
       * The on Panel exit event.
       *
       * This event is dispatched when the cursor exits this UiPanel.
       *
       * @priv none
       */
      onPanelExitSub(callback: ((arg0: ui.UiEventData) => void) | null /* std::function<void(UiEventData)> */): utils.CallbackID
      onPanelExitUnsub(callbackID: utils.CallbackID): boolean

      /**
       * The on cursor edge event.
       *
       * This event is dispatched when the cursor encounters the Panel shape edge and
       * the Panel is set to constrain cursor movement on the edge side. This event
       * will send the primary side the edge detection occured on, the attempted
       * delta vector of the cursor relative to the edge, and the normalized escape
       * value if a constraint magnitude has been set for the edge side.
       *
       * @priv none
       */
      onCursorEdgeSub(callback: ((arg0: ui.UiEventData, arg1: ui.Side, arg2: [number, number] | Float32Array, arg3: number) => void) | null /* std::function<void(UiEventData, Side,glm::vec2, float)> */): utils.CallbackID
      onCursorEdgeUnsub(callbackID: utils.CallbackID): boolean

      /**
       * The on cursor off edge event.
       *
       * This event is dispatched when the cursor is no longer being constrained by
       * the shape edge.  This can occur when the cursor, which had just been constrained
       * by the shape edge, is moved away from the edge towards the interior of
       * the Panel.  This can also occur if the side of the shape edge changes while the
       * cursor is being constrained (moving from top to right side for instance).
       *
       * This event would be usefull when providing a visual feedback as
       * the cursor attemts to exit a Panel but the user changes their mind and pulls
       * the cursor back to within the Panel, ending the exit attempt.
       *
       * @priv none
       */
      onCursorOffEdgeSub(callback: ((arg0: ui.UiEventData) => void) | null /* std::function<void(UiEventData)> */): utils.CallbackID
      onCursorOffEdgeUnsub(callbackID: utils.CallbackID): boolean

      /**
       * Sets the boundary shape for the UiPanel.
       *
       * The UiPanel will not be active until the shape is set.
       *
       * @param shape the BoundaryShape
       *
       * @priv none
       */
      setPanelShape(shape: ui.BoundaryShape): void

      /**
       * Gets the boundary shape for this UiPanel.
       *
       * @return the BoundaryShape.
       *
       * @priv none
       */
      getPanelShape(): ui.BoundaryShape

      /**
       * Sets whether the UiPanel constrains cursor movement within the
       * boundary shape or not.
       *
       * The default is false.
       *
       * @param constrained flag indicating the cursor is constrained or not.
       *
       * @priv none
       */
      setCursorConstrained(constrained: boolean): void

      /**
       * Gets whether the UiPanel constrains cursor movement or not.
       *
       * @return true if the cursor is constrained, false otherwise.
       *
       * @priv none
       */
      getCursorConstrained(): boolean

      /**
       * Sets whether the cursor is visible while inside the UiPanel.
       *
       * @param visible the cursor visiblity flag.
       *
       * @priv none
       */
      setCursorVisible(visible: boolean): void

      /**
       * Gets whether the cursor is visible while inside the UiPanel.
       *
       * @return true if the cursor is visible inside the UiPanel, false otherwise.
       *
       * @priv none
       */
      getCursorVisible(): boolean

      /**
       * Sets the cursor transition type for the Panel.  The cursor transition type
       * dictates where the cursor appears upon a Panel transition, whether
       * closest edge, center, or manually set initial position.
       *
       * The default is the initial position.
       *
       * @param type The CursorTransitionType.
       *
       * @priv none
       */
      setCursorTransitionType(type: ui.PanelCursorTransitionType): void

      /**
       * Gets the cursor transition type for the Panel.
       *
       * @return the CursorTransitionType.
       *
       * @priv none
       */
      getCursorTransitionType(): ui.PanelCursorTransitionType

      /**
       * Sets the initial position of the cursor within the Panel upon a
       * Panel-to-Panel transition when PanelCursorTransitionType::kInitialPosition
       * is in affect.
       *
       * The position is provided in local Panel space.  The default value
       * is (0,0,0).
       *
       * @param position the initial cursor position within Panel space.
       *                 The provided Z component is ignored and the cursor is positioned at Z=0.
       *
       * @priv none
       */
      setCursorInitialPosition(position: [number, number, number] | Float32Array /* glm::vec3 */): void

      /**
       * Gets the initial position of the cursor for a Panel-to-Panel transition.
       *
       * @return the cursor initial position within the Panel.
       *
       * @priv none
       */
      getCursorInitialPosition(): [number, number, number] /* glm::vec3 */

      /**
       * Sets the edge constraint and Panel transition properties for a side of the Panel shape.
       *
       * Panels that constrain the cursor can also offer the ability for the cursor to
       * escape a side when enough movement is attempted and to also automatically transition
       * to another Panel once the cursor escapes a side.
       *
       * @param side - the Side of the boundary shape to set the properties for.
       * @param constraintMagnitude - how much the cursor must attempt to move relatively (in scene units)
       *                              to escape the side.
       *                              A value less than 0 means no escape possible (always constrained).
       *                              A value of 0 means the cursor will not be constrained on this side.
       *                              A value greater than 0 constrains the cursor up to the magnitude.
       * @param transitionPanel - the optional UiPanel to have the cursor transition to when the
       *                          cursor escapes.  Use nullptr for no transition.
       *
       * @priv none
       */
      setEdgeConstraint(side: ui.Side, constraintMagnitude: number /* float */, transitionPanel: ui.UiPanel | null): void

      /**
       * Sets the edge constraint for a side of the Panel shape.
       *
       * Panels that constrain the cursor can also offer the ability for the cursor to
       * escape a side when enough movement is attempted.
       *
       * @param side - the Side of the boundary shape to set the properties for.
       * @param constraintMagnitude - how much the cursor must attempt to move relatively (in scene units)
       *                              to escape the side.
       *                              A value less than 0 means no escape possible (always constrained).
       *                              A value of 0 means the cursor will not be constrained on this side.
       *                              A value greater than 0 constrains the cursor up to the magnitude.
       *
       * @priv none
       */
      setEdgeConstraint(side: ui.Side, constraintMagnitude: number /* float */): void

      /**
       * Gets the edge constraint properties for a Side of the Panel shape.
       *
       * @param side - the Side of the boundary shape to get the properties for.
       * @return - the escape magnitude constraint for the cursor on the specified side.
       *
       * @priv none
       */
      getEdgeConstraint(side: ui.Side): number /* float */

      /**
       * Sets the edge constraint for a side of the Panel shape using a discrete
       * constraint level.
       *
       * Panel edge constraint levels are mapped to a float magnitude and can be
       * used for a consistent setting instead of setting the magnitude manually.
       *
       * @param side - the Side of the boundary shape to set the properties for.
       * @param level - The PanelEdgeConstraintLevel.
       *
       * @priv none
       */
      setEdgeConstraintLevel(side: ui.Side, level: ui.PanelEdgeConstraintLevel): void

      /**
       * Gets the edge constraint level for a Side of the Panel shape.
       *
       * @param side - the Side of the boundary shape to get the properties for.
       * @return - the escape constraint level.
       *
       * @priv none
       */
      getEdgeConstraintLevel(side: ui.Side): ui.PanelEdgeConstraintLevel

      /**
       * Sets the edge transition Panel for a Side.
       *
       * Panels that constrain the cursor can also offer the ability for the cursor to
       * escape a side when enough movement is attempted and to also automatically transition
       * to another Panel once the cursor escapes a side.
       *
       * @param side - the Side of the boundary shape to set the properties for.
       * @param transitionPanel - the UiPanel to have the cursor transition to
       *                          when the cursor escapes.  Use nullptr for no transition.
       *
       * @priv none
       */
      setEdgeTransition(side: ui.Side, transitionPanel: ui.UiPanel | null): void

      /**
       * Gets the edge transition Panel for a Side.
       *
       * @param side - the Side of the boundary shape to get the properties for.
       * @return - the UiPanel to transition to for the specified side.  A nullptr means no transition.
       *
       * @priv none
       */
      getEdgeTransition(side: ui.Side): ui.UiPanel | null

      /**
       * Gets the current, accumulated escape magnitude for a Side.
       *
       * @return - the accumulated escape magnitude for the specified side.
       *
       * @priv none
       */
      getEscapeMagnitude(side: ui.Side): number /* float */

      /**
       * Gets the normalized escape magnitude for a Side.
       *
       * @return - the normalized escape magnitude for the specified side.
       *
       * @priv none
       */
      getNormalizedEscapeMagnitude(side: ui.Side): number /* float */

      /**
       * Adds an external UiNode gravity well for consideration when interacting with this Panel.
       *
       * Use the external gravity well list to add specific UiNode gravity wells
       * for consideration with this Panel when those nodes are not normally descendants.
       * This is only intended for relatively small lists of nodes and may not be
       * performant if very large lists of external nodes are used.
       *
       * @param uiNode - The UiNode to add to the external gravity well list
       *
       * @priv none
       */
      addExternalGravityWell(uiNode: ui.UiNode | null): void

      /**
       * Removes an external UiNode gravity well from consideration when interacting with this Panel.
       *
       * @param uiNode - The UiNode to remove from the external gravity well list
       * @return TRUE if the removal is successful, FALSE otherwise
       *
       * @priv none
       */
      removeExternalGravityWell(uiNode: ui.UiNode | null): boolean

      /**
       * Checks if the UiNode is included in the external gravity well list.
       *
       * @param uiNode - The UiNode to check.
       * @return TRUE if the UiNode is in the list, FALSE if not.
       *
       * @priv none
       */
      isExternalGravityWell(uiNode: ui.UiNode | null): boolean

      /**
       * Clears the external gravity well list.
       *
       * @priv none
       */
      clearExternalGravityWells(): void
    }
  }
}

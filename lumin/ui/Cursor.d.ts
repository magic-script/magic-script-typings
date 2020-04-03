declare module 'lumin' {
  namespace ui {

    /**
     * Main entry point for interacting with the UiKit cursor.
     */
    class Cursor {
      constructor()

      /**
       * Sets the cursor start position for this Prism during
       * initial Prism startup (one time only).
       *
       * @param prism - the volume owning the cursor to alter.
       * @param position - the startup cursor position.
       *
       * @priv none
       */
      static SetStartupPosition(prism: Prism | null, position: [number, number] | Float32Array /* glm::vec2 */): void

      /**
       * Gets the Prism Position of the Eclipse Cursor.
       *
       * @param prism - the volume owning the cursor.
       * @return Position
       *
       * @priv none
       */
      static GetPosition(prism: Prism | null): [number, number, number] /* glm::vec3 */

      /**
       * Returns the enabled state of the Eclipse Cursor.
       *
       * @param prism - the volume owning the cursor.
       * @return Flag if the cursor is enabled or not.
       *
       * @priv none
       */
      static IsEnabled(prism: Prism | null): boolean

      /**
       * Sets the enabled state of the Eclipse Cursor.
       *
       * @param prism - the volume owning the cursor to alter.
       * @param a_enabled Enabled flag.
       *
       * @priv none
       */
      static SetEnabled(prism: Prism | null, a_enabled: boolean): void

      /**
       * Returns the scale of the Eclipse Cursor in scene units.
       *
       * @param prism - the volume owning the cursor.
       * @return The scale.
       *
       * @priv none
       */
      static GetScale(prism: Prism | null): number /* float */

      /**
       * Sets the scale of the Eclipse Cursor in scene units.
       *
       * @param prism - the volume owning the cursor to alter.
       * @param a_scale The scale of the cursor in scene units.
       *
       * @priv none
       */
      static SetScale(prism: Prism | null, a_scale: number /* float */): void

      /**
       * Returns the current movement rate of the Eclipse Cursor.
       *
       * @param prism - the volume owning the cursor.
       * @return The move rate.
       *
       * @priv none
       **/
      static GetMoveRate(prism: Prism | null): number /* float */

      /**
       * Sets the movement rate of the Eclipse Cursor.
       *
       * @param prism - the volume owning the cursor to alter.
       * @param a_rate The movement rate of the cursor.
       *
       * @priv none
       */
      static SetMoveRate(prism: Prism | null, a_rate: number /* float */): void

      /**
       * Gets the depth of the cursor plane along the Prism's Z axis.
       *
       * @param prism - the volume owning the cursor.
       * @return The plane depth.
       *
       * @priv none
       **/
      static GetPlaneDepth(prism: Prism | null): number /* float */

      /**
       * Sets the depth of the cursor plane along the Prism's Z axis.
       *
       * @param prism prism for which to set the depth of cursor
       * @param a_depth The depth of the cursor plane.
       *
       * @priv none
       */
      static SetPlaneDepth(prism: Prism | null, a_depth: number /* float */): void

      /**
       * Resets cursor defaults for scale and move rate
       * based on Prism extents.
       *
       * @param prism - the volume owning the cursor to alter.
       *
       * @priv none
       */
      static ResetDefaults(prism: Prism | null): void

      /**
       * Manually transitions the cursor to a Panel.
       *
       * Allows for a Panel to be transitioned to manually.  The cursor will end up
       * at the position specified by the Panel's cursor transition properties.
       *
       * This call is intended to make occasional, logic based transitions to a Panel
       * and cannot be used every frame to explicitly control cursor position.
       *
       * @param prism - the volume owning the cursor to alter.
       * @param panel - panel to transition to
       *
       * @priv none
       */
      static TransitionToPanel(prism: Prism | null, panel: ui.UiPanel | null): void

      /**
       * Sets the cursor state manually.
       *
       * @param prism - the volume owning the cursor to alter.
       * @param cursorState - cursor state to set
       *
       * @priv none
       */
      static SetState(prism: Prism | null, cursorState: CursorHoverState): void

      /**
       * Gets the manual cursor state.
       *
       * @param prism - the volume owning the cursor.
       *
       * @priv none
       */
      static GetState(prism: Prism | null): CursorHoverState

      /**
       * Resets the cursor state back to automatic based on hovered elements.
       *
       * @param prism - the volume owning the cursor to alter.
       *
       * @priv none
       */
      static ResetState(prism: Prism | null): void

      /**
       * Gets the gravity well max distance.
       *
       * @param prism - the volume owning the cursor.
       *
       * @priv none
       */
      static GetGravityWellMaxDistance(prism: Prism | null): number /* float */

      /**
       * Sets the gravity well max distance.
       *
       * @param prism - the volume owning the cursor to alter.
       * @param distance - gravity well max distance to set
       *
       * @priv none
       */
      static SetGravityWellMaxDistance(prism: Prism | null, distance: number /* float */): void

      /**
       * Gets the gravity well blend time in seconds.
       *
       * @param prism - the volume owning the cursor.
       *
       * @priv none
       */
      static GetGravityWellBlendTime(prism: Prism | null): number /* float */

      /**
       * Sets the gravity well blend time in seconds.
       *
       * @param prism - the volume owning the cursor to alter.
       * @param seconds - time in seconds
       *
       * @priv none
       */
      static SetGravityWellBlendTime(prism: Prism | null, seconds: number /* float */): void

      /**
       * Gets the cursor snap mode.
       *
       * @param prism - the volume owning the cursor.
       *
       * @priv none
       */
      static GetCursorSnapMode(prism: Prism | null): boolean

      /**
       * Sets the cursor snap mode.
       *
       * @param prism - the volume owning the cursor to alter.
       * @param snap - true to enable, false to disable cursor snap
       *
       * @priv none
       */
      static SetCursorSnapMode(prism: Prism | null, snap: boolean): void

      /**
       * Gets the cursor minimum travel distance for a snap transition.
       *
       * @param prism - the volume owning the cursor.
       *
       * @priv none
       */
      static GetCursorSnapMinDistance(prism: Prism | null): number /* float */

      /**
       * Sets the cursor minimum travel distance for a snap transition.
       *
       * @param prism - the volume owning the cursor to alter.
       * @param distance - the minimum travel distance for a snap transition.
       *
       * @priv none
       */
      static SetCursorSnapMinDistance(prism: Prism | null, distance: number /* float */): void

      /**
       * Gets the cursor minimum visit time for a snap transition.
       *
       * @param prism - the volume owning the cursor.
       *
       * @priv none
       */
      static GetCursorSnapMinTime(prism: Prism | null): number /* float */

      /**
       * Sets the cursor minimum visit time for a snap transition.
       *
       * @param prism - the volume owning the cursor to alter.
       * @param seconds - the minimum visit time for a snap transition.
       *
       * @priv none
       */
      static SetCursorSnapMinTime(prism: Prism | null, seconds: number /* float */): void
    }
  }
}

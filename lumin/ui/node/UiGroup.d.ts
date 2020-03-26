declare module 'lumin' {
  namespace ui {

    /**
     * UiGroup - Represents a collection of UiNode descendants.
     *
     * The UiGroup will aggregate certain UI events from the
     * UiNode descendants and re-broadcast them.  Can
     * be used to trigger event logic that should happen
     * when any contained UiNode fires certain events.
     *
     * The aggregated UI events:  onHoverEnter, onHoverExit,
     * onPress, onRelease, onActivate.
     */
    class UiGroup extends ui.UiNode {

      /**
       * Create a new UiGroup
       *
       * @param prism The prism to create this node for.
       * @return New UiGroup on success; nullptr on failure.
       *
       * @priv none
       */
      static Create(prism: Prism | null): ui.UiGroup | null
    }
  }
}

declare module 'lumin' {
  namespace ui {

    /** LoadingSpinner types from UX specifications. */
    enum LoadingSpinnerType {

      /**
       * 3D Particle FX loading spinner.
       */
      kParticlePackage,
      k2dSpriteAnimation,
    }

    /**
     * UiLoadingSpinner - This node represents a visual effect showing loading state.
     */
    class UiLoadingSpinner extends ui.UiNode {

      /**
       * Creates an indeterminate UiLoadingSpinner element using default settings.
       *
       * @param prism - The prism to create this node in.
       * @param type - loading spinner type (kParticlePackage, etc.)
       * @param resID `default = INVALID_RESOURCE_ID`<br/> - The resource ID.
       * @param resPath `default = ""`<br/> - The resource path in the resource (optional).
       * @param height `default = 0.0`<br/> - The height of the loading spinner (optional).
       * @return The new UiLoadingSpinner node.
       *
       * @priv none
       */
      static Create(prism: Prism | null, type: ui.LoadingSpinnerType, resID?: bigint /* uint64_t */, resPath?: string, height?: number /* float */): ui.UiLoadingSpinner | null

      /**
       * Creates a determinate UiLoadingSpinner element using default settings.
       *
       * @param volume - The volume to create this node in.
       * @param height `default = 0.0`<br/> - The height of the loading spinner (optional).
       * @return The new UiLoadingSpinner node.
       */
      static CreateDeterminate(volume: Prism | null, height?: number /* float */): ui.UiLoadingSpinner | null

      /**
       * Gets the ParticleNode for this UiLoadingSpinner if one exists
       * in the hierarchy.
       *
       * @return a ParticleNode pointer (can be null).
       *
       * @priv none
       */
      getParticleEffect(): ParticleNode | null

      /**
       * Gets the SpriteNode for this UiLoadingSpinner if one exists
       * in the hierarchy.
       *
       * @return a SpriteNode pointer (can be null).
       *
       * @priv none
       */
      getSpriteNode(): SpriteNode | null

      /**
       * Sets the UiLoadingSpinner size.
       *
       * This will affect the visual scale of all sprite based loading spinners but has no affect on the
       * visual scale of a particle based spinner.  Instead, modify the particle files directly to adjust
       * the particle effect size.  This does affect, and should be used to adjust, the bounds of all loading spinners.
       *
       * @param size The UiLoadingSpinner size.
       *
       * @priv none
       */
      setSize(size: [number, number] | Float32Array /* glm::vec2 */): void

      /**
       * Gets the UiLoadingSpinner size.
       *
       * @return the UiLoadingSpinner size.
       *
       * @priv none
       */
      getSize(): [number, number] /* glm::vec2 */

      /**
       * Get whether the UiLoadingSpinner is determinate
       *
       * @return True if the the spinner is determinate
       */
      isDeterminate(): boolean

      /**
       * Sets the value for the determinate UiLoadingSpinner. Will have no effect if the
       * loading spinner is indeterminate.
       *
       * @param value The normalized value between 0-1 for loading completeness, with 0
       *              being no progress and 1 fully complete.
       */
      setValue(value: number /* float */): void

      /**
       * Get the current normalized value for loading completeness.
       *
       * @return a value between 0-1.
       */
      getValue(): number /* float */
    }
  }
}

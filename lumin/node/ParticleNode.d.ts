declare module 'lumin' {
  namespace particles {
  }

  /**
   * Spawn point and control for a particle effect. The effect must be created using the PopcornFX
   * 1.12.x editor.
   */
  class ParticleNode extends RenderNode {

    /**
     * Sets the id of the resource this node will get its particle data from. The id should refer to
     * a ParticlePackageResource instance.
     *
     * @param a_ID The resource id.
     *
     * @priv none
     */
    setPackageResource(a_ID: bigint /* uint64_t */): void

    /**
     * Sets the name of the particle effect this Node will generate.
     *
     * @param effectName Effect name. Pkfx file name relative to the ParticlePackageResource folder.
     * @param infiniteLived `default = false`<br/> Flag that the effect has particles that never expire. Affects how the
     * particle is shut down.
     *
     * @priv none
     */
    setEffectName(effectName: string, infiniteLived?: boolean): void

    /**
     * Sets an effect property on the node.
     *
     * @param a_name The property name, as set in the effects editor.
     * @param a_value The property value. Should match the type as set in the effects editor.
     * @return true if the name matches a known property
     *
     * @priv none
     */
    setProperty(a_name: string, a_value: number /* float */): boolean
    setProperty(a_name: string, a_value: [number, number] | Float32Array /* glm::vec2 */): boolean
    setProperty(a_name: string, a_value: [number, number, number] | Float32Array /* glm::vec3 */): boolean
    setProperty(a_name: string, a_value: [number, number, number, number] | Float32Array /* glm::vec4 */): boolean

    /**
     * Start playing the particle effect.
     *
     * @priv none
     */
    play(): void

    /**
     * Stop playing the particle effect. Unless the particle is infinitely lived, the effect will
     * die by letting all its particles expire.
     *
     * IMPORTANT: If the effect is infinitely lived, but the infiniteLived flag was not set in setEffectName,
     * the effect will not stop!
     *
     * @priv none
     */
    stop(): void

    /**
     * Stop playing the particle effect. The effect's particles will be removed without dying.
     *
     * @priv none
     */
    kill(): void

    /**
     * Stops and restart the particle effect. Does not reset attributes on the particle. Has no effect
     * if the effect is not playing.
     *
     * @priv none
     */
    reset(): void

    /**
     * Gets the data for a curve attribute sampler. A curve attribute sampler can have 1-4 curves,
     * which can control a particle's position, color, etc.
     *
     * @param name Attribute sampler name
     * @return Sampler data
     *
     *
     * @priv none
     */
    getCurveSampler(name: string): particles.CurveSampler | null /* std::optional<particles::CurveSampler> */

    /**
     * Sets the data for a curve attribute sampler. A curve attribute sampler can have 1-4 curves,
     * which can control a particle's position, color, etc.
     *
     * @param name Attribute sampler name
     * @param sampler Sampler data
     *
     * @return true if the name matches a known property
     *
     * @priv none
     */
    setSampler(name: string, sampler: particles.CurveSampler): boolean

    /**
     * Sets the data for a shape attribute sampler. A shape sampler can be used to generate particles
     * on a surface, either a simple geometric shape, or a baked mesh (.pkmm file). A mesh shape can
     * also be animated via a baked .pksa animation file.
     *
     * @param name Attribute sampler name
     * @param sampler Sampler data
     *
     * @return true if the name matches a known property
     *
     * @priv none
     */
    setSampler(name: string, sampler: particles.ShapeSampler): boolean
  }
}

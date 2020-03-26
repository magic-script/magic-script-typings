declare module 'lumin' {

  /**
   * Class to handle skeletal-animated models. Note although the t-pose model will be shown, animation
   * itself is not implemented yet.
   */
  class ModelNode extends RenderNode {

    /**
     * @priv none
     */
    getModelResource(): bigint /* uint64_t */

    /**
     * Sets the id of the resource this node will draw. The id should refer to a ModelResource.
     *
     * @param a_ID The resource id.
     *
     * @priv none
     */
    setModelResource(a_ID: bigint /* uint64_t */): void

    /**
     * Set the current animation by resource + name.
     * Some animation resources can contain multiple animations, these are addressed by name.
     * FBX models for example may contain 1-n animations.
     * LMO (via AnimationResource) will contain 1 animation.
     * Note that :
     *              When using an AnimationResource that passing a null value for name will play the first and only
     *              animation in the resource. In this case the a_pAnimationName parameter is ignored.
     *
     * @param a_ID Model resource containing animations (FBX), or AnimationResource (LMO)
     * @param a_pAnimationName Case-senstive animation name. For AnimationResource passing null is acceptable.
     * @param a_bPaused Should the animation start in state paused.
     * @param a_uiNumLoops `default = 0`<br/> The number of times to play the animation for. The default value 0 will loop forever.
     *
     * @priv none
     */
    playAnimation(a_ID: bigint /* uint64_t */, a_pAnimationName: string | null /* char* */, a_bPaused: boolean, a_uiNumLoops?: number /* uint32_t */): void

    /**
     * Sets the animation pause state for the current model node.
     *
     * @param a_bPaused The new animated pause state of the model.
     *
     * @priv none
     */
    setAnimationPauseState(a_bPaused: boolean): void

    /**
     * Get the pause state for the current animated model node.
     *
     * @return the pause state of the current animation
     *
     * @priv none
     */
    getAnimationPauseState(): boolean

    /**
     * Set the playback speed for animations
     *
     * @param a_playbackSpeed 1.f to play forward at standard speed (can use negative values)
     *
     * @priv none
     */
    setAnimationPlaybackSpeed(a_playbackSpeed: number /* float */): void

    /**
     * Set the current time of the animation.
     *
     * @param a_t 0.f start -> 1.f end
     *
     * @priv none
     */
    setAnimationTime(a_t: number /* float */): void

    /**
     * Gets the current playback speed
     *
     * @return the playback speed
     *
     * @priv none
     */
    getAnimationPlaybackSpeed(): number /* float */

    /**
     * Play the Emotion FX blend setup file (state machine), this is a different type of animation
     * and animation pausing and speed control are not supported.
     * User must also load all referenced animations (.lmo files) referenced in motion set
     * before playing.
     *
     * Use ServerEvent of type kAnimationBlendSetupEvent for tracking state transitions
     *
     * @param a_motionSetID resource ID from .lms files (Lumin Motion Set)
     * @param a_blendSetupID resource ID from .lbs files
     *
     * @priv none
     */
    playBlendSetup(a_motionSetID: bigint /* uint64_t */, a_blendSetupID: bigint /* uint64_t */): void
    blendSetupSetParam(param: string | null /* char* */, value: number /* float */): void
    blendSetupSetParam(param: string | null /* char* */, value: boolean): void
    blendSetupSetParamVec(param: string | null /* char* */, value: [number, number] | Float32Array /* glm::vec2 */): void
    blendSetupSetParamVec(param: string | null /* char* */, value: [number, number, number] | Float32Array /* glm::vec3 */): void
    blendSetupSetParamVec(param: string | null /* char* */, value: [number, number, number, number] | Float32Array /* glm::vec4 */): void
    blendSetupSetParamQuat(param: string | null /* char* */, value: [number, number, number, number] | Float32Array /* glm::quat */): void

    /**
     * Sets the texture of a given material by the new texture ID.
     * Material should be the one applied to the Model Node.
     *
     * For Texture slot refer to "lumin::render::TextureType::" eg. TextureType::kAlbedo or 0
     *
     * @param materialName - Name of the Material
     * @param textureSlot - Texture Slot, eg, Albedo, Normal, etc.
     * @param textureID - ID of the new texture
     */
    setTexture(materialName: string, textureSlot: number /* uint32_t */, textureID: bigint /* uint64_t */): void
  }
}

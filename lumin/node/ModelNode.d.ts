declare module 'lumin' {
  class ModelNode extends RenderNode {
    getModelResource(): BigInt /* uint64_t */
    setModelResource(a_ID: BigInt /* uint64_t */): void
    playAnimation(a_ID: BigInt /* uint64_t */, a_pAnimationName: string, a_bPaused: boolean, a_uiNumLoops: number = 0 /* 0 is not the actual default value */): void
    setAnimationPauseState(a_bPaused: boolean): void
    getAnimationPauseState(): boolean
    setAnimationPlaybackSpeed(a_playbackSpeed: number): void
    setAnimationTime(a_t: number): void
    getAnimationPlaybackSpeed(): number
    playBlendSetup(a_motionSetID: BigInt /* uint64_t */, a_blendSetupID: BigInt /* uint64_t */): void
    blendSetupSetParam(param: string, value: number): void
    blendSetupSetParam(param: string, value: boolean): void
    blendSetupSetParamVec(param: string, value: [number, number] /* glm::vec2 */): void
    blendSetupSetParamVec(param: string, value: [number, number, number] /* glm::vec3 */): void
    blendSetupSetParamVec(param: string, value: [number, number, number, number] /* glm::vec4 */): void
    blendSetupSetParamQuat(param: string, value: [number, number, number, number] /* glm::quat */): void
    setTexture(materialName: string, textureSlot: number, textureID: BigInt /* uint64_t */): void
  };
}

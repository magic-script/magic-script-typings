declare module 'lumin' {
  class ModelNode extends RenderNode {
    getModelResource(): number
    setModelResource(a_ID: number): void
    playAnimation(a_ID: number, a_pAnimationName: string, a_bPaused: boolean, a_uiNumLoops: number = 0 /* 0 is not the actual default value */): void
    setAnimationPauseState(a_bPaused: boolean): void
    getAnimationPauseState(): boolean
    setAnimationPlaybackSpeed(a_playbackSpeed: number): void
    setAnimationTime(a_t: number): void
    getAnimationPlaybackSpeed(): number
    playBlendSetup(a_motionSetID: number, a_blendSetupID: number): void
    blendSetupSetParam(param: string, value: number): void
    blendSetupSetParam(param: string, value: boolean): void
    blendSetupSetParamVec(param: string, value: [number, number] /* glm::vec2 */): void
    blendSetupSetParamVec(param: string, value: [number, number, number] /* glm::vec3 */): void
    blendSetupSetParamVec(param: string, value: [number, number, number, number] /* glm::vec4 */): void
    blendSetupSetParamQuat(param: string, value: [number, number, number, number] /* glm::quat */): void
    setTexture(materialName: string, textureSlot: number, textureID: number): void
  };
}

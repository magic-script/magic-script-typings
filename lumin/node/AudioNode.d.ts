declare module 'lumin' {
  class AudioNode extends TransformNode {
    createSoundWithLoadedFile(resourceID: BigInt /* uint64_t */, autoDestroy: boolean = 0 /* 0 is not the actual default value */, dynamicDecode: boolean = 0 /* 0 is not the actual default value */): boolean
    createSoundWithLoadedFile(resourceIDs: Array<BigInt /* uint64_t */> /* std::vector */, autoDestroy: boolean = 0 /* 0 is not the actual default value */, dynamicDecode: boolean = 0 /* 0 is not the actual default value */): boolean
    createSoundWithStreamedFile(resourceID: BigInt /* uint64_t */, autoDestroy: boolean = 0 /* 0 is not the actual default value */): boolean
    createSoundWithStreamedFile(resourceIDs: Array<BigInt /* uint64_t */> /* std::vector */, autoDestroy: boolean = 0 /* 0 is not the actual default value */): boolean
    createSoundWithSystemEnum(): boolean
    createWithSound(sound: Sound, autoDestroy: boolean = 0 /* 0 is not the actual default value */): void
    setSoundProperties(sound: Sound): void
    addResource(resourceID: BigInt /* uint64_t */): boolean
    removeResource(resourceID: BigInt /* uint64_t */): boolean
    replaceResource(newResourceID: BigInt /* uint64_t */, oldResourceID: BigInt /* uint64_t */ = 0 /* 0 is not the actual default value */): boolean
    getNumResources(): number
    getResources(): Array<BigInt /* uint64_t */> /* std::vector */
    startSound(): void
    startSound(resId: BigInt /* uint64_t */): void
    stopSound(): void
    pauseSound(): void
    resumeSound(): void
    playSystemSound(sysSound: SystemSoundEnum): boolean
    getSoundState(): AudioState
    setSoundVolumeLinear(volume: number): void
    getSoundVolumeLinear(): number
    setSoundPitch(pitch: number): void
    getSoundPitch(): number
    setSoundMute(isMuted: boolean): void
    isSoundMuted(): boolean
    setSoundLooping(isLooping: boolean): void
    isSoundLooping(): boolean
    setStreamedFileOffset(offsetMilliSec: number): void
    getStreamedFileOffset(): number
    setSpatialSoundEnable(isEnabled: boolean): void
    getSpatialSoundEnable(): boolean
    static playSound(prism: Prism, sound: Sound): boolean
    static playSound(prism: Prism, sound: Sound, pos: [number, number, number] /* glm::vec3 */): boolean
    static playSound(prism: Prism, soundName: string): boolean
    static playSound(prism: Prism, soundName: string, pos: [number, number, number] /* glm::vec3 */): boolean
    setSpatialSoundPosition(channel: number, channelPosition: [number, number, number] /* glm::vec3 */): void
    getSpatialSoundPosition(channel: number): [number, number, number] /* glm::vec3 */
    setSpatialSoundDirection(channel: number, channelDirection: [number, number, number, number] /* glm::quat */): void
    getSpatialSoundDirection(channel: number): [number, number, number, number] /* glm::quat */
    setSpatialSoundDistanceProperties(channel: number, channelProperties: SpatialSoundDistanceProperties): void
    getSpatialSoundDistanceProperties(channel: number): SpatialSoundDistanceProperties
    setSpatialSoundRadiationProperties(channel: number, channelProperties: SpatialSoundRadiationProperties): void
    getSpatialSoundRadiationProperties(channel: number): SpatialSoundRadiationProperties
    setSpatialSoundDirectSendLevels(channel: number, channelSendlevels: SpatialSoundSendLevels): void
    getSpatialSoundDirectSendLevels(channel: number): SpatialSoundSendLevels
    setSpatialSoundRoomSendLevels(channel: number, channelSendLevels: SpatialSoundSendLevels): void
    getSpatialSoundRoomSendLevels(channel: number): SpatialSoundSendLevels
    releaseOutputStreamBuffer(): boolean
    releaseOutputStreamBuffer(streamId: BigInt /* uint64_t */): boolean
    startInput(): boolean
    stopInput(): boolean
    static ReleaseInputBuffer(audioId: BigInt /* uint64_t */): boolean
  };
}

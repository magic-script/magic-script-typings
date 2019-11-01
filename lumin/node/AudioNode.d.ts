declare module 'lumin' {
  class AudioNode extends TransformNode {

    /**
     * Initializes the AudioNode for using the already loaded resource(keyed on resource ID)
     * Associates audio resource id with audio node.
     * Also, sets resource related properties.
     *
     * @param resourceID - ID of the audio resource which is already created.
     * @param autoDestroy `default = false`<br/> - If true, play the sound once and  delete the node. If false the audio
     *                      node will stay until scenegraph is destroyed.
     *                      It is good practice to remove the unused node sooner than later after
     *                      it's not required.
     * @param dynamicDecode `default = false`<br/> - true = The file resource is compressed and will be decoded when playing.
     *                        false = The file\resource is an uncompressed PCM data.
     *
     * @return bool - Returns true on success else, returns false.
     */
    createSoundWithLoadedFile(resourceID: bigint /* uint64_t */, autoDestroy?: boolean, dynamicDecode?: boolean): boolean

    /**
     * Initializes the AudioNode for loading the audio file chunk at a time in memory.
     * Associates audio resource(file) with audio node. Also, sets resource related properties.
     *
     * @param resourceID - resource id of sound resource
     * @param autoDestroy `default = false`<br/> - If true, play the sound once and  delete the node. If false the audio node will
     *                      stay until scenegraph is destroyed.
     *                      It is good practice to remove the unused node sooner than later after it's not
     *                      required.
     *
     * @return bool - Returns true on success else, returns false.
     */
    createSoundWithStreamedFile(resourceID: bigint /* uint64_t */, autoDestroy?: boolean): boolean
    createWithSound(sound: Sound, autoDestroy?: boolean): void

    /**
     * Plays the sound from the beginning.
     */
    startSound(): void

    /**
     * Stops the sound if already playing.
     */
    stopSound(): void

    /**
     * Pause the sound if already playing.
     */
    pauseSound(): void

    /**
     * Resume the sound if already playing and is paused.
     */
    resumeSound(): void

    /**
     * Gets the current state of the audio, see enum AudioState.
     *
     * @return - Output parameter where the audio state will be stored.
     */
    getSoundState(): AudioState

    /**
     * Sets the audio volume.
     *
     *  The range of the volume is 0 to 8, with 0 for silence,
     *  1 for unity gain, and 8 for 8x gain.
     *
     * @param volume - Volume value to set. Range 0.0f to 8.0f
     */
    setSoundVolumeLinear(volume: number): void

    /**
     * Gets the current audio volume.
     *
     * @return - Reference to a float to output current value.
     */
    getSoundVolumeLinear(): number

    /**
     * Sets sound pitch.
     *
     *   The range of the pitch is 0.5 to 2.0, with 0.5 being one octave down
     *   and 2.0 being one octave up (i.e., the pitch is a frequency multiple).
     *   A pitch of 1.0 is the default and means no change.
     *
     * @param pitch - Pitch value to set. Range 0.5 t0 2.0
     */
    setSoundPitch(pitch: number): void

    /**
     * Get sound pitch.
     *
     * @return - Reference to a float to output current value.
     */
    getSoundPitch(): number

    /**
     * Mute or unmute the sound.
     *
     * @param isMuted -  true, mute the sound.
     *                false, unmute.
     */
    setSoundMute(isMuted: boolean): void

    /**
     * Check if sound is muted or not.
     *
     * @return - Reference to a bool to output current value.
     *               true - muted
     *               false - not muted
     */
    isSoundMuted(): boolean

    /**
     * Sets the mode of playing audio in repeat mode. If enabled, audio will play from start
     * after reaching the end, until disabled.
     * When audio is created, the default is disabled.
     *
     * @param isLooping - true enables loop mode.
     *               false disables loop mode.
     */
    setSoundLooping(isLooping: boolean): void

    /**
     * Queries if the sound is looping or not.
     *
     * @return - true, if sound is looping.
     *                          false, if not.
     */
    isSoundLooping(): boolean

    /**
     * Sets the starting point for playback of a streamed-file sound.
     *
     * @param offsetMilliSec - Value for offset in milliseconds.
     */
    setStreamedFileOffset(offsetMilliSec: number): void

    /**
     * Gets the currently set starting point for playback of a streamed-file sound.
     *
     * @return - Reference to uint32_t to output the current value of offset.
     */
    getStreamedFileOffset(): number

    /**
     * Enable\Disable the capability for spatial sound.
     * If enabled, setSpatialSoundPosition
     * must be called for positional sound to be effective.
     *
     *
     * @param isEnabled - true, Enable
     *                    false, Disable
     */
    setSpatialSoundEnable(isEnabled: boolean): void

    /**
     * Query if spatial sound is enabled or disabled.
     *
     * @return - true, Enabled
     *                          false, Disabled
     */
    getSpatialSoundEnable(): boolean

    /**
     * Fire and forget API.
     * Creates an AudioNode with the properties from the given Sound and sets a callback to destroy the node when it has finished playing.
     * @param prism Prism instance that the created node will belong to.
     * @param sound Sound instance that contains audio properties for the created AudioNode.
     * @return True if the audio node was successfully created, added to the scene and set to delete on play end.
     */
    static playSound(prism: Prism, sound: Sound): boolean

    /**
     * Fire and forget API.
     * Creates an AudioNode with the properties from the given Sound and sets a callback to destroy the node when it has finished playing.
     * @param prism Prism instance that the created node will belong to.
     * @param sound Sound instance that contains audio properties for the created AudioNode.
     * @param pos Position to set to the created AudioNode.
     * @return True if the audio node was successfully created, added to the scene and set to delete on play end.
     */
    static playSound(prism: Prism, sound: Sound, pos: [number, number, number] /* glm::vec3 */): boolean

    /**
     * Fire and forget API.
     * Creates an AudioNode with the properties from the given Sound and sets a callback to destroy the node when it has finished playing.
     * @param prism Prism instance that the created node will belong to.
     * @param soundName name of a Sound instance that contains audio properties for the created AudioNode.
     * @return True if the audio node was successfully created, added to the scene and set to delete on play end.
     */
    static playSound(prism: Prism, soundName: string): boolean

    /**
     * Fire and forget API.
     * Creates an AudioNode with the properties from the given Sound and sets a callback to destroy the node when it has finished playing.
     * @param prism Prism instance that the created node will belong to.
     * @param soundName name of a Sound instance that contains audio properties for the created AudioNode.
     * @param pos Position to set to the created AudioNode.
     * @return True if the audio node was successfully created, added to the scene and set to delete on play end.
     */
    static playSound(prism: Prism, soundName: string, pos: [number, number, number] /* glm::vec3 */): boolean

    /**
     * Set the position of a given audio channel relative to this nodes local position.
     * Effective only if spatial sound is enabled explicitly for an audio node.
     * Will change the position even if the audio clip is already playing.
     *
     * @param channel - Channel index(zero based).
     * @param channelPosition - A glm::vec3 specifying the offset of channel position
     *                          relative to the node's local position.
     *
     *
     */
    setSpatialSoundPosition(channel: number, channelPosition: [number, number, number] /* glm::vec3 */): void

    /**
     *  Get position of the given audio channel. Position is relative to audio node's
     *  local position.
     *
     *  @param channel - Channel index(zero based).
     *  @return - A glm::vec3 which gets populated by the offset
     *               of channels position.
     */
    getSpatialSoundPosition(channel: number): [number, number, number] /* glm::vec3 */

    /**
     * Set the sound direction of a given audio channel.
     * Effective only if spatial sound is enabled (setSpatialSoundEnable) for an audio node.
     * The Direction is relative to this nodes local orientation.
     * By default that is, if this API not called then, the direction is same
     * as the the parent nodes orientation.
     * Will change the direction even if the audio clip is already playing.
     *
     * @param channel - Channel index(zero based).
     * @param channelDirection - A quaternion (glm::quat) specifying the direction of the sound for the given channel
     *                          relative to the node's local orientation.
     */
    setSpatialSoundDirection(channel: number, channelDirection: [number, number, number, number] /* glm::quat */): void

    /**
     *  Get sound direction of a given audio channel.
     *  Direction is relative to audio node's local orientation.
     *
     *  @param channel - Channel index(zero based).
     *  @return - A quaternion (glm::quat) which gets populated by direction
     *               of the sound for the given channel.
     */
    getSpatialSoundDirection(channel: number): [number, number, number, number] /* glm::quat */

    /**
     *  Set spatial sound distance parameters for a given channel.
     *
     *  @param channel - Channel index(zero based).
     *  @param channelProperties - spatial sound distance parameters, See struct SpatialSoundDistanceProperties
     */
    setSpatialSoundDistanceProperties(channel: number, channelProperties: SpatialSoundDistanceProperties): void

    /**
     *  Get spatial sound distance parameters for a given channel.
     *
     *  @param channel - Channel index(zero based).
     *  @return - Reference to distance properties struct.
     *               See struct SpatialSoundDistanceProperties
     */
    getSpatialSoundDistanceProperties(channel: number): SpatialSoundDistanceProperties

    /**
     *  Set spatial sound radiation parameters for a given channel.
     *
     *  @param channel - Channel index(zero based).
     *  @param channelProperties - spatial sound radiation parameters, See struct SpatialSoundRadiationProperties
     */
    setSpatialSoundRadiationProperties(channel: number, channelProperties: SpatialSoundRadiationProperties): void

    /**
     *  Get spatial sound radiation parameters for a given channel.
     *
     *  @param channel - Channel index(zero based).
     *  @return - Reference to radiation properties struct.
     *               See struct SpatialSoundRadiationProperties
     */
    getSpatialSoundRadiationProperties(channel: number): SpatialSoundRadiationProperties

    /**
     * Sets the direct send levels for one channel of a sound output.
     *
     * When 3D audio processing is enabled for a sound output (see
     * setSpatialSoundEnabled) this function sets the send
     * levels for the direct component of the sound, i.e., the audio mix
     * for the the part of the sound not affected by room acoustics.
     * Multi-channel sounds require the direct send levels to be set
     * individually for each channel by calling this function once for each
     * channel. For mono sounds use channel = 0. For stereo sounds use
     * channel = 0 for left and channel = 1 for right.
     *
     * @param channel - selects the channel whose direct send levels are being set
     * @param channelSendlevels - SpatialSoundSendLevels struct to set the levels
     */
    setSpatialSoundDirectSendLevels(channel: number, channelSendlevels: SpatialSoundSendLevels): void

    /**
     * Gets the direct send levels for one channel of a sound output.
     *
     * Multi-channel sounds require the direct send levels to be read
     * individually for each channel by calling this function once for each
     * channel. For mono sounds use channel = 0. For stereo sounds use
     * channel = 0 for left and channel = 1 for right.
     *
     * @param channel - selects the channel whose direct send levels are being read
     * @return - SpatialSoundSendLevels struct to return the levels
     */
    getSpatialSoundDirectSendLevels(channel: number): SpatialSoundSendLevels

    /**
     * Sets the room send levels for one channel of a sound output.
     *
     * When 3D audio processing is enabled for a sound output (see
     * setSpatialSoundEnabled) this function sets the send
     * levels for the room component of the sound, i.e., the audio mix
     * for the the part of the sound that's affected by room acoustics.
     * Multi-channel sounds require the room send levels to be set
     * individually for each channel by calling this function once for each
     * channel. For mono sounds use channel = 0. For stereo sounds use
     * channel = 0 for left and channel = 1 for right.
     *
     * @param channel - selects the channel whose room send levels are being set
     * @param channelSendLevels - SpatialSoundSendLevels struct to set the levels
     */
    setSpatialSoundRoomSendLevels(channel: number, channelSendLevels: SpatialSoundSendLevels): void

    /**
     * Gets the room send levels for one channel of a sound output.
     *
     * Multi-channel sounds require the room send levels to be read
     * individually for each channel by calling this function once for each
     * channel. For mono sounds use channel = 0. For stereo sounds use
     * channel = 0 for left and channel = 1 for right.
     *
     * @param channel - selects the channel whose room send levels are being read
     * @return - SpatialSoundSendLevels struct to return the levels
     */
    getSpatialSoundRoomSendLevels(channel: number): SpatialSoundSendLevels

    /**
     * Lets the audio service know that the buffer is filled and ready.
     *
     * @return bool - Returns true on success else false.
     */
    releaseOutputStreamBuffer(): boolean

    /**
     * Lets the audio service know that the buffer is filled and ready.
     *
     * @param streamId - OutputStream's  Id whose buffer is being released.
     *
     * @return bool - Returns true on success else false.
     */
    releaseOutputStreamBuffer(streamId: bigint /* uint64_t */): boolean
  }
}

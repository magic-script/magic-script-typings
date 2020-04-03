declare module 'lumin' {
  class AudioNode extends TransformNode {

    /**
     * Initializes the AudioNode for using the already loaded resource(keyed on resource ID)
     * Associates audio resource id with AudioNode.
     * Also, sets resource related properties.
     *
     * NOTE: Must be called only once to set the AudioNode's behavior in terms of it's sound resource(s).
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
     * An overload of createSoundWithLoadedFile with a vector of resource IDs.
     * See the comments for single resource Id overload.
     * This API will associate all the resource IDs in the vector with the AudioNode.
     *
     * NOTE: Must be called only once to set the AudioNode's behavior in terms of it's sound resource(s).

     * PERFORMANCE: Associating many resources to one AudioNode will result in slight performance penalty.
     *       So, only associate multiple resources if necessary(eg. playing random sounds) and
     *       do not add resources to AudioNode which will be never used or used only once. If the resource
     *       is not going to be used any more, remove the association using removeResource() API.
     */
    createSoundWithLoadedFile(resourceIDs: Array<bigint> /* std::vector<uint64_t> */, autoDestroy?: boolean, dynamicDecode?: boolean): boolean

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

    /**
     * An overload of createSoundWithStreamedFile with a vector of resource IDs.
     * See the comments for single resource Id overload.
     * This API will associate all the resource IDs in the vector with the AudioNode.
     *
     * NOTE: Must be called only once to set the AudioNode's behavior in terms of it's sound resource(s).

     * PERFORMANCE: Associating many resources to one AudioNode will result in slight performance penalty.
     *       So, only associate multiple resources if necessary(eg. playing random sounds) and
     *       do not add resources to AudioNode which will be never used or used only once. If the resource
     *       is not going to be used any more, remove the association using removeResource() API.
     */
    createSoundWithStreamedFile(resourceIDs: Array<bigint> /* std::vector<uint64_t> */, autoDestroy?: boolean): boolean

    /**
     * Sets the AudioNode for playing the predefined system sounds using the
     * AudioSytemSound enums.
     *
     * NOTE: Must be called only once to set the AudioNode's behavior in terms of it's sound resource(s).
     *
     * 1) The node can be the child of some visible node to perceive the sounds
     * direction coming from that visual artifact\model's location.
     * -- OR --
     * 2) The node may be the child of RootNode and set the
     * audioNode->setLocalPosition(x,y,z) to perceive the sounds direction coming
     * from the arbitrary location specified by x,y,z
     *
     * Call audionode->playSystemSound(SystemSoundEnum sysSound); to play
     * the specified system sound from the location specified by #1 or #2 method.
     */
    createSoundWithSystemEnum(): boolean

    /**
     * Creates the AudioNode using the properties set in Sound object.
     * The Sound object reads it's properties from an XML Sound Model file.
     * XML Sound Model which, contains AudioNode's properties are created for
     * various purposes for example, internally, SystemSoundModel.xml is used to define
     * each system sound's properties.
     *
     * NOTE: Must be called only once to set the AudioNode's behavior in terms of it's sound resource(s).
     *
     * @param sound A Sound object to apply it's properties to this AudioNode.
     * @param autoDestroy `default = false`<br/> Default is false and currently ignored.
     */
    createWithSound(sound: Sound | null, autoDestroy?: boolean): void

    /**
     * Similar to createWithSound with a difference that the sound has already
     * been create using any of the createWithXxxx APIs.
     * This method will set the AudioNodes properties as set in
     * the Sound* parameter.
     *
     * NOTE: The stream="false"|"true" and res=<res_id> properties(from XML from which
     *       the Sound object was created) will be ignored because the AudioNode was
     *       already initialized using either createSoundWithLoadedfile,
     *       createSoundWithStreamedFile or any other createSoundXxxx APIs.
     *
     * @param sound A Sound object to apply it's properties to this AudioNode.
     *
     */
    setSoundProperties(sound: Sound | null): void

    /**
     * AudioNode can have multiple AudioResource(s) associated with it.
     * The first resource is associated when AudioNode is initialized by calling
     * createSoundWithLoadefFile or createSoundWithStreamedFile API.
     * This addResource API may be called to add(associate) more resources. However, it must be
     * called after initializing the AudioNode with the above mentioned createSoundWithXxxx APIs.
     *
     * Note that the same resource type must be used when adding additional resources as the one used in
     * createSoundWithXxxx API
     * Example:
     *   AudioNode->createSoundWithLoadedFile( loadedFileResourceID_1 ); // Node initialized with "loaded file" type resource.
     *   AudioNode->addResource( loadedFileResourceID_2 ); // OK - adding "loaded file" resource
     *   AudioNode->addResource( streamedFileResourceID_3 ); // ERROR - adding "streamed  file" resource
     *   ...
     *   Later, when startSound() API is called, it will play any one randomly picked resource sound.
     *
     * Some use cases:
     * Example 1:
     *   Using just one AudioNode, an alternative to having multiple AudioNodes for different sounds
     *   playing from the same position(and orientation) but not at the same time(not overlapped).
     *   Just add (associate) multiple resources using this addResource(resID_n) API and call startSound(resID_n)
     *   different times with different resource IDs to play.
     *   NOTE: Intentionally not adding resource if not already added when startSound(resId_n)
     *       is called. This, is to avoid accidentally or easily associating too many resources
     *       which, has performance implications.
     *
     * Example 2:
     *   Randomly playing different sound(from set of already added resources) each time startSound() is called.
     *   This can be used to repeated sounds with slight variations for realism like, footsteps, breathing,
     *   bullets, etc.. In this case, associate slightly varying audio resources with the same AudioNode and call
     *   audioNode->statrtSound() with no arguments. It will play one randomly picked resource each time
     *   startSound() is called.
     *
     *
     * @param resourceID - Additional AudioResource ID to be associated with this AudioNode.
     *                     Calling addResource on same resource again is okay. The resource is added(associated)
     *                     only the first time.
     *
     * @return - true, if successful added or already associated.
     *           false, if the type of resource is not the same type of resource (LoadedFile
     *           or StreamedFile) as the one when AudioNode was initialized with the resource using
     *           createSoundWithXxxx API.
     *
     * NOTE: Associating many resources to one AudioNode will result in slight performance penalty.
     *       So, only associate multiple resources if necessary(eg. playing random sounds) and
     *       do not add resources to AudioNode which will be never used or used only once. If the resource
     *       is not going to be used any more, remove the association using removeResource() API.
     */
    addResource(resourceID: bigint /* uint64_t */): boolean

    /**
     * Removes or disassociates the specified resource from the AudioNode.
     * A valid AudioNode should have at least one resource associated with it. Hence, if the node has only
     * one resource it will not be removed and the method will return false.
     *
     * @return true, if resource successfully removed.
     *         false, if the node had only one resource in which case it cannot be removed.
     *                Or if the resource was not associated with the node.
     */
    removeResource(resourceID: bigint /* uint64_t */): boolean

    /**
     * Replaces the specified oldResourceID with the new one, newResourceID.
     * If only one resource associated with the node, then the oldResourceID
     * parameter is optional. In this case that resource will be replaced with the new one.
     *
     * @param newResourceID The new resource to be associated.
     * @param oldResourceID `default = INVALID_RESOURCE_ID`<br/> The old resource to be disassociated.
     *
     * @ return true, if the resource was successfully replaced.
     *          false, in the following scenarios:
     *                 1) If the specified old resource is not associated with the node.
     *                 2) If multiple resources are associated and oldResourceID argument not specified.
     *                 3) If this API called before any of the createSoundWithXxxx APIs were called.
     */
    replaceResource(newResourceID: bigint /* uint64_t */, oldResourceID?: bigint /* uint64_t */): boolean

    /**
     * Gets total number of resources associated with this AudioNode.
     *
     * @return Number of resources.
     */
    getNumResources(): number /* unsigned int */

    /**
     * Gets the list of already associated resource IDs
     *
     * @return std::vector of already associated resources.
     */
    getResources(): Array<bigint> /* std::vector<uint64_t> */

    /**
     * Plays either the only one resource sound associated with the node
     * or if more than one resources associated, picks any one of them randomly
     * - each time startSound() is called - and plays it.
     *
     * NOTE: If looping is enabled [setLooping(true)] and multiple resources associated,
     *       startSound() will indefinitely play random sequence of all the associated
     *       sound resources.
     *       If only one resource associated, will indefinitely play that one resource
     *       back to back.
     *       To stop playing, call stopSound().
     */
    startSound(): void

    /**
     * Plays the sound specified by the audio resource ID. The resource ID must be associated
     * prior to this API call.
     *
     * Intentionally not adding resource if not already added\associated with the node
     * to avoid accidentally or easily associating too many resources which, has slight
     * performance implications.
     *
     * NOTE: If looping is enabled [setLooping(true)] will indefinitely play the
     *       specified resource back to back.
     *       To stop playing, call stopSound().
     *
     * @param resId The resource sound to play.
     */
    startSound(resId: bigint /* uint64_t */): void

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
     * Plays the specified system sound.
     * By nature system sounds are expected to be of small duration like button_click etc...
     * and are of fire-and-forget style, that is, cannot be stopped, paused and such.
     * Usage:
     *   dialogBox_1->setLocalPosition(1.2, 0.0. -0.5);
     *   dialogBox_2->setLocalPosition(-0.7, 0.0. -0.5);
     *   AudioNode* audioNode =  prism->createAudioNode();
     *   audioNode->createSoundWithSystenEnum();
     *
     *   // Upon some event or a particular iteration of update loop.
     *   // To play sound from dialogBox_1's location:
     *   dialogBox_1->addChild(audioNode);
     *   audioNode->playSystemSound(SystemSoundEnum::kClose);
     *
     *   // Upon some other event or other iteration of update loop.
     *   // To play sound from dialogBox_2's location:
     *   dialogBox_2->addChild(audioNode);
     *   audioNode->playSystemSound(SystemSoundEnum::kClick);
     *
     *   // Upon yet other event or yet another iteration of update loop:
     *   // To play the sound from arbitrary location:
     *   rootNode->addChild(audioNode);
     *   audioNode->setLocalPosition(x,y,z);
     *   audioNode->playSystemSound(SystemSoundEnum::kAlert);
     *
     *   @param sysSound The system sound to be played.
     *
     *   @return Returns true if successful, else returns false.
     */
    playSystemSound(sysSound: SystemSoundEnum): boolean

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
     * @param volume - Range 0.0f to 8.0f
     */
    setSoundVolumeLinear(volume: number /* float */): void

    /**
     * Gets the current audio volume.
     *
     * @return - Reference to a float to output current value.
     */
    getSoundVolumeLinear(): number /* float */

    /**
     * Sets sound pitch.
     *
     *   The range of the pitch is 0.5 to 2.0, with 0.5 being one octave down
     *   and 2.0 being one octave up (i.e., the pitch is a frequency multiple).
     *   A pitch of 1.0 is the default and means no change.
     *
     * @param pitch - Pitch value to set. Range 0.5 t0 2.0
     */
    setSoundPitch(pitch: number /* float */): void

    /**
     * Get sound pitch.
     *
     * @return - Reference to a float to output current value.
     */
    getSoundPitch(): number /* float */

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
    setStreamedFileOffset(offsetMilliSec: number /* uint32_t */): void

    /**
     * Gets the currently set starting point for playback of a streamed-file sound.
     *
     * @return - Reference to uint32_t to output the current value of offset.
     */
    getStreamedFileOffset(): number /* uint32_t */

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
    static playSound(prism: Prism | null, sound: Sound | null): boolean

    /**
     * Fire and forget API.
     * Creates an AudioNode with the properties from the given Sound and sets a callback to destroy the node when it has finished playing.
     * @param prism Prism instance that the created node will belong to.
     * @param sound Sound instance that contains audio properties for the created AudioNode.
     * @param pos Position to set to the created AudioNode.
     * @return True if the audio node was successfully created, added to the scene and set to delete on play end.
     */
    static playSound(prism: Prism | null, sound: Sound | null, pos: [number, number, number] | Float32Array /* glm::vec3 */): boolean

    /**
     * Fire and forget API.
     * Creates an AudioNode with the properties from the given Sound and sets a callback to destroy the node when it has finished playing.
     * @param prism Prism instance that the created node will belong to.
     * @param soundName name of a Sound instance that contains audio properties for the created AudioNode.
     * @return True if the audio node was successfully created, added to the scene and set to delete on play end.
     */
    static playSound(prism: Prism | null, soundName: string): boolean

    /**
     * Fire and forget API.
     * Creates an AudioNode with the properties from the given Sound and sets a callback to destroy the node when it has finished playing.
     * @param prism Prism instance that the created node will belong to.
     * @param soundName name of a Sound instance that contains audio properties for the created AudioNode.
     * @param pos Position to set to the created AudioNode.
     * @return True if the audio node was successfully created, added to the scene and set to delete on play end.
     */
    static playSound(prism: Prism | null, soundName: string, pos: [number, number, number] | Float32Array /* glm::vec3 */): boolean

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
    setSpatialSoundPosition(channel: number /* uint32_t */, channelPosition: [number, number, number] | Float32Array /* glm::vec3 */): void

    /**
     *  Get position of the given audio channel. Position is relative to audio node's
     *  local position.
     *
     *  @param channel - Channel index(zero based).
     *  @return - A glm::vec3 which gets populated by the offset
     *               of channels position.
     */
    getSpatialSoundPosition(channel: number /* uint32_t */): [number, number, number] /* glm::vec3 */

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
    setSpatialSoundDirection(channel: number /* uint32_t */, channelDirection: [number, number, number, number] | Float32Array /* glm::quat */): void

    /**
     *  Get sound direction of a given audio channel.
     *  Direction is relative to audio node's local orientation.
     *
     *  @param channel - Channel index(zero based).
     *  @return - A quaternion (glm::quat) which gets populated by direction
     *               of the sound for the given channel.
     */
    getSpatialSoundDirection(channel: number /* uint32_t */): [number, number, number, number] /* glm::quat */

    /**
     *  Set spatial sound distance parameters for a given channel.
     *
     *  @param channel - Channel index(zero based).
     *  @param channelProperties - spatial sound distance parameters, See struct SpatialSoundDistanceProperties
     */
    setSpatialSoundDistanceProperties(channel: number /* uint32_t */, channelProperties: SpatialSoundDistanceProperties): void

    /**
     *  Get spatial sound distance parameters for a given channel.
     *
     *  @param channel - Channel index(zero based).
     *  @return - Reference to distance properties struct.
     *               See struct SpatialSoundDistanceProperties
     */
    getSpatialSoundDistanceProperties(channel: number /* uint32_t */): SpatialSoundDistanceProperties

    /**
     *  Set spatial sound radiation parameters for a given channel.
     *
     *  @param channel - Channel index(zero based).
     *  @param channelProperties - spatial sound radiation parameters, See struct SpatialSoundRadiationProperties
     */
    setSpatialSoundRadiationProperties(channel: number /* uint32_t */, channelProperties: SpatialSoundRadiationProperties): void

    /**
     *  Get spatial sound radiation parameters for a given channel.
     *
     *  @param channel - Channel index(zero based).
     *  @return - Reference to radiation properties struct.
     *               See struct SpatialSoundRadiationProperties
     */
    getSpatialSoundRadiationProperties(channel: number /* uint32_t */): SpatialSoundRadiationProperties

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
    setSpatialSoundDirectSendLevels(channel: number /* uint32_t */, channelSendlevels: SpatialSoundSendLevels): void

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
    getSpatialSoundDirectSendLevels(channel: number /* uint32_t */): SpatialSoundSendLevels

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
    setSpatialSoundRoomSendLevels(channel: number /* uint32_t */, channelSendLevels: SpatialSoundSendLevels): void

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
    getSpatialSoundRoomSendLevels(channel: number /* uint32_t */): SpatialSoundSendLevels

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

    /**
     * Starts capture for a sound input.
     * This method must be called before acquiring audio data in the buffer using getInputBuffer().
     *
     * @return true if successful. false on any failure.
     */
    startInput(): boolean

    /**
     * Stops capture on sound input.
     *
     * @return true if successful. false on any failure.
     */
    stopInput(): boolean

    /**
     * Releases the input audio buffer for reuse.
     *
     * After receiving a full buffer from getInputBuffer and
     * reading the audio data from that buffer, call this function to
     * indicate that the buffer has been read and can now be re-used.
     *
     * @param audioId MLHandle used to identify the sound input
     *
     * @return true if successful. false on any failure.
     */
    static ReleaseInputBuffer(audioId: bigint /* uint64_t */): boolean
  }
}

declare module 'lumin' {
  class Sound {
    constructor()

    /**
     * Returns a random resource ID from the list of resource, or INVALID_RESOURCE_ID if there are none.
     * @return A random resource ID from the list of resource, or INVALID_RESOURCE_ID if there are none.
     *
     * @priv none
     */
    resource(): bigint /* uint64_t */

    /**
     * Name property accessor.
     * @return The name property value.
     *
     * @priv none
     */
    name(): string

    /**
     * Resources property accessor.
     * @return The resources property value.
     *
     * @priv none
     */
    resources(): Array<bigint> /* std::vector<uint64_t> */

    /**
     * Stream property accessor. Signifies whether the audio resource should be streamed or not.
     * @return The stream property value.
     *
     * @priv none
     */
    stream(): boolean

    /**
     * Decode property accessor. Signifies whether the audio resource should be decoded or not.
     * @return The decode property value.
     *
     * @priv none
     */
    decode(): boolean

    /**
     * Volume property accessor.
     * @return The volume property value.
     *
     * @priv none
     */
    volume(): number /* float */

    /**
     * Pitch property accessor.
     * @return The pitch property value.
     *
     * @priv none
     */
    pitch(): number /* float */

    /**
     * Mute property accessor.
     * @return The mute property value.
     *
     * @priv none
     */
    mute(): boolean

    /**
     * Loop property accessor.
     * @return The loop property value.
     *
     * @priv none
     */
    loop(): boolean

    /**
     * Spatial property accessor.
     * @return The spatial property value.
     *
     * @priv none
     */
    spatial(): boolean

    /**
     * Name property accessor.
     * @param name The name property value.
     *
     * @priv none
     */
    setName(name: string): void

    /**
     * Resources property accessor.
     * @param resources The resources property value.
     *
     * @priv none
     */
    setResources(resources: Array<bigint> /* std::vector<uint64_t> */): void

    /**
     * Stream property accessor. Signifies whether the audio resource should be streamed or not.
     * @param stream The stream property value.
     *
     * @priv none
     */
    setStream(stream: boolean): void

    /**
     * Decode property accessor. Signifies whether the audio resource should be decoded or not.
     * @param decode The decode property value.
     *
     * @priv none
     */
    setDecode(decode: boolean): void

    /**
     * Volume property accessor.
     * @param volume The volume property value.
     *
     * @priv none
     */
    setVolume(volume: number /* float */): void

    /**
     * Pitch property accessor.
     * @param pitch The pitch property value.
     *
     * @priv none
     */
    setPitch(pitch: number /* float */): void

    /**
     * Mute property accessor.
     * @param mute The mute property value.
     *
     * @priv none
     */
    setMute(mute: boolean): void

    /**
     * Loop property accessor.
     * @param loop The loop property value.
     *
     * @priv none
     */
    setLoop(loop: boolean): void

    /**
     * Spatial property accessor.
     * @param spatial The spatial property value.
     *
     * @priv none
     */
    setSpatial(spatial: boolean): void
  }
}

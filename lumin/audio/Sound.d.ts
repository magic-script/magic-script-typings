declare module 'lumin' {
  class Sound {
    constructor()
    resource(): BigInt /* uint64_t */
    name(): string
    resources(): Array<BigInt /* uint64_t */> /* std::vector */
    stream(): boolean
    decode(): boolean
    volume(): number
    pitch(): number
    mute(): boolean
    loop(): boolean
    spatial(): boolean
    setName(name: string): void
    setResources(resources: Array<BigInt /* uint64_t */> /* std::vector */): void
    setStream(stream: boolean): void
    setDecode(decode: boolean): void
    setVolume(volume: number): void
    setPitch(pitch: number): void
    setMute(mute: boolean): void
    setLoop(loop: boolean): void
    setSpatial(spatial: boolean): void
  };
}

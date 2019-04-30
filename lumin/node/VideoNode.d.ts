declare module 'lumin' {
  class VideoNode extends QuadNode {
    constructor() {}
    getPlanarResourceId(): number
    setVideoPath(a_sFile: string): number
    setVideoUri(a_sUri: string): number
    setTimedTextPath(a_tFile: string): number
    seekTo(msec: number): number
    prepareAsync(): number
    start(): number
    stop(): number
    reset(): number
    pause(): number
    setLooping(loop: number): number
    isLooping(): boolean
    setVolume(volume: number): number
    isPlaying(): boolean
    selectTrack(index: number): number
    unSelectTrack(index: number): number
  };
}

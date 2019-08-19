declare module 'lumin' {
  class ExclusiveRender {
    constructor()
    beginFrame(params: ExclusiveRender.FrameParams, outFrameHandle: ExclusiveRender.FrameInfo): number
    endFrame(frame: ExclusiveRender.FrameInfo, signalComplete: boolean = 0 /* 0 is not the actual default value */): number
    setFrameTimingHint(timing: ExclusiveRender.FrameTimingHint): number
    signalRenderComplete(frame: ExclusiveRender.FrameInfo, camIdx: number): number
  };
  enum Format {
    None,
    RGBA8UNorm,
    RGBA8UNormSRGB,
    D24NormS8,
    D32Float,
  }
  class FrameParams {
    constructor()
    nearClip: number;
    farClip: number;
    focusDistance: number;
    stabilizationDepth: number;
    surfaceScale: number;
  };
  class ClientOptions {
    constructor()
    colorFormat: ExclusiveRender.Format;
    depthFormat: ExclusiveRender.Format;
    noDepth: boolean;
  };
  class FrameInfo {
    constructor()
    getNumCameras(): number
    getView(idx: number): [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] /* glm::mat4 */
    getProj(idx: number): [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] /* glm::mat4 */
    getColorId(): number
    getDepthId(): number
    getViewPortLowerLeft(): [number, number] /* glm::vec2 */
    getViewPortSize(): [number, number] /* glm::vec2 */
  };
  enum FrameTimingHint {
    kNone,
    k60Hz,
    k120Hz,
    kMaxFps,
  }
}

declare module 'lumin' {

  /**
   * ExclusiveRender
   */
  class ExclusiveRender {
    constructor()
    beginFrame(params: ExclusiveRender.FrameParams, outFrameHandle: ExclusiveRender.FrameInfo): number
    endFrame(frame: ExclusiveRender.FrameInfo, signalComplete: boolean = 0 /* 0 is not the actual default value */): number
    setFrameTimingHint(timing: ExclusiveRender.FrameTimingHint): number
    signalRenderComplete(frame: ExclusiveRender.FrameInfo, camIdx: number): number
  };
  enum Format {
    None,

    /**
     * color formats
     */
    RGBA8UNorm,
    RGBA8UNormSRGB,

    /**
     * depth formats
     */
    D24NormS8,
    D32Float,
  }

  /**
   * FrameParams
   */
  class FrameParams {
    constructor()

    /** Requested near clip plane distance in meters. */
    nearClip: number;

    /** Far clipping plane distance in meters. */
    farClip: number;

    /**
      Distance, in meters, to defined focus point for the client content. The focus
      distance should be calculated as the positive distance to the client determined
      object of interest (relative to the forward vector of the Lightwear).
    */
    focusDistance: number;

    /**
      Depth, in meters, for which to optimize content stabilization for time warp.
      Stabilization depth should be calculated as the positive depth of content to be
      most stable under time warp (relative to the forward vector of the Lightwear).

      This value should be set between focus_distance and far_clip. It usually provides a better
      experience not having content farther than this distance, so a value close to the far clip
      is recommended. The best value will depend on the actual depth distribution of content.
    */
    stabilizationDepth: number;

    /**
      The scale factor for the render surfaces, valid range is 0.0->1.0. When
      supplying a scale factor < 1.0 the viewport returned from #MLGraphicsBeginFrame
      will be adjusted to the closest width/height match to the request that can
      be supported by the graphics system.
    */
    surfaceScale: number;
  };

  /**
   * ClientOptions
   */
  class ClientOptions {
    constructor()

    /**
    * Color buffer format
    */
    colorFormat: ExclusiveRender.Format;

    /**
    * Depth buffer format
    */
    depthFormat: ExclusiveRender.Format;

    /**
    * Create depth buffer or not
    */
    noDepth: boolean;
  };

  /**
   * FrameInfo for each frame
   */
  class FrameInfo {
    constructor()

    /**
    * Get the number of cameras
    *
    *@return number of cameras
    */
    getNumCameras(): number

    /**
    * Get the view matrix for a given eye
    *
    *@param idx index of the eye
    *@return the view matrix
    */
    getView(idx: number): [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] /* glm::mat4 */

    /**
    * Get the projection matrix for a given eye
    *
    *@param idx index of the eye
    *@return the projection matrix
    */
    getProj(idx: number): [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] /* glm::mat4 */

    /**
    * Get color buffer ID
    *
    *@return color buffer ID
    */
    getColorId(): number

    /**
    * Get depth buffer ID
    *
    *@return depth buffer ID
    */
    getDepthId(): number

    /**
    * Get viewport top left corner
    *
    *@return top left corner coordinates
    */
    getViewPortLowerLeft(): [number, number] /* glm::vec2 */

    /**
    * Get viewport size
    *
    *@return viewport size in pixels
    */
    getViewPortSize(): [number, number] /* glm::vec2 */
  };

  /**
   * FrameTimingHint
   */
  enum FrameTimingHint {
    kNone,
    k60Hz,
    k120Hz,
    kMaxFps,
  }
}

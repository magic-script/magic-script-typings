declare module 'lumin' {
  namespace utils {
  }
  class RenderNode extends TransformNode {
    setColor(a_color: [number, number, number, number] /* glm::vec4 */): void
    getColor(): [number, number, number, number] /* glm::vec4 */
    setShader(a_shaderType: utils.ShaderType): void
    getShader(): utils.ShaderType
    setIsOpaque(a_on: boolean, a_renderStateIndex: number = 0 /* 0 is not the actual default value */): void
    setIsUI(a_on: boolean, a_renderStateIndex: number = 0 /* 0 is not the actual default value */): void
    setPushesStencil(a_on: boolean, a_renderStateIndex: number = 0 /* 0 is not the actual default value */): void
    setWritesStencil(a_on: boolean, a_renderStateIndex: number = 0 /* 0 is not the actual default value */): void
    setReadsDepth(a_on: boolean, a_renderStateIndex: number = 0 /* 0 is not the actual default value */): void
    setWritesDepth(a_on: boolean, a_renderStateIndex: number = 0 /* 0 is not the actual default value */): void
    setWritesColor(a_on: boolean, a_renderStateIndex: number = 0 /* 0 is not the actual default value */): void
    setReadsClip(a_on: boolean, a_renderStateIndex: number = 0 /* 0 is not the actual default value */): void
    setBackFaceCulls(a_on: boolean, a_renderStateIndex: number = 0 /* 0 is not the actual default value */): void
    setFrontFaceCulls(a_on: boolean, a_renderStateIndex: number = 0 /* 0 is not the actual default value */): void
    setReceivesLight(a_on: boolean, a_renderStateIndex: number = 0 /* 0 is not the actual default value */): void
    setBlooms(a_on: boolean, a_renderStateIndex: number = 0 /* 0 is not the actual default value */): void
    setCastsShadows(a_on: boolean, a_renderStateIndex: number = 0 /* 0 is not the actual default value */): void
    setReceivesShadows(a_on: boolean, a_renderStateIndex: number = 0 /* 0 is not the actual default value */): void
    setDrmContent(a_on: boolean): void
    isDrmContent(): boolean
    enableVisualState(value: boolean): void
    setRenderingLayer(a_renderLayer: render.RenderingLayer): void
    setRenderingLayer(a_renderLayer: number): void
    getRenderingLayer(): number
    setBloomStrength(a_bloomStrength: number): void
  };
}

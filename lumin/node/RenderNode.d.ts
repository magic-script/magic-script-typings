declare module 'lumin' {
  namespace utils {
  }

  /**
   * RenderNode - An abstract class representing a renderable object. Any node that renders a model or quad
   * should derive from this.
   */
  class RenderNode extends TransformNode {

    /**
     * Sets the color to be used for every sub mesh within the render node.
     *
     * @param a_color The color to be used for every sub mesh within the render node.
     *
     * @priv none
     */
    setColor(a_color: [number, number, number, number] | Float32Array /* glm::vec4 */): void

    /**
     * Get the custom color, which is by default white: { 1, 1, 1, 1 }.
     *
     * @return The color.
     *
     * @priv none
     */
    getColor(): [number, number, number, number] /* glm::vec4 */

    /**
     * Sets the shader to be used for every sub mesh within the model.
     *
     * @param a_shaderType The shader type to be used for every sub mesh within the model.
     *
     * @priv none
     */
    setShader(a_shaderType: utils.ShaderType): void

    /**
     * Returns shader type that is currently used
     *
     * @priv none
     */
    getShader(): utils.ShaderType

    /**
     * Sets the opacity setting for one or more render states.
     *
     * @param a_on The desired flag setting.
     * @param a_renderStateIndex `default = -1`<br/> The index of the corresponding render state whose
     *                           flag will be changed.  Note that the default value
     *                           will cause all states to have the required setting.
     *
     * @priv none
     */
    setIsOpaque(a_on: boolean, a_renderStateIndex?: number /* std::ptrdiff_t */): void

    /**
     * Sets if this should be rendered on the UI Layer.
     * Note: UI Layer is always rendered on top of everything else.
     *
     * @param a_on The desired flag setting.
     * @param a_renderStateIndex `default = -1`<br/> The index of the corresponding render state whose
     *                           flag will be changed.  Note that the default value
     *                           will cause all states to have the required setting.
     *
     * @priv none
     */
    setIsUI(a_on: boolean, a_renderStateIndex?: number /* std::ptrdiff_t */): void

    /**
     * Sets the stencil push setting for one or more render states.
     *
     * @param a_on The desired flag setting.
     * @param a_renderStateIndex `default = -1`<br/> The index of the corresponding render state whose
     *                           flag will be changed.  Note that the default value
     *                           will cause all states to have the required setting.
     *
     * @priv none
     */
    setPushesStencil(a_on: boolean, a_renderStateIndex?: number /* std::ptrdiff_t */): void

    /**
     * Sets the stencil write setting for one or more render states.
     *
     * @param a_on The desired flag setting.
     * @param a_renderStateIndex `default = -1`<br/> The index of the corresponding render state whose
     *                           flag will be changed.  Note that the default value
     *                           will cause all states to have the required setting.
     *
     * @priv none
     */
    setWritesStencil(a_on: boolean, a_renderStateIndex?: number /* std::ptrdiff_t */): void

    /**
     * Sets the depth read setting for one or more render states.
     *
     * @param a_on The desired flag setting.
     * @param a_renderStateIndex `default = -1`<br/> The index of the corresponding render state whose
     *                           flag will be changed.  Note that the default value
     *                           will cause all states to have the required setting.
     *
     * @priv none
     */
    setReadsDepth(a_on: boolean, a_renderStateIndex?: number /* std::ptrdiff_t */): void

    /**
     * Sets the depth write setting for one or more render states.
     *
     * @param a_on The desired flag setting.
     * @param a_renderStateIndex `default = -1`<br/> The index of the corresponding render state whose
     *                           flag will be changed.  Note that the default value
     *                           will cause all states to have the required setting.
     *
     * @priv none
     */
    setWritesDepth(a_on: boolean, a_renderStateIndex?: number /* std::ptrdiff_t */): void

    /**
     * Sets the color write setting for one or more render states.
     *
     * @param a_on The desired flag setting.
     * @param a_renderStateIndex `default = -1`<br/> The index of the corresponding render state whose
     *                           flag will be changed.  Note that the default value
     *                           will cause all states to have the required setting.
     *
     * @priv none
     */
    setWritesColor(a_on: boolean, a_renderStateIndex?: number /* std::ptrdiff_t */): void

    /**
     * Sets the clip read setting for one or more render states.
     *
     * @param a_on The desired flag setting.
     * @param a_renderStateIndex `default = -1`<br/> The index of the corresponding render state whose
     *                           flag will be changed.  Note that the default value
     *                           will cause all states to have the required setting.
     *
     * @priv none
     */
    setReadsClip(a_on: boolean, a_renderStateIndex?: number /* std::ptrdiff_t */): void

    /**
     * Sets the back-face-cull setting for one or more render states.
     *
     * @param a_on The desired flag setting.
     * @param a_renderStateIndex `default = -1`<br/> The index of the corresponding render state whose
     *                           flag will be changed.  Note that the default value
     *                           will cause all states to have the required setting.
     *
     * @priv none
     */
    setBackFaceCulls(a_on: boolean, a_renderStateIndex?: number /* std::ptrdiff_t */): void

    /**
     * Sets the front-face-cull setting for one or more render states.
     *
     * @param a_on The desired flag setting.
     * @param a_renderStateIndex `default = -1`<br/> The index of the corresponding render state whose
     *                           flag will be changed.  Note that the default value
     *                           will cause all states to have the required setting.
     *
     * @priv none
     */
    setFrontFaceCulls(a_on: boolean, a_renderStateIndex?: number /* std::ptrdiff_t */): void

    /**
     * Flags whether or not the indicated render state will receive light.
     *
     * @param a_on The desired flag setting.
     * @param a_renderStateIndex `default = -1`<br/> The index of the corresponding render state whose
     *                           flag will be changed.  Note that the default value
     *                           will cause all states to have the required setting.
     *
     * @priv none
     */
    setReceivesLight(a_on: boolean, a_renderStateIndex?: number /* std::ptrdiff_t */): void

    /**
     * Flags whether or not the indicated render state will bloom
     *
     * @param a_on The desired flag setting.
     * @param a_renderStateIndex `default = -1`<br/> The index of the corresponding render state whose
     *                           flag will be changed.  Note that the default value
     *                           will cause all states to have the required setting.
     *
     * @priv none
     */
    setBlooms(a_on: boolean, a_renderStateIndex?: number /* std::ptrdiff_t */): void

    /**
     * Flags whether or not the indicated render state will cast shadows.
     *
     * @param a_on The desired flag setting.
     * @param a_renderStateIndex `default = -1`<br/> The index of the corresponding render state whose
     *                           flag will be changed.  Note that the default value
     *                           will cause all states to have the required setting.
     *
     * @priv none
     */
    setCastsShadows(a_on: boolean, a_renderStateIndex?: number /* std::ptrdiff_t */): void

    /**
     * Flags whether or not the indicated render state will receive shadows.
     *
     * @param a_on The desired flag setting.
     * @param a_renderStateIndex `default = -1`<br/> The index of the corresponding render state whose
     *                           flag will be changed.  Note that the default value
     *                           will cause all states to have the required setting.
     *
     * @priv none
     */
    setReceivesShadows(a_on: boolean, a_renderStateIndex?: number /* std::ptrdiff_t */): void

    /**
     * Flags If this renderable node is using DRM Content
     *
     * NOTE: This API is only used for QuadNodes and VideoNodes. In future release,
     * this API will moved to the former mentioned nodes headers. And RenderNode API
     * will be deprecated.
     *
     * @param a_on The desired flag setting.
     * @priv none
     */
    setDrmContent(a_on: boolean): void

    /**
     * Check if this Render Node is marked for DRM
     *
     * NOTE: This API is only used for QuadNodes and VideoNodes. In future release,
     * this API will moved to the former mentioned nodes headers. And RenderNode API
     * will be deprecated.
     *
     * @return True = Marked as DRM Content
     * @priv none
     */
    isDrmContent(): boolean

    /**
     * Enable//Disable the Prism Visual state changes
     *
     * @param value - Enable/Disable the state changing
     *
     * @priv none
     */
    enableVisualState(value: boolean): void

    /**
     * Set Custom RenderLayer on which this renderNode will be rendered.
     *
     * @param a_renderLayer - Of type uint16_t. Value will be clamped to kRenderingLayerMAX = 999, if more.
     *
     * Note: Please use, "render::RenderingLayer" enum to set layers.
     * for eg. RenderNode->setRenderingLayer(render::RenderingLayer::kHUDLayer);
     * or you can also send in the layer value as well
     * eg.     RenderNode->setRenderingLayer(static_cast<uint16_t>(render::RenderingLayer::kHUDLayer));
     *
     * You can also create your own custom layering by using existing layers and your own.
     * eg. uint16_t customHUDLayer1 = static_cast<uint16_t>(render::RenderingLayer::kHUDLayer) + 1;
     *     uint16_t customHUDLayer2 = static_cast<uint16_t>(render::RenderingLayer::kHUDLayer) + 2;
     *     uint16_t customHUDLayer3 = static_cast<uint16_t>(render::RenderingLayer::kHUDLayer) + 3;
     *
     * @priv none
     */
    setRenderingLayer(a_renderLayer: render.RenderingLayer): void

    /**
     * @priv none
     */
    setRenderingLayer(a_renderLayer: number /* uint16_t */): void

    /**
     * Get the rendering layer of this node.
     *
     * @return: the uint16_t value of the layer.
     *
     * @priv none
     */
    getRenderingLayer(): number /* uint16_t */

    /**
     * Set Bloom strength for this Render Node. If a material exists, the material bloom
     * will superseed this value. By Default the Bloom Strength is 0 for this node.
     *
     * @param a_bloomStrength - the Bloom Strength
     */
    setBloomStrength(a_bloomStrength: number /* float */): void
  }
}

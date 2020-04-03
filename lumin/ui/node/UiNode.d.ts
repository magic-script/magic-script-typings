declare module 'lumin' {
  namespace ui {

    /** Where to snap the cursor due to gravity wells. */
    enum GravityWellSnap {

      /**
       * The cursor snaps to the closest edge of the element.
       */
      kClosestEdge,

      /**
       * The cursor snaps to just inside the closet edge of the element.
       */
      kClosestInsideEdge,

      /**
       * The cursor snaps to inside the element horizontal center.
       */
      kCenterX,

      /**
       * The cursor snaps to inside the element vertical center.
       */
      kCenterY,
      kCenter,
    }

    /** UiNode gravity well properties. */
    class GravityWellProperties {

      /**
       * The boundary shape for the gravity well.
       */
      getShape(): ui.BoundaryShape

      /**
       * Where to snap the cursor to for this element.
       */
      getSnap(): ui.GravityWellSnap

      /**
       * If the cursor should snap if already inside the shape.
       */
      getInternalSnap(): boolean
      constructor(a_shape: ui.BoundaryShape, a_snap?: ui.GravityWellSnap, a_internalSnap?: boolean)
    }

    /** Structure to hold UiNode response to being activated (clicked). */
    class OnActivateResponse {

      /**
       * @priv none
       */
      getFocusRequest(): ui.OnActivateResponse.FocusRequest
      constructor(focusRequest?: ui.OnActivateResponse.FocusRequest)
    }
    namespace OnActivateResponse {

      /** Focus request for UiNodes being activated. */
      enum FocusRequest {

        /**
         * UiNode does not need focus (default).
         */
        kNone,

        /**
         * UiNode requests to gain focus.
         */
        kGainFocus,
        kLoseFocus,
      }
    }

    /**
     * UiEventData - Structure to hold general UI event details.
     *
     * The data relevancy depends on the Event it is sent with.
     */
    class UiEventData {
      constructor()

      /**
       * @priv none
       */
      getUiNode(): ui.UiNode | null
    }

    /**
     * UiNode - Base class of all 3D UI elements.
     */
    class UiNode extends TransformNode {

      /**
       * Creates a new UiNode.
       *
       * @param prism The prism to create this node for.
       * @return New UiNode on success; nullptr on failure.
       *
       * @priv none
       */
      // For now, manually disable this since it breaks typescript.
      //static Create(prism: Prism | null): ui.UiNode | null

      /**
       * Requests focus for a UiNode.
       *
       * @param pUiNode Pointer to the UiNode that needs focus.
       *
       * @priv none
       */
      static RequestFocus(pUiNode: ui.UiNode | null): void

      /**
       * The on hover enter Event.
       *
       * This event is dispatched when the cursor starts hovering over the UiNode.
       *
       * @priv none
       */
      onHoverEnterSub(callback: ((arg0: ui.UiEventData) => void) | null /* std::function<void(UiEventData)> */): utils.CallbackID
      onHoverEnterUnsub(callbackID: utils.CallbackID): boolean

      /**
       * The on hover exit Event.
       *
       * This event is dispatched when the cursor stops hovering over the UiNode.
       *
       * @priv none
       */
      onHoverExitSub(callback: ((arg0: ui.UiEventData) => void) | null /* std::function<void(UiEventData)> */): utils.CallbackID
      onHoverExitUnsub(callbackID: utils.CallbackID): boolean

      /**
       * The on hover move Event.
       *
       * This event is dispatched when the cursor is hovering over the UiNode.
       *
       * @priv none
       */
      onHoverMoveSub(callback: ((arg0: ui.UiEventData, arg1: [number, number, number] | Float32Array) => void) | null /* std::function<void(UiEventData,glm::vec3)> */): utils.CallbackID
      onHoverMoveUnsub(callbackID: utils.CallbackID): boolean

      /**
       * The on click Event.
       *
       * This event is dispatched when the element has been activated (clicked, selected).
       *
       * @priv none
       */
      onActivateSub(callback: ((arg0: ui.UiEventData) => void) | null /* std::function<void(UiEventData)> */): utils.CallbackID
      onActivateUnsub(callbackID: utils.CallbackID): boolean

      /**
       * The on long press Event.
       *
       * This event is dispatched when the element has been held down on.
       *
       * @priv none
       */
      onLongPressSub(callback: ((arg0: ui.UiEventData) => void) | null /* std::function<void(UiEventData)> */): utils.CallbackID
      onLongPressUnsub(callbackID: utils.CallbackID): boolean

      /**
       * The on enabled Event.
       *
       * This event is dispatched when the element has been enabled.
       *
       * @priv none
       */
      onEnabledSub(callback: ((arg0: ui.UiEventData) => void) | null /* std::function<void(UiEventData)> */): utils.CallbackID
      onEnabledUnsub(callbackID: utils.CallbackID): boolean

      /**
       * The on disabled Event.
       *
       * This event is dispatched when the element has been disabled.
       *
       * @priv none
       */
      onDisabledSub(callback: ((arg0: ui.UiEventData) => void) | null /* std::function<void(UiEventData)> */): utils.CallbackID
      onDisabledUnsub(callbackID: utils.CallbackID): boolean

      /**
       * The on focus gained Event.
       *
       * This event is dispatched when the element has gained focus.
       *
       * @priv none
       */
      onFocusGainedSub(callback: ((arg0: ui.UiEventData) => void) | null /* std::function<void(UiEventData)> */): utils.CallbackID
      onFocusGainedUnsub(callbackID: utils.CallbackID): boolean

      /**
       * The on focus lost Event.
       *
       * This event is dispatched when the element has lost focus.
       *
       * @priv none
       */
      onFocusLostSub(callback: ((arg0: ui.UiEventData) => void) | null /* std::function<void(UiEventData)> */): utils.CallbackID
      onFocusLostUnsub(callbackID: utils.CallbackID): boolean

      /**
       * The on focus input Event.
       *
       * This event is dispatched when the focused element should process input.
       *
       * @priv none
       */
      onFocusInputSub(callback: ((arg0: ui.UiEventData, arg1: InputEventData) => void) | null /* std::function<void(UiEventData,InputEventData)> */): utils.CallbackID
      onFocusInputUnsub(callbackID: utils.CallbackID): boolean

      /**
       * The on update Event.
       *
       * This event is dispatched during element update.
       *
       * @priv none
       */
      onUpdateSub(callback: ((arg0: ui.UiEventData, arg1: number) => void) | null /* std::function<void(UiEventData, float)> */): utils.CallbackID
      onUpdateUnsub(callbackID: utils.CallbackID): boolean

      /**
       * The on deleted Event.
       *
       * This event is dispatched when the element is about to be deleted.
       *
       * @priv none
       */
      onDeletedSub(callback: ((arg0: ui.UiEventData) => void) | null /* std::function<void(UiEventData)> */): utils.CallbackID
      onDeletedUnsub(callbackID: utils.CallbackID): boolean

      /**
       * The on pressed Event.
       *
       * This event is dispatched when the element is pressed.
       *
       * @priv none
       */
      onPressedSub(callback: ((arg0: ui.UiEventData) => void) | null /* std::function<void(UiEventData)> */): utils.CallbackID
      onPressedUnsub(callbackID: utils.CallbackID): boolean

      /**
       * The on released Event.
       *
       * This event is dispatched when the element is released (after being pressed).
       *
       * @priv none
       */
      onReleasedSub(callback: ((arg0: ui.UiEventData) => void) | null /* std::function<void(UiEventData)> */): utils.CallbackID
      onReleasedUnsub(callbackID: utils.CallbackID): boolean

      /**
       * Sets the gravity well properties for this UiNode.
       *
       * The default gravity well properties for a UiNode are a sharp cornered rectangular
       * BoundaryShape that matches the UiNode's local AABB that snaps to center of the shape.
       * This should be sufficient in many situations and all that needs to be done to
       * turn on the gravity well for the UiNode is to setGravityWellEnabled(true).
       *
       * The default BoundaryShape size is (0,0), which instructs the UiNode to use its
       * own local AABB for the shape size and offset.  Setting a size greater than 0 in
       * either X or Y will turn off the automatic use of local AABB and will use the specified
       * size and offset of the BoundaryShape instead.  Setting the size back to (0,0) will once
       * again inform the UiNode to use the local AABB for shape parameters.
       *
       * @param properties the GravityWellProperties.
       *
       * @priv none
       */
      setGravityWellProperties(properties: ui.GravityWellProperties): void

      /**
       * Gets the gravity well properties for this UiNode.
       *
       * @return the GravityWellProperties.
       *
       * @priv none
       */
      getGravityWellProperties(): ui.GravityWellProperties

      /**
       * Sets whether the gravity well is enabled.
       *
       * @priv none
       */
      setGravityWellEnabled(enabled: boolean): void

      /**
       * Gets whether the gravity well is enabled.
       *
       * @priv none
       */
      getGravityWellEnabled(): boolean

      /**
       * Return whether or not this node, and its children, should be included in the bounds
       *
       * @return bounds hidden or not
       */
      getHideBounds(): boolean

      /**
       * Set whether or not this node, and its children, should be included in the bounds
       *
       * @param hide - flag indicating hide status
       *
       */
      setHideBounds(hide: boolean): void

      /**
       * Sets the UiNodes's self alignment relative to Node position.
       *
       * Alignment is defined as what side the Node position
       * is in relative to the planar, XY element bounds.  A horizontal
       * left alignment would result in the node position being on the
       * left side of the bounds area.  A vertical top alignment would
       * result in the node position being on the top side of the
       * bounds area.
       *
       * @param alignment The alignment.
       *
       * @priv none
       */
      setAlignment(alignment: ui.Alignment): void

      /**
       * Gets the UiNode's self alignment relative to Node position.
       *
       * @return The alignment.
       *
       * @priv none
       */
      getAlignment(): ui.Alignment

      /**
       * Sets the enabled state
       *
       * Disabled UiNodes don't send out certain input events,
       * such as OnPress, OnRelease, OnActivate, etc.
       *
       * @param enabled The enabled state of the UiNode.
       *
       * @priv none
       */
      setEnabled(enabled: boolean): void

      /** Gets the enabled state
       *
       * @return the enabled state of the UiNode.
       *
       * @priv none
       */
      getEnabled(): boolean

      /** Gets the focus state
       *
       * @return the focus state of the UiNode.
       *
       * @priv none
       */
      getFocused(): boolean

      /** Gets the hover state
       *
       * @return the hover state of the UiNode.
       *
       * @priv none
       */
      getHovered(): boolean

      /**
       * Updates the UiNode layout based on current component attributes.
       *
       * @priv none
       */
      updateLayout(): void

      /**
       * Sets the OnActivateResponse properties of this UiNode.
       *
       * @param activateResponse the OnActivateResponse.
       *
       * @priv none
       */
      setOnActivateResponse(activateResponse: ui.OnActivateResponse): void

      /**
       * Gets the OnActivateResponse properties of this UiNode.
       *
       * @priv none
       */
      getOnActivateResponse(): ui.OnActivateResponse

      /**
       * Sets whether this UiNode passes events through to the next UiNode
       * parent or processes them internally.
       *
       * The UI events that will be passed through are the cursor interaction
       * events like onHoverEnter, onHoverExit, and onActivate.
       *
       * @param passThrough the event pass through flag.
       *
       * @priv none
       */
      setEventPassThrough(passThrough: boolean): void

      /**
       * Gets whether this UiNode passes events through or not.
       *
       * @return TRUE if pass through set, FALSE if not.
       *
       * @priv none
       */
      getEventPassThrough(): boolean

      /**
       * Sets all descendant UiNodes to either pass through events or
       * not.
       *
       * This call is handy if this UiNode potentially has many internal
       * UiNode children in the Node hierarchy but wants all input
       * events to pass through them to be processed and dispatched
       * by this UiNode parent.
       *
       * @param passThrough the event pass through flag.
       *
       * @priv none
       */
      setEventPassThroughChildren(passThrough: boolean): void

      /**
       * Sets the sound ID to be played for the UI event.
       *
       * @param event the sound event.
       * @param nameID the name of the sound to play for the sound event.
       *
       * @priv none
       */
      setEventSoundID(event: ui.SoundEvent, nameID: string): void

      /**
       * Gets the sound ID to be played for the UI event.
       *
       * @param event the sound event.
       * @return the name of the sound to play for the sound event.
       *
       * @priv none
       */
      getEventSoundID(event: ui.SoundEvent): string

      /**
       * Gets the Sound for the specified event, if set.  If no sound ID set for
       * the specified event, nullptr will be returned.
       *
       * @param event The sound event to get the Sound for.
       * @return Pointer to the Sound object associated with the sound ID for the event or nullptr if no sound set.
       *
       * @priv none
       */
      getEventSound(event: ui.SoundEvent): Sound | null

      /**
       * Clears the sound for the specifiec event.
       *
       * @param event The sound event to clear.
       *
       * @priv none
       */
      clearEventSound(event: ui.SoundEvent): void

      /**
       * Clears all event sounds.
       *
       * @priv none
       */
      clearAllEventSounds(): void

      /**
       * Sets Custom RenderLayer on this UiNode. Which internally sets the render layer
       * on all RenderNode Children
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
       * Sets Custom RenderLayer on this UiNode. Which internally sets the render layer
       * on all RenderNode Children
       *
       * @param a_renderLayer - Of type uint16_t. Value will be clamped to kRenderingLayerMAX = 999, if more.
       *
       * @priv none
       */
      setRenderingLayer(a_renderLayer: number /* uint16_t */): void

      /**
       * Gets the rendering layer of this UiNode.
       *
       * @return: the uint16_t value of the layer.
       *
       * @priv none
       */
      getRenderingLayer(): number /* uint16_t */
    }
  }
}

declare module 'lumin' {
  namespace ui {
    enum GravityWellSnap {
      kClosestEdge,
      kClosestInsideEdge,
      kCenterX,
      kCenterY,
      kCenter,
    }
    class GravityWellProperties {
      getShape(): ui.BoundaryShape
      getSnap(): ui.GravityWellSnap
      getInternalSnap(): boolean
      constructor(a_shape: ui.BoundaryShape, a_snap: ui.GravityWellSnap = 0 /* 0 is not the actual default value */, a_internalSnap: boolean = 0 /* 0 is not the actual default value */)
    };
    class OnActivateResponse {
      getFocusRequest(): ui.OnActivateResponse.FocusRequest
      constructor(focusRequest: ui.OnActivateResponse.FocusRequest = 0 /* 0 is not the actual default value */)
    };
    enum FocusRequest {
      kNone,
      kGainFocus,
      kLoseFocus,
    }
    class UiEventData {
      constructor() {}
      getUiNode(): ui.UiNode
    };
    class UiNode extends TransformNode {
      static Create(prism: Prism): ui.UiNode
      static RequestFocus(pUiNode: ui.UiNode): void
      onHoverEnterSub(callback: callable): utils.CallbackID
      onHoverEnterUnsub(callbackID: utils.CallbackID): boolean
      onHoverExitSub(callback: callable): utils.CallbackID
      onHoverExitUnsub(callbackID: utils.CallbackID): boolean
      onHoverMoveSub(callback: callable): utils.CallbackID
      onHoverMoveUnsub(callbackID: utils.CallbackID): boolean
      onActivateSub(callback: callable): utils.CallbackID
      onActivateUnsub(callbackID: utils.CallbackID): boolean
      onLongPressSub(callback: callable): utils.CallbackID
      onLongPressUnsub(callbackID: utils.CallbackID): boolean
      onEnabledSub(callback: callable): utils.CallbackID
      onEnabledUnsub(callbackID: utils.CallbackID): boolean
      onDisabledSub(callback: callable): utils.CallbackID
      onDisabledUnsub(callbackID: utils.CallbackID): boolean
      onFocusGainedSub(callback: callable): utils.CallbackID
      onFocusGainedUnsub(callbackID: utils.CallbackID): boolean
      onFocusLostSub(callback: callable): utils.CallbackID
      onFocusLostUnsub(callbackID: utils.CallbackID): boolean
      onFocusInputSub(callback: callable): utils.CallbackID
      onFocusInputUnsub(callbackID: utils.CallbackID): boolean
      onUpdateSub(callback: callable): utils.CallbackID
      onUpdateUnsub(callbackID: utils.CallbackID): boolean
      onDeletedSub(callback: callable): utils.CallbackID
      onDeletedUnsub(callbackID: utils.CallbackID): boolean
      onPressedSub(callback: callable): utils.CallbackID
      onPressedUnsub(callbackID: utils.CallbackID): boolean
      onReleasedSub(callback: callable): utils.CallbackID
      onReleasedUnsub(callbackID: utils.CallbackID): boolean
      setGravityWellProperties(properties: ui.GravityWellProperties): void
      getGravityWellProperties(): ui.GravityWellProperties
      setGravityWellEnabled(enabled: boolean): void
      getGravityWellEnabled(): boolean
      getHideBounds(): boolean
      setHideBounds(hide: boolean): void
      setAlignment(alignment: ui.Alignment): void
      getAlignment(): ui.Alignment
      setEnabled(enabled: boolean): void
      getEnabled(): boolean
      getFocused(): boolean
      getHovered(): boolean
      updateLayout(): void
      setOnActivateResponse(activateResponse: ui.OnActivateResponse): void
      getOnActivateResponse(): ui.OnActivateResponse
      setEventPassThrough(passThrough: boolean): void
      getEventPassThrough(): boolean
      setEventPassThroughChildren(passThrough: boolean): void
      setEventSoundID(event: ui.SoundEvent, nameID: string): void
      getEventSoundID(event: ui.SoundEvent): string
      getEventSound(event: ui.SoundEvent): Sound
      clearEventSound(event: ui.SoundEvent): void
      clearAllEventSounds(): void
      setRenderingLayer(a_renderLayer: render.RenderingLayer): void
      setRenderingLayer(a_renderLayer: number): void
      getRenderingLayer(): number
    };
  }
}

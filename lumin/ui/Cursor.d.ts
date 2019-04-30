declare module 'lumin' {
  namespace ui {
    class Cursor {
      constructor() {}
      static SetStartupPosition(prism: Prism, position: [number, number] /* glm::vec2 */): void
      static GetPosition(prism: Prism): [number, number, number] /* glm::vec3 */
      static IsEnabled(prism: Prism): boolean
      static SetEnabled(prism: Prism, a_enabled: boolean): void
      static GetScale(prism: Prism): number
      static SetScale(prism: Prism, a_scale: number): void
      static GetMoveRate(prism: Prism): number
      static SetMoveRate(prism: Prism, a_rate: number): void
      static GetPlaneDepth(prism: Prism): number
      static SetPlaneDepth(prism: Prism, a_depth: number): void
      static ResetDefaults(prism: Prism): void
      static TransitionToPanel(prism: Prism, panel: ui.UiPanel): void
      static SetState(prism: Prism, cursorState: CursorHoverState): void
      static GetState(prism: Prism): CursorHoverState
      static ResetState(prism: Prism): void
      static GetGravityWellMaxDistance(prism: Prism): number
      static SetGravityWellMaxDistance(prism: Prism, distance: number): void
      static GetGravityWellBlendTime(prism: Prism): number
      static SetGravityWellBlendTime(prism: Prism, seconds: number): void
      static GetCursorSnapMode(prism: Prism): boolean
      static SetCursorSnapMode(prism: Prism, snap: boolean): void
      static GetCursorSnapMinDistance(prism: Prism): number
      static SetCursorSnapMinDistance(prism: Prism, distance: number): void
      static GetCursorSnapMinTime(prism: Prism): number
      static SetCursorSnapMinTime(prism: Prism, seconds: number): void
    };
  }
}

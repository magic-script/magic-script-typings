declare module 'lumin' {
  class LineNode extends RenderNode {
    addPoints(a_vPos: [number, number, number] /* glm::vec3 */): void
    clearPoints(): void
    addLineBreak(): void
  };
}

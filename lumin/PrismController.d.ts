declare module 'lumin' {
  class PrismController {
    constructor(a_name: string = 0 /* 0 is not the actual default value */)
    onPreAttachPrism(prism: Prism): void
    onAttachPrism(prism: Prism): void
    onDetachPrism(prism: Prism): void
    onEvent(a_pEvent: ServerEvent): boolean
    onUpdate(a_fDelta: number): void
    getName(): string
    getPrism(): Prism
    getRoot(): TransformNode
    deleteSceneGraph(): void
    isPrismDeletePending(): boolean
    addChildController(controller: PrismController): void
    removeChildController(controller: PrismController): void
    setEventSleepTime(a_fSleepTime: number): void
    setRetainSceneGraph(retainSceneGraph: boolean): void
    getEventSleepTime(): number
  };
}

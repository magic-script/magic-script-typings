declare module 'lumin' {
  class RayCastEventData extends ServerEvent {
    constructor() {}
    getHitData(): RaycastResult
    getRayCastEvent(): RayCastEventType
  };
}

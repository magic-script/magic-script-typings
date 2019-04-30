declare module 'lumin' {
  class WorldRayCastEventData extends ServerEvent {
    constructor() {}
    getResult(): WorldRayCastResult
  };
}

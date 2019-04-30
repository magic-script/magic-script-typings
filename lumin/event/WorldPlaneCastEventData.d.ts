declare module 'lumin' {
  class WorldPlaneCastEventData extends ServerEvent {
    constructor() {}
    getResult(): WorldPlaneCastResult
  };
}

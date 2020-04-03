declare module 'lumin' {
  class ParticleEventData extends ServerEvent {
    constructor()

    /**
     * Returns the event name
     *
     * @priv none
     */
    getEventName(): string
  }
}

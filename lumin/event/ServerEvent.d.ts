declare module 'lumin' {
  class ServerEvent {
    constructor()
    getPrismId(): BigInt /* uint64_t */
    isInputEventType(): boolean
    toString(): string
  };
}

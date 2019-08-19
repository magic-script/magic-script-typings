declare module 'lumin' {
  namespace utils {
    class CallbackID {
      constructor()
      equals(other: utils.CallbackID): boolean
      toString(): string
      isValid(): boolean
      invalidate(): void
    };
  }
}

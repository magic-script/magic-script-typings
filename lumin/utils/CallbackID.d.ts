declare module 'lumin' {
  namespace utils {

    /**
     * CallbackID - Represents the unique ID of an std::function callback within a CallbackList.
     */
    class CallbackID {

      /**
       * Default constructor.
       */
      constructor()

      /** Compare if one CallbackID is equal to another. */
      equals(other: utils.CallbackID): boolean

      /** Returns a string representation of the CallbackID. */
      toString(): string

      /**  Returns True if the CallbackID is a valid Id, otherwise it returns false. */
      isValid(): boolean

      /** Resets this CallbackID to an invalid state. */
      invalidate(): void
    }
  }
}

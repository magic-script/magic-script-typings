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
    }
  }
}

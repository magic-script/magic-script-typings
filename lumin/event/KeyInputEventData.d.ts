declare module 'lumin' {

  /**
   * KeyInputEventData - Key input event
   */
  class KeyInputEventData extends InputEventData {
    constructor()

    /**
     * @return The key code
     *  Key code identifies the key value for keyboard, buttons etc
     *  it is one of the type: AKEYCODE_XXX.
     *  Refer to keycodes.h in android tree.
     *
     * @priv none
     */
    keyCode(): input.KeyCodes

    /**
     * @return The key value
     *
     * @priv none
     */
    keyVal(): number /* int32_t */

    /**
     * @return The meta key flag (for Control, Shift, Alt, etc.)
     *
     * @priv none
     */
    metaKeys(): number /* uint32_t */
  }
}

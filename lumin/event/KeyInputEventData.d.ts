declare module 'lumin' {
  class KeyInputEventData extends InputEventData {
    constructor() {}
    keyCode(): input.KeyCodes
    keyVal(): number
    metaKeys(): number
  };
}

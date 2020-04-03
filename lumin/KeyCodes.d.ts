declare module 'lumin' {
  namespace input {

    /**
     * Key codes. Copied from ndk android/keycodes.h
     */
    enum KeyCodes {

      /**
       * `value = 0`
       */
      AKEYCODE_UNKNOWN,

      /**
       * `value = 1`
       */
      AKEYCODE_SOFT_LEFT,

      /**
       * `value = 2`
       */
      AKEYCODE_SOFT_RIGHT,

      /**
       * `value = 3`
       */
      AKEYCODE_HOME,

      /**
       * `value = 4`
       */
      AKEYCODE_BACK,

      /**
       * `value = 5`
       */
      AKEYCODE_CALL,

      /**
       * `value = 6`
       */
      AKEYCODE_ENDCALL,

      /**
       * `value = 7`
       */
      AKEYCODE_0,

      /**
       * `value = 8`
       */
      AKEYCODE_1,

      /**
       * `value = 9`
       */
      AKEYCODE_2,

      /**
       * `value = 10`
       */
      AKEYCODE_3,

      /**
       * `value = 11`
       */
      AKEYCODE_4,

      /**
       * `value = 12`
       */
      AKEYCODE_5,

      /**
       * `value = 13`
       */
      AKEYCODE_6,

      /**
       * `value = 14`
       */
      AKEYCODE_7,

      /**
       * `value = 15`
       */
      AKEYCODE_8,

      /**
       * `value = 16`
       */
      AKEYCODE_9,

      /**
       * `value = 17`
       */
      AKEYCODE_STAR,

      /**
       * `value = 18`
       */
      AKEYCODE_POUND,

      /**
       * `value = 19`
       */
      AKEYCODE_DPAD_UP,

      /**
       * `value = 20`
       */
      AKEYCODE_DPAD_DOWN,

      /**
       * `value = 21`
       */
      AKEYCODE_DPAD_LEFT,

      /**
       * `value = 22`
       */
      AKEYCODE_DPAD_RIGHT,

      /**
       * `value = 23`
       */
      AKEYCODE_DPAD_CENTER,

      /**
       * `value = 24`
       */
      AKEYCODE_VOLUME_UP,

      /**
       * `value = 25`
       */
      AKEYCODE_VOLUME_DOWN,

      /**
       * `value = 26`
       */
      AKEYCODE_POWER,

      /**
       * `value = 27`
       */
      AKEYCODE_CAMERA,

      /**
       * `value = 28`
       */
      AKEYCODE_CLEAR,

      /**
       * `value = 29`
       */
      AKEYCODE_A,

      /**
       * `value = 30`
       */
      AKEYCODE_B,

      /**
       * `value = 31`
       */
      AKEYCODE_C,

      /**
       * `value = 32`
       */
      AKEYCODE_D,

      /**
       * `value = 33`
       */
      AKEYCODE_E,

      /**
       * `value = 34`
       */
      AKEYCODE_F,

      /**
       * `value = 35`
       */
      AKEYCODE_G,

      /**
       * `value = 36`
       */
      AKEYCODE_H,

      /**
       * `value = 37`
       */
      AKEYCODE_I,

      /**
       * `value = 38`
       */
      AKEYCODE_J,

      /**
       * `value = 39`
       */
      AKEYCODE_K,

      /**
       * `value = 40`
       */
      AKEYCODE_L,

      /**
       * `value = 41`
       */
      AKEYCODE_M,

      /**
       * `value = 42`
       */
      AKEYCODE_N,

      /**
       * `value = 43`
       */
      AKEYCODE_O,

      /**
       * `value = 44`
       */
      AKEYCODE_P,

      /**
       * `value = 45`
       */
      AKEYCODE_Q,

      /**
       * `value = 46`
       */
      AKEYCODE_R,

      /**
       * `value = 47`
       */
      AKEYCODE_S,

      /**
       * `value = 48`
       */
      AKEYCODE_T,

      /**
       * `value = 49`
       */
      AKEYCODE_U,

      /**
       * `value = 50`
       */
      AKEYCODE_V,

      /**
       * `value = 51`
       */
      AKEYCODE_W,

      /**
       * `value = 52`
       */
      AKEYCODE_X,

      /**
       * `value = 53`
       */
      AKEYCODE_Y,

      /**
       * `value = 54`
       */
      AKEYCODE_Z,

      /**
       * `value = 55`
       */
      AKEYCODE_COMMA,

      /**
       * `value = 56`
       */
      AKEYCODE_PERIOD,

      /**
       * `value = 57`
       */
      AKEYCODE_ALT_LEFT,

      /**
       * `value = 58`
       */
      AKEYCODE_ALT_RIGHT,

      /**
       * `value = 59`
       */
      AKEYCODE_SHIFT_LEFT,

      /**
       * `value = 60`
       */
      AKEYCODE_SHIFT_RIGHT,

      /**
       * `value = 61`
       */
      AKEYCODE_TAB,

      /**
       * `value = 62`
       */
      AKEYCODE_SPACE,

      /**
       * `value = 63`
       */
      AKEYCODE_SYM,

      /**
       * `value = 64`
       */
      AKEYCODE_EXPLORER,

      /**
       * `value = 65`
       */
      AKEYCODE_ENVELOPE,

      /**
       * `value = 66`
       */
      AKEYCODE_ENTER,

      /**
       * `value = 67`
       */
      AKEYCODE_DEL,

      /**
       * `value = 68`
       */
      AKEYCODE_GRAVE,

      /**
       * `value = 69`
       */
      AKEYCODE_MINUS,

      /**
       * `value = 70`
       */
      AKEYCODE_EQUALS,

      /**
       * `value = 71`
       */
      AKEYCODE_LEFT_BRACKET,

      /**
       * `value = 72`
       */
      AKEYCODE_RIGHT_BRACKET,

      /**
       * `value = 73`
       */
      AKEYCODE_BACKSLASH,

      /**
       * `value = 74`
       */
      AKEYCODE_SEMICOLON,

      /**
       * `value = 75`
       */
      AKEYCODE_APOSTROPHE,

      /**
       * `value = 76`
       */
      AKEYCODE_SLASH,

      /**
       * `value = 77`
       */
      AKEYCODE_AT,

      /**
       * `value = 78`
       */
      AKEYCODE_NUM,

      /**
       * `value = 79`
       */
      AKEYCODE_HEADSETHOOK,

      /**
       * *Camera* focus
       *
       * `value = 80`
       */
      AKEYCODE_FOCUS,

      /**
       * `value = 81`
       */
      AKEYCODE_PLUS,

      /**
       * `value = 82`
       */
      AKEYCODE_MENU,

      /**
       * `value = 83`
       */
      AKEYCODE_NOTIFICATION,

      /**
       * `value = 84`
       */
      AKEYCODE_SEARCH,

      /**
       * `value = 85`
       */
      AKEYCODE_MEDIA_PLAY_PAUSE,

      /**
       * `value = 86`
       */
      AKEYCODE_MEDIA_STOP,

      /**
       * `value = 87`
       */
      AKEYCODE_MEDIA_NEXT,

      /**
       * `value = 88`
       */
      AKEYCODE_MEDIA_PREVIOUS,

      /**
       * `value = 89`
       */
      AKEYCODE_MEDIA_REWIND,

      /**
       * `value = 90`
       */
      AKEYCODE_MEDIA_FAST_FORWARD,

      /**
       * `value = 91`
       */
      AKEYCODE_MUTE,

      /**
       * `value = 92`
       */
      AKEYCODE_PAGE_UP,

      /**
       * `value = 93`
       */
      AKEYCODE_PAGE_DOWN,

      /**
       * `value = 94`
       */
      AKEYCODE_PICTSYMBOLS,

      /**
       * `value = 95`
       */
      AKEYCODE_SWITCH_CHARSET,

      /**
       * `value = 96`
       */
      AKEYCODE_BUTTON_A,

      /**
       * `value = 97`
       */
      AKEYCODE_BUTTON_B,

      /**
       * `value = 98`
       */
      AKEYCODE_BUTTON_C,

      /**
       * `value = 99`
       */
      AKEYCODE_BUTTON_X,

      /**
       * `value = 100`
       */
      AKEYCODE_BUTTON_Y,

      /**
       * `value = 101`
       */
      AKEYCODE_BUTTON_Z,

      /**
       * `value = 102`
       */
      AKEYCODE_BUTTON_L1,

      /**
       * `value = 103`
       */
      AKEYCODE_BUTTON_R1,

      /**
       * `value = 104`
       */
      AKEYCODE_BUTTON_L2,

      /**
       * `value = 105`
       */
      AKEYCODE_BUTTON_R2,

      /**
       * `value = 106`
       */
      AKEYCODE_BUTTON_THUMBL,

      /**
       * `value = 107`
       */
      AKEYCODE_BUTTON_THUMBR,

      /**
       * `value = 108`
       */
      AKEYCODE_BUTTON_START,

      /**
       * `value = 109`
       */
      AKEYCODE_BUTTON_SELECT,

      /**
       * `value = 110`
       */
      AKEYCODE_BUTTON_MODE,

      /**
       * `value = 111`
       */
      AKEYCODE_ESCAPE,

      /**
       * `value = 112`
       */
      AKEYCODE_FORWARD_DEL,

      /**
       * `value = 113`
       */
      AKEYCODE_CTRL_LEFT,

      /**
       * `value = 114`
       */
      AKEYCODE_CTRL_RIGHT,

      /**
       * `value = 115`
       */
      AKEYCODE_CAPS_LOCK,

      /**
       * `value = 116`
       */
      AKEYCODE_SCROLL_LOCK,

      /**
       * `value = 117`
       */
      AKEYCODE_META_LEFT,

      /**
       * `value = 118`
       */
      AKEYCODE_META_RIGHT,

      /**
       * `value = 119`
       */
      AKEYCODE_FUNCTION,

      /**
       * `value = 120`
       */
      AKEYCODE_SYSRQ,

      /**
       * `value = 121`
       */
      AKEYCODE_BREAK,

      /**
       * `value = 122`
       */
      AKEYCODE_MOVE_HOME,

      /**
       * `value = 123`
       */
      AKEYCODE_MOVE_END,

      /**
       * `value = 124`
       */
      AKEYCODE_INSERT,

      /**
       * `value = 125`
       */
      AKEYCODE_FORWARD,

      /**
       * `value = 126`
       */
      AKEYCODE_MEDIA_PLAY,

      /**
       * `value = 127`
       */
      AKEYCODE_MEDIA_PAUSE,

      /**
       * `value = 128`
       */
      AKEYCODE_MEDIA_CLOSE,

      /**
       * `value = 129`
       */
      AKEYCODE_MEDIA_EJECT,

      /**
       * `value = 130`
       */
      AKEYCODE_MEDIA_RECORD,

      /**
       * `value = 131`
       */
      AKEYCODE_F1,

      /**
       * `value = 132`
       */
      AKEYCODE_F2,

      /**
       * `value = 133`
       */
      AKEYCODE_F3,

      /**
       * `value = 134`
       */
      AKEYCODE_F4,

      /**
       * `value = 135`
       */
      AKEYCODE_F5,

      /**
       * `value = 136`
       */
      AKEYCODE_F6,

      /**
       * `value = 137`
       */
      AKEYCODE_F7,

      /**
       * `value = 138`
       */
      AKEYCODE_F8,

      /**
       * `value = 139`
       */
      AKEYCODE_F9,

      /**
       * `value = 140`
       */
      AKEYCODE_F10,

      /**
       * `value = 141`
       */
      AKEYCODE_F11,

      /**
       * `value = 142`
       */
      AKEYCODE_F12,

      /**
       * `value = 143`
       */
      AKEYCODE_NUM_LOCK,

      /**
       * `value = 144`
       */
      AKEYCODE_NUMPAD_0,

      /**
       * `value = 145`
       */
      AKEYCODE_NUMPAD_1,

      /**
       * `value = 146`
       */
      AKEYCODE_NUMPAD_2,

      /**
       * `value = 147`
       */
      AKEYCODE_NUMPAD_3,

      /**
       * `value = 148`
       */
      AKEYCODE_NUMPAD_4,

      /**
       * `value = 149`
       */
      AKEYCODE_NUMPAD_5,

      /**
       * `value = 150`
       */
      AKEYCODE_NUMPAD_6,

      /**
       * `value = 151`
       */
      AKEYCODE_NUMPAD_7,

      /**
       * `value = 152`
       */
      AKEYCODE_NUMPAD_8,

      /**
       * `value = 153`
       */
      AKEYCODE_NUMPAD_9,

      /**
       * `value = 154`
       */
      AKEYCODE_NUMPAD_DIVIDE,

      /**
       * `value = 155`
       */
      AKEYCODE_NUMPAD_MULTIPLY,

      /**
       * `value = 156`
       */
      AKEYCODE_NUMPAD_SUBTRACT,

      /**
       * `value = 157`
       */
      AKEYCODE_NUMPAD_ADD,

      /**
       * `value = 158`
       */
      AKEYCODE_NUMPAD_DOT,

      /**
       * `value = 159`
       */
      AKEYCODE_NUMPAD_COMMA,

      /**
       * `value = 160`
       */
      AKEYCODE_NUMPAD_ENTER,

      /**
       * `value = 161`
       */
      AKEYCODE_NUMPAD_EQUALS,

      /**
       * `value = 162`
       */
      AKEYCODE_NUMPAD_LEFT_PAREN,

      /**
       * `value = 163`
       */
      AKEYCODE_NUMPAD_RIGHT_PAREN,

      /**
       * `value = 164`
       */
      AKEYCODE_VOLUME_MUTE,

      /**
       * `value = 165`
       */
      AKEYCODE_INFO,

      /**
       * `value = 166`
       */
      AKEYCODE_CHANNEL_UP,

      /**
       * `value = 167`
       */
      AKEYCODE_CHANNEL_DOWN,

      /**
       * `value = 168`
       */
      AKEYCODE_ZOOM_IN,

      /**
       * `value = 169`
       */
      AKEYCODE_ZOOM_OUT,

      /**
       * `value = 170`
       */
      AKEYCODE_TV,

      /**
       * `value = 171`
       */
      AKEYCODE_WINDOW,

      /**
       * `value = 172`
       */
      AKEYCODE_GUIDE,

      /**
       * `value = 173`
       */
      AKEYCODE_DVR,

      /**
       * `value = 174`
       */
      AKEYCODE_BOOKMARK,

      /**
       * `value = 175`
       */
      AKEYCODE_CAPTIONS,

      /**
       * `value = 176`
       */
      AKEYCODE_SETTINGS,

      /**
       * `value = 177`
       */
      AKEYCODE_TV_POWER,

      /**
       * `value = 178`
       */
      AKEYCODE_TV_INPUT,

      /**
       * `value = 179`
       */
      AKEYCODE_STB_POWER,

      /**
       * `value = 180`
       */
      AKEYCODE_STB_INPUT,

      /**
       * `value = 181`
       */
      AKEYCODE_AVR_POWER,

      /**
       * `value = 182`
       */
      AKEYCODE_AVR_INPUT,

      /**
       * `value = 183`
       */
      AKEYCODE_PROG_RED,

      /**
       * `value = 184`
       */
      AKEYCODE_PROG_GREEN,

      /**
       * `value = 185`
       */
      AKEYCODE_PROG_YELLOW,

      /**
       * `value = 186`
       */
      AKEYCODE_PROG_BLUE,

      /**
       * `value = 187`
       */
      AKEYCODE_APP_SWITCH,

      /**
       * `value = 188`
       */
      AKEYCODE_BUTTON_1,

      /**
       * `value = 189`
       */
      AKEYCODE_BUTTON_2,

      /**
       * `value = 190`
       */
      AKEYCODE_BUTTON_3,

      /**
       * `value = 191`
       */
      AKEYCODE_BUTTON_4,

      /**
       * `value = 192`
       */
      AKEYCODE_BUTTON_5,

      /**
       * `value = 193`
       */
      AKEYCODE_BUTTON_6,

      /**
       * `value = 194`
       */
      AKEYCODE_BUTTON_7,

      /**
       * `value = 195`
       */
      AKEYCODE_BUTTON_8,

      /**
       * `value = 196`
       */
      AKEYCODE_BUTTON_9,

      /**
       * `value = 197`
       */
      AKEYCODE_BUTTON_10,

      /**
       * `value = 198`
       */
      AKEYCODE_BUTTON_11,

      /**
       * `value = 199`
       */
      AKEYCODE_BUTTON_12,

      /**
       * `value = 200`
       */
      AKEYCODE_BUTTON_13,

      /**
       * `value = 201`
       */
      AKEYCODE_BUTTON_14,

      /**
       * `value = 202`
       */
      AKEYCODE_BUTTON_15,

      /**
       * `value = 203`
       */
      AKEYCODE_BUTTON_16,

      /**
       * Key codes. Copied from /frameworks/services/inputservice2/aidl/ML_keycodes.h
       *
       * `value = 500`
       */
      AKEYCODE_EX_TRIGGER,

      /**
       * `value = 501`
       */
      AKEYCODE_EX_CAPTURE,

      /**
       * `value = 502`
       */
      AKEYCODE_EX_BUMPER,

      /**
       * `value = 503`
       */
      AKEYCODE_EX_REALITY,

      /**
       * `value = 504`
       */
      AKEYCODE_EX_BATTERY,

      /**
       * `value = 508`
       */
      AKEYCODE_EX_HOME_TAP,
    }
  }
}

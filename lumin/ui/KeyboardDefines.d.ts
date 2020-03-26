declare module 'lumin' {
  namespace ui {
    namespace Locale {

      /**
       *Locale codes
       */
      enum Code {

        /**
         * `value = 2`
         */
        kDe_DE,

        /**
         * `value = 0`
         */
        kEn,

        /**
         * `value = 1`
         */
        kEn_GB,

        /**
         * `value = kEn`
         */
        kEn_US,

        /**
         * `value = 5`
         */
        kEs_ES,

        /**
         * `value = 3`
         */
        kFr_FR,

        /**
         * `value = 4`
         */
        kIt_IT,
      }

      /**
       *English keyboard page codes
       */
      enum PageCode {
        kLowerLetters,
        kUpperLetters,
        kLowerLettersEmail,
        kUpperLettersEmail,
        kNumericSymbols,
        kNumericSymbolsAlt,
        kNumericOnly,
        kEmoji,
      }
      namespace En {
      }
    }

    /** The type (function) of the key */
    enum KeyType {
      kNone,
      kCharacter,
      kBackspace,
      kShift,
      kSpeechToText,
      kPageEmoji,
      kPageLowerLetters,
      kPageNumericSymbols,
      kCancel,
      kSubmit,
      kPrevious,
      kNext,
      kClear,
      kClose,
      kEnter,
      kCustom1,
      kCustom2,
      kCustom3,
      kCustom4,
      kCustom5,
    }

    /** The layout type of the keyboard (i.e. what pages are available) */
    enum LayoutType {
      kFull,
      kEmail,
      kBasic,
      kNumeric,
    }
    namespace KeyboardEvent {

      /** Base struct for keyboard event data */
      class EventData {
        constructor()
      }

      /** Struct for key pressed events */
      class KeyPressedData extends ui.KeyboardEvent.EventData {
        constructor()
        getKeyType(): ui.KeyType
        getCharCode(): number /* char32_t */
      }
      class StringEnteredData extends ui.KeyboardEvent.EventData {
        constructor()
        getStringValue(): string
        isTemporary(): boolean
      }
    }

    /** Struct for keyboard properties defining the capabilities and behavior of the keyboard */
    class KeyboardProperties {
      constructor()
      equals(other: ui.KeyboardProperties): boolean

      /**
       *The width of the keyboard in world coordinates
       */
      width: number /* float */;

      /**
       *The width of the keyboard as a ratio of the calling volume
       */
      widthRatio: number /* float */;

      /**
       *The mode of the form buttons
       */
      formMode: ui.KeyboardProperties.FormMode;

      /**
       *Label to use for a cancel button
       */
      cancelLabel: ui.KeyboardProperties.CancelLabel;

      /**
       *Label to use for a previous button
       */
      previousLabel: ui.KeyboardProperties.PreviousLabel;

      /**
       *Label to use for a next button
       */
      nextLabel: ui.KeyboardProperties.NextLabel;

      /**
       *Label to use for a clear button
       */
      clearLabel: ui.KeyboardProperties.ClearLabel;

      /**
       *Label to use for a close button
       */
      closeLabel: ui.KeyboardProperties.CloseLabel;

      /**
       *Label to use for a submit button
       */
      submitLabel: ui.KeyboardProperties.SubmitLabel;

      /**
       *Custom string label to use for a cancel button
       */
      customCancelLabel: string;

      /**
       *Custom string label to use for a previous button
       */
      customPreviousLabel: string;

      /**
       *Custom string label to use for a next button
       */
      customNextLabel: string;

      /**
       *Custom string label to use for a clear button
       */
      customClearLabel: string;

      /**
       *Custom string label to use for a close button
       */
      customCloseLabel: string;

      /**
       *Custom string label to use for a submit button
       */
      customSubmitLabel: string;

      /**
       *Mode to use for suggestions
       */
      suggestionMode: ui.KeyboardProperties.SuggestionMode;

      /**
       *Whether the auxiliary is to be displayed
       */
      showAuxiliaryRow: boolean;

      /**
       *Whether the enter button should be replaced with a submit button
       */
      enterIsSubmit: boolean;

      /**
       *Whether the speech to text button should be enabled
       */
      speechToTextEnabled: boolean;

      /**
       *The offset in world coordinates to move the keyboard from its location
       */
      offsetPosition: [number, number] /* glm::vec2 */;

      /**
       *The layout type to use on the keyboard
       */
      layoutType: ui.LayoutType;

      /**
       *If the FormMode is kcustom then use these properties
       */
      customFormProperties: ui.KeyboardProperties.CustomFormProperties;
      keyboardMode: ui.KeyboardProperties.KeyboardMode;

      /**
       *Specifies the location to position the keyboard along the z axis
       */
      keyboardZPosition: ui.KeyboardProperties.KeyboardZPosition;
    }
    namespace KeyboardProperties {
      class CustomFormProperties {
        keyTypes: Array<ui.KeyType> /* std::vector<KeyType> */;
        custom1ButtonLabel: string;
        custom2ButtonLabel: string;
        custom3ButtonLabel: string;
        custom4ButtonLabel: string;
        custom5ButtonLabel: string;
        constructor()
        equals(other: ui.KeyboardProperties.CustomFormProperties): boolean
      }
      enum FormMode {
        kOff,
        kCustom,
        kCancelSubmit,
        kCancelClear,
        kClearCloseSubmit,
        kCancelPrevNext,
        kCancelPrevSubmit,
        kCancelClearPreviousNext,
        kCancelClearPreviousSubmit,
        kCancelClearClosePreviousNext,
        kCancelClearClosePreviousSubmit,
      }
      enum CancelLabel {
        kCancel,
        kCancelIcon,
        kClose,
        kHide,
        kEmpty,
        kCustom,
      }
      enum PreviousLabel {
        kPrevious,
        kPreviousIcon,
        kBack,
        kEmpty,
        kCustom,
      }
      enum NextLabel {
        kNext,
        kNextIcon,
        kForward,
        kEmpty,
        kCustom,
      }
      enum SubmitLabel {
        kSubmit,
        kDone,
        kSend,
        kSendIcon,
        kSearch,
        kSearchIcon,
        kEnter,
        kContinue,
        kCheckIcon,
        kEmpty,
        kCustom,
      }
      enum ClearLabel {
        kClear,
        kClearIcon,
        kEmpty,
        kCustom,
      }
      enum CloseLabel {
        kClose,
        kCloseIcon,
        kEmpty,
        kCustom,
      }
      enum ShiftLabel {
        kShiftDisabled,
        kShiftEnabled,
        kShiftEnabledPermanent,
      }
      enum SuggestionMode {
        kOff,
        kNormal,
        kURL,
      }
      enum KeyboardMode {
        kAuto,
        kForceVirtualKeyboard,
      }
      enum KeyboardZPosition {
        kVolumeFrontFace,
        kVolumeCursorPlane,
      }
    }
  }
}

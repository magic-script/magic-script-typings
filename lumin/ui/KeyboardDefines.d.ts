declare module 'lumin' {
  namespace ui {
    namespace Locale {
      enum Code {
        kEn,
      }
      namespace En {
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
      }
    }
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
    enum LayoutType {
      kFull,
      kEmail,
      kBasic,
      kNumeric,
    }
    namespace KeyboardEvent {
      class EventData {
        constructor() {}
      };
      class KeyPressedData extends EventData {
        constructor() {}
        getKeyType(): ui.KeyType
        getCharCode(): number
      };
      class StringEnteredData extends EventData {
        constructor() {}
        getStringValue(): string
        isTemporary(): boolean
      };
    }
    class KeyboardProperties {
      constructor()
      equals(other: ui.KeyboardProperties): boolean
      width: number;
      widthRatio: number;
      formMode: ui.KeyboardProperties.FormMode;
      cancelLabel: ui.KeyboardProperties.CancelLabel;
      previousLabel: ui.KeyboardProperties.PreviousLabel;
      nextLabel: ui.KeyboardProperties.NextLabel;
      clearLabel: ui.KeyboardProperties.ClearLabel;
      closeLabel: ui.KeyboardProperties.CloseLabel;
      submitLabel: ui.KeyboardProperties.SubmitLabel;
      customCancelLabel: string;
      customPreviousLabel: string;
      customNextLabel: string;
      customClearLabel: string;
      customCloseLabel: string;
      customSubmitLabel: string;
      suggestionMode: ui.KeyboardProperties.SuggestionMode;
      showAuxiliaryRow: boolean;
      enterIsSubmit: boolean;
      speechToTextEnabled: boolean;
      offsetPosition: [number, number] /* glm::vec2 */;
      layoutType: ui.LayoutType;
      customFormProperties: ui.KeyboardProperties.CustomFormProperties;
      keyboardMode: ui.KeyboardProperties.KeyboardMode;
      keyboardZPosition: ui.KeyboardProperties.KeyboardZPosition;
    };
    class CustomFormProperties {
      keyTypes: Array<ui.KeyType> /* std::vector */;
      custom1ButtonLabel: string;
      custom2ButtonLabel: string;
      custom3ButtonLabel: string;
      custom4ButtonLabel: string;
      custom5ButtonLabel: string;
      constructor()
      equals(other: ui.KeyboardProperties.CustomFormProperties): boolean
    };
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

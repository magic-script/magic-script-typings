declare module 'lumin' {
  namespace ui {

    /** System Icon Types from UX specifications */
    enum SystemIcon {

      /**
       * `value = 0`
       */
      kActions,

      /**
       * `value = 1`
       */
      kActionsLeft,

      /**
       * `value = 2`
       */
      kActionsOff,

      /**
       * `value = 3`
       */
      kActionsRight,

      /**
       * `value = 4`
       */
      kAdd,

      /**
       * `value = 5`
       */
      kAddressBook,

      /**
       * `value = 6`
       */
      kAlbumAdd,

      /**
       * `value = 7`
       */
      kAlbumRemove,

      /**
       * `value = 8`
       */
      kAlphabetical,

      /**
       * `value = 9`
       */
      kAnalytics,

      /**
       * `value = 10`
       */
      kArrowDown,

      /**
       * `value = 11`
       */
      kArrowLeft,

      /**
       * `value = 12`
       */
      kArrowRight,

      /**
       * `value = 13`
       */
      kArrowUp,

      /**
       * `value = 14`
       */
      kAutoPlacement,

      /**
       * `value = 15`
       */
      kBackspace,

      /**
       * `value = 16`
       */
      kBattery,

      /**
       * `value = 17`
       */
      kBlock,

      /**
       * `value = 18`
       */
      kBlockCamera,

      /**
       * `value = 19`
       */
      kBlockCookie,

      /**
       * `value = 20`
       */
      kBlockLocation,

      /**
       * `value = 21`
       */
      kBlockMicrophone,

      /**
       * `value = 22`
       */
      kBluetooth,

      /**
       * `value = 23`
       */
      kBluetoothOff,

      /**
       * `value = 24`
       */
      kBookmark,

      /**
       * `value = 25`
       */
      kBookmarkAdd,

      /**
       * `value = 26`
       */
      kBrightness,

      /**
       * `value = 27`
       */
      kCalendar,

      /**
       * `value = 28`
       */
      kCamera,

      /**
       * `value = 29`
       */
      kCameraIris,

      /**
       * `value = 30`
       */
      kCarriageReturn,

      /**
       * `value = 31`
       */
      kChat,

      /**
       * `value = 32`
       */
      kCheck,

      /**
       * `value = 33`
       */
      kCheckSelection,

      /**
       * `value = 34`
       */
      kChevronDown,

      /**
       * `value = 35`
       */
      kChevronLeft,

      /**
       * `value = 36`
       */
      kChevronRight,

      /**
       * `value = 37`
       */
      kChevronUp,

      /**
       * `value = 38`
       */
      kClipboard,

      /**
       * `value = 39`
       */
      kClock,

      /**
       * `value = 40`
       */
      kClose,

      /**
       * `value = 41`
       */
      kClosedCaption,

      /**
       * `value = 42`
       */
      kCloud,

      /**
       * `value = 43`
       */
      kCloudOff,

      /**
       * `value = 44`
       */
      kCollection,

      /**
       * `value = 45`
       */
      kController,

      /**
       * `value = 46`
       */
      kCookie,

      /**
       * `value = 47`
       */
      kCopy,

      /**
       * `value = 48`
       */
      kCreditCard,

      /**
       * `value = 49`
       */
      kCut,

      /**
       * `value = 50`
       */
      kDoNotDisturb,

      /**
       * `value = 51`
       */
      kDot,

      /**
       * `value = 52`
       */
      kDownload,

      /**
       * `value = 53`
       */
      kDownloadCloud,

      /**
       * `value = 54`
       */
      kDropdown,

      /**
       * `value = 55`
       */
      kEdit,

      /**
       * `value = 56`
       */
      kEffectsPalette,

      /**
       * `value = 57`
       */
      kEject,

      /**
       * `value = 58`
       */
      kEmoji,

      /**
       * `value = 59`
       */
      kEnter,

      /**
       * `value = 60`
       */
      kExit,

      /**
       * `value = 61`
       */
      kExtraction,

      /**
       * `value = 62`
       */
      kEyeTracking,

      /**
       * `value = 63`
       */
      kFastForward,

      /**
       * `value = 64`
       */
      kFastForwardTenSecond,

      /**
       * `value = 65`
       */
      kFile,

      /**
       * `value = 66`
       */
      kFilter,

      /**
       * `value = 67`
       */
      kFlag,

      /**
       * `value = 209`
       */
      kFlagChina,

      /**
       * `value = 210`
       */
      kFlagFrance,

      /**
       * `value = 211`
       */
      kFlagGermany,

      /**
       * `value = 212`
       */
      kFlagJapan,

      /**
       * `value = 213`
       */
      kFlagSouthKorea,

      /**
       * `value = 214`
       */
      kFlagUK,

      /**
       * `value = 215`
       */
      kFlagUSA,

      /**
       * `value = 68`
       */
      kFollow,

      /**
       * `value = 69`
       */
      kFrame,

      /**
       * `value = 70`
       */
      kGameController,

      /**
       * `value = 71`
       */
      kGenericThreeDimensional,

      /**
       * `value = 72`
       */
      kGrid,

      /**
       * `value = 73`
       */
      kHamburger,

      /**
       * `value = 74`
       */
      kHandOrientationLeft,

      /**
       * `value = 75`
       */
      kHandOrientationRight,

      /**
       * `value = 76`
       */
      kHeart,

      /**
       * `value = 77`
       */
      kHeartAdd,

      /**
       * `value = 78`
       */
      kHelp,

      /**
       * `value = 79`
       */
      kHistory,

      /**
       * `value = 80`
       */
      kHome,

      /**
       * `value = 81`
       */
      kImage,

      /**
       * `value = 82`
       */
      kInfo,

      /**
       * `value = 83`
       */
      kKeyboard,

      /**
       * `value = 84`
       */
      kKeyboardCapital,

      /**
       * `value = 85`
       */
      kKeyboardLetter,

      /**
       * `value = 86`
       */
      kKeyboardNumber,

      /**
       * `value = 87`
       */
      kLink,

      /**
       * `value = 88`
       */
      kListView,

      /**
       * `value = 89`
       */
      kLocalAreaServer,

      /**
       * `value = 90`
       */
      kMarqueeSelection,

      /**
       * `value = 91`
       */
      kMerge,

      /**
       * `value = 92`
       */
      kMesh,

      /**
       * `value = 93`
       */
      kMicrophone,

      /**
       * `value = 94`
       */
      kMicrophoneMute,

      /**
       * `value = 95`
       */
      kMinimize,

      /**
       * `value = 96`
       */
      kMobile,

      /**
       * `value = 97`
       */
      kMore,

      /**
       * `value = 98`
       */
      kMove,

      /**
       * `value = 99`
       */
      kMultipleSelection,

      /**
       * `value = 100`
       */
      kMusic,

      /**
       * `value = 101`
       */
      kMusicPause,

      /**
       * `value = 102`
       */
      kMusicPlay,

      /**
       * `value = 103`
       */
      kNetworkServer,

      /**
       * `value = 104`
       */
      kNext,

      /**
       * `value = 105`
       */
      kNotification,

      /**
       * `value = 206`
       */
      kObjectRecognition,

      /**
       * `value = 106`
       */
      kOpenWith,

      /**
       * `value = 107`
       */
      kOrigin,

      /**
       * `value = 108`
       */
      kPassableWorld,

      /**
       * `value = 109`
       */
      kPaste,

      /**
       * `value = 110`
       */
      kPause,

      /**
       * `value = 111`
       */
      kPermission,

      /**
       * `value = 112`
       */
      kPerson,

      /**
       * `value = 113`
       */
      kPersonAdd,

      /**
       * `value = 114`
       */
      kPersonBlock,

      /**
       * `value = 115`
       */
      kPersonFollow,

      /**
       * `value = 116`
       */
      kPersonThree,

      /**
       * `value = 117`
       */
      kPersonTwo,

      /**
       * `value = 118`
       */
      kPersonUnFollow,

      /**
       * `value = 119`
       */
      kPersonVoip,

      /**
       * `value = 120`
       */
      kPhone,

      /**
       * `value = 121`
       */
      kPhoneEndCall,

      /**
       * `value = 122`
       */
      kPhoneIncomingCall,

      /**
       * `value = 123`
       */
      kPhoneSwitchCall,

      /**
       * `value = 124`
       */
      kPin,

      /**
       * `value = 125`
       */
      kPlaceholderBluetooth,

      /**
       * `value = 126`
       */
      kPlay,

      /**
       * `value = 127`
       */
      kPlaylistRepeatOff,

      /**
       * `value = 128`
       */
      kPlaylistRepeatOn,

      /**
       * `value = 129`
       */
      kPlaylistRepeatSong,

      /**
       * `value = 130`
       */
      kPlaylistShuffle,

      /**
       * `value = 203`
       */
      kPlaylistShuffleOff,

      /**
       * `value = 131`
       */
      kPower,

      /**
       * `value = 204`
       */
      kPrevious,

      /**
       * `value = 132`
       */
      kPrivacy,

      /**
       * `value = 133`
       */
      kPrivateView,

      /**
       * `value = 134`
       */
      kPublicView,

      /**
       * `value = 135`
       */
      kRefresh,

      /**
       * `value = 136`
       */
      kReplay,

      /**
       * `value = 137`
       */
      kReport,

      /**
       * `value = 138`
       */
      kRestoreMedia,

      /**
       * `value = 139`
       */
      kRevolver,

      /**
       * `value = 140`
       */
      kRewindTenSecond,

      /**
       * `value = 141`
       */
      kScreenshot,

      /**
       * `value = 142`
       */
      kSearch,

      /**
       * `value = 143`
       */
      kSecurityLock,

      /**
       * `value = 144`
       */
      kSecurityNotSecure,

      /**
       * `value = 145`
       */
      kSecurityUnlock,

      /**
       * `value = 146`
       */
      kSend,

      /**
       * `value = 147`
       */
      kSettings,

      /**
       * `value = 148`
       */
      kShare,

      /**
       * `value = 207`
       */
      kShareScreen,

      /**
       * `value = 149`
       */
      kShiftDisabled,

      /**
       * `value = 150`
       */
      kShiftEnabled,

      /**
       * `value = 151`
       */
      kShiftEnabledPermanent,

      /**
       * `value = 152`
       */
      kSixDof,

      /**
       * `value = 153`
       */
      kSleep,

      /**
       * `value = 154`
       */
      kSlideshow,

      /**
       * `value = 155`
       */
      kSnooze,

      /**
       * `value = 156`
       */
      kSpace,

      /**
       * `value = 157`
       */
      kStar,

      /**
       * `value = 158`
       */
      kStop,

      /**
       * `value = 159`
       */
      kStream,

      /**
       * `value = 160`
       */
      kStreamOff,

      /**
       * `value = 161`
       */
      kSummon,

      /**
       * `value = 208`
       */
      kTablet,

      /**
       * `value = 162`
       */
      kTabNew,

      /**
       * `value = 163`
       */
      kTabNewImage,

      /**
       * `value = 164`
       */
      kTabViewAll,

      /**
       * `value = 165`
       */
      kTag,

      /**
       * `value = 166`
       */
      kText,

      /**
       * `value = 167`
       */
      kThumbsDown,

      /**
       * `value = 168`
       */
      kThumbsDownLeft,

      /**
       * `value = 169`
       */
      kThumbsDownRight,

      /**
       * `value = 170`
       */
      kThumbsUp,

      /**
       * `value = 171`
       */
      kThumbsUpLeft,

      /**
       * `value = 172`
       */
      kThumbsUpRight,

      /**
       * `value = 173`
       */
      kTopChart,

      /**
       * `value = 174`
       */
      kTrash,

      /**
       * `value = 175`
       */
      kUndoReply,

      /**
       * `value = 176`
       */
      kUnknownDevice,

      /**
       * `value = 177`
       */
      kUpdate,

      /**
       * `value = 178`
       */
      kUpload,

      /**
       * `value = 179`
       */
      kUploadCloud,

      /**
       * `value = 180`
       */
      kView,

      /**
       * `value = 181`
       */
      kViewSource,

      /**
       * `value = 182`
       */
      kVoiceFeedback,

      /**
       * `value = 183`
       */
      kVoip,

      /**
       * `value = 184`
       */
      kVolume,

      /**
       * `value = 185`
       */
      kVolumeMute,

      /**
       * `value = 186`
       */
      kWarning,

      /**
       * `value = 187`
       */
      kWifi,

      /**
       * `value = 188`
       */
      kWifiNoBar,

      /**
       * `value = 189`
       */
      kWifiNoSignal,

      /**
       * `value = 190`
       */
      kWifiOff,

      /**
       * `value = 191`
       */
      kWifiOneBar,

      /**
       * `value = 192`
       */
      kWifiSecure,

      /**
       * `value = 193`
       */
      kWifiSecureNoBar,

      /**
       * `value = 194`
       */
      kWifiSecureNoSignal,

      /**
       * `value = 195`
       */
      kWifiSecureOneBar,

      /**
       * `value = 196`
       */
      kWifiUnknown,

      /**
       * `value = 197`
       */
      kWindowNew,

      /**
       * `value = 198`
       */
      kWindowPopUpBlock,

      /**
       * `value = 199`
       */
      kWindowViewAll,

      /**
       * `value = 205`
       */
      kWork,

      /**
       * `value = 200`
       */
      kWorkspaces,

      /**
       * `value = 201`
       */
      kZoomIn,

      /**
       * `value = 202`
       */
      kZoomOut,
    }

    /** Eclipse label types from UX specifications. */
    enum EclipseLabelType {

      /**
       * Page title (Top of screen)
       */
      kT1,

      /**
       * Title/Label - LARGE
       */
      kT2,

      /**
       * Title/Label - MEDIUM
       */
      kT3,

      /**
       * Title/Label - SMALL
       */
      kT4,

      /**
       * Title/Label - EXTRA SMALL
       */
      kT5,

      /**
       * Title/Label - XX Large
       */
      kT6,

      /**
       * Title/Label - X Large
       */
      kT7,

      /**
       * Label/Body - MEDIUM
       */
      kB1,

      /**
       * Label/Body - SMALL
       */
      kB2,

      /**
       * Label/Body - X-SMALL
       */
      kB3,

      /**
       * Label/Body - Large
       */
      kB4,

      /**
       * CAPS Title - LARGE
       *
       * `value = kB4+2`
       */
      kC1,

      /**
       * CAPS Title - MED
       */
      kC2,

      /**
       * CAPS Title - SMALL
       */
      kC3,
      kC4,
    }

    /** Eclipse button types from UX specifications. */
    enum EclipseButtonType {

      /**
       *Circular button with icon only.
       */
      kIcon,

      /**
       *Circular button with icon and label on the side that appears during hover.
       */
      kIconWithLabel,

      /**
       *Capsule button with text label.
       */
      kText,
      kTextWithIcon,
    }

    /** Eclipse slider types from UX specifications. */
    enum EclipseSliderType {

      /**
       *Circular slider with icon.
       */
      kRadialWithIcon,

      /**
       *Circular slider with icon (smaller).
       */
      kRadialWithIconSmall,

      /**
       *Horizontal slider with icon.
       */
      kHorizontalWithIcon,
      kHorizontalWithLabel,
    }

    /** Font parameters. */
    class FontParams {

      /**
       * The font style
       */
      style: resources.FontStyle;

      /**
       * The font weight
       */
      weight: resources.FontWeight;

      /**
       * The fond size if worldspace (meters)
       */
      fontSize: number;

      /**
       * The font tracking (currently not supported).
       */
      tracking: number;

      /**
       * If the text should be in all caps.
       */
      allCaps: boolean;
      constructor(a_style?: resources.FontStyle, a_weight?: resources.FontWeight, a_fontSize?: number, a_tracking?: number, a_allCaps?: boolean)
    }

    /** Describes sides for certain UI elements. */
    enum Side {
      kTop,
      kRight,
      kBottom,
      kLeft,
    }
    enum LabelDisplayMode {

      /**
       * Label display is on during cursor hover, off otherwise.
       */
      kHover,
      kAlways,
    }

    /** Describes the orientation of certain UI elements. */
    enum Orientation {
      kVertical,
      kHorizontal,
    }

    /** Describes how UI elements are aligned horizontally.*/
    enum HorizontalAlignment {
      kLeft,
      kCenter,
      kRight,
    }

    /** Describes how UI elements are aligned vertically. */
    enum VerticalAlignment {
      kTop,
      kCenter,
      kBottom,
    }

    /** Describes levels of UiPanel edge constraints. */
    enum PanelEdgeConstraintLevel {

      /**
       * Cursor escapes freely, no constraint.
       */
      kNone,

      /**
       * Cursor escapes with minimal effort.
       */
      kLight,

      /**
       * Cursor standard constraint.
       */
      kMedium,

      /**
       * Cursor heavy constraint, not easy to escape.
       */
      kHeavy,

      /**
       * Impassable, cursor cannot escape.
       */
      kImpassable,
      kManual,
    }

    /** Describes the cursor transition type during Panel-to-Panel transitions. */
    enum PanelCursorTransitionType {

      /**
       * The cursor will appear at the closest edge of the Panel upon transition.
       */
      kClosestEdge,

      /**
       * The cursor will appear at the center of the Panel upon transition.
       */
      kCenter,
      kInitialPosition,
    }

    /** Struct containing both horizontal and vertical alignment information for UI elements. */
    class Alignment {
      vertical: ui.VerticalAlignment;
      horizontal: ui.HorizontalAlignment;
      constructor(v: ui.VerticalAlignment, h: ui.HorizontalAlignment)
      equals(rhs: ui.Alignment): boolean

      /**
       * `value = Alignment(VerticalAlignment.kTop,HorizontalAlignment.kLeft)`
       */
      readonly TOP_LEFT: ui.Alignment;

      /**
       * `value = Alignment(VerticalAlignment.kTop,HorizontalAlignment.kCenter)`
       */
      readonly TOP_CENTER: ui.Alignment;

      /**
       * `value = Alignment(VerticalAlignment.kTop,HorizontalAlignment.kRight)`
       */
      readonly TOP_RIGHT: ui.Alignment;

      /**
       * `value = Alignment(VerticalAlignment.kCenter,HorizontalAlignment.kLeft)`
       */
      readonly CENTER_LEFT: ui.Alignment;

      /**
       * `value = Alignment(VerticalAlignment.kCenter,HorizontalAlignment.kCenter)`
       */
      readonly CENTER_CENTER: ui.Alignment;

      /**
       * `value = Alignment(VerticalAlignment.kCenter,HorizontalAlignment.kRight)`
       */
      readonly CENTER_RIGHT: ui.Alignment;

      /**
       * `value = Alignment(VerticalAlignment.kBottom,HorizontalAlignment.kLeft)`
       */
      readonly BOTTOM_LEFT: ui.Alignment;

      /**
       * `value = Alignment(VerticalAlignment.kBottom,HorizontalAlignment.kCenter)`
       */
      readonly BOTTOM_CENTER: ui.Alignment;

      /**
       * `value = Alignment(VerticalAlignment.kBottom,HorizontalAlignment.kRight)`
       */
      readonly BOTTOM_RIGHT: ui.Alignment;
    }

    /** Describes the scroll bar visibility */
    enum ScrollBarVisibility {
      kOff,

      /**
       *scroll bar visible while active then shuts off after 2 seconds of inactivity.
       */
      kAuto,
      kAlways,
    }

    /** Describes the scrollable directions supported by UiScrollView. */
    enum ScrollDirection {

      /**
       *Vertical scroll mode.
       */
      kVertical,
      kHorizontal,
    }
    enum CursorEdgeScrollMode {

      /**
       * The cursor is never contrained and does not cause scrolling.
       */
      kNever,

      /**
       * The scroll area constrains the cursor which scrolls content when scrolling is possible.
       */
      kAuto,
      kAlways,
    }

    /** Describes the text entry modes supported by UiTextEdit. */
    enum TextEntryMode {

      /**
       * Virtual Keyboard does not display
       */
      kNone,
      kNormal,
      kEmail,
      kNumeric,
      kURL,
    }

    /** Describes the justification modes supported by UiText* */
    enum HorizontalTextAlignment {
      kLeft,
      kCenter,
      kRight,
      kJustify,
    }

    /** UI Sound Events. */
    enum SoundEvent {

      /**
       * Element hovered over
       */
      kHoverEnter,

      /**
       * Element hover exited
       */
      kHoverExit,

      /**
       * Element activated (clicked)
       */
      kActivate,

      /**
       * Element long pressed
       */
      kLongPress,

      /**
       * Element receives focus
       */
      kFocusGained,

      /**
       * Element loses focus
       */
      kFocusLost,

      /**
       * Toggle Sound Events.
       */
      kToggleStateOn,

      /**
       * Toggle changes to OFF state
       */
      kToggleStateOff,

      /**
       * Drop Down List Sound Events
       */
      kDropDownItemHover,

      /**
       * Drop down list item selected
       */
      kDropDownItemSelect,

      /**
       * Drop down list expanded
       */
      kDropDownListExpand,

      /**
       * Drop down list collapsed
       */
      kDropDownListCollapse,

      /**
       * Drop down nested list expanded
       */
      kDropDownNestedListExpand,

      /**
       * Drop down nested list collapsed
       */
      kDropDownNestedListCollapse,

      /**
       * Text Input Sound Events
       */
      kTextCursorInsert,

      /**
       * Word selected for edit
       */
      kTextWordSelect,

      /**
       * Selection handle grabbed
       */
      kTextSelectionHandleGrab,

      /**
       * Selection handle dropped
       */
      kTextSelectionHandleDrop,

      /**
       * Password is shown
       */
      kTextPasswordShow,

      /**
       * Password hidden
       */
      kTextPasswordHide,

      /**
       * Dialog Sound Events
       */
      kDialogOpen,

      /**
       * The dialog box currently open
       */
      kDialogLoop,

      /**
       * User clicks Confirm (Ok, Submit, Accept) button
       */
      kDialogConfirm,

      /**
       * User clicks Cancel (No, Decline) button
       */
      kDialogCancel,

      /**
       * Context Menu Sound Events
       */
      kContextMenuOpen,

      /**
       * The context menu closes
       */
      kContextMenuClose,

      /**
       * The context menu item hovered over
       */
      kContextMenuItemHover,

      /**
       * The context menu item selected
       */
      kContextMenuItemSelect,

      /**
       * Scroll View Sound Events
       */
      kScrollViewScrollLimit,

      /**
       * Panel Sound Events
       */
      kPanelTransitionHorizontal,
      kPanelTransitionVertical,
    }

    /** Dialog types. */
    enum DialogType {

      /**
       * Modal, single action, OK button dialog
       */
      kSingleAction,

      /**
       * Modal, dual action, Cancel and Confirm buttons dialog
       */
      kDualAction,

      /**
       * Modal, custom content, no buttons provided.
       */
      kCustom,

      /**
       * Modeless, no-button dialog that counts down with a timer.
       */
      kTimed,
      kNoAction,
    }

    /** Dialog layout preference. */
    enum DialogLayout {

      /**
       * Standard layout with any action buttons at the bottom of the dialog content (default).
       */
      kStandard,
      kWide,
    }

    /** Time period of the day. */
    enum TimePeriod {

      /**
       * AM timeperiod, hours 0-11
       */
      kAM,
      kPM,
    }

    /**
     * `value = 0`
     */
    const INVALID_COMPONENT_TYPE: number;
  }
}

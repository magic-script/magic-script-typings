declare module 'lumin' {
  namespace ui {

    /** System Icon Types from UX specifications */
    enum SystemIcon {
      kActions = 0,
      kActionsLeft = 1,
      kActionsOff = 2,
      kActionsRight = 3,
      kAdd = 4,
      kAddressBook = 5,
      kAirplaneMode = 228,
      kAirplaneModeOff = 229,
      kAlbumAdd = 6,
      kAlbumRemove = 7,
      kAlphabetical = 8,
      kAnalytics = 9,
      kArrowDown = 10,
      kArrowLeft = 11,
      kArrowRight = 12,
      kArrowUp = 13,
      kAspectRatioCustom = 222,
      kAspectRatioDefault = 223,
      kAspectRatioTall = 224,
      kAspectRatioWide = 225,
      kAutoPlacement = 14,
      kBackspace = 15,
      kBattery = 16,
      kBlock = 17,
      kBlockCamera = 18,
      kBlockCookie = 19,
      kBlockLocation = 20,
      kBlockMicrophone = 21,
      kBluetooth = 22,
      kBluetoothOff = 23,
      kBookmark = 24,
      kBookmarkAdd = 25,
      kBrightness = 26,
      kCalendar = 27,
      kCamera = 28,
      kCameraIris = 29,
      kCarriageReturn = 30,
      kChat = 31,
      kCheck = 32,
      kCheckSelection = 33,
      kChevronDown = 34,
      kChevronLeft = 35,
      kChevronRight = 36,
      kChevronUp = 37,
      kClipboard = 38,
      kClock = 39,
      kClose = 40,
      kClosedCaption = 41,
      kCloud = 42,
      kCloudOff = 43,
      kCollection = 44,
      kComputer = 230,
      kController = 45,
      kCookie = 46,
      kCopy = 47,
      kCreditCard = 48,
      kCut = 49,
      kCVCameraPrivilege = 216,
      kDoNotDisturb = 50,
      kDot = 51,
      kDownload = 52,
      kDownloadCloud = 53,
      kDropdown = 54,
      kEdit = 55,
      kEffectsPalette = 56,
      kEject = 57,
      kEmoji = 58,
      kEnter = 59,
      kEraser = 231,
      kExit = 60,
      kExtraction = 61,
      kEyeTracking = 62,
      kFastForward = 63,
      kFastForwardTenSecond = 64,
      kFile = 65,
      kFilter = 66,
      kFlag = 67,
      kFlagChina = 209,
      kFlagFrance = 210,
      kFlagGermany = 211,
      kFlagItaly = 226,
      kFlagJapan = 212,
      kFlagSouthKorea = 213,
      kFlagSpain = 227,
      kFlagUK = 214,
      kFlagUSA = 215,
      kFollow = 68,
      kFrame = 69,
      kGameController = 70,
      kGenericThreeDimensional = 71,
      kGrid = 72,
      kHamburger = 73,
      kHandOrientationLeft = 74,
      kHandOrientationRight = 75,
      kHeart = 76,
      kHeartAdd = 77,
      kHelp = 78,
      kHistory = 79,
      kHome = 80,
      kImage = 81,
      kInfo = 82,
      kKeyboard = 83,
      kKeyboardCapital = 84,
      kKeyboardLanguage = 220,
      kKeyboardLetter = 85,
      kKeyboardNumber = 86,
      kLink = 87,
      kListView = 88,
      kLocalAreaServer = 89,
      kMarker = 232,
      kMarkerSize = 233,
      kMarqueeSelection = 90,
      kMerge = 91,
      kMesh = 92,
      kMicrophone = 93,
      kMicrophoneMute = 94,
      kMinimize = 95,
      kMobile = 96,
      kMore = 97,
      kMove = 98,
      kMultipleSelection = 99,
      kMusic = 100,
      kMusicPause = 101,
      kMusicPlay = 102,
      kNetworkServer = 103,
      kNext = 104,
      kNotification = 105,
      kObjectRecognition = 206,
      kOpenWith = 106,
      kOrigin = 107,
      kPassableWorld = 108,
      kPaste = 109,
      kPause = 110,
      kPermission = 111,
      kPerson = 112,
      kPersonAdd = 113,
      kPersonBlock = 114,
      kPersonFollow = 115,
      kPersonThree = 116,
      kPersonTwo = 117,
      kPersonUnFollow = 118,
      kPersonVoip = 119,
      kPhone = 120,
      kPhoneEndCall = 121,
      kPhoneIncomingCall = 122,
      kPhoneSwitchCall = 123,
      kPin = 124,
      kPlaceholderBluetooth = 125,
      kPlay = 126,
      kPlaylistRepeatOff = 127,
      kPlaylistRepeatOn = 128,
      kPlaylistRepeatSong = 129,
      kPlaylistShuffle = 130,
      kPlaylistShuffleOff = 203,
      kPower = 131,
      kPrevious = 204,
      kPrivacy = 132,
      kPrivateView = 133,
      kPublicView = 134,
      kRearrange = 217,
      kRefresh = 135,
      kReplay = 136,
      kReport = 137,
      kResize = 218,
      kRestoreMedia = 138,
      kRevolver = 139,
      kRewindTenSecond = 140,
      kScreenshot = 141,
      kSearch = 142,
      kSecurityLock = 143,
      kSecurityNotSecure = 144,
      kSecurityUnlock = 145,
      kSend = 146,
      kSettings = 147,
      kShare = 148,
      kShareScreen = 207,
      kShiftDisabled = 149,
      kShiftEnabled = 150,
      kShiftEnabledPermanent = 151,
      kSixDof = 152,
      kSleep = 153,
      kSlideshow = 154,
      kSnooze = 155,
      kSpace = 156,
      kStar = 157,
      kStop = 158,
      kStream = 159,
      kStreamOff = 160,
      kSummon = 161,
      kTablet = 208,
      kTabNew = 162,
      kTabNewImage = 163,
      kTabViewAll = 164,
      kTag = 165,
      kText = 166,
      kThumbsDown = 167,
      kThumbsDownLeft = 168,
      kThumbsDownRight = 169,
      kThumbsUp = 170,
      kThumbsUpLeft = 171,
      kThumbsUpRight = 172,
      kTopChart = 173,
      kTrash = 174,
      kUndoReply = 175,
      kUnknownDevice = 176,
      kUpdate = 177,
      kUpload = 178,
      kUploadCloud = 179,
      kVideoCapture = 219,
      kView = 180,
      kViewSource = 181,
      kVoiceFeedback = 182,
      kVoip = 183,
      kVolume = 184,
      kVolumeMute = 185,
      kWarning = 186,
      kWebXR = 221,
      kWifi = 187,
      kWifiNoBar = 188,
      kWifiNoSignal = 189,
      kWifiOff = 190,
      kWifiOneBar = 191,
      kWifiSecure = 192,
      kWifiSecureNoBar = 193,
      kWifiSecureNoSignal = 194,
      kWifiSecureOneBar = 195,
      kWifiUnknown = 196,
      kWindowNew = 197,
      kWindowPopUpBlock = 198,
      kWindowViewAll = 199,
      kWork = 205,
      kWorkspaces = 200,
      kZoomIn = 201,
      kZoomOut = 202,
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
       */
      kC1 = kB4+2,

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

    /** Eclipse dropdownList types from UX specifications. */
    enum EclipseDropDownListType {

      /**
       * Circular DropDownList button with icon and label
       */
      kIconWithLabel,
      kTextWithArrow,
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

    /** Toggle button types from UX specifications. */
    enum ToggleType {

      /**
       * Default style toggle.
       */
      kDefault,

      /**
       * Radio button style toggle.
       */
      kRadio,
      kCheckbox,
    }

    /** Eclipse toggle types from UX specifications. */
    enum EclipseToggleType {

      /**
       * Circular toggle with icon.
       */
      kIcon,

      /**
       * Horizontal toggle with icon.
       */
      kSwitchWithIcon,
      kSwitchWithLabel,
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
      constructor(a_style: resources.FontStyle = 0 /* 0 is not the actual default value */, a_weight: resources.FontWeight = 0 /* 0 is not the actual default value */, a_fontSize: number = 0 /* 0 is not the actual default value */, a_tracking: number = 0 /* 0 is not the actual default value */, a_allCaps: boolean = 0 /* 0 is not the actual default value */)
    };

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
      readonly TOP_LEFT: ui.Alignment = Alignment(VerticalAlignment.kTop,HorizontalAlignment.kLeft);
      readonly TOP_CENTER: ui.Alignment = Alignment(VerticalAlignment.kTop,HorizontalAlignment.kCenter);
      readonly TOP_RIGHT: ui.Alignment = Alignment(VerticalAlignment.kTop,HorizontalAlignment.kRight);
      readonly CENTER_LEFT: ui.Alignment = Alignment(VerticalAlignment.kCenter,HorizontalAlignment.kLeft);
      readonly CENTER_CENTER: ui.Alignment = Alignment(VerticalAlignment.kCenter,HorizontalAlignment.kCenter);
      readonly CENTER_RIGHT: ui.Alignment = Alignment(VerticalAlignment.kCenter,HorizontalAlignment.kRight);
      readonly BOTTOM_LEFT: ui.Alignment = Alignment(VerticalAlignment.kBottom,HorizontalAlignment.kLeft);
      readonly BOTTOM_CENTER: ui.Alignment = Alignment(VerticalAlignment.kBottom,HorizontalAlignment.kCenter);
      readonly BOTTOM_RIGHT: ui.Alignment = Alignment(VerticalAlignment.kBottom,HorizontalAlignment.kRight);
    };

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
    enum DateFormat {

      /**
       * Format based on locale
       */
      kAuto,

      /**
       * Year / Day / Month
       */
      kYYYYDDMM,

      /**
       * Year / Month / Day
       */
      kYYYYMMDD,

      /**
       * Month / Day / Year
       */
      kMMDDYYYY,

      /**
       * Day / Month / Year
       */
      kDDMMYYYY,

      /**
       * Month / Year
       */
      kMMYYYY,
      kDDYYYY,
    }
    enum TimeFormat {

      /**
       * Format based on locale
       */
      kAuto,

      /**
       * hour(0-23) : minute : second
       */
      khhmmss,

      /**
       * hour(1-12) : minute : second   TimePeriod(AM/PM)
       */
      khhmmssP,

      /**
       * hour(0-23) : minute
       */
      khhmm,

      /**
       * hour(1-12) : minute    TimePeriod(AM/PM)
       */
      khhmmP,
      kmmss,
    }
    const INVALID_COMPONENT_TYPE: number = 0;
  }
}

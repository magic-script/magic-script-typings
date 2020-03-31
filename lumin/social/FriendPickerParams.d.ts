declare module 'lumin' {
  class FriendPickerParams {
    constructor()

    /**
     * Upper limit on the number of selections
     */
    maxSelectionCount_: number /* uint32_t */;

    /**
     * Name of originating application
     */
    originatingApplicationName_: string;

    /**
     * Opaque application payload
     */
    originatingApplicationPayload_: string;

    /**
     * Prompt text for the user to display on the friend picker
     */
    userPrompt_: string;

    /**
     * The component mode for friend picker
     */
    componentMode_: ComponentMode;

    /**
     * The default filter
     */
    defaultFilter_: QueryType;

    /**
     * Display selection count
     */
    displaySelectionCount_: boolean;

    /**
     * Landscape prism the friend picker will be attached with
     */
    prismID_: bigint /* uint64_t */;

    /**
     * Enable check for common PCF
     */
    enableCommonPCFCheck_: boolean;

    /**
     * The upper bound on the rotational error when
     * trying to identify a common PCF between participants
     */
    rotationalErrorDegreesMax_: number /* float */;

    /**
     * The upper bound on the translational error when
     * trying to identify a common PCF between participants
     */
    translationalErrorMetersMax_: number /* float */;

    /**
     * Require friend picker to only show users with a relationship
     */
    requireRelationship_: boolean;

    /**
     * The page types to show
     */
    pageTypes_: Array<FriendPickerPage> /* std::vector<FriendPickerPage> */;

    /**
     * The room type
     */
    roomType_: JoinRoomType;
  }
}

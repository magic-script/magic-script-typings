declare module 'lumin' {
  class Notification {

    /** Default constructor */
    constructor()

    /**
     * @return true if this is an exclusive notification, false otherwise
     * @priv none
     */
    getIsExclusiveNotification(): boolean

    /**
     * Set whether or not this is an exclusive notification
     * @param isExclusiveNotification true for an exclusive notification, false otherwise
     * @priv none
     */
    setIsExclusiveNotification(isExclusiveNotification: boolean): void

    /**
     * @return the title of the notification
     * @priv none
     */
    getTitle(): string

    /**
     * Set the title of the notification
     * @param title the title of the notification
     * @priv none
     */
    setTitle(title: string): void

    /**
     * @return the summarized message in the notification
     * @priv none
     */
    getSummarizedMessage(): string

    /**
     * Set the brief version of the notification message
     * @param message the brief message
     * @priv none
     */
    setSummarizedMessage(message: string): void

    /**
     * @return the detailed message in the notification
     * @priv none
     */
    getDetailedMessage(): string

    /**
     * Set the detailed version of the notification message
     * @param message the detailed message
     * @priv none
     */
    setDetailedMessage(message: string): void

    /**
     * @return the path of the icon model file
     * @priv none
     */
    getIconModelPath(): string

    /**
     * Set the path of the icon model used in the notification
     * @param iconModelPath the path to the icon model file
     * @priv none
     */
    setIconModelPath(iconModelPath: string): void

    /**
     * @return the path of the icon texture file
     * @priv none
     */
    getIconTexturePath(): string

    /**
     * Set the path of the icon texture used in the notification
     * @param iconTexturePath the path to the icon texture file
     * @priv none
     */
    setIconTexturePath(iconTexturePath: string): void

    /**
     * @return the glyph used for the activate button
     * @priv none
     */
    getActivateButtonGlyph(): Notification.NotificationActivateGlyph

    /**
     * Set the glyph used for the activate button
     * @param glyph the glyph used for the activate button
     * @priv none
     */
    setActivateButtonGlyph(glyph: Notification.NotificationActivateGlyph): void

    /**
     * @return the text used on the activate button
     * @priv none
     */
    getActivateButtonText(): string

    /**
     * Set the text used in the activate button
     * @param activateText the text to use on the activate button
     * @priv none
     */
    setActivateButtonText(activateText: string): void

    /**
     * @return the custom data of the notification
     * @priv none
     */
    getActivatePayload(): string

    /**
     * Set the custom data of the notification
     * @param activatePayload the custom data to set
     * @priv none
     */
    setActivatePayload(activatePayload: string): void

    /**
     * @return the notification sound
     * @priv none
     */
    getNotificationSound(): Notification.NotificationSound

    /**
     * Set the sound to use when the notification is shown
     * @param notificationSound the sound to use with the notification
     * @priv none
     */
    setNotificationSound(notificationSound: Notification.NotificationSound): void

    /**
     * @return the glyph used with the dismiss button
     * @priv none
     */
    getDismissButtonGlyph(): Notification.NotificationDismissGlyph

    /**
     * Set the glyph used for the dismiss button
     * @param glyph the glyph used for the dismiss button
     * @priv none
     */
    setDismissButtonGlyph(glyph: Notification.NotificationDismissGlyph): void

    /**
     * @return the text used on the dismiss button
     * @priv none
     */
    getDismissButtonText(): string

    /**
     * Set the text used for the dismiss button
     * @param dismissText the text used on the dismiss button
     * @priv none
     */
    setDismissButtonText(dismissText: string): void

    /**
     * Set the callback for the action performed when the notification is activated
     * @param action the callback to run on activate
     * @priv none
     */
    setActivateAction(action: ((arg0: Notification) => void) | null /* std::function<void(Notification)> */): void

    /**
     * Set the callback for the action performed when the notification is dismissed
     * @param action the callback to run on dismiss
     * @priv none
     */
    setDismissAction(action: ((arg0: Notification) => void) | null /* std::function<void(Notification)> */): void
  }
  namespace Notification {

    /** The sound used when a notification is displayed */
    enum NotificationSound {

      /**
       * `value = 0`
       */
      kDefaultSound,
      kWarning,
      kIncoming,
      kCoupled,
      kDecoupled,
    }

    /** The activate button glyph */
    enum NotificationActivateGlyph {

      /**
       * `value = 0`
       */
      kCheck,
      kPerson,
      kPersonFollow,
      kPersonThree,
      kPhoneIncomingCall,
      kStream,
      kUndoReply,
    }

    /** The dismiss button glyph */
    enum NotificationDismissGlyph {

      /**
       * `value = 0`
       */
      kClose,
      kPhoneEndCall,
      kThumbsDown,
      kThumbsDownLeft,
      kThumbsDownRight,
    }
  }
}

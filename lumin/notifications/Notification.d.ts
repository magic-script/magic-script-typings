declare module 'lumin' {
  class Notification {
    constructor()
    getIsExclusiveNotification(): boolean
    setIsExclusiveNotification(isExclusiveNotification: boolean): void
    getTitle(): string
    setTitle(title: string): void
    getSummarizedMessage(): string
    setSummarizedMessage(message: string): void
    getDetailedMessage(): string
    setDetailedMessage(message: string): void
    getIconModelPath(): string
    setIconModelPath(iconModelPath: string): void
    getIconTexturePath(): string
    setIconTexturePath(iconTexturePath: string): void
    getActivateButtonGlyph(): Notification.NotificationActivateGlyph
    setActivateButtonGlyph(glyph: Notification.NotificationActivateGlyph): void
    getActivateButtonText(): string
    setActivateButtonText(activateText: string): void
    getActivatePayload(): string
    setActivatePayload(activatePayload: string): void
    getNotificationSound(): Notification.NotificationSound
    setNotificationSound(notificationSound: Notification.NotificationSound): void
    getDismissButtonGlyph(): Notification.NotificationDismissGlyph
    setDismissButtonGlyph(glyph: Notification.NotificationDismissGlyph): void
    getDismissButtonText(): string
    setDismissButtonText(dismissText: string): void
    setActivateAction(action: callable): void
    setDismissAction(action: callable): void
  };
  enum NotificationSound {
    kDefaultSound = 0,
    kWarning,
    kIncoming,
    kCoupled,
    kDecoupled,
  }
  enum NotificationActivateGlyph {
    kCheck = 0,
    kPerson,
    kPersonFollow,
    kPersonThree,
    kPhoneIncomingCall,
    kStream,
    kUndoReply,
  }
  enum NotificationDismissGlyph {
    kClose = 0,
    kPhoneEndCall,
    kThumbsDown,
    kThumbsDownLeft,
    kThumbsDownRight,
  }
}

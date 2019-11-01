declare module 'lumin' {

  /**
   * Type of a TimeMod class. Used for serialization.
   */
  enum TimeModType {
    kEaseInTime,
    kEaseOutTime,
    kEaseInOutTime,
    kSineTime,
    kCubicTime,
    kBezierTime,
    kInvalid,
  }
}

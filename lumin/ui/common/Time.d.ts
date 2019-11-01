declare module 'lumin' {
  namespace ui {

    /**
     * Simple Time class with access to hour/minute/second/period
     */
    class Time {

      /**
       * Get the time now
       *
       * @return a Time object with current time
       *
       */
      static GetCurrentTime(): ui.Time

      /**
       * Creates Time object with hour, minute, second.
       *
       * @param hour hour in the range 0-23.
       * @param minute minute in the range 0-59.
       * @param second second in the range 0-59.
       */
      constructor(hour: number, minute: number, second: number)

      /** Default ctr */
      constructor()

      /**
       * Sets the hour in 24 hour time. Clamping will be applied for out of range values.
       *
       * @param hour hour to be set in the range 0-23.
       *
       */
      setHour(hour: number): void

      /**
       * Get the hour in 24 hour time.
       *
       * @return hour, hour in the range 0-23.
       *
       */
      hour(): number

      /**
       * Get the hour in 12 hour time.
       *
       * @return hour, hour in the range 1-12.
       *
       */
      twelveHourForm(): number

      /**
       * Sets the minute. Clamping will be applied for out of range values.
       *
       * @param minute minute in the range 0-59.
       *
       */
      setMinute(minute: number): void

      /**
       * Gets the minute.
       *
       * @return minute, minute in the range 0-59.
       *
       */
      minute(): number

      /**
       * Sets the second. Clamping will be applied for out of range values.
       *
       * @return second, second in the range 0-59.
       *
       */
      setSecond(second: number): void

      /**
       * Gets the second.
       *
       * @return second, second in the range 0-59.
       *
       */
      second(): number

      /**
       * Gets the TimePeriod, kAM or kPM.
       *
       * @return TimePeriod, will return kAM for hour 0-11, kPM for hour 12-23.
       *
       */
      period(): ui.TimePeriod
    }
  }
}

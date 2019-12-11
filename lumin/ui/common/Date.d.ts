declare module 'lumin' {
  namespace ui {

    /**
     * Simple Date class with access to year/month/day
     */
    class Date {

      /**
       * Get today's date
       *
       * @return a Date object with today's date
       *
       */
      static GetCurrentDate(): ui.Date

      /**
       * To get the amount of days in an arbitrary month
       *
       * @param month 1 - 12
       * @return amount of days in specified month
       *
       */
      static GetDaysPerMonth(month: number /* int */): number /* int */

      /**
       * To determine whether the passed in year is a leap year
       *
       * @param year the year
       * @return true if it is a leap year, false otherwise.
       *
       */
      static IsLeapYear(year: number /* int */): boolean

      /**
       * Creates Date object with year, month, day.
       *
       * @param year year in the range -9999, 9999.
       * @param month month in the range 1-12.
       * @param day day in the range 1-31.
       */
      constructor(year: number /* int */, month: number /* int */, day: number /* int */)

      /** Default ctor */
      constructor()

      /**
       * Sets the day. Clamping will be applied for out of range values.
       *
       * @param day day to be set in the range 1-31.
       *
       */
      setDay(day: number /* int */): void

      /**
       * Gets the day.
       *
       * @return day, in the range of 1-31.
       *
       */
      day(): number /* int */

      /**
       * Sets the month. Clamping will be applied for out of range values.
       *
       * @param month month to be set in the range of 1-12.
       *
       */
      setMonth(month: number /* int */): void

      /**
       * Gets the month.
       *
       * @return month, month in the range of 1-12.
       *
       */
      month(): number /* int */

      /**
       * Sets the year. Clamping will be applied for out of range values.
       *
       * @param year year in the range of -9999, 9999.
       *
       */
      setYear(year: number /* int */): void

      /**
       * Gets the year.
       *
       * @return year, year in the range of -9999, 9999.
       *
       */
      year(): number /* int */

      /**
       * Gets the amount of days in this Date object's month.
       *
       * @return amount of days in this Date's month.
       *
       */
      getDaysPerMonth(): number /* int */

      /**
       * Determines whether this Date object's year is a leap year.
       *
       * @return true if it is a leap year, false otherwise.
       *
       */
      isLeapYear(): boolean
    }
  }
}

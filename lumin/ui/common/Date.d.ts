declare module 'lumin' {
  namespace ui {
    class Date {
      static GetCurrentDate(): ui.Date
      static GetDaysPerMonth(month: number): number
      static IsLeapYear(year: number): boolean
      constructor(year: number, month: number, day: number)
      constructor()
      setDay(day: number): void
      day(): number
      setMonth(month: number): void
      month(): number
      setYear(year: number): void
      year(): number
      getDaysPerMonth(): number
      isLeapYear(): boolean
    };
  }
}

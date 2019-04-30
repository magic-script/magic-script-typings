declare module 'lumin' {
  namespace ui {
    class Date {
      constructor(year: number, month: number, day: number)
      constructor()
      setDay(day: number): void
      day(): number
      setMonth(month: number): void
      month(): number
      setYear(year: number): void
      year(): number
      getDaysPerMonth(): number
      static GetDaysPerMonth(month: number): number
      isLeapYear(): boolean
      static IsLeapYear(year: number): boolean
    };
  }
}

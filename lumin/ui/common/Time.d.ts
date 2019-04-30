declare module 'lumin' {
  namespace ui {
    class Time {
      constructor(hour: number, minute: number, second: number)
      constructor()
      setHour(hour: number): void
      hour(): number
      twelveHourForm(): number
      setMinute(minute: number): void
      minute(): number
      setSecond(second: number): void
      second(): number
      period(): ui.TimePeriod
    };
  }
}

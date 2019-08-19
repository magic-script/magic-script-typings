declare module 'lumin' {
  namespace utils {
    class LocaleHelper {
      constructor(locale: string = 0 /* 0 is not the actual default value */, path: string = 0 /* 0 is not the actual default value */, file: string = 0 /* 0 is not the actual default value */)
      getLocalizedPath(path: string): string
      init(): boolean
      formatUTF8String(input: string, arguments: Array<string> /* std::vector */): string
      formatUTF8String(input: string, arguments: Object): string
      formatUTF8String(input: string, arguments: Array<utils.LocaleHelper.Param> /* std::vector */): string
      formatUTF8String(input: string, arguments: Object): string
      getUTF8String(key: string): string
      getFormattedUTF8String(key: string, arguments: Array<string> /* std::vector */): string
      getFormattedUTF8String(key: string, arguments: Object): string
      getFormattedUTF8String(key: string, arguments: Array<utils.LocaleHelper.Param> /* std::vector */): string
      getFormattedUTF8String(key: string, arguments: Object): string
      setLocale(locale: string): boolean
      getLocale(): string
    };
    class Param {
      constructor(strParam: string)
      constructor(intParam: BigInt /* int64_t */)
      constructor(doubleParam: number)
      getParamType(): utils.LocaleHelper.Param.ParamType
      getString(): string
      getInt(): BigInt /* int64_t */
      getDouble(): number
      set(strParam: string): void
      set(intParam: BigInt /* int64_t */): void
      set(doubleParam: number): void
    };
    enum ParamType {
      STRING,
      INTEGER,
      DOUBLE,
      DATE,
    }
  }
}

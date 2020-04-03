declare module 'lumin' {
  namespace utils {

    /**
     * Localization wrapper around ICU
     */
    class LocaleHelper {

      /**
       * Constructor
       * @param locale `default = "en"`<br/> the locale code to initialize the helper with (E.g. "en", "en_US", "es" etc.)
       * @param path `default = "res"`<br/> the path of the icu data file (e.g. "res")
       * @param file `default = "locale"`<br/> the filename of the locale file (the .dat extension is not required)
       */
      constructor(locale?: string, path?: string, file?: string)

      /**
       * Helper method to get the localized path of a resource using the LocaleHelper's current locale
       * @param path is the relative path to the resource
       * @return the path to the resource if found
       */
      getLocalizedPath(path: string): string | null /* std::optional<std::string> */

      /**
       * Initialize the locale helper. This or setLocale must be called before other methods are available.
       * @return true if initialized successfully, false otherwise
       */
      init(): boolean

      /**
       * Format a given string with the given string arguments (only string replacements are possible with this method)
       * @param input the string to format
       * @param arguments a vector of strings - argument names will be numbers (e.g. the first element will be named "0", the second will be "1" etc.)
       * @return the formatted output string
       */
      formatUTF8String(input: string, arguments: Array<string> /* std::vector<std::string> */): string | null /* std::optional<std::string> */

      /**
       * Format a given string with the given string arguments (only string replacements are possible with this method)
       * @param input the string to format
       * @param arguments a map of argument names to argument string values
       * @return the formatted output string
       */
      formatUTF8String(input: string, arguments: { [key:string]: string } | Map<string, string> /* std::unordered_map<std::string, std::string> */): string | null /* std::optional<std::string> */

      /**
       * Format a given string with the given Params
       * @param input the string to format
       * @param arguments a vector of Params - argument names will be numbers (e.g. the first element will be named "0", the second will be "1" etc.)
       * @return the formatted output string
       */
      formatUTF8String(input: string, arguments: Array<utils.LocaleHelper.Param> /* std::vector<Param> */): string | null /* std::optional<std::string> */

      /**
       * Format a given string with the given Params
       * @param input the string to format
       * @param arguments a map of argument names to Params
       * @return the formatted output string
       */
      formatUTF8String(input: string, arguments: { [key:string]: utils.LocaleHelper.Param } | Map<string, utils.LocaleHelper.Param> /* std::unordered_map<std::string, Param> */): string | null /* std::optional<std::string> */

      /**
       * Retrieves a string from the locale data with the given key and performs no formatting
       * @param key the key of the requested localized string
       * @return the requested string
       */
      getUTF8String(key: string): string | null /* std::optional<std::string> */

      /**
       * Locate a string in the locale data with the given key and format it with the given string arguments (only string replacements are possible with this method)
       * @param key the key of the requested localized string
       * @param arguments a vector of strings - argument names will be numbers (e.g. the first element will be named "0", the second will be "1" etc.)
       * @return the formatted output string
       */
      getFormattedUTF8String(key: string, arguments: Array<string> /* std::vector<std::string> */): string | null /* std::optional<std::string> */

      /**
       * Locate a string in the locale data with the given key and format it with the given string arguments (only string replacements are possible with this method)
       * @param key the key of the requested localized string
       * @param arguments a map of argument names to argument string values
       * @return the formatted output string
       */
      getFormattedUTF8String(key: string, arguments: { [key:string]: string } | Map<string, string> /* std::unordered_map<std::string, std::string> */): string | null /* std::optional<std::string> */

      /**
       * Locate a string in the locale data with the given key and format it with the given Params
       * @param key the key of the requested localized string
       * @param arguments a vector of Params - argument names will be numbers (e.g. the first element will be named "0", the second will be "1" etc.)
       * @return the formatted output string
       */
      getFormattedUTF8String(key: string, arguments: Array<utils.LocaleHelper.Param> /* std::vector<Param> */): string | null /* std::optional<std::string> */

      /**
       * Locate a string in the locale data with the given key and format it with the given Params
       * @param key the key of the requested localized string
       * @param arguments a map of argument names to Params
       * @return the formatted output string
       */
      getFormattedUTF8String(key: string, arguments: { [key:string]: utils.LocaleHelper.Param } | Map<string, utils.LocaleHelper.Param> /* std::unordered_map<std::string, Param> */): string | null /* std::optional<std::string> */

      /**
       * Change the locale of the locale helper
       * @param locale the new locale code
       * @return true if locale data was found for the new locale, false otherwise
       */
      setLocale(locale: string): boolean

      /**
       * Get the current locale code
       * @return the current locale code
       */
      getLocale(): string
    }
    namespace LocaleHelper {

      /**
       * Utility class for passing variables to ICU
       */
      class Param {
        constructor(strParam: string)
        constructor(intParam: bigint /* int64_t */)
        constructor(doubleParam: number /* double */)
        getParamType(): utils.LocaleHelper.Param.ParamType
        getString(): string | null /* std::optional<std::string> */
        getInt(): bigint | null /* std::optional<int64_t> */
        getDouble(): number | null /* std::optional<double> */
        set(strParam: string): void
        set(intParam: bigint /* int64_t */): void
        set(doubleParam: number /* double */): void
      }
      namespace Param {
        enum ParamType {
          STRING,
          INTEGER,
          DOUBLE,
          DATE,
        }
      }
    }
  }
}

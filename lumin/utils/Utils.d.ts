declare module 'lumin' {
  namespace files {

    /**
     * Tests whether the file can be opened for reading.
     *
     * @param filePath - path to the file
     * @return true if the file is readable; false otherwise
     *
     * @priv none
     */
    function CanRead(filePath: string): boolean

    /**
     * Returns the extension for a file.
     *
     * @param filepath - path to the file
     * @return File extension deduced from filepath;
     *         e.g. "foo/bar.txt" -> "txt"
     *
     * @priv none
     */
    function Extension(filepath: string): string

    /**
     * Returns the parent folder of a file.
     *
     * @param filepath
     * @return Parent folder deduced from filepath.
     * E.g. "foo/bar/baz.txt" -> "foo/bar"
     *
     * @priv none
     */
    function ParentFolder(filepath: string): string

    /**
     * Returns the file name
     *
     * @param filepath
     * @return file name deduced from filepath.
     * E.g. "foo/bar/baz.txt" -> "baz.txt"
     *
     * @priv none
     */
    function FileName(filepath: string): string
  }
  namespace utils {

    /**
     * Given the lower-left and upper-right corners of an un-rotated quad,
     * builds the texture coordinates for rendering it in full.
     *
     * @param coordsMin Min texture coordinates (lower-left corner).
     * @param coordsMax Max texture coordinates (upper-right corner).
     * @return Texture coordinates for rendering the quad geometry.
     *
     * @priv none
     */
    function BuildTexCoords(coordsMin: [number, number] | Float32Array /* glm::vec2 */, coordsMax: [number, number] | Float32Array /* glm::vec2 */): Array<[number, number]> /* std::vector<glm::vec2> */

    /**
     * Applies std::tolower to every character of the input string.
     *
     * @param str string of ASCII characters (UTF-8 doesn't work with this function).
     * @return a new string containing the characters of str with std::tolower applied.
     *
     * @priv none
     */
    function ToLower(str: string): string

    /**
     * Applies std::toupper to every character of the input string.
     *
     * @param str string of ASCII characters (UTF-8 doesn't work with this function).
     * @return a new string containing the characters of str with std::toupper applied.
     *
     * @priv none
     */
    function ToUpper(str: string): string

    /**
     * Converts a UTF32 string into the UTF8 equivalent.
     *
     * @priv none
     */
    function Utf32ToUtf8(utf32String: string): string

    /**
     * Converts a UTF8 string into the UTF32 equivalent.
     *
     * @priv none
     */
    function Utf8ToUtf32(utf8String: string): string

    /**
     * Converts from ASCII to unicode.
     *
     * @priv none
     */
    function ToUnicode(ascii: string): string

    /**
     * Truncates all characters to the range of char.
     *
     * @priv none
     */
    function ToAscii(unicode: string): string
  }
}

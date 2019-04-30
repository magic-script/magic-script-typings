declare module 'lumin' {
  namespace files {
    function CanRead(filePath: string): boolean
    function Extension(filepath: string): string
    function ParentFolder(filepath: string): string
    function FileName(filepath: string): string
  }
  namespace utils {
    function BuildTexCoords(coordsMin: [number, number] /* glm::vec2 */, coordsMax: [number, number] /* glm::vec2 */): Array<[number, number] /* glm::vec2 */> /* std::vector */
    function ToLower(str: string): string
    function ToUpper(str: string): string
    function Utf32ToUtf8(utf32String: string): string
    function Utf8ToUtf32(utf8String: string): string
    function ToUnicode(ascii: string): string
    function ToAscii(unicode: string): string
  }
}

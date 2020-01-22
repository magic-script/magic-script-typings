/**
 * This is minimal bindings to libpng needed by webgl polyfills to allow loading png textures.
 */
declare module "png" {
    /**
     * Decode a png image.
     * @param data The raw contents of the png file.
     * @returns the decoded bitmap data, typically 24-bit RGBA color format.
     */
    function decode(data: ArrayBuffer): { width: number, height: number, bpp: number, pixels: ArrayBuffer };
}

/**
 * This is minimal bindings to libjpeg needed by webgl polyfills to allow loading jpeg textures.
 */
declare module "jpeg" {
    /**
     * Decode a jpeg image.
     * @param data The raw contents of the jpeg file.
     * @returns the decoded bitmap data, typically 24-bit RGBA color format.
     */
    function decode(data: ArrayBuffer): { width: number, height: number, bpp: number, pixels: ArrayBuffer };
}

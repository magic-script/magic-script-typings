
declare module "png" {
    function decode(data: ArrayBuffer): { width: number, height: number, bpp: number, pixels: ArrayBuffer };
}

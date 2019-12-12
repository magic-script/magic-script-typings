declare module "jpeg" {
    function decode(data: ArrayBuffer): { width: number, height: number, bpp: number, pixels: ArrayBuffer };
}

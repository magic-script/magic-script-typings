declare module 'lumin' {
  class Desc3d {
    readonly DEFAULT: Desc3d = Desc3d();
    allowMipmaps: boolean;
    numMipmaps: number;
    params: utils.Params3d;
    constructor()
    equals(rhs: Desc3d): boolean
  };
  class Texture3dResource extends Resource {
    constructor()
    getTextureDesc(): Desc3d
    getFormat(): utils.Format
    getWidth(): number
    getHeight(): number
    getDepth(): number
  };
}

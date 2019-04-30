declare module 'lumin' {
  class Desc2d {
    readonly DEFAULT: Desc2d = Desc2d();
    upscaleToRGB: boolean;
    allowMipmaps: boolean;
    numMipmaps: number;
    params: utils.Params2d;
    constructor()
  };
  class TextureResource extends FileResource {
    constructor() {}
    getTextureDesc(): Desc2d
    getUnlitTex2dShader(): utils.ShaderType
    getWidth(): number
    getHeight(): number
  };
}

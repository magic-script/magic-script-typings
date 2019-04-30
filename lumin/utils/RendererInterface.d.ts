declare module 'lumin' {
  namespace utils {
    enum ShaderType {
      kPbr = 0,
      kUnlitTextured,
      kDiffuseNormalSpec,
    }
    enum LightType {
      Directional = 0,
      Point,
      Spot,
    }
    enum Filter {
      kNearest,
      kLinear,
    }
    enum Wrap {
      kClampToEdge,
      kRepeat,
      kMirroredRepeat,
    }
    class Params2d {
      readonly DEFAULT: utils.Params2d = Params2d();
      uCoordWrap: utils.Wrap;
      vCoordWrap: utils.Wrap;
      magFilter: utils.Filter;
      minFilter: utils.Filter;
      mipMapFilter: utils.Filter;
      maxMipLevel: number;
      maxAnisotropy: number;
      lodBias: number;
      constructor()
    };
  }
}

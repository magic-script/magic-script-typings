declare module 'lumin' {
  namespace utils {
    enum PrimitiveType {
      kTriangles = 4,
      kTriangleStrip = 5,
      kTriangleFan = 6,
    }
    enum LayoutLocation {
      kNotSupported = -1,
      kLocation0 = 0,
      kLocation1 = 1,
      kLocation2 = 2,
      kLocation3 = 3,
      kLocation4 = 4,
      kLocation5 = 5,
      kLocation6 = 6,
      kLocation7 = 7,
      kLocation8 = 8,
      kLocation9 = 9,
      kLocation10 = 10,
      kLocation11 = 11,
      kLocation12 = 12,
      kLocation13 = 13,
      kLocation14 = 14,
      kLocation15 = 15,
      kPosition = kLocation0,
      kUV = kLocation1,
      kNormal = kLocation2,
      kPalette = kLocation5,
      kWeight = kLocation6,
      kColor = kLocation7,
    }
    enum AttributeType {
      kNotSupported = -1,
      kByte1 = 0,
      kByte2,
      kByte3,
      kByte4,
      kUByte1,
      kUByte2,
      kUByte3,
      kUByte4,
      kShort1,
      kShort2,
      kShort3,
      kShort4,
      kUShort1,
      kUShort2,
      kUShort3,
      kUShort4,
      kInt1,
      kInt2,
      kInt3,
      kInt4,
      kUInt1,
      kUInt2,
      kUInt3,
      kUInt4,
      kFloat1,
      kFloat2,
      kFloat3,
      kFloat4,
      kHalfFloat1,
      kHalfFloat2,
      kHalfFloat3,
      kHalfFloat4,
    }
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
    enum Format {
      INVALID,
      GRAY,
      GRAY_ALPHA,
      RGB,
      RGBA,
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
    class Params3d {
      readonly DEFAULT: utils.Params3d = Params3d();
      uCoordWrap: utils.Wrap;
      vCoordWrap: utils.Wrap;
      wCoordWrap: utils.Wrap;
      magFilter: utils.Filter;
      minFilter: utils.Filter;
      mipMapFilter: utils.Filter;
      constructor()
    };
  }
}

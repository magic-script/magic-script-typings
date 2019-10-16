declare module 'lumin' {
  namespace utils {

    /** PrimitiveType The primitive type (mode) used for drawing */
    enum PrimitiveType {
      kTriangles = 4,
      kTriangleStrip = 5,
      kTriangleFan = 6,
    }

    /** LayoutLocation maps a vertex attribute to a shader location */
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

      /**
       * Mesh streams
       */
      kPosition = kLocation0,
      kUV = kLocation1,
      kNormal = kLocation2,
      kPalette = kLocation5,
      kWeight = kLocation6,
      kColor = kLocation7,
    }

    /** AttributeType The datatype and elements count (number of elements used in) an attribute */
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

    /** Shader types for rendering objects */
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

    /** Texture filtering type. */
    enum Filter {
      kNearest,
      kLinear,
    }

    /** Control texture wrapping when a texture coordinate is outside the [0, 1] range. */
    enum Wrap {
      kClampToEdge,
      kRepeat,
      kMirroredRepeat,
    }

    /** Pixel format type. */
    enum Format {
      INVALID,
      GRAY,
      GRAY_ALPHA,
      RGB,
      RGBA,
    }

    /**
     * Parameters for how rendered textures will appear.
     */
    class Params2d {

      /** Useful for a wide variety of texturing use cases. */
      readonly DEFAULT: utils.Params2d = Params2d();

      /**
       * Horizontal
       */
      uCoordWrap: utils.Wrap;

      /**
       * Vertical
       */
      vCoordWrap: utils.Wrap;
      magFilter: utils.Filter;
      minFilter: utils.Filter;
      mipMapFilter: utils.Filter;
      maxMipLevel: number;
      maxAnisotropy: number;
      lodBias: number;
      constructor()
    };

    /**
     * Parameters for how rendered 3d textures will appear.
     */
    class Params3d {

      /** Useful for a wide variety of texturing use cases. */
      readonly DEFAULT: utils.Params3d = Params3d();

      /** Horizontal wrapping mode */
      uCoordWrap: utils.Wrap;

      /** Vertical wrapping mode */
      vCoordWrap: utils.Wrap;

      /** Depth wrapping mode */
      wCoordWrap: utils.Wrap;

      /** MAG filter mode */
      magFilter: utils.Filter;

      /** MIN filter mode */
      minFilter: utils.Filter;

      /** MIP MAP filter mode */
      mipMapFilter: utils.Filter;
      constructor()
    };
  }
}

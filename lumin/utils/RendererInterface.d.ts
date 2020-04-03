declare module 'lumin' {
  namespace utils {

    /** PrimitiveType The primitive type (mode) used for drawing */
    enum PrimitiveType {

      /**
       * `value = 4`
       */
      kTriangles,

      /**
       * `value = 5`
       */
      kTriangleStrip,

      /**
       * `value = 6`
       */
      kTriangleFan,
    }

    /** LayoutLocation maps a vertex attribute to a shader location */
    enum LayoutLocation {

      /**
       * `value = -1`
       */
      kNotSupported,

      /**
       * `value = 0`
       */
      kLocation0,

      /**
       * `value = 1`
       */
      kLocation1,

      /**
       * `value = 2`
       */
      kLocation2,

      /**
       * `value = 3`
       */
      kLocation3,

      /**
       * `value = 4`
       */
      kLocation4,

      /**
       * `value = 5`
       */
      kLocation5,

      /**
       * `value = 6`
       */
      kLocation6,

      /**
       * `value = 7`
       */
      kLocation7,

      /**
       * `value = 8`
       */
      kLocation8,

      /**
       * `value = 9`
       */
      kLocation9,

      /**
       * `value = 10`
       */
      kLocation10,

      /**
       * `value = 11`
       */
      kLocation11,

      /**
       * `value = 12`
       */
      kLocation12,

      /**
       * `value = 13`
       */
      kLocation13,

      /**
       * `value = 14`
       */
      kLocation14,

      /**
       * `value = 15`
       */
      kLocation15,

      /**
       * Mesh streams
       *
       * `value = kLocation0`
       */
      kPosition,

      /**
       * `value = kLocation1`
       */
      kUV,

      /**
       * `value = kLocation2`
       */
      kNormal,

      /**
       * `value = kLocation5`
       */
      kPalette,

      /**
       * `value = kLocation6`
       */
      kWeight,

      /**
       * `value = kLocation7`
       */
      kColor,
    }

    /** AttributeType The datatype and elements count (number of elements used in) an attribute */
    enum AttributeType {

      /**
       * `value = -1`
       */
      kNotSupported,

      /**
       * `value = 0`
       */
      kByte1,
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

      /**
       * `value = 0`
       */
      kPbr,
      kUnlitTextured,
      kDiffuseNormalSpec,
    }
    enum LightType {

      /**
       * `value = 0`
       */
      Directional,
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

      /** Useful for a wide variety of texturing use cases.
       * `value = Params2d()`
       */
      static readonly DEFAULT: utils.Params2d;

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
      maxMipLevel: number /* uint32_t */;
      maxAnisotropy: number /* float */;
      lodBias: number /* float */;
      constructor()
    }

    /**
     * Parameters for how rendered 3d textures will appear.
     */
    class Params3d {

      /** Useful for a wide variety of texturing use cases.
       * `value = Params3d()`
       */
      static readonly DEFAULT: utils.Params3d;

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
    }
  }
}

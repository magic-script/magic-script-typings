declare module 'lumin' {
  namespace utils {

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
  }
}

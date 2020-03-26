declare module 'lumin' {
  namespace multipack {

    /** Parameters used to control initialization of a texture multi-pack descriptor. */
    class Params {

      /**
       * `value = Params()`
       */
      static readonly DEFAULT: multipack.Params;

      /**
       * If mipmapping is enabled or disabled.
       */
      allowMipmaps: boolean;

      /**
       * if 0 and mipmaps are allowed, full mipmap is used, else the num. Defaults to 0
       */
      numMipmaps: number /* int8_t */;

      /**
       * All textures will use the same magnification filter.
       */
      magFilter: utils.Filter;

      /**
       * All textures will use the same minification filter.
       */
      minFilter: utils.Filter;

      /**
       * All textures will use the same mipmap filter.
       */
      mipMapFilter: utils.Filter;

      /** By default, packed textures use mipmaps with trilinear filtering for best image quality when rendering. */
      constructor()
    }

    /** Indexed pair of files per sheet in the texture multi-pack. */
    class SheetFiles {

      /**
       * Index of the sheet in the multi-pack.
       */
      index: number /* uint32_t */;

      /**
       * Contains the meta-data
       */
      jsonFile: string;

      /**
       * Contains the binary image.
       */
      imageFile: string;

      /** Copy the files and meta-data into the object's fields. */
      constructor(index: number /* uint32_t */, jsonFile: string, imageFile: string)

      /**
       * Construct an empty object; see empty().
       */
      constructor()

      /**
       * True if either file is empty.
       */
      empty(): boolean
    }

    /**
     * Describes a sub-texture, which is a texture packed within a larger texture.
     */
    class SubTexture {

      /**
       * Sentinal value representing no sub-texture.
       *
       * `value = SubTexture()`
       */
      static readonly NONE: multipack.SubTexture;

      /**
       * Unique name of the sub-texture; often a source-image (e.g., "Tex1.png").
       */
      name: string;

      /**
       * Index of the sheet in the muli-pack that contains the sub-texture.
       */
      sheetIndex: number /* uint32_t */;

      /**
       * Min coordinates of the sub-texture; (x, y) both between [0, 1].
       */
      coordsMin: [number, number] /* glm::vec2 */;

      /**
       * Max coordinates of the sub-texture; (x, y) both between [0, 1].
       */
      coordsMax: [number, number] /* glm::vec2 */;

      /**
       * The offest to the starting pixel in the source image.
       */
      startXY: [number, number] /* glm::ivec2 */;

      /**
       * The size of the sub texture in pixels.
       */
      size: [number, number] /* glm::ivec2 */;

      /**
       * Position inside the sub-texture used as the center for rotation.
       */
      pivotPoint: [number, number] /* glm::vec2 */;

      /**
       * Rotation angle in degrees wrt the main texture (e.g., to save space).
       */
      rotation: number /* float */;
      constructor(a_name?: string, a_sheetIndex?: number /* uint32_t */, a_coordsMin?: [number, number] | Float32Array /* glm::vec2 */, a_coordsMax?: [number, number] | Float32Array /* glm::vec2 */, a_startXY?: [number, number] | Float32Array /* glm::ivec2 */, a_size?: [number, number] | Float32Array /* glm::ivec2 */, a_pivotPoint?: [number, number] | Float32Array /* glm::vec2 */, a_rotation?: number /* float */)

      /**
       * True if name is empty.
       */
      isNone(): boolean

      /**
       * String representation.
       */
      toString(): string
    }

    /**
     * Describes the pre-generated data used to initialize a
     * TexturePackResource, which includes one or more JSON
     * data files corresponding to packed-texture images, as
     * well as extra parameters and information.  Provides
     * the data and facilities required to access sub-textures.
     */
    class Descriptor {

      /**
       * Descriptor factory function that scans the given directory on
       * the local file system (not recursively) for JSON files that
       * correspond to exported, packed-texture images.  The multi-
       * pack descriptor used to initialize a TexturePackResource
       * is assembled from this information.  Note the lists in the
       * returned object are in alphabetical order.
       *
       * @param directory A directory containing packed-texture images.
       * @param params `default = Params.DEFAULT`<br/> To control the rendering of the images.
       * @return The information gathered about the texture multi-pack.
       */
      static Assemble(directory: string, params?: multipack.Params): multipack.Descriptor

      /**
       * Descriptor factory function that opens JSON files that
       * correspond to exported, packed-texture images.  The multi-
       * pack descriptor used to initialize a TexturePackResource
       * is assembled from this information.  Note the lists in the
       * returned object are in alphabetical order.
       *
       * @param vMetaDataNames A list of texture pack meta data file names.
       * @param params `default = Params.DEFAULT`<br/> To control the rendering of the images.
       * @return The information gathered about the texture multi-pack.
       */
      static Assemble(vMetaDataNames: Array<string> /* std::vector<std::string> */, params?: multipack.Params): multipack.Descriptor

      /**
       * Default initialize all fields
       */
      constructor()

      /** Initialize the fields with the given parameters, guaranteeing the lists are ordered. */
      constructor(location: string, sheets: Array<multipack.SheetFiles> /* std::vector<SheetFiles> */, subTextures: Array<multipack.SubTexture> /* std::vector<SubTexture> */, params: multipack.Params)

      /** True if no sheets are present in the multi-pack. */
      empty(): boolean

      /** Where the data is located (often a directory); see Assemble(). */
      getLocation(): string

      /** Parameters that control the rendering of the textures. */
      getParams(): multipack.Params

      /** Number of sheets contained in the multi-pack. */
      getSheetCount(): number /* uint32_t */

      /** List of sheets contained in the texture multi-pack, which is ordered by SheetFiles::index. */
      getSheets(): Array<multipack.SheetFiles> /* std::vector<SheetFiles> */

      /** Number of sub-textures contained in the multi-pack. */
      getSubTextureCount(): number /* uint32_t */

      /** List of sub-textures, which is ordered by SubTexture::name. */
      getSubTextures(): Array<multipack.SubTexture> /* std::vector<SubTexture> */
    }
  }
}

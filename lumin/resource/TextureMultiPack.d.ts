declare module 'lumin' {
  namespace multipack {
    class Params {
      readonly DEFAULT: multipack.Params = Params();
      allowMipmaps: boolean;
      numMipmaps: number;
      magFilter: utils.Filter;
      minFilter: utils.Filter;
      mipMapFilter: utils.Filter;
      constructor()
    };
    class SheetFiles {
      index: number;
      jsonFile: string;
      imageFile: string;
      constructor(index: number, jsonFile: string, imageFile: string)
      constructor()
      empty(): boolean
    };
    class SubTexture {
      readonly NONE: multipack.SubTexture = SubTexture();
      name: string;
      sheetIndex: number;
      coordsMin: [number, number] /* glm::vec2 */;
      coordsMax: [number, number] /* glm::vec2 */;
      startXY: [number, number] /* glm::ivec2 */;
      size: [number, number] /* glm::ivec2 */;
      pivotPoint: [number, number] /* glm::vec2 */;
      rotation: number;
      constructor(a_name: string = 0 /* 0 is not the actual default value */, a_sheetIndex: number = 0 /* 0 is not the actual default value */, a_coordsMin: [number, number] /* glm::vec2 */ = 0 /* 0 is not the actual default value */, a_coordsMax: [number, number] /* glm::vec2 */ = 0 /* 0 is not the actual default value */, a_startXY: [number, number] /* glm::ivec2 */ = 0 /* 0 is not the actual default value */, a_size: [number, number] /* glm::ivec2 */ = 0 /* 0 is not the actual default value */, a_pivotPoint: [number, number] /* glm::vec2 */ = 0 /* 0 is not the actual default value */, a_rotation: number = 0 /* 0 is not the actual default value */)
      isNone(): boolean
      toString(): string
    };
    class Descriptor {
      static Assemble(directory: string, params: multipack.Params = 0 /* 0 is not the actual default value */): multipack.Descriptor
      static Assemble(vMetaDataNames: Array<string> /* std::vector */, params: multipack.Params = 0 /* 0 is not the actual default value */): multipack.Descriptor
      constructor()
      constructor(location: string, sheets: Array<multipack.SheetFiles> /* std::vector */, subTextures: Array<multipack.SubTexture> /* std::vector */, params: multipack.Params)
      empty(): boolean
      getLocation(): string
      getParams(): multipack.Params
      getSheetCount(): number
      getSheets(): Array<multipack.SheetFiles> /* std::vector */
      getSubTextureCount(): number
      getSubTextures(): Array<multipack.SubTexture> /* std::vector */
    };
  }
}

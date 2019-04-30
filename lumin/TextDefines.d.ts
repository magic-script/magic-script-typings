declare module 'lumin' {
  namespace text {
    enum FlowDirection {
      kBelow,
      kAbove,
      kRight,
      kLeft,
    }
    enum Justification {
      kStart,
      kCentered,
      kEnd,
      kJustified,
    }
    class FixedBoundsData {
      width: number;
      height: number;
      wrap: boolean;
      clip: boolean;
      constructor(width: number, height: number, wrap: boolean = 0 /* 0 is not the actual default value */, clip: boolean = 0 /* 0 is not the actual default value */)
      constructor()
      toString(): string
    };
    function IsVertical(direction: text.FlowDirection): boolean
    function IsNegative(direction: text.FlowDirection): boolean
  }
  namespace glyph {
    const NUL_CHAR: number = 0;
    const NEWLINE: number = '\n';
    const TAB_CHAR: number = '\t';
    const SPACE_CHAR: number = ' ';
    const DEFAULT_GLYPH_SIZE: number = 128;
    const INVALID_HEIGHT: number = 0;
    const BASE_TEXTURE_LEVEL: number = 0;
    const MIN_MIPMAP_TILE_SIZE: number = 2;
    namespace kerning {
      class Pair {
        previous: number;
        character: number;
        readonly NONE: [number, number] /* glm::vec2 */ = [0,0];
        static IsNone(vector: [number, number] /* glm::vec2 */): boolean
        constructor(prev: number, code: number)
        toString(assumeAscii: boolean = 0 /* 0 is not the actual default value */): string
        equals(rhs: glyph.kerning.Pair): boolean
      };
    }
    enum TextureSize {
      kNormal,
      kLarge,
    }
    enum Quality {
      kFast,
      kStd,
      kStd0,
      kExper,
      kEnh1Fast,
      kEnh1,
      kEnh1AA,
      kEnh2,
      kEnh3,
    }
    enum AdvanceDirection {
      kRight,
      kLeft,
      kDown,
      kUp,
    }
    class Metrics {
      advancePen: glyph.Metrics.AdvancePen;
      horizBB: glyph.Metrics.BoundingBox;
      vertBB: glyph.Metrics.BoundingBox;
      padding: [number, number] /* glm::vec2 */;
      constructor(ap: glyph.Metrics.AdvancePen, hbb: glyph.Metrics.BoundingBox, vbb: glyph.Metrics.BoundingBox)
      constructor()
      toString(): string
    };
    class AdvancePen {
      horizontal: number;
      vertical: number;
      constructor(horizontal: number = 0 /* 0 is not the actual default value */, vertical: number = 0 /* 0 is not the actual default value */)
      toString(): string
    };
    class BoundingBox {
      horizMin: number;
      horizMax: number;
      vertMin: number;
      vertMax: number;
      constructor(xmin: number = 0 /* 0 is not the actual default value */, xmax: number = 0 /* 0 is not the actual default value */, ymin: number = 0 /* 0 is not the actual default value */, ymax: number = 0 /* 0 is not the actual default value */)
      getWidth(): number
      getHeight(): number
      getAspectRatio(): number
      toString(): string
    };
    class TileInfo {
      readonly NO_TILE: glyph.TileInfo = TileInfo(NUL_CHAR,0,0,[],[],TextureSize.kNormal,Metrics());
      charCode: number;
      textureId: number;
      layerIndex: number;
      texMinCoord: [number, number] /* glm::vec2 */;
      texMaxCoord: [number, number] /* glm::vec2 */;
      textureSize: glyph.TextureSize;
      metrics: glyph.Metrics;
      constructor(code: number, texId: number, layer: number, texMin: [number, number] /* glm::vec2 */, texMax: [number, number] /* glm::vec2 */, size: glyph.TextureSize, mt: glyph.Metrics)
    };
    class Font2dDesc {
      readonly DEFAULT: glyph.Font2dDesc = Font2dDesc(AdvanceDirection.kRight,text.FlowDirection.kBelow,DEFAULT_GLYPH_SIZE,Quality.kStd);
      advanceDirection: glyph.AdvanceDirection;
      flowDirection: text.FlowDirection;
      tileSize: number;
      quality: glyph.Quality;
      minAlphaToDiscard: number;
      constructor(advanceDir: glyph.AdvanceDirection, flowDir: text.FlowDirection, tileSize: number, quality: glyph.Quality = 0 /* 0 is not the actual default value */, minAlpha: number = 0 /* 0 is not the actual default value */)
    };
    function GetSizeRatio(size: glyph.TextureSize): number
    function RequiresPreconditioning(qualityLevel: glyph.Quality): boolean
    function IsSpecialCharacter(charCode: number): boolean
    function IsVertical(direction: glyph.AdvanceDirection): boolean
    function IsNegative(direction: glyph.AdvanceDirection): boolean
    function FromSizeRatio(sizeRatio: number): glyph.TextureSize
    function PixelFormatNormalizationFactor(tileSize: number): number
  }
  class Text2dDesc {
    unicodeText: string;
    advanceDirection: glyph.AdvanceDirection;
    flowDirection: text.FlowDirection;
    glyphHeight: number;
    tabWidth: number;
    lineSpacing: number;
    characterSpacing: number;
    maxGlyphsPerLine: number;
    justification: text.Justification;
    colorRGBA: [number, number, number, number] /* glm::vec4 */;
    constructor(text: string)
  };
  function ToString(vector: [number, number] /* glm::vec2 */): string
  function ToString(size: glyph.TextureSize): string
  function ToString(quality: glyph.Quality): string
}

declare module 'lumin' {
  namespace resources {
    class Preloaded {
      constructor() {}
      getDefaultUiFontStylesAndWeights(): Array<resources.Preloaded.StyleAndWeight> /* std::vector */
      getDefaultUiFont2d(style: resources.FontStyle = 0 /* 0 is not the actual default value */, weight: resources.FontWeight = 0 /* 0 is not the actual default value */): Font2dResource
      getDefaultUiFont2d(styleAndWeight: resources.Preloaded.StyleAndWeight): Font2dResource
    };
    class StyleAndWeight {
      first: resources.FontStyle;
      second: resources.FontWeight;
      constructor()
    };
  }
}

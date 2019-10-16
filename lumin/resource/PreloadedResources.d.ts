declare module 'lumin' {
  namespace resources {

    /**
     * This class encapsulates preloaded resources available for use
     * by all Lumin clients. These resources are not configurable, never change
     * after the server is started, and their backing data sources are not
     * available to clients.
     */
    class Preloaded {
      constructor()

      /**
       * Get a list of all supported styles and weights for the default UI font.
       *
       * @priv none
       */
      getDefaultUiFontStylesAndWeights(): Array<resources.Preloaded.StyleAndWeight> /* std::vector */

      /**
       * Get the Magic Leap default UI font, which is called Lomino.
       *
       * @param [style=FontStyle.kNormal] The style of UI font.
       * @param [weight=FontWeight.kRegular] The weight (i.e., thickness) of the UI font.
       *
       * @priv none
       */
      getDefaultUiFont2d(style: resources.FontStyle = 0 /* 0 is not the actual default value */, weight: resources.FontWeight = 0 /* 0 is not the actual default value */): Font2dResource

      /**
       * Get the Magic Leap default UI font, which is called Lomino.
       *
       * @param styleAndWeight The style and weight (i.e., thickness) of the UI font.
       *
       * @priv none
       */
      getDefaultUiFont2d(styleAndWeight: resources.Preloaded.StyleAndWeight): Font2dResource
    };
    class StyleAndWeight {
      first: resources.FontStyle;
      second: resources.FontWeight;
      constructor()
    };
  }
}

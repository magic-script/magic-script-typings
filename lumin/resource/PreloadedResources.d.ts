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
      getDefaultUiFontStylesAndWeights(): Array<resources.Preloaded.StyleAndWeight> /* std::vector<StyleAndWeight> */

      /**
       * Get the Magic Leap default UI font, which is called Lomino.
       *
       * @param style `default = FontStyle.kNormal`<br/> The style of UI font.
       * @param weight `default = FontWeight.kRegular`<br/> The weight (i.e., thickness) of the UI font.
       *
       * @priv none
       */
      getDefaultUiFont2d(style?: resources.FontStyle, weight?: resources.FontWeight): Font2dResource | null

      /**
       * Get the Magic Leap default UI font, which is called Lomino.
       *
       * @param styleAndWeight The style and weight (i.e., thickness) of the UI font.
       *
       * @priv none
       */
      getDefaultUiFont2d(styleAndWeight: resources.Preloaded.StyleAndWeight): Font2dResource | null
    }
    namespace Preloaded {
      class StyleAndWeight {
        first: resources.FontStyle;
        second: resources.FontWeight;
        constructor()
      }
    }
  }
}

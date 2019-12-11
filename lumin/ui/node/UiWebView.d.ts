declare module 'lumin' {
  namespace ui {

    /**
     * UiWebView - This node renders web content (HTML, css, javascript).
     * and provides a simiplified browsing feature set.
     *
     * To embed web content:
     *  Create and add this node into the application node tree.
     * To receive notifications from UiWebView:
     *  Set a web view client using 'setWebViewClient'.
     *  UiWebView will notify errors or statechanges.
     */
    class UiWebView extends UiNode {
      constructor()

      /**
       * Creates a UiWebView element.
       *
       * @param volume The volume to create this UiWebView for.
       * @param size the width and height of the WebView
       * @return the new UiWebView node
       */
      static Create(volume: Prism, size: [number, number] /* glm::vec2 */): ui.UiWebView

      /**
       * Set the URL to load in the webview
       *
       * @param url local or remote web url to load in webview
       */
      loadUrl(url: string): void

      /**
       * Get current page URL
       *
       * @return the current page url
       */
      getUrl(): string

      /**
       * Get the webview size.
       *
       * @return the webview size.
       */
      getSize(): [number, number] /* glm::vec2 */

      /**
       * Scroll webview in the given direction.
       *
       * @param xpixels amount of pixels to scroll on x
       * @param ypixels amount of pixels to scroll on y
       */
      scrollBy(xpixels: number /* int */, ypixels: number /* int */): void

      /**
       * Provides DataManager for the webview.
       *
       * Data manager manages web data such as cookies, passwords, cache etc.
       * If the UiWebView is not valid, all API calls to it's data manager
       * is ignored.
       *
       * @return a pointer to UiWebViewDataManager.
       */
      getDataManagerInstance(): ui.UiWebViewDataManager

      /**
       * Set WebViewClient to receive events from webview.
       *
       * Web view client receives notifications from UiWebView on errors
       * state changes etc. Application can set the same web view client on
       * multiple UiWebViews. Set nullptr to stop receiving events from webview.
       *
       * @param client a pointer to UiWebViewClient instance.
       */
      setWebViewClient(client: ui.UiWebViewClient): void
    }
  }
}

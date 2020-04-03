declare module 'lumin' {
  namespace ui {

    /**
     * UiWebViewDataManager This class manages the web data related to UiWebView.
     *
     * Data manager manages web data such as cookies, passwords, cache etc.
     * Request an instance from UiWebView via 'getDataManagerInstance()'
     */
    class UiWebViewDataManager {
      constructor()

      /**
       * Remove all cookies for the webview
       */
      removeAllCookies(): void

      /**
       * Clear Cache across all webviews hosted
       * by the app
       */
      clearCache(): void
    }
  }
}

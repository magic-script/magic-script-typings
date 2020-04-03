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
    class UiWebView extends ui.UiNode {
      constructor()

      /**
       * Enables web inspector for all the UiWebViews in the App.
       * Call this before creating the first UiWebView.
       * Once enabled, the webinspector will be enabled for lifetime
       * of the app.
       */
      static EnableWebInspector(): void

      /**
       * Creates a UiWebView element.
       *
       * @param volume The volume to create this UiWebView for.
       * @param size the width and height of the WebView
       * @return the new UiWebView node
       */
      static Create(volume: Prism | null, size: [number, number] | Float32Array /* glm::vec2 */): ui.UiWebView | null

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
       * Provides if UiWebView has back navigation entry.
       *
       * @return true if UiWebView can navigate back, else false.
       */
      canGoBack(): boolean

      /**
       * Provides if UiWebView has forward navigation entry.
       *
       * @return true if UiWebView can navigate forward, else false.
       */
      canGoForward(): boolean

      /**
       * Reloads current page.
       */
      reload(): void

      /**
       * If UiWebView has back navigation entry then goes back to
       * to the previous page.
       */
      goBack(): void

      /**
       * If UiWebView has forward navigation entry then goes forward to
       * to the next page.
       */
      goForward(): void

      /**
       * Provides DataManager for the webview.
       *
       * Data manager manages web data such as cookies, passwords, cache etc.
       * If the UiWebView is not valid, all API calls to it's data manager
       * is ignored.
       *
       * @return a pointer to UiWebViewDataManager.
       */
      getDataManagerInstance(): ui.UiWebViewDataManager | null /* std::shared_ptr<UiWebViewDataManager> */

      /**
       * Set WebViewClient to receive events from webview.
       *
       * Web view client receives notifications from UiWebView on errors
       * state changes etc. Application can set the same web view client on
       * multiple UiWebViews. Set nullptr to stop receiving events from webview.
       *
       * @param client a pointer to UiWebViewClient instance.
       */
      setWebViewClient(client: ui.UiWebViewClient | null): void

      /**
       * Set the speech to text property for virtual keyboard
       *
       * Enable/Disable the speech to text functionality of the virtual keyboard.
       * By default speech to text is enabled.
       *
       * @param enabled a boolean value for enabling/disabling keyboard speech to text
       */
      setVirtualKeyboardSpeechToText(enabled: boolean): void

      /**
       * Retrieves the speech to text property for virtual keyboard
       *
       * Return the speech to text property for virtual keyboard.
       * By default speech to text is enabled.
       *
       * @return a boolean value for the property
       */
      getVirtualKeyboardSpeechToText(): boolean

      /**
       * Set the disallow http request flag for the webview
       *
       * Enable/Disable the disallow http request for webview
       * By default this flag is disabled.
       *
       * @param enabled a boolean value for enabling/disabling the ability to perform http requests
       */
      setDisallowHttpRequest(enabled: boolean): void

      /**
       * Retrieves the disallow http request flag for the webview
       *
       * Return the disallow http request flag for the webview
       * By default this flag is disabled
       *
       * @return a boolean value for the property
       */
      getDisallowHttpRequest(): boolean
    }
  }
}

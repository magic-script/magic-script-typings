declare module 'lumin' {
  namespace ui {

    /**
     * UiWebViewClient Applications should implement this interface
     * to receive events from UiWebView. Register an instance of
     * UiWebViewClient with the UiWebView instance using the API:
     * 'setWebViewClient'.
     */
    class UiWebViewClient {
      constructor()

      /**
       * Notify the host application that resource will be loaded.
       *
       * @param webview the UiWebView that triggered this call.
       * @param resource_url the url of the resource about to be loaded.
       */
      onBeforeResourceLoad(webview: ui.UiWebView | null, resource_url: string): void

      /**
       * Notify host application to handle external schemes/protocols (that
       * are not handled by webview). Any non-standard browser schemes
       * (other than: http, https, file etc) are treated as external schemes.
       *
       * @param webview the UiWebView that triggered this call.
       * @param url the url for external scheme or protocol
       */
      onExternalProtocol(webview: ui.UiWebView | null, url: string): void

      /**
       * Notify host application of load completion. http error code is set if any error
       * occurred. 0 error code implies no error.
       *
       * @param webview the UiWebView that triggered this call.
       * @param is_main_frame if this event was for the main frame.
       * @param http_error_code the standard http error code, 0 is returned for success.
       */
      onLoadEnd(webview: ui.UiWebView | null, is_main_frame: boolean, http_error_code: number /* int */): void

      /**
       * Notify host application of load error. These errors could be due to connectivity,
       * certificate errors etc. The error string is the stringified version of the
       * error code.
       *
       * @param webview the UiWebView that triggered this call.
       * @param is_main_frame if this event was for the main frame.
       * @param error_code error code for the error
       * @param error_str human readable error string
       * @param failed_url the url that caused the load error
       */
      onLoadError(webview: ui.UiWebView | null, is_main_frame: boolean, error_code: number /* int */, error_str: string, failed_url: string): void
    }
  }
}

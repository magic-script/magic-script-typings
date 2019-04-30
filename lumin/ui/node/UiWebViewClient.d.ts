declare module 'lumin' {
  namespace ui {
    class UiWebViewClient {
      constructor()
      onBeforeResourceLoad(webview: ui.UiWebView, resource_url: string): void
      onExternalProtocol(webview: ui.UiWebView, url: string): void
      onLoadEnd(webview: ui.UiWebView, is_main_frame: boolean, http_error_code: number): void
      onLoadError(webview: ui.UiWebView, is_main_frame: boolean, error_code: number, error_str: string, failed_url: string): void
    };
  }
}

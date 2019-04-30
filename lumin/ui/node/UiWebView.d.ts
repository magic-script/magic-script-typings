declare module 'lumin' {
  namespace ui {
    class UiWebView extends UiNode {
      constructor() {}
      static EnableWebInspector(): void
      static Create(volume: Prism, size: [number, number] /* glm::vec2 */): ui.UiWebView
      loadUrl(url: string): void
      getUrl(): string
      getSize(): [number, number] /* glm::vec2 */
      scrollBy(xpixels: number, ypixels: number): void
      canGoBack(): boolean
      canGoForward(): boolean
      reload(): void
      goBack(): void
      goForward(): void
      getDataManagerInstance(): ui.UiWebViewDataManager
      setWebViewClient(client: ui.UiWebViewClient): void
    };
  }
}

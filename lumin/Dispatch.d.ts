declare module 'lumin' {
  enum DispatchResult {
    kOk,
    kCannotStartApp,
    kInvalidPacket,
    kNoAppFound,
    kAppPickerDialogFailure,
    kInvalidSchema,
    kInvalidParameter,
    kSchemaAlreadyRegistered,
    kPrivilegeDenied,
    kUnspecifiedFailure,
  }

  /**
   * Try to open an application that can handle the given URI.
   *
   * The user will be presented with a dialog to choose from all applications
   * that registered a matching URI schema in their manifest.
   *
   * @param uri The URI to open with a supported application
   * @return DispatchResult::kOk or a DispatchResult error code
   */
  function TryOpenApplication(uri: string): DispatchResult

  /**
   * Try to open an application that supports the given mime type or file extension.
   *
   * The user will be presented with a dialog to choose from all applications
   * that registered a matching mime type in their manifest. If multiple files
   * are provided in the list, the mime type and extension will be checked on
   * the last one.
   *
   * The mime type will be checked first. If it is not provided, the file extension
   * specified in the file name will be used.
   *
   * @param fileInfoList list of FileInfo objects to pass along to the app.
   *        The mime-type or file extension (if mime-type is not provided) will be
   *        used to find supported applications.
   * @return DispatchResult::kOk or a DispatchResult error code
   */
  function TryOpenApplication(fileInfoList: Array<FileInfo> /* std::vector<FileInfo> */): DispatchResult

  /**
   * Register a unique schema for OAuth redirect handler.
   *
   * The caller need to ensure that the schema is unique. If the schema
   * is already registered the function will return an error. The handler
   * will be called once the authorization procedure has been completed.
   * The caller should register two schema callbacks. The first will be for
   * authorization redirect and the second schema will in case the user cancels
   * the authentication.
   *
   * @param schema A unique string that will match the redirect or cancel uri schema.
   * @param schemaHandler An std::function that provides the function that is to be called when
   *                      the schema uri has been invoked.
   * @return DispatchResult::kOk or a DispatchResult error code
   * @priv SecureBrowserWindow
   */
  function OAuthRegisterSchema(schema: string, schemaHandler: ((arg0: string) => void) | null /* std::function<void(std::string)> */): DispatchResult

  /**
   * Unregister a unique schema for OAuth redirect handler.
   *
   * @param schema A unique string that will match the redirect or cancel uri schema.
   * @return DispatchResult::kOk or a DispatchResult error code
   * @priv SecureBrowserWindow
   */
  function OAuthUnregisterSchema(schema: string): DispatchResult

  /**
   * Open a secure browser window to perfrom an oauth authentication.
   *
   * Will open a special browser window that will be lazy head locked to
   * the user's head movement. The browser window will close once the
   * authentication procedure has been completed.
   *
   * @param url The oauth url to navigate to.
   * @param cancelUri The cancel uri called by the browser when users cancels the window.
   * @return DispatchResult::kOk or a DispatchResult error code
   * @priv SecureBrowserWindow
   */
  function OAuthOpenWindow(url: string, cancelUri: string): DispatchResult
}

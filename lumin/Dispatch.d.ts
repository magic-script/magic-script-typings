declare module 'lumin' {
  enum DispatchResult {
    kOk,
    kCannotStartApp,
    kInvalidPacket,
    kNoAppFound,
    kAppPickerDialogFailure,
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
}

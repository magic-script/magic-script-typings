declare module 'lumin' {
  enum DispatchResult {
    kOk,
    kCannotStartApp,
    kInvalidPacket,
    kNoAppFound,
    kAppPickerDialogFailure,
  }
  function TryOpenApplication(uri: string): DispatchResult
  function TryOpenApplication(fileInfoList: Array<FileInfo> /* std::vector */): DispatchResult
}

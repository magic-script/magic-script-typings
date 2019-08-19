declare module 'lumin' {
  class HeadposeErrorEvent extends ServerEvent {
    constructor()
    getErrorCode(): headtracking.Error
  };
}

declare module 'lumin' {
  class PrivilegeEvent extends ServerEvent {
    constructor() {}
    getPrivilegeId(): PrivilegeId
    getPrivilegeResult(): PrivilegeResult
  };
}

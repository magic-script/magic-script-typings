declare module 'lumin' {
  class WorldMeshBlockEventData extends ServerEvent {
    constructor() {}
    getUpdateType(): densemesh.MeshBlockUpdate
  };
}

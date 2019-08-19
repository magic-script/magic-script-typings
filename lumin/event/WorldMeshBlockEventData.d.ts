declare module 'lumin' {
  class WorldMeshBlockEventData extends ServerEvent {
    constructor()
    getData(): WorldMeshBlockData
    getUpdateType(): densemesh.MeshBlockUpdate
    getBlockId(): WorldMeshBlockData.Id
  };
}

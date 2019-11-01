declare module 'lumin' {

  /**
   * WorldMeshBlockEventData
   */
  class WorldMeshBlockEventData extends ServerEvent {
    constructor()

    /**
     * Returns the data for the mesh block. Will not have valid data if the block is being deleted.
     */
    getData(): WorldMeshBlockData

    /**
     * Returns what caused the update. If the value is MeshBlockUpdate::kDeleted, use getBlockId to
     * get the id of the block removed.
     */
    getUpdateType(): densemesh.MeshBlockUpdate

    /**
     * Returns the id of the block.
     */
    getBlockId(): WorldMeshBlockData.Id
  }
}

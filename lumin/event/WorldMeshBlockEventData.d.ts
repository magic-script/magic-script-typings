declare module 'lumin' {

  /**
   * WorldMeshBlockEventData
   */
  class WorldMeshBlockEventData extends ServerEvent {
    constructor()

    /**
     * Returns what caused the update. If the value is MeshBlockUpdate::kDeleted, use getBlockId to
     * get the id of the block removed.
     */
    getUpdateType(): densemesh.MeshBlockUpdate
  }
}

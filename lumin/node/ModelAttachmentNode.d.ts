declare module 'lumin' {

  /**
   * ModelAttachmentNode - This Node represents a bone transformation when attached to a ModelNode.
   * This is an extremely minimal subclass to TransformNode to add developer clarity.
   * WARNING: NO DEVELOPER SHOULD TRY TO MODIFY THE TRANSFORM OF THIS CLASS.
   * WARNING: ALL CHANGES WILL BE OVERWRITTEN BY CLASS INTERNALS.
   * Only add this to ModelNode. Otherwise, it's basically an unusable TransformNode
   */
  class ModelAttachmentNode extends TransformNode {
  }
}

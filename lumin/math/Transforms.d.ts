declare module 'lumin' {
  namespace math {

    /**
     * Returns the position component of a transform matrix. The transform is assumed to be a view
     * transform (world->camera space).
     *
     * @param a_transform The transform.
     * @return The position.
     *
     * @priv none
     */
    function GetPosition(a_transform: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] | Float32Array /* glm::mat4 */): [number, number, number] /* glm::vec3 */

    /**
     * Returns the rotation component of a transform matrix. The transform is assumed to be a view
     * transform (world->camera space).
     *
     * @param a_transform The transform.
     * @return The rotation.
     *
     * @priv none
     */
    function GetRotation(a_transform: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] | Float32Array /* glm::mat4 */): [number, number, number, number] /* glm::quat */

    /**
     * Returns the scale component of a transform matrix. The transform is assumed to be a view
     * transform (world->camera space).
     *
     * @param a_transform The transform.
     * @return The scale.
     *
     * @priv none
     */
    function GetScale(a_transform: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] | Float32Array /* glm::mat4 */): [number, number, number] /* glm::vec3 */

    /**
     * Returns a copy of a transform matrix, with the position component replaced by a new position.
     * The transform is assumed to be a view transform (world->camera space).
     *
     * @param a_transform The transform.
     * @param a_position The new position.
     * @return The modified transform.
     *
     * @priv none
     */
    function SetPosition(a_transform: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] | Float32Array /* glm::mat4 */, a_position: [number, number, number] | Float32Array /* glm::vec3 */): [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] /* glm::mat4 */

    /**
     * Returns a copy of a transform matrix, with the rotation component replaced by a new rotation.
     * The transform is assumed to be a view transform (world->camera space).
     *
     * @param a_transform The transform.
     * @param a_rotation The new rotation.
     * @return The modified transform.
     *
     * @priv none
     */
    function SetRotation(a_transform: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] | Float32Array /* glm::mat4 */, a_rotation: [number, number, number, number] | Float32Array /* glm::quat */): [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] /* glm::mat4 */

    /**
     * Returns a copy of a transform matrix, with the scale component replaced by a new scale. The
     * transform is assumed to be a view transform (world->camera space).
     *
     * @param a_transform The transform.
     * @param a_scale The new scale.
     * @return The modified transform.
     *
     * @priv none
     */
    function SetScale(a_transform: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] | Float32Array /* glm::mat4 */, a_scale: [number, number, number] | Float32Array /* glm::vec3 */): [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] /* glm::mat4 */

    /**
     * Creates a view transform matrix from position, rotation, and scale components.
     *
     * @param a_position The position component.
     * @param a_rotation The rotation component.
     * @param a_scale The scale component.
     * @return The new transform.
     *
     * @priv none
     */
    function GetViewTransform(a_position: [number, number, number] | Float32Array /* glm::vec3 */, a_rotation: [number, number, number, number] | Float32Array /* glm::quat */, a_scale: [number, number, number] | Float32Array /* glm::vec3 */): [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] /* glm::mat4 */

    /**
     * Moves a transform by a given position, and returns the new transform. The transform is assumed
     * to be a view transform (world->camera space).
     *
     * @param a_transform The transform.
     * @param a_position Offset to move the transform by.
     * @return The modified transform.
     *
     * @priv none
     */
    function ApplyPosition(a_transform: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] | Float32Array /* glm::mat4 */, a_position: [number, number, number] | Float32Array /* glm::vec3 */): [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] /* glm::mat4 */

    /**
     * Moves a transform by a given position, and returns the new transform. The move is in the local
     * space of the transform (e.g. moving along the z-axis will perform the move relative to
     * the transform's local z-axis, not the world z-axis). The transform is assumed to be a view
     * transform (world->camera space).
     *
     * @param a_transform The transform.
     * @param a_position The position to apply to the transform.
     * @return The modified transform.
     *
     * @priv none
     */
    function ApplyPositionLocal(a_transform: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] | Float32Array /* glm::mat4 */, a_position: [number, number, number] | Float32Array /* glm::vec3 */): [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] /* glm::mat4 */

    /**
     * Applies a rotation to a transform, and returns the new transform. The transform is assumed
     * to be a view transform (world->camera space).
     *
     * @param a_transform The transform.
     * @param a_rotation The rotation to apply to the transform.
     * @return The modified transform.
     *
     * @priv none
     */
    function ApplyRotation(a_transform: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] | Float32Array /* glm::mat4 */, a_rotation: [number, number, number, number] | Float32Array /* glm::quat */): [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] /* glm::mat4 */

    /**
     * Applies a rotation to a transform, and returns the new transform. The rotation is in the local
     * space of the transform (e.g. rotating around the z-axis will perform the rotation relative to
     * the transform's local z-axis, not the world z-axis). The transform is assumed to be a view
     * transform (world->camera space).
     *
     * @param a_transform The transform.
     * @param a_rotation The rotation to apply to the transform.
     * @return The modified transform.
     *
     * @priv none
     */
    function ApplyRotationLocal(a_transform: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] | Float32Array /* glm::mat4 */, a_rotation: [number, number, number, number] | Float32Array /* glm::quat */): [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] /* glm::mat4 */

    /**
     * Scales a transform by a given amount, and returns the new transform. The transform is assumed
     * to be a view transform (world->camera space).
     *
     * @param a_transform The transform.
     * @param a_scale The scale to apply.
     * @return The modified transform.
     *
     * @priv none
     */
    function ApplyScale(a_transform: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] | Float32Array /* glm::mat4 */, a_scale: [number, number, number] | Float32Array /* glm::vec3 */): [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] /* glm::mat4 */
  }
}

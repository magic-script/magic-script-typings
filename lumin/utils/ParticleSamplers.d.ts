declare module 'lumin' {
  namespace particles {

    /**
     * Data for one point on a curve sampler.
     */
    class CurveSamplerPoint {

      /** Value of the point. Generally 0->1 */
      value: number;

      /** Curve tangent values at the point. */
      tangents: [number, number] /* std::pair */;

      /** Default constructor */
      constructor()

      /**
       * Constructor
       *
       * @param value Curve value.
       * @param tangents Tangent values at the curve point.
       *
       * @priv none
       */
      constructor(value: number, tangents: [number, number] /* std::pair */)
    };

    /**
     * Data for one time on a curve sampler. Contains the point data for each curve at the time.
     */
    class CurveSamplerTime {

      /** Time for the point. Generally 0->1 */
      time: number;

      /** Point data for each curve the sampler has. Must have 1 to 4 values. */
      points: Array<particles.CurveSamplerPoint> /* std::vector */;

      /** Default constructor */
      constructor()

      /**
       * Constructor
       *
       * @param time Time for the curve points.
       * @param points Point data for each curve at the time.
       */
      constructor(time: number, points: Array<particles.CurveSamplerPoint> /* std::vector */)
    };

    /**
     * Particle sampler data representing a 1-4 value curve.
     */
    class CurveSampler {

      /** Default constructor */
      constructor()

      /**
       * Constructor
       *
       * @param times Curve data for each time point.
       */
      constructor(times: Array<particles.CurveSamplerTime> /* std::vector */)

      /** Set curve data for the sampler.
       *
       * @param times Curve data
       */
      setTimes(times: Array<particles.CurveSamplerTime> /* std::vector */): void

      /**
       * Returns the data for the sampler.
       *
       * @return Curve sampler data.
       *
       * @priv none
       */
      getTimes(): Array<particles.CurveSamplerTime> /* std::vector */
    };
    class ShapeSampler {
      constructor()

      /**
       * Return the shape sampler type.
       *
       * @return the type
       *
       * @priv none
       */
      getType(): particles.ShapeSampler.Type

      /**
       * Returns the angular velocity of the mesh.
       *
       * @return velocity
       *
       * @priv none
       */
      getAngularVelocity(): [number, number, number] /* glm::vec3 */

      /**
       * Sets the angular velocity to apply to the mesh.
       *
       * @param velocity Velocity
       *
       * @priv none
       */
      setAngularVelocity(velocity: [number, number, number] /* glm::vec3 */): void

      /**
       * Returns the linear velocity of the mesh.
       *
       * @return velocity
       *
       * @priv none
       */
      getLinearVelocity(): [number, number, number] /* glm::vec3 */

      /**
       * Sets the linear velocity to apply to the mesh.
       *
       * @param velocity Velocity
       *
       * @priv none
       */
      setLinearVelocity(velocity: [number, number, number] /* glm::vec3 */): void
    };
    enum Type {
      kBox,
      kSphere,
      kEllipsoid,
      kCylinder,
      kCapsule,
      kCone,
      kPlane,
      kMesh,
    }
    class BoxShapeSampler extends ShapeSampler {

      /** Default constructor */
      constructor()

      /**
       * Constructor
       *
       * @param size Box size.
       **/
      constructor(size: [number, number, number] /* glm::vec3 */)

      /**
       * Returns the box size.
       *
       * @return size
       *
       * @priv none
       */
      getSize(): [number, number, number] /* glm::vec3 */

      /**
       * Sets the box size.
       *
       * @param size Size
       *
       * @priv none
       */
      setSize(size: [number, number, number] /* glm::vec3 */): void
    };
    class SphereShapeSampler extends ShapeSampler {

      /** Default constructor */
      constructor()

      /**
       * Constructor
       *
       * @param outerRadius Outer radius of the sphere
       * @param [innerRadius=0] Inner radius of the sphere
       **/
      constructor(outerRadius: number, innerRadius: number = 0 /* 0 is not the actual default value */)

      /**
       * Returns the sphere outer radius.
       *
       * @return radius
       *
       * @priv none
       */
      getOuterRadius(): number

      /**
       * Sets the sphere outer radius.
       *
       * @param radius Radius
       *
       * @priv none
       */
      setOuterRadius(radius: number): void

      /**
       * Returns the sphere inner radius.
       *
       * @return radius
       *
       * @priv none
       */
      getInnerRadius(): number

      /**
       * Sets the sphere inner radius.
       *
       * @param radius Radius
       *
       * @priv none
       */
      setInnerRadius(radius: number): void
    };
    class EllipsoidShapeSampler extends ShapeSampler {

      /** Default constructor */
      constructor()

      /**
       * Constructor
       *
       * @param outerRadius Outer radius of the ellipsoid
       * @param innerRadius Inner radius of the ellipsoid
       * @param cut Cut plane position of for the ellipsoid. 1 = full sphere, 0 = entire sphere removed
       * @param scale Scale of the ellipsoid
       **/
      constructor(outerRadius: number, innerRadius: number, cut: number, scale: [number, number, number] /* glm::vec3 */)

      /**
       * Returns the ellipsoid outer radius.
       *
       * @return radius
       *
       * @priv none
       */
      getOuterRadius(): number

      /**
       * Sets the ellipsoid outer radius.
       *
       * @param radius Radius
       *
       * @priv none
       */
      setOuterRadius(radius: number): void

      /**
       * Returns the ellipsoid inner radius.
       *
       * @return radius
       *
       * @priv none
       */
      getInnerRadius(): number

      /**
       * Sets the ellipsoid inner radius.
       *
       * @param radius Radius
       *
       * @priv none
       */
      setInnerRadius(radius: number): void

      /**
       * Returns the ellipsoid cut.
       *
       * @return cut
       *
       * @priv none
       */
      getCut(): number

      /**
       * Sets the ellipsoid cut.
       *
       * @param cut Cut
       *
       * @priv none
       */
      setCut(cut: number): void

      /**
       * Returns the ellipsoid scale.
       *
       * @return scale
       *
       * @priv none
       */
      getScale(): [number, number, number] /* glm::vec3 */

      /**
       * Sets the ellipsoid scale.
       *
       * @param scale Scale
       *
       * @priv none
       */
      setScale(scale: [number, number, number] /* glm::vec3 */): void
    };
    class CylinderShapeSampler extends ShapeSampler {

      /** Default constructor */
      constructor()

      /**
       * Constructor
       *
       * @param outerRadius Outer radius of the cylinder
       * @param height Height of the cylinder
       * @param [innerRadius=0] Inner radius of the cylinder
       **/
      constructor(outerRadius: number, height: number, innerRadius: number = 0 /* 0 is not the actual default value */)

      /**
       * Returns the cylinder outer radius.
       *
       * @return radius
       *
       * @priv none
       */
      getOuterRadius(): number

      /**
       * Sets the cylinder outer radius.
       *
       * @param radius Radius
       *
       * @priv none
       */
      setOuterRadius(radius: number): void

      /**
       * Returns the cylinder inner radius.
       *
       * @return radius
       *
       * @priv none
       */
      getInnerRadius(): number

      /**
       * Sets the cylinder inner radius.
       *
       * @param radius Radius
       *
       * @priv none
       */
      setInnerRadius(radius: number): void

      /**
       * Returns the cylinder height.
       *
       * @return height
       *
       * @priv none
       */
      getHeight(): number

      /**
       * Sets the cylinder height.
       *
       * @param height Height
       *
       * @priv none
       */
      setHeight(height: number): void
    };
    class CapsuleShapeSampler extends ShapeSampler {

      /** Default constructor */
      constructor()

      /**
       * Constructor
       *
       * @param outerRadius Outer radius of the capsule
       * @param height Height of the capsule
       * @param [innerRadius=0] Inner radius of the capsule
       **/
      constructor(outerRadius: number, height: number, innerRadius: number = 0 /* 0 is not the actual default value */)

      /**
       * Returns the capsule outer radius.
       *
       * @return radius
       *
       * @priv none
       */
      getOuterRadius(): number

      /**
       * Sets the capsule outer radius.
       *
       * @param radius Radius
       *
       * @priv none
       */
      setOuterRadius(radius: number): void

      /**
       * Returns the capsule inner radius.
       *
       * @return radius
       *
       * @priv none
       */
      getInnerRadius(): number

      /**
       * Sets the capsule inner radius.
       *
       * @param radius Radius
       *
       * @priv none
       */
      setInnerRadius(radius: number): void

      /**
       * Returns the capsule height.
       *
       * @return height
       *
       * @priv none
       */
      getHeight(): number

      /**
       * Sets the capsule height.
       *
       * @param height Height
       *
       * @priv none
       */
      setHeight(height: number): void
    };
    class ConeShapeSampler extends ShapeSampler {

      /** Default constructor */
      constructor()

      /**
       * Constructor
       *
       * @param radius Radius of the cone
       * @param height Height of the cone
       **/
      constructor(radius: number, height: number)

      /**
       * Returns the cone radius.
       *
       * @return radius
       *
       * @priv none
       */
      getRadius(): number

      /**
       * Sets the cone radius.
       *
       * @param radius Radius
       *
       * @priv none
       */
      setRadius(radius: number): void

      /**
       * Returns the cone height.
       *
       * @return height
       *
       * @priv none
       */
      getHeight(): number

      /**
       * Sets the cone height.
       *
       * @param height Height
       *
       * @priv none
       */
      setHeight(height: number): void
    };
    class MeshShapeSampler extends ShapeSampler {

      /** Default constructor */
      constructor()

      /**
       * Constructor
       *
       * @param mesh Mesh file (*.pkmm) to use for the sampler.
       **/
      constructor(mesh: string)

      /**
       * Constructor
       *
       * @param mesh Mesh file (*.pkmm) to use for the sampler.
       * @param animation Animation file (*.pksa) to use for the sampler.
       **/
      constructor(mesh: string, animation: string)

      /**
       * Returns the mesh file name.
       *
       * @return mesh file name
       *
       * @priv none
       */
      getMesh(): string

      /**
       * Sets the mesh file (*.pkmm) to use for the sampler.
       *
       * @param mesh Mesh file name
       *
       * @priv none
       */
      setMesh(mesh: string): void

      /**
       * Returns the animation file name.
       *
       * @return animation file name
       *
       * @priv none
       */
      getAnimation(): string

      /**
       * Sets the animation file (*.pksa) to use for the sampler.
       *
       * @param animation Animation file name
       *
       * @priv none
       */
      setAnimation(animation: string): void

      /**
       * Returns the channels values being used for the mesh. Values are the Channel enum or'ed together.
       *
       * @return channels
       *
       * @priv none
       */
      getChannels(): number

      /**
       * Sets which channels will be used for the mesh. Generally doesn't need to be called, as the
       * channels will be set up correctly for the sampler.
       *
       * @param channels Channel values or'ed together
       *
       * @priv none
       */
      setChannels(channels: number): void

      /**
       * Returns the sub-mesh index to use.
       *
       * @return Sub-mesh index
       *
       * @priv none
       */
      getSubMeshIndex(): number

      /**
       * Sets the sub-mesh index to use, if the mesh has multiple sub-meshes. If the mesh contains
       * both static and skinned sub-meshes, the index will start with the static meshes, and then
       * go to the skinned meshes.
       *
       * @param index Sub-mesh index.
       *
       * @priv none
       */
      setSubMeshIndex(index: number): void

      /**
       * Returns the scale for the shape.
       *
       * @return Scale
       *
       * @priv none
       */
      getScale(): number

      /**
       * Sets the shape scale. The scale will be applied evenly to all axes.
       *
       * @param scale Scale
       *
       * @priv none
       */
      setScale(scale: number): void

      /**
       * Returns the animation loop start time.
       *
       * @return begin time
       *
       * @priv none
       */
      getAnimTimeBegin(): number

      /**
       * Returns the animation loop end time.
       *
       * @return end time
       *
       * @priv none
       */
      getAnimTimeEnd(): number

      /**
       * Returns the initial start time of the animation.
       *
       * @return start time
       *
       * @priv none
       */
      getAnimTimeStart(): number

      /**
       * Returns the animation loop count.
       *
       * @return loop count
       *
       * @priv none
       */
      getAnimLoopCount(): number

      /**
       * Sets custom params for controlling the timing of the animation. By default, the animation
       * will play starting at time 0, go to the natural end of the animation, and loop forever.
       *
       * @param beginTime The beginning of the animation loop.
       * @param endTime The end of the animation loop. Must be >= beginTime. <0 will go to the natural end
       *                of the animation.
       * @param startTime Where the animation will start when first played. Must be >= beginTime and <= endTime.
       * @param loopCount How many times the animation will loop. If < 0, will loop infinitely.
       *
       * @priv none
       */
      setAnimationTiming(beginTime: number, endTime: number, startTime: number, loopCount: number): void
    };
    enum Channel {
      kPosition = 0x1,
      kNormal = 0x2,
      kTangent = 0x4,
      kVelocity = 0x8,
    }
  }
}

declare module 'lumin' {
  class PhysicsMaterial {
    constructor()
    constructor(staticFriction: number, dynamicFriction: number, restitution: number)
    getStaticFriction(): number
    getDynamicFriction(): number
    getRestitution(): number
  };
}

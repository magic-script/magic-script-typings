declare module 'lumin' {
  class PhysicsInitializationData {
    gravity: [number, number, number] /* glm::vec3 */;
    simulationRateFps: number;
    bounceThreshold: number;
    solverType: physics.SolverType;
    constructor()
  };
}

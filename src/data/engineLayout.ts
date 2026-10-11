export type Vec3 = [number, number, number]

type PartBase = {
  componentId: string
  position: Vec3
  rotation?: Vec3
  ghost?: boolean
}

export type Part =
  | (PartBase & { shape: 'box'; size: Vec3 })
  | (PartBase & { shape: 'cylinder'; radius: number; length: number })

// Parts are coloured by the system they belong to
export const systemColors: Record<string, string> = {
  'engine-structure': '#9aa5b1',
  'rotating-assembly': '#2f80ed',
  valvetrain: '#27ae60',
  'air-and-fuel': '#e08a1e',
  ignition: '#e84393',
  exhaust: '#8d6e63',
}

// x runs along the engine, y is up, z is front-to-back.
// Cylinders start out standing along y; these rotations lay them along x or z.
const alongX: Vec3 = [0, 0, Math.PI / 2]
const alongZ: Vec3 = [Math.PI / 2, 0, 0]

// x position of each of the four cylinders
const cylinderX = [-1.5, -0.5, 0.5, 1.5]

export const engineParts: Part[] = [
  // Engine structure, drawn see-through so the parts inside stay visible
  { componentId: 'cylinder-block', shape: 'box', size: [4.4, 2, 1.1], position: [0, -0.2, 0], ghost: true },
  { componentId: 'cylinder-head', shape: 'box', size: [4.4, 0.8, 1.1], position: [0, 1.2, 0], ghost: true },

  // Rotating assembly
  { componentId: 'crankshaft', shape: 'cylinder', radius: 0.12, length: 5, position: [0, -0.9, 0], rotation: alongX },
  ...cylinderX.flatMap((x): Part[] => [
    { componentId: 'connecting-rod', shape: 'box', size: [0.1, 0.9, 0.1], position: [x, -0.45, 0] },
    { componentId: 'piston', shape: 'cylinder', radius: 0.4, length: 0.5, position: [x, 0.25, 0] },
  ]),

  // Valvetrain: two camshafts, two valves per cylinder, and the timing drive at one end
  ...[-0.3, 0.3].map((z): Part => ({
    componentId: 'camshaft', shape: 'cylinder', radius: 0.1, length: 5, position: [0, 1.45, z], rotation: alongX,
  })),
  ...cylinderX.flatMap((x) =>
    [-0.3, 0.3].map((z): Part => ({
      componentId: 'valves', shape: 'cylinder', radius: 0.045, length: 0.7, position: [x, 1.15, z],
    })),
  ),
  { componentId: 'timing-drive', shape: 'box', size: [0.08, 2.5, 0.7], position: [2.45, 0.28, 0] },
  { componentId: 'timing-drive', shape: 'cylinder', radius: 0.25, length: 0.12, position: [2.45, -0.9, 0], rotation: alongX },
  ...[-0.3, 0.3].map((z): Part => ({
    componentId: 'timing-drive', shape: 'cylinder', radius: 0.3, length: 0.12, position: [2.45, 1.45, z], rotation: alongX,
  })),

  // Ignition
  ...cylinderX.map((x): Part => ({
    componentId: 'spark-plug', shape: 'cylinder', radius: 0.07, length: 1.1, position: [x, 1.35, 0],
  })),

  // Air and fuel (intake side, at the front)
  { componentId: 'intake-manifold', shape: 'cylinder', radius: 0.25, length: 3.6, position: [0, 1.2, -1.2], rotation: alongX },
  ...cylinderX.map((x): Part => ({
    componentId: 'intake-manifold', shape: 'cylinder', radius: 0.1, length: 0.55, position: [x, 1.2, -0.825], rotation: alongZ,
  })),
  ...cylinderX.map((x): Part => ({
    componentId: 'fuel-injector', shape: 'cylinder', radius: 0.06, length: 0.35, position: [x, 1.45, -0.85],
  })),

  // Exhaust (back side)
  ...cylinderX.map((x): Part => ({
    componentId: 'exhaust-manifold', shape: 'cylinder', radius: 0.09, length: 0.55, position: [x, 1.2, 0.825], rotation: alongZ,
  })),
  { componentId: 'exhaust-manifold', shape: 'cylinder', radius: 0.16, length: 3.4, position: [0, 1.2, 1.1], rotation: alongX },
]
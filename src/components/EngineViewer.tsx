import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { engineComponents } from '../data/engine'
import { engineParts, systemColors } from '../data/engineLayout'
import type { Part } from '../data/engineLayout'

function colorFor(componentId: string): string {
  const component = engineComponents.find((item) => item.id === componentId)
  return component ? systemColors[component.systemId] : '#999999'
}

function EnginePart({ part }: { part: Part }) {
  return (
    <mesh position={part.position} rotation={part.rotation}>
      {part.shape === 'box' ? (
        <boxGeometry args={part.size} />
      ) : (
        <cylinderGeometry args={[part.radius, part.radius, part.length, 24]} />
      )}
      <meshStandardMaterial
        color={colorFor(part.componentId)}
        transparent={part.ghost}
        opacity={part.ghost ? 0.25 : 1}
        depthWrite={!part.ghost}
      />
    </mesh>
  )
}

function EngineViewer() {
  return (
    <div className="viewer">
      <Canvas camera={{ position: [4, 3, 7], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        {engineParts.map((part, index) => (
          <EnginePart key={index} part={part} />
        ))}
        <OrbitControls target={[0, 0.4, 0]} />
      </Canvas>
    </div>
  )
}

export default EngineViewer
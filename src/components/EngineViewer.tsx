import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import type { ThreeEvent } from '@react-three/fiber'
import { OrbitControls, useCursor } from '@react-three/drei'
import type { Intersection } from 'three'
import { engineComponents, engineSystems } from '../data/engine'
import { engineParts, systemColors } from '../data/engineLayout'
import type { Part } from '../data/engineLayout'

type PartData = { componentId?: string; ghost?: boolean }

function colorFor(componentId: string): string {
  const component = engineComponents.find((item) => item.id === componentId)
  return component ? systemColors[component.systemId] : '#999999'
}

// Several parts can sit under the cursor at once, nearest first.
// Prefer solid parts over the see-through block and head, so the parts
// inside can be clicked. The block and head are chosen only when
// nothing solid is behind the cursor.
function pickComponentId(intersections: Intersection[]): string | null {
  const hits = intersections
    .map((hit) => hit.object.userData as PartData)
    .filter((data) => data.componentId !== undefined)
  const chosen = hits.find((data) => !data.ghost) ?? hits[0]
  return chosen?.componentId ?? null
}

type EnginePartProps = {
  part: Part
  selected: boolean
  hovered: boolean
}

function EnginePart({ part, selected, hovered }: EnginePartProps) {
  const color = selected ? '#ffd400' : colorFor(part.componentId)
  const emissive = selected ? '#ffd400' : hovered ? '#ffffff' : '#000000'
  const emissiveIntensity = selected ? 0.4 : hovered ? 0.3 : 0
  const ghostOpacity = selected ? 0.5 : hovered ? 0.4 : 0.25

  return (
    <mesh
      position={part.position}
      rotation={part.rotation}
      userData={{ componentId: part.componentId, ghost: part.ghost }}
    >
      {part.shape === 'box' ? (
        <boxGeometry args={part.size} />
      ) : (
        <cylinderGeometry args={[part.radius, part.radius, part.length, 24]} />
      )}
      <meshStandardMaterial
        color={color}
        emissive={emissive}
        emissiveIntensity={emissiveIntensity}
        transparent={part.ghost}
        opacity={part.ghost ? ghostOpacity : 1}
        depthWrite={!part.ghost}
      />
    </mesh>
  )
}

type EngineViewerProps = {
  selectedId: string | null
  onSelect: (id: string) => void
}

function EngineViewer({ selectedId, onSelect }: EngineViewerProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  useCursor(hoveredId !== null)

  function handleClick(event: ThreeEvent<MouseEvent>) {
    event.stopPropagation()
    if (event.delta > 4) return // the pointer was dragged to rotate, not clicked
    const id = pickComponentId(event.intersections)
    if (id) onSelect(id)
  }

  function handleMove(event: ThreeEvent<PointerEvent>) {
    event.stopPropagation()
    setHoveredId(pickComponentId(event.intersections))
  }

   return (
    <>
      <div
        className="viewer"
        role="img"
        aria-label="Interactive 3D diagram of a four-cylinder petrol engine. Use the component buttons below to select parts with a keyboard."
      >
        <Canvas camera={{ position: [4, 3, 7], fov: 45 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <group
            onClick={handleClick}
            onPointerMove={handleMove}
            onPointerOut={() => setHoveredId(null)}
          >
            {engineParts.map((part, index) => (
              <EnginePart
                key={index}
                part={part}
                selected={part.componentId === selectedId}
                hovered={part.componentId === hoveredId}
              />
            ))}
          </group>
          <OrbitControls target={[0, 0.4, 0]} />
        </Canvas>
      </div>
      <p className="viewer-hint">
        Drag to rotate, scroll to zoom, click a part to learn about it. Selected parts turn yellow.
      </p>
      <ul className="legend" aria-label="Colour key">
        {engineSystems.map((system) => (
          <li key={system.id}>
            <span
              className="legend-swatch"
              style={{ backgroundColor: systemColors[system.id] }}
            />
            {system.name}
          </li>
        ))}
      </ul>
    </>
  )
}

export default EngineViewer
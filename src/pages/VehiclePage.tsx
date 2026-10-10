import { useState } from 'react'
import InfoPanel from '../components/InfoPanel'
import { engineComponents } from '../data/engine'
import type { Level } from '../data/types'
import EngineViewer from '../components/EngineViewer'

const levels: Level[] = ['beginner', 'intermediate', 'advanced']

function VehiclePage() {
  const [level, setLevel] = useState<Level>('beginner')
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const selected = engineComponents.find((item) => item.id === selectedId)

  return (
    <>
      <h1>Generic Car: Engine</h1>
      <EngineViewer />

      <div role="group" aria-label="Explanation level" className="levels">
        {levels.map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={option === level}
            onClick={() => setLevel(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <h2>Components</h2>
      <ul className="component-list">
        {engineComponents.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              aria-pressed={item.id === selectedId}
              onClick={() => setSelectedId(item.id)}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>

      {selected ? (
        <InfoPanel component={selected} level={level} onSelect={setSelectedId} />
      ) : (
        <p>Select a component to learn about it.</p>
      )}
    </>
  )
}

export default VehiclePage
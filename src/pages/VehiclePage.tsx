import { lazy, Suspense, useState } from 'react'
import InfoPanel from '../components/InfoPanel'
import { engineComponents } from '../data/engine'
import type { Level } from '../data/types'
import './vehicle.css'

// Loaded only when this page opens, so the 3D library is not part of the first download
const EngineViewer = lazy(() => import('../components/EngineViewer'))

const levels: Level[] = ['beginner', 'intermediate', 'advanced']

function VehiclePage() {
  const [level, setLevel] = useState<Level>('beginner')
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const selected = engineComponents.find((item) => item.id === selectedId)

  return (
    <>
      <h1>Generic Car: Engine</h1>

      <div className="vehicle-page">
        <section aria-label="3D engine view">
          <Suspense
            fallback={<div className="viewer viewer-loading">Loading 3D view...</div>}
          >
            <EngineViewer selectedId={selectedId} onSelect={setSelectedId} />
          </Suspense>

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
        </section>

        <aside className="vehicle-info" aria-label="Component details">
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

          {selected ? (
            <InfoPanel component={selected} level={level} onSelect={setSelectedId} />
          ) : (
            <p>Select a component to learn about it.</p>
          )}
        </aside>
      </div>
    </>
  )
}

export default VehiclePage
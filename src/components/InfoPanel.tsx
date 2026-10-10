import { engineComponents } from '../data/engine'
import type { EngineComponent, Level } from '../data/types'

type InfoPanelProps = {
  component: EngineComponent
  level: Level
  onSelect: (id: string) => void
}

function InfoPanel({ component, level, onSelect }: InfoPanelProps) {
  const related = engineComponents.filter((item) =>
    component.relatedIds.includes(item.id),
  )

  return (
    <article className="info-panel">
      <h2>{component.name}</h2>

      {component.status === 'draft' && (
        <p className="draft-note">
          Draft: this entry has not been verified against a source yet.
        </p>
      )}

      <p>
        <strong>Where it is:</strong> {component.location}
      </p>
      <p>{component.explanation[level]}</p>

      <h3>Why it exists</h3>
      <p>{component.whyItExists}</p>

      <h3>If it fails</h3>
      <p>{component.ifItFails.effect}</p>
      <p>Common symptoms:</p>
      <ul>
        {component.ifItFails.symptoms.map((symptom) => (
          <li key={symptom}>{symptom}</li>
        ))}
      </ul>

      {component.safetyNote && (
        <p className="safety-note">
          <strong>Safety:</strong> {component.safetyNote}
        </p>
      )}

      <h3>Works with</h3>
      <ul className="component-list">
        {related.map((item) => (
          <li key={item.id}>
            <button type="button" onClick={() => onSelect(item.id)}>
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default InfoPanel
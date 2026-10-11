import { describe, expect, it } from 'vitest'
import { engineComponents, engineSystems } from './engine'
import { engineParts, systemColors } from './engineLayout'

describe('engine layout', () => {
  it('only draws parts that belong to a known component', () => {
    const ids = new Set(engineComponents.map((item) => item.id))
    const bad = engineParts.filter((part) => !ids.has(part.componentId))
    expect(bad).toEqual([])
  })

  it('draws every component at least once', () => {
    const drawn = new Set(engineParts.map((part) => part.componentId))
    const missing = engineComponents
      .filter((item) => !drawn.has(item.id))
      .map((item) => item.id)
    expect(missing).toEqual([])
  })

  it('has a colour for every system', () => {
    const missing = engineSystems
      .filter((system) => !systemColors[system.id])
      .map((system) => system.id)
    expect(missing).toEqual([])
  })
})
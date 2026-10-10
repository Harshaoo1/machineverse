import { describe, expect, it } from 'vitest'
import { engineComponents, engineSystems } from './engine'

const componentIds = new Set(engineComponents.map((item) => item.id))
const systemIds = new Set(engineSystems.map((item) => item.id))

describe('engine data', () => {
  it('gives every component a unique id', () => {
    expect(componentIds.size).toBe(engineComponents.length)
  })

  it('puts every component in an existing system', () => {
    const bad = engineComponents
      .filter((item) => !systemIds.has(item.systemId))
      .map((item) => item.id)
    expect(bad).toEqual([])
  })

  it('only relates components to ids that exist', () => {
    const bad = engineComponents.flatMap((item) =>
      item.relatedIds
        .filter((id) => !componentIds.has(id))
        .map((id) => `${item.id} -> ${id}`),
    )
    expect(bad).toEqual([])
  })

  it('never relates a component to itself', () => {
    const bad = engineComponents
      .filter((item) => item.relatedIds.includes(item.id))
      .map((item) => item.id)
    expect(bad).toEqual([])
  })

  it('makes every relation mutual', () => {
    const missing: string[] = []
    for (const item of engineComponents) {
      for (const id of item.relatedIds) {
        const other = engineComponents.find((entry) => entry.id === id)
        if (other && !other.relatedIds.includes(item.id)) {
          missing.push(`${item.id} lists ${id}, but ${id} does not list ${item.id}`)
        }
      }
    }
    expect(missing).toEqual([])
  })

  it('requires at least one source for every verified entry', () => {
    const bad = engineComponents
      .filter((item) => item.status === 'verified' && item.sources.length === 0)
      .map((item) => item.id)
    expect(bad).toEqual([])
  })
})
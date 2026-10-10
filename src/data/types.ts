export type Level = 'beginner' | 'intermediate' | 'advanced'

// The same idea, explained at all three levels
export type Explained = Record<Level, string>

export type EngineSystem = {
  id: string
  name: string
  summary: string
}

export type EngineComponent = {
  id: string
  name: string
  systemId: string
  location: string
  summary: string
  explanation: Explained
  whyItExists: string
  relatedIds: string[]
  ifItFails: {
    effect: string
    symptoms: string[]
  }
  safetyNote?: string
  meshName?: string
  status: 'draft' | 'verified'
  sources: string[]
}
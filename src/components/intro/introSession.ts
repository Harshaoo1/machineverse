const STORAGE_KEY = 'machineverse-intro-seen'

// Decides whether the intro should play when the app first loads
export function shouldShowIntro(): boolean {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false

  // Adding ?intro to the address replays it on demand
  if (new URLSearchParams(window.location.search).has('intro')) return true

  // Deep links such as /vehicle go straight to the page
  if (window.location.pathname !== '/') return false

  try {
    return sessionStorage.getItem(STORAGE_KEY) === null
  } catch {
    return true // storage can be blocked, so just play it
  }
}

export function markIntroSeen(): void {
  try {
    sessionStorage.setItem(STORAGE_KEY, '1')
  } catch {
    // If storage is blocked the intro simply plays again next time
  }
}
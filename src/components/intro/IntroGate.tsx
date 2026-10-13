import { useCallback, useState } from 'react'
import type { ReactNode } from 'react'
import Intro from './Intro'
import { markIntroSeen, shouldShowIntro } from './introSession'

type IntroGateProps = {
  children: ReactNode
}

// Plays the intro first, then reveals the app. While the intro is showing,
// the app underneath is "inert": it can't be focused, tabbed into or clicked.
function IntroGate({ children }: IntroGateProps) {
  const [showIntro, setShowIntro] = useState(shouldShowIntro)

  const handleDone = useCallback(() => {
    markIntroSeen()
    setShowIntro(false)
  }, [])

  return (
    <>
      {showIntro && <Intro onDone={handleDone} />}
      <div inert={showIntro}>{children}</div>
    </>
  )
}

export default IntroGate
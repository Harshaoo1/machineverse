import { useCallback, useEffect, useRef, useState } from 'react'
import './Intro.css'

const AUTO_FINISH_MS = 2500
const FADE_MS = 800

type IntroProps = {
  onDone: () => void
}

function Intro({ onDone }: IntroProps) {
  const [leaving, setLeaving] = useState(false)
  const skipRef = useRef<HTMLButtonElement>(null)

  // Starts the exit fade. Called by the timer, the Skip button or the Esc key.
  const finish = useCallback(() => setLeaving(true), [])

  useEffect(() => {
    skipRef.current?.focus()
    const timer = window.setTimeout(finish, AUTO_FINISH_MS)

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') finish()
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [finish])

  // Remove the intro from the page once its fade-out has finished
  useEffect(() => {
    if (!leaving) return
    const timer = window.setTimeout(onDone, FADE_MS)
    return () => window.clearTimeout(timer)
  }, [leaving, onDone])

  return (
    <section
      className={leaving ? 'intro is-done' : 'intro'}
      aria-label="MachineVerse opening animation"
    >
      <div className="opening-streak streak-a" />
      <div className="opening-streak streak-b" />
      <div className="opening-streak streak-c" />
      <div className="opening-streak streak-d" />
      <div className="opening-light light-top" />
      <div className="opening-light light-bottom" />

      <div className="opening-wordmark-wrap">
        <p className="opening-wordmark">
          Machine<span>Verse</span>
        </p>
      </div>
      <div className="opening-micro">UNDERSTAND · EXPLORE · EXPERIMENT</div>

      <div className="opening-path path-road" />
      <div className="opening-path path-sky" />
      <div className="opening-path path-water" />

      <svg className="opening-vehicle opening-car" viewBox="0 0 100 42" aria-hidden="true">
        <path d="M10 27h8l8-13h34l15 13h10v8H10z" />
        <path d="M31 14l-5 13h43L58 14" />
        <circle cx="27" cy="35" r="5" />
        <circle cx="72" cy="35" r="5" />
      </svg>
      <svg className="opening-vehicle opening-plane" viewBox="0 0 80 45" aria-hidden="true">
        <path d="M5 23l30-4L48 4l6 1-5 14 22-2 7 4-29 5-9 13-5-1 3-13-24 2z" />
      </svg>
      <svg className="opening-vehicle opening-ship" viewBox="0 0 90 45" aria-hidden="true">
        <path d="M8 25h72L67 37H23z" />
        <path d="M27 25V12h20v13M32 12V7h10v5M53 25V16h12v9M3 41c8-3 12 3 20 0s13 3 21 0 13 3 21 0 13 3 22 0" />
      </svg>

      <div className="opening-controls">
        <span>A LITTLE WORLD OF HOW THINGS WORK</span>
        <button ref={skipRef} type="button" className="intro-skip" onClick={finish}>
          Skip intro ↗
        </button>
      </div>
    </section>
  )
}

export default Intro
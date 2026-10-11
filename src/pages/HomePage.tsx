import CategoryCard from '../components/CategoryCard'

type Category = {
  id: string
  icon: string
  name: string
  available: boolean
}

const categories: Category[] = [
  { id: 'automotive', icon: '🚗', name: 'Automotive', available: true },
  { id: 'aviation', icon: '✈️', name: 'Aviation', available: false },
  { id: 'marine', icon: '🚢', name: 'Marine', available: false },
  { id: 'heavy-machinery', icon: '🚜', name: 'Heavy Machinery', available: false },
  { id: 'space', icon: '🚀', name: 'Space', available: false },
]

const tickerText = 'Understand // Explore // Experiment //'

function HomePage() {
  return (
    <>
      <section className="hero">
        <h1>MachineVerse</h1>
        <p className="tagline">Understand. Explore. Experiment.</p>
        <span className="sticker" aria-hidden="true">
          v0.1 / draft
        </span>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {Array.from({ length: 8 }, (_, index) => (
            <span key={index}>{tickerText}</span>
          ))}
        </div>
      </div>

      <h2>Choose a category</h2>
      <ul className="categories">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            icon={category.icon}
            name={category.name}
            available={category.available}
          />
        ))}
      </ul>
    </>
  )
}

export default HomePage
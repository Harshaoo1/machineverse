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

function HomePage() {
  return (
    <>
      <h1>MachineVerse</h1>
      <p>Understand. Explore. Experiment.</p>

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
import { Link } from 'react-router'

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
          <li key={category.id}>
            {category.available ? (
              <Link to="/vehicle">
                {category.icon} {category.name}
              </Link>
            ) : (
              <span>
                {category.icon} {category.name} (coming soon)
              </span>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

export default HomePage
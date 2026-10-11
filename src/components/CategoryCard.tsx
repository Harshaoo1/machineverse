import { Link } from 'react-router'

type CategoryCardProps = {
  icon: string
  name: string
  available: boolean
}

function CategoryCard({ icon, name, available }: CategoryCardProps) {
  if (available) {
    return (
      <li>
        <Link to="/vehicle" className="category">
          <span className="category-icon" aria-hidden="true">
            {icon}
          </span>
          <span className="category-name">{name}</span>
        </Link>
      </li>
    )
  }

  return (
    <li>
      <div className="category category-soon">
        <span className="category-icon" aria-hidden="true">
          {icon}
        </span>
        <span className="category-name">{name}</span>
        <span className="badge">Coming soon</span>
      </div>
    </li>
  )
}

export default CategoryCard
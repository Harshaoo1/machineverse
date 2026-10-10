import { Link } from 'react-router'

type CategoryCardProps = {
  icon: string
  name: string
  available: boolean
}

function CategoryCard({ icon, name, available }: CategoryCardProps) {
  return (
    <li>
      {available ? (
        <Link to="/vehicle">
          {icon} {name}
        </Link>
      ) : (
        <span>
          {icon} {name} (coming soon)
        </span>
      )}
    </li>
  )
}

export default CategoryCard
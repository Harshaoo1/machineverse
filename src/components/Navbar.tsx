import { Link } from 'react-router'
import './Navbar.css'

function Navbar() {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main">
        <Link to="/" className="site-brand">
          Machine<strong>Verse</strong>
        </Link>
        <Link to="/vehicle">Car</Link>
      </nav>
    </header>
  )
}

export default Navbar
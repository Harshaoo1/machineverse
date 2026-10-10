import { Link } from 'react-router'

function Navbar() {
  return (
    <header>
      <nav>
        <Link to="/">MachineVerse</Link>
        <Link to="/vehicle">Car</Link>
      </nav>
    </header>
  )
}

export default Navbar
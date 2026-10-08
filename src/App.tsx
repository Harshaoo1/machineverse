import { Link, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import VehiclePage from './pages/VehiclePage'

function App() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">MachineVerse</Link>
          <Link to="/vehicle">Car</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vehicle" element={<VehiclePage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
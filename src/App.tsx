import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import VehiclePage from './pages/VehiclePage'

function App() {
  return (
    <>
      <Navbar />
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
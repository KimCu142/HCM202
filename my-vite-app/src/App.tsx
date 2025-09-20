import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Ideology from './pages/Ideology'
import Practice from './pages/Practice'
import References from './pages/References'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/ideology" element={<Ideology />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/references" element={<References />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App

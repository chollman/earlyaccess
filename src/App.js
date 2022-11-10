import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SharedLayout from './components/SharedLayout'
import Contact from './pages/contact'
import Home from './pages/home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='contacto' element={<Contact />} />
        </Route>

        <Route path='testing' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

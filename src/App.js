import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SharedLayout from './components/SharedLayout'
import Home from './pages/home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path='testing' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

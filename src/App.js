import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SharedLayout from './components/shared-layout'

import { Home, Contact, SingleArticle } from './pages'

import './styles/app.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='contacto' element={<Contact />} />
          <Route path='/articulo/:articleId' element={<SingleArticle />} />
          <Route path='*' element={<h1>Error 404</h1>} />
        </Route>
        <Route path='testing' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

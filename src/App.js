import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SharedLayout } from './components'
import { Home, Contact, SingleArticle, Error404, ComingSoon } from './pages'
import './styles/app.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='contacto' element={<Contact />} />
          <Route path='proximamente' element={<ComingSoon />} />
          <Route path='/articulo/:articleId' element={<SingleArticle />} />
        </Route>
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

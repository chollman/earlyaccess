import React from 'react'
import { Link } from 'react-router-dom'
import Image404 from '../../styles/images/404.svg'
import './404.scss'

const Error404 = () => {
  return (
    <div className='error-404'>
      <img src={Image404} width='300' alt='404' />
      <h1>404</h1>
      <h2>No encontramos la página</h2>
      <Link to='/'>Volver a las noticias</Link>
    </div>
  )
}

export default Error404

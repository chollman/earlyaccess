import React from 'react'
//import PropTypes from 'prop-types'
import './navbar.scss'
import { socialMedia } from './social-media'

const Navbar = (props) => {
  return (
    <nav className='navbar'>
      <h3> Tuki </h3>
      <ul>
        <li>Noticias</li>
        <li>Recomendado</li>
        <li>Contacto</li>
      </ul>
      <ul >
        {socialMedia.map(({ id, url, icon }) => {
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

//Navbar.propTypes = {}

export default Navbar

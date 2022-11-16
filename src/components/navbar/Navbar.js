import React from 'react'
//import PropTypes from 'prop-types'
import './navbar.scss'
import { socialMedia } from '../../utils/social-media'
import { Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'

const Navbar = (props) => {
  return (
    <nav className='navbar'>
      <h3> Tuki </h3>
      <ul>
        <Link to='/' className='link'>
          Últimas noticias
        </Link>
        <Link to='/contacto' className='link'>
          asd
        </Link>
        <Link to='/contacto' className='link'>
          Nosotros
        </Link>
      </ul>
      <ul>
        <div className='search-container'>
          <BsSearch />
          <input
            className='search'
            type='text'
            placeholder='¿Que estas buscando?'
          />
        </div>
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

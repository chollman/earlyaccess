import React from 'react'
//import PropTypes from 'prop-types'
import './navbar.scss'
import { socialMedia } from '../../utils/social-media'
import { NavLink } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import Nav from 'react-bootstrap/Nav'
import { Navbar } from 'react-bootstrap'

const Naavbar = () => {
  return (
    <Navbar collapseOnSelect expand='lg'>
      <Navbar.Toggle className='cambiame'>
        <BsSearch />
      </Navbar.Toggle>
      <Navbar.Collapse>
        <Nav className='container'>
          <h3>Tuki</h3>
          <div className='link-container'>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'active' : 'link')}
            >
              Últimas noticias
            </NavLink>
            <NavLink
              to='/saracatunga'
              className={({ isActive }) => (isActive ? 'active' : 'link')}
            >
              afndsfjsd
            </NavLink>
            <NavLink
              to='/contacto'
              className={({ isActive }) => (isActive ? 'active' : 'link')}
            >
              Nosotros
            </NavLink>
          </div>
          <div className='social-container'>
            {socialMedia.map(({ id, url, icon }) => {
              return (
                <li key={id}>
                  <a href={url} className='social-icon'>
                    {icon}
                  </a>
                </li>
              )
            })}
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Naavbar

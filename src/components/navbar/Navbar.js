import React from 'react'
//import PropTypes from 'prop-types'
import './navbar.scss'
import { socialMedia } from '../../utils/social-media'
import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import { Navbar } from 'react-bootstrap'
import { navbarLinks } from '../../utils/navbar-links'

const Naavbar = () => {
  return (
    <Navbar collapseOnSelect expand='lg'>
      <Navbar.Toggle className='cambiame'>
      </Navbar.Toggle>
      <Navbar.Collapse>
        <Nav className='container'>
          <h3>Tuki</h3>
          <div className='link-container'>
            {navbarLinks.map(({ id, title, url }) => {
              return (
                <NavLink key={id}
                  to={url}
                  className={({ isActive }) => (isActive ? 'active' : 'link')}
                >
                  {title}
                </NavLink>
              )
            })}
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

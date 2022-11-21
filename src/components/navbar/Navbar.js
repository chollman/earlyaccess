import React, { useState } from 'react'
//import PropTypes from 'prop-types'
import './navbar.scss'
import { socialMedia } from '../../utils/social-media'
import { Link, NavLink } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { Navbar, NavbarBrand } from 'react-bootstrap'

import NavDropdown from 'react-bootstrap/NavDropdown'

const Naavbar = (props) => {
  const [styledLink, setStyledLink] = useState(false)
  return (
    <Navbar collapseOnSelect expand='lg'>
      <Navbar.Toggle className='cambiame'>
        <BsSearch />
      </Navbar.Toggle>
      <Navbar.Collapse>
        <Nav className='container'>
          <h3>Tuki</h3>
          <div className='link-container'>
            <NavLink to='/' className='link' activeClassName='active'>
              Últimas noticias
            </NavLink>
            <Link to='/contacto' className='link'>
              afndsfjsd
            </Link>
            <Link to='/contacto' className='link'>
              Nosotros
            </Link>
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
//let colors = ['#ff0000', '#00ff00', '#0000ff']
//let random_color = colors[Math.floor(Math.random() * colors.length)]
//document.getElementById('social-icon').style.color = random_color
//Navbar.propTypes = {}

export default Naavbar

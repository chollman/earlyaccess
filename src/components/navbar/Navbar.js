import React from 'react'
import './navbar.scss'
import { socialMedia } from '../../utils/social-media'
import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import { Navbar } from 'react-bootstrap'
import { navbarLinks } from '../../utils/navbar-links'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Logo from '../../styles/images/logo.png'

const Naavbar = () => {
  return (
    <Container className='navbar-wrapper'>
      <Row>
        <Col>
          <Navbar collapseOnSelect expand='lg'>
            <Navbar.Brand href='#home'>
              <img src={Logo} width='90' alt='Early Access Logo' />
            </Navbar.Brand>
            <Navbar.Toggle className='cambiame'></Navbar.Toggle>
            <Navbar.Collapse>
              <Nav className='content'>
                <div className='link-container'>
                  {navbarLinks.map(({ id, title, url }) => {
                    return (
                      <NavLink
                        key={id}
                        to={url}
                        className={({ isActive }) =>
                          isActive ? 'active link' : 'link'
                        }
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
        </Col>
      </Row>
    </Container>
  )
}

export default Naavbar

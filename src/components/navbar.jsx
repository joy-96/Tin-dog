import React, { Component } from 'react'
import NavLink from './nav-link'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class NavBr extends Component {
    render(){
    return (
        <div className="nav-position">
    
    <Navbar className="navbar" variant="dark">
  <Navbar.Brand className="brand" href="#home">Tindog</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
    <Nav >
      <NavLink name={'Contact'} url={'#home'} />
      <NavLink name={'Price'} url={'#product'} />
      <NavLink name={'Download'} url={'#cart'} />
      </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
    }
}

export default NavBr

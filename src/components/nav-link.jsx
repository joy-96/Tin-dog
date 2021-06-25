import React from 'react'

import Nav from 'react-bootstrap/Nav'

const NavLink = props => {
    return (
        <Nav.Link className="nav-item" href={props.url}>{props.name}</Nav.Link>
    )
}

export default NavLink

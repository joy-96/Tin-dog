import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <footer className="footer">
            <a className="footer-color footer-icon" href="#facebook"> <FontAwesomeIcon icon={faFacebookSquare} /> </a>
            <a className="footer-color footer-icon" href="#twitter"> <FontAwesomeIcon icon={faTwitterSquare} /> </a>
            <a className="footer-color footer-icon" href="#instagram"> <FontAwesomeIcon icon={faInstagramSquare} /> </a>
            <a className="footer-color" href="#email">  <FontAwesomeIcon icon={faEnvelope} /> </a>

            <p>Copyright © 2021 TinDog</p>

        </footer>
    )
}

export default Footer

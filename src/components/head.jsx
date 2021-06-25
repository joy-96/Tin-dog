import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faWindows } from '@fortawesome/free-brands-svg-icons'

import image from './image/iphone6.png';

const Head = () => {
    return (
        <div className="container">
            <div className= "row">
                <div class= "col-lg-6">
                    <h1 className="title-head">Meet new and interesting dogs nearby.</h1>
                    <button type="button" className="btn btn-dark download-button"> <FontAwesomeIcon icon={faApple} /> Download</button>
                    <button type="button" className="btn btn-outline-light download-button"> <FontAwesomeIcon icon={faWindows} /> Download</button>
                </div>
                <div class= "col-lg-6">
                    <img className="title-image" src={image} alt="iphone-mockup" />
                </div>
            </div>
        </div>
    )
}

export default Head

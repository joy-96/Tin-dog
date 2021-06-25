import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faWindows } from '@fortawesome/free-brands-svg-icons'

const Action = () => {
    return (
        <section className="cta">

        <h3 class="cta-font">Find the True Love of Your Dog's Life Today.</h3>
        <button type="button" class="btn btn-dark download-button"> <FontAwesomeIcon icon={faApple} /> Download</button>
        <button type="button" class="btn btn-outline-light download-button"> <FontAwesomeIcon icon={faWindows} /> Download</button>
    
      </section>
    )
}

export default Action

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCheckCircle, faBullseye } from '@fortawesome/free-solid-svg-icons'

const Features = () => {
    return (
        <section className="features">

        <div class="row">
        <div class="feature-box col-lg-4">
        <FontAwesomeIcon className="fas" icon={faCheckCircle} size="4x" />
          <h3>Easy to use.</h3>
          <p>So easy to use, even your dog could do it.</p>
        </div>
        <div class="feature-box col-lg-4">
        <FontAwesomeIcon className="fas" icon={faBullseye} size="4x" />
          <h3>Elite Clientele</h3>
          <p>We have all the dogs, the greatest dogs.</p>
        </div>
        <div class="feature-box col-lg-4">
        <FontAwesomeIcon className="fas" icon={faHeart} size="4x" />
          <h3>Guaranteed to work.</h3>
          <p>Find the love of your dog's life or your money back.</p>
        </div>
    </div>
    
      </section>
    )
}

export default Features

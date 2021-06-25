import React from 'react'

import Carousel from 'react-bootstrap/Carousel'

import image1 from './image/dog-img.jpg';
import image2 from './image/lady-img.jpg';

const Testimonials = () => {
    return (
        <section className="testimonials">

<div>
<Carousel>
  <Carousel.Item>

    
      <h2>I no longer have to sniff other dogs for love.I feel alone. I've found the hottest Corgi on TinDog. Woof. </h2>
      <img 
        className="testimonial-image" src={image1} alt="dog-profile" 
      />
      <em>Pebbles, New York</em>
    
  </Carousel.Item>
  <Carousel.Item>

    
      <h2>My dog used to be so lonely, but with TinDog's help, they've found the love of their life. I think.</h2>
      <img 
        className="testimonial-image" src={image2} alt="lady-profile" 
      />
      <em>Beverly, Illinois</em>
    
  </Carousel.Item>
  </Carousel>
</div>
    
      </section>
    )
}

export default Testimonials

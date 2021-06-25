import React from 'react'
import PriceCard from './price-card'

const Price = () => {
    return (
        <section className="pricing">

        <h2>A Plan for Every Dog's Needs</h2>
        <p>Simple and affordable price plans for your and your dog.</p>
    
        <div className="row">
          <div className="pricing-column col-lg-4">

            <PriceCard 
              planName={'Basic'} 
              price={'Free'} 
              line1={'No Pirority Listing'} 
              line2={'5 Matches Per Day'} 
              line3={'10 Messages Per Day'} 
              line4={'Unlimited App Usage'} />
          </div>

          <div className="pricing-column col-lg-4">

            <PriceCard 
              planName={'Standard'} 
              price={'$49 /mo'} 
              line1={'No Pirority Listing'} 
              line2={'Unlimited Matches'} 
              line3={'Unlimited Messages'} 
              line4={'Unlimited App Usage'} />
          </div>

          <div className="pricing-column col-lg-4">

            <PriceCard 
              planName={'Premium'} 
              price={'$99 /mo'} 
              line1={'Pirority Listing'} 
              line2={'Unlimited Matches'} 
              line3={'Unlimited Messages'} 
              line4={'Unlimited App Usage'} />
          </div>

        </div>
      </section>
    )
}

export default Price

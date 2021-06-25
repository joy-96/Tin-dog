import React from 'react'

const PriceCard = props => {
    return (
        <div className="card">
        <div className="card-header">
            <h3>{props.planName}</h3>
        </div>
    
        <div className="card-body">
          <h2>{props.price}</h2>
          <p>{props.line1}</p>
          <p>{props.line2}</p>
          <p>{props.line3}</p>
          <p>{props.line4}</p>
          <button type="button" className="btn btn-outline-secondary btn-block btn-lg">Sign Up</button>
        </div>
    </div>
    )
}

export default PriceCard

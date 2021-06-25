import React from 'react'
import image1 from './image/mashable.png';
import image2 from './image/tnw.png';
import image3 from './image/bizinsider.png';
import image4 from './image/mashable.png';

const Press = () => {
    return (
        <section className="press">
        <img className="press-logo" src={image1} alt="techCrunch-logo" />
        <img className="press-logo" src={image2} alt="tnw-logo" />
        <img className="press-logo" src={image3} alt="biz-insider-logo" />
        <img className="press-logo" src={image4} alt="mashable-logo" />
    
      </section>
    )
}

export default Press

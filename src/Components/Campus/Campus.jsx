import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/gallery_1.jfif'
import gallery_2 from '../../assets/gallery_2.jfif'
import gallery_3 from '../../assets/gallery_3.jfif'
import gallery_4 from '../../assets/gallery_4.jpg'
import white_arrow from '../../assets/white_arrow.png'



const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery_1} alt="error" />
        <img src={gallery_2} alt="error" />
        <img src={gallery_3} alt="error" />
        <img src={gallery_4} alt="error" />
      </div>
      <button className='btn dark-btn'>See more here <img src={white_arrow} alt="-->" /></button>
    </div>
  )
}

export default Campus

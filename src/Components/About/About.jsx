import React from 'react'
import './About.css'
import about from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about} alt="error" className='about' />
        <img src={play_icon} alt="error"  className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className='about-right'>
        <h3>About Organisation</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis tempora laudantium iste ullam, adipisci sed repudiandae cumque atque illum? Nostrum?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio cumque culpa laborum itaque qui cum ut iusto nobis nesciunt ipsam, rerum, quae amet blanditiis aut?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquid, nesciunt, sed ab molestiae earum facere minima assumenda cupiditate, illum esse obcaecati ea voluptates id alias iusto illo! Amet, voluptas.</p>
      </div>
    </div>
  )
}

export default About

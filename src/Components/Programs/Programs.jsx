import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program_1.jpg'
import program_2 from '../../assets/program_2.jpg'
import program_3 from '../../assets/program_3.jpeg'
import Program_icon_1 from '../../assets/program_icon_1.png'
import Program_icon_2 from '../../assets/program_icon_2.png'
import Program_icon_3 from '../../assets/program_icon_3.png'


const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program_1} alt="error" />
        <div className="caption">
            <img src={Program_icon_1} alt="error" />
            <p>Graphic Designer</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="error" />
        <div className="caption">
            <img src={Program_icon_2} alt="error" />
            <p>Software Enineering</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="error" />
        <div className="caption">
            <img src={Program_icon_3} alt="error" />
            <p>AI Eninger</p>
        </div>
      </div>
    </div>
  )
}

export default Programs

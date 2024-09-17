import React from 'react';
import './Programs.css';
import program_1 from '../../assets/program_1.jpg';
import program_2 from '../../assets/program_2.jpg';
import program_3 from '../../assets/program_3.jpeg';
import program_icon_1 from '../../assets/program_icon_1.png';
import program_icon_2 from '../../assets/program_icon_2.png';
import program_icon_3 from '../../assets/program_icon_3.png';

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program_1} alt="Graphic Designer Program" />
        <div className="caption">
          <img src={program_icon_1} alt="Graphic Design Icon" />
          <p>Graphic Designer</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="Software Engineering Program" />
        <div className="caption">
          <img src={program_icon_2} alt="Software Engineering Icon" />
          <p>Software Engineering</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="AI Engineer Program" />
        <div className="caption">
          <img src={program_icon_3} alt="AI Engineering Icon" />
          <p>AI Engineer</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;

import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next_icon.png'
import back_icon from '../../assets/back_icon.png'
import user_1 from '../../assets/user_1.jpg'
import user_2 from '../../assets/user_2.jpg'
import user_3 from '../../assets/user_3.jpg'
import user_4 from '../../assets/user_4.png'
import user_5 from '../../assets/user_5.png'
import user_6 from '../../assets/user_6.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;
    
    const slideForward = () => {
        if(tx > -50){
            tx -=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = () => {
        if(tx < 0){
            tx +=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    return (
        <div>
            <div className="Testimonials">
                <img src={next_icon} alt="error" className='next-btn' onClick={slideForward} />
                <img src={back_icon} alt="error" className='back-btn' onClick={slideBackward} />
                <div className="slider">
                    <ul ref={slider}>
                        <li>
                            <div className="slide">
                                <div className="user-info">
                                    <img src={user_1} alt="error" />
                                    <div>
                                        <h3>Scarlett Johansson</h3>
                                        <span>Edusity,USA</span>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate commodi explicabo voluptate dolor voluptatibus amet, veniam odio magni totam iure corrupti, maiores quae pariatur consequuntur!</p>
                            </div>
                        </li>
                        <li>
                            <div className="slide">
                                <div className="user-info">
                                    <img src={user_2} alt="error" />
                                    <div>
                                        <h3>Megan Fox</h3>
                                        <span>HP,USA</span>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate commodi explicabo voluptate dolor voluptatibus amet, veniam odio magni totam iure corrupti, maiores quae pariatur consequuntur!</p>
                            </div>
                        </li>
                        <li>
                            <div className="slide">
                                <div className="user-info">
                                    <img src={user_3} alt="error" />
                                    <div>
                                        <h3>Zaid Saifi</h3>
                                        <span>Eduverse,INDIA</span>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate commodi explicabo voluptate dolor voluptatibus amet, veniam odio magni totam iure corrupti, maiores quae pariatur consequuntur!</p>
                            </div>
                        </li>
                        <li>
                            <div className="slide">
                                <div className="user-info">
                                    <img src={user_4} alt="error" />
                                    <div>
                                        <h3>Harshit Sharma</h3>
                                        <span>Sazerac,USA</span>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate commodi explicabo voluptate dolor voluptatibus amet, veniam odio magni totam iure corrupti, maiores quae pariatur consequuntur!</p>
                            </div>
                        </li>
                        {/* <li>
                            <div className="slide">
                                <div className="user-info">
                                    <img src={user_5} alt="error" />
                                    <div>
                                        <h3>Disha</h3>
                                        <span>Amazon,USA</span>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate commodi explicabo voluptate dolor voluptatibus amet, veniam odio magni totam iure corrupti, maiores quae pariatur consequuntur!</p>
                            </div>
                        </li> */}
                        {/* <li> 
                            <div className="slide">
                                <div className="user-info">
                                    <img src={user_6} alt="error" />
                                    <div>
                                        <h3>Dimple</h3>
                                        <span>Microsoft,USA</span>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate commodi explicabo voluptate dolor voluptatibus amet, veniam odio magni totam iure corrupti, maiores quae pariatur consequuntur!</p>
                            </div>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Testimonials

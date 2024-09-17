import React from 'react'
import './Contact.css'
import message_icon from '../../assets/message_icon.png'
import email_icon from '../../assets/email_icon.png'
import phone_icon from '../../assets/phone_icon.png'
import location_icon from '../../assets/location_icon.png'
import white_arrow from '../../assets/white_arrow.png'

const Contact = () => {
    
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "41626d51-f68a-4fb9-847b-627729a59245");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };





  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src= {message_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below.Your feedback,questions and suggestions are important to us as we strive to provider exceptiona; service to our community</p>
        <ul>
            <li><img src={email_icon} alt="error" />Contact@Eduverse.dev</li>
            <li><img src={phone_icon} alt="error" />+011- 81789784</li>
            <li><img src={location_icon} alt="error" />15 massachusettts Ave,cambridge<br/> MA 02139, United States</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>YOur name</label>
            <input type="text" name="name" placeholder='Enter your name' required />
            <label>Phone Number </label>
            <input type="tel" name="phone" placeholder='Enter your mobile number' required/>
            <label>Write your message here </label>
            <textarea name="message" rows="6" placeholder='enter your message' required></textarea>
            <button type="submit" className='btn dark-btn'>Submit now <img src={white_arrow} alt="error" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact

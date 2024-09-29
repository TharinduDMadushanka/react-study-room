import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

    // get email respons code from web3forms site 

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "e867c786-1bc1-47c6-b327-18ffa9c54395");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
        //   console.log("Success", res);
            alert(res.message)
        }
      };


  return (
    <div id='contact' className='contact'>
        
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>

        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>
                  I'm always open to discussing new projects, creative ideas, or opportunities to collaborate. 
                  Whether you have a question or just want to say hello, feel free to reach out,
                  and I'll get back to you as soon as possible!
                </p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" />
                        <p>tharindudmadushanka920@gmail.com</p>
                    </div>

                    <div className="contact-detail">
                        <img src={call_icon} alt="" />
                        <p>076 2791821</p>
                    </div>

                    <div className="contact-detail">
                        <img src={location_icon} alt="" />
                        <p>Galle, Sri Lanka</p>
                    </div>
                </div>
            </div>

            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter you email' name='email'/>

                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows='6' placeholder='Enter you message'></textarea>

                <button type='submit' className="contact-submit">Submit now</button>
            </form>
        </div>

    </div>
  )
}

export default Contact
